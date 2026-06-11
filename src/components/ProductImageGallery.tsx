"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";

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
  const thumbnailsRef = useRef<HTMLDivElement>(null);
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

  function scrollThumbnails(direction: "left" | "right") {
    thumbnailsRef.current?.scrollBy({
      left: direction === "left" ? -220 : 220,
      behavior: "smooth",
    });
  }

  if (!selectedImage) {
    return null;
  }

  return (
    <div className="mx-auto w-full max-w-[780px] rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex h-[260px] w-full items-center justify-center overflow-hidden rounded-[18px] border border-[#DCE6F0] bg-[radial-gradient(circle_at_center,#ffffff_0%,#F4F7FA_55%,#E8EEF5_100%)] shadow-[0_18px_45px_rgba(13,53,103,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] sm:h-[380px] lg:h-[460px]"
        aria-label={`Open enlarged preview for ${model} ${selectedImage.label}`}
      >
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-contain p-3 drop-shadow-[0_18px_26px_rgba(13,53,103,0.18)] sm:p-4 md:p-6"
          onError={() => hideImage(selectedImage.src)}
        />
      </button>

      {visibleImages.length > 1 ? (
        <div className="mt-4 flex items-center gap-3" aria-label={`${model} image thumbnails`}>
          <button
            type="button"
            onClick={() => scrollThumbnails("left")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE6F0] bg-white text-sm font-bold text-[#0D3567] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0D3567] hover:bg-[#0D3567] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
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
                      ? "border-[#0D3567] shadow-[0_10px_24px_rgba(13,53,103,0.16)]"
                      : "border-[#DCE6F0] hover:scale-[1.03] hover:border-[#0D3567]/50"
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
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE6F0] bg-white text-sm font-bold text-[#0D3567] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0D3567] hover:bg-[#0D3567] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
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
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-3 py-5 sm:px-4 sm:py-8"
        >
          <div className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-white p-3 shadow-2xl sm:p-4">
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
