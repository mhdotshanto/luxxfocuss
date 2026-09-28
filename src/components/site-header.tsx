"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dropdown, type DropdownItem } from "@/components/dropdown";
import { MobileNav } from "@/components/mobile-nav";

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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070b11]/90 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:gap-6 sm:px-6 lg:px-8 lg:py-3">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/40 bg-emerald-500/10 text-lg font-bold text-emerald-300 sm:h-10 sm:w-10">
            L
          </div>
          <div>
            <div className="text-xs font-semibold tracking-[0.24em] text-white/90 sm:text-sm sm:tracking-[0.32em]">LUXFOCUSS</div>
            <div className="text-[8px] uppercase tracking-[0.2em] text-emerald-300/90 sm:text-[10px] sm:tracking-[0.3em]">trading systems</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-w-0 flex-1 items-center gap-1 text-sm text-slate-300 lg:flex ml-6">
          <Link
            href="/"
            className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
              pathname === "/"
                ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Dropdown label="Products" items={productsNav} widthClass="w-72" />

          <Link
            href="/bundles"
            className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
              pathname === "/bundles"
                ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            Bundles
          </Link>

          <Dropdown label="Resources" items={resourcesNav} widthClass="w-64" />

          <Dropdown label="Company" items={companyNav} widthClass="w-56" />

          <Link
            href="/pricing"
            className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
              pathname === "/pricing"
                ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            Pricing
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Link
            href="/checkout"
            aria-label="Open cart"
            className="flex h-10 items-center rounded-xl border border-white/10 px-3 text-xs text-slate-300 transition hover:border-emerald-400/40 hover:text-white sm:text-sm"
          >
            Cart <span className="ml-1.5 font-semibold text-emerald-300">0</span>
          </Link>
          <Link
            href="/login"
            className="hidden h-10 items-center rounded-xl border border-white/10 px-3.5 text-sm font-medium text-slate-200 transition hover:border-emerald-400/40 hover:text-white sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="/register"
            className="hidden h-10 items-center rounded-full bg-emerald-500 px-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:inline-flex"
          >
            Register
          </Link>

          {/* Mobile Hamburger Drawer Toggle (< 1024px) */}
          <MobileNav
            productsNav={productsNav}
            resourcesNav={resourcesNav}
            companyNav={companyNav}
          />
        </div>
      </div>
    </header>
  );
}
