import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/mock-data";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1118]">
          <div className="relative h-64 overflow-hidden border-b border-white/10 sm:h-[420px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),transparent_45%)]" />
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div className="p-4 sm:p-6">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-300 sm:gap-3 sm:text-sm">
              <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1">{product.category}</span>
              <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1">{product.platform}</span>
              <span className="rounded-full border border-white/10 bg-slate-900 px-2 py-1">{product.markets.join(" / ")}</span>
            </div>

            <h1 className="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">{product.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
              <span>★ {product.rating}</span>
              <span>{product.strategy}</span>
              <span>{product.timeframe}</span>
              <span className={product.riskLevel === "High" ? "text-amber-300" : "text-emerald-300"}>{product.riskLevel} risk profile</span>
            </div>

            <div className="mt-8 space-y-8">
              <section>
                <h2 className="mb-3 text-xl font-semibold text-white">Product overview</h2>
                <p className="leading-8 text-slate-300">{product.description}</p>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-white">Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Automated entries",
                    "Stop Loss",
                    "Take Profit",
                    "Risk management",
                    "Spread filter",
                    "Trading session filter",
                    "News filter",
                    "Break-even",
                    "Trailing stop",
                    "Multiple symbols",
                    "Magic number",
                    "Dashboard",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-200"><span className="text-emerald-300">✓</span>{feature}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="mb-3 text-xl font-semibold text-white">Strategy</h2>
                <p className="leading-8 text-slate-300">
                  Market structure, liquidity, volatility, entry confirmation, and disciplined risk management combine to form a clear execution framework without exposing proprietary source code.
                </p>
              </section>
            </div>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-4 sm:p-6">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Purchase</div>
          <div className="mt-4 flex items-center gap-3">
            <div className="text-4xl font-black text-white">${product.salePrice ?? product.price}</div>
            {product.salePrice ? <span className="text-xl text-slate-500 line-through">${product.price}</span> : null}
          </div>

          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between"><span>Platform</span><span className="text-white">{product.platform}</span></div>
            <div className="flex items-start justify-between gap-4"><span>Markets</span><span className="text-right text-white">{product.markets.join(" / ")}</span></div>
            <div className="flex items-center justify-between"><span>License</span><span className="text-white">{product.license}</span></div>
            <div className="flex items-center justify-between"><span>Delivery</span><span className="text-white">{product.delivery}</span></div>
            <div className="flex items-center justify-between"><span>Support</span><span className="text-white">{product.support}</span></div>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            <Link href="/checkout" className="rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Buy Now
            </Link>
            <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:text-emerald-200">
              Add to Cart
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <h3 className="mb-3 text-sm uppercase tracking-[0.25em] text-slate-400">Technical specs</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Platform: {product.platform}</li>
              <li>Markets: {product.markets.join(" / ")}</li>
              <li>Primary timeframe: {product.timeframe}</li>
              <li>Strategy: {product.strategy}</li>
              <li>Version: {product.version}</li>
              <li>Updates: {product.updates}</li>
              <li>Developer: {product.developer}</li>
              <li>Last updated: {product.lastUpdated}</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-[#0b1118] p-4 sm:mt-12 sm:p-6">
        <div className="mb-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.15em] text-slate-400 sm:gap-3 sm:text-sm sm:tracking-[0.2em]">
          <span className="rounded-full border border-white/10 px-3 py-2">Backtest sample</span>
          <span className="rounded-full border border-white/10 px-3 py-2">Forward-test sample</span>
          <span className="rounded-full border border-white/10 px-3 py-2">No live verification</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {[
            { label: "Net Profit", value: "$18,240" },
            { label: "Profit Factor", value: "1.92" },
            { label: "Max Drawdown", value: "17.4%" },
            { label: "Win Rate", value: "62.1%" },
            { label: "Total Trades", value: "1,284" },
            { label: "Recovery Factor", value: "2.11" },
          ].map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{metric.label}</div>
              <div className="mt-2 text-xl font-bold text-white">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <h2 className="text-2xl font-bold text-white">What you receive</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• {product.delivery}</li>
            <li>• Account-based license</li>
            <li>• Installation guide</li>
            <li>• User manual</li>
            <li>• Setup or preset files where applicable</li>
            <li>• {product.updates}</li>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <h2 className="text-2xl font-bold text-white">License</h2>
          <p className="mt-4 text-slate-300">{product.license}</p>
          <p className="mt-2 text-slate-300">Updates: {product.updates}</p>
          <p className="mt-2 text-slate-300">Risk profile: {product.riskLevel}</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">Illustrative performance data is not a guarantee of results. Trading financial markets involves substantial risk.</p>
        </div>
      </div>
    </main>
  );
}
