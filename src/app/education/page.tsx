import Link from "next/link";
import { educationArticles } from "@/lib/mock-data";

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-3xl">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Education desk</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Learn the workflow before you automate it</h1>
        <p className="mt-4 text-lg leading-8 text-slate-300">Practical guides for platform setup, backtesting, drawdown, and indicator configuration. Built to help you make a more informed product decision.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <article className="group rounded-[2rem] border border-emerald-400/20 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),transparent_30%),#0b1118] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-emerald-300"><span>Strategy</span><span>8 min</span></div>
          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-lg font-bold text-white">01</div>
          <h2 className="mt-6 text-2xl font-bold text-white">ORB Strategy 01 — Classic Breakout</h2>
          <p className="mt-3 leading-7 text-slate-400">Session opening range, breakout confirmation, and disciplined risk rules for XAUUSD-style trading.</p>
          <Link href="/strategy" className="mt-6 inline-flex text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200">Open strategy guide →</Link>
        </article>

        <article className="group rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.16),transparent_30%),#0b1118] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cyan-300"><span>Chart Playbook</span><span>6 min</span></div>
          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-lg font-bold text-white">02</div>
          <h2 className="mt-6 text-2xl font-bold text-white">ORB Strategy 02 — Breakout + Trend Filter</h2>
          <p className="mt-3 leading-7 text-slate-400">A clean continuation breakout where the opening range is broken with momentum and the trend filter confirms the direction.</p>
          <Link href="/strategy/orb-breakout-trend-filter" className="mt-6 inline-flex text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200">Open chart logic →</Link>
        </article>

        <article className="group rounded-[2rem] border border-violet-400/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.16),transparent_30%),#0b1118] p-6 transition hover:-translate-y-1 hover:border-violet-400/40">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-violet-300"><span>Course</span><span>12 min</span></div>
          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-lg font-bold text-white">03</div>
          <h2 className="mt-6 text-2xl font-bold text-white">ORB Master Course — Level 1 to Level 6</h2>
          <p className="mt-3 leading-7 text-slate-400">Full institutional progression from classic breakout to adaptive multi-factor ORB framework for XAUUSD and market sessions.</p>
          <Link href="/course" className="mt-6 inline-flex text-sm font-semibold text-violet-300 transition group-hover:text-violet-200">Open course page →</Link>
        </article>

        {educationArticles.map((article, index) => (
          <article key={article.title} className="group rounded-[2rem] border border-white/10 bg-[#0b1118] p-6 transition hover:-translate-y-1 hover:border-emerald-400/40">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-emerald-300"><span>{article.category}</span><span>{article.readTime}</span></div>
            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950 text-lg font-bold text-white">0{index + 2}</div>
            <h2 className="mt-6 text-2xl font-bold text-white">{article.title}</h2>
            <p className="mt-3 leading-7 text-slate-400">A concise guide from the Luxfocuss documentation desk for traders evaluating a repeatable, risk-aware process.</p>
            <Link href="/documentation" className="mt-6 inline-flex text-sm font-semibold text-emerald-300 transition group-hover:text-emerald-200">Open documentation →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
