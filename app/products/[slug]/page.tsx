import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/src/components/Button";
import { getProductCategoryLabel, ProductCategoryNavigation } from "@/src/components/ProductCategoryNavigation";
import { MarketplaceLinks } from "@/src/components/MarketplaceLinks";
import { ProductImageGallery } from "@/src/components/ProductImageGallery";
import { ProductParameterTable } from "@/src/components/ProductParameterTable";
import { SakoBatterySelector } from "@/src/components/SakoBatterySelector";
import { SectionTitle } from "@/src/components/SectionTitle";
import {
  SAKO_ALL_IN_ONE_PRINTED_PAGES,
  SAKO_ALL_IN_ONE_PRODUCT_URL,
  SAKO_ALL_IN_ONE_SOURCE_LABEL,
  sakoAllInOneTechnicalTable,
} from "@/src/data/sakoAllInOneTechnicalParameters";
import { SAKO_ALL_IN_ONE_SOURCE_URL } from "@/src/data/products";
import {
  SAKO_CATALOGUE_PRINTED_PAGES,
  SAKO_CATALOGUE_SOURCE_LABEL,
  SAKO_CATALOGUE_URL,
  sakoBatteryModels,
  sakoLiSunTechnicalTable,
} from "@/src/data/sakoTechnicalParameters";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";
import { getVisibleProductBySlug, getVisibleProducts } from "@/src/lib/productAssets";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getVisibleProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getVisibleProductBySlug(slug);

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
  const visibleProducts = getVisibleProducts();
  const product = visibleProducts.find((item) => item.slug === slug) ?? null;

  if (!product) {
    notFound();
  }

  const isSakoBattery = product.slug === "sako";
  const isSakoAllInOne = product.slug === "sako-all-in-one";
  const categoryLabel = getProductCategoryLabel(product.category);
  const categoryHref = `/products/${visibleProducts.find((item) => item.category === product.category)?.slug ?? product.slug}`;
  const sourceUrl = isSakoAllInOne
    ? SAKO_ALL_IN_ONE_SOURCE_URL
    : product.sourceReferences?.[0]?.url;
  const productGalleryImages = product.images.map((image, index) => ({
    ...image,
    label: `Product Image ${index + 1}`,
  }));
  const sakoImagesByModel = Object.fromEntries(
    sakoBatteryModels.map((model) => [
      model.slug,
      product.images
        .filter((image) => image.src.includes(`/sako-batteries/${model.slug}/`))
        .map((image, index) => ({ ...image, label: `${model.model} Image ${index + 1}` })),
    ]),
  );

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <ProductCategoryNavigation activeProduct={product} products={visibleProducts} />

        <main>
          <nav className="mb-6 text-sm font-semibold text-slate-500" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#0D3567]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li>
                <Link href="/products" className="hover:text-[#0D3567]">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li>
                <Link href={categoryHref} className="hover:text-[#0D3567]">
                  {categoryLabel}
                </Link>
              </li>
              <li aria-hidden="true">&gt;</li>
              <li className="text-slate-900">{product.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <ProductImageGallery model={product.name} images={productGalleryImages} />
            <div className="lg:pl-4">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D3567]">{categoryLabel}</p>
            <h1 className="mt-3 font-heading text-4xl font-black text-slate-950 sm:text-5xl">
              {isSakoAllInOne ? "SAKO Alpha-W-ESS 1000W / 2kWh All-in-One" : product.name}
            </h1>
            {product.features?.length ? (
              <div className="mt-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0D3567]">Features</p>
                <ul className="mt-4 grid gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-base leading-7 text-slate-700">
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0D3567] text-xs font-black text-white"
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : product.description ? (
              <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>
            ) : null}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" className="min-h-12 px-7 text-base">
                Request a Quote
              </Button>
              <Button href={FACEBOOK_PAGE_URL} variant="secondary">
                Message Us
              </Button>
            </div>
            <div className="mt-6">
              <MarketplaceLinks />
            </div>
            {sourceUrl ? (
              <p className="mt-5 text-sm leading-6 text-slate-600">
                <span className="font-semibold text-slate-800">Official Product Reference</span>{" "}
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0D3567] underline-offset-4 transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                >
                  Visit SAKO Website →
                </a>
              </p>
            ) : null}
            </div>
          </div>

        {isSakoBattery ? (
          <section className="mt-16">
            <SectionTitle
              eyebrow={product.secondaryLabel}
              title="SAKO Li-Sun Technical Parameters"
              description="Compare uploaded SAKO Li-Sun battery models using technical values from the official SAKO catalogue."
            />
            <SakoBatterySelector models={sakoBatteryModels} imagesByModel={sakoImagesByModel} />
            <div className="mt-10">
              <ProductParameterTable technicalTable={sakoLiSunTechnicalTable} />
            </div>
            <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
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
                Visit SAKO Website →
              </a>
            </section>
          </section>
        ) : null}

        <div className="mt-16">
          <section className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <SectionTitle title="Key details" description="Product details and available technical references." />
            <ul className="mt-6 grid gap-3">
              {product.keyDetails.map((detail) => (
                <li key={detail} className="rounded-md bg-white p-4 text-sm text-slate-700 shadow-sm">
                  {detail}
                </li>
              ))}
            </ul>
          </section>
        </div>
        </main>
      </div>
    </section>
  );
}
