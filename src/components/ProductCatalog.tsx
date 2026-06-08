"use client";

import { useMemo, useState } from "react";
import { productCategories } from "@/src/data/products";
import type { VisibleProduct } from "@/src/lib/productAssets";
import { ProductCard } from "./ProductCard";

export function ProductCatalog({ products }: { products: VisibleProduct[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

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

  return (
    <div>
      <div className="grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_260px]">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Search products
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20"
            placeholder="Search by name or category"
            type="search"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="min-h-11 rounded-md border border-slate-300 px-3 text-base font-normal outline-none transition focus:border-[#0D3567] focus:ring-2 focus:ring-[#0D3567]/20"
          >
            <option>All</option>
            {productCategories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 ? (
        <p className="mt-8 rounded-md border border-slate-200 bg-white p-5 text-center text-slate-600">
          No products match the current search.
        </p>
      ) : null}
    </div>
  );
}
