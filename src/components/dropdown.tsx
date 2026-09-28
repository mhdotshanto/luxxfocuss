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
}

export function Dropdown({
  label,
  items,
  widthClass = "w-72",
  align = "left",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close when navigating to any route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle outside clicks and keyboard Escape key
  useEffect(() => {
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

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const alignmentClass = align === "right" ? "right-0" : "left-0";

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20"
      >
        <span>{label}</span>
        <span
          className={`text-[10px] text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block rounded-xl px-4 py-3 hover:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-white">{item.label}</div>
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
          ))}
        </div>
      )}
    </div>
  );
}
