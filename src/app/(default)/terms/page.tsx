import { ShieldAlert } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <ShieldAlert className="h-4 w-4" /> Legal & Governance
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-xs text-slate-400">Last updated: September 2026</p>
      </div>

      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-10 text-xs sm:text-sm leading-relaxed text-slate-300 backdrop-blur">
        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">1. Software License Scope</h2>
          <p className="mt-2">
            These terms govern access to digital trading algorithms, Pine Script indicators, MQL5 Expert Advisors, and analytical utilities provided through Luxfocuss. All digital assets are licensed, not sold, for educational and analytical purposes.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">2. Platform Compatibility & Execution Environment</h2>
          <p className="mt-2">
            Customers are solely responsible for ensuring hardware, brokerage account type (spread and commission structure), low-latency VPS hosting, and terminal version (TradingView, MT4, MT5) compatibility prior to executing live market trades.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">3. Digital Delivery & Machine ID Authorization</h2>
          <p className="mt-2">
            Upon verified payment confirmation, license tokens and download links are delivered electronically. Multi-device activations are tied to specified machine IDs and TradingView account handles.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">4. Updates & Modifications</h2>
          <p className="mt-2">
            Luxfocuss reserves the right to deliver mandatory security patches, Pine Script optimizations, and parameter calibration updates to maintain system stability and platform compliance.
          </p>
        </div>
      </div>
    </main>
  );
}
