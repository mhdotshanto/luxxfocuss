import Link from "next/link";
import { Book, Cpu, FileText, Globe, Server, Key, ArrowRight, ShieldCheck } from "lucide-react";

const docSections = [
  {
    icon: Book,
    title: "Installation & Setup Guide",
    text: "Step-by-step instructions for installing TradingView indicators, Pine Script access authorization, and platform preferences.",
    badge: "Quickstart",
    href: "#",
  },
  {
    icon: FileText,
    title: "Operating Manual & Signals",
    text: "Comprehensive handbook detailing signal interpretation, risk/reward overlays, bias filters, and invalidation zones.",
    badge: "Manual",
    href: "#",
  },
  {
    icon: Cpu,
    title: "Expert Advisor (EA) Guide",
    text: "Deployment checklist, set files loading, automated execution parameters, and lot-sizing formulas for MT4 and MT5.",
    badge: "Automation",
    href: "#",
  },
  {
    icon: Globe,
    title: "Broker & Liquidity Notes",
    text: "Execution latencies, raw spread recommendations, commission models, and slippage mitigation protocols.",
    badge: "Execution",
    href: "#",
  },
  {
    icon: Server,
    title: "Low-Latency VPS Setup",
    text: "Recommended hardware configurations, Windows server setups, and 24/7 uptime monitoring for automated trading.",
    badge: "Infrastructure",
    href: "#",
  },
  {
    icon: Key,
    title: "Licensing & Machine IDs",
    text: "Multi-device authorization, TradingView username binding, license transfers, and automated update delivery.",
    badge: "Account",
    href: "#",
  },
];

export default function DocumentationPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          Knowledge Repository
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Documentation & Deployment Guides
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Everything required to deploy, configure, and operate Luxfocuss algorithms, indicators, and execution engines with zero friction.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {docSections.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-emerald-400 transition group-hover:bg-emerald-500/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {item.badge}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-bold text-white sm:text-xl group-hover:text-emerald-300 transition">
                  {item.title}
                </h2>
                <p className="mt-3 text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {item.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 transition group-hover:gap-2">
                  Read documentation <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support Callout */}
      <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 text-center backdrop-blur">
        <h3 className="text-lg font-bold text-white sm:text-xl">Need Personalized Implementation Assistance?</h3>
        <p className="mx-auto mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
          Our engineering support team is available 24/5 to assist with custom VPS setups, Pine Script integration, or brokerage API questions.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            Contact Engineering Support
          </Link>
        </div>
      </div>
    </main>
  );
}
