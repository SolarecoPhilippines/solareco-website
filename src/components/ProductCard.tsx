"use client";

import Image from "next/image";
import { useState } from "react";
import type { VisibleProduct } from "@/src/lib/productAssets";
import { Button } from "./Button";

type ProductCardProps = {
  product: VisibleProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return null;
  }

  return (
    <article className="flex h-full min-h-[620px] flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1.5 hover:border-[#0D3567]/25 hover:shadow-xl hover:shadow-slate-950/10 lg:p-7">
      <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-[18px] border border-[#DCE6F0] bg-[radial-gradient(circle_at_center,#ffffff_0%,#F4F7FA_55%,#E8EEF5_100%)] p-8 shadow-[0_18px_45px_rgba(13,53,103,0.10)] lg:min-h-[320px]">
        <Image
          src={product.primaryImage.src}
          alt={product.primaryImage.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
          className="object-contain p-6 drop-shadow-[0_18px_26px_rgba(13,53,103,0.18)]"
          onError={() => {
            console.warn(`Hiding product card because image failed to load: ${product.slug}`);
            setImageFailed(true);
          }}
        />
      </div>
      <div className="mt-7 flex flex-1 flex-col">
        <p className="w-fit rounded-full bg-[#0D3567]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#0D3567]">
          {product.category}
        </p>
        {product.secondaryLabel ? (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {product.secondaryLabel}
          </p>
        ) : null}
        <h3 className="mt-4 font-heading text-2xl font-bold leading-tight text-slate-950">{product.name}</h3>
        <p className="mt-4 flex-1 text-base leading-7 text-slate-600">{product.summary}</p>
        {product.parameterTableAvailable ? (
          <p className="mt-5 w-fit rounded-full bg-[#0D3567]/10 px-3 py-1 text-xs font-semibold text-[#0D3567]">
            Technical parameter table available
          </p>
        ) : null}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
