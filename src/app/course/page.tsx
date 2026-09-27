import Link from "next/link";

const curriculum = [
  {
    title: "Level 1 — Classic ORB",
    summary: "Opening range high/low, breakout confirmation, and clean directional execution.",
    accent: "emerald",
  },
  {
    title: "Level 2 — ORB + Retest",
    summary: "Breakout followed by retest and rejection for better entry quality and reduced false breakouts.",
    accent: "cyan",
  },
  {
    title: "Level 3 — Liquidity Sweep + CHoCH",
    summary: "Liquidity grabs, structural shifts, and reversal confirmation using SMC-style logic.",
    accent: "amber",
  },
  {
    title: "Level 4 — SMC Confluence",
    summary: "Discount/premium, FVG, OB, and session context combined into a higher-quality setup.",
    accent: "rose",
  },
  {
    title: "Level 5 — Adaptive Engine",
    summary: "Market regime, volatility, risk model, and dynamic execution control for cleaner decisions.",
    accent: "violet",
  },
  {
    title: "Level 6 — Quant Overlay",
    summary: "Probability modeling, feature engineering, walk-forward testing, and execution intelligence.",
    accent: "slate",
  },
];

const chartNotes = [
  "Horizontal opening level formed at the session start.",
  "Range holds until momentum breaks the range with conviction.",
  "Trend filter confirms direction before entry.",
  "Retest becomes a more precise confirmation when clean.",
  "Risk is always placed outside invalidation, not at random distance.",
];

export default function CoursePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] border border-violet-400/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_32%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-violet-300">Luxfocuss Course</div>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">ORB Master Course — From Level 1 to Level 6</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          This course teaches how to go from a simple opening range breakout into a structured institutional ORB framework. The objective is not just more entries — it is better trades, tighter invalidation, and cleaner risk control.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {curriculum.map((item, index) => (
          <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-6">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400">
              <span>Module</span>
              <span>0{index + 1}</span>
            </div>
            <h2 className="mt-6 text-xl font-bold text-white">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.summary}</p>
            <div className={`mt-5 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
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
                        : "border-slate-500/30 bg-slate-500/10 text-slate-200"
            }`}>{index === 0 ? "Foundation" : index === 1 ? "Refinement" : index === 2 ? "Institutional" : index === 3 ? "Confluence" : index === 4 ? "Adaptive" : "Quant"}</div>
            {index >= 2 ? (
              <Link href="/course/level-3-to-6" className="mt-5 inline-flex text-sm font-semibold text-amber-200 transition hover:text-amber-100">
                Open advanced module →
              </Link>
            ) : null}
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-violet-300">Course logic</div>
          <h2 className="mt-4 text-2xl font-bold text-white">Chart-based interpretation</h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              Ei chart e opening range break er por strong bullish displacement dekha jay. Eita <span className="font-semibold text-white">Level 1</span> model er under falls. Price range er baire breakout dey; blue trend filter er upore thakle setup er quality improve hoy.
            </p>
            <p>
              Jodi breakout er por price abar opening level e retest kore, then bullish rejection nibe, tahole seta <span className="font-semibold text-cyan-300">Level 2 ORB + Retest</span> e upgrade hoy. Ai model ta false breakout komate help kore.
            </p>
            <p>
              Liquidity sweep, CHoCH, BOS, FVG, OB er confirmation dekhale owshomoy Level 3/4 e move kora jay. Kintu chart e oi proof na thakle, Level 1 ar Level 1 + Trend Filter e thaka best fit.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-violet-300">Key notes</div>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {chartNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-xs font-bold text-violet-300">✓</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-violet-300">Course flow</div>
        <h2 className="mt-4 text-2xl font-bold text-white">The progression</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-emerald-300">Step 1</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Detect opening range and identify session structure.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">Step 2</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Wait for break and confirm momentum/price expansion.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-amber-200">Step 3</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Add context: trend filter, premium/discount, and retest logic.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-violet-300">Step 4</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Scale from execution to adaptive risk, scoring, and probability.</p>
          </div>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-violet-400/20 bg-violet-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-violet-200">Final takeaway</div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
            ORB strategy er journey shuru hoy simple breakout theke, but the real skill is learning when to filter, when to retest, and when to avoid a weak setup. This course builds that judgment.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/strategy" className="inline-flex rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            View strategy lessons
          </Link>
          <Link href="/education" className="inline-flex rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-400">
            Back to education
          </Link>
        </div>
      </div>
    </main>
  );
}
