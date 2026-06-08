import Image from "next/image";
import { Button } from "@/src/components/Button";
import { DownloadCard } from "@/src/components/DownloadCard";
import { ProductCard } from "@/src/components/ProductCard";
import { SectionTitle } from "@/src/components/SectionTitle";
import { branches } from "@/src/data/branches";
import { downloadGroups } from "@/src/data/downloads";
import { products } from "@/src/data/products";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";

const benefits = [
  "Reliable solar products",
  "Technical assistance",
  "Nationwide presence",
  "Installation support",
];

export default function Home() {
  return (
    <>
      <section className="section-fade relative overflow-hidden bg-[#0D3567] text-white">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero/solareco-home-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0D3567]/75" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[calc(100svh-78px)] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Solar products for Philippine projects
            </p>
            <h1 className="mt-5 font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Practical solar solutions backed by nationwide support.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              Solareco supplies priority solar products, electrical components, and support services for homes,
              businesses, installers, and project partners across the Philippines.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="light">
                Browse Products
              </Button>
              <Button href={FACEBOOK_PAGE_URL} variant="secondary">
                Message Us on Facebook
              </Button>
            </div>
          </div>
          <div className="relative z-10 min-h-[340px] lg:min-h-[520px]">
            <Image
              src="/images/hero/solareco-product-lineup.png"
              alt="Solareco solar, electrical, battery, and industrial product lineup"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="section-fade px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Priority catalog"
            title="Featured solar products"
            description="Initial placeholders are ready for official photos, datasheets, certificates, and final product copy."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="angled-top bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why Solareco"
            title="Support for better solar project execution"
            description="The foundation reflects the business scope today while leaving room for verified assets and approved documentation later."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 h-10 w-10 rounded-md bg-[#0D3567]" />
                <h3 className="font-heading text-lg font-bold text-slate-950">{benefit}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Placeholder details will be refined with the final service description and proof points.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Download center"
            title="Documents prepared for controlled publishing"
            description="Datasheets, marketing materials, and certificates are grouped so approved files can be added without changing the site structure."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {downloadGroups.slice(0, 4).map((group) => (
              <DownloadCard key={group.title} group={group} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/downloads" variant="secondary">
              View Download Center
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Locations"
            title="Nationwide Presence"
            description="Connect with Solareco Philippines through our branches and warehouses in Iloilo, Bacolod, Manila, Palawan, Cebu, and Davao."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((branch) => (
              <article key={branch.name} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-slate-950">{branch.shortName}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#0D3567]">{branch.type}</p>
                <a
                  href={branch.phoneHref}
                  aria-label={`Call ${branch.name} at ${branch.phone}`}
                  className="mt-4 inline-flex text-sm font-semibold text-slate-700 underline-offset-4 hover:text-[#0D3567] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                >
                  {branch.phone}
                </a>
                <div className="mt-4">
                  <Button href="/contact" variant="secondary">
                    View Contact Details
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0D3567] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold">Request a product quote</h2>
            <p className="mt-3 max-w-2xl text-blue-50">
              Share your project requirement and the Solareco team can help identify the right product path.
            </p>
          </div>
          <Button href="/contact" variant="light">
            Request a Quote
          </Button>
        </div>
      </section>
    </>
  );
}
