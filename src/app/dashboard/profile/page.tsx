import { DashboardShell } from "@/components/dashboard-shell";
import { User, Mail, Globe, Landmark, FileText, Save } from "lucide-react";

export default function ProfilePage() {
  return (
    <DashboardShell title="Trader Profile">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur">
        <h2 className="text-lg font-bold text-white sm:text-xl">Account & Terminal Preferences</h2>
        <p className="mt-1 text-xs text-slate-400">Configure your default brokerage environment and license credentials.</p>

        <form className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-slate-300">Trader Name</label>
              <div className="relative mt-1.5">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  defaultValue="Alex Morgan"
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300">Email Address</label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  defaultValue="alex@luxfocuss.demo"
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-slate-300">Jurisdiction / Country</label>
              <div className="relative mt-1.5">
                <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  defaultValue="United Kingdom"
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-300">Primary Execution Broker</label>
              <div className="relative mt-1.5">
                <Landmark className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input
                  defaultValue="IC Markets (Raw Spread)"
                  className="h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300">Trading Methodology Notes</label>
            <textarea
              rows={3}
              defaultValue="Systematic FX & gold trader focused on medium-term opening range structure and disciplined risk execution."
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
            >
              <Save className="h-4 w-4" /> Save Profile Preferences
            </button>
          </div>
        </form>
      </div>
    </DashboardShell>
  );
}
