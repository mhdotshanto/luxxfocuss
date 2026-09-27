export default function RiskDisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Legal</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Risk Disclosure</h1>
      </div>
      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b1118] p-8 text-slate-300">
        <p>Trading leveraged financial products involves significant risk and may not be suitable for all investors.</p>
        <p>Any automated trading system, indicator, or strategy may lose value or fail to perform as expected under changing market conditions.</p>
        <p>Past performance does not guarantee future results. Customers should trade with capital they can afford to lose and should apply appropriate risk controls.</p>
      </div>
    </main>
  );
}
