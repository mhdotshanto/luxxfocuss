import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const modelMatch = [
  { name: "Level 1 — Classic ORB Breakout", match: "Very High Confluence", tone: "emerald" },
  { name: "Level 2 — ORB + Retest", match: "Partial Alignment", tone: "amber" },
  { name: "Level 3 — Liquidity Sweep + CHoCH", match: "Not Visible", tone: "rose" },
  { name: "Level 4 — ORB + SMC Confluence", match: "No Clear Evidence", tone: "rose" },
  { name: "Level 5/6 — Quant Overlay", match: "Insufficient Data", tone: "slate" },
];

const ruleFlow = [
  "Opening range establishes initial session liquidity parameters.",
  "Price compresses within horizontal reaction corridor.",
  "High-volume displacement candle breaks Opening Range High.",
  "Momentum expansion sustains above key threshold without deep retracement.",
  "Long execution triggers upon trend filter cross confirmation.",
  "Invalidation stop is anchored beneath the session breakout node.",
  "Systematic profit target locked at high-timeframe liquidity pool.",
];

export default function OrbBreakoutTrendFilterPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Breadcrumb / Back Link */}
      <div className="mb-6">
        <Link
          href="/strategy"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Strategy Library
        </Link>
      </div>

      {/* Hero Header */}
      <div className="mb-10 rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),transparent_40%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-10 shadow-2xl">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">Strategy Blueprint 02</div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          ORB Framework: Breakout + Dynamic Trend Filter
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Detailed technical breakdown of an Opening Range Breakout augmented with multi-timeframe trend filtering. This architecture combines opening volatility capture with directional bias filters to minimize false expansion risks.
        </p>
      </div>

      {/* Model Alignment Grid */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {modelMatch.map((item) => (
          <div key={item.name} className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-[#0b1118]/80 p-5 backdrop-blur">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">Model Status</div>
              <h2 className="mt-3 text-sm font-semibold text-white">{item.name}</h2>
            </div>
            <div className="mt-4">
              <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
                item.tone === "emerald"
                  ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                  : item.tone === "amber"
                    ? "border-amber-400/30 bg-amber-500/10 text-amber-200"
                    : item.tone === "rose"
                      ? "border-rose-400/30 bg-rose-500/10 text-rose-200"
                      : "border-slate-500/30 bg-slate-500/10 text-slate-300"
              }`}>{item.match}</span>
            </div>
          </div>
        ))}
      </section>

      {/* Core Technical Breakdown & Rules */}
      <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 lg:col-span-7">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">Technical Analysis</div>
          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">Pattern Classification & Execution Anatomy</h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              The structural base begins with a defined <span className="font-semibold text-white">Opening Range baseline</span> established during the initial 15-minute cash session window. Range consolidation tightly coiling near the upper boundary indicates institutional accumulation.
            </p>
            <p>
              Subsequent expansion generates a high-conviction breakout with positive delta volume. The integrated <span className="font-semibold text-cyan-300">exponential moving average trend filter</span> maintains positive slope alignment, confirming momentum velocity without early exhaustion signals.
            </p>
            <p>
              Unlike complex liquidity sweep models that require failed breakout re-entries, this setup represents a <span className="font-semibold text-emerald-300">pure directional continuation impulse</span>, optimized for rapid progression toward higher liquidity pools.
            </p>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 lg:col-span-5">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">Rule Logic</div>
          <h3 className="mt-3 text-lg font-bold text-white">Execution Sequence</h3>
          <ul className="mt-5 space-y-3.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
            {ruleFlow.map((item, idx) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 font-mono text-[10px] font-bold text-cyan-300">
                  {idx + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* Trade Lifecycle Stepper */}
      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-300">Trade Architecture</div>
        <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">Systematic Execution Pipeline</h2>
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {[
            { step: "01", title: "Range Setup", desc: "Session open boundary mapped" },
            { step: "02", title: "Compression", desc: "Tight volatility squeeze" },
            { step: "03", title: "Impulse Break", desc: "Displacement above OR High" },
            { step: "04", title: "Filter Pass", desc: "Slope & momentum aligned" },
            { step: "05", title: "Order Entry", desc: "Market/Limit execution" },
            { step: "06", title: "Risk Buffer", desc: "Stop at structural anchor" },
            { step: "07", title: "Target Scale", desc: "Systematic partials at 2R+" },
          ].map((s) => (
            <div key={s.step} className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
              <span className="font-mono text-xs font-bold text-cyan-400">{s.step}</span>
              <div className="mt-1 text-sm font-semibold text-white">{s.title}</div>
              <p className="mt-1 text-xs text-slate-400 leading-normal">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative Scenarios */}
      <section className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300">Scenario A</div>
          <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">Level 1: Pure Trend Continuation</h3>
          <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-xs leading-relaxed text-slate-300 sm:text-sm">
            <li>Establish clean 15-minute Opening Range benchmark.</li>
            <li>Candle close decisively pierces upper boundary with strong volume.</li>
            <li>Adaptive trend filter verifies high-timeframe momentum agreement.</li>
            <li>Direct market execution upon confirmation bar close.</li>
            <li>Fixed-risk stop placement below the dynamic trend band.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-amber-200">Scenario B</div>
          <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">Level 2: Breakout & Structural Retest</h3>
          <ol className="mt-4 list-decimal space-y-2.5 pl-5 text-xs leading-relaxed text-slate-300 sm:text-sm">
            <li>Initial breakout exhausts into first resistance zone.</li>
            <li>Controlled pullback returns to test former Opening Range High as support.</li>
            <li>Bullish rejection wick confirms buyer absorption.</li>
            <li>Secondary long entry triggered on confirmation of retest support.</li>
            <li>Tighter risk stop positioned directly below retest pivot low.</li>
          </ol>
        </div>
      </section>

      {/* Navigation CTA Bar */}
      <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-cyan-400/20 bg-cyan-500/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-200">Executive Summary</div>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            This operational model delivers highest expectancy during clean session trend expansions. When markets chop or require deep structural sweeps, deploy Level 3 and 4 confluence protocols instead.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
          <Link
            href="/strategy"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            All Strategies
          </Link>
          <Link
            href="/course"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Master Course <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
