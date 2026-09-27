export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: string;
  accent: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "EA" | "Indicator" | "Trading System" | "Tool" | "VPS";
  platform: "MT4" | "MT5" | "TradingView";
  markets: string[];
  timeframe: string;
  strategy: string;
  rating: number;
  price: number;
  salePrice?: number;
  badge?: string;
  image: string;
  description: string;
  shortDescription: string;
  license: "1 Device / 1 Account" | "Multiple Account License";
  version: string;
  delivery: string;
  updates: string;
  support: string;
  riskLevel: "Low" | "Medium" | "High";
  releaseDate: string;
  lastUpdated: string;
  developer: string;
  architecture?: string;
};

export type RankedProduct = {
  rank: number;
  name: string;
  potential: number;
};

export const eaProductSpecs = [
  ["LUX ORBIT EA", "ORB + Breakout", "Gold / Indices", "BREAKOUT"],
  ["LUX LIQUIDITY EA", "Liquidity Sweep + SMC", "XAUUSD", "SMC / ICT"],
  ["LUX HUNTER EA", "Liquidity + BOS/CHoCH", "XAUUSD", "SMC / ICT"],
  ["LUX VORTEX EA", "Momentum + Volatility", "Gold / Forex", "BREAKOUT"],
  ["LUX TITAN EA", "Multi-Factor Trading", "Gold / Indices", "FLAGSHIP"],
  ["LUX APEX EA", "SMC + ICT + FVG", "XAUUSD", "SMC / ICT"],
  ["LUX PULSE EA", "Tick + Momentum", "Scalping", "ENTRY / SCALPING"],
  ["LUX VECTOR EA", "Trend + EMA + Supertrend", "Forex / Gold", "TREND"],
  ["LUX REAPER EA", "Breakout + Retest", "Gold / Indices", "BREAKOUT"],
  ["LUX SENTINEL EA", "Session + Liquidity", "XAUUSD", "TREND"],
  ["LUX PHANTOM EA", "Sweep + Reversal", "Gold", "SMC / ICT"],
  ["LUX STRIKE EA", "High-Momentum Breakout", "Gold / NAS100", "ENTRY / SCALPING"],
  ["LUX QUANT EA", "Quant / Multi-Factor", "Multi-Asset", "ADVANCED"],
  ["LUX DOMINATOR EA", "Order Flow + DOM", "Futures / Gold", "ADVANCED"],
  ["LUX FUSION EA", "SMC + Volume + Momentum", "Multi-Asset", "ADVANCED"],
  ["LUX SNIPER EA", "Precision Entry + RR", "XAUUSD", "ENTRY / SCALPING"],
  ["LUX GUARDIAN EA", "Risk Management + Trend", "Multi-Asset", "ADVANCED"],
  ["LUX NEXUS EA", "Multi-Strategy Engine", "Multi-Asset", "ADVANCED"],
  ["LUX ALPHA EA", "Institutional-style Framework", "Gold", "FLAGSHIP"],
  ["LUX PRIME EA", "Premium All-in-One", "Multi-Asset", "FLAGSHIP"],
] as const;

export const rankedProducts: RankedProduct[] = eaProductSpecs.map(([name], index) => ({
  rank: index + 1,
  name,
  potential: index < 6 || index >= 18 ? 5 : 4,
}));

export const categories: Category[] = [
  {
    name: "EA Bots",
    slug: "ea-bots",
    description: "Rule-based execution for MetaTrader workflows.",
    icon: "🤖",
    accent: "from-emerald-500/20 to-emerald-300/5",
  },
  {
    name: "TradingView Indicators",
    slug: "tradingview-indicators",
    description: "Structure and liquidity analysis for TradingView.",
    icon: "📊",
    accent: "from-cyan-500/20 to-sky-300/5",
  },
  {
    name: "MT5 Indicators",
    slug: "mt5-indicators",
    description: "Market context tools for MetaTrader 5.",
    icon: "📈",
    accent: "from-violet-500/20 to-indigo-300/5",
  },
  {
    name: "Trading Systems",
    slug: "trading-systems",
    description: "Documented systems with defined entry and risk rules.",
    icon: "🧠",
    accent: "from-amber-500/20 to-yellow-300/5",
  },
  {
    name: "Trading Tools",
    slug: "trading-tools",
    description: "Practical utilities for cleaner execution workflows.",
    icon: "🛠",
    accent: "from-fuchsia-500/20 to-pink-300/5",
  },
  {
    name: "VPS & Hosting",
    slug: "vps-hosting",
    description: "Always-on hosting for automated strategies.",
    icon: "☁️",
    accent: "from-slate-500/20 to-zinc-300/5",
  },
];

