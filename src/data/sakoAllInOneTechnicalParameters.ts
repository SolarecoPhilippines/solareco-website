import type { TechnicalParameterTable } from "@/src/data/sakoTechnicalParameters";

export const SAKO_ALL_IN_ONE_SOURCE_LABEL = "2026-03 SAKO Solar Catalogue 220V";
export const SAKO_ALL_IN_ONE_PRINTED_PAGES = "43–44";
export const SAKO_ALL_IN_ONE_PRODUCT_URL = "https://sakopower.com/sako-alpha-w-ess-1000w-all-in-one";

export const sakoAllInOneTechnicalTable: TechnicalParameterTable = {
  title: "TECHNICAL PARAMETER",
  caption: "SAKO Alpha-W-ESS 1000W / 2kWh All-in-One technical parameters",
  sourceLabel: SAKO_ALL_IN_ONE_SOURCE_LABEL,
  printedPages: SAKO_ALL_IN_ONE_PRINTED_PAGES,
  officialCatalogueUrl: SAKO_ALL_IN_ONE_PRODUCT_URL,
  columns: ["ALPHA 1000W / 2kWh"],
  rows: [
    { label: "Product Name", values: ["SAKO Alpha-W-ESS 1000W / 2kWh All-in-One"] },
    { label: "Category", values: ["All-in-One Energy Storage System"] },
    { label: "Product Family", values: ["Alpha-W-ESS"] },
    { label: "Rated AC Output Power", values: ["1000W"] },
    { label: "Output Voltage Waveform", values: ["Pure Sine Wave"] },
    { label: "Output Voltage", values: ["185–230Vac 50Hz"] },
    { label: "Low DC Warning Point", values: ["≤19%"] },
    { label: "Low DC Cut-off Voltage", values: ["5.8Vdc"] },
    { label: "Low DC Warning Return Voltage", values: [">20%"] },
    { label: "Charging Power (Utility and solar together)", values: ["1000W Max."] },
    { label: "Bulk Charging Voltage", values: ["7.2Vdc"] },
    { label: "Float Charging Voltage", values: ["7.0Vdc"] },
    { label: "Nominal AC Input Voltage", values: ["230Vac"] },
    { label: "Low Loss Voltage", values: ["90Vac ± 7"] },
    { label: "Low Loss Return Voltage", values: ["100Vac ± 7"] },
    { label: "High Loss Voltage", values: ["280Vac ± 7"] },
    { label: "High Loss Return Voltage", values: ["270Vac ± 7"] },
    { label: "Max. AC Input Voltage", values: ["300Vac"] },
    { label: "Nominal Input Frequency", values: ["45–65Hz"] },
    { label: "AC Charging Power", values: ["1000W Max."] },
    { label: "Nominal PV Voltage", values: ["38Vdc"] },
    { label: "PV Array MPPT Voltage Range", values: ["15Vdc–70Vdc"] },
    { label: "Max. PV Array Open Circuit Voltage", values: ["80Vdc"] },
    { label: "Solar Charging Power", values: ["550W Max."] },
    { label: "Battery Capacity", values: ["2009.6Wh"] },
    { label: "Nominal Battery Voltage", values: ["6.4Vdc"] },
    { label: "Typical Battery Capacity", values: ["314Ah"] },
    { label: "Max. Charge Current", values: ["220A"] },
    { label: "Max. Discharge Current", values: ["220A"] },
    { label: "Battery Operation Voltage Range", values: ["5.8Vdc–7.2Vdc"] },
    { label: "Battery Operation Temperature", values: ["-10°C–+50°C"] },
    { label: "DC Output Power", values: ["DC12V 60W Max."] },
    {
      label: "DC Output Socket",
      values: ["1 pc 5V1A USB charger, 1 pc 5V1A Type-C charger, 2 pcs 12V2.5A DC Power JACK 5.5 × 2.1mm"],
    },
    { label: "Display Function", values: ["LCD display"] },
    {
      label: "Protection",
      values: [
        "Overcharge protection, Overdischarge protection, Overcurrent protection, Short-circuit protection, Overtemperature protection",
      ],
    },
    { label: "Noise", values: ["<60dB at 1 meter"] },
    { label: "Working Temperature", values: ["-10°C–+50°C"] },
    { label: "Humidity", values: ["5–95% no condensation"] },
    { label: "Sea Level", values: ["≤2000m"] },
    { label: "Product Size", values: ["L278 × W243 × H330mm"] },
    { label: "Package Size", values: ["L345 × W310 × H430mm"] },
    { label: "Net Weight", values: ["19.5kg"] },
    { label: "Gross Weight", values: ["21kg"] },
  ],
};

export const sakoAllInOneGalleryImages = [
  "Front View",
  "Side View",
  "Back View",
  "Ports and Connections",
  "Display Panel",
  "Product Dimensions",
].map((label) => ({
  label,
  alt: `SAKO Alpha-W-ESS 1000W / 2kWh All-in-One ${label}`,
  src: `/images/products/sako-all-in-one/alpha-w-ess-1000w-2kwh/${label
    .toLowerCase()
    .replace(/\s+and\s+/g, "-and-")
    .replace(/\s+/g, "-")}.webp`,
}));
