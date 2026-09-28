import { DashboardShell } from "@/components/dashboard-shell";

const orders = [
  { id: "#10421", product: "Gold Hunter EA", amount: "$149", status: "Paid", date: "2026-09-11" },
  { id: "#10392", product: "Liquidity Pro", amount: "$49", status: "Paid", date: "2026-09-03" },
  { id: "#10364", product: "VPS Elite", amount: "$29", status: "Pending", date: "2026-08-26" },
];

export default function OrdersPage() {
  return (
    <DashboardShell title="Orders">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
        <div className="grid gap-4">
          {orders.map((order) => (
            <div key={order.id} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{order.id}</div>
                <div className="mt-2 font-semibold text-white">{order.product}</div>
              </div>
              <div className="text-sm text-slate-300">{order.date}</div>
              <div className="text-white">{order.amount}</div>
              <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">{order.status}</div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
