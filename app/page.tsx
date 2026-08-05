import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BranchCard } from "@/src/components/BranchCard";
import { Button } from "@/src/components/Button";
import { Container } from "@/src/components/Container";
import { CtaBanner } from "@/src/components/CtaBanner";
import { DownloadCard } from "@/src/components/DownloadCard";
import { MarketplaceLinks } from "@/src/components/MarketplaceLinks";
import { ProductCard } from "@/src/components/ProductCard";
import { SectionTitle } from "@/src/components/SectionTitle";
import { TrustedBrandsGrid } from "@/src/components/TrustedBrandsGrid";
import { branches } from "@/src/data/branches";
import { getAvailableDownloadGroups } from "@/src/data/downloads";
import { getProductCategorySlug, type ProductCategory } from "@/src/data/products";
import { supportedApplications } from "@/src/data/projects";
import { getVisibleProducts } from "@/src/lib/productAssets";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const benefits = [
  {
    title: "Nationwide Product Distribution",
    description: "Solar and electrical products for residential, commercial, and industrial requirements across the Philippines.",
  },
  {
    title: "Technical Product Guidance",
    description: "Practical product guidance and technical coordination help customers plan for their project requirements.",
  },
  {
    title: "After-Sales Service Support",
    description: "Product support continues beyond the initial purchase through responsive after-sales coordination.",
  },
  {
    title: "Growing Service-Center Network",
    description: "An expanding service-center network strengthens local technical and after-sales support.",
  },
  {
    title: "Connected ERP and CRM Operations",
    description: "Ongoing investment in nationwide ERP and CRM systems helps branches coordinate as one organization.",
  },
  {
    title: "AI-Powered Workflow Investment",
    description: "Solareco is investing in AI-powered workflows to support clearer, more connected internal processes.",
  },
  {
    title: "Faster, More Reliable Coordination",
    description: "Connected systems and shared workflows help teams respond to customer needs with greater speed and consistency.",
  },
];

const companyPillars = [
  {
    title: "Nationwide Distribution",
    description: "Solar and electrical product supply for residential, commercial, and industrial customers across the Philippines.",
  },
  {
    title: "After-Sales & Technical Support",
    description: "Product guidance, technical coordination, and a growing service-center network that supports customers beyond the initial purchase.",
  },
  {
    title: "One Connected Organization",
    description: "Investment in nationwide ERP, CRM, and AI-powered workflows helps Solareco branches work as one connected team and respond faster to customer needs.",
  },
];

const homepageCategories: Array<{
  category: ProductCategory;
  description: string;
}> = [
  {
    category: "Lithium Batteries",
    description: "Battery product options with technical references for energy-storage selection.",
  },
  {
    category: "All-in-One Energy Storage System",
    description: "Compact energy-storage equipment for integrated backup and charging requirements.",
  },
  {
    category: "Off-Grid Solar Inverters",
    description: "Off-grid inverter product options for product-selection and project-supply inquiries.",
  },
  {
    category: "Hybrid Single-Phase Inverters",
    description: "Hybrid single-phase inverter options for product-selection and quotation inquiries.",
  },
  {
    category: "Solar Panels",
    description: "Published panel options for residential, commercial, and distributed-energy planning.",
  },
  {
    category: "Electrical Protection",
    description: "Protection components for solar and electrical distribution requirements.",
  },
  {
    category: "Solar Wiring",
    description: "Solar cabling products for installer and project-supply inquiries.",
  },
];

