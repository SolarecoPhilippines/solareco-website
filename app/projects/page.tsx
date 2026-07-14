import type { Metadata } from "next";
import { Container } from "@/src/components/Container";
import { CtaBanner } from "@/src/components/CtaBanner";
import { PageHero } from "@/src/components/PageHero";
import { SolutionGallery } from "@/src/components/SolutionGallery";
import { supportedApplications } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Solutions and Applications",
  description: "Solar, battery, electrical protection, and wiring applications supported by Solareco Philippines.",
  alternates: { canonical: "/projects" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Supported applications" title="Solar and energy solutions built around your requirements" description="Explore supported supply and planning scenarios across solar, battery, protection, and wiring applications." />
      <section className="section-shell bg-slate-50">
        <Container>
          <div className="border-l-4 border-[#2E7FC1] bg-blue-50 px-5 py-4 text-sm leading-7 text-[#0D3567] sm:px-6">
            <strong className="font-semibold">Application note:</strong> These are supported supply and planning scenarios, not a record of confirmed completed installations. Contact Solareco to discuss product availability and requirements for a specific application.
          </div>
          <SolutionGallery solutions={supportedApplications} />
        </Container>
      </section>
      <CtaBanner title="Planning a solar or energy application?" description="Tell Solareco about the site, load requirements, and preferred product categories so the team can help coordinate suitable product information and availability." primaryLabel="Discuss your application" />
    </>
  );
}
