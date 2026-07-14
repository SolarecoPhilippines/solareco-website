export type SolutionCategory = "Residential Solar" | "Commercial Solar" | "Battery Storage" | "Solar Street Lights";

export type SolutionApplication = {
  title: string;
  category: SolutionCategory;
  availability: string;
  summary: string;
  details: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export const supportedApplications: SolutionApplication[] = [
  {
    title: "Residential Solar Supply Planning",
    category: "Residential Solar",
    availability: "Branch-supported inquiries",
    summary: "Solar product supply and selection support for home energy requirements.",
    details: ["Solar panel and battery product matching", "Installer-ready product coordination", "Branch-supported inquiry handling"],
    imageSrc: "/images/products-processed/solahestia/585w/HESTIA.webp",
    imageAlt: "SOLAHESTIA 585W solar panel product view",
  },
  {
    title: "Commercial Solar Materials Planning",
    category: "Commercial Solar",
    availability: "Project-based inquiries",
    summary: "Panels, protection components, and wiring options for commercial solar requirements.",
    details: ["SOLAHESTIA panel options", "YRO breaker planning", "LEADER wire availability"],
    imageSrc: "/images/products-processed/solahestia/610w/HESTIA.webp",
    imageAlt: "SOLAHESTIA 610W solar panel product view",
  },
  {
    title: "Battery Storage Planning",
    category: "Battery Storage",
    availability: "Technical selection support",
    summary: "SAKO Li-Sun and Alpha all-in-one product discovery for storage-backed applications.",
    details: ["Seven Li-Sun battery variants", "Alpha-W-ESS 1000W / 2kWh overview", "Technical comparison support"],
    imageSrc: "/images/products-processed/sako-all-in-one/alpha-w-ess-1000w-2kwh/front/AIO.webp",
    imageAlt: "SAKO Alpha-W-ESS all-in-one energy storage system front view",
  },
  {
    title: "Solar Street Light Supply Planning",
    category: "Solar Street Lights",
    availability: "Product inquiry support",
    summary: "Product sourcing support for outdoor solar lighting and electrical components.",
    details: ["Requirement coordination", "Branch availability checking", "Product documentation workflow"],
  },
  {
    title: "Dealer Product Availability Support",
    category: "Commercial Solar",
    availability: "Dealer inquiries",
    summary: "Catalog support for dealers needing focused product selection and quote routing.",
    details: ["Nationwide branch directory", "Quote-first contact flow", "Approved-document availability checks"],
    imageSrc: "/images/products-processed/yro-ats/18.webp",
    imageAlt: "YRO electrical protection product view",
  },
  {
    title: "Home Backup Energy Planning",
    category: "Battery Storage",
    availability: "Residential inquiries",
    summary: "Battery and all-in-one ESS discovery for homes evaluating backup-energy options.",
    details: ["LiFePO4 battery comparison", "All-in-one ESS product information", "Quotation and contact routing"],
    imageSrc: "/images/products-processed/sako-batteries/sk-25-6v-100ah/front/SAKO Battery.webp",
    imageAlt: "SAKO Li-Sun lithium battery front view",
  },
];

export const solutionCategories: Array<SolutionCategory | "All"> = [
  "All",
  "Residential Solar",
  "Commercial Solar",
  "Battery Storage",
  "Solar Street Lights",
];
