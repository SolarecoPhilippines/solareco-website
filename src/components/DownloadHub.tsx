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
            const matchesQuery = `${group.title} ${group.description} ${item.name}`
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
    <div className="mt-10">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-[1fr_220px_180px]">
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Search downloads
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20"
              placeholder="Search datasheets, certificates, brochures..."
              type="search"
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20"
            >
              {categories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-800">
            Status
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as DownloadStatus | "All")}
              className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20"
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

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filteredGroups.length > 0 ? (
          filteredGroups.map((group) => (
            <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-bold text-slate-950">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{group.description}</p>
              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col gap-3 rounded-md border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm font-medium text-slate-800">{item.name}</span>
                    <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClasses[item.status]}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-600 lg:col-span-2">
            No downloads match the current filters.
          </div>
        )}
      </div>
    </div>
  );
}
