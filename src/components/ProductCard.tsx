import type { Product } from "@/src/data/products";
import { Button } from "./Button";
import { PlaceholderImage } from "./PlaceholderImage";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <PlaceholderImage label={product.name} />
      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D3567]">{product.category}</p>
        {product.secondaryLabel ? (
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {product.secondaryLabel}
          </p>
        ) : null}
        <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{product.summary}</p>
        {product.parameterTableAvailable ? (
          <p className="mt-4 w-fit rounded-full bg-[#0D3567]/10 px-3 py-1 text-xs font-semibold text-[#0D3567]">
            Technical parameter table available
          </p>
        ) : null}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button href={`/products/${product.slug}`} variant="secondary" className="w-full">
            View Details
          </Button>
          <Button href="/contact" className="w-full">
            Request Quote
          </Button>
        </div>
      </div>
    </article>
  );
}
