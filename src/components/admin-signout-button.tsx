"use client";

import { useTransition } from "react";
import { LogOut, Loader2 } from "lucide-react";
import { adminLogoutAction } from "@/app/actions/auth-actions";

export function AdminSignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleSignOut = () => {
    startTransition(async () => {
      await adminLogoutAction();
    });
  };

  return (
    <button
      onClick={handleSignOut}
      disabled={isPending}
      className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition hover:border-rose-400/30 hover:bg-rose-500/10 hover:text-rose-300 disabled:opacity-50"
      title="Terminate Administrative Session"
    >
      {isPending ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin text-rose-400" />
      ) : (
        <LogOut className="h-3.5 w-3.5" />
      )}
      <span>{isPending ? "Signing out..." : "Sign Out"}</span>
    </button>
  );
}
