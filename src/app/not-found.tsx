import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="text-xs uppercase tracking-[0.35em] text-emerald-300">404</div>
      <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Page not found</h1>
      <p className="mt-4 text-lg text-slate-300">The requested trading product or section is not available in this demo build.</p>
      <Link href="/" className="mt-8 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950">
        Back to home
      </Link>
    </main>
  );
}
