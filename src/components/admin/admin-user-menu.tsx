"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import { ChevronsUpDown, LogOut, ExternalLink, ShieldCheck, Loader2 } from "lucide-react";
import Link from "next/link";
import { adminLogoutAction } from "@/app/actions/auth-actions";

interface AdminUserMenuProps {
  admin: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  };
  isCollapsed: boolean;
}

export function AdminUserMenu({ admin, isCollapsed }: AdminUserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const menuRef = useRef<HTMLDivElement>(null);

  const name = admin.name || "Administrator";
  const email = admin.email || "admin@luxfocuss.com";
  const role = admin.role || "ADMIN";
  const isSuperAdmin = role === "SUPER_ADMIN";

  // Derive 2-letter initials for avatar
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSignOut = () => {
    startTransition(async () => {
      await adminLogoutAction();
    });
  };

  return (
    <div ref={menuRef} className="relative w-full">
      {/* Upward Floating Popover Menu */}
      {isOpen && (
        <div
          className={`absolute bottom-full mb-2 z-50 rounded-2xl border border-white/10 bg-[#0c131d]/95 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 ${isCollapsed ? "left-0 w-64" : "left-0 right-0 w-full"
            }`}
        >
          {/* User Profile Header */}
          <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-sm font-black text-slate-950 shadow-md">
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="truncate text-xs font-bold text-white">{name}</span>
                <span
                  className={`shrink-0 rounded px-1.5 py-0.2 text-[8px] font-mono font-black uppercase ${isSuperAdmin
                    ? "border border-purple-400/30 bg-purple-500/15 text-purple-300"
                    : "border border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
                    }`}
                >
                  {isSuperAdmin ? "SUPER" : "ADMIN"}
                </span>
              </div>
              <div className="truncate text-[11px] text-slate-400">{email}</div>
            </div>
          </div>

          <div className="my-1.5 h-px bg-white/10" />

          {/* Menu Actions */}
          <div className="space-y-0.5">
            <Link
              href="/"
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5 text-emerald-400" />
              <span>Live Storefront</span>
              <span className="ml-auto text-[10px] text-slate-500 font-mono">↗</span>
            </Link>

            <div className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
              <span>Security Status: Active</span>
            </div>
          </div>

          <div className="my-1.5 h-px bg-white/10" />

          {/* Sign Out Trigger */}
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isPending}
            className="flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-semibold text-rose-400 transition hover:bg-rose-500/10 hover:text-rose-300 disabled:opacity-50"
          >
            {isPending ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <LogOut className="h-3.5 w-3.5" />
            )}
            <span>{isPending ? "Terminating Session..." : "Log out"}</span>
          </button>
        </div>
      )}

      {/* Trigger Button on Sidebar Bottom */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`group flex w-full cursor-pointer items-center gap-3 rounded-xl border border-transparent p-2 text-left transition hover:border-white/10 hover:bg-white/5 focus:outline-none ${
          isOpen ? "border-white/15 bg-white/5" : ""
        } ${isCollapsed ? "justify-center" : ""}`}
        title={isCollapsed ? `${name} (${email})` : undefined}
      >
        {/* Avatar */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 font-mono text-xs font-black text-slate-950 shadow-md transition group-hover:scale-105">
          {initials}
        </div>

        {/* Identity & Caret (Hidden when Collapsed) */}
        {!isCollapsed && (
          <>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs font-bold text-white group-hover:text-emerald-300 transition">
                {name}
              </div>
              <div className="truncate text-[11px] text-slate-400">{email}</div>
            </div>
            <ChevronsUpDown className="h-4 w-4 shrink-0 text-slate-500 group-hover:text-slate-300 transition" />
          </>
        )}
      </button>
    </div>
  );
}
