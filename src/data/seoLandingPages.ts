export type SeoLandingPage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string;
  highlights: string[];
  relatedProducts: string[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "solar-battery-philippines",
    title: "Solar Battery Philippines",
    h1: "Solar Battery Supplier in the Philippines",
    description: "Solar battery products and technical support for homes, businesses, and solar installers in the Philippines.",
    intro:
      "Solareco Philippines helps customers compare solar battery options for backup power, hybrid solar systems, and energy-storage projects.",
    highlights: ["SAKO Li-Sun lithium battery options", "Variant comparison for project sizing", "Nationwide inquiry and branch support"],
    relatedProducts: ["SAKO Li-Sun Lithium Batteries", "SAKO Alpha-W-ESS 1000W / 2kWh"],
  },
  {
    slug: "lifepo4-battery-philippines",
    title: "LiFePO4 Battery Philippines",
    h1: "LiFePO4 Battery Options for Philippine Solar Projects",
    description: "LiFePO4 battery selection support and SAKO lithium battery product information from Solareco Philippines.",
    intro:
      "For installers and project owners evaluating LiFePO4 battery systems, Solareco provides product discovery, model comparison, and quotation support.",
    highlights: ["25.6V and 51.2V SAKO battery variants", "Technical parameter tables", "Quote routing for residential and commercial needs"],
    relatedProducts: ["SAKO Li-Sun Lithium Batteries"],
  },
  {
    slug: "solar-panel-supplier-philippines",
    title: "Solar Panel Supplier Philippines",
    h1: "Solar Panel Supplier Across the Philippines",
    description: "SOLAHESTIA solar panel supply, product discovery, and quotation support for Philippine solar projects.",
    intro:
      "Solareco supports solar panel inquiries for homes, businesses, installers, and project partners looking for dependable product availability.",
    highlights: ["SOLAHESTIA 610W solar panel option", "SOLAHESTIA 585W solar panel option", "Branch-supported product inquiries"],
    relatedProducts: ["SOLAHESTIA 610W", "SOLAHESTIA 585W"],
  },
  {
    slug: "solar-inverter-philippines",
    title: "Solar Inverter Philippines",
    h1: "Solar Inverter and All-in-One ESS Support",
    description: "Solar inverter and all-in-one energy storage product support from Solareco Philippines.",
    intro:
      "Solareco helps customers explore compact inverter-backed energy storage options for homes, small businesses, and backup energy needs.",
    highlights: ["SAKO Alpha-W-ESS 1000W / 2kWh", "Built-in inverter and lithium battery", "Application guidance for backup and solar charging"],
    relatedProducts: ["SAKO Alpha-W-ESS 1000W / 2kWh"],
  },
  {
    slug: "solar-accessories-philippines",
    title: "Solar Accessories Philippines",
    h1: "Solar Accessories and Electrical Products",
    description: "Solar breakers, wires, and electrical accessory product support for Philippine installers and project teams.",
    intro:
      "Solareco's catalog includes electrical protection and wiring products that support safer, more organized solar installation work.",
    highlights: ["YRO breaker product line", "LEADER wires for solar installation", "Support for accessory quotation requests"],
    relatedProducts: ["YRO Breakers", "LEADER Wires"],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}