const legacyProducts: Product[] = [
  {
    id: "prod-gold-hunter-ea",
    slug: "gold-hunter-ea",
    name: "Gold Hunter EA",
    category: "EA",
    platform: "MT5",
    markets: ["XAUUSD", "Forex"],
    timeframe: "M5",
    strategy: "Breakout",
    rating: 4.8,
    price: 149,
    salePrice: 129,
    badge: "Hot",
    image: "/images/hero-chart.svg",
    description:
      "A disciplined XAUUSD automation system built around structure, volatility, and controlled risk execution.",
    shortDescription: "Gold-focused EA built for controlled breakout execution.",
    license: "1 Device / 1 Account",
    version: "2.4.1",
    delivery: "Instant download",
    updates: "90 days included",
    support: "Email support",
    riskLevel: "High",
    releaseDate: "12 Mar 2025",
    lastUpdated: "04 Sep 2026",
    developer: "Luxfocuss Research",
  },
  {
    id: "prod-liquidity-pro",
    slug: "liquidity-pro",
    name: "Liquidity Pro",
    category: "Indicator",
    platform: "TradingView",
    markets: ["Forex", "Gold", "Crypto"],
    timeframe: "M15",
    strategy: "Liquidity",
    rating: 4.9,
    price: 49,
    image: "/images/indicator-chart.svg",
    description:
      "Market structure and liquidity mapping indicator designed to help traders read momentum and key reaction zones.",
    shortDescription: "Liquidity-driven TradingView indicator for structure-aware entries.",
    license: "Multiple Account License",
    version: "1.8.0",
    delivery: "TradingView invite",
    updates: "Ongoing while active",
    support: "Email support",
    riskLevel: "Medium",
    releaseDate: "20 Jun 2025",
    lastUpdated: "28 Aug 2026",
    developer: "Luxfocuss Research",
  },
  {
    id: "prod-smart-structure-pro",
    slug: "smart-structure-pro",
    name: "Smart Structure Pro",
    category: "Indicator",
    platform: "MT5",
    markets: ["Forex", "Indices"],
    timeframe: "H1",
    strategy: "SMC",
    rating: 4.7,
    price: 79,
    image: "/images/chart-graph.svg",
    description:
      "A clean structural analysis tool that highlights trend shifts, confluences, and bias changes across major pairs.",
    shortDescription: "MT5 structural trend indicator for SMC/market context analysis.",
    license: "1 Device / 1 Account",
    version: "3.1.0",
    delivery: "Instant download",
    updates: "90 days included",
    support: "Email support",
    riskLevel: "Medium",
    releaseDate: "18 Jan 2025",
    lastUpdated: "01 Sep 2026",
    developer: "Luxfocuss Research",
  },
  {
    id: "prod-trend-velocity",
    slug: "trend-velocity",
    name: "Trend Velocity",
    category: "Trading System",
    platform: "MT5",
    markets: ["Forex", "Commodities"],
    timeframe: "H4",
    strategy: "Trend Following",
    rating: 4.6,
    price: 199,
    image: "/images/hero-chart.svg",
    description:
      "A multi-market trend system that blends momentum confirmation with disciplined risk and portfolio logic.",
    shortDescription: "Trend-following system for medium-term directional execution.",
    license: "Multiple Account License",
    version: "1.5.2",
    delivery: "Instant download",
    updates: "1 year included",
    support: "Priority email support",
    riskLevel: "Medium",
    releaseDate: "08 Nov 2024",
    lastUpdated: "22 Jul 2026",
    developer: "Luxfocuss Research",
  },
  {
    id: "prod-session-guard",
    slug: "session-guard",
    name: "Session Guard",
    category: "Tool",
    platform: "MT4",
    markets: ["Forex", "Indices"],
    timeframe: "M1",
    strategy: "Scalping",
    rating: 4.5,
    price: 39,
    image: "/images/indicator-chart.svg",
    description:
      "Execution assistant for session timing, spread filtering, and risk alignment during volatile market windows.",
    shortDescription: "Execution tool for session and spread-aware trading decisions.",
    license: "1 Device / 1 Account",
    version: "1.2.6",
    delivery: "Instant download",
    updates: "90 days included",
    support: "Email support",
    riskLevel: "Low",
    releaseDate: "14 Feb 2025",
    lastUpdated: "11 Aug 2026",
    developer: "Luxfocuss Tools",
  },
  {
    id: "prod-vps-elite",
    slug: "vps-elite",
    name: "VPS Elite",
    category: "VPS",
    platform: "MT5",
    markets: ["Forex", "Crypto"],
    timeframe: "Always On",
    strategy: "Hosting",
    rating: 4.8,
    price: 29,
    image: "/images/chart-graph.svg",
    description:
      "Low-latency execution hosting with automated restarts, status monitoring, and reliability-focused infrastructure.",
    shortDescription: "Reliable VPS for always-on EAs and strategy execution.",
    license: "Multiple Account License",
    version: "Managed plan",
    delivery: "Provisioned after checkout",
    updates: "Included while active",
    support: "Priority email support",
    riskLevel: "Low",
    releaseDate: "03 May 2025",
    lastUpdated: "13 Sep 2026",
    developer: "Luxfocuss Infrastructure",
  },
  ...rankedProducts
    .filter((rankedProduct) => rankedProduct.name !== "Liquidity PRO")
    .map((rankedProduct, index): Product => ({
      id: `prod-${rankedProduct.name.toLowerCase().replaceAll(" ", "-")}`,
      slug: rankedProduct.name.toLowerCase().replaceAll(" ", "-"),
      name: rankedProduct.name,
      category: index % 3 === 0 ? "Indicator" : index % 3 === 1 ? "Tool" : "Trading System",
      platform: rankedProduct.name === "Trading Engine EA" ? "MT5" : "TradingView",
      markets: ["Forex", "Gold", "Crypto"],
      timeframe: index % 2 === 0 ? "M15" : "H1",
      strategy: "Market Structure",
      rating: rankedProduct.potential === 5 ? 4.9 : 4.7,
      price: 59 + index * 10,
      badge: rankedProduct.rank <= 3 ? "Top ranked" : undefined,
      image: index % 2 === 0 ? "/images/indicator-chart.svg" : "/images/chart-graph.svg",
      description: `${rankedProduct.name} delivers focused tools for cleaner market analysis and disciplined execution.`,
      shortDescription: `Professional ${rankedProduct.name} workflow for structure-aware trading.`,
      license: "Multiple Account License",
      version: "1.0.0",
      delivery: "Instant digital delivery",
      updates: "90 days included",
      support: "Email support",
      riskLevel: "Medium",
      releaseDate: "14 Sep 2026",
      lastUpdated: "14 Sep 2026",
      developer: "Luxfocuss Research",
    })),
];

