"use client";

import { useMemo, useState } from "react";
import type { DownloadGroup, DownloadStatus } from "@/src/data/downloads";

const statuses: Array<DownloadStatus | "All"> = ["All", "Available"];
const statusClasses: Record<DownloadStatus, string> = {
  Available: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
};

export function DownloadHub({ groups }: { groups: DownloadGroup[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState<DownloadStatus | "All">("All");
  const categories = useMemo(() => ["All", ...groups.map((group) => group.title)], [groups]);

  const filteredGroups = useMemo(
    () =>
      groups
        .filter((group) => category === "All" || group.title === category)
        .map((group) => ({
          ...group,
          items: group.items.filter((item) => {
            const matchesQuery = `${group.title} ${group.description} ${item.name} ${item.brand} ${item.documentType}`
              .toLowerCase()
              .includes(query.trim().toLowerCase());
            const matchesStatus = status === "All" || item.status === status;

            return matchesQuery && matchesStatus;
          }),
        }))
        .filter((group) => group.items.length > 0),
    [category, groups, query, status],
  );

  return (
    <div>
      <div className="editorial-panel p-5 sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_180px]">
          <label className="form-label">
            <span>Search downloads</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="field-control"
              placeholder="Search datasheets, certificates, brochures..."
              type="search"
            />
          </label>
          <label className="form-label">
            <span>Category</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="field-control"
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="form-label">
            <span>Status</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as DownloadStatus | "All")}
              className="field-control"
            >
              {statuses.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="editorial-list mt-8">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <article key={group.title} className="grid gap-6 py-7 lg:grid-cols-[260px_minmax(0,1fr)]">
              <div>
                <h3 className="font-heading text-xl font-bold text-slate-950">{group.title}</h3>
                <p className="mt-2 text-base leading-7 text-slate-600">{group.description}</p>
              </div>
              <div className="divide-y divide-slate-200 border-t border-slate-200">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-500">{item.brand} · {item.documentType}</p>
                      <p className="mt-1 text-xs text-slate-500">Revised {item.revisionDate} · {item.fileSize}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses[item.status]}`}>
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
          ))
        ) : (
          <div className="border-y border-dashed border-slate-300 bg-white p-8 text-left text-sm text-slate-600">
            No downloads match the current filters.
          </div>
        )}
      </div>
    </div>
  );
}
