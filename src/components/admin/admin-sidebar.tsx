"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  MessageSquare,
  ShoppingBag,
  Key,
  Users,
  ExternalLink,
  PanelLeftClose,
  PanelLeftOpen,
  Shield,
  X,
} from "lucide-react";
import { AdminUserMenu } from "./admin-user-menu";

interface AdminSidebarProps {
  admin: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  };
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItem {
  label: string;
  href: string;
  icon: any;
  badge?: string;
  external?: boolean;
}

const navGroups: { group: string; items: NavItem[] }[] = [
  {
    group: "Overview",
    items: [
      {
        label: "Telemetry & Ops",
        href: "/admin",
        icon: Activity,
      },
      {
        label: "Inquiry Desk",
        href: "/admin#inquiries",
        icon: MessageSquare,
        badge: "Live",
      },
    ],
  },
  {
    group: "Commerce & Licenses",
    items: [
      {
        label: "Marketplace Orders",
        href: "/admin#orders",
        icon: ShoppingBag,
      },
      {
        label: "Software Licenses",
        href: "/admin#licenses",
        icon: Key,
      },
      {
        label: "Registered Traders",
        href: "/admin#traders",
        icon: Users,
      },
    ],
  },
];

export function AdminSidebar({
  admin,
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Sidebar Shell */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col border-r border-white/10 bg-[#080c12] transition-all duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0 w-64 shadow-2xl" : "-translate-x-full lg:translate-x-0"
        } ${isCollapsed ? "lg:w-[68px]" : "lg:w-64"}`}
      >
        {/* Top Header & Branding */}
        <div
          className={`flex h-16 items-center border-b border-white/10 transition-all duration-300 ${
            isCollapsed ? "justify-center px-2" : "justify-between px-3.5"
          }`}
        >
          {isCollapsed ? (
            /* Collapsed Mode: Single Centered Expand Button with Hover Icon Transition */
            <button
              type="button"
              onClick={onToggleCollapse}
              aria-label="Expand sidebar"
              title="Expand Sidebar"
              className="group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-md transition-all hover:border-emerald-400/60 hover:bg-emerald-500/20"
            >
              <Shield className="h-5 w-5 transition-all duration-200 group-hover:scale-0 group-hover:opacity-0" />
              <PanelLeftOpen className="absolute h-5 w-5 text-emerald-300 transition-all duration-200 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100" />
            </button>
          ) : (
            /* Expanded Mode: Full Logo on Left, Collapse Toggle on Right */
            <>
              <Link href="/admin" className="flex items-center gap-2.5 overflow-hidden cursor-pointer">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-md">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="min-w-0 transition-opacity duration-200">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black tracking-tight text-white">
                      LUX<span className="text-emerald-400">FOCUSS</span>
                    </span>
                    <span className="rounded bg-emerald-400/15 px-1.5 py-0.2 text-[8px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                      Admin
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">Enterprise Desk</div>
                </div>
              </Link>

              {/* Desktop Collapse Toggle */}
              <button
                type="button"
                onClick={onToggleCollapse}
                aria-label="Collapse sidebar"
                className="hidden lg:inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white"
                title="Collapse Sidebar"
              >
                <PanelLeftClose className="h-4 w-4" />
              </button>

              {/* Mobile Close Button */}
              <button
                type="button"
                onClick={onCloseMobile}
                aria-label="Close sidebar"
                className="inline-flex lg:hidden h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </>
          )}
        </div>

        {/* Navigation Body */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
          {navGroups.map((group) => (
            <div key={group.group} className="space-y-1">
              {/* Group Title (Hidden when Collapsed) */}
              {!isCollapsed && (
                <div className="px-2.5 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">
                  {group.group}
                </div>
              )}

              {/* Group Nav Items */}
              {group.items.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    onClick={() => onCloseMobile()}
                    className={`group relative flex items-center gap-3 rounded-xl px-2.5 py-2 text-xs font-semibold cursor-pointer transition-all ${
                      isActive
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30"
                        : "text-slate-400 hover:bg-white/5 hover:text-white border border-transparent"
                    } ${isCollapsed ? "justify-center px-0" : ""}`}
                    title={isCollapsed ? item.label : undefined}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 transition ${
                        isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-white"
                      }`}
                    />

                    {/* Label & Badge (Hidden when Collapsed) */}
                    {!isCollapsed && (
                      <>
                        <span className="truncate">{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-mono font-bold text-emerald-300">
                            {item.badge}
                          </span>
                        )}
                        {item.external && (
                          <span className="ml-auto text-[10px] text-slate-500 font-mono group-hover:text-slate-400">
                            ↗
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>

        {/* Bottom User Profile Section */}
        <div className="border-t border-white/10 p-2.5 bg-[#06090e]">
          <AdminUserMenu admin={admin} isCollapsed={isCollapsed} />
        </div>
      </aside>
    </>
  );
}
