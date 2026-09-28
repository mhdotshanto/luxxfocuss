import Link from "next/link";
import { faqItems } from "@/lib/mock-data";
import { HelpCircle, MessageSquare } from "lucide-react";

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <HelpCircle className="h-4 w-4" /> Frequently Asked Questions
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Everything You Need to Know
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Answers to common questions about indicator delivery, lifetime licenses, prop firm compatibility, and execution mechanics.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {faqItems.map((item, idx) => (
          <div
            key={item.question}
            className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur transition duration-300 hover:border-emerald-400/30"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 font-mono text-xs font-bold text-emerald-400">
                  {idx + 1}
                </span>
                <h2 className="text-base font-bold text-white sm:text-lg">{item.question}</h2>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-300 sm:text-sm pl-9">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Still have questions CTA */}
      <div className="mt-12 rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 text-center backdrop-blur">
        <h3 className="text-lg font-bold text-white sm:text-xl">Still have questions?</h3>
        <p className="mx-auto mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
          Can't find the answer you're looking for? Reach out to our technical trading support desk for immediate assistance.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" /> Get in Touch
          </Link>
          <Link
            href="/products"
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Browse Systems
          </Link>
        </div>
      </div>
    </main>
  );
}
