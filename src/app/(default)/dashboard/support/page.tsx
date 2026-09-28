import { DashboardShell } from "@/components/dashboard-shell";
import { MessageSquare, Plus, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const tickets = [
  { id: "TICK-402", subject: "TradingView Invite Script Activation", status: "Open", date: "2 hrs ago", priority: "High" },
  { id: "TICK-391", subject: "MT5 Expert Advisor Set File Installation", status: "Pending", date: "Yesterday", priority: "Normal" },
  { id: "TICK-340", subject: "Machine ID Reset Request", status: "Resolved", date: "Sep 22, 2026", priority: "Normal" },
];

export default function SupportPage() {
  return (
    <DashboardShell title="Technical Support">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118]/80 p-6 sm:p-8 backdrop-blur">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-white sm:text-xl">Support Desk Requests</h2>
            <p className="mt-0.5 text-xs text-slate-400">Direct communication with Luxfocuss quantitative engineers</p>
          </div>
          <button className="inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full bg-emerald-400 px-5 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300 sm:w-auto">
            <Plus className="h-4 w-4" /> Create New Ticket
          </button>
        </div>

        <div className="space-y-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-950/60 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-500">{ticket.id}</span>
                  <span className="text-[10px] text-slate-400">• {ticket.date}</span>
                </div>
                <div className="mt-1 font-semibold text-white text-sm sm:text-base">{ticket.subject}</div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-mono font-medium ${
                  ticket.status === "Open"
                    ? "border border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                    : ticket.status === "Pending"
                      ? "border border-amber-400/30 bg-amber-500/10 text-amber-300"
                      : "border border-slate-500/30 bg-slate-500/10 text-slate-300"
                }`}>
                  {ticket.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
