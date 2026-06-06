import type { Metadata } from "next";
import { ProductCatalog } from "@/src/components/ProductCatalog";
import { SectionTitle } from "@/src/components/SectionTitle";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Solareco priority solar products and electrical components.",
};

export default function ProductsPage() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Product catalog"
          title="Priority solar products"
          description="Search and filter the initial catalog. Official product photos, final specifications, and approved documents will be added later."
        />
        <div className="mt-10">
          <ProductCatalog />
        </div>
      </div>
    </section>
  );
}

