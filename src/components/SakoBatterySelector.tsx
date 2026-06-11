"use client";

import { useMemo, useState } from "react";
import type { SakoBatteryModel } from "@/src/data/sakoTechnicalParameters";
import { ProductImageGallery, type ProductGalleryImage } from "./ProductImageGallery";

type SakoBatterySelectorProps = {
  models: SakoBatteryModel[];
  imagesByModel: Record<string, ProductGalleryImage[]>;
};

const wheeledModels = ["51.2V 200Ah", "51.2V 300Ah", "51.2V 600Ah", "25.6V 300Ah"];

export function SakoBatterySelector({ models, imagesByModel }: SakoBatterySelectorProps) {
  const visibleModels = useMemo(
    () => models.filter((model) => (imagesByModel[model.slug]?.length ?? 0) > 0),
    [imagesByModel, models],
  );
  const [selectedModelName, setSelectedModelName] = useState(visibleModels[0]?.model ?? "");
  const selectedModel = visibleModels.find((model) => model.model === selectedModelName) ?? visibleModels[0];
  const selectedVoltage = selectedModel?.voltage;
  const selectedCapacity = selectedModel?.capacity;

  const voltageOptions = useMemo(() => Array.from(new Set(visibleModels.map((model) => model.voltage))), [visibleModels]);
  const capacityOptions = useMemo(
    () => (selectedVoltage ? visibleModels.filter((model) => model.voltage === selectedVoltage).map((model) => model.capacity) : []),
    [visibleModels, selectedVoltage],
  );
  const galleryImages = selectedModel ? (imagesByModel[selectedModel.slug] ?? []) : [];

  if (!selectedModel || !selectedVoltage || !selectedCapacity) {
    return null;
  }

  function selectVoltage(voltage: SakoBatteryModel["voltage"]) {
    const nextModel =
      visibleModels.find((model) => model.voltage === voltage && model.capacity === selectedCapacity) ??
      visibleModels.find((model) => model.voltage === voltage);

    if (nextModel) {
      setSelectedModelName(nextModel.model);
    }
  }

  function selectCapacity(capacity: SakoBatteryModel["capacity"]) {
    const nextModel = visibleModels.find((model) => model.voltage === selectedVoltage && model.capacity === capacity);

    if (nextModel) {
      setSelectedModelName(nextModel.model);
    }
  }

  return (
    <div className="mt-8 space-y-8">
      <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-8">
        <ProductImageGallery key={selectedModel.model} model={selectedModel.model} images={galleryImages} />

        <div className="space-y-5">
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0D3567]">Model selector</p>
            <h3 className="mt-2 font-heading text-xl font-bold text-slate-950 sm:text-2xl">Choose a SAKO Li-Sun Battery</h3>

            <div className="mt-5">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Nominal voltage</p>
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

          <section className="rounded-lg border border-[#DCE6F0] bg-[#F4F7FA] p-4 shadow-sm sm:p-6">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0D3567]">Mounting note</p>
            <h3 className="mt-2 font-heading text-xl font-bold text-slate-950">Models with integrated wheels</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {wheeledModels.map((model) => (
                <span
                  key={model}
                  className="rounded-full border border-[#0D3567]/15 bg-white px-3 py-1.5 text-sm font-semibold text-[#0D3567] shadow-sm"
                >
                  {model}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-700">All other models are mounted.</p>
          </section>

          <section className="rounded-lg border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0D3567]">Selected model</p>
            <h3 className="mt-2 font-heading text-xl font-bold text-slate-950 sm:text-2xl">{selectedModel.model}</h3>
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
          </section>
        </div>
      </div>

      <section>
        <h3 className="font-heading text-xl font-bold text-slate-950">Available Models</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleModels.map((model) => {
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
