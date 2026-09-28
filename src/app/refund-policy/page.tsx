import { RefreshCw } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <RefreshCw className="h-4 w-4" /> Consumer Protection
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Refund & Guarantee Policy</h1>
        <p className="mt-2 text-xs text-slate-400">Last updated: September 2026</p>
      </div>

      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-10 text-xs sm:text-sm leading-relaxed text-slate-300 backdrop-blur">
        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">1. Digital Asset Delivery Terms</h2>
          <p className="mt-2">
            Because digital indicator source codes, EA binaries, and Pine Script invite-only permissions are delivered immediately upon checkout, standard consumer physical return policies do not apply once digital tokens are provisioned.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">2. 14-Day Technical Defect Guarantee</h2>
          <p className="mt-2">
            If a customer experiences an unresolvable technical defect, compile error, or platform incompatibility that our support team cannot rectify within 72 hours, a full refund will be processed upon verification.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-white sm:text-lg">3. Duplicate Purchase Protection</h2>
          <p className="mt-2">
            Accidental duplicate transactions or redundant bundle purchases will be refunded immediately without penalty upon contacting our billing desk at support@luxfocuss.com.
          </p>
        </div>
      </div>
    </main>
  );
}
