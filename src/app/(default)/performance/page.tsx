import Link from "next/link";
import { performanceRecords } from "@/lib/mock-data";

export default function PerformancePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-12 flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Evidence library</div>
          <h1 className="mt-2 sm:mt-3 text-3xl sm:text-4xl font-black tracking-[-0.05em] text-white">Performance, separated by evidence type</h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">Review sample backtests and forward-test records with the testing period and limitations visible. No performance record on this page is presented as a verified live account.</p>
        </div>
        <div className="self-start lg:self-auto rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs uppercase tracking-[0.2em] text-amber-200">Sample records only</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {performanceRecords.map((record) => (
          <article key={record.product} className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3 sm:gap-4 border-b border-white/10 pb-4 sm:pb-5">
              <div><div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">{record.type}</div><h2 className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold text-white">{record.product}</h2></div>
              <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-2.5 py-1 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-amber-200">{record.status}</span>
            </div>
            <div className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-400">Test period: <span className="text-slate-200">{record.period}</span></div>
            <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-4">
              {[["Profit factor", record.profitFactor], ["Max drawdown", record.maxDrawdown], ["Win rate", record.winRate], ["Total trades", record.trades]].map(([label, value]) => <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-3 sm:p-4"><div className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-slate-400">{label}</div><div className="mt-1 sm:mt-2 text-lg sm:text-xl font-bold text-white">{value}</div></div>)}
            </div>
            <Link href="/risk-disclosure" className="mt-6 inline-flex text-xs sm:text-sm text-emerald-300 transition hover:text-emerald-200">Read risk disclosure →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
