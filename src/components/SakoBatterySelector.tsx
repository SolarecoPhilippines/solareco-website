"use client";

import { useMemo, useState } from "react";
import { FACEBOOK_PAGE_URL } from "@/src/lib/constants";
import type { SakoBatteryModel } from "@/src/data/sakoTechnicalParameters";
import { Button } from "./Button";
import { ProductImageGallery, type ProductGalleryImage } from "./ProductImageGallery";

type SakoBatterySelectorProps = {
  models: SakoBatteryModel[];
};

const imageTypes = ["Front View", "Side View", "Back View", "Ports and Connections", "Display Panel", "Product Dimensions"];

function buildGalleryImages(model: SakoBatteryModel): ProductGalleryImage[] {
  return imageTypes.map((label) => {
    const fileName = label.toLowerCase().replace(/\s+and\s+/g, "-and-").replace(/\s+/g, "-");

    return {
      label,
      src: `/images/products/sako-batteries/${model.slug}/${fileName}.webp`,
      alt: `${model.model} ${label}`,
    };
  });
}

export function SakoBatterySelector({ models }: SakoBatterySelectorProps) {
  const [selectedModelName, setSelectedModelName] = useState("SK-25.6V 100Ah");
  const selectedModel = models.find((model) => model.model === selectedModelName) ?? models[0];
  const selectedVoltage = selectedModel.voltage;
  const selectedCapacity = selectedModel.capacity;

  const voltageOptions = useMemo(() => Array.from(new Set(models.map((model) => model.voltage))), [models]);
  const capacityOptions = useMemo(
    () => models.filter((model) => model.voltage === selectedVoltage).map((model) => model.capacity),
    [models, selectedVoltage],
  );
  const galleryImages = useMemo(() => buildGalleryImages(selectedModel), [selectedModel]);

  function selectVoltage(voltage: SakoBatteryModel["voltage"]) {
    const nextModel =
      models.find((model) => model.voltage === voltage && model.capacity === selectedCapacity) ??
      models.find((model) => model.voltage === voltage);

    if (nextModel) {
      setSelectedModelName(nextModel.model);
    }
  }

  function selectCapacity(capacity: SakoBatteryModel["capacity"]) {
    const nextModel = models.find((model) => model.voltage === selectedVoltage && model.capacity === capacity);

    if (nextModel) {
      setSelectedModelName(nextModel.model);
    }
  }

  return (
    <div className="mt-8 space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <ProductImageGallery key={selectedModel.model} model={selectedModel.model} images={galleryImages} />

        <div className="space-y-5">
          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="font-heading text-xl font-bold text-slate-950">Select Battery Model</h3>

            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Voltage</p>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Select battery voltage">
                {voltageOptions.map((voltage) => {
                  const selected = voltage === selectedVoltage;

                  return (
                    <button
                      key={voltage}
                      type="button"
                      onClick={() => selectVoltage(voltage)}
                      className={`rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
                        selected
                          ? "border-[#0D3567] bg-[#0D3567] text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-[#0D3567]/45"
                      }`}
                      aria-pressed={selected}
                      aria-label={`Select ${voltage} SAKO battery voltage`}
                    >
                      {voltage}
                      {selected ? <span className="sr-only"> selected</span> : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Capacity</p>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Select battery capacity">
                {capacityOptions.map((capacity) => {
                  const selected = capacity === selectedCapacity;

                  return (
                    <button
                      key={capacity}
                      type="button"
                      onClick={() => selectCapacity(capacity)}
                      className={`rounded-md border px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
                        selected
                          ? "border-[#0D3567] bg-[#0D3567] text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-[#0D3567]/45"
                      }`}
                      aria-pressed={selected}
                      aria-label={`Select ${capacity} SAKO battery capacity`}
                    >
                      {capacity}
                      {selected ? <span className="sr-only"> selected</span> : null}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0D3567]">Selected model</p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-slate-950">{selectedModel.model}</h3>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-slate-500">Product family</dt>
                <dd className="mt-1 text-slate-900">{selectedModel.productFamily}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Battery type</dt>
                <dd className="mt-1 text-slate-900">{selectedModel.batteryType}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Nominal voltage</dt>
                <dd className="mt-1 text-slate-900">{selectedModel.voltage}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Capacity</dt>
                <dd className="mt-1 text-slate-900">{selectedModel.capacity}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Total energy</dt>
                <dd className="mt-1 text-slate-900">{selectedModel.totalEnergy}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-500">Usable energy at 90% DOD</dt>
                <dd className="mt-1 text-slate-900">{selectedModel.usableEnergy}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="font-semibold text-slate-500">Mounting type</dt>
                <dd className="mt-1 text-slate-900">{selectedModel.mountingType}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request a Quote</Button>
              <Button href={FACEBOOK_PAGE_URL} variant="secondary">
                Message on Facebook
              </Button>
            </div>
          </section>
        </div>
      </div>

      <section>
        <h3 className="font-heading text-xl font-bold text-slate-950">Quick Model Selection</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((model) => {
            const selected = model.model === selectedModel.model;

            return (
              <button
                key={model.model}
                type="button"
                onClick={() => setSelectedModelName(model.model)}
                className={`rounded-lg border p-4 text-left transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D3567] ${
                  selected ? "border-[#0D3567] bg-[#0D3567]/10" : "border-slate-200 bg-white hover:border-[#0D3567]/45"
                }`}
                aria-pressed={selected}
                aria-label={`Select ${model.model}`}
              >
                <span className="block font-heading text-base font-bold text-slate-950">{model.model}</span>
                <span className="mt-2 block text-sm text-slate-600">Capacity: {model.capacity}</span>
                <span className="mt-1 block text-sm text-slate-600">Total energy: {model.totalEnergy}</span>
                <span className="mt-1 block text-sm text-slate-600">{model.mountingType}</span>
                {selected ? <span className="mt-3 block text-sm font-bold text-[#0D3567]">Selected</span> : null}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
