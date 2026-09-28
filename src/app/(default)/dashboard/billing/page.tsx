import { DashboardShell } from "@/components/dashboard-shell";

export default function BillingPage() {
  return (
    <DashboardShell title="Billing">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <h2 className="text-xl font-semibold text-white">Payment methods</h2>
          <div className="mt-6 space-y-4">
            {[
              ["Primary", "Visa •••• 1842"],
              ["Backup", "PayPal • account@demo"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</div>
                <div className="mt-2 text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <h2 className="text-xl font-semibold text-white">Billing history</h2>
          <div className="mt-6 space-y-4">
            {[
              ["Gold Hunter EA", "$149", "Paid"],
              ["VPS Elite", "$29", "Scheduled"],
              ["Liquidity Pro", "$49", "Paid"],
            ].map(([product, amount, status]) => (
              <div key={product} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div>
                  <div className="font-medium text-white">{product}</div>
                  <div className="text-sm text-slate-400">{status}</div>
                </div>
                <div className="font-semibold text-white">{amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
