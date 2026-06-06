import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/src/components/Button";
import { DownloadCard } from "@/src/components/DownloadCard";
import { PlaceholderImage } from "@/src/components/PlaceholderImage";
import { SectionTitle } from "@/src/components/SectionTitle";
import { getProductBySlug, products } from "@/src/data/products";
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

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <PlaceholderImage label={product.name} />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0D3567]">{product.category}</p>
            <h1 className="mt-3 font-heading text-4xl font-black text-slate-950 sm:text-5xl">{product.name}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{product.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request Quote</Button>
              <Button href={FACEBOOK_PAGE_URL} variant="secondary">
                Facebook
              </Button>
            </div>
          </div>
        </div>

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

