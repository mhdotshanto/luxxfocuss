"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Download, 
  Key, 
  ShoppingBag, 
  CreditCard, 
  User, 
  HelpCircle,
  Store,
  ArrowRight
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/my-products", label: "My Products", icon: Package },
  { href: "/dashboard/downloads", label: "Downloads", icon: Download },
  { href: "/dashboard/licenses", label: "Licenses", icon: Key },
  { href: "/dashboard/orders", label: "Orders", icon: ShoppingBag },
  { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/support", label: "Support", icon: HelpCircle },
];

export function DashboardShell({ children, title }: { children: React.ReactNode; title: string }) {
  const pathname = usePathname();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-300">Trader Portal</div>
          <h1 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white sm:text-3xl lg:text-4xl">{title}</h1>
        </div>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs font-semibold text-white transition hover:bg-white/10"
        >
          <Store className="h-3.5 w-3.5" /> Back to Store
        </Link>
      </div>

      {/* Portal Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr] lg:gap-8">
        {/* Navigation Sidebar / Horizontal Tab Bar */}
        <aside className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-3 sm:p-4 backdrop-blur">
          {/* Mobile Horizontal Scrollable Pills */}
          <nav className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 lg:flex-col lg:overflow-visible lg:gap-1 lg:pb-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-xs font-semibold transition sm:text-sm lg:w-full ${
                    isActive
                      ? "border border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
                      : "border border-transparent text-slate-400 hover:border-white/10 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Content Area */}
        <div className="min-w-0">{children}</div>
      </div>
    </main>
  );
}
