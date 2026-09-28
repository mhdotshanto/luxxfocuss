import Link from "next/link";
import { Compass, ArrowLeft, Home, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-400 shadow-2xl">
        <Compass className="h-8 w-8 animate-spin-slow" />
      </div>
      <div className="mt-6 text-xs font-mono uppercase tracking-[0.3em] text-emerald-400">Error 404 • Resource Inactive</div>
      <h1 className="mt-3 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">Chart Route Not Found</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
        The requested trading strategy, documentation page, or product catalog has been moved or updated in our deployment pipeline.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
        >
          <Home className="h-4 w-4" /> Return to Homepage
        </Link>
        <Link
          href="/products"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <ShoppingBag className="h-4 w-4" /> Browse Catalog
        </Link>
      </div>
    </main>
  );
}
