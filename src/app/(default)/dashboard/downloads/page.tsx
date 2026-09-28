import { DashboardShell } from "@/components/dashboard-shell";

const downloads = [
  { name: "Gold Hunter EA v2.1.0", date: "11 Sep 2026", size: "7.2 MB" },
  { name: "Liquidity Pro Setup", date: "03 Sep 2026", size: "2.1 MB" },
  { name: "Smart Structure Pro Manual", date: "27 Aug 2026", size: "950 KB" },
];

export default function DownloadsPage() {
  return (
    <DashboardShell title="Downloads">
      <div className="rounded-[2rem] border border-white/10 bg-[#0b1118] p-6">
        <div className="grid gap-4">
          {downloads.map((item) => (
            <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div>
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-sm text-slate-400">{item.date}</div>
              </div>
              <div className="text-right text-sm text-slate-300">
                <div>{item.size}</div>
                <button className="mt-2 text-emerald-300">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
