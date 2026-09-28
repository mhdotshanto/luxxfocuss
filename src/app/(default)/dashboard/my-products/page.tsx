import { DashboardShell } from "@/components/dashboard-shell";
import { Download, FileText, Key, RefreshCw, Layers } from "lucide-react";

const products = [
  { name: "Gold Hunter EA", platform: "MT5", license: "ACTIVE", expires: "25 Dec 2026", version: "2.1.0" },
  { name: "Liquidity Pro", platform: "TradingView", license: "ACTIVE", expires: "12 Jan 2027", version: "1.9.4" },
  { name: "Smart Structure Pro", platform: "MT5", license: "EXPIRED", expires: "14 Aug 2026", version: "2.0.1" },
];

export default function MyProductsPage() {
  return (
    <DashboardShell title="My Products">
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.name} className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {product.platform}
                  </span>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">{product.name}</h2>
                </div>
              </div>
              <div>
                <span className={`inline-flex rounded-full border px-3 py-0.5 text-xs font-mono font-semibold ${
                  product.license === "ACTIVE"
                    ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                    : "border-amber-400/30 bg-amber-500/10 text-amber-300"
                }`}>
                  {product.license}
                </span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Valid Until</div>
                <div className="mt-1 text-sm font-semibold text-white">{product.expires}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Current Build</div>
                <div className="mt-1 text-sm font-semibold text-white">v{product.version}</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Release Status</div>
                <div className="mt-1 text-sm font-semibold text-emerald-400">Latest Release</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5 pt-4 border-t border-white/5">
              <button className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-emerald-400 px-4 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300">
                <Download className="h-3.5 w-3.5" /> Download Package
              </button>
              <button className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white transition hover:bg-white/10">
                <FileText className="h-3.5 w-3.5" /> Manual
              </button>
              <button className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white transition hover:bg-white/10">
                <Key className="h-3.5 w-3.5" /> Machine ID
              </button>
              <button className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white transition hover:bg-white/10">
                <RefreshCw className="h-3.5 w-3.5" /> Check Updates
              </button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
