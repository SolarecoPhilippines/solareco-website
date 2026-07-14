import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/src/components/Container";
import { PageHero } from "@/src/components/PageHero";
import { ProductCatalog } from "@/src/components/ProductCatalog";
import { getVisibleProducts } from "@/src/lib/productAssets";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Solareco priority solar products and electrical components.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  const visibleProducts = getVisibleProducts();

  return (
    <>
      <PageHero eyebrow="Product catalog" title="Solar and electrical products for project requirements" description="Browse public-ready product lines, compare available technical references, and contact Solareco for current availability and quotation support." />
      <section className="section-shell bg-slate-50">
        <Container>
          <Suspense fallback={<div className="rounded-lg border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">Loading product filters...</div>}>
            <ProductCatalog products={visibleProducts} />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
