import { Mail, Clock, ShieldAlert, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
          <Mail className="h-4 w-4" /> Client Support
        </div>
        <h1 className="mt-4 text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Get in Touch with Our Engineering Desk
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
          Have questions regarding TradingView script activation, EA deployment, custom parameter tuning, or institutional licenses?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Support Channels Sidebar */}
        <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-5">
          <div>
            <h2 className="text-xl font-bold text-white">Direct Support Channels</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
              Our technical desk operates around the clock during active global financial market sessions (Sunday 5:00 PM EST – Friday 5:00 PM EST).
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Trading Desk Support</div>
                    <div className="text-sm font-semibold text-white">support@luxfocuss.com</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Response SLA</div>
                    <div className="text-sm font-semibold text-white">&lt; 4 Hours for Active License Holders</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
                    <ShieldAlert className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Institutional & Prop Firms</div>
                    <div className="text-sm font-semibold text-white">enterprise@luxfocuss.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur lg:col-span-7">
          <h2 className="text-xl font-bold text-white">Send Us a Direct Message</h2>
          <p className="mt-1 text-xs text-slate-400">Fill out the details below and an engineer will respond directly.</p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
              <input
                type="text"
                required
                className="mt-1.5 h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-300">Email Address</label>
              <input
                type="email"
                required
                className="mt-1.5 h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-xs font-semibold text-slate-300">Subject / Product Inquired</label>
            <input
              type="text"
              required
              className="mt-1.5 h-11 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="e.g., ORB Breakout Suite Pine Script Access"
            />
          </div>

          <div className="mt-4">
            <label className="text-xs font-semibold text-slate-300">Message Details</label>
            <textarea
              rows={4}
              required
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/70 p-4 text-sm text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              placeholder="Please provide specifics regarding your platform setup, error logs, or license key..."
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
