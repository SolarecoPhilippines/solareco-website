import type { Metadata } from "next";
import { PlaceholderImage } from "@/src/components/PlaceholderImage";
import { SectionTitle } from "@/src/components/SectionTitle";
import { branches } from "@/src/data/branches";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Solareco Group and its nationwide solar business capabilities.",
};

const businessUnits = ["Distribution", "Installation", "E-commerce", "Importation", "Corporate support"];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#0D3567] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">About Solareco</p>
            <h1 className="mt-4 font-heading text-4xl font-black sm:text-5xl">
              A growing solar group serving customers across the Philippines.
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-50">
              Solareco Group was founded in 2018 and grew from a solar supplies trading business into a diversified
              group serving customers across the Philippines.
            </p>
          </div>
          <PlaceholderImage label="Solareco company" className="border-white/20 bg-white/10" />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Company overview"
            title="Built around supply, support, and project execution"
            description="The company capabilities include distribution, installation, e-commerce, importation, and corporate support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Mission placeholder</h2>
              <p className="mt-4 text-slate-600">
                To provide dependable solar products and practical support that help customers adopt cleaner energy with confidence.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Vision placeholder</h2>
              <p className="mt-4 text-slate-600">
                To be a trusted solar partner with strong product access and responsive service across the Philippines.
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {businessUnits.map((unit) => (
              <div key={unit} className="rounded-lg bg-slate-50 p-5 text-sm font-semibold text-[#0D3567]">
                {unit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Branch locations" description="Nationwide presence includes Iloilo, Bacolod, Manila, Palawan, Cebu, and Davao." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => (
              <article key={branch.city} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-slate-950">{branch.city}</h3>
                <p className="mt-2 text-sm font-semibold text-[#0D3567]">{branch.label}</p>
                <p className="mt-4 text-sm text-slate-600">{branch.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Projects preview" description="Project images, highlights, and customer-ready proof points will be added after approval." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <PlaceholderImage label="Residential project" />
            <PlaceholderImage label="Commercial project" />
            <PlaceholderImage label="Installation support" />
          </div>
        </div>
      </section>
    </>
  );
}

