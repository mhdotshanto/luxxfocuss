"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  widthClass?: string;
  align?: "left" | "right";
  trigger?: "hover" | "click";
}

export function Dropdown({
  label,
  items,
  widthClass = "w-72",
  align = "left",
  trigger = "hover",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Check if current route matches any child item
  const hasActiveChild = items.some((item) => pathname === item.href);

  // Close when navigating to any route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Handle outside clicks, keyboard Escape, and passive onScroll auto-close
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    function handleScroll() {
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  // Hover event handlers with 120ms intent buffer
  function handleMouseEnter() {
    if (trigger === "hover") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  }

  function handleMouseLeave() {
    if (trigger === "hover") {
      timeoutRef.current = setTimeout(() => {
        setIsOpen(false);
      }, 120);
    }
  }

  function handleButtonClick() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen((prev) => !prev);
  }

  const alignmentClass = align === "right" ? "right-0" : "left-0";

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        onClick={handleButtonClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex cursor-pointer items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 ${
          isOpen || hasActiveChild
            ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            : "text-slate-300 hover:bg-white/5 hover:text-white"
        }`}
      >
        <span>{label}</span>
        <span
          className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[10px] origin-center transition-transform duration-200 ${
            isOpen
              ? "rotate-180 text-emerald-400"
              : hasActiveChild
              ? "text-slate-300"
              : "text-slate-500"
          }`}
          aria-hidden="true"
        >
          ⌄
        </span>
      </button>

      {isOpen && (
        <div
          role="menu"
          className={`absolute ${alignmentClass} top-full z-50 mt-2 ${widthClass} rounded-2xl border border-white/10 bg-[#0b1118] p-2 shadow-2xl shadow-black/40 transition-all`}
        >
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                className={`block rounded-xl border px-4 py-3 transition ${
                  isActive
                    ? "border-emerald-400/20 bg-emerald-500/10"
                    : "border-transparent hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`font-medium ${
                      isActive ? "text-emerald-300" : "text-white"
                    }`}
                  >
                    {item.label}
                  </div>
                  {item.badge && (
                    <span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">
                      {item.badge}
                    </span>
                  )}
                </div>
                {item.description && (
                  <div className="mt-1 text-xs text-slate-500">
                    {item.description}
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
