"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project, ProjectCategory } from "@/src/data/projects";
import { projectCategories } from "@/src/data/projects";
import { Button } from "./Button";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {projectCategories.map((option) => {
          const selected = option === category;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
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

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filteredProjects.map((project, index) => (
          <article
            key={project.title}
            className="hover-lift mb-5 break-inside-avoid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
            >
              <div className={`${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} relative bg-slate-100`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3567]/85 via-[#0D3567]/10 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">{project.category}</p>
                  <h3 className="mt-2 font-heading text-xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-blue-50">{project.location}</p>
                </div>
              </div>
            </button>
            <div className="p-5">
              <p className="text-sm leading-6 text-slate-600">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-8"
        >
          <div className="max-h-[90svh] w-full max-w-4xl overflow-auto rounded-lg bg-white shadow-2xl">
            <div className="relative aspect-[16/9] bg-slate-100">
              <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0D3567]">
                    {selectedProject.category}
                  </p>
                  <h2 id="project-modal-title" className="mt-2 font-heading text-3xl font-bold text-slate-950">
                    {selectedProject.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{selectedProject.location}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                >
                  Close
                </button>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-600">{selectedProject.summary}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {selectedProject.details.map((detail) => (
                  <li key={detail} className="rounded-md bg-slate-50 p-4 text-sm text-slate-700">
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/contact">Request Project Support</Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
