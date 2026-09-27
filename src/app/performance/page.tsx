import Link from "next/link";
import { performanceRecords } from "@/lib/mock-data";

export default function PerformancePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Evidence library</div>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Performance, separated by evidence type</h1>
          <p className="mt-4 text-lg leading-8 text-slate-300">Review sample backtests and forward-test records with the testing period and limitations visible. No performance record on this page is presented as a verified live account.</p>
        </div>
        <div className="rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-amber-200">Sample records only</div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {performanceRecords.map((record) => (
          <article key={record.product} className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div><div className="text-xs uppercase tracking-[0.2em] text-slate-400">{record.type}</div><h2 className="mt-2 text-2xl font-bold text-white">{record.product}</h2></div>
              <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200">{record.status}</span>
            </div>
            <div className="mt-5 text-sm text-slate-400">Test period: <span className="text-slate-200">{record.period}</span></div>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[["Profit factor", record.profitFactor], ["Max drawdown", record.maxDrawdown], ["Win rate", record.winRate], ["Total trades", record.trades]].map(([label, value]) => <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"><div className="text-[10px] uppercase tracking-[0.15em] text-slate-400">{label}</div><div className="mt-2 text-xl font-bold text-white">{value}</div></div>)}
            </div>
            <Link href="/risk-disclosure" className="mt-6 inline-flex text-sm text-emerald-300 hover:text-emerald-200">Read risk disclosure →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
