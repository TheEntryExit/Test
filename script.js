const firms = [
  {
    name: "Atlas Funding",
    tagline: "Instant forex funding with raw spreads.",
    firmType: "CFD",
    marketType: ["Forex", "Indices", "Commodities"],
    accountType: ["Instant Funding"],
    accountSize: ["$25k / $50k", "$100k"],
    evaluationFee: ["$100–$300"],
    drawdownType: ["Static", "Equity-Based"],
    maxDrawdown: ["6%"],
    dailyDrawdownRule: "Yes",
    trailingStopsAtBE: "No",
    profitTarget: ["5%"],
    profitSplit: ["80/20", "Scaling to 100%"],
    firstPayoutTime: ["14 days"],
    minTradingDays: ["5"],
    payoutFrequency: ["Bi-weekly"],
    payoutCap: ["No cap"],
    consistencyRule: ["None"],
    newsTradingAllowed: "Yes",
    weekendHolding: "Allowed",
    overnightHolding: "Allowed",
    eaBotTrading: "Allowed",
    copyTrading: "Allowed",
    scalpingAllowed: "Yes",
    minTradeDuration: ["No limit"],
    hedgingAllowed: "Yes",
    martingaleGrid: "Not Allowed",
    tradingPlatform: ["MT5", "cTrader"],
    brokerTransparency: ["Real broker"],
    slippageSpreadType: ["Raw"],
    countryRestrictions: ["US Allowed"],
    companyAge: ["3+ years"],
    scalingPlan: "Yes",
    refundableFee: "Yes",
    affiliateLink: "#",
  },
  {
    name: "Pioneer Futures",
    tagline: "Futures challenges with fast payouts.",
    firmType: "FUTURES",
    marketType: ["Futures"],
    accountType: ["One-Phase Challenge", "Two-Phase Challenge"],
    accountSize: ["$25k / $50k", "$100k", "$200k+"],
    evaluationFee: ["$300+"],
    drawdownType: ["End-of-Day", "Balance-Based"],
    maxDrawdown: ["8%"],
    dailyDrawdownRule: "No",
    trailingStopsAtBE: "Yes",
    profitTarget: ["8%", "10%"],
    profitSplit: ["90/10"],
    firstPayoutTime: ["7 days"],
    minTradingDays: ["0"],
    payoutFrequency: ["Weekly"],
    payoutCap: ["Unlimited"],
    consistencyRule: ["20%"],
    newsTradingAllowed: "Yes",
    weekendHolding: "Not Allowed",
    overnightHolding: "Not Allowed",
    eaBotTrading: "Restricted",
    copyTrading: "Not Allowed",
    scalpingAllowed: "Yes",
    minTradeDuration: ["1 min"],
    hedgingAllowed: "No",
    martingaleGrid: "Not Allowed",
    tradingPlatform: ["NinjaTrader", "Tradovate"],
    brokerTransparency: ["Simulated environment"],
    slippageSpreadType: ["Variable"],
    countryRestrictions: ["US Not Allowed"],
    companyAge: ["1–3 years"],
    scalingPlan: "Yes",
    refundableFee: "No",
    affiliateLink: "#",
  },
  {
    name: "Summit Prop",
    tagline: "Two-phase forex evaluation with strict consistency rules.",
    firmType: "CFD",
    marketType: ["Forex", "Crypto"],
    accountType: ["Two-Phase Challenge"],
    accountSize: ["$5k / $10k", "$25k / $50k", "$100k"],
    evaluationFee: ["$50–$100"],
    drawdownType: ["Trailing", "Equity-Based"],
    maxDrawdown: ["4%"],
    dailyDrawdownRule: "Yes",
    trailingStopsAtBE: "Yes",
    profitTarget: ["10%"],
    profitSplit: ["80/20"],
    firstPayoutTime: ["30 days"],
    minTradingDays: ["10"],
    payoutFrequency: ["Monthly"],
    payoutCap: ["$5k–$10k"],
    consistencyRule: ["30%"],
    newsTradingAllowed: "No",
    weekendHolding: "Not Allowed",
    overnightHolding: "Allowed",
    eaBotTrading: "Not Allowed",
    copyTrading: "Not Allowed",
    scalpingAllowed: "No",
    minTradeDuration: ["5 min"],
    hedgingAllowed: "No",
    martingaleGrid: "Not Allowed",
    tradingPlatform: ["MT4", "MT5"],
    brokerTransparency: ["Not disclosed"],
    slippageSpreadType: ["Fixed"],
    countryRestrictions: ["EU Allowed"],
    companyAge: ["3+ years"],
    scalingPlan: "No",
    refundableFee: "Yes",
    affiliateLink: "#",
  },
  {
    name: "Velocity Funds",
    tagline: "Fast-track evaluation with flexible trading rules.",
    firmType: "CFD",
    marketType: ["Forex", "Indices", "Commodities"],
    accountType: ["One-Phase Challenge", "Instant Funding"],
    accountSize: ["$25k / $50k", "$100k", "$200k+"],
    evaluationFee: ["Under $50"],
    drawdownType: ["Static", "Balance-Based"],
    maxDrawdown: ["10%+"],
    dailyDrawdownRule: "No",
    trailingStopsAtBE: "No",
    profitTarget: ["8%"],
    profitSplit: ["70/30", "Scaling to 100%"],
    firstPayoutTime: ["14 days"],
    minTradingDays: ["5"],
    payoutFrequency: ["Bi-weekly"],
    payoutCap: ["No cap"],
    consistencyRule: ["None"],
    newsTradingAllowed: "Yes",
    weekendHolding: "Allowed",
    overnightHolding: "Allowed",
    eaBotTrading: "Allowed",
    copyTrading: "Allowed",
    scalpingAllowed: "Yes",
    minTradeDuration: ["No limit"],
    hedgingAllowed: "Yes",
    martingaleGrid: "Allowed",
    tradingPlatform: ["MT5"],
    brokerTransparency: ["Real broker"],
    slippageSpreadType: ["Raw", "Variable"],
    countryRestrictions: ["US Allowed"],
    companyAge: ["1–3 years"],
    scalingPlan: "Yes",
    refundableFee: "No",
    affiliateLink: "#",
  },
  {
    name: "Zenith Futures Lab",
    tagline: "Capital-efficient futures accounts with firm risk controls.",
    firmType: "FUTURES",
    marketType: ["Futures"],
    accountType: ["Three-Phase Challenge"],
    accountSize: ["$25k / $50k", "$100k"],
    evaluationFee: ["$100–$300"],
    drawdownType: ["Trailing"],
    maxDrawdown: ["5%"],
    dailyDrawdownRule: "Yes",
    trailingStopsAtBE: "Yes",
    profitTarget: ["12%+"],
    profitSplit: ["80/20"],
    firstPayoutTime: ["14 days"],
    minTradingDays: ["20"],
    payoutFrequency: ["Monthly"],
    payoutCap: ["$1k–$5k"],
    consistencyRule: ["40%"],
    newsTradingAllowed: "No",
    weekendHolding: "Not Allowed",
    overnightHolding: "Not Allowed",
    eaBotTrading: "Restricted",
    copyTrading: "Not Allowed",
    scalpingAllowed: "No",
    minTradeDuration: ["2 min"],
    hedgingAllowed: "No",
    martingaleGrid: "Not Allowed",
    tradingPlatform: ["NinjaTrader"],
    brokerTransparency: ["Simulated environment"],
    slippageSpreadType: ["Variable"],
    countryRestrictions: ["US Not Allowed"],
    companyAge: ["<1 year"],
    scalingPlan: "Yes",
    refundableFee: "Yes",
    affiliateLink: "#",
  },
  {
    name: "Nova Trade Co.",
    tagline: "Balanced forex evaluations with generous payouts.",
    firmType: "CFD",
    marketType: ["Forex", "Indices"],
    accountType: ["Two-Phase Challenge"],
    accountSize: ["$5k / $10k", "$25k / $50k"],
    evaluationFee: ["Free"],
    drawdownType: ["Equity-Based"],
    maxDrawdown: ["8%"],
    dailyDrawdownRule: "No",
    trailingStopsAtBE: "No",
    profitTarget: ["5%"],
    profitSplit: ["90/10"],
    firstPayoutTime: ["7 days"],
    minTradingDays: ["0"],
    payoutFrequency: ["Weekly"],
    payoutCap: ["Unlimited"],
    consistencyRule: ["20%"],
    newsTradingAllowed: "Yes",
    weekendHolding: "Allowed",
    overnightHolding: "Allowed",
    eaBotTrading: "Restricted",
    copyTrading: "Allowed",
    scalpingAllowed: "Yes",
    minTradeDuration: ["1 min"],
    hedgingAllowed: "Yes",
    martingaleGrid: "Allowed",
    tradingPlatform: ["MT4", "MT5"],
    brokerTransparency: ["Real broker"],
    slippageSpreadType: ["Raw"],
    countryRestrictions: ["EU Allowed"],
    companyAge: ["3+ years"],
    scalingPlan: "No",
    refundableFee: "Yes",
    affiliateLink: "#",
  },
  {
    name: "Orbit Crypto Capital",
    tagline: "Crypto-focused evaluations with flexible weekend trading.",
    firmType: "CRYPTOO",
    marketType: ["Crypto"],
    accountType: ["Instant Funding", "One-Phase Challenge"],
    accountSize: ["$25k / $50k", "$100k"],
    evaluationFee: ["$100–$300"],
    drawdownType: ["Trailing", "Equity-Based"],
    maxDrawdown: ["6%"],
    dailyDrawdownRule: "Yes",
    trailingStopsAtBE: "No",
    profitTarget: ["8%"],
    profitSplit: ["80/20"],
    firstPayoutTime: ["14 days"],
    minTradingDays: ["5"],
    payoutFrequency: ["Bi-weekly"],
    payoutCap: ["No cap"],
    consistencyRule: ["20%"],
    newsTradingAllowed: "Yes",
    weekendHolding: "Allowed",
    overnightHolding: "Allowed",
    eaBotTrading: "Allowed",
    copyTrading: "Allowed",
    scalpingAllowed: "Yes",
    minTradeDuration: ["No limit"],
    hedgingAllowed: "Yes",
    martingaleGrid: "Allowed",
    tradingPlatform: ["MT5"],
    brokerTransparency: ["Real broker"],
    slippageSpreadType: ["Raw"],
    countryRestrictions: ["US Allowed"],
    companyAge: ["1–3 years"],
    scalingPlan: "Yes",
    refundableFee: "No",
    affiliateLink: "#",
  },
  {
    name: "Ledger Prop",
    tagline: "Crypto evaluation with strict consistency rules.",
    firmType: "CRYPTOO",
    marketType: ["Crypto"],
    accountType: ["Two-Phase Challenge"],
    accountSize: ["$5k / $10k", "$25k / $50k"],
    evaluationFee: ["$50–$100"],
    drawdownType: ["Static", "Balance-Based"],
    maxDrawdown: ["4%"],
    dailyDrawdownRule: "Yes",
    trailingStopsAtBE: "Yes",
    profitTarget: ["10%"],
    profitSplit: ["90/10"],
    firstPayoutTime: ["30 days"],
    minTradingDays: ["10"],
    payoutFrequency: ["Monthly"],
    payoutCap: ["$5k–$10k"],
    consistencyRule: ["30%"],
    newsTradingAllowed: "No",
    weekendHolding: "Allowed",
    overnightHolding: "Allowed",
    eaBotTrading: "Restricted",
    copyTrading: "Not Allowed",
    scalpingAllowed: "No",
    minTradeDuration: ["5 min"],
    hedgingAllowed: "No",
    martingaleGrid: "Not Allowed",
    tradingPlatform: ["MT4"],
    brokerTransparency: ["Simulated environment"],
    slippageSpreadType: ["Variable"],
    countryRestrictions: ["EU Allowed"],
    companyAge: ["3+ years"],
    scalingPlan: "No",
    refundableFee: "Yes",
    affiliateLink: "#",
  },
  {
    name: "Harbor Stock Funded",
    tagline: "Equity prop accounts with transparent broker access.",
    firmType: "STOCKS",
    marketType: ["Indices"],
    accountType: ["One-Phase Challenge"],
    accountSize: ["$25k / $50k", "$100k"],
    evaluationFee: ["$100–$300"],
    drawdownType: ["Static", "Equity-Based"],
    maxDrawdown: ["8%"],
    dailyDrawdownRule: "No",
    trailingStopsAtBE: "No",
    profitTarget: ["5%"],
    profitSplit: ["80/20"],
    firstPayoutTime: ["14 days"],
    minTradingDays: ["5"],
    payoutFrequency: ["Bi-weekly"],
    payoutCap: ["$1k–$5k"],
    consistencyRule: ["None"],
    newsTradingAllowed: "Yes",
    weekendHolding: "Allowed",
    overnightHolding: "Allowed",
    eaBotTrading: "Restricted",
    copyTrading: "Allowed",
    scalpingAllowed: "Yes",
    minTradeDuration: ["1 min"],
    hedgingAllowed: "Yes",
    martingaleGrid: "Not Allowed",
    tradingPlatform: ["MT5"],
    brokerTransparency: ["Real broker"],
    slippageSpreadType: ["Raw"],
    countryRestrictions: ["US Allowed"],
    companyAge: ["1–3 years"],
    scalingPlan: "Yes",
    refundableFee: "No",
    affiliateLink: "#",
  },
  {
    name: "Bluechip Trader Labs",
    tagline: "Stock-focused evaluations with tight daily drawdowns.",
    firmType: "STOCKS",
    marketType: ["Indices"],
    accountType: ["Two-Phase Challenge"],
    accountSize: ["$5k / $10k", "$25k / $50k"],
    evaluationFee: ["Under $50"],
    drawdownType: ["End-of-Day", "Balance-Based"],
    maxDrawdown: ["5%"],
    dailyDrawdownRule: "Yes",
    trailingStopsAtBE: "Yes",
    profitTarget: ["8%"],
    profitSplit: ["70/30"],
    firstPayoutTime: ["30 days"],
    minTradingDays: ["10"],
    payoutFrequency: ["Monthly"],
    payoutCap: ["$5k–$10k"],
    consistencyRule: ["20%"],
    newsTradingAllowed: "No",
    weekendHolding: "Not Allowed",
    overnightHolding: "Not Allowed",
    eaBotTrading: "Not Allowed",
    copyTrading: "Not Allowed",
    scalpingAllowed: "No",
    minTradeDuration: ["5 min"],
    hedgingAllowed: "No",
    martingaleGrid: "Not Allowed",
    tradingPlatform: ["MT4"],
    brokerTransparency: ["Not disclosed"],
    slippageSpreadType: ["Fixed"],
    countryRestrictions: ["EU Allowed"],
    companyAge: ["3+ years"],
    scalingPlan: "No",
    refundableFee: "Yes",
    affiliateLink: "#",
  },
];

