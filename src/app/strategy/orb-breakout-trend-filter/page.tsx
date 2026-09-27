import Link from "next/link";

const modelMatch = [
  { name: "Level 1 — Classic ORB Breakout", match: "Very strong", tone: "emerald" },
  { name: "Level 2 — ORB + Retest", match: "Partial", tone: "amber" },
  { name: "Level 3 — Liquidity Sweep + CHoCH", match: "Not visible", tone: "rose" },
  { name: "Level 4 — ORB + SMC Confluence", match: "No clear proof", tone: "rose" },
  { name: "Level 5/6", match: "Not enough data", tone: "slate" },
];

const ruleFlow = [
  "Opening range forms below the breakout level.",
  "Price consolidates with a horizontal reaction zone.",
  "Strong bullish impulse breaks OR high.",
  "Momentum continues without a clean retest.",
  "Buy trigger confirmed by expansion and trend filter.",
  "SL placed below the level or entry invalidation zone.",
  "TP placed in the upper liquidity/green profit zone.",
];

export default function OrbBreakoutTrendFilterPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.15),transparent_30%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Strategy Library</div>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">ORB Strategy 02 — Breakout + Trend Filter</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Ei chart e sabse important observation holo: opening range er upor strong bullish breakout asche, ar breakout er por displacement thakche. Eita classic ORB continuation pattern er sathe ekta trend filter add kore decision neoa jete pare.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {modelMatch.map((item) => (
          <div key={item.name} className="rounded-[1.5rem] border border-white/10 bg-[#0b1118] p-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Match</div>
            <h2 className="mt-4 text-base font-semibold text-white">{item.name}</h2>
            <div className={`mt-4 inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
              item.tone === "emerald"
                ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                : item.tone === "amber"
                  ? "border-amber-400/30 bg-amber-500/10 text-amber-200"
                  : item.tone === "rose"
                    ? "border-rose-400/30 bg-rose-500/10 text-rose-200"
                    : "border-slate-500/30 bg-slate-500/10 text-slate-200"
            }`}>{item.match}</div>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Chart interpretation</div>
          <h2 className="mt-4 text-2xl font-bold text-white">This is basically a clean Level 1 breakout</h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              Chart e niche <span className="font-semibold text-white">horizontal opening level</span> ache. Price kichu time range/consolidation korechilo. Tarpor level er upe diye strong bullish breakout asche.
            </p>
            <p>
              Breakout er por <span className="font-semibold text-emerald-300">momentum</span> ashe and green zone e price upore thake. Blue line probable trend/MA filter. Red zone stop loss area. Sob miliye eita <span className="font-semibold text-cyan-300">ORB Level 1 breakout</span> bole classify kora jay.
            </p>
            <p>
              Breakout er por jamela retest dekhano jay na. Eita sei type setup na jekhane liquidity sweep and reversal gulo achhe. Abar jodi price opening level e phire ashe and there theke bullish rejection nibe, tahole setar name hobe <span className="font-semibold text-amber-200">ORB Level 2 — Retest</span>.
            </p>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Logic</div>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {ruleFlow.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-xs font-bold text-cyan-300">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">Trade flow</div>
        <h2 className="mt-4 text-2xl font-bold text-white">Main strategy formula</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-7">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">Opening Range</div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">Range creation</div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">OR High Break</div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">Bullish momentum</div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">BUY</div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">SL below</div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">TP above</div>
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">ORB Level 1 + Trend Filter</div>
          <h3 className="mt-4 text-xl font-bold text-white">When trend filter is added</h3>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-300">
            <li>Opening range mark kora.</li>
            <li>Price OR high er upor break kore.</li>
            <li>Blue MA er upore price thake.</li>
            <li>Strong bullish displacement thake.</li>
            <li>Buy entry with risk managed SL.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-amber-200">ORB Level 2 — Retest</div>
          <h3 className="mt-4 text-xl font-bold text-white">When retest appears</h3>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-300">
            <li>Breakout hoko, then price OR level e fire ashe.</li>
            <li>Rejection from the horizontal level.</li>
            <li>Momentum resumes upward.</li>
            <li>Buy after bullish confirmation, not blind breakout.</li>
            <li>SL below the retest structure or invalidation low.</li>
          </ol>
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-cyan-400/20 bg-cyan-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-200">Summary</div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
            Ei chart er onushare exact logic hoilo classic ORB breakout. Trend filter add kora hole ORB Level 1 + Trend Filter; retest thakle ORB Level 2. Liquidity sweep, CHoCH, FVG er confirmation er kono clear proof below na, tai level 3+ er model here not confirmed.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/strategy" className="inline-flex rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            View strategy 01
          </Link>
          <Link href="/education" className="inline-flex rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Back to education
          </Link>
        </div>
      </div>
    </main>
  );
}
