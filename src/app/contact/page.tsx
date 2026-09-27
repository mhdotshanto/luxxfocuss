export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Contact</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Talk to the support team</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-8">
          <h2 className="text-xl font-semibold text-white">Support channels</h2>
          <ul className="mt-5 space-y-4 text-slate-300">
            <li>Email: support@luxfocuss.demo</li>
            <li>Priority support: 24-48 hours</li>
            <li>Licensing: license@luxfocuss.demo</li>
            <li>Business requests: team@luxfocuss.demo</li>
          </ul>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Name" />
            <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email" />
          </div>
          <input className="mt-5 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Subject" />
          <textarea className="mt-5 min-h-36 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="How can we help?" />
          <button className="mt-6 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950">Send Message</button>
        </form>
      </div>
    </main>
  );
}