const filterGroups = Array.from(document.querySelectorAll(".filter-group"));
const typeButtons = Array.from(document.querySelectorAll(".type-button"));
const resultsEl = document.getElementById("results");
const matchCountEl = document.getElementById("matchCount");
const activeFiltersEl = document.getElementById("activeFilters");
const clearFiltersButton = document.getElementById("clearFilters");
const filterPanel = document.getElementById("filterPanel");
const openFiltersButton = document.getElementById("openFilters");
const filterOverlay = document.getElementById("filterOverlay");
const applyFiltersButton = document.getElementById("applyFilters");

let selectedType = "CFD";

const getActiveFilters = () =>
  filterGroups.reduce((acc, group) => {
    const key = group.dataset.filter;
    const selected = Array.from(group.querySelectorAll("input:checked")).map(
      (input) => input.value,
    );
    if (selected.length > 0) {
      acc[key] = selected;
    }
    return acc;
  }, {});

const matchesFilterGroup = (firmValue, selectedValues) => {
  if (!selectedValues.length) {
    return true;
  }
  if (Array.isArray(firmValue)) {
    return firmValue.some((value) => selectedValues.includes(value));
  }
  return selectedValues.includes(firmValue);
};

const filterFirms = () => {
  const activeFilters = getActiveFilters();
  return firms.filter(
    (firm) =>
      firm.firmType === selectedType &&
      Object.entries(activeFilters).every(([key, selectedValues]) =>
        matchesFilterGroup(firm[key], selectedValues),
      ),
  );
};

