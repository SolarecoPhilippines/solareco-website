"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  getProductCategoryFromSlug,
  getProductCategorySlug,
  productCategories,
  type ProductCategory,
} from "@/src/data/products";
import type { VisibleProduct } from "@/src/lib/productAssets";
import { EmptyState } from "./EmptyState";
import { ProductCard } from "./ProductCard";

export function ProductCatalog({ products }: { products: VisibleProduct[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const categoryFromUrl = getProductCategoryFromSlug(searchParams.get("category"));
  const availableCategories = useMemo(
    () => productCategories.filter((item) => products.some((product) => product.category === item)),
    [products],
  );
  const category = categoryFromUrl && availableCategories.includes(categoryFromUrl) ? categoryFromUrl : "All";

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.summary.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.secondaryLabel?.toLowerCase().includes(query) ?? false);
      const matchesCategory = category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [category, products, search]);

  function updateCategory(nextCategory: "All" | ProductCategory) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextCategory === "All") {
      params.delete("category");
    } else {
      params.set("category", getProductCategorySlug(nextCategory));
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return (
    <div>
      <div className="editorial-panel p-5 sm:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_260px]">
        <label className="form-label">
          <span>Search products</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="field-control"
            placeholder="Search by name or category"
            type="search"
          />
        </label>
        <label className="form-label">
          <span>Category</span>
          <select
            value={category}
            onChange={(event) => updateCategory(event.target.value as "All" | ProductCategory)}
            className="field-control"
          >
            <option>All</option>
            {availableCategories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        </div>
        <div className="mt-5 hidden flex-wrap gap-2 border-t border-slate-200 pt-5 md:flex" role="group" aria-label="Quick category filters">
          {(["All", ...availableCategories] as Array<"All" | ProductCategory>).map((item) => {
            const selected = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => updateCategory(item)}
                aria-pressed={selected}
                className={`min-h-11 rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${selected ? "border-[#0D3567] bg-[#0D3567] text-white" : "border-slate-300 bg-white text-slate-600 hover:border-[#0D3567]/40 hover:text-[#0D3567]"}`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <p className="mt-5 border-l-2 border-slate-300 pl-4 text-sm text-slate-600" aria-live="polite">
        Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
        {category === "All" ? "" : ` in ${category}`}.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.slug} product={product} eager={index === 0} />
        ))}
      </div>
      {filteredProducts.length === 0 ? (
        <div className="mt-8">
          <EmptyState title="No matching products" description="No products match the current search and category filters. Try another product name or reset the category filter." />
        </div>
      ) : null}
    </div>
  );
}
