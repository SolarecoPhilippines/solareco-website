"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useState } from "react";

export type ProductGalleryImage = {
  label: string;
  alt: string;
  src: string;
};

type ProductImageGalleryProps = {
  model: string;
  images: ProductGalleryImage[];
};

export function ProductImageGallery({ model, images }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const titleId = useId();
  const visibleImages = useMemo(
    () => {
      const seen = new Set<string>();

      return images.filter((image) => {
        if (failedImages.has(image.src) || seen.has(image.src)) {
          return false;
        }

        seen.add(image.src);
        return true;
      });
    },
    [failedImages, images],
  );
  const clampedSelectedIndex = Math.min(selectedIndex, Math.max(visibleImages.length - 1, 0));
  const selectedImage = visibleImages[clampedSelectedIndex];

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function hideImage(src: string) {
    console.warn(`Hiding product image because it failed to load: ${src}`);
    setFailedImages((current) => new Set(current).add(src));
  }

  if (!selectedImage) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[780px] rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex h-[320px] w-full items-center justify-center overflow-hidden rounded-md bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] sm:h-[380px] lg:h-[460px]"
        aria-label={`Open enlarged preview for ${model} ${selectedImage.label}`}
      >
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-contain p-4 drop-shadow-[0_18px_24px_rgba(15,23,42,0.12)] md:p-6"
          onError={() => hideImage(selectedImage.src)}
        />
      </button>

      {visibleImages.length > 1 ? (
      <div className="mt-4 flex gap-3 overflow-x-auto pb-2" aria-label={`${model} image thumbnails`}>
        {visibleImages.map((image, index) => {
          const selected = image.src === selectedImage.src;

          return (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`w-24 shrink-0 rounded-md border p-2 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
                selected ? "border-[#0D3567] bg-[#0D3567]/10" : "border-slate-200 bg-white hover:border-[#0D3567]/40"
              }`}
              aria-pressed={selected}
              aria-label={`Select ${image.label} for ${model}`}
            >
              <span className="relative block h-20 overflow-hidden rounded-sm bg-white">
                <Image src={image.src} alt={image.alt} fill sizes="90px" className="object-contain p-1" onError={() => hideImage(image.src)} />
              </span>
              <span className="mt-2 block text-xs font-semibold text-slate-700">{image.label}</span>
            </button>
          );
        })}
      </div>
      ) : null}

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-8"
        >
          <div className="w-full max-w-5xl rounded-lg bg-white p-4 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-heading text-xl font-bold text-slate-950">
                {model} - {selectedImage.label}
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                aria-label="Close enlarged image preview"
              >
                Close
              </button>
            </div>
            <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-md bg-white">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className="object-contain p-4 md:p-6"
                onError={() => hideImage(selectedImage.src)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
