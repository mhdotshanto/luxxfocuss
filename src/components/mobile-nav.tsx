"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type DropdownItem } from "@/components/dropdown";

interface MobileNavProps {
  productsNav: DropdownItem[];
  resourcesNav: DropdownItem[];
  companyNav: DropdownItem[];
}

export function MobileNav({
  productsNav,
  resourcesNav,
  companyNav,
}: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle body scroll lock & Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        document.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const drawerContent = (
    <>
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-over Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-y-0 right-0 z-[9999] flex h-full w-full max-w-[320px] sm:max-w-sm flex-col border-l border-white/15 bg-[#070b11] shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-transform duration-300"
        >
          {/* Drawer Header */}
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-5 bg-[#070b11]">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-400/40 bg-emerald-500/10 text-base font-bold text-emerald-300">
                L
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.24em] text-white">
                  LUXFOCUSS
                </div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-emerald-300">
                  trading systems
                </div>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Drawer Body (Scrollable Menu) */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 bg-[#070b11]">
            {/* Home Link */}
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                pathname === "/"
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Home
            </Link>

            {/* Bundles Link */}
            <Link
              href="/bundles"
              onClick={() => setIsOpen(false)}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                pathname === "/bundles"
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Bundles
            </Link>

            {/* Products Accordion */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("products")}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-200 transition hover:text-white"
              >
                <span>Products</span>
                <span
                  className={`text-xs text-slate-400 transition-transform duration-200 ${
                    expandedSection === "products" ? "rotate-180 text-emerald-400" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {expandedSection === "products" && (
                <div className="space-y-1 border-t border-white/5 p-2 bg-[#05070b]">
                  {productsNav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 text-xs transition ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-300 font-semibold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="font-medium">{item.label}</div>
                        {item.description && (
                          <div className="mt-0.5 text-[10px] text-slate-400">
                            {item.description}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("resources")}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-200 transition hover:text-white"
              >
                <span>Resources</span>
                <span
                  className={`text-xs text-slate-400 transition-transform duration-200 ${
                    expandedSection === "resources" ? "rotate-180 text-emerald-400" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {expandedSection === "resources" && (
                <div className="space-y-1 border-t border-white/5 p-2 bg-[#05070b]">
                  {resourcesNav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 text-xs transition ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-300 font-semibold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="font-medium">{item.label}</div>
                        {item.description && (
                          <div className="mt-0.5 text-[10px] text-slate-400">
                            {item.description}
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Company Accordion */}
            <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
              <button
                type="button"
                onClick={() => toggleSection("company")}
                className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium text-slate-200 transition hover:text-white"
              >
                <span>Company</span>
                <span
                  className={`text-xs text-slate-400 transition-transform duration-200 ${
                    expandedSection === "company" ? "rotate-180 text-emerald-400" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {expandedSection === "company" && (
                <div className="space-y-1 border-t border-white/5 p-2 bg-[#05070b]">
                  {companyNav.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block rounded-lg px-3 py-2.5 text-xs transition ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-300 font-semibold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="font-medium">{item.label}</div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Pricing Link */}
            <Link
              href="/pricing"
              onClick={() => setIsOpen(false)}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                pathname === "/pricing"
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              Pricing
            </Link>
          </div>

          {/* Drawer Footer (Auth & Cart Actions) */}
          <div className="shrink-0 border-t border-white/10 p-4 space-y-2.5 bg-[#05070b]">
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-slate-200 transition hover:border-emerald-400/40 hover:text-white"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex h-11 items-center justify-center rounded-xl bg-emerald-500 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Register
              </Link>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] text-sm text-slate-300 transition hover:border-emerald-400/40 hover:text-white"
            >
              <span>View Cart</span>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="lg:hidden">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Render Portal onto document.body */}
      {mounted && createPortal(drawerContent, document.body)}
    </div>
  );
}

