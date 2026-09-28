import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

const levels = [
  {
    level: "Level 03",
    title: "Liquidity Sweep & Structural Shift (CHoCH)",
    summary: "Breakout velocity alone is insufficient. Institutional entry requires a stop sweep above or below the opening range extreme, followed by micro-structure displacement.",
    bullets: [
      "Session benchmark High/Low mapped across key liquidity clusters.",
      "Price initiates intentional stop run piercing extreme boundary.",
      "Aggressive rejection wick confirms institutional absorption.",
      "Displacement close triggers Change of Character (CHoCH) entry signal.",
    ],
    accent: "amber",
  },
  {
    level: "Level 04",
    title: "Multi-Factor SMC & Price Action Confluence",
    summary: "Systematic integration of Fair Value Gaps (FVG), premium/discount pricing matrices, order blocks, and multi-session directional alignment.",
    bullets: [
      "Strict trade gating: long only in discount (< 50%), short only in premium (> 50%).",
      "Institutional order block / FVG acts as mandatory re-entry confirmation.",
      "Break of Structure (BOS) confirms sustained trend commitment.",
      "Invalidation anchored to displacement origin rather than whole range.",
    ],
    accent: "rose",
  },
  {
    level: "Level 05",
    title: "Adaptive Institutional Regime Engine",
    summary: "Automated market condition classification (trend/range/volatile), dynamic volatility-scaled position sizing, and automated risk throttling.",
    bullets: [
      "Real-time regime switching between trend capture and mean reversion models.",
      "Dynamic volatility sizing normalizes drawdown risk across market conditions.",
      "Algorithmic scoring filter blocks low-conviction execution setups.",
      "Execution gating prevents slippage during high-spread macroeconomic news events.",
    ],
    accent: "violet",
  },
  {
    level: "Level 06",
    title: "Quantitative Expectancy & Algorithmic Overlay",
    summary: "Data-driven statistical probability modeling, feature extraction, walk-forward out-of-sample optimization, and systematic execution control.",
    bullets: [
      "Continuous feature scoring: opening range width, volume delta, ATR ratio.",
      "Probabilistic win-rate estimator scores setup quality before order dispatch.",
      "Maximum Adverse Excursion (MAE) analysis optimizes dynamic stop calibration.",
      "Walk-forward and Monte Carlo validation eliminate backtest curve-fitting.",
    ],
    accent: "slate",
  },
];

export default function LevelThreeToSixPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Breadcrumb / Back Link */}
      <div className="mb-6">
        <Link
          href="/course"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Master Course
        </Link>
      </div>

      {/* Hero Header */}
      <div className="mb-10 rounded-[2rem] border border-amber-400/20 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),transparent_40%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-10 shadow-2xl">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-amber-200">Advanced Specialization</div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Institutional ORB: Levels 3 through 6
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Explore institutional-grade liquidity engineering, Smart Money Concepts (SMC) confluence, adaptive volatility sizing, and quantitative probability models built for professional prop firm and fund execution.
        </p>
      </div>

      {/* Advanced Modules Grid */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {levels.map((item) => (
          <article key={item.level} className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur transition duration-300 hover:border-amber-400/30">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">{item.level}</div>
              <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">{item.title}</h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">{item.summary}</p>
              
              <ul className="mt-6 space-y-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${
                      item.accent === "amber"
                        ? "text-amber-300"
                        : item.accent === "rose"
                          ? "text-rose-400"
                          : item.accent === "violet"
                            ? "text-violet-400"
                            : "text-slate-400"
                    }`} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      {/* Practical Interpretation */}
      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-amber-200">Execution Philosophy</div>
        <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">From Retail Breakout to Quantitative Edge</h2>
        
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <span className="font-mono text-xs font-bold text-amber-300">Level 03 Edge</span>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Eliminates false breakout trap losses by waiting for aggressive stop sweeps and structural displacement before triggering orders.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <span className="font-mono text-xs font-bold text-rose-300">Level 04 Edge</span>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Anchors execution exclusively within discount pricing corridors with institutional Fair Value Gap and Order Block confluence.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <span className="font-mono text-xs font-bold text-violet-300">Level 05 Edge</span>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Classifies current macro regime dynamically, scaling risk exposure during expansion phases and throttling down during choppy compression.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <span className="font-mono text-xs font-bold text-slate-300">Level 06 Edge</span>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">
              Utilizes statistical distribution curves and walk-forward verification to continuously calibrate expectancy parameters with zero curve-fitting.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation CTA Bar */}
      <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-amber-400/20 bg-amber-500/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-amber-200">System Deployment</div>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            All proprietary Pine Script indicators and MT5 Expert Advisors in the Luxfocuss ecosystem natively support Level 1 through Level 6 parameters.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
          <Link
            href="/course"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Course Index
          </Link>
          <Link
            href="/products"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
          >
            Explore Systems <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
