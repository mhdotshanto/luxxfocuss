import Link from "next/link";
import { ShieldCheck, BarChart3, Lock, Award, Users, ArrowRight, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <ShieldCheck className="h-4 w-4" /> About Luxfocuss
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Institutional-Grade Engineering for Systematic Traders
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          We engineer high-expectancy algorithmic tools, Pine Script indicators, and automated MT5 execution systems built on statistical rigor and transparent validation.
        </p>
      </div>

      {/* Main Philosophy & Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-10 backdrop-blur lg:col-span-7">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400">Our Mission</div>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Eliminating Noise with Mathematical Precision</h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                Luxfocuss was founded to solve a fundamental deficiency in retail trading software: black-box algorithms with zero verifiable edge.
              </p>
              <p>
                Every indicator and Expert Advisor in our ecosystem is designed around structured order flow dynamics, multi-factor liquidity sweeps, and volatility normalization. We provide complete transparency through verifiable backtest telemetry, forward execution metrics, and comprehensive educational documentation.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/performance"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Verification Data
            </Link>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
          {[
            {
              icon: BarChart3,
              label: "Quantitative Focus",
              desc: "Algorithms calibrated through walk-forward testing and Monte Carlo stress tests.",
            },
            {
              icon: Lock,
              label: "Zero Curve-Fitting",
              desc: "Out-of-sample data verification across diverse market volatility regimes.",
            },
            {
              icon: Users,
              label: "Prop Trader Ready",
              desc: "Engineered specifically to satisfy strict maximum drawdown rules and consistency targets.",
            },
            {
              icon: Zap,
              label: "Ultra Low Latency",
              desc: "Optimized Pine Script v5 code and native C++ MQL5 compiled execution engines.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-[#0b1118]/80 p-5 backdrop-blur">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white">{item.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
