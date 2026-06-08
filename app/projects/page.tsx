import type { Metadata } from "next";
import { ProjectGallery } from "@/src/components/ProjectGallery";
import { SectionTitle } from "@/src/components/SectionTitle";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Solareco Philippines project categories for residential solar, commercial solar, battery storage, and solar street lights.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Project showcase"
          title="Solar and Energy Project Categories"
          description="Browse project categories and supply scenarios supported by Solareco's solar, battery, electrical protection, and wiring products."
          headingLevel="h1"
        />
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}
