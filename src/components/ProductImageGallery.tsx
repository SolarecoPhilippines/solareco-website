"use client";

import Image from "next/image";
import { useId, useMemo, useRef, useState } from "react";
import { useAccessibleDialog } from "@/src/hooks/useAccessibleDialog";

export type ProductGalleryImage = {
  label: string;
  alt: string;
  src: string;
};

type ProductImageGalleryProps = {
  model: string;
  images: ProductGalleryImage[];
  eager?: boolean;
};

export function ProductImageGallery({ model, images, eager = false }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const dialogRef = useAccessibleDialog(open, () => setOpen(false));
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

  function hideImage(src: string) {
    console.warn(`Hiding product image because it failed to load: ${src}`);
    setFailedImages((current) => new Set(current).add(src));
  }

  function scrollThumbnails(direction: "left" | "right") {
    thumbnailsRef.current?.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  if (!selectedImage) {
    return (
      <div className="flex min-h-[320px] w-full items-center justify-center rounded-lg border border-[#DCE6F0] bg-[#F4F7FA] p-8 text-center" role="img" aria-label={`${model} images unavailable`}>
        <div>
          <p className="font-heading text-xl font-bold text-[#0D3567]">Solareco Philippines</p>
          <p className="mt-2 text-sm text-slate-600">Product images are temporarily unavailable.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto min-w-0 w-full max-w-[780px] border-t-4 border-[#0D3567] bg-white p-3 sm:p-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex h-[260px] w-full items-center justify-center overflow-hidden border border-[#DCE6F0] bg-[radial-gradient(circle_at_center,#ffffff_0%,#F4F7FA_55%,#E8EEF5_100%)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] sm:h-[380px] lg:h-[460px]"
        aria-label={`Open enlarged preview for ${model} ${selectedImage.label}`}
      >
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="scale-[1.18] object-contain p-1 drop-shadow-[0_18px_26px_rgba(13,53,103,0.18)] sm:scale-100 sm:p-4 md:p-6"
          onError={() => hideImage(selectedImage.src)}
        />
      </button>

      {visibleImages.length > 1 ? (
        <div className="mt-4 flex items-center gap-3" aria-label={`${model} image thumbnails`}>
          <button
            type="button"
            onClick={() => scrollThumbnails("left")}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#DCE6F0] bg-white text-sm font-bold text-[#0D3567] transition hover:border-[#0D3567] hover:bg-[#0D3567] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
            aria-label="Scroll thumbnails left"
          >
            &lt;
          </button>
          <div
            ref={thumbnailsRef}
            className="flex gap-3 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visibleImages.map((image, index) => {
              const selected = image.src === selectedImage.src;

              return (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`group relative h-[60px] w-[60px] shrink-0 cursor-pointer overflow-hidden rounded-md border bg-[radial-gradient(circle_at_center,#ffffff_0%,#F6F8FB_58%,#EAF0F6_100%)] transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] sm:h-20 sm:w-20 ${
                    selected
                      ? "border-[#0D3567] ring-1 ring-[#0D3567]"
                      : "border-[#DCE6F0] hover:border-[#0D3567]/50"
                  }`}
                  aria-pressed={selected}
                  aria-label={`Select ${image.label} for ${model}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 80px, 60px"
                    className="object-contain p-1.5 drop-shadow-[0_10px_14px_rgba(13,53,103,0.14)] transition duration-200 group-hover:scale-[1.03]"
                    onError={() => hideImage(image.src)}
                  />
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => scrollThumbnails("right")}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#DCE6F0] bg-white text-sm font-bold text-[#0D3567] transition hover:border-[#0D3567] hover:bg-[#0D3567] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
            aria-label="Scroll thumbnails right"
          >
            &gt;
          </button>
        </div>
      ) : null}

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setOpen(false);
            }
          }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-3 py-5 sm:px-4 sm:py-8"
        >
          <div ref={dialogRef} tabIndex={-1} className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white p-3 shadow-2xl outline-none sm:p-4">
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-heading text-base font-bold text-slate-950 sm:text-xl">
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
            <div className="relative mt-4 aspect-square overflow-hidden rounded-[18px] border border-[#DCE6F0] bg-[radial-gradient(circle_at_center,#ffffff_0%,#F4F7FA_55%,#E8EEF5_100%)] shadow-[0_18px_45px_rgba(13,53,103,0.10)] sm:aspect-[16/10]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="90vw"
                className="object-contain p-4 drop-shadow-[0_18px_26px_rgba(13,53,103,0.18)] md:p-6"
                onError={() => hideImage(selectedImage.src)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
