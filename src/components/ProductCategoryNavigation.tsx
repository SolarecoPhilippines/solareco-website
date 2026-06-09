import Link from "next/link";
import type { ProductCategory } from "@/src/data/products";
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
  subcategories?: string[];
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

const lithiumSubcategories = ["25.6V Batteries", "51.2V Batteries", "Wall Mounted Batteries", "Floor Stand Batteries"];

export function getProductCategoryLabel(category: ProductCategory) {
  return categoryLabels[category];
}

function getCategoryItems(products: VisibleProduct[], activeProduct: VisibleProduct): CategoryNavItem[] {
  const firstProductByCategory = new Map<ProductCategory, VisibleProduct>();

  products.forEach((product) => {
    if (!firstProductByCategory.has(product.category)) {
      firstProductByCategory.set(product.category, product);
    }
  });

  return categoryOrder
    .flatMap((category) => {
      const product = firstProductByCategory.get(category);

      if (!product) {
        return [];
      }

      return [{
        category,
        label: getProductCategoryLabel(category),
        href: `/products/${product.slug}`,
        active: category === activeProduct.category,
        subcategories: category === "Lithium Batteries" && activeProduct.category === "Lithium Batteries" ? lithiumSubcategories : undefined,
      }];
    });
}

function CategoryLinks({ items }: { items: CategoryNavItem[] }) {
  return (
    <nav aria-label="Product categories">
      <ul className="divide-y divide-[#DCE6F0] overflow-hidden rounded-xl">
        {items.map((item) => (
          <li key={item.category}>
            <Link
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold transition duration-200 ${
                item.active ? "bg-[#0D3567] text-white" : "bg-white text-[#0D3567] hover:bg-[#0D3567] hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              {item.subcategories ? <span aria-hidden="true">&gt;</span> : null}
            </Link>
            {item.subcategories ? (
              <ul className="space-y-1 bg-[#F4F7FA] px-4 py-3">
                {item.subcategories.map((subcategory) => (
                  <li key={subcategory} className="text-xs font-semibold text-slate-600">
                    {subcategory}
                  </li>
                ))}
              </ul>
            ) : null}
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
        <div className="sticky top-28 rounded-2xl border border-[#DCE6F0] bg-white p-4 shadow-[0_18px_45px_rgba(13,53,103,0.08)]">
          <h2 className="px-1 font-heading text-xl font-bold text-[#0D3567]">Product Categories</h2>
          <div className="mt-4">
            <CategoryLinks items={items} />
          </div>
        </div>
      </aside>

      <details className="rounded-2xl border border-[#DCE6F0] bg-white p-4 shadow-[0_14px_32px_rgba(13,53,103,0.08)] lg:hidden">
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
