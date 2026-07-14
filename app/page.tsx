import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <Container className="grid items-center gap-9 py-11 sm:py-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:py-20">
          <div className="max-w-3xl border-l-2 border-[#62A8E5] pl-5 sm:pl-7">
            <p className="eyebrow text-blue-200">Solar products for Philippine projects</p>
            <h1 className="home-hero-title mt-5 font-heading font-black">
              Reliable Solar Products and Energy Solutions Across the Philippines
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-50/85 sm:text-lg sm:leading-8">
              Providing reliable solar products, professional installation services, and sustainable energy solutions for homes, businesses, and industries across the Philippines.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/products" variant="light">Explore Products</Button>
              <Button href="/contact" variant="outlineLight">Request a Quote</Button>
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
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-contain object-bottom p-4 sm:p-6"
            />
          </div>
        </Container>
        <div className="relative border-t border-white/10 bg-[#071F3D]/65">
          <Container className="grid gap-4 py-5 text-sm text-blue-50 sm:grid-cols-3 sm:gap-8">
            {[
              "Nationwide branch support",
              "Technical product guidance",
              "Solar and electrical product supply",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 font-semibold">
                <span className="h-2 w-2 rounded-full bg-[#62A8E5]" aria-hidden="true" />{item}
              </p>
            ))}
          </Container>
        </div>
      </section>

      <TrustedBrandsGrid />

      <section className="section-shell overflow-hidden bg-slate-50">
        <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <div>
            <SectionTitle
              eyebrow="Who we are"
              title="A practical solar and technology supplier built for Philippine requirements"
              description="Founded in 2018, Solareco grew from a solar supplies trading business into a group supporting renewable energy, electrical, industrial, FDAS, and technology-related needs."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              Product distribution, installation coordination, e-commerce availability, branch support, and technical product guidance help customers move from inquiry to a workable supply plan.
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
            <SectionTitle eyebrow="Priority catalog" title="Featured Solar Products" description="Explore Solareco's priority solar, battery, electrical protection, and wiring products for residential, commercial, and industrial requirements." />
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
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-blue-200">Why Solareco</p>
            <h2 className="section-title-text mt-3 font-heading font-black">Practical support from inquiry to installation</h2>
            <p className="mt-5 text-base leading-8 text-blue-50/75">A product partner for solar installers, project owners, dealers, and businesses that need dependable supply and clear technical coordination.</p>
            <Button href="/contact" variant="outlineLight" className="mt-8">Discuss a requirement</Button>
          </div>
          <div className="grid border-t border-white/20 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/20 py-7 sm:px-6 sm:first:pl-0 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(even)]:pr-0">
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
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionTitle eyebrow="Locations" title="Nationwide branch and warehouse support" description="Connect with Solareco Philippines through verified locations in Iloilo, Bacolod, Manila, Palawan, Cebu, and Davao." />
            <Button href="/contact" variant="secondary" className="mt-8">View full contact directory</Button>
          </div>
          <ol className="border-t border-slate-300 bg-white">
            {branches.map((branch, index) => {
              const mapUrl = branch.locations.find((location) => location.mapUrl)?.mapUrl;

              return (
                <li key={branch.name} className="grid gap-4 border-b border-slate-300 p-5 sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:items-center sm:p-6">
                  <span className="font-heading text-sm font-black text-[#2E7FC1]" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="font-heading text-xl font-bold text-slate-950">{branch.name}</h3>
                      <span className={`border-l-2 pl-2 text-xs font-bold uppercase tracking-[0.1em] ${branch.status === "Open" ? "border-emerald-500 text-emerald-700" : "border-amber-500 text-amber-800"}`}>
                        {branch.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{branch.region} / {branch.type}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 sm:justify-end">
                    <a href={branch.phoneHref} className="min-h-11 content-center text-sm font-bold text-[#0D3567] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]">
                      {branch.phone}
                    </a>
                    {mapUrl ? (
                      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="min-h-11 content-center text-sm font-semibold text-slate-600 underline-offset-4 hover:text-[#0D3567] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]">
                        View map
                      </a>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <CtaBanner title="Need help choosing the right product for your project?" description="Share your location, project requirements, and preferred product line. Solareco can help coordinate product information, availability, and the next step for a quotation." />
    </>
  );
}
