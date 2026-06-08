import type { DownloadGroup, DownloadStatus } from "@/src/data/downloads";

const statusStyles: Record<DownloadStatus, string> = {
  Available: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
};

export function DownloadCard({ group }: { group: DownloadGroup }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="font-heading text-xl font-bold text-slate-950">{group.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
      <div className="mt-5 space-y-3">
        {group.items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-3 rounded-md border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <span className="text-sm font-medium text-slate-800">{item.name}</span>
            <span
              className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[item.status]}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}
