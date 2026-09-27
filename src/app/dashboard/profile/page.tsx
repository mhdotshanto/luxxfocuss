import { DashboardShell } from "@/components/dashboard-shell";

export default function ProfilePage() {
  return (
    <DashboardShell title="Profile">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
        <form className="grid gap-5 sm:grid-cols-2">
          <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Full name" defaultValue="Alex Morgan" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email" defaultValue="alex@luxfocuss.demo" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Country" defaultValue="United Kingdom" />
          <input className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Broker" defaultValue="IC Markets" />
          <textarea className="sm:col-span-2 min-h-32 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Trading profile">Systematic FX & gold trader focused on medium-term trend structure and disciplined execution.</textarea>
          <div className="sm:col-span-2">
            <button className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950">Save Profile</button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}
