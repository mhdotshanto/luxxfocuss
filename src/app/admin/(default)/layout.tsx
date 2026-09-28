import { redirect } from "next/navigation";
import Link from "next/link";
import { Shield, Activity, Lock } from "lucide-react";
import { getCurrentAdmin } from "@/lib/auth";
import { AdminSignOutButton } from "@/components/admin-signout-button";

export default async function AdminBackofficeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getCurrentAdmin();

  if (!admin) {
    redirect("/admin/login");
  }

  const isSuperAdmin = (admin as any).role === "SUPER_ADMIN";

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      {/* Backoffice Dedicated Header Bar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080c12]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand & Portal Type */}
          <div className="flex items-center gap-4">
            <Link href="/admin" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold tracking-tight text-white">
                    LUX<span className="text-emerald-400">FOCUSS</span>
                  </span>
                  <span className="rounded bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                    Backoffice
                  </span>
                </div>
              </div>
            </Link>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1 pl-6">
              <Link
                href="/admin"
                className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/15"
              >
                Telemetry & Ops
              </Link>
              <Link
                href="/"
                target="_blank"
                className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                Live Storefront ↗
              </Link>
            </nav>
          </div>

          {/* Admin Identity, Role Badge, & Sign Out */}
          <div className="flex items-center gap-3">
            {/* Live Telemetry Pill */}
            <div className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-mono text-emerald-300">
              <Activity className="h-3 w-3 text-emerald-400 animate-pulse" />
              <span>Live Engine</span>
            </div>

            {/* Admin Role Badge & Identity */}
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-1.5">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-semibold text-white">{admin.name || "Administrator"}</div>
                <div className="text-[10px] text-slate-400">{admin.email}</div>
              </div>
              <span
                className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono font-bold uppercase ${
                  isSuperAdmin
                    ? "border border-purple-400/30 bg-purple-500/10 text-purple-300"
                    : "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                }`}
              >
                {isSuperAdmin ? "SUPER ADMIN" : "ADMIN"}
              </span>
            </div>

            {/* Sign Out Action */}
            <AdminSignOutButton />
          </div>
        </div>
      </header>

      {/* Admin Content Viewport */}
      {children}
    </div>
  );
}
