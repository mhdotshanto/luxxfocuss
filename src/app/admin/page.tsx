import { DollarSign, ShoppingBag, Users, Key, Download, RefreshCw, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "$128.4K", icon: DollarSign, change: "+14.2%" },
  { label: "Monthly Recurring", value: "$18.7K", icon: RefreshCw, change: "+8.5%" },
  { label: "Total Orders", value: "1,284", icon: ShoppingBag, change: "+24.1%" },
  { label: "Registered Traders", value: "682", icon: Users, change: "+12.0%" },
  { label: "Active Machine Licenses", value: "421", icon: Key, change: "+5.4%" },
  { label: "EA & Preset Downloads", value: "2,418", icon: Download, change: "+19.8%" },
  { label: "Active Pro Tier Subscriptions", value: "93", icon: TrendingUp, change: "+7.2%" },
];

const revenueData = [
  { month: "Oct", value: 30, amount: "$8.4k" },
  { month: "Nov", value: 42, amount: "$10.2k" },
  { month: "Dec", value: 38, amount: "$9.5k" },
  { month: "Jan", value: 54, amount: "$12.1k" },
  { month: "Feb", value: 60, amount: "$13.8k" },
  { month: "Mar", value: 72, amount: "$15.4k" },
  { month: "Apr", value: 80, amount: "$16.2k" },
  { month: "May", value: 90, amount: "$17.9k" },
  { month: "Jun", value: 85, amount: "$16.8k" },
  { month: "Jul", value: 98, amount: "$18.1k" },
  { month: "Aug", value: 104, amount: "$18.5k" },
  { month: "Sep", value: 115, amount: "$18.7k" },
];

export default function AdminPage() {
  const maxRevenue = 120;

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300">Administrative Portal</div>
          <h1 className="mt-2 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Operations & Revenue Telemetry</h1>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Live Telemetry
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-[#0b1118]/80 p-5 sm:p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-emerald-400">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <div className="text-2xl font-black text-white sm:text-3xl">{item.value}</div>
                <span className="text-xs font-semibold text-emerald-400">{item.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart and Status Grids */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Revenue Chart */}
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-7">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">Trailing 12-Month Revenue Velocity</h2>
              <p className="mt-1 text-xs text-slate-400">Gross revenue before platform fees and affiliate payouts</p>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs font-bold text-emerald-400">Peak: $18.7k/mo</span>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex h-48 items-end gap-1.5 sm:gap-2.5">
              {revenueData.map((d) => {
                const heightPercent = Math.min(100, Math.round((d.value / maxRevenue) * 100));
                return (
                  <div key={d.month} className="group relative flex-1 flex flex-col items-center h-full justify-end">
                    <div className="absolute -top-8 hidden rounded bg-slate-900 px-1.5 py-0.5 text-[10px] font-mono text-emerald-300 shadow group-hover:block whitespace-nowrap z-10">
                      {d.amount}
                    </div>
                    <div
                      className="w-full rounded-t-lg bg-gradient-to-t from-emerald-500/80 to-emerald-400 transition-all duration-300 group-hover:from-emerald-400 group-hover:to-emerald-300"
                      style={{ height: `${heightPercent}%` }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-mono text-slate-500">
              {revenueData.map((d) => (
                <span key={d.month} className="flex-1 text-center">{d.month}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Order Breakdown */}
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-5">
          <h2 className="text-lg font-bold text-white sm:text-xl">Order Processing Status</h2>
          <p className="mt-1 text-xs text-slate-400">Real-time ledger audit reconciliation</p>

          <div className="mt-6 space-y-3">
            {[
              { label: "Completed & Verified", value: "1,020", rate: "79.4%", color: "text-emerald-400", bg: "bg-emerald-500/10" },
              { label: "Pending Verification", value: "126", rate: "9.8%", color: "text-cyan-400", bg: "bg-cyan-500/10" },
              { label: "Gateway Failed / Aborted", value: "42", rate: "3.2%", color: "text-amber-400", bg: "bg-amber-500/10" },
              { label: "Processed Refunds (14-day SLA)", value: "18", rate: "1.4%", color: "text-slate-400", bg: "bg-slate-500/10" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/60 p-3.5 sm:p-4">
                <div className="flex items-center gap-3">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.bg}`} />
                  <div>
                    <div className="text-xs font-semibold text-white sm:text-sm">{item.label}</div>
                    <div className="text-[10px] text-slate-400">{item.rate} of total volume</div>
                  </div>
                </div>
                <div className={`font-mono font-bold text-sm sm:text-base ${item.color}`}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
