export type ProductCategory =
  | "Solar Inverters"
  | "All-in-One Systems"
  | "Solar Panels"
  | "Electrical Protection"
  | "Solar Wiring";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  summary: string;
  description: string;
  keyDetails: string[];
};

export const products: Product[] = [
  {
    slug: "sako",
    name: "SAKO",
    category: "Solar Inverters",
    summary: "Reliable inverter solutions for residential and commercial solar projects.",
    description:
      "SAKO products support practical solar power applications with dependable conversion, monitoring-ready operation, and installer-friendly configuration.",
    keyDetails: [
      "Placeholder specifications pending final datasheet",
      "Suitable for common residential and business installations",
      "Technical assistance available through Solareco",
    ],
  },
  {
    slug: "sako-all-in-one",
    name: "SAKO All-in-One",
    category: "All-in-One Systems",
    summary: "Integrated solar power system designed for clean setup and efficient deployment.",
    description:
      "SAKO All-in-One systems combine core solar power components into a compact package for easier planning, installation, and support.",
    keyDetails: [
      "Integrated system placeholder details",
      "Designed for simplified project deployment",
      "Final battery and inverter specifications to be added",
    ],
  },
  {
    slug: "solahestia-610w",
    name: "SOLAHESTIA 610W",
    category: "Solar Panels",
    summary: "High-output solar panel option for projects requiring strong generation capacity.",
    description:
      "SOLAHESTIA 610W panels are positioned for high-performance solar arrays across residential, commercial, and distributed energy projects.",
    keyDetails: [
      "610W panel class",
      "Certificate placeholders prepared for review",
      "Final mechanical and electrical data pending",
    ],
  },
  {
    slug: "solahestia-585w",
    name: "SOLAHESTIA 585W",
    category: "Solar Panels",
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
    summary: "Electrical protection components for safer solar power installations.",
    description:
      "YRO breakers support protection requirements in solar and electrical systems, with final ratings to be confirmed through official documents.",
    keyDetails: [
      "Protection component placeholder",
      "Ratings and certifications pending final review",
      "Recommended selection support available",
    ],
  },
  {
    slug: "leader-wires",
    name: "LEADER Wires",
    category: "Solar Wiring",
    summary: "Solar wiring products for reliable installation work and system connections.",
    description:
      "LEADER wires are included in Solareco's priority catalog for installers needing dependable wiring supply for solar projects.",
    keyDetails: [
      "Solar wiring placeholder details",
      "Cable sizing and ratings to be added",
      "Suitable for installer and project supply inquiries",
    ],
  },
];

export const productCategories: ProductCategory[] = [
  "Solar Inverters",
  "All-in-One Systems",
  "Solar Panels",
  "Electrical Protection",
  "Solar Wiring",
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

