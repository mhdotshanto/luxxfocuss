const stats = [
  { label: "Total Revenue", value: "$128.4K" },
  { label: "Monthly Revenue", value: "$18.7K" },
  { label: "Orders", value: "1,284" },
  { label: "Customers", value: "682" },
  { label: "Active Licenses", value: "421" },
  { label: "Downloads", value: "2,418" },
  { label: "Subscriptions", value: "93" },
];

export default function AdminPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div className="text-xs uppercase tracking-[0.25em] text-emerald-300">Admin Dashboard</div>
        <h1 className="mt-3 text-4xl font-black tracking-[-0.05em] text-white">Operations overview</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-[#0b1118] p-6">
            <div className="text-sm text-slate-400">{item.label}</div>
            <div className="mt-3 text-3xl font-black text-white">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <h2 className="text-xl font-semibold text-white">Revenue</h2>
          <div className="mt-6 flex h-52 items-end gap-2">
            {[30, 42, 38, 54, 60, 72, 80, 90, 85, 98, 110, 120].map((height, idx) => (
              <div key={idx} className="flex-1 rounded-t-xl bg-gradient-to-t from-emerald-500 to-emerald-300/90" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
          <h2 className="text-xl font-semibold text-white">Order status</h2>
          <div className="mt-6 space-y-4">
            {[
              ["Paid", "1,020"],
              ["Pending", "126"],
              ["Failed", "42"],
              ["Refunded", "18"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <div className="text-slate-300">{label}</div>
                <div className="font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
