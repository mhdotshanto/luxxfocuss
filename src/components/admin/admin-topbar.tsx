"use client";

import { Menu, Activity, ShieldCheck } from "lucide-react";

interface AdminTopBarProps {
  onOpenMobile: () => void;
  admin: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  };
}

export function AdminTopBar({ onOpenMobile, admin }: AdminTopBarProps) {
  const isSuperAdmin = admin.role === "SUPER_ADMIN";

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-white/10 bg-[#080c12]/90 px-4 sm:px-6 backdrop-blur-md">
      {/* Left: Mobile Menu Trigger + Breadcrumb */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenMobile}
          aria-label="Open mobile sidebar"
          className="inline-flex lg:hidden h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Admin</span>
            <span>/</span>
            <span className="font-semibold text-white">Operations & Telemetry</span>
          </div>
        </div>
      </div>

      {/* Right: Live Telemetry Indicator & Role Pill */}
      <div className="flex items-center gap-3">
        <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300">
          <Activity className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
          <span>Engine Status: Healthy (99.98%)</span>
        </div>

        <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/70 px-2.5 py-1 text-[11px] font-mono font-bold uppercase">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span className={isSuperAdmin ? "text-purple-300" : "text-emerald-300"}>
            {isSuperAdmin ? "SUPER ADMIN" : "ADMIN"}
          </span>
        </div>
      </div>
    </header>
  );
}
