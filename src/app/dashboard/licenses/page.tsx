import { DashboardShell } from "@/components/dashboard-shell";

const licenses = [
  { id: "LX-2041", product: "Gold Hunter EA", status: "ACTIVE", expires: "2026-12-25", devices: "2" },
  { id: "LX-1839", product: "Liquidity Pro", status: "ACTIVE", expires: "2027-01-12", devices: "3" },
  { id: "LX-1497", product: "Smart Structure Pro", status: "EXPIRED", expires: "2026-08-14", devices: "1" },
];

export default function LicensesPage() {
  return (
    <DashboardShell title="Licenses">
      <div className="space-y-5">
        {licenses.map((license) => (
          <div key={license.id} className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{license.id}</div>
                <h2 className="mt-2 text-xl font-semibold text-white">{license.product}</h2>
              </div>
              <div className={`rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${license.status === "ACTIVE" ? "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300" : "border border-amber-400/30 bg-amber-500/10 text-amber-300"}`}>
                {license.status}
              </div>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Created</div><div className="mt-2 text-white">2025-11-10</div></div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Expires</div><div className="mt-2 text-white">{license.expires}</div></div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4"><div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Devices</div><div className="mt-2 text-white">{license.devices}</div></div>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
