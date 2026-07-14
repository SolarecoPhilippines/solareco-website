import Link from "next/link";
import { getProductCategorySlug, type ProductCategory } from "@/src/data/products";
import type { VisibleProduct } from "@/src/lib/productAssets";

type ProductCategoryNavigationProps = {
  activeProduct: VisibleProduct;
  products: VisibleProduct[];
};

type CategoryNavItem = {
  category: ProductCategory;
  label: string;
  href: string;
  active: boolean;
};

const categoryOrder: ProductCategory[] = [
  "Solar Panels",
  "Lithium Batteries",
  "All-in-One Energy Storage System",
  "Electrical Protection",
  "Solar Wiring",
  "Solar Lighting",
  "Solar Products",
];

const categoryLabels: Record<ProductCategory, string> = {
  "Solar Panels": "Solar Panels",
  "Lithium Batteries": "Lithium Batteries",
  "All-in-One Energy Storage System": "All-in-One ESS",
  "Electrical Protection": "Breakers & Protection",
  "Solar Wiring": "Wires & Cables",
  "Solar Lighting": "Solar Lights",
  "Solar Products": "Tools & Accessories",
};

export function getProductCategoryLabel(category: ProductCategory) {
  return categoryLabels[category];
}

function getCategoryItems(products: VisibleProduct[], activeProduct: VisibleProduct): CategoryNavItem[] {
  const availableCategories = new Set(products.map((product) => product.category));

  return categoryOrder
    .flatMap((category) => {
      if (!availableCategories.has(category)) {
        return [];
      }

      return [{
        category,
        label: getProductCategoryLabel(category),
        href: `/products?category=${getProductCategorySlug(category)}`,
        active: category === activeProduct.category,
      }];
    });
}

function CategoryLinks({ items }: { items: CategoryNavItem[] }) {
  return (
    <nav aria-label="Product categories">
      <ul className="divide-y divide-[#DCE6F0] overflow-hidden border border-[#DCE6F0]">
        {items.map((item) => (
          <li key={item.category}>
            <Link
              href={item.href}
              aria-current={item.active ? "location" : undefined}
              className={`flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold transition duration-200 ${
                item.active ? "bg-[#0D3567] text-white" : "bg-white text-[#0D3567] hover:bg-[#0D3567] hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">&gt;</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ProductCategoryNavigation({ activeProduct, products }: ProductCategoryNavigationProps) {
  const items = getCategoryItems(products, activeProduct);

  if (items.length === 0) {
    return null;
  }

  const activeLabel = getProductCategoryLabel(activeProduct.category);

  return (
    <>
      <aside className="hidden lg:block">
        <div className="sticky top-24 border-t-4 border-[#0D3567] bg-white p-4 shadow-[0_3px_14px_rgba(13,53,103,0.05)]">
          <h2 className="px-1 font-heading text-xl font-bold text-[#0D3567]">Product Categories</h2>
          <div className="mt-4">
            <CategoryLinks items={items} />
          </div>
        </div>
      </aside>

      <details className="border border-[#DCE6F0] bg-white p-4 lg:hidden">
        <summary className="cursor-pointer list-none font-heading text-lg font-bold text-[#0D3567]">
          Browse Product Categories
          <span className="mt-1 block text-sm font-semibold text-slate-500">Current: {activeLabel}</span>
        </summary>
        <div className="mt-4">
          <CategoryLinks items={items} />
        </div>
      </details>
    </>
  );
}
