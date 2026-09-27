import { DashboardShell } from "@/components/dashboard-shell";

const tickets = [
  { subject: "License activation issue", status: "Open" },
  { subject: "EA installation support", status: "Pending" },
  { subject: "Documentation request", status: "Resolved" },
];

export default function SupportPage() {
  return (
    <DashboardShell title="Support">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Support tickets</h2>
          <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950">New ticket</button>
        </div>

        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.subject} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="font-medium text-white">{ticket.subject}</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">{ticket.status}</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
