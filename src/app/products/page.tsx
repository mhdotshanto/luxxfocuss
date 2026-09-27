import Link from "next/link";
import { eaProductSpecs, products, rankedProducts } from "@/lib/mock-data";
import { ProductCard } from "@/components/product-card";

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Marketplace</div>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Premium trading products</h1>
        </div>
        <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-200">
          {eaProductSpecs.length} EA products
        </div>
      </div>

      <section className="mb-10 rounded-3xl border border-white/10 bg-[#0b1118] p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Product ranking</div>
            <h2 className="mt-2 text-2xl font-bold text-white">LuxFocus EA Product Suite</h2>
          </div>
          <span className="text-xs text-slate-500">Based on current catalogue potential</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {rankedProducts.map((product) => (
            <div key={product.name} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-sm font-bold text-emerald-300">{product.rank}</span>
              <span className="min-w-0 flex-1 truncate font-medium text-white">{product.name}</span>
              <span className="shrink-0 text-sm tracking-widest text-amber-300" aria-label={`${product.potential} out of 5 stars`}>
                {"★".repeat(product.potential)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {["ENTRY / SCALPING", "SMC / ICT", "BREAKOUT", "TREND", "ADVANCED", "FLAGSHIP"].map((architecture) => (
          <div key={architecture} className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 px-4 py-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Architecture</div>
            <div className="mt-2 text-sm font-semibold text-white">{architecture}</div>
            <div className="mt-1 text-xs text-slate-400">
              {eaProductSpecs.filter(([, , , productArchitecture]) => productArchitecture === architecture).length} products
            </div>
          </div>
        ))}
      </section>

      <div className="mb-10 grid gap-4 rounded-3xl border border-white/10 bg-[#0b1118] p-5 md:grid-cols-2 xl:grid-cols-6">
        {[
          "Category",
          "Platform",
          "Market",
          "Timeframe",
          "Strategy",
          "Price",
        ].map((label) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
            {label}
          </div>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
        <span className="rounded-full bg-slate-800 px-3 py-1.5">Popular</span>
        <span className="rounded-full bg-slate-800 px-3 py-1.5">Newest</span>
        <span className="rounded-full bg-slate-800 px-3 py-1.5">Price low → high</span>
        <span className="rounded-full bg-slate-800 px-3 py-1.5">Highest rated</span>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/pricing" className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
          View Pricing
        </Link>
      </div>
    </main>
  );
}
