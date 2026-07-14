import type { Metadata } from "next";
import { BranchCard } from "@/src/components/BranchCard";
import { Container } from "@/src/components/Container";
import { CtaBanner } from "@/src/components/CtaBanner";
import { ManagingPartnersSection } from "@/src/components/ManagingPartnersSection";
import { OrganizationStructure } from "@/src/components/OrganizationStructure";
import { PageHero } from "@/src/components/PageHero";
import { SectionTitle } from "@/src/components/SectionTitle";
import { branches } from "@/src/data/branches";
import { getVisibleManagingPartners, managementConfig } from "@/src/data/management";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Solareco Group and its nationwide solar business capabilities.",
  alternates: { canonical: "/about" },
};

const businessUnits = [
  "Renewable energy",
  "Electrical products",
  "Industrial solutions",
  "FDAS",
  "Technology-related products and services",
];

export default function AboutPage() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const showManagementSections = isDevelopment || managementConfig.published;
  const visiblePartners = showManagementSections ? getVisibleManagingPartners(isDevelopment) : [];

  return (
    <>
      <PageHero eyebrow="About Solareco" title="A diversified solutions group serving customers across the Philippines" description="Founded in 2018, Solareco grew from a solar supplies trading business into a group serving renewable energy, electrical, industrial, FDAS, and technology-related needs." />

      <section className="section-shell bg-white">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
            <SectionTitle eyebrow="Company overview" title="Built around supply, support, and project execution" description="The company capabilities include distribution, installation, e-commerce, importation, corporate support, and professional services for emerging technology adoption." />
            <div className="relative border-l border-slate-200 pl-8 sm:pl-10">
              <div className="relative pb-10">
                <span className="absolute -left-[2.65rem] top-0 h-5 w-5 rounded-full border-4 border-white bg-[#0D3567] shadow-sm sm:-left-[3.15rem]" aria-hidden="true" />
                <p className="eyebrow text-[#0D3567]">2018</p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-slate-950">Solar supplies foundation</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">Solareco began as a solar supplies trading business focused on making practical energy products available to customers.</p>
              </div>
              <div className="relative">
                <span className="absolute -left-[2.65rem] top-0 h-5 w-5 rounded-full border-4 border-white bg-[#2E7FC1] shadow-sm sm:-left-[3.15rem]" aria-hidden="true" />
                <p className="eyebrow text-[#0D3567]">Today</p>
                <h2 className="mt-2 font-heading text-2xl font-bold text-slate-950">Broader nationwide capabilities</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">The group supports renewable energy, electrical, industrial, FDAS, and technology-related requirements through branches, warehouses, e-commerce, and professional services.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-slate-50">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <article className="border-t-4 border-[#0D3567] pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2E7FC1]">01 / Corporate direction</p>
              <h2 className="mt-4 font-heading text-3xl font-black text-slate-950">Mission</h2>
              <p className="mt-4 max-w-xl leading-8 text-slate-600">To drive technological advancement by delivering innovative products, engineering solutions, and professional services that empower our customers to adopt emerging technologies with confidence. We strive to ensure quality, safety, and continuous learning while creating lasting value through innovation and excellence.</p>
            </article>
            <article className="border-t-4 border-[#2E7FC1] pt-6 lg:mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2E7FC1]">02 / Long-term ambition</p>
              <h2 className="mt-4 font-heading text-3xl font-black text-slate-950">Vision</h2>
              <p className="mt-4 max-w-xl leading-8 text-slate-600">To become the Philippines&apos; most trusted and innovative technology, renewable energy, and industrial solutions group, powered by a nationwide distribution network and a culture of excellence that enables our people, partners, and customers to grow and succeed.</p>
            </article>
          </div>
          <div className="mt-12">
            <SectionTitle eyebrow="Business areas" title="Connected capabilities for evolving requirements" />
            <ol className="editorial-list mt-8 grid sm:grid-cols-2 lg:grid-cols-5">
              {businessUnits.map((unit, index) => (
                <li key={unit} className="bg-white p-5 sm:border-r sm:last:border-r-0">
                  <span className="text-xs font-bold tracking-[0.14em] text-slate-400">0{index + 1}</span>
                  <p className="mt-3 text-base font-semibold leading-7 text-[#0D3567]">{unit}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-white">
        <Container>
          <SectionTitle eyebrow="Nationwide presence" title="Our branches and warehouses" description="Solareco locations include Iloilo, Bacolod, Manila, Palawan, Cebu, and Davao." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => <BranchCard key={branch.name} branch={branch} compact showContactLink />)}
          </div>
        </Container>
      </section>

      {showManagementSections ? (
        <>
          <ManagingPartnersSection partners={visiblePartners} showDraftNotice={isDevelopment} />
          <OrganizationStructure partners={visiblePartners} showDraftNotice={isDevelopment} />
        </>
      ) : null}

      <CtaBanner title="Work with Solareco Philippines" description="Connect with the team for product inquiries, quotations, branch coordination, and technical product support." primaryLabel="Contact Solareco" />
    </>
  );
}
