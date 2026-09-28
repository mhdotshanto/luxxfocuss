import Link from "next/link";
import { bundles } from "@/lib/mock-data";

export default function BundlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-12 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Curated access</div>
        <h1 className="mt-2 sm:mt-3 text-3xl sm:text-4xl font-black tracking-[-0.05em] text-white">Bundles for a complete workflow</h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg leading-7 sm:leading-8 text-slate-300">Pair execution, analysis, and risk tools in one documented purchase. Bundle pricing is based on the current sample catalog.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {bundles.map((bundle) => (
          <article key={bundle.slug} className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118] p-5 sm:p-7">
            <div>
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Bundle</div>
                  <h2 className="mt-2 sm:mt-3 text-xl sm:text-2xl font-bold text-white">{bundle.name}</h2>
                </div>
                <div className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-200">Save ${bundle.saving}</div>
              </div>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-300">{bundle.description}</p>
              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 border-y border-white/10 py-4 sm:py-5 text-xs sm:text-sm text-slate-200">
                {bundle.products.map((product) => <li key={product} className="flex items-center gap-2.5 sm:gap-3"><span className="text-emerald-300">✓</span>{product}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div><span className="text-2xl sm:text-3xl font-black text-white">${bundle.price}</span> <span className="text-sm text-slate-500 line-through">${bundle.regularPrice}</span></div>
              <Link href="/checkout" className="flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Review bundle</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
