export type ProductCategory =
  | "Lithium Batteries"
  | "All-in-One Energy Storage System"
  | "Solar Panels"
  | "Electrical Protection"
  | "Solar Wiring"
  | "Solar Lighting"
  | "Solar Products";

export type ParameterStatus = "Verified" | "Estimated" | "To verify" | "Coming soon";

export type ProductReference = {
  label: string;
  url: string;
};

export type ProductParameter = {
  parameter: string;
  value: string;
  unit?: string;
  notes?: string;
  status: ParameterStatus;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  imageFolders: string[];
  secondaryLabel?: string;
  summary: string;
  description: string;
  keyDetails: string[];
  parameterTableAvailable?: boolean;
  productType?: string;
  productLine?: string;
  sourceReferences?: ProductReference[];
};

export const SAKO_ALL_IN_ONE_SOURCE_URL =
  "https://sakopower.com/sako-alpha-w-ess-1000w-all-in-one";

export const products: Product[] = [
  {
    slug: "sako",
    name: "SAKO Li-Sun Lithium Batteries",
    category: "Lithium Batteries",
    imageFolders: ["sako-batteries", "sako-battery"],
    secondaryLabel: "Energy Storage Batteries",
    summary: "Official SAKO Li-Sun lithium battery comparison for energy-storage project selection.",
    description:
      "Compare available SAKO Li-Sun lithium battery models and technical parameters for residential, commercial, and project energy-storage applications.",
    keyDetails: [
      "Product type: Lithium battery",
      "Secondary label: Energy Storage Batteries",
      "Seven priority SK battery models included",
    ],
    parameterTableAvailable: true,
    productType: "Lithium Battery",
    productLine: "Li-Sun Lithium Battery Pack",
    sourceReferences: [
      {
        label: "2026-03 SAKO Solar Catalogue 220V",
        url: "https://sakopower.com/wp-content/uploads/2026/05/2026-03-SAKO-Solar-Catalogue-220V%EF%BC%89.pdf",
      },
    ],
  },
  {
    slug: "sako-all-in-one",
    name: "SAKO Alpha-W-ESS 1000W / 2kWh",
    category: "All-in-One Energy Storage System",
    imageFolders: ["sako-all-in-one", "sako-alpha-aio"],
    summary: "Compact plug-and-play energy storage with built-in lithium battery, AC charging, and solar charging support.",
    description:
      "A compact plug-and-play energy-storage solution with a built-in inverter, lithium battery, AC charging, and solar charging support.",
    keyDetails: [
      "Product type: Energy Storage System",
      "Product family: Alpha-W-ESS",
      "Variant: 1000W / 2kWh All-in-One",
    ],
    parameterTableAvailable: true,
    productType: "Energy Storage System",
    productLine: "Alpha W ESS 1000W All-in-One",
    sourceReferences: [
      {
        label: "SAKO Alpha-W-ESS 1000W / 2kWh All-in-One",
        url: SAKO_ALL_IN_ONE_SOURCE_URL,
      },
    ],
  },
  {
    slug: "solahestia-610w",
    name: "SOLAHESTIA 610W",
    category: "Solar Panels",
    imageFolders: ["solahestia/610w"],
    summary: "High-output solar panel option for projects requiring strong generation capacity.",
    description:
      "SOLAHESTIA 610W panels are positioned for high-performance solar arrays across residential, commercial, and distributed energy projects.",
    keyDetails: [
      "610W panel class",
      "High-output panel option",
      "Contact Solareco for current mechanical and electrical data",
    ],
  },
  {
    slug: "solahestia-585w",
    name: "SOLAHESTIA 585W",
    category: "Solar Panels",
    imageFolders: ["solahestia/585w"],
    summary: "Efficient solar panel option for dependable project sizing and supply.",
    description:
      "SOLAHESTIA 585W panels provide a flexible module option for installers and customers planning reliable solar generation.",
    keyDetails: [
      "585W panel class",
      "Designed for professional solar installations",
      "Final datasheet and certificates to be uploaded",
    ],
  },
  {
    slug: "yro-breakers",
    name: "YRO Breakers",
    category: "Electrical Protection",
    imageFolders: ["yro-breakers", "yro-mccb", "yro-mcb", "yro-spd", "yro-ats"],
    summary: "Electrical protection components for safer solar power installations.",
    description:
      "YRO breakers support protection requirements in solar and electrical systems, with final ratings to be confirmed through official documents.",
    keyDetails: [
      "Electrical protection product line",
      "Contact Solareco for ratings and certifications",
      "Recommended selection support available",
    ],
  },
  {
    slug: "leader-wires",
    name: "LEADER Wires",
    category: "Solar Wiring",
    imageFolders: ["leader-wires", "leader-wire"],
    summary: "Solar wiring products for reliable installation work and system connections.",
    description:
      "LEADER wires are included in Solareco's priority catalog for installers needing dependable wiring supply for solar projects.",
    keyDetails: [
      "Solar wiring product line",
      "Contact Solareco for cable sizing and ratings",
      "Suitable for installer and project supply inquiries",
    ],
  },
  {
    slug: "solar-street-light",
    name: "Solar Street Light",
    category: "Solar Lighting",
    imageFolders: ["solar-street-light"],
    summary: "Solar street lighting products for outdoor lighting projects and public-area applications.",
    description:
      "Solar street lighting products are included for project inquiries once approved product images are added.",
    keyDetails: ["Outdoor solar lighting product", "For project and branch inquiry routing"],
  },
];

export const productCategories: ProductCategory[] = [
  "Lithium Batteries",
  "All-in-One Energy Storage System",
  "Solar Panels",
  "Electrical Protection",
  "Solar Wiring",
  "Solar Lighting",
  "Solar Products",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
