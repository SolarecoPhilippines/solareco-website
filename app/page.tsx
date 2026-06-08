import Image from "next/image";
import { Button } from "@/src/components/Button";
import { DownloadCard } from "@/src/components/DownloadCard";
import { ProductCard } from "@/src/components/ProductCard";
import { SectionTitle } from "@/src/components/SectionTitle";
import { branches } from "@/src/data/branches";
import { getAvailableDownloadGroups } from "@/src/data/downloads";
import { getVisibleProducts } from "@/src/lib/productAssets";

const benefits = [
  {
    title: "Nationwide Distribution",
    description: "Branches and warehouses support product availability for installers, dealers, and project sites.",
  },
  {
    title: "Technical Support",
    description: "Product guidance helps teams compare batteries, panels, breakers, wiring, and system requirements.",
  },
  {
    title: "Genuine Products",
    description: "Priority product lines are organized with source records, datasheet tracking, and certificate tracking.",
  },
  {
    title: "Installation Support",
    description: "Solareco helps customers move from inquiry to practical product selection for real project conditions.",
  },
  {
    title: "Multiple Branches Nationwide",
    description: "Iloilo, Bacolod, Manila, Cebu, Davao, and Palawan locations make coordination easier across regions.",
  },
  {
    title: "Fast Product Availability",
    description: "A focused catalog helps customers quickly identify available solar and electrical product options.",
  },
];

export default function Home() {
  const visibleProducts = getVisibleProducts();
  const availableDownloadGroups = getAvailableDownloadGroups();

  return (
    <>
      <section className="home-hero section-fade relative overflow-hidden bg-[#0D3567] text-white">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/hero/solareco-home-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/40" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-svh max-w-[1500px] items-center gap-8 px-4 pb-10 pt-32 sm:px-6 md:gap-6 lg:grid-cols-[0.82fr_1fr] lg:px-8 xl:gap-4">
          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Solar products for Philippine projects
            </p>
            <h1 className="mt-5 font-heading text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Reliable Solar Products and Energy Solutions Across the Philippines
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              Providing solar panels, batteries, breakers, electrical products, and technical support for homes,
              businesses, and industries.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="light">
                Request a Quotation
              </Button>
              <Button href="/products" variant="light">
                Browse Products
              </Button>
            </div>
          </div>
          <div className="relative z-10 min-h-[410px] translate-y-2 sm:min-h-[500px] sm:-translate-y-8 md:min-h-[560px] md:-translate-y-14 lg:min-h-[680px] lg:translate-x-8 lg:-translate-y-24 xl:min-h-[740px] xl:translate-x-12 xl:-translate-y-28">
            <div className="absolute inset-x-[8%] bottom-8 h-16 rounded-full bg-slate-950/25 blur-2xl" aria-hidden="true" />
            <Image
              src="/images/hero/solareco-product-lineup.png"
              alt="Solareco solar, electrical, battery, and industrial product lineup"
              fill
              priority
              sizes="(min-width: 1280px) 56vw, (min-width: 1024px) 55vw, 100vw"
              className="object-contain object-bottom drop-shadow-[0_28px_35px_rgba(15,23,42,0.22)]"
            />
          </div>
        </div>
      </section>

      <section className="section-fade px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px]">
          <SectionTitle
            eyebrow="Priority catalog"
            title="Featured Solar Products"
            description="Explore Solareco's priority solar, battery, electrical protection, and wiring products for residential, commercial, and industrial requirements."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:gap-9">
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="angled-top bg-slate-50 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why Solareco"
            title="Why Choose Solareco Philippines"
            description="A practical product partner for solar installers, project owners, dealers, and businesses that need dependable supply and support."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="hover-lift rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#0D3567] text-lg font-black text-white">
                  {benefit.title.charAt(0)}
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {availableDownloadGroups.length > 0 ? (
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Download center"
              title="Technical downloads"
              description="Approved datasheets, marketing materials, and certificates for public product review."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {availableDownloadGroups.slice(0, 4).map((group) => (
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
      ) : null}

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