const eaProducts: Product[] = eaProductSpecs.map(([name, strategy, marketLabel, architecture], index) => ({
  id: `prod-${name.toLowerCase().replaceAll(" ", "-")}`,
  slug: name.toLowerCase().replaceAll(" ", "-"),
  name,
  category: "EA",
  platform: "MT5",
  markets: marketLabel.split(" / "),
  timeframe: index % 3 === 0 ? "M5" : index % 3 === 1 ? "M15" : "H1",
  strategy,
  rating: index < 6 || index >= 18 ? 4.9 : 4.8,
  price: architecture === "FLAGSHIP" ? 299 : architecture === "ADVANCED" ? 249 : 149,
  salePrice: architecture === "FLAGSHIP" ? 249 : undefined,
  badge: architecture === "FLAGSHIP" ? "Flagship" : index < 3 ? "New line" : architecture,
  image: index % 2 === 0 ? "/images/hero-chart.svg" : "/images/chart-graph.svg",
  description: `${name} is a focused MetaTrader execution system built around ${strategy.toLowerCase()} for ${marketLabel}.`,
  shortDescription: `${strategy} automation for ${marketLabel}.`,
  license: "1 Device / 1 Account",
  version: "1.0.0",
  delivery: "Instant download",
  updates: "90 days included",
  support: "Priority email support",
  riskLevel: "High",
  releaseDate: "16 Sep 2026",
  lastUpdated: "16 Sep 2026",
  developer: "LuxFocus Research",
  architecture,
}));

