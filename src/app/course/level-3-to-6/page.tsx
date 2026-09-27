import Link from "next/link";

const levels = [
  {
    level: "Level 3",
    title: "Liquidity Sweep + CHoCH",
    summary: "Breakout itself is not enough. The price must sweep the opening range extreme, then confirm with a structural shift.",
    bullets: [
      "OR high/low established.",
      "Price sweeps liquidity above or below the range.",
      "Bullish or bearish CHoCH confirms the reversal or continuation intent.",
      "Entry waits until the structure flips with displacement.",
    ],
    accent: "amber",
  },
  {
    level: "Level 4",
    title: "ORB + SMC Confluence",
    summary: "This adds premium/discount, FVG, order blocks, and session context to improve the probability of a valid setup.",
    bullets: [
      "Trading from discount for buys and premium for sells.",
      "FVG / OB acts as entry confirmation zone.",
      "CHoCH + BOS must align with the directional bias.",
      "Risk sits below the failed structure, not below the entire range.",
    ],
    accent: "rose",
  },
  {
    level: "Level 5",
    title: "Adaptive Institutional Engine",
    summary: "Market regime detection, volatility filters, session logic, and dynamic risk adjust the strategy when conditions change.",
    bullets: [
      "Trend day, range day, and high-volatility day are handled differently.",
      "Dynamic position sizing and risk caps protect the account.",
      "Score engine rejects weak setups before execution.",
      "Execution filter blocks trades when spread or news is poor.",
    ],
    accent: "violet",
  },
  {
    level: "Level 6",
    title: "Quant Overlay + Probability Model",
    summary: "The system adds data-driven probability estimates, feature engineering, walk-forward testing, and adaptive execution control.",
    bullets: [
      "Historical features such as OR width, ATR, momentum, and sweep distance are measured.",
      "Probability model estimates trade quality before entry.",
      "MAE/MFE analysis improves stop and target logic.",
      "Walk-forward and Monte Carlo testing reduce overfitting risk.",
    ],
    accent: "slate",
  },
];

export default function LevelThreeToSixPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] border border-amber-400/20 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),transparent_30%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-amber-200">Course Extension</div>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">ORB Levels 3 to 6</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          This section explains the advanced evolution of ORB. Level 3 introduces liquidity and structure. Level 4 adds SMC confluence. Level 5 turns it into a regime-aware engine. Level 6 adds quant probability and adaptive execution discipline.
        </p>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        {levels.map((item) => (
          <article key={item.level} className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">{item.level}</div>
            <h2 className="mt-4 text-2xl font-bold text-white">{item.title}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{item.summary}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    item.accent === "amber"
                      ? "bg-amber-500/15 text-amber-200"
                      : item.accent === "rose"
                        ? "bg-rose-500/15 text-rose-200"
                        : item.accent === "violet"
                          ? "bg-violet-500/15 text-violet-300"
                          : "bg-slate-500/15 text-slate-200"
                  }`}>✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-amber-200">Practical interpretation</div>
        <h2 className="mt-4 text-2xl font-bold text-white">From simple breakout to structured edge</h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
          <p>
            Level 3 er idea holo: only breakout korlei trade neoa jabe na. Price liquidity sweep korse kina, structure flip hochche kina, and confirmation ache kina — ei gulo dekhte hobe.
          </p>
          <p>
            Level 4 e confluence baddho hoy: premium/discount, FVG, OB, session bias, and structure trend. Ai stage e setup quality beshi improve hoy.
          </p>
          <p>
            Level 5 e system adapts with market regime. Trend day, range day, o high-volatility day alada logic chay. Risk engine and execution filter automatically adjust.
          </p>
          <p>
            Level 6 e model probability er upor decision nite pare. Kintu ai progochchha ta overfitting er risk rakhe, so historical validation and walk-forward testing compulsory.
          </p>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-amber-400/20 bg-amber-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-amber-200">Course summary</div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
            Level 3–6 teaches the jump from raw breakout to institutional-grade decision making. The goal is not to add more signals; it is to filter out weak trades and only execute when context, structure, and risk are aligned.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/course" className="inline-flex rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Back to course
          </Link>
          <Link href="/strategy" className="inline-flex rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
            Strategy lessons
          </Link>
        </div>
      </div>
    </main>
  );
}
