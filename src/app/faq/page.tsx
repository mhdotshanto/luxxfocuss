import { faqItems } from "@/lib/mock-data";

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">FAQ</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Questions traders ask before buying</h1>
      </div>

      <div className="space-y-5">
        {faqItems.map((item) => (
          <div key={item.question} className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-6">
            <h2 className="text-xl font-semibold text-white">{item.question}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
