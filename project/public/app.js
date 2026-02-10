const DIRECTIONS = ['Bullish', 'Bearish', 'Any'];
const WICK_INTERACTIONS = [
  'Ignore',
  'Took previous HIGH',
  'Took previous LOW',
  'Took BOTH previous HIGH & LOW',
  'Took NONE (inside candle)'
];
const CLOSE_POSITIONS = [
  'Ignore',
  'Closed ABOVE previous HIGH',
  'Closed BELOW previous LOW',
  'Closed INSIDE previous range',
  'Took previous HIGH but CLOSED BELOW previous HIGH',
  'Took previous LOW but CLOSED ABOVE previous LOW'
];

const metricLabels = {
  take_high: 'Take High',
  take_low: 'Take Low',
  close_above_high: 'Close Above High',
  close_below_low: 'Close Below Low',
  took_both: 'Took Both',
  took_none: 'Took None'
};

const sequence = [createDefaultRule()];

const builderEl = document.getElementById('builder');
const addBtn = document.getElementById('addCandleBtn');
const removeBtn = document.getElementById('removeCandleBtn');
const runBtn = document.getElementById('runAnalysisBtn');
const resultsGridEl = document.getElementById('resultsGrid');
const sampleBoxEl = document.getElementById('sampleBox');
const statusTextEl = document.getElementById('statusText');
const errorBoxEl = document.getElementById('errorBox');
const visualDisplayEl = document.getElementById('visualDisplay');
const nextBiasEl = document.getElementById('nextBias');

function createDefaultRule() {
  return {
    direction: 'Any',
    wickInteraction: 'Ignore',
    closePosition: 'Ignore'
  };
}

function optionMarkup(options, selected) {
  return options
    .map((option) => `<option value="${option}" ${selected === option ? 'selected' : ''}>${option}</option>`)
    .join('');
}

function renderBuilder() {
  builderEl.innerHTML = sequence
    .map(
      (rule, index) => `
      <div class="candle-block" data-index="${index}">
        <h3>C${index + 1}</h3>
        <div class="field">
          <label>Direction</label>
          <select data-field="direction">${optionMarkup(DIRECTIONS, rule.direction)}</select>
        </div>
        <div class="field">
          <label>Wick/Sweep interaction with PREVIOUS candle</label>
          <select data-field="wickInteraction">${optionMarkup(WICK_INTERACTIONS, rule.wickInteraction)}</select>
        </div>
        <div class="field">
          <label>Close position relative to PREVIOUS candle</label>
          <select data-field="closePosition">${optionMarkup(CLOSE_POSITIONS, rule.closePosition)}</select>
        </div>
      </div>
    `
    )
    .join('');

  addBtn.disabled = sequence.length >= 4;
  removeBtn.disabled = sequence.length <= 1;

  builderEl.querySelectorAll('.candle-block').forEach((block) => {
    const index = Number(block.dataset.index);
    block.querySelectorAll('select').forEach((select) => {
      select.addEventListener('change', (event) => {
        const field = event.target.dataset.field;
        sequence[index][field] = event.target.value;
        renderVisualDisplay();
      });
    });
  });
}

function renderVisualDisplay(probabilities = null) {
  const cards = sequence
    .map((rule, index) => {
      const directionClass = rule.direction === 'Bullish' ? 'bullish' : rule.direction === 'Bearish' ? 'bearish' : 'any';
      const anchorTag = index === sequence.length - 1 ? '<div class="anchor-tag">ANCHOR</div>' : '';
      return `
        <div class="candle-card ${directionClass}">
          <strong>C${index + 1}</strong>
          <div>${rule.direction}</div>
          ${anchorTag}
        </div>
      `;
    })
    .join('');

  const nextCard = `
    <div class="candle-card next">
      <strong>NEXT</strong>
      <div>Post-Anchor Candle</div>
    </div>
  `;

  visualDisplayEl.innerHTML = cards + nextCard;

  if (!probabilities) {
    nextBiasEl.textContent = 'NEXT bias: N/A';
    return;
  }

  if (probabilities.take_high > probabilities.take_low) {
    nextBiasEl.textContent = `NEXT bias: Higher chance to take ANCHOR HIGH (${probabilities.take_high}% vs ${probabilities.take_low}%)`;
  } else if (probabilities.take_low > probabilities.take_high) {
    nextBiasEl.textContent = `NEXT bias: Higher chance to take ANCHOR LOW (${probabilities.take_low}% vs ${probabilities.take_high}%)`;
  } else {
    nextBiasEl.textContent = `NEXT bias: Balanced (${probabilities.take_high}% / ${probabilities.take_low}%)`;
  }
}

function renderResults(result) {
  sampleBoxEl.textContent = `Sample size: ${result.sample}`;
  resultsGridEl.innerHTML = Object.entries(result.probabilities)
    .map(
      ([key, value]) => `
      <div class="result-card">
        <div class="label">${metricLabels[key]}</div>
        <div class="value">${value.toFixed(2)}%</div>
      </div>
    `
    )
    .join('');

  renderVisualDisplay(result.probabilities);
}

function showError(message) {
  errorBoxEl.textContent = message;
  errorBoxEl.classList.remove('hidden');
}

function hideError() {
  errorBoxEl.classList.add('hidden');
  errorBoxEl.textContent = '';
}

async function loadStatus() {
  try {
    const response = await fetch('/api/status');
    const data = await response.json();
    statusTextEl.textContent = `Loaded candles: ${data.totalCandles}`;
  } catch {
    statusTextEl.textContent = 'Unable to load status.';
  }
}

async function runAnalysis() {
  hideError();

  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sequence })
    });

    const data = await response.json();
    if (!response.ok) {
      showError(data.error || 'Analysis failed');
      return;
    }

    renderResults(data);
  } catch {
    showError('Unable to connect to API.');
  }
}

addBtn.addEventListener('click', () => {
  if (sequence.length < 4) {
    sequence.push(createDefaultRule());
    renderBuilder();
    renderVisualDisplay();
  }
});

removeBtn.addEventListener('click', () => {
  if (sequence.length > 1) {
    sequence.pop();
    renderBuilder();
    renderVisualDisplay();
  }
});

runBtn.addEventListener('click', runAnalysis);

renderBuilder();
renderVisualDisplay();
loadStatus();