export default function Home() {
  const visibleProducts = getVisibleProducts();
  const availableDownloadGroups = getAvailableDownloadGroups();
  const categoryBlocks = homepageCategories.flatMap((item) => {
    const product = visibleProducts.find((candidate) => candidate.category === item.category);
    return product ? [{ ...item, product }] : [];
  });
  const featuredApplication = supportedApplications[0];
  const featuredApplicationProduct = visibleProducts.find((product) => product.category === "Solar Panels");

  return (
    <>
      <section className="home-hero section-fade bg-[#0A2A52] text-white">
        <Container className="grid items-center gap-10 py-11 sm:py-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-[clamp(3rem,5vw,6rem)] lg:py-20 2xl:py-24">
          <div className="max-w-3xl border-l-2 border-[#62A8E5] pl-5 sm:pl-7">
            <p className="eyebrow text-blue-200">NATIONWIDE SOLAR &amp; ELECTRICAL DISTRIBUTION</p>
            <h1 className="home-hero-title mt-5 font-heading font-black">
              Solar and Electrical Solutions, Connected Nationwide
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
              Solareco Corporation supplies dependable solar and electrical products for residential, commercial, and industrial projects across the Philippines—backed by technical support, after-sales service, and a growing nationwide service network.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="light">Explore Products</Button>
              <Button href="/contact" variant="outlineLight">Talk to Our Team</Button>
            </div>
            <div className="mt-8 border-t border-white/15 pt-6">
              <MarketplaceLinks theme="dark" />
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-white/20 bg-[#071F3D] shadow-[14px_14px_0_rgba(46,127,193,0.16)]">
            <Image
              src="/images/hero/solareco-product-lineup.png"
              alt="Solareco solar, electrical, battery, and industrial product range"
              fill
              priority
              sizes="(min-width: 1600px) 42vw, (min-width: 1024px) 40vw, 100vw"
              className="object-contain object-bottom p-4 sm:p-6"
            />
          </div>
        </Container>
      </section>

      <section className="border-b border-slate-200 bg-white" aria-label="How Solareco supports customers nationwide">
        <Container className="grid divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {companyPillars.map((pillar, index) => (
            <article key={pillar.title} className="py-7 md:px-7 md:first:pl-0 md:last:pr-0 lg:py-9 lg:px-10">
              <p className="text-xs font-bold tracking-[0.16em] text-[#2E7FC1]" aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-heading text-xl font-black text-[#0D3567]">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{pillar.description}</p>
            </article>
          ))}
        </Container>
      </section>

      <TrustedBrandsGrid />

      <section className="section-shell overflow-hidden bg-slate-50">
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="WHO WE ARE"
              title="A Connected Nationwide Partner for Solar and Electrical Projects"
              description="Solareco Corporation is a fast-growing distributor of solar and electrical products serving customers throughout the Philippines. We support residential, commercial, and industrial requirements with practical product supply, technical coordination, and responsive after-sales service."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Our growing network of branches and service centers is strengthened by ongoing investment in ERP, CRM, and AI-powered workflows. This technology-first approach helps our teams work as one connected organization—improving coordination, service speed, and reliability for every customer.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/about">About Solareco</Button>
              <Button href="/contact" variant="secondary">Contact the team</Button>
            </div>
          </div>
          <div className="relative min-h-[340px] border-y border-slate-300 bg-[linear-gradient(135deg,#ffffff_0%,#eaf1f8_58%,#d7e6f3_100%)] sm:min-h-[460px]">
            <Image
              src="/images/products-processed/solahestia/610w/HESTIA.webp"
              alt="SOLAHESTIA 610W solar panel product view"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain p-8 sm:p-12"
            />
            <div className="absolute left-0 top-0 max-w-[15rem] border-r border-b border-slate-300 bg-white/95 px-5 py-4">
              <p className="eyebrow text-[#0D3567]">Solar supply</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Published panel options support residential and commercial product planning.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-shell bg-white">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Product categories"
              title="Navigate the published catalog by project requirement"
              description="Only categories backed by currently published products are shown here. Use the catalog filters to review the available product lines."
            />
            <Button href="/products" variant="secondary" className="w-fit">Open technical catalog</Button>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-12">
            {categoryBlocks.map((item, index) => (
              <Link
                key={item.category}
                href={`/products?category=${getProductCategorySlug(item.category)}`}
                className={`group grid min-h-[280px] overflow-hidden border border-slate-200 bg-slate-50 transition hover:border-[#0D3567]/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
                  index === 0 ? "md:col-span-2 lg:grid-cols-[1fr_0.9fr] xl:col-span-7" : index === 1 ? "xl:col-span-5" : "xl:col-span-4"
                }`}
              >
                <div className={`relative min-h-[210px] overflow-hidden bg-white ${index === 0 ? "lg:min-h-full lg:border-r lg:border-slate-200" : "border-b border-slate-200"}`}>
                  <Image
                    src={item.product.primaryImage.src}
                    alt={item.product.primaryImage.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 1280px) 34vw, 100vw" : "(min-width: 1280px) 25vw, 50vw"}
                    className="object-contain p-6 transition duration-300 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex flex-col justify-between p-6 sm:p-7">
                  <div>
                    <span className="text-xs font-bold tracking-[0.16em] text-[#2E7FC1]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-4 font-heading text-2xl font-black leading-tight text-slate-950">{item.category}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                  </div>
                  <span className="mt-6 inline-flex text-sm font-bold text-[#0D3567]">View category <span className="ml-2" aria-hidden="true">-&gt;</span></span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-slate-50">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle eyebrow="Priority catalog" title="Products backed by nationwide support" description="Explore solar, energy-storage, inverter, electrical-protection, and wiring products supported by Solareco’s nationwide distribution, technical guidance, and after-sales coordination." />
            <Button href="/products" variant="secondary" className="w-fit">View all products</Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-12">
            {visibleProducts.map((product, index) => (
              <div
                key={product.slug}
                className={index === 0 ? "md:col-span-2 xl:col-span-7" : index === 1 ? "xl:col-span-5" : "xl:col-span-3"}
              >
                <ProductCard product={product} showQuoteButton={index < 2} featured={index === 0} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-[#071F3D] text-white">
        <Container className="grid gap-10 lg:grid-cols-[minmax(260px,0.62fr)_minmax(0,1.38fr)] lg:gap-[clamp(3rem,5vw,6rem)]">
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-blue-200">Why Solareco</p>
            <h2 className="section-title-text mt-3 font-heading font-black">Nationwide support, strengthened by connected operations</h2>
            <p className="mt-5 text-base leading-8 text-blue-50/75">Solareco combines product distribution, technical guidance, after-sales coordination, and ongoing systems investment to support customers across the Philippines.</p>
            <Button href="/contact" variant="outlineLight" className="mt-8">Discuss a requirement</Button>
          </div>
          <div className="grid gap-px border border-white/20 bg-white/20 md:grid-cols-2 2xl:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="grid grid-cols-[42px_1fr] gap-4 bg-[#071F3D] p-6 lg:p-7">
                <span className="font-heading text-sm font-black text-blue-300" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-base leading-7 text-blue-50/70">{benefit.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell bg-white">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow text-[#0D3567]">Supported applications</p>
              <h2 className="section-title-text mt-3 font-heading font-black text-slate-950">Solutions shaped around real project requirements</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">Review supported supply and planning scenarios, then talk with Solareco about product availability and project requirements.</p>
            </div>
            <Button href="/projects" variant="secondary" className="w-fit">Explore solutions</Button>
          </div>
          <div className="mt-10 grid border-y border-slate-300 lg:grid-cols-[1.12fr_0.88fr]">
            <Link href="/projects" className="group grid bg-slate-50 sm:grid-cols-[0.9fr_1.1fr] lg:border-r lg:border-slate-300">
              <div className="relative min-h-[300px] overflow-hidden bg-white">
                {featuredApplicationProduct ? (
                  <Image
                    src={featuredApplicationProduct.primaryImage.src}
                    alt={featuredApplicationProduct.primaryImage.alt}
                    fill
                    sizes="(min-width: 1024px) 32vw, 50vw"
                    className="object-contain p-7 transition duration-300 group-hover:scale-[1.025]"
                  />
                ) : null}
              </div>
              <div className="flex flex-col justify-center border-t border-slate-300 p-7 sm:border-l sm:border-t-0 lg:p-9">
                <p className="eyebrow text-[#0D3567]">{featuredApplication.category}</p>
                <h3 className="mt-4 font-heading text-2xl font-black text-slate-950 sm:text-3xl">{featuredApplication.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{featuredApplication.summary}</p>
                <span className="mt-7 text-sm font-bold text-[#0D3567]">View supported application -&gt;</span>
              </div>
            </Link>
            <div className="divide-y divide-slate-300">
              {supportedApplications.slice(1, 4).map((solution, index) => (
                <Link key={solution.title} href="/projects" className="group grid gap-4 p-6 transition hover:bg-slate-50 sm:grid-cols-[48px_1fr] lg:p-8">
                  <span className="font-heading text-sm font-black text-[#2E7FC1]" aria-hidden="true">0{index + 2}</span>
                  <div>
                    <p className="eyebrow text-[#0D3567]">{solution.category}</p>
                    <h3 className="mt-3 font-heading text-xl font-bold text-slate-950">{solution.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{solution.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {availableDownloadGroups.length > 0 ? (
        <section className="section-shell bg-white">
          <Container>
            <SectionTitle eyebrow="Download center" title="Technical downloads" description="Approved datasheets, marketing materials, and certificates for public product review." />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {availableDownloadGroups.slice(0, 4).map((group) => <DownloadCard key={group.title} group={group} />)}
            </div>
            <Button href="/downloads" variant="secondary" className="mt-8">View Download Center</Button>
          </Container>
        </section>
      ) : null}

      <section className="section-shell bg-slate-50">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle eyebrow="Locations" title="Nationwide branch and warehouse support" description="Connect with Solareco Philippines through verified locations in Iloilo, Bacolod, Manila, Palawan, Cebu, and Davao." />
            <Button href="/contact" variant="secondary" className="w-fit">View full contact directory</Button>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {branches.map((branch) => (
              <BranchCard key={branch.name} branch={branch} compact showContactLink />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner title="Need help choosing the right product for your project?" description="Share your location, project requirements, and preferred product line. Solareco can help coordinate product information, availability, and the next step for a quotation." />
    </>
  );
}
