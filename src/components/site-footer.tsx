import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 sm:py-14 lg:grid-cols-5 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-2">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-lg font-bold text-emerald-300">
              L
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.32em] text-white/70">LUXFOCUSS</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-emerald-300/80">institutional tools</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Premium digital trading products for algorithmic traders, prop firms, and data-driven investors.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Products</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/products" className="transition hover:text-emerald-300">Marketplace</Link></li>
            <li><Link href="/category/ea-bots" className="transition hover:text-emerald-300">EA Bots</Link></li>
            <li><Link href="/category/tradingview-indicators" className="transition hover:text-emerald-300">Indicators</Link></li>
            <li><Link href="/pricing" className="transition hover:text-emerald-300">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Resources</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/documentation" className="transition hover:text-emerald-300">Documentation</Link></li>
            <li><Link href="/faq" className="transition hover:text-emerald-300">FAQ</Link></li>
            <li><Link href="/about" className="transition hover:text-emerald-300">About</Link></li>
            <li><Link href="/contact" className="transition hover:text-emerald-300">Support</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Legal</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/terms" className="transition hover:text-emerald-300">Terms</Link></li>
            <li><Link href="/privacy" className="transition hover:text-emerald-300">Privacy</Link></li>
            <li><Link href="/refund-policy" className="transition hover:text-emerald-300">Refund Policy</Link></li>
            <li><Link href="/risk-disclosure" className="transition hover:text-emerald-300">Risk Disclosure</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center gap-2 px-4 py-6 text-xs leading-relaxed text-slate-400 sm:px-6 sm:text-sm lg:px-8">
          <p className="font-medium text-slate-400">© 2026 Luxfocuss. Demo data only. Use for evaluation.</p>
          <p className="max-w-3xl text-[11px] leading-5 text-slate-500 sm:text-xs">
            Trading leveraged financial products involves significant risk and may not be suitable for all investors.
          </p>
        </div>
      </div>
    </footer>
  );
}