export const products: Product[] = [...eaProducts, ...legacyProducts];

export const pricingPlans = [
  {
    name: "One-Time Purchase",
    price: "$149",
    description: "A single license for a premium product.",
    features: ["Lifetime access", "One account license", "Product updates"],
    accent: "emerald",
  },
  {
    name: "Subscription",
    price: "$29/mo",
    description: "Ongoing access with updates and support.",
    features: ["Monthly access", "Priority updates", "Support desk access"],
    accent: "gold",
    popular: true,
  },
  {
    name: "Annual",
    price: "$199/yr",
    description: "Best value for active traders.",
    features: ["Annual coverage", "Volume discounts", "Priority support"],
    accent: "slate",
  },
  {
    name: "Lifetime",
    price: "$499",
    description: "Unlimited access for long-term strategy use.",
    features: ["Lifetime license", "All updates", "Priority support"],
    accent: "cyan",
  },
];

export const bundles = [
  {
    name: "Gold Trader Bundle",
    slug: "gold-trader-bundle",
    description: "A focused toolkit for XAUUSD execution, structure analysis, and risk planning.",
    products: ["Gold Hunter EA", "Smart Structure Pro", "Session Guard"],
    price: 249,
    regularPrice: 267,
    saving: 18,
  },
  {
    name: "System Builder Bundle",
    slug: "system-builder-bundle",
    description: "A practical starting point for building a documented, repeatable workflow.",
    products: ["Trend Velocity", "Liquidity Pro", "Session Guard"],
    price: 229,
    regularPrice: 287,
    saving: 58,
  },
];

export const performanceRecords = [
  {
    product: "Gold Hunter EA",
    type: "Backtest sample",
    period: "Jan 2022 - Dec 2025",
    profitFactor: "1.92",
    maxDrawdown: "17.4%",
    winRate: "62.1%",
    trades: "1,284",
    status: "DEMO DATA",
  },
  {
    product: "Trend Velocity",
    type: "Forward-test sample",
    period: "Jan 2025 - Aug 2026",
    profitFactor: "1.48",
    maxDrawdown: "12.8%",
    winRate: "54.6%",
    trades: "312",
    status: "NOT LIVE PERFORMANCE",
  },
];

export const educationArticles = [
  { title: "How to install an MT5 Expert Advisor", category: "Getting started", readTime: "6 min" },
  { title: "Understanding drawdown before choosing an EA", category: "Risk management", readTime: "8 min" },
  { title: "Backtest, forward test, and live results explained", category: "Performance", readTime: "7 min" },
  { title: "How to configure a TradingView indicator", category: "TradingView", readTime: "5 min" },
];

export const faqItems = [
  {
    question: "What is included with each purchase?",
    answer:
      "Every product includes the trading tool, installation guide, setup notes, documentation, and update access for the assigned license period.",
  },
  {
    question: "Do you offer demo or sample data?",
    answer:
      "Yes. We clearly label all sample and demo performance data as backtest, forward test, or live and do not present it as guaranteed profit results.",
  },
  {
    question: "Can I use products on multiple accounts?",
    answer:
      "License terms depend on the product. Some products are single-device or single-account, while others support multi-account use.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "Digital products are typically non-refundable once delivered. We encourage buyers to review product scope, platform compatibility, and setup requirements before purchase.",
  },
];

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Bundles", href: "/bundles" },
  { name: "Performance", href: "/performance" },
  { name: "Education", href: "/education" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Documentation", href: "/documentation" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];
