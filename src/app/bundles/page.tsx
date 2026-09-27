import Link from "next/link";
import { bundles } from "@/lib/mock-data";

export default function BundlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Curated access</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Bundles for a complete workflow</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">Pair execution, analysis, and risk tools in one documented purchase. Bundle pricing is based on the current sample catalog.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {bundles.map((bundle) => (
          <article key={bundle.slug} className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Bundle</div>
                <h2 className="mt-3 text-2xl font-bold text-white">{bundle.name}</h2>
              </div>
              <div className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-200">Save ${bundle.saving}</div>
            </div>
            <p className="mt-4 leading-7 text-slate-300">{bundle.description}</p>
            <ul className="mt-6 space-y-3 border-y border-white/10 py-5 text-sm text-slate-200">
              {bundle.products.map((product) => <li key={product} className="flex items-center gap-3"><span className="text-emerald-300">✓</span>{product}</li>)}
            </ul>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div><span className="text-3xl font-black text-white">${bundle.price}</span> <span className="text-sm text-slate-500 line-through">${bundle.regularPrice}</span></div>
              <Link href="/checkout" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Review bundle</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
