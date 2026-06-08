import type { Metadata } from "next";
import { ProductCatalog } from "@/src/components/ProductCatalog";
import { SectionTitle } from "@/src/components/SectionTitle";
import { getVisibleProducts } from "@/src/lib/productAssets";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse Solareco priority solar products and electrical components.",
};

export default function ProductsPage() {
  const visibleProducts = getVisibleProducts();

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Product catalog"
          title="Priority solar products"
          description="Search and filter public-ready products with uploaded product images."
        />
        <div className="mt-10">
          <ProductCatalog products={visibleProducts} />
        </div>
      </div>
    </section>
  );
}
