import Link from "next/link";
import type { Product } from "@/lib/mock-data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
      <div className="relative h-44 overflow-hidden border-b border-white/10 sm:h-52">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),transparent_50%)]" />
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-slate-900/80 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-sm text-amber-300">
            <span>★</span>
            <span>{product.rating}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{product.name}</h3>
          <p className="mt-2 text-sm text-slate-400">{product.shortDescription}</p>
        </div>

        <div className="space-y-2 text-sm text-slate-300">
          <div className="flex items-center justify-between"><span>Platform</span><span className="font-medium text-white">{product.platform}</span></div>
          <div className="flex items-center justify-between"><span>Markets</span><span className="font-medium text-white">{product.markets.join(" / ")}</span></div>
          <div className="flex items-center justify-between"><span>Timeframe</span><span className="font-medium text-white">{product.timeframe}</span></div>
          <div className="flex items-center justify-between"><span>Version</span><span className="font-medium text-white">{product.version}</span></div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 pt-2">
          <div>
            <div className="text-2xl font-bold text-white">${product.salePrice ?? product.price}</div>
            {product.salePrice ? <div className="text-sm text-slate-500 line-through">${product.price}</div> : null}
          </div>
          <Link href={`/products/${product.slug}`} className="flex-1 rounded-full bg-emerald-500 px-4 py-2.5 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:flex-none">
            View Product
          </Link>
        </div>
      </div>
    </article>
  );
}
