"use client";

import { useState, useEffect } from "react";
import { AdminSidebar } from "./admin-sidebar";
import { AdminTopBar } from "./admin-topbar";

interface AdminLayoutClientProps {
  admin: {
    name?: string | null;
    email?: string | null;
    role?: string | null;
  };
  children: React.ReactNode;
}

export function AdminLayoutClient({ admin, children }: AdminLayoutClientProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Restore sidebar state from localStorage on client mount
  useEffect(() => {
    const saved = localStorage.getItem("luxfocuss_admin_sidebar_collapsed");
    if (saved !== null) {
      setIsCollapsed(saved === "true");
    }
  }, []);

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem("luxfocuss_admin_sidebar_collapsed", String(next));
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      {/* Sidebar Component */}
      <AdminSidebar
        admin={admin}
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Backoffice Viewport (Adjusts padding based on sidebar width) */}
      <div
        className={`flex min-h-screen flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? "lg:pl-[68px]" : "lg:pl-64"
        }`}
      >
        {/* Top Header Bar */}
        <AdminTopBar
          admin={admin}
          onOpenMobile={() => setIsMobileOpen(true)}
        />

        {/* Content Area */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