const renderActiveFilters = (activeFilters) => {
  activeFiltersEl.innerHTML = "";
  const typeChip = document.createElement("span");
  typeChip.className = "chip";
  typeChip.textContent = `Firm type: ${selectedType}`;
  activeFiltersEl.appendChild(typeChip);
  Object.entries(activeFilters).forEach(([key, values]) => {
    values.forEach((value) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      chip.textContent = `${key.replace(/([A-Z])/g, " $1").trim()}: ${value}`;
      activeFiltersEl.appendChild(chip);
    });
  });
};

const renderFirms = () => {
  const matches = filterFirms();
  const activeFilters = getActiveFilters();
  matchCountEl.textContent = `Showing ${matches.length} firm${
    matches.length === 1 ? "" : "s"
  }`;
  renderActiveFilters(activeFilters);
  resultsEl.innerHTML = "";

  if (matches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `
      <h3>No matches yet</h3>
      <p class="muted">Try removing a few filters or adjust the strictest rules.</p>
    `;
    resultsEl.appendChild(empty);
    return;
  }

  matches.forEach((firm) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <div>
          <h3>${firm.name}</h3>
          <p class="muted">${firm.tagline}</p>
        </div>
        <span class="card-tag">${firm.marketType.join(" · ")}</span>
      </div>
      <div class="card-grid">
        <div>
          <span>Account</span>
          ${firm.accountType.join(", ")}
        </div>
        <div>
          <span>Drawdown</span>
          ${firm.drawdownType.join(", ")} · ${firm.maxDrawdown.join(", ")}
        </div>
        <div>
          <span>Profit Split</span>
          ${firm.profitSplit.join(", ")}
        </div>
        <div>
          <span>Payouts</span>
          ${firm.firstPayoutTime.join(", ")} · ${firm.payoutFrequency.join(", ")}
        </div>
        <div>
          <span>Rules</span>
          News: ${firm.newsTradingAllowed} · Weekend: ${firm.weekendHolding}
        </div>
        <div>
          <span>Platform</span>
          ${firm.tradingPlatform.join(", ")}
        </div>
      </div>
      <div class="card-actions">
        <a class="button primary" href="${firm.affiliateLink}">View firm</a>
        <a class="button ghost" href="${firm.affiliateLink}">Affiliate link</a>
      </div>
    `;
    resultsEl.appendChild(card);
  });
};

const updateFilterVisibility = () => {
  filterGroups.forEach((group) => {
    const supportedTypes = group.dataset.firmTypes?.split(",") ?? [];
    const isVisible = supportedTypes.includes(selectedType);
    group.style.display = isVisible ? "block" : "none";
    if (!isVisible) {
      group.querySelectorAll("input").forEach((input) => {
        input.checked = false;
      });
    }
  });
};

const openFilters = () => {
  filterPanel.classList.add("is-open");
  filterPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
};

const closeFilters = () => {
  filterPanel.classList.remove("is-open");
  filterPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
};

filterGroups.forEach((group) => {
  group.addEventListener("change", renderFirms);
});

clearFiltersButton.addEventListener("click", () => {
  filterGroups.forEach((group) => {
    group.querySelectorAll("input").forEach((input) => {
      input.checked = false;
    });
  });
  renderFirms();
});

typeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    typeButtons.forEach((btn) => btn.classList.remove("is-active"));
    button.classList.add("is-active");
    selectedType = button.dataset.type;
    updateFilterVisibility();
    renderFirms();
  });
});

openFiltersButton.addEventListener("click", openFilters);
filterOverlay.addEventListener("click", closeFilters);
applyFiltersButton.addEventListener("click", () => {
  renderFirms();
  closeFilters();
});

updateFilterVisibility();
renderFirms();
