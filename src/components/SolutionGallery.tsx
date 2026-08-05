"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { SolutionApplication, SolutionCategory } from "@/src/data/projects";
import { solutionCategories } from "@/src/data/projects";
import { useAccessibleDialog } from "@/src/hooks/useAccessibleDialog";
import { Button } from "./Button";

export function SolutionGallery({ solutions }: { solutions: SolutionApplication[] }) {
  const [category, setCategory] = useState<SolutionCategory | "All">("All");
  const [selectedSolution, setSelectedSolution] = useState<SolutionApplication | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const dialogRef = useAccessibleDialog(Boolean(selectedSolution), () => setSelectedSolution(null));
  const filteredSolutions = category === "All" ? solutions : solutions.filter((solution) => solution.category === category);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter solutions by category">
        {solutionCategories.map((option) => {
          const selected = option === category;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`rounded-md border px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
                selected
                  ? "border-[#0D3567] bg-[#0D3567] text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-[#0D3567]/45"
              }`}
              aria-pressed={selected}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 space-y-6">
        {filteredSolutions.map((solution, index) => (
          <article key={solution.title} className="grid overflow-hidden border-y border-slate-300 bg-white lg:grid-cols-2">
            <div className={`relative min-h-[280px] overflow-hidden bg-slate-100 sm:min-h-[340px] ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              {solution.imageSrc && solution.imageAlt ? (
                <Image
                  src={solution.imageSrc}
                  alt={solution.imageAlt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain p-8 sm:p-10"
                />
              ) : (
                <div className="absolute inset-0 overflow-hidden bg-[#0A2A52]" aria-hidden="true">
                  <div className="absolute inset-x-0 top-1/4 h-px bg-white/15" />
                  <div className="absolute inset-x-0 top-2/4 h-px bg-white/15" />
                  <div className="absolute inset-x-0 top-3/4 h-px bg-white/15" />
                  <div className="absolute bottom-8 left-8 max-w-xs border-l-2 border-blue-300 pl-5 text-blue-50">
                    <p className="eyebrow text-blue-200">Supply planning</p>
                    <p className="mt-3 font-heading text-2xl font-black">Requirement-led product coordination</p>
                  </div>
                </div>
              )}
            </div>
            <div className={`flex flex-col justify-center p-6 sm:p-9 lg:p-12 2xl:p-16 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="flex items-start gap-5">
                <span className="font-heading text-sm font-black text-[#2E7FC1]" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow text-[#0D3567]">{solution.category}</p>
                  <h2 className="mt-3 font-heading text-2xl font-black text-slate-950 sm:text-3xl">{solution.title}</h2>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{solution.summary}</p>
              <p className="mt-5 border-l-2 border-slate-300 pl-4 text-sm font-semibold leading-6 text-slate-500">{solution.availability}</p>
              <ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-600">
                {solution.details.slice(0, 2).map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#2E7FC1]" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setSelectedSolution(solution)}
                className="mt-7 inline-flex min-h-11 w-fit items-center justify-center rounded-md border border-[#0D3567] px-4 py-2 text-sm font-semibold text-[#0D3567] transition hover:bg-[#0D3567] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                aria-label={`View details for ${solution.title}`}
              >
                View Application Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedSolution ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedSolution(null);
            }
          }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-8"
        >
          <div ref={dialogRef} tabIndex={-1} className="max-h-[90svh] w-full max-w-3xl overflow-auto rounded-md bg-white p-6 shadow-2xl outline-none sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0D3567]">{selectedSolution.category}</p>
                <h2 id={titleId} className="mt-2 font-heading text-3xl font-bold text-slate-950">{selectedSolution.title}</h2>
                <p className="mt-2 text-sm font-semibold text-slate-500">{selectedSolution.availability}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSolution(null)}
                className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                aria-label="Close application details"
              >
                Close
              </button>
            </div>
            <p id={descriptionId} className="mt-5 text-base leading-7 text-slate-600">{selectedSolution.summary}</p>
            <ul className="editorial-list mt-5 grid sm:grid-cols-3">
              {selectedSolution.details.map((detail) => (
                <li key={detail} className="p-4 text-sm text-slate-700 sm:border-r sm:last:border-r-0">{detail}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/contact">Request Application Support</Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
