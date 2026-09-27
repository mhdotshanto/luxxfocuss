export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">About Luxfocuss</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Institutional-grade tools for disciplined traders</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-8">
          <p className="text-lg leading-8 text-slate-300">
            Luxfocuss was built around one principle: traders need high-quality digital tools, transparent performance context, and secure access to the products they purchase.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Our catalog spans Expert Advisors, charting indicators, MT5 systems, execution utilities, and future SaaS offerings. Every product is presented with clear context, labeled demo metrics, and a professional support framework.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Focus", "Data-driven trading systems"],
              ["Audience", "Retail, prop, & algorithmic traders"],
              ["Platform", "MT4 / MT5 / TradingView"],
              ["Approach", "Trust, verification, execution"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{label}</div>
                <div className="mt-2 text-base font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
