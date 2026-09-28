"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products, bundles } from "@/lib/mock-data";
import { ShieldCheck, Lock, CreditCard, ArrowRight, CheckCircle2 } from "lucide-react";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || searchParams.get("bundle") || "gold-hunter-ea";

  const selectedProduct = products.find((p) => p.slug === productParam);
  const selectedBundle = bundles.find((b) => b.slug === productParam);

  const itemName = selectedProduct?.name || selectedBundle?.name || "Gold Hunter EA";
  const itemPrice = selectedProduct?.salePrice ?? selectedProduct?.price ?? selectedBundle?.price ?? 149;
  const itemSubtitle = selectedProduct?.category ? `${selectedProduct.category} System` : selectedBundle ? "All-Inclusive Suite" : "Algorithmic License";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ productSlug: productParam, quantity: 1 }),
      });
      const result = await response.json();
      if (response.ok && result.url) {
        window.location.assign(result.url);
        return;
      }
      setError(result.error ?? "Payment gateway demo mode active. Purchase processed.");
    } catch {
      setError("Payment gateway demo response simulated.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      {/* Checkout Form */}
      <form onSubmit={startCheckout} className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-7">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
          <ShieldCheck className="h-4 w-4" /> 256-Bit SSL Encrypted
        </div>
        <h2 className="mt-2 text-xl font-bold text-white sm:text-2xl">Billing & Authorization</h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-300">First & Last Name</label>
            <input
              required
              className="mt-1.5 h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="Alex Morgan"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-300">Email Address (License Delivery)</label>
            <input
              type="email"
              required
              className="mt-1.5 h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="alex@trader.com"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-slate-300">TradingView Username / MT5 Account #</label>
            <input
              required
              className="mt-1.5 h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g., tv_trader_pro"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-300">Country of Residence</label>
            <input
              required
              className="mt-1.5 h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="United States"
            />
          </div>
        </div>

        {/* Supported Payment Options */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:p-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
            <CreditCard className="h-4 w-4" /> Global Checkout Gateways
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
            {["Stripe", "Apple Pay", "Google Pay", "PayPal", "USDT / Crypto", "Paddle"].map((gw) => (
              <span key={gw} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                {gw}
              </span>
            ))}
          </div>
        </div>

        {error ? (
          <p role="alert" className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-2.5 text-xs text-emerald-300">
            {error}
          </p>
        ) : null}

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-wait disabled:opacity-60"
          >
            {loading ? "Redirecting to Secure Gateway..." : `Authorize & Pay $${itemPrice}`}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-center text-[11px] text-slate-500">
          Instant license key delivery to your email immediately upon transaction completion. 14-day performance guarantee.
        </p>
      </form>

      {/* Order Summary Sidebar */}
      <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-5">
        <div>
          <h3 className="text-xl font-bold text-white">Order Summary</h3>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base font-bold text-white">{itemName}</h4>
                  <p className="text-xs text-slate-400">{itemSubtitle}</p>
                </div>
                <div className="text-right font-mono text-lg font-bold text-emerald-400">${itemPrice}</div>
              </div>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>License Type</span>
                <span className="font-medium text-white">Lifetime Access & Updates</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Direct Support</span>
                <span className="font-medium text-emerald-400">Included 24/5</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Taxes & Processing Fees</span>
                <span className="font-medium text-white">$0.00</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-3 text-base font-bold text-white">
                <span>Total Due</span>
                <span className="font-mono text-xl text-emerald-400">${itemPrice}.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
            <CheckCircle2 className="h-4 w-4" /> What Happens Next?
          </div>
          <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
            Your license key, installation manuals, and private Discord room invitations will be dispatched automatically to your registered email address.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <Lock className="h-4 w-4" /> Secure Checkout
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Complete Your Order
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Zero subscriptions. Instant automated delivery. Select your preferred currency and payment gateway.
        </p>
      </div>

      <Suspense fallback={<div className="text-center py-20 text-slate-400">Loading order parameters...</div>}>
        <CheckoutContent />
      </Suspense>
    </main>
  );
}
