import Link from "next/link";

const coreRules = [
  "Session er prothom 15 minute er high/low mark kora.",
  "OR High break hole BUY trigger; OR Low break hole SELL trigger.",
  "Entry usually candle close outside OR er baire hole confirm.",
  "SL reverse OR level er baire rakhte hobe.",
  "TP 1R → 2R → 3R er moto progressive target follow kora.",
];

const checklist = [
  "Session timing fixed thakbe",
  "High volume session select kora",
  "Breakout candle er body strong hobe",
  "Spread and slippage check thakbe",
  "Risk per trade fixed thakbe",
];

export default function StrategyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 rounded-[2rem] border border-emerald-400/20 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),transparent_35%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Strategy Library</div>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">ORB Strategy 01 — Classic Breakout</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          XAUUSD er jonno ORB (Opening Range Breakout) ekta professional foundation strategy. Shongshotto model holeo, simple breakout er sathe false breakout beshi hoye thake. Ei version mainly clean, deterministic, risk-aware structure diye build kora.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Entry</div>
          <div className="mt-4 text-2xl font-bold text-white">Breakout close</div>
          <p className="mt-3 text-sm leading-7 text-slate-300">Price OR high er upore close hole BUY; OR low er niche close hole SELL.</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Stop Loss</div>
          <div className="mt-4 text-2xl font-bold text-white">Opposite OR level</div>
          <p className="mt-3 text-sm leading-7 text-slate-300">False breakout komanor jonno reverse OR level er baire SL rakhte hobe.</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Target</div>
          <div className="mt-4 text-2xl font-bold text-white">1R → 2R → 3R</div>
          <p className="mt-3 text-sm leading-7 text-slate-300">Initial RR koita tar upor based, progressive target e trade manage kora.</p>
        </div>
      </div>

      <section className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Logic</div>
          <h2 className="mt-4 text-2xl font-bold text-white">How the opening range works</h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
            <p>
              ORB strategy e prothom <span className="font-semibold text-white">15 minute opening range</span> niye kaj kora hoy. Ei range er <span className="font-semibold text-emerald-300">High</span> ar <span className="font-semibold text-emerald-300">Low</span> mark kora hoy.
            </p>
            <p>
              Range = OR High − OR Low. Breakout theke business shuru hoy. Jodi price OR high er upor break kore ar candle close ta upore thake, tahole BUY. Jodi price OR low er niche break kore ar candle close niche thake, tahole SELL.
            </p>
            <p>
              Ei model simple kintu high-volume session e sobcheye effective. XAUUSD e market er volatility thake, tai session timing, spread, slippage fix thaka important.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-5">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Example</div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3">
                <span>OR High</span>
                <span className="font-semibold text-emerald-300">3650</span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3">
                <span>OR Low</span>
                <span className="font-semibold text-red-300">3646</span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3">
                <span>Range</span>
                <span className="font-semibold text-white">4 points</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Core Rules</div>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {coreRules.map((rule) => (
              <li key={rule} className="flex gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">✓</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Trade setup flow</div>
        <h2 className="mt-4 text-2xl font-bold text-white">Execution flow</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">1. Session</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">London/New York session er opening range nite hobe.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">2. Mark range</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">OR high and OR low identify korte hobe.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">3. Confirm breakout</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">Candle close outside OR er confirm onno step.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-slate-400">4. Manage exit</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">SL opposite range, TP 1R/2R/3R with discipline.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">BUY Setup</div>
          <h3 className="mt-4 text-xl font-bold text-white">Breakout upward</h3>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-300">
            <li>OR high set kora.</li>
            <li>Price OR high er upor break kore.</li>
            <li>Candle close above OR high.</li>
            <li>BUY entry with SL below OR low or reverse level.</li>
            <li>Target: 1R first, then 2R/3R according to trend.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">SELL Setup</div>
          <h3 className="mt-4 text-xl font-bold text-white">Breakout downward</h3>
          <ol className="mt-5 list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-300">
            <li>OR low set kora.</li>
            <li>Price OR low er niche break kore.</li>
            <li>Candle close below OR low.</li>
            <li>SELL entry with SL above OR high or reverse level.</li>
            <li>Target: 1R first, then 2R/3R depending on structure.</li>
          </ol>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Risk guard</div>
        <h2 className="mt-4 text-2xl font-bold text-white">Best practice checklist</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {checklist.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-4 rounded-[2rem] border border-amber-400/20 bg-amber-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-amber-200">Important</div>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
            ORB only breakout e trade neya jabe na. False breakout, spread, slippage, news, and session quality check kora lagbe. Strategy comprehension er pore AI/SMC overlay add kora hobe.
          </p>
        </div>
        <Link href="/education" className="inline-flex rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          Back to education
        </Link>
      </div>
    </main>
  );
}
