import Link from "next/link";
import { Users, DollarSign, Clock, BarChart, ArrowRight, ShieldCheck } from "lucide-react";

export default function AffiliatePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header Banner */}
      <div className="rounded-[2rem] border border-emerald-400/20 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),transparent_40%),linear-gradient(180deg,#0b1118_0%,#090d13_100%)] p-6 sm:p-12 shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <Users className="h-4 w-4" /> Partner Program
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Partner with Luxfocuss. Earn Recurring Rewards.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Join leading trading educators, quantitative analysts, and Discord communities. Refer traders to institutional-grade systems and indicators with zero fluff and complete transparency.
        </p>

        {/* Benefits Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2 text-emerald-400">
              <DollarSign className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wider">Commission</span>
            </div>
            <div className="mt-2 text-xl font-bold text-white sm:text-2xl">20% Tier 1</div>
            <p className="mt-1 text-xs text-slate-400">Paid out monthly via crypto or direct wire transfer.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2 text-cyan-400">
              <Clock className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wider">Cookie Duration</span>
            </div>
            <div className="mt-2 text-xl font-bold text-white sm:text-2xl">60 Days</div>
            <p className="mt-1 text-xs text-slate-400">Extended attribution window with multi-touch tracking.</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2 text-violet-400">
              <BarChart className="h-5 w-5" />
              <span className="font-mono text-xs uppercase tracking-wider">Analytics</span>
            </div>
            <div className="mt-2 text-xl font-bold text-white sm:text-2xl">Real-time Portal</div>
            <p className="mt-1 text-xs text-slate-400">Live click-throughs, conversion funnels, and payout logs.</p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
          >
            Apply for Partner Access <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/products"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Review Catalog
          </Link>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          * Terms apply. Payouts require minimum threshold of $100. Verification and anti-fraud filters active.
        </p>
      </div>
    </main>
  );
}
