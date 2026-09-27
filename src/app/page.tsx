import Link from "next/link";
import { categories, eaProductSpecs, faqItems, pricingPlans, products } from "@/lib/mock-data";
import { ProductCard } from "@/components/product-card";

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <div className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{label}</div>
      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),transparent_30%),linear-gradient(180deg,#05070b_0%,#090d13_100%)]">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
          <div className="mb-8 flex flex-col items-start gap-3 sm:mb-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-[10px] uppercase tracking-[0.28em] text-emerald-300/80 sm:text-xs sm:tracking-[0.4em]">Trading technology catalog</div>
            <div className="rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] text-amber-200 sm:text-xs">
              Sample catalog · Sep 2026
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-emerald-200 sm:mb-6 sm:text-xs sm:tracking-[0.25em]">
                Professional execution systems
              </div>

              <h1 className="max-w-2xl text-4xl font-black tracking-[-0.06em] text-white sm:text-6xl">
                Trade Smarter. Automate Better.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
                A focused catalog of Expert Advisors, indicators, execution utilities, and managed hosting for MetaTrader and TradingView workflows.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
                <Link href="/products" className="rounded-full bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                  Explore Products
                </Link>
                <Link href="/pricing" className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:text-emerald-200">
                  View Performance
                </Link>
              </div>

              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                <MetricPill label="EA suite products" value={`${eaProductSpecs.length}`} />
                <MetricPill label="Supported platforms" value="3" />
                <MetricPill label="Support response" value="1 day" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle,_rgba(16,185,129,0.25),transparent_60%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-emerald-400/20 bg-[#0b1118]/90 p-3 shadow-[0_40px_80px_rgba(0,0,0,0.7)] sm:rounded-[2rem] sm:p-4">
                <div className="mb-4 flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Illustrative setup</div>
                    <div className="mt-1 text-lg font-semibold text-white sm:text-xl">XAUUSD Setup</div>
                  </div>
                  <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-emerald-300 sm:px-2.5 sm:text-[10px] sm:tracking-[0.2em]">
                    Example data only
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d161d] p-4">
                  <div className="mb-4 flex items-end justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Pair</div>
                      <div className="text-2xl font-bold text-white">XAUUSD</div>
                    </div>
                    <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                      BUY
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex items-center justify-between"><span>Entry</span><span className="font-medium text-white">2,345.21</span></div>
                    <div className="flex items-center justify-between"><span>SL</span><span className="font-medium text-red-300">2,328.40</span></div>
                    <div className="flex items-center justify-between"><span>TP</span><span className="font-medium text-emerald-300">2,372.60</span></div>
                    <div className="flex items-center justify-between"><span>Risk</span><span className="font-medium text-white">1%</span></div>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-3">
                    <div className="flex h-20 items-end gap-1">
                      {[24, 28, 22, 35, 31, 40, 36, 54, 48, 62, 58, 68, 72, 70, 84, 80, 96, 88, 112, 105, 118, 126].map((height, idx) => (
                        <div key={idx} className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-500 to-emerald-300/80" style={{ height: `${height}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a0f14]">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 text-center sm:grid-cols-2 sm:gap-5 sm:py-8 lg:grid-cols-6 lg:px-8">
          {[
            "MT4 and MT5 products",
            "TradingView products",
            "Account-based licensing",
            "Digital delivery",
            "Documented updates",
            "Email support",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-3 text-xs font-medium text-slate-200 sm:px-4 sm:py-5 sm:text-sm">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Featured products</div>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Tools with clear scope and platform fit</h2>
          </div>
          <Link href="/products" className="text-sm font-medium text-emerald-300 transition hover:text-emerald-200">
            Browse all products →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-5 rounded-[1.5rem] border border-emerald-400/20 bg-emerald-500/5 p-5 sm:gap-6 sm:rounded-[2rem] sm:p-8 lg:flex-row lg:items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Curated access</div>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Build a complete trading workflow</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">Combine execution, analysis, and risk tools with transparent bundle pricing and documented platform compatibility.</p>
          </div>
          <Link href="/bundles" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Explore bundles</Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1118]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-8 text-center sm:mb-10">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Categories</div>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Built for every part of the trading workflow</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className={`rounded-3xl border border-white/10 bg-gradient-to-br ${category.accent} p-[1px] transition hover:-translate-y-1 hover:border-emerald-400/40`}
              >
                <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-[#0b1118]/90 p-6">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-3xl">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-[0.1em] text-white">{category.name}</h3>
                  <p className="mt-3 text-slate-300">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Performance</div>
            <h2 className="mt-3 text-3xl font-bold text-white">Performance data, clearly labeled</h2>
          </div>
          <div className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200">
            Illustrative sample metrics
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
          {[
            { label: "Backtest", value: "2022-2025" },
            { label: "Profit Factor", value: "1.92" },
            { label: "Max Drawdown", value: "17.4%" },
            { label: "Total Trades", value: "1,284" },
            { label: "Win Rate", value: "62.1%" },
            { label: "Average R:R", value: "1.8" },
          ].map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">{metric.label}</div>
              <div className="mt-3 text-2xl font-bold text-white">{metric.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-[#0b1118] p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-lg font-semibold text-white">Sample equity curve</div>
            <div className="flex gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
              <span>Backtest</span>
              <span>Forward Test</span>
              <span>Live</span>
            </div>
          </div>
          <div className="flex h-48 items-end gap-2">
            {[20, 25, 30, 28, 34, 45, 52, 58, 67, 72, 81, 96, 104, 112, 120].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald-500 to-emerald-300/90" style={{ height: `${height}%` }} />
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-400">
            Past performance does not guarantee future results. Trading involves substantial risk.
          </p>
        </div>
      </section>

      <section className="bg-[#0a0f14]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">How it works</div>
            <h2 className="mt-3 text-3xl font-bold text-white">From purchase to live execution</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              "Choose Your Tool",
              "Complete Checkout",
              "Receive Your License",
              "Download & Activate",
            ].map((step, index) => (
              <div key={step} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <div className="mb-5 text-3xl font-black text-emerald-300">0{index + 1}</div>
                <div className="text-xl font-semibold text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Why traders choose us</div>
          <h2 className="mt-3 text-3xl font-bold text-white">A disciplined approach to trading technology</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Professional Development",
            "Data-Driven Design",
            "Transparent Performance",
            "Secure Licensing",
            "Continuous Updates",
            "Trader Support",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6">
              <div className="mb-4 h-10 w-10 rounded-xl bg-emerald-500/10 text-center text-lg leading-10 text-emerald-300">✓</div>
              <h3 className="text-xl font-semibold text-white">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0f14]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Pricing</div>
              <h2 className="mt-3 text-3xl font-bold text-white">Flexible access for every trading workflow</h2>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`rounded-3xl border p-6 ${plan.popular ? "border-emerald-400/40 bg-emerald-500/5" : "border-white/10 bg-slate-950/50"}`}>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-300">{plan.name}</div>
                <div className="mt-4 text-4xl font-black text-white">{plan.price}</div>
                <p className="mt-3 text-sm text-slate-400">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2"><span className="text-emerald-300">✓</span>{feature}</li>
                  ))}
                </ul>
                <Link href="/pricing" className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:text-emerald-200">
                  Choose plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">FAQ</div>
          <h2 className="mt-3 text-3xl font-bold text-white">Common questions from traders</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-lg font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
