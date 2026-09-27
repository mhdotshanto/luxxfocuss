import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b11]/90 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-3 py-2.5 sm:gap-6 sm:px-6 lg:px-8 lg:py-3">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-lg font-bold text-emerald-300 sm:h-10 sm:w-10">
            L
          </div>
          <div className="hidden sm:block">
            <div className="text-xs font-semibold tracking-[0.28em] text-white/70 sm:text-sm sm:tracking-[0.32em]">LUXFOCUSS</div>
            <div className="text-[9px] uppercase tracking-[0.22em] text-emerald-300/80 sm:text-[10px] sm:tracking-[0.3em]">trading systems</div>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center gap-1 text-sm text-slate-300 lg:flex">
          <Link href="/" className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">Home</Link>

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white [&::-webkit-details-marker]:hidden">
              Products
              <span className="text-[10px] text-slate-500 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-72 translate-y-1 rounded-2xl border border-white/10 bg-[#0b1118] p-2 opacity-0 shadow-2xl shadow-black/40 transition group-open:visible group-open:translate-y-0 group-open:opacity-100">
              <Link href="/products" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">All products</div><div className="mt-1 text-xs text-slate-500">Browse the full catalog</div></Link>
              <Link href="/category/ea-bots" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">EA Bots</div><div className="mt-1 text-xs text-slate-500">MT4 and MT5 automation</div></Link>
              <Link href="/category/tradingview-indicators" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">TradingView Indicators</div><div className="mt-1 text-xs text-slate-500">Structure and liquidity tools</div></Link>
              <Link href="/category/mt5-indicators" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">MT5 Indicators</div><div className="mt-1 text-xs text-slate-500">Context for MetaTrader workflows</div></Link>
              <Link href="/category/trading-tools" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">Trading Tools</div><div className="mt-1 text-xs text-slate-500">Execution and risk utilities</div></Link>
            </div>
          </details>

          <Link href="/bundles" className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">Bundles</Link>

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white [&::-webkit-details-marker]:hidden">
              Resources
              <span className="text-[10px] text-slate-500 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 translate-y-1 rounded-2xl border border-white/10 bg-[#0b1118] p-2 opacity-0 shadow-2xl shadow-black/40 transition group-open:visible group-open:translate-y-0 group-open:opacity-100">
              <Link href="/performance" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">Performance</div><div className="mt-1 text-xs text-slate-500">Evidence and sample records</div></Link>
              <Link href="/education" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">Education</div><div className="mt-1 text-xs text-slate-500">Trading workflow guides</div></Link>
              <Link href="/documentation" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">Documentation</div><div className="mt-1 text-xs text-slate-500">Installation and setup</div></Link>
              <Link href="/course" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">Course</div><div className="mt-1 text-xs text-slate-500">ORB training modules</div></Link>
              <Link href="/strategy" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">Strategy</div><div className="mt-1 text-xs text-slate-500">ORB learning and examples</div></Link>
              <Link href="/faq" className="block rounded-xl px-4 py-3 hover:bg-white/5"><div className="font-medium text-white">FAQ</div><div className="mt-1 text-xs text-slate-500">Common product questions</div></Link>
            </div>
          </details>

          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white [&::-webkit-details-marker]:hidden">
              Company
              <span className="text-[10px] text-slate-500 transition group-open:rotate-180">⌄</span>
            </summary>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 translate-y-1 rounded-2xl border border-white/10 bg-[#0b1118] p-2 opacity-0 shadow-2xl shadow-black/40 transition group-open:visible group-open:translate-y-0 group-open:opacity-100">
              <Link href="/about" className="block rounded-xl px-4 py-3 font-medium text-white hover:bg-white/5">About Luxfocuss</Link>
              <Link href="/contact" className="block rounded-xl px-4 py-3 font-medium text-white hover:bg-white/5">Contact support</Link>
              <Link href="/affiliate" className="block rounded-xl px-4 py-3 font-medium text-white hover:bg-white/5">Affiliate program</Link>
            </div>
          </details>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/checkout" aria-label="Open cart" className="rounded-xl border border-white/10 px-2.5 py-2 text-xs text-slate-300 transition hover:border-emerald-400/40 hover:text-white sm:px-3 sm:text-sm">
            Cart <span className="ml-1 text-emerald-300">0</span>
          </Link>
          <Link href="/login" className="hidden rounded-xl border border-white/10 px-3 py-2 text-sm text-slate-200 transition hover:border-emerald-400/40 hover:text-white sm:inline-flex">
            Sign in
          </Link>
          <Link href="/register" className="inline-flex rounded-full bg-emerald-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400 sm:px-4 sm:text-sm">
            Register
          </Link>
        </div>
      </div>

      <nav className="scrollbar-hidden flex gap-1 overflow-x-auto border-t border-white/5 bg-black/10 px-3 py-2 text-xs text-slate-400 lg:hidden">
        <Link href="/products" className="shrink-0 rounded-xl bg-white/5 px-3 py-2 text-slate-200">Products</Link>
        <Link href="/bundles" className="shrink-0 rounded-lg px-3 py-2 hover:bg-white/5">Bundles</Link>
        <Link href="/performance" className="shrink-0 rounded-lg px-3 py-2 hover:bg-white/5">Performance</Link>
        <Link href="/education" className="shrink-0 rounded-lg px-3 py-2 hover:bg-white/5">Education</Link>
        <Link href="/course" className="shrink-0 rounded-lg px-3 py-2 hover:bg-white/5">Course</Link>
        <Link href="/strategy" className="shrink-0 rounded-lg px-3 py-2 hover:bg-white/5">Strategy</Link>
        <Link href="/documentation" className="shrink-0 rounded-lg px-3 py-2 hover:bg-white/5">Docs</Link>
      </nav>
    </header>
  );
}
