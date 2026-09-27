import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/my-products", label: "My Products" },
  { href: "/dashboard/downloads", label: "Downloads" },
  { href: "/dashboard/licenses", label: "Licenses" },
  { href: "/dashboard/orders", label: "Orders" },
  { href: "/dashboard/billing", label: "Billing" },
  { href: "/dashboard/profile", label: "Profile" },
  { href: "/dashboard/support", label: "Support" },
];

export function DashboardShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-10 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Customer portal</div>
          <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">{title}</h1>
        </div>
        <Link href="/" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
          Back to store
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-8">
        <aside className="overflow-x-auto rounded-[2rem] border border-white/10 bg-[#0b1118] p-3 sm:p-4">
          <nav className="flex min-w-max gap-1 lg:block lg:min-w-0 lg:space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl border border-transparent px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:border-emerald-400/20 hover:bg-emerald-500/5 hover:text-white sm:px-4 sm:py-3"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        <div>{children}</div>
      </div>
    </main>
  );
}
