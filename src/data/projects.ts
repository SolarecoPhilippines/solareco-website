export type ProjectCategory = "Residential Solar" | "Commercial Solar" | "Battery Storage" | "Solar Street Lights";

export type Project = {
  title: string;
  category: ProjectCategory;
  location: string;
  summary: string;
  details: string[];
  image: string;
};

export const projects: Project[] = [
  {
    title: "Residential Solar Supply",
    category: "Residential Solar",
    location: "Western Visayas",
    summary: "Solar product supply and selection support for home energy projects.",
    details: ["Solar panel and battery product matching", "Installer-ready product coordination", "Branch-supported inquiry handling"],
    image: "/images/hero/solareco-product-lineup.png",
  },
  {
    title: "Commercial Solar Materials",
    category: "Commercial Solar",
    location: "Metro Manila",
    summary: "Panels, protection components, and wiring options for commercial solar requirements.",
    details: ["SOLAHESTIA panel options", "YRO breaker planning", "LEADER wire availability"],
    image: "/images/hero/solareco-product-lineup.png",
  },
  {
    title: "Battery Storage Planning",
    category: "Battery Storage",
    location: "Cebu and Davao",
    summary: "SAKO Li-Sun and Alpha all-in-one product discovery for storage-backed installations.",
    details: ["Seven Li-Sun battery variants", "Alpha-W-ESS 1000W / 2kWh overview", "Technical comparison support"],
    image: "/images/hero/solareco-product-lineup.png",
  },
  {
    title: "Solar Street Light Supply",
    category: "Solar Street Lights",
    location: "Nationwide",
    summary: "Product sourcing support for outdoor solar lighting and electrical components.",
    details: ["Project inquiry coordination", "Branch availability checking", "Product documentation workflow"],
    image: "/images/hero/solareco-product-lineup.png",
  },
  {
    title: "Dealer Product Availability",
    category: "Commercial Solar",
    location: "Iloilo and Bacolod",
    summary: "Focused catalog support for dealers needing fast product selection and quote routing.",
    details: ["Nationwide branch directory", "Quote-first contact flow", "Download center for document readiness"],
    image: "/images/hero/solareco-product-lineup.png",
  },
  {
    title: "Home Backup Energy Inquiry",
    category: "Battery Storage",
    location: "Palawan",
    summary: "Battery and all-in-one ESS discovery for homes needing dependable backup options.",
    details: ["LiFePO4 battery comparison", "All-in-one ESS page", "Facebook and call lead actions"],
    image: "/images/hero/solareco-product-lineup.png",
  },
];

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Residential Solar",
  "Commercial Solar",
  "Battery Storage",
  "Solar Street Lights",
];
