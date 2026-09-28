import Link from "next/link";
import { Dropdown, type DropdownItem } from "@/components/dropdown";

const productsNav: DropdownItem[] = [
  { label: "All products", href: "/products", description: "Browse the full catalog" },
  { label: "EA Bots", href: "/category/ea-bots", description: "MT4 and MT5 automation" },
  { label: "TradingView Indicators", href: "/category/tradingview-indicators", description: "Structure and liquidity tools" },
  { label: "MT5 Indicators", href: "/category/mt5-indicators", description: "Context for MetaTrader workflows" },
  { label: "Trading Tools", href: "/category/trading-tools", description: "Execution and risk utilities" },
];

const resourcesNav: DropdownItem[] = [
  { label: "Performance", href: "/performance", description: "Evidence and sample records" },
  { label: "Education", href: "/education", description: "Trading workflow guides" },
  { label: "Documentation", href: "/documentation", description: "Installation and setup" },
  { label: "Course", href: "/course", description: "ORB training modules" },
  { label: "Strategy", href: "/strategy", description: "ORB learning and examples" },
  { label: "FAQ", href: "/faq", description: "Common product questions" },
];

const companyNav: DropdownItem[] = [
  { label: "About Luxfocuss", href: "/about" },
  { label: "Contact support", href: "/contact" },
  { label: "Affiliate program", href: "/affiliate" },
];

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
          <Link href="/" className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">
            Home
          </Link>

          <Dropdown label="Products" items={productsNav} widthClass="w-72" />

          <Link href="/bundles" className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-white">
            Bundles
          </Link>

          <Dropdown label="Resources" items={resourcesNav} widthClass="w-64" />

          <Dropdown label="Company" items={companyNav} widthClass="w-56" />
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
