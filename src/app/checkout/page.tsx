"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setLoading(true);
    setError("");
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ productSlug: "gold-hunter-ea", quantity: 1 }),
    });
    const result = await response.json();
    if (response.ok && result.url) {
      window.location.assign(result.url);
      return;
    }
    setError(result.error ?? "Unable to start checkout.");
    setLoading(false);
  }

  return (
    <main className="mx-auto max-w-6xl px-3 py-10 sm:px-6 sm:py-16 lg:px-8">
      <div className="mb-8 text-center sm:mb-10">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Checkout</div>
        <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Complete your purchase</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <form className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-4 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Name" />
            <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email" />
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Country" />
            <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Payment method" />
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Supported gateways</div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
              <span className="rounded-full border border-white/10 px-2 py-1">Stripe</span>
              <span className="rounded-full border border-white/10 px-2 py-1">PayPal</span>
              <span className="rounded-full border border-white/10 px-2 py-1">Paddle</span>
              <span className="rounded-full border border-white/10 px-2 py-1">Lemon Squeezy</span>
              <span className="rounded-full border border-white/10 px-2 py-1">Crypto</span>
            </div>
          </div>

          {error && <p className="mt-4 text-sm text-rose-300">{error}</p>}
          <button onClick={startCheckout} disabled={loading} className="mt-8 w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 disabled:cursor-wait disabled:opacity-60">
            {loading ? "Opening secure checkout..." : "Complete Purchase"}
          </button>
        </form>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-4 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Order summary</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div>
                <div className="font-medium text-white">Gold Hunter EA</div>
                <div className="text-sm text-slate-400">1 Device / 1 Account</div>
              </div>
              <div className="font-semibold text-white">$149</div>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between"><span>Subtotal</span><span>$149.00</span></div>
              <div className="flex items-center justify-between"><span>Discount</span><span>-$0.00</span></div>
              <div className="flex items-center justify-between"><span>Tax</span><span>$0.00</span></div>
              <div className="flex items-center justify-between border-t border-white/10 pt-3 text-lg font-semibold text-white"><span>Total</span><span>$149.00</span></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
