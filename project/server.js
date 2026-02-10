import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const ALLOWED_DIRECTIONS = ['Bullish', 'Bearish', 'Any'];
const ALLOWED_WICK_INTERACTIONS = [
  'Ignore',
  'Took previous HIGH',
  'Took previous LOW',
  'Took BOTH previous HIGH & LOW',
  'Took NONE (inside candle)'
];
const ALLOWED_CLOSE_POSITIONS = [
  'Ignore',
  'Closed ABOVE previous HIGH',
  'Closed BELOW previous LOW',
  'Closed INSIDE previous range',
  'Took previous HIGH but CLOSED BELOW previous HIGH',
  'Took previous LOW but CLOSED ABOVE previous LOW'
];

let candles = [];

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseCsvLine(line) {
  const parts = line.split(',').map((p) => p.trim());
  if (parts.length < 6) {
    return null;
  }

  const [date, time, openRaw, highRaw, lowRaw, closeRaw] = parts;
  const open = toNumber(openRaw);
  const high = toNumber(highRaw);
  const low = toNumber(lowRaw);
  const close = toNumber(closeRaw);

  if (!date || !time || open === null || high === null || low === null || close === null) {
    return null;
  }

  const timestamp = new Date(`${date}T${time}`).getTime();
  if (!Number.isFinite(timestamp)) {
    return null;
  }

  return { timestamp, date, time, open, high, low, close };
}

async function loadCandles() {
  const dataDir = path.join(__dirname, 'data');
  let entries = [];
  try {
    entries = await fs.readdir(dataDir, { withFileTypes: true });
  } catch {
    candles = [];
    return;
  }

  const csvFiles = entries.filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.csv'));

  const allCandles = [];
  for (const file of csvFiles) {
    const fullPath = path.join(dataDir, file.name);
    const content = await fs.readFile(fullPath, 'utf8');
    const lines = content.split(/\r?\n/).filter((line) => line.trim().length > 0);

    for (const line of lines) {
      if (/^\s*date\s*,\s*time\s*,\s*open\s*,\s*high\s*,\s*low\s*,\s*close\s*$/i.test(line)) {
        continue;
      }
      const candle = parseCsvLine(line);
      if (candle) {
        allCandles.push(candle);
      }
    }
  }

  allCandles.sort((a, b) => a.timestamp - b.timestamp);
  candles = allCandles;
}

function matchesDirection(current, direction) {
  if (direction === 'Any') return true;
  if (direction === 'Bullish') return current.close > current.open;
  if (direction === 'Bearish') return current.close < current.open;
  return false;
}

function matchesWickInteraction(current, previous, wickInteraction) {
  if (wickInteraction === 'Ignore') return true;
  if (!previous) return false;

  const tookHigh = current.high > previous.high;
  const tookLow = current.low < previous.low;

  if (wickInteraction === 'Took previous HIGH') return tookHigh;
  if (wickInteraction === 'Took previous LOW') return tookLow;
  if (wickInteraction === 'Took BOTH previous HIGH & LOW') return tookHigh && tookLow;
  if (wickInteraction === 'Took NONE (inside candle)') return !tookHigh && !tookLow;
  return false;
}

function matchesClosePosition(current, previous, closePosition) {
  if (closePosition === 'Ignore') return true;
  if (!previous) return false;

  const tookHigh = current.high > previous.high;
  const tookLow = current.low < previous.low;

  if (closePosition === 'Closed ABOVE previous HIGH') {
    return current.close > previous.high;
  }
  if (closePosition === 'Closed BELOW previous LOW') {
    return current.close < previous.low;
  }
  if (closePosition === 'Closed INSIDE previous range') {
    return current.close >= previous.low && current.close <= previous.high;
  }
  if (closePosition === 'Took previous HIGH but CLOSED BELOW previous HIGH') {
    return tookHigh && current.close < previous.high;
  }
  if (closePosition === 'Took previous LOW but CLOSED ABOVE previous LOW') {
    return tookLow && current.close > previous.low;
  }

  return false;
}

function matchesRule(current, previous, rule) {
  return (
    matchesDirection(current, rule.direction) &&
    matchesWickInteraction(current, previous, rule.wickInteraction) &&
    matchesClosePosition(current, previous, rule.closePosition)
  );
}

function validateSequence(sequence) {
  if (!Array.isArray(sequence)) {
    return 'sequence must be an array';
  }

  if (sequence.length < 1 || sequence.length > 4) {
    return 'sequence length must be between 1 and 4';
  }

  for (let i = 0; i < sequence.length; i += 1) {
    const item = sequence[i];
    if (!item || typeof item !== 'object') {
      return `sequence[${i}] must be an object`;
    }

    if (!ALLOWED_DIRECTIONS.includes(item.direction)) {
      return `sequence[${i}].direction is invalid`;
    }

    if (!ALLOWED_WICK_INTERACTIONS.includes(item.wickInteraction)) {
      return `sequence[${i}].wickInteraction is invalid`;
    }

    if (!ALLOWED_CLOSE_POSITIONS.includes(item.closePosition)) {
      return `sequence[${i}].closePosition is invalid`;
    }
  }

  return null;
}

function analyze(sequence) {
  const outcomes = {
    take_high: 0,
    take_low: 0,
    close_above_high: 0,
    close_below_low: 0,
    took_both: 0,
    took_none: 0
  };

  let sample = 0;

  for (let start = 0; start < candles.length; start += 1) {
    const anchorIndex = start + sequence.length - 1;
    const nextIndex = anchorIndex + 1;

    if (anchorIndex >= candles.length || nextIndex >= candles.length) {
      continue;
    }

    let matched = true;

    for (let offset = 0; offset < sequence.length; offset += 1) {
      const currentIndex = start + offset;
      const current = candles[currentIndex];
      const previous = offset === 0 ? candles[currentIndex - 1] : candles[currentIndex - 1];
      const rule = sequence[offset];

      if (!matchesRule(current, previous, rule)) {
        matched = false;
        break;
      }
    }

    if (!matched) {
      continue;
    }

    sample += 1;

    const anchor = candles[anchorIndex];
    const next = candles[nextIndex];

    const takeHigh = next.high > anchor.high;
    const takeLow = next.low < anchor.low;

    if (takeHigh) outcomes.take_high += 1;
    if (takeLow) outcomes.take_low += 1;
    if (next.close > anchor.high) outcomes.close_above_high += 1;
    if (next.close < anchor.low) outcomes.close_below_low += 1;
    if (takeHigh && takeLow) outcomes.took_both += 1;
    if (!takeHigh && !takeLow) outcomes.took_none += 1;
  }

  const probabilities = Object.fromEntries(
    Object.entries(outcomes).map(([key, count]) => [key, sample === 0 ? 0 : Number(((count / sample) * 100).toFixed(2))])
  );

  return { sample, probabilities };
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (_req, res) => {
  res.json({ totalCandles: candles.length });
});

app.post('/api/analyze', (req, res) => {
  const { sequence } = req.body ?? {};
  const validationError = validateSequence(sequence);
  if (validationError) {
    res.status(400).json({ error: validationError });
    return;
  }

  const result = analyze(sequence);
  res.json(result);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: 'Internal server error', details: err?.message || 'Unknown error' });
});

loadCandles().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
});
