import { DashboardShell } from "@/components/dashboard-shell";

const products = [
  { name: "Gold Hunter EA", platform: "MT5", license: "ACTIVE", expires: "25 Dec 2026", version: "2.1.0" },
  { name: "Liquidity Pro", platform: "TradingView", license: "ACTIVE", expires: "12 Jan 2027", version: "1.9.4" },
  { name: "Smart Structure Pro", platform: "MT5", license: "EXPIRED", expires: "14 Aug 2026", version: "2.0.1" },
];

export default function MyProductsPage() {
  return (
    <DashboardShell title="My Products">
      <div className="space-y-5">
        {products.map((product) => (
          <div key={product.name} className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">{product.name}</h2>
                <div className="mt-2 text-sm text-slate-400">{product.platform}</div>
              </div>
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-300">
                {product.license}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Expires</div>
                <div className="mt-2 font-semibold text-white">{product.expires}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Version</div>
                <div className="mt-2 font-semibold text-white">{product.version}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Priority</div>
                <div className="mt-2 font-semibold text-white">Update Ready</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">Download</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">Documentation</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">License</button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">Updates</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
