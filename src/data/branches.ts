import { PUBLIC_EMAIL } from "@/src/lib/constants";

export type BranchType = "Branch" | "Warehouse" | "Branches";

export type Branch = {
  name: string;
  shortName: string;
  type: BranchType;
  addresses: string[];
  phone: string;
  phoneHref: string;
  email?: string;
  order: number;
  mapQuery?: string;
};

const branchData: Branch[] = [
  {
    name: "Iloilo Branch",
    shortName: "Iloilo",
    type: "Branch",
    addresses: ["18A Quezon St., Brgy. Sampaguita, Iloilo City"],
    phone: "0917 870 5424",
    phoneHref: "tel:+639178705424",
    email: PUBLIC_EMAIL,
    order: 1,
    mapQuery: "18A Quezon St., Brgy. Sampaguita, Iloilo City",
  },
  {
    name: "Bacolod Branch",
    shortName: "Bacolod",
    type: "Branch",
    addresses: ["Doña Juliana St., Libertad Brgy. 33, Bacolod City"],
    phone: "0998 537 3980",
    phoneHref: "tel:+639985373980",
    email: PUBLIC_EMAIL,
    order: 2,
    mapQuery: "Doña Juliana St., Libertad Brgy. 33, Bacolod City",
  },
  {
    name: "Manila Branch",
    shortName: "Manila",
    type: "Branch",
    addresses: ["1732 Pedro Guevarra St., Sta. Cruz, Manila"],
    phone: "0954 341 1688",
    phoneHref: "tel:+639543411688",
    email: PUBLIC_EMAIL,
    order: 3,
    mapQuery: "1732 Pedro Guevarra St., Sta. Cruz, Manila",
  },
  {
    name: "Palawan Branches",
    shortName: "Palawan",
    type: "Branches",
    addresses: ["Sitio Pasto, El Nido", "Tinigiban, Puerto Princesa"],
    phone: "0917 305 5588",
    phoneHref: "tel:+639173055588",
    email: PUBLIC_EMAIL,
    order: 4,
    mapQuery: "Sitio Pasto, El Nido Palawan",
  },
  {
    name: "Cebu Warehouse",
    shortName: "Cebu",
    type: "Warehouse",
    addresses: ["MJ Cuenco Avenue, Mabolo, Cebu City"],
    phone: "0998 561 9091",
    phoneHref: "tel:+639985619091",
    email: PUBLIC_EMAIL,
    order: 5,
    mapQuery: "MJ Cuenco Avenue, Mabolo, Cebu City",
  },
  {
    name: "Davao Warehouse",
    shortName: "Davao",
    type: "Warehouse",
    addresses: ["R. Castillo, Agdao, Davao City"],
    phone: "0917 312 3440",
    phoneHref: "tel:+639173123440",
    email: PUBLIC_EMAIL,
    order: 6,
    mapQuery: "R. Castillo, Agdao, Davao City",
  },
];

export const branches = branchData.sort((first, second) => first.order - second.order);
