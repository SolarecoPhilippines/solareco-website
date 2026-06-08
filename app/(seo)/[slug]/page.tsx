import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/src/components/Button";
import { SectionTitle } from "@/src/components/SectionTitle";
import { getSeoLandingPage, seoLandingPages } from "@/src/data/seoLandingPages";
import { products } from "@/src/data/products";
import { SITE_NAME } from "@/src/lib/constants";

type SeoPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SeoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    return { title: "Page Not Found" };
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      type: "website",
    },
  };
}

export default async function SeoLandingPage({ params }: SeoPageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  const relatedProducts = products.filter((product) => page.relatedProducts.includes(product.name));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D3567]">Solareco Philippines</p>
            <h1 className="mt-3 font-heading text-4xl font-black text-slate-950 sm:text-5xl">{page.h1}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request a Quotation</Button>
              <Button href="/products" variant="secondary">
                Browse Products
              </Button>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <SectionTitle title="What Solareco Supports" description={page.description} />
              <ul className="mt-6 grid gap-3">
                {page.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-md bg-slate-50 p-4 text-sm font-medium text-slate-700">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <SectionTitle title="Related Product Lines" description="Continue into the product catalog for specifications, galleries, and quote actions." />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="rounded-md border border-slate-200 bg-slate-50 p-4 transition hover:border-[#0D3567]/45 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                  >
                    <span className="block font-heading text-lg font-bold text-slate-950">{product.name}</span>
                    <span className="mt-2 block text-sm leading-6 text-slate-600">{product.summary}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
