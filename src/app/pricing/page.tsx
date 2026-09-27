import Link from "next/link";
import { pricingPlans } from "@/lib/mock-data";

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Pricing</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Choose a model that matches your trading style</h1>
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
            <Link href="/checkout" className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:text-emerald-200">
              Select plan
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
