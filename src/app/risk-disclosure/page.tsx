import { AlertTriangle } from "lucide-react";

export default function RiskDisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-amber-300">
          <AlertTriangle className="h-4 w-4" /> CFTC & Regulatory Risk Disclosure
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Financial Risk Disclosure</h1>
        <p className="mt-2 text-xs text-slate-400">Mandatory regulatory statement</p>
      </div>

      <div className="space-y-6 rounded-[2rem] border border-amber-500/20 bg-[#0b1118]/80 p-6 sm:p-10 text-xs sm:text-sm leading-relaxed text-slate-300 backdrop-blur">
        <div>
          <h2 className="text-base font-bold text-amber-200 sm:text-lg">High Risk Investment Warning</h2>
          <p className="mt-2">
            Trading foreign exchange (Forex), indices, cryptocurrencies, commodities, and derivatives carries a high level of risk and may not be suitable for all investors. High leverage can work against you as well as for you. Before deciding to trade financial markets, you should carefully consider your investment objectives, level of experience, and risk tolerance.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-amber-200 sm:text-lg">Hypothetical & Simulated Performance Disclosure</h2>
          <p className="mt-2">
            Hypothetical or simulated performance results have certain inherent limitations. Unlike an actual performance record, simulated results do not represent actual trading. Also, since the trades have not actually been executed, the results may have under-or-over compensated for the impact, if any, of certain market factors, such as lack of liquidity.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-amber-200 sm:text-lg">No Financial or Fiduciary Advice</h2>
          <p className="mt-2">
            The software, scripts, algorithms, educational guides, and indicators provided by Luxfocuss are for informational and technical analysis purposes only. Luxfocuss does not offer financial advice, discretionary management, or personalized investment recommendations.
          </p>
        </div>
      </div>
    </main>
  );
}
