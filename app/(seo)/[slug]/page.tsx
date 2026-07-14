import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/src/components/Button";
import { Container } from "@/src/components/Container";
import { SectionTitle } from "@/src/components/SectionTitle";
import { getSeoLandingPage, seoLandingPages } from "@/src/data/seoLandingPages";
import { SITE_NAME, SITE_URL } from "@/src/lib/constants";
import { getVisibleProducts } from "@/src/lib/productAssets";

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
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      url: `/${page.slug}`,
    },
  };
}

export default async function SeoLandingPage({ params }: SeoPageProps) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);

  if (!page) {
    notFound();
  }

  const relatedProducts = getVisibleProducts().filter((product) => page.relatedProducts.includes(product.name));
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.title,
      description: page.description,
      url: `${SITE_URL}/${page.slug}`,
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_URL}/${page.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="section-shell bg-slate-50">
        <Container>
          <div className="surface-card p-6 lg:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D3567]">Solareco Philippines</p>
            <h1 className="detail-title mt-3 max-w-4xl font-heading font-black text-slate-950">{page.h1}</h1>
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
        </Container>
      </section>
    </>
  );
}
