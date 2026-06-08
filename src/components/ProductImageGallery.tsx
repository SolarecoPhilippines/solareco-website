"use client";

import { useEffect, useId, useState } from "react";

export type ProductGalleryImage = {
  label: string;
  alt: string;
  src?: string;
};

type ProductImageGalleryProps = {
  model: string;
  images: ProductGalleryImage[];
};

function PlaceholderPanel({ model, label, large = false }: { model: string; label: string; large?: boolean }) {
  return (
    <div
      className={`flex h-full min-h-full flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-5 text-center ${
        large ? "py-16" : "py-6"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D3567]">{model}</p>
      <p className={`${large ? "mt-3 text-xl" : "mt-2 text-sm"} font-heading font-bold text-slate-950`}>{label}</p>
      <p className="mt-2 text-sm text-slate-500">Image coming soon</p>
    </div>
  );
}

export function ProductImageGallery({ model, images }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const selectedImage = images[selectedIndex] ?? images[0];

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

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block aspect-[4/3] w-full rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
        aria-label={`Open enlarged preview for ${model} ${selectedImage.label}`}
      >
        <PlaceholderPanel model={model} label={selectedImage.label} large />
      </button>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2" aria-label={`${model} image thumbnails`}>
        {images.map((image, index) => {
          const selected = index === selectedIndex;

          return (
            <button
              key={image.label}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`min-w-[132px] rounded-md border p-2 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
                selected ? "border-[#0D3567] bg-[#0D3567]/10" : "border-slate-200 bg-white hover:border-[#0D3567]/40"
              }`}
              aria-pressed={selected}
              aria-label={`Select ${image.label} placeholder for ${model}`}
            >
              <div className="aspect-[4/3] rounded-sm">
                <PlaceholderPanel model={model} label={image.label} />
              </div>
              <span className="mt-2 block text-xs font-semibold text-slate-700">{image.label}</span>
              {selected ? <span className="mt-1 block text-xs font-semibold text-[#0D3567]">Selected</span> : null}
            </button>
          );
        })}
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 px-4 py-8"
        >
          <div className="w-full max-w-5xl rounded-lg bg-white p-4 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="font-heading text-xl font-bold text-slate-950">
                  {model} - {selectedImage.label}
                </h2>
                <p className="mt-1 text-sm text-slate-500">Image coming soon</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567]"
                aria-label="Close enlarged image preview"
              >
                Close
              </button>
            </div>
            <div className="mt-4 aspect-[16/10] rounded-md">
              <PlaceholderPanel model={model} label={selectedImage.label} large />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
