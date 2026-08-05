export type ProductCategory =
  | "Lithium Batteries"
  | "All-in-One Energy Storage System"
  | "Off-Grid Solar Inverters"
  | "Hybrid Single-Phase Inverters"
  | "Solar Panels"
  | "Electrical Protection"
  | "Solar Wiring"
  | "Solar Lighting"
  | "Solar Products";

export type ParameterStatus = "Verified" | "Estimated" | "To verify";

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
  published: boolean;
  imageFolders: string[];
  seoTitle?: string;
  seoDescription?: string;
  primaryImage?: string;
  featured?: boolean;
  imageLabels?: Record<string, string>;
  secondaryLabel?: string;
  summary: string;
  description: string;
  features?: string[];
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
    published: true,
    imageFolders: ["sako-batteries", "sako-battery"],
    secondaryLabel: "Energy Storage Batteries",
    summary: "Official SAKO Li-Sun lithium battery comparison for energy-storage project selection.",
    description: "",
    features: [
      "Verified SK models use LiFePO4 battery technology.",
      "Verified SK mounting configurations vary by model and are listed in the selector.",
      "Technical values for verified SK models are available in the official catalogue comparison table.",
      "SAKO Li-Sun 51.2V 320Ah and SAKO Li-Sun 51.2V 640Ah are included as selectable gallery models.",
      "Technical values that are not covered by the verified source table are intentionally omitted.",
      "Request the latest approved datasheet before product selection or quotation.",
    ],
    keyDetails: [
      "Product type: Lithium battery",
      "Secondary label: Energy Storage Batteries",
      "Nine selectable Li-Sun battery models included",
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
    slug: "alpha-ess-3kw",
    name: "Alpha ESS 3kW",
    category: "All-in-One Energy Storage System",
    published: true,
    imageFolders: ["alpha-ess/3kw"],
    primaryImage: "alpha-ess-3kw.svg",
    imageLabels: {
      "alpha-ess-3kw.svg": "Primary Product View",
      "view-02": "Gallery View 2",
      "view-03": "Gallery View 3",
      "view-04": "Gallery View 4",
    },
    summary: "Alpha ESS all-in-one energy storage product for product-selection and quotation inquiries.",
    description:
      "Alpha ESS 3kW is available for product inquiries through Solareco. Request the latest approved technical documentation before system selection.",
    keyDetails: [
      "Manufacturer: Alpha ESS",
      "Model: Alpha ESS 3kW",
      "Product type: All-in-One Energy Storage System",
      "Contact Solareco for verified technical documentation",
    ],
    productType: "All-in-One Energy Storage System",
  },
  {
    slug: "alpha-ess-11kw",
    name: "Alpha ESS 11kW",
    category: "All-in-One Energy Storage System",
    published: true,
    imageFolders: ["alpha-ess/11kw"],
    primaryImage: "alpha-ess-11kw.svg",
    imageLabels: {
      "alpha-ess-11kw.svg": "Primary Product View",
      "view-02": "Gallery View 2",
      "view-03": "Gallery View 3",
    },
    summary: "Alpha ESS all-in-one energy storage product for product-selection and quotation inquiries.",
    description:
      "Alpha ESS 11kW is available for product inquiries through Solareco. Request the latest approved technical documentation before system selection.",
    keyDetails: [
      "Manufacturer: Alpha ESS",
      "Model: Alpha ESS 11kW",
      "Product type: All-in-One Energy Storage System",
      "Contact Solareco for verified technical documentation",
    ],
    productType: "All-in-One Energy Storage System",
  },
  {
    slug: "luxpower-geta-lb-eu-3-6kw",
    name: "LuxPower GETA-LB-EU 3.6kW",
    category: "Off-Grid Solar Inverters",
    published: true,
    imageFolders: ["luxpower/geta-lb-eu-3-6kw"],
    primaryImage: "luxpower-geta-lb-eu-3-6kw.svg",
    secondaryLabel: "Off-Grid Solar Inverter",
    summary: "LuxPower off-grid solar inverter product for product-selection and quotation inquiries.",
    description:
      "LuxPower GETA-LB-EU 3.6kW is available for product inquiries through Solareco. Request the latest approved technical documentation before system selection.",
    keyDetails: [
      "Manufacturer: LuxPower",
      "Model: GETA-LB-EU 3.6kW",
      "Product type: Off-Grid Solar Inverter",
      "Contact Solareco for verified technical documentation",
    ],
    productType: "Off-Grid Solar Inverter",
  },
  {
    slug: "luxpower-gen2-lb-eu-6kw",
    name: "LuxPower GEN2-LB-EU 6kW",
    category: "Hybrid Single-Phase Inverters",
    published: true,
    imageFolders: ["luxpower/gen2-lb-eu-6kw"],
    primaryImage: "luxpower-gen2-lb-eu-6kw.svg",
    secondaryLabel: "Hybrid Single-Phase Inverter",
    summary: "LuxPower hybrid single-phase inverter for product-selection and quotation inquiries.",
    description: "LuxPower hybrid single-phase inverter for product-selection and quotation inquiries.",
    keyDetails: [
      "Manufacturer: LuxPower",
      "Model: GEN2-LB-EU 6kW",
      "Product type: Hybrid Single-Phase Inverter",
      "Contact Solareco for verified technical documentation",
    ],
    productType: "Hybrid Single-Phase Inverter",
  },
  {
    slug: "luxpower-gen2-lb-eu-12kw",
    name: "LuxPower GEN2-LB-EU 12kW",
    category: "Hybrid Single-Phase Inverters",
    published: true,
    imageFolders: ["luxpower/gen2-lb-eu-12kw"],
    primaryImage: "luxpower-gen2-lb-eu-12kw.svg",
    secondaryLabel: "Hybrid Single-Phase Inverter",
    summary: "LuxPower hybrid single-phase inverter for product-selection and quotation inquiries.",
    description: "LuxPower hybrid single-phase inverter for product-selection and quotation inquiries.",
    keyDetails: [
      "Manufacturer: LuxPower",
      "Model: GEN2-LB-EU 12kW",
      "Product type: Hybrid Single-Phase Inverter",
      "Contact Solareco for verified technical documentation",
    ],
    productType: "Hybrid Single-Phase Inverter",
  },
  {
    slug: "sako-all-in-one",
    name: "SAKO Alpha-W-ESS 1000W / 2kWh",
    category: "All-in-One Energy Storage System",
    published: true,
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
    published: true,
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
    published: true,
    imageFolders: ["solahestia/585w"],
    summary: "Efficient solar panel option for dependable project sizing and supply.",
    description:
      "SOLAHESTIA 585W panels provide a flexible module option for installers and customers planning reliable solar generation.",
    keyDetails: [
      "585W panel class",
      "Designed for professional solar installations",
      "Contact Solareco for the latest approved datasheet and certificates",
    ],
  },
  {
    slug: "solahestia-650w",
    name: "SOLAHESTIA 650W",
    category: "Solar Panels",
    published: true,
    imageFolders: ["solahestia/610w"],
    primaryImage: "HESTIA.png",
    summary: "SOLAHESTIA 650W solar panel product for project-supply and quotation inquiries.",
    description:
      "SOLAHESTIA 650W is available for solar-panel inquiries through Solareco. Request the latest approved technical documentation before system selection.",
    keyDetails: [
      "650W panel class",
      "Product type: Solar Panel",
      "Contact Solareco for verified technical documentation",
    ],
    productType: "Solar Panel",
  },
  {
    slug: "yro-breakers",
    name: "YRO Breakers",
    category: "Electrical Protection",
    published: true,
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
    published: true,
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
    published: false,
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
  "Off-Grid Solar Inverters",
  "Hybrid Single-Phase Inverters",
  "Solar Panels",
  "Electrical Protection",
  "Solar Wiring",
  "Solar Lighting",
  "Solar Products",
];

export function getProductCategorySlug(category: ProductCategory) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getProductCategoryFromSlug(slug: string | null) {
  return productCategories.find((category) => getProductCategorySlug(category) === slug) ?? null;
}
