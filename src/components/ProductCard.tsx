"use client";

import Image from "next/image";
import { useState } from "react";
import type { VisibleProduct } from "@/src/lib/productAssets";
import { Button } from "./Button";

type ProductCardProps = {
  product: VisibleProduct;
  showQuoteButton?: boolean;
  featured?: boolean;
};

export function ProductCard({ product, showQuoteButton = true, featured = false }: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className={`group h-full overflow-hidden border border-slate-200 bg-white transition duration-200 hover:border-[#0D3567]/40 ${featured ? "lg:grid lg:grid-cols-[1.08fr_0.92fr]" : "flex flex-col"}`}>
      <div className={`relative flex items-center justify-center overflow-hidden bg-slate-50 p-7 ${featured ? "h-[280px] border-b border-slate-200 sm:h-[340px] lg:h-full lg:min-h-[430px] lg:border-b-0 lg:border-r" : "h-[230px] border-b border-slate-200 sm:h-[260px]"}`}>
        {imageFailed ? (
          <div className="flex max-w-xs flex-col items-center text-center" role="img" aria-label={`${product.name} image unavailable`}>
            <p className="border-b-2 border-[#2E7FC1] pb-3 font-heading text-lg font-bold text-[#0D3567]">Solareco Philippines</p>
            <p className="mt-2 text-sm text-slate-600">Product image temporarily unavailable</p>
          </div>
        ) : (
          <Image
            src={product.primaryImage.src}
            alt={product.primaryImage.alt}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-contain p-6 drop-shadow-[0_14px_22px_rgba(13,53,103,0.14)] transition duration-300 group-hover:scale-[1.025]"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-5 sm:p-6"}`}>
        <p className="w-fit border-l-2 border-[#2E7FC1] pl-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#0D3567]">
          {product.category}
        </p>
        {product.secondaryLabel ? (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {product.secondaryLabel}
          </p>
        ) : null}
        <h3 className={`mt-3 font-heading font-bold leading-tight text-slate-950 ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>{product.name}</h3>
        <p className="mt-3 flex-1 text-base leading-7 text-slate-600">{product.summary}</p>
        {product.parameterTableAvailable ? (
          <p className="mt-5 w-fit border-b border-[#0D3567]/30 pb-1 text-xs font-semibold text-[#0D3567]">
            Technical parameter table available
          </p>
        ) : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={`/products/${product.slug}`} variant="secondary" className="w-full">
            View Details
          </Button>
          {showQuoteButton ? (
            <Button href="/contact" className="w-full">
              Request Quote
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
