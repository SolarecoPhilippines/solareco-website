import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/src/components/Button";
import { DownloadCard } from "@/src/components/DownloadCard";
import { PlaceholderImage } from "@/src/components/PlaceholderImage";
import { ProductImageGallery } from "@/src/components/ProductImageGallery";
import { ProductParameterTable } from "@/src/components/ProductParameterTable";
import { SakoBatterySelector } from "@/src/components/SakoBatterySelector";
import { SectionTitle } from "@/src/components/SectionTitle";
import {
  SAKO_ALL_IN_ONE_PRINTED_PAGES,
  SAKO_ALL_IN_ONE_PRODUCT_URL,
  SAKO_ALL_IN_ONE_SOURCE_LABEL,
  sakoAllInOneGalleryImages,
  sakoAllInOneTechnicalTable,
} from "@/src/data/sakoAllInOneTechnicalParameters";
import { getProductSources } from "@/src/data/productSources";
import { SAKO_ALL_IN_ONE_SOURCE_URL, getProductBySlug, products } from "@/src/data/products";
import {
  SAKO_CATALOGUE_PRINTED_PAGES,
  SAKO_CATALOGUE_SOURCE_LABEL,
  SAKO_CATALOGUE_URL,
  sakoBatteryModels,
  sakoLiSunTechnicalTable,
} from "@/src/data/sakoTechnicalParameters";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const downloadGroup = {
    title: "Available Downloads",
    description: "Placeholder files are listed for document planning and approval.",
    items: [
      { name: `${product.name} datasheet placeholder`, status: "Coming Soon" as const },
      { name: `${product.name} marketing material placeholder`, status: "Coming Soon" as const },
      { name: `${product.name} certificates placeholder`, status: "Coming Soon" as const },
    ],
  };

  const isSakoBattery = product.slug === "sako";
  const isSakoAllInOne = product.slug === "sako-all-in-one";
  const sourceUrl = isSakoAllInOne
    ? SAKO_ALL_IN_ONE_SOURCE_URL
    : product.sourceReferences?.[0]?.url;
  const sourceRecords = getProductSources(product.slug);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {isSakoAllInOne ? (
            <ProductImageGallery model="SAKO Alpha-W-ESS 1000W / 2kWh" images={sakoAllInOneGalleryImages} />
          ) : (
            <PlaceholderImage label={product.name} />
          )}
          <div>
            {isSakoAllInOne ? (
              <nav className="mb-5 text-sm font-semibold text-slate-500" aria-label="Breadcrumb">
                <ol className="flex flex-wrap gap-2">
                  <li>
                    <Link href="/" className="hover:text-[#0D3567]">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">→</li>
                  <li>
                    <Link href="/products" className="hover:text-[#0D3567]">
                      Products
                    </Link>
                  </li>
                  <li aria-hidden="true">→</li>
                  <li className="text-slate-900">SAKO Alpha-W-ESS 1000W / 2kWh</li>
                </ol>
              </nav>
            ) : null}
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D3567]">{product.category}</p>
            <h1 className="mt-3 font-heading text-4xl font-black text-slate-950 sm:text-5xl">
              {isSakoAllInOne ? "SAKO Alpha-W-ESS 1000W / 2kWh All-in-One" : product.name}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request Quote</Button>
              <Button href={FACEBOOK_PAGE_URL} variant="secondary">
                Message on Facebook
              </Button>
              {sourceUrl ? (
                <Button href={sourceUrl} variant="secondary">
                  View Official SAKO Source
                </Button>
              ) : null}
            </div>
          </div>
        </div>

        {isSakoBattery ? (
          <section className="mt-16">
            <SectionTitle
              eyebrow={product.secondaryLabel}
              title="TECHNICAL PARAMETER"
              description="Compare available SAKO Li-Sun lithium battery models and technical parameters. Use this table as a reference when selecting a suitable energy-storage option for your project."
            />
            <SakoBatterySelector models={sakoBatteryModels} />
            <div className="mt-10">
              <ProductParameterTable technicalTable={sakoLiSunTechnicalTable} />
            </div>
            <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Specifications are based on the official SAKO Solar Catalogue reference. Confirm compatibility, current
              stock availability, and the latest approved datasheet before preparing a quotation, recommending a system,
              or proceeding with installation.
            </p>
            <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Official Technical Reference</h2>
              <dl className="mt-5 grid gap-4 text-sm text-slate-700 md:grid-cols-3">
                <div>
                  <dt className="font-semibold uppercase tracking-[0.12em] text-slate-500">Source</dt>
                  <dd className="mt-1">{SAKO_CATALOGUE_SOURCE_LABEL}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.12em] text-slate-500">Printed catalogue pages</dt>
                  <dd className="mt-1">{SAKO_CATALOGUE_PRINTED_PAGES}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.12em] text-slate-500">Official catalogue URL</dt>
                  <dd className="mt-1">
                    <a
                      href={SAKO_CATALOGUE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0D3567] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                    >
                      Open official SAKO catalogue
                    </a>
                  </dd>
                </div>
              </dl>
            </section>
          </section>
        ) : null}

        {isSakoAllInOne ? (
          <section className="mt-16">
            <SectionTitle
              eyebrow="Alpha-W-ESS"
              title="TECHNICAL PARAMETER"
              description="Official SAKO Alpha-W-ESS 1000W / 2kWh All-in-One technical reference."
            />
            <div className="mt-8">
              <ProductParameterTable technicalTable={sakoAllInOneTechnicalTable} />
            </div>
            <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Specifications are based on the official SAKO catalogue reference. Confirm compatibility, stock
              availability, and the latest approved datasheet before preparing a quotation or recommending a system.
            </p>
            <section className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="font-heading text-2xl font-bold text-slate-950">Official Technical Reference</h2>
              <dl className="mt-5 grid gap-4 text-sm text-slate-700 md:grid-cols-2">
                <div>
                  <dt className="font-semibold uppercase tracking-[0.12em] text-slate-500">Source</dt>
                  <dd className="mt-1">{SAKO_ALL_IN_ONE_SOURCE_LABEL}</dd>
                </div>
                <div>
                  <dt className="font-semibold uppercase tracking-[0.12em] text-slate-500">Printed Catalogue Pages</dt>
                  <dd className="mt-1">{SAKO_ALL_IN_ONE_PRINTED_PAGES}</dd>
                </div>
              </dl>
              <a
                href={SAKO_ALL_IN_ONE_PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-semibold text-[#0D3567] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
              >
                View Official SAKO Source
              </a>
            </section>
          </section>
        ) : null}

        {sourceRecords.length > 0 ? (
          <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <SectionTitle
              title="Source information"
              description="Official source links are retained for manual verification and should not be treated as public downloadable files."
            />
            <div className="mt-6 grid gap-4">
              {sourceRecords.map((source) => (
                <article key={source.officialUrl} className="rounded-md border border-slate-200 bg-white p-4">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-950">{source.productName}</h3>
                      <a
                        href={source.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex text-sm font-semibold text-[#0D3567] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                      >
                        Official product-page link
                      </a>
                    </div>
                    <div className="grid gap-2 text-sm text-slate-700 sm:grid-cols-3 lg:min-w-[520px]">
                      <p>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Source status
                        </span>
                        {source.accessStatus}
                      </p>
                      <p>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Last checked
                        </span>
                        {source.checkedAt}
                      </p>
                      <p>
                        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                          Datasheet status
                        </span>
                        {source.datasheetStatus}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{source.notes}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <SectionTitle title="Key details" description="Final product details will be added after datasheet approval." />
            <ul className="mt-6 grid gap-3">
              {product.keyDetails.map((detail) => (
                <li key={detail} className="rounded-md bg-white p-4 text-sm text-slate-700 shadow-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </section>
          <DownloadCard group={downloadGroup} />
        </div>
      </div>
    </section>
  );
}
