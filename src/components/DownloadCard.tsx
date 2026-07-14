import type { DownloadGroup, DownloadStatus } from "@/src/data/downloads";

const statusStyles: Record<DownloadStatus, string> = {
  Available: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
};

export function DownloadCard({ group }: { group: DownloadGroup }) {
  return (
    <article className="border-t-2 border-[#0D3567] bg-white p-6 ring-1 ring-slate-200">
      <h3 className="font-heading text-xl font-bold text-slate-950">{group.title}</h3>
      <p className="mt-2 text-base leading-7 text-slate-600">{group.description}</p>
      <div className="mt-5 space-y-3">
        {group.items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col gap-3 border-t border-slate-200 py-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-slate-800">{item.name}</p>
              <p className="mt-1 text-xs text-slate-500">{item.brand} · {item.documentType} · Revised {item.revisionDate} · {item.fileSize}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles[item.status]}`}>
                {item.status}
              </span>
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0D3567] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#15477f] focus-visible:outline-2 focus-visible:outline-offset-2">
                View / Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
