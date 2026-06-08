export type ProductSourceType =
  | "Official Product Page"
  | "Official Datasheet"
  | "Official Catalog"
  | "Official Manual";

export type ProductSourceAccessStatus = "Accessible" | "Blocked" | "Not found" | "Needs manual review";

export type ProductSourceRecord = {
  productSlug: string;
  productName: string;
  officialUrl: string;
  sourceType: ProductSourceType;
  accessStatus: ProductSourceAccessStatus;
  checkedAt: string;
  datasheetStatus: "Available" | "Coming soon" | "Needs manual review";
  notes: string;
};

const checkedAt = "2026-06-06";

export const productSources: ProductSourceRecord[] = [
  {
    productSlug: "sako-all-in-one",
    productName: "SAKO Alpha-W-ESS 1000W / 2kWh All-in-One",
    officialUrl: "https://sakopower.com/sako-alpha-w-ess-1000w-all-in-one",
    sourceType: "Official Product Page",
    accessStatus: "Accessible",
    checkedAt,
    datasheetStatus: "Available",
    notes: "Technical parameters are based on the official local SAKO catalogue reference for printed pages 43–44. The private local PDF remains unlinked.",
  },
  {
    productSlug: "sako",
    productName: "SAKO Li-Sun Lithium Batteries",
    officialUrl: "https://sakopower.com/wp-content/uploads/2026/05/2026-03-SAKO-Solar-Catalogue-220V%EF%BC%89.pdf",
    sourceType: "Official Catalog",
    accessStatus: "Accessible",
    checkedAt,
    datasheetStatus: "Available",
    notes: "Public source is the official SAKO catalogue URL. Local catalogue copy remains private in reference-docs and is not linked publicly.",
  },
];

export function getProductSources(productSlug: string) {
  return productSources.filter((source) => source.productSlug === productSlug);
}
