"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";

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

/**
 * Reusable Navigation Dropdown for Header/Navigation Menus
 */
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
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen
              ? "rotate-180 text-emerald-400"
              : hasActiveChild
              ? "text-slate-300"
              : "text-slate-500"
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className={`absolute ${alignmentClass} top-full z-50 mt-2 ${widthClass} rounded-2xl border border-white/10 bg-[#0b1118] p-2 shadow-2xl shadow-black/40 transition-all animate-in fade-in zoom-in-95 duration-150`}
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

export interface SelectOption<T = string> {
  value: T;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  bg?: string;
  text?: string;
  border?: string;
}

export interface CustomSelectProps<T = string> {
  value: T;
  onChange: (value: T) => void;
  options: SelectOption<T>[];
  placeholder?: string;
  disabled?: boolean;
  align?: "left" | "right";
  widthClass?: string;
  triggerClassName?: string;
  renderTrigger?: (selectedOption?: SelectOption<T>, isOpen?: boolean) => ReactNode;
  "aria-label"?: string;
}

/**
 * Reusable Custom Select / Dropdown Component
 * Fully replacing native browser <select> elements with sleek, accessible, themed popovers
 */
export function CustomSelect<T extends string = string>({
  value,
  onChange,
  options,
  placeholder = "Select option",
  disabled = false,
  align = "left",
  widthClass = "w-48",
  triggerClassName,
  renderTrigger,
  "aria-label": ariaLabel,
}: CustomSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Outside click & Escape listener
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(e: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (val: T) => {
    onChange(val);
    setIsOpen(false);
  };

  const alignmentClass = align === "right" ? "right-0" : "left-0";

  return (
    <div ref={selectRef} className="relative inline-block text-left">
      {renderTrigger ? (
        <div onClick={() => !disabled && setIsOpen((prev) => !prev)}>
          {renderTrigger(selectedOption, isOpen)}
        </div>
      ) : (
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={ariaLabel || "Select option"}
          className={
            triggerClassName ||
            `inline-flex cursor-pointer items-center justify-between gap-2 rounded-xl border px-3 py-1.5 text-xs font-mono font-bold uppercase transition focus:outline-none focus:ring-1 focus:ring-emerald-400/50 disabled:opacity-50 disabled:cursor-not-allowed ${
              selectedOption?.bg || "bg-white/5"
            } ${selectedOption?.text || "text-white"} ${
              selectedOption?.border || "border-white/10"
            }`
          }
        >
          <div className="flex items-center gap-2">
            {selectedOption?.icon && (
              <selectedOption.icon className="h-3.5 w-3.5 shrink-0 opacity-90" />
            )}
            <span>{selectedOption ? selectedOption.label : placeholder}</span>
          </div>
          <ChevronDown
            className={`h-3.5 w-3.5 shrink-0 opacity-70 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      )}

      {isOpen && (
        <div
          role="listbox"
          className={`absolute ${alignmentClass} top-full z-50 mt-1.5 ${widthClass} rounded-2xl border border-white/15 bg-[#0b1118]/95 p-1.5 shadow-2xl shadow-black/80 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150`}
        >
          <div className="space-y-0.5">
            {options.map((option) => {
              const isSelected = option.value === value;
              const OptionIcon = option.icon;

              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-2.5 py-2 text-xs font-medium transition text-left ${
                    isSelected
                      ? "bg-white/10 text-white font-bold"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {OptionIcon ? (
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-lg border text-[10px] ${
                          option.bg || "bg-white/5"
                        } ${option.border || "border-white/10"} ${
                          option.text || "text-white"
                        }`}
                      >
                        <OptionIcon className="h-3 w-3" />
                      </div>
                    ) : (
                      <span
                        className={`h-2 w-2 rounded-full ${
                          option.text?.includes("emerald")
                            ? "bg-emerald-400"
                            : option.text?.includes("cyan")
                            ? "bg-cyan-400"
                            : option.text?.includes("amber")
                            ? "bg-amber-400"
                            : option.text?.includes("purple")
                            ? "bg-purple-400"
                            : "bg-slate-400"
                        }`}
                      />
                    )}
                    <span className="font-mono text-xs">{option.label}</span>
                  </div>

                  {isSelected && (
                    <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Alias for semantic clarity
export const SelectDropdown = CustomSelect;
