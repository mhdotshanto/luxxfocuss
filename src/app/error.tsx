"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service or server console
    console.error("Application runtime error caught by boundary:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-[0_0_35px_rgba(244,63,94,0.2)]">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <div className="mt-6 text-xs font-mono uppercase tracking-[0.3em] text-rose-400">
        System Resilience Boundary • Error 500
      </div>

      <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
        Temporary Execution Interruption
      </h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
        An unexpected application exception occurred while rendering this view. Our resilience layer prevented the system from crashing.
      </p>

      {error.digest && (
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-slate-950/70 px-3 py-1 font-mono text-xs text-slate-400">
          <span>Error Digest:</span>
          <span className="text-emerald-300">{error.digest}</span>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex cursor-pointer h-11 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.25)] transition hover:bg-emerald-300"
        >
          <RotateCcw className="h-4 w-4" /> Try Again
        </button>

        <Link
          href="/"
          className="inline-flex cursor-pointer h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-emerald-400/30 hover:bg-white/10"
        >
          <Home className="h-4 w-4" /> Return to Homepage
        </Link>
      </div>
    </main>
  );
}
