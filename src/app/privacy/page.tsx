export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Legal</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Privacy</h1>
      </div>
      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#0b1118] p-8 text-slate-300">
        <p>Luxfocuss collects account and order information needed to deliver products, issue licenses, and provide support.</p>
        <p>We do not store plaintext passwords, and we protect sensitive account data using secure session and hashing practices in production deployments.</p>
        <p>We use data only for account management, product delivery, support, billing, fraud prevention, and service improvement.</p>
      </div>
    </main>
  );
}
