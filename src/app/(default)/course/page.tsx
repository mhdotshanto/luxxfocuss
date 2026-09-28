import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

const curriculum = [
  {
    title: "Level 1 — Classic ORB Foundation",
    summary: "Opening range boundary mapping, volume expansion verification, and directional momentum execution.",
    accent: "emerald",
  },
  {
    title: "Level 2 — ORB + Retest Mechanics",
    summary: "Impulse breakout followed by key level re-test and absorption wicks for precision entry and tighter stops.",
    accent: "cyan",
  },
  {
    title: "Level 3 — Liquidity Sweeps & CHoCH",
    summary: "Systematic detection of false breakouts, stop runs above/below session extremes, and structural flip entries.",
    accent: "amber",
  },
  {
    title: "Level 4 — Multi-Factor SMC Confluence",
    summary: "Premium/discount pricing arrays, Fair Value Gaps (FVG), order blocks, and session high-timeframe alignment.",
    accent: "rose",
  },
  {
    title: "Level 5 — Adaptive Volatility Engine",
    summary: "Real-time market regime categorization (trend/range/expansion), volatility sizing, and automated risk throttling.",
    accent: "violet",
  },
  {
    title: "Level 6 — Quantitative Edge Overlay",
    summary: "Walk-forward optimization, probabilistic trade scoring, Monte Carlo resilience tests, and algorithmic trade management.",
    accent: "slate",
  },
];

const chartNotes = [
  "Session benchmark boundaries mapped precisely at cash market open.",
  "Volatility compression triggers systematic alerting before volume expansion.",
  "Multi-timeframe trend filters confirm macro directional alignment.",
  "Retest protocols filter low-quality expansion traps in non-trending regimes.",
  "Structural invalidation levels dictate position risk — zero arbitrary stops.",
];

export default function CoursePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Breadcrumb / Back Link */}
      <div className="mb-6">
        <Link
          href="/education"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 transition hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Knowledge Base
        </Link>
      </div>

      {/* Hero Header */}
      <div className="mb-10 rounded-[2rem] border border-violet-400/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_40%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-10 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-violet-300">
          <BookOpen className="h-4 w-4" /> Luxfocuss Academy
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          ORB Master Curriculum: Levels 1 through 6
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Master the systematic evolution from naive opening range breakouts to institutional quantitative frameworks. Engineer higher win expectancies through strict contextual filtering, dynamic risk parameters, and regime awareness.
        </p>
      </div>

      {/* Curriculum Grid */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {curriculum.map((item, index) => (
          <div key={item.title} className="flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-[#0b1118]/80 p-6 backdrop-blur transition duration-300 hover:border-violet-500/30">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
                <span>Module Tier</span>
                <span>0{index + 1}</span>
              </div>
              <h2 className="mt-4 text-lg font-bold text-white sm:text-xl">{item.title}</h2>
              <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">{item.summary}</p>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
              <span className={`inline-flex rounded-full border px-3 py-0.5 text-xs font-semibold ${
                item.accent === "emerald"
                  ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                  : item.accent === "cyan"
                    ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                    : item.accent === "amber"
                      ? "border-amber-400/30 bg-amber-500/10 text-amber-200"
                      : item.accent === "rose"
                        ? "border-rose-400/30 bg-rose-500/10 text-rose-200"
                        : item.accent === "violet"
                          ? "border-violet-400/30 bg-violet-500/10 text-violet-300"
                          : "border-slate-500/30 bg-slate-500/10 text-slate-300"
              }`}>
                {index === 0 ? "Foundation" : index === 1 ? "Refinement" : index === 2 ? "Institutional" : index === 3 ? "Confluence" : index === 4 ? "Adaptive" : "Quantitative"}
              </span>

              {index >= 2 ? (
                <Link href="/course/level-3-to-6" className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 transition hover:text-amber-200">
                  Advanced Tier <ArrowRight className="h-3 w-3" />
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </section>

      {/* Course Logic & Technical Notes */}
      <section className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 lg:col-span-7">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-300">Pedagogical Framework</div>
          <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">Bridging Retail Theory & Quant Execution</h2>

          <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              Traditional opening range tactics suffer from excessive drawdown in mean-reverting environments. The <span className="font-semibold text-white">Luxfocuss Framework</span> begins at Level 1 with baseline breakout detection, but quickly introduces regime filters to eliminate low-probability signals.
            </p>
            <p>
              By Level 2 and Level 3, traders master the transition from blind breakout chasing to <span className="font-semibold text-cyan-300">structural retest confirmations</span> and <span className="font-semibold text-amber-300">liquidity sweeps</span>. This shifts execution timing toward areas where retail liquidity is absorbed by institutional order flow.
            </p>
            <p>
              Levels 4 through 6 integrate complete quantitative overlays — measuring historical breakout velocity, ATR expansions, and walk-forward parameter stability for high-expectancy capital deployment.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 lg:col-span-5">
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-300">Core Principles</div>
          <h3 className="mt-3 text-lg font-bold text-white">System Mandates</h3>
          <ul className="mt-5 space-y-3.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
            {chartNotes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Progression Roadmap */}
      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8">
        <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-300">Curriculum Roadmap</div>
        <h2 className="mt-3 text-xl font-bold text-white sm:text-2xl">Four-Stage Mastery Pathway</h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">Phase 01</div>
            <h4 className="mt-2 text-base font-semibold text-white">Range Identification</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">Map session boundaries, establish baseline volatility, and identify liquidity pools.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-300">Phase 02</div>
            <h4 className="mt-2 text-base font-semibold text-white">Expansion Verification</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">Validate breakouts with volume delta, institutional displacement, and momentum slope.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-amber-200">Phase 03</div>
            <h4 className="mt-2 text-base font-semibold text-white">Contextual Confluence</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">Layer fair value gaps, liquidity sweeps, premium/discount pricing, and retest mechanics.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-violet-300">Phase 04</div>
            <h4 className="mt-2 text-base font-semibold text-white">Quantitative Scaling</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">Deploy dynamic volatility sizing, automated invalidation algorithms, and expectancy models.</p>
          </div>
        </div>
      </section>

      {/* Navigation CTA Bar */}
      <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-violet-400/20 bg-violet-500/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-violet-200">Accelerated Learning</div>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
            Begin with the foundational modules or proceed straight into advanced liquidity sweep protocols and quant models.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
          <Link
            href="/strategy"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Strategy Library
          </Link>
          <Link
            href="/course/level-3-to-6"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-violet-500 px-6 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            Explore Levels 3–6 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
