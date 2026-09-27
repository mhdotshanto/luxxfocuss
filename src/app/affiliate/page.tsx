import Link from "next/link";

export default function AffiliatePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-8 sm:p-12">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Partner program</div>
        <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-white">Refer traders to tools you can explain clearly.</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">The Luxfocuss affiliate program is designed for educators, analysts, and trading communities that value clear product scope and responsible risk communication.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["20% commission", "30-day attribution", "Monthly reporting"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-sm font-semibold text-white">{item}</div>)}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Contact partnerships</Link>
          <Link href="/products" className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/40">Review products</Link>
        </div>
        <p className="mt-8 text-xs leading-6 text-slate-500">Sample program terms for this frontend demonstration. Commission, attribution, and payout rules require backend configuration before launch.</p>
      </div>
    </main>
  );
}
