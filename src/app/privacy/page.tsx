import { Lock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <Lock className="h-4 w-4" /> Data Privacy & Security
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-xs text-slate-400">Last updated: September 2026</p>
      </div>

      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-10 text-xs sm:text-sm leading-relaxed text-slate-300 backdrop-blur">
        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">1. Information Collection</h2>
          <p className="mt-2">
            Luxfocuss collects user email addresses, TradingView handles, and machine authorization identifiers strictly necessary to deliver digital indicators, generate license keys, and provide customer support.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">2. Payment & Cryptographic Security</h2>
          <p className="mt-2">
            All credit card and crypto transaction data is handled directly by PCI-DSS certified gateway partners (Stripe, Paddle, Lemon Squeezy). Luxfocuss never stores full credit card numbers or unhashed customer passwords.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">3. Non-Disclosure & Anti-Telemetry</h2>
          <p className="mt-2">
            We do not sell customer data to third-party brokers or advertisers. Our indicator scripts run locally on client TradingView/MT5 terminals and do not harvest personal trade logs or confidential account balances.
          </p>
        </div>
      </div>
    </main>
  );
}
