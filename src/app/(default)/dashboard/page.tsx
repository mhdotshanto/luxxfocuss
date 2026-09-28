import { DashboardShell } from "@/components/dashboard-shell";

const summaryCards = [
  { label: "Active Products", value: "06" },
  { label: "Active Licenses", value: "09" },
  { label: "Downloads", value: "17" },
  { label: "Next Billing Date", value: "25 Nov" },
];

const recentOrders = [
  { id: "#10421", product: "Gold Hunter EA", amount: "$149", status: "Paid" },
  { id: "#10392", product: "Liquidity Pro", amount: "$49", status: "Paid" },
  { id: "#10364", product: "VPS Elite", amount: "$29", status: "Pending" },
];

export default function DashboardPage() {
  return (
    <DashboardShell title="Trader overview">
      <div className="space-y-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {summaryCards.map((card) => (
            <div key={card.label} className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-6">
              <div className="text-sm text-slate-400">{card.label}</div>
              <div className="mt-3 text-3xl font-black text-white">{card.value}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
            <h2 className="text-xl font-semibold text-white">Recent orders</h2>
            <div className="mt-6 space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0">
                  <div>
                    <div className="font-medium text-white">{order.product}</div>
                    <div className="text-sm text-slate-400">{order.id}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-white">{order.amount}</div>
                    <div className="text-sm text-emerald-300">{order.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
            <h2 className="text-xl font-semibold text-white">License status</h2>
            <div className="mt-6 space-y-4">
              {[
                ["Gold Hunter EA", "ACTIVE"],
                ["Liquidity Pro", "ACTIVE"],
                ["Smart Structure Pro", "EXPIRED"],
              ].map(([product, status]) => (
                <div key={product} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <div className="text-white">{product}</div>
                  <div className={status === "ACTIVE" ? "text-emerald-300" : "text-amber-300"}>{status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
