import Link from "next/link";

const coreRules = [
  "Mark the High and Low of the first 15-minute market session opening range.",
  "Trigger BUY when OR High breaks with confirmation; trigger SELL when OR Low breaks.",
  "Confirm entry only upon a full candle close outside the Opening Range boundary.",
  "Place Stop Loss beyond the opposite boundary of the opening range.",
  "Follow progressive risk-reward targets: 1R → 2R → 3R with active trade management.",
];

const checklist = [
  "Fixed session timing adherence",
  "High-volume session selection (London/NY)",
  "Strong candle body displacement on breakout",
  "Low spread and acceptable slippage window",
  "Strict fixed percentage risk per trade",
];

export default function StrategyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-8 sm:mb-10 rounded-[2rem] border border-emerald-400/20 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),transparent_35%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-5 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Strategy Library</div>
        <h1 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-black tracking-[-0.06em] text-white">ORB Strategy 01 — Classic Breakout</h1>
        <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-lg leading-7 sm:leading-8 text-slate-300">
          The Opening Range Breakout (ORB) serves as a foundational institutional strategy for high-volatility assets such as XAUUSD. While simple in concept, raw breakouts often produce fakeouts without disciplined risk rules. This framework provides a deterministic, rule-based execution model.
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-5 sm:p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Entry</div>
          <div className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">Breakout close</div>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">Trigger BUY on a confirmed candle close above OR High; trigger SELL on a close below OR Low.</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-5 sm:p-6">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Stop Loss</div>
          <div className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">Opposite OR level</div>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">To mitigate false breakouts, place Stop Loss protection beyond the opposite boundary of the range.</p>
        </div>
        <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-5 sm:p-6 sm:col-span-2 md:col-span-1">
          <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Target</div>
          <div className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">1R → 2R → 3R</div>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">Manage open risk with tiered take-profit targets based on initial risk multiple calculations.</p>
        </div>
      </div>

      <section className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Logic</div>
          <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">How the opening range works</h2>

          <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-300">
            <p>
              The ORB framework establishes boundaries during the first <span className="font-semibold text-white">15 minutes of the active market session</span>. The highest and lowest prices during this interval define the <span className="font-semibold text-emerald-300">OR High</span> and <span className="font-semibold text-emerald-300">OR Low</span>.
            </p>
            <p>
              The Range width equals <code className="rounded bg-black/40 px-2 py-0.5 font-mono text-emerald-300">OR High − OR Low</code>. When strong directional momentum drives price through either boundary and closes outside, the trade setup activates in the direction of the expansion.
            </p>
            <p>
              This model demonstrates peak efficiency during high-liquidity sessions (London and New York opens) where institutional order flow establishes the intraday trend direction.
            </p>
          </div>

          <div className="mt-6 sm:mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-4 sm:p-5">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Example Scenario</div>
            <div className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 sm:px-4 sm:py-3">
                <span>OR High</span>
                <span className="font-semibold text-emerald-300">2,350.00</span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 sm:px-4 sm:py-3">
                <span>OR Low</span>
                <span className="font-semibold text-red-300">2,344.00</span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 sm:px-4 sm:py-3">
                <span>Range Width</span>
                <span className="font-semibold text-white">6.00 points</span>
              </div>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Core Rules</div>
          <ul className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
            {coreRules.map((rule) => (
              <li key={rule} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-300">✓</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mt-8 sm:mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Trade setup flow</div>
        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">Execution flow</h2>

        <div className="mt-6 sm:mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">1. Session Open</div>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">Select active London or New York opening window for reliable volume.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">2. Define Range</div>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">Identify the highest high and lowest low of the first 15-minute candle range.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">3. Confirm Breakout</div>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">Wait for a complete candle close outside the boundary to validate conviction.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 sm:p-5">
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">4. Risk Management</div>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">Maintain Stop Loss beyond opposite range and take tiered profit at 1R/2R/3R.</p>
          </div>
        </div>
      </section>

      <section className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">BUY Setup</div>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-white">Upward Expansion</h3>
          <ol className="mt-4 sm:mt-5 list-decimal space-y-2.5 sm:space-y-3 pl-5 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
            <li>Identify the established OR High level.</li>
            <li>Monitor for price breaking above the upper boundary.</li>
            <li>Confirm valid candle close above OR High.</li>
            <li>Execute BUY with Stop Loss positioned below OR Low or structure swing.</li>
            <li>Scale out at 1R initial target, letting runner positions target 2R/3R.</li>
          </ol>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">SELL Setup</div>
          <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-bold text-white">Downward Expansion</h3>
          <ol className="mt-4 sm:mt-5 list-decimal space-y-2.5 sm:space-y-3 pl-5 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
            <li>Identify the established OR Low level.</li>
            <li>Monitor for price breaking below the lower boundary.</li>
            <li>Confirm valid candle close below OR Low.</li>
            <li>Execute SELL with Stop Loss positioned above OR High or structure swing.</li>
            <li>Scale out at 1R initial target, letting runner positions target 2R/3R.</li>
          </ol>
        </div>
      </section>

      <section className="mt-8 sm:mt-10 rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-8">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Risk Guard</div>
        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">Best Practice Checklist</h2>
        <div className="mt-5 sm:mt-6 grid gap-3 sm:gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {checklist.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8 sm:mt-10 flex flex-col gap-4 rounded-[2rem] border border-amber-400/20 bg-amber-500/5 p-5 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-amber-200">Risk Notice</div>
          <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-6 sm:leading-7 text-slate-300">
            Breakout strategies carry risks of whipsaws and false breaks during low-liquidity environments. Always verify spread conditions, upcoming macroeconomic news events, and session volume before live execution.
          </p>
        </div>
        <Link href="/education" className="flex h-11 w-full sm:w-auto items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 shrink-0">
          Back to education
        </Link>
      </div>
    </main>
  );
}
