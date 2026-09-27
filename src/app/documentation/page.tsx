export default function DocumentationPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Documentation</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Setup guides, manuals, and product notes</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[
          ["Installation Guide", "Step-by-step setup for platform deployment and initial configuration."],
          ["User Manual", "How to interpret signals, dashboards, and risk controls in real trading conditions."],
          ["EA Setup", "Model installation, preset loading, and environment checklist for MT4/MT5 tools."],
          ["Broker Compatibility", "Broker support notes, execution rules, and spread considerations."],
          ["VPS Guide", "Hosting best practices for always-on execution and remote monitoring."],
          ["License FAQ", "Activation, updates, device limitations, and renewals."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
