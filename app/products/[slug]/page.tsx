import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/src/components/Button";
import { getProductCategoryLabel, ProductCategoryNavigation } from "@/src/components/ProductCategoryNavigation";
import { MarketplaceLinks } from "@/src/components/MarketplaceLinks";
import { ProductCard } from "@/src/components/ProductCard";
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
import { getProductCategorySlug, SAKO_ALL_IN_ONE_SOURCE_URL } from "@/src/data/products";
import {
  SAKO_CATALOGUE_PRINTED_PAGES,
  SAKO_CATALOGUE_SOURCE_LABEL,
  SAKO_CATALOGUE_URL,
  sakoBatteryModels,
  sakoLiSunTechnicalTable,
} from "@/src/data/sakoTechnicalParameters";
import { FACEBOOK_PAGE_URL, SITE_NAME, SITE_URL } from "@/src/lib/constants";
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
    title: product.seoTitle ?? product.name,
    description: product.seoDescription ?? product.summary,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      url: `/products/${product.slug}`,
      title: product.seoTitle ?? product.name,
      description: product.seoDescription ?? product.summary,
      images: [{ url: product.primaryImage.src, alt: product.primaryImage.alt }],
    },
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
  const categoryHref = `/products?category=${getProductCategorySlug(product.category)}`;
  const sourceUrl = isSakoAllInOne
    ? SAKO_ALL_IN_ONE_SOURCE_URL
    : product.sourceReferences?.[0]?.url;
  const productGalleryImages = product.images;
  const relatedProducts = visibleProducts
    .filter((candidate) => candidate.slug !== product.slug)
    .sort((first, second) => Number(second.category === product.category) - Number(first.category === product.category))
    .slice(0, 3);
  const sakoImagesByModel = Object.fromEntries(
    sakoBatteryModels.map((model) => [
      model.slug,
      product.images
        .filter((image) => image.src.includes(`/sako-batteries/${model.slug}/`))
        .map((image) => ({ ...image })),
    ]),
  );
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Products", item: `${SITE_URL}/products` },
      { "@type": "ListItem", position: 3, name: categoryLabel, item: `${SITE_URL}${categoryHref}` },
      { "@type": "ListItem", position: 4, name: product.name, item: `${SITE_URL}/products/${product.slug}` },
    ],
  };
  const productSchema = product.productLine && product.sourceReferences?.length
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: product.summary,
        image: product.images.map((image) => `${SITE_URL}${image.src}`),
        category: product.category,
        brand: { "@type": "Brand", name: "SAKO" },
        url: `${SITE_URL}/products/${product.slug}`,
        isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
      }
    : null;

  return (
    <section className="bg-slate-50 py-8 sm:py-14 lg:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {productSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} /> : null}
      <div className="site-container grid gap-4 sm:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
        <ProductCategoryNavigation activeProduct={product} products={visibleProducts} />

        <div className="min-w-0">
          <nav className="mb-5 text-xs font-semibold text-slate-500 sm:text-sm" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2">
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

          <div className="editorial-panel grid min-w-0 max-w-full gap-7 p-4 sm:p-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10 lg:p-8">
            <ProductImageGallery model={product.name} images={productGalleryImages} eager />
            <div className="min-w-0 lg:pl-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0D3567] sm:text-sm">{categoryLabel}</p>
            <h1 className="detail-title mt-3 font-heading font-black text-slate-950">
              {isSakoAllInOne ? "SAKO Alpha-W-ESS 1000W / 2kWh All-in-One" : product.name}
            </h1>
            {product.features?.length ? (
              <div className="mt-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#0D3567]">Features</p>
                <ul className="mt-4 grid gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-base leading-7 text-slate-700">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-[#2E7FC1]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : product.description ? (
              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{product.description}</p>
            ) : null}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
              <Button href="/contact" className="min-h-12 w-full px-7 text-base sm:w-auto">
                Request a Quote
              </Button>
              <Button href={FACEBOOK_PAGE_URL} variant="secondary" className="w-full sm:w-auto">
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
                  Visit SAKO Website -&gt;
                </a>
              </p>
            ) : null}
            </div>
          </div>

        {isSakoBattery ? (
          <section className="mt-12 sm:mt-16">
            <SectionTitle
              eyebrow={product.secondaryLabel}
              title="SAKO Li-Sun Technical Parameters"
              description="Compare uploaded SAKO Li-Sun battery models using technical values from the official SAKO catalogue."
            />
            <SakoBatterySelector models={sakoBatteryModels} imagesByModel={sakoImagesByModel} />
            <div className="mt-8 sm:mt-10">
              <ProductParameterTable technicalTable={sakoLiSunTechnicalTable} />
            </div>
            <section className="editorial-panel mt-8 p-4 sm:p-6">
              <h2 className="font-heading text-xl font-bold text-slate-950 sm:text-2xl">Official Technical Reference</h2>
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
          <section className="mt-12 sm:mt-16">
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
            <section className="editorial-panel mt-8 p-4 sm:p-6">
              <h2 className="font-heading text-xl font-bold text-slate-950 sm:text-2xl">Official Technical Reference</h2>
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
                Visit SAKO Website -&gt;
              </a>
            </section>
          </section>
        ) : null}

        <div className="mt-12 sm:mt-16">
          <section className="border-t-4 border-[#0D3567] bg-white p-5 sm:p-7">
            <SectionTitle title="Key details" description="Product details and available technical references." />
            <ul className="editorial-list mt-6">
              {product.keyDetails.map((detail) => (
                <li key={detail} className="py-4 text-base leading-7 text-slate-700">
                  {detail}
                </li>
              ))}
            </ul>
          </section>
        </div>
        {relatedProducts.length > 0 ? (
          <section className="mt-12 sm:mt-16">
            <SectionTitle
              eyebrow="Continue the catalog"
              title="Related published products"
              description="Review other public-ready product lines, then contact Solareco for current availability and quotation support."
            />
            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.slug} product={relatedProduct} showQuoteButton={false} />
              ))}
            </div>
          </section>
        ) : null}
        </div>
      </div>
    </section>
  );
}
