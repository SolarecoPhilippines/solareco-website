import { PUBLIC_EMAIL } from "@/src/lib/constants";

export type BranchType = "Branch" | "Warehouse" | "Branches";
export type BranchStatus = "Open" | "Warehouse Opening Soon";
export type BranchRegion = "Luzon" | "Visayas" | "Mindanao" | "Palawan";

export type BranchLocation = {
  name: string;
  address: string;
  mapUrl?: string;
  mapButtonLabel?: string;
};

export type Branch = {
  name: string;
  shortName: string;
  type: BranchType;
  status: BranchStatus;
  statusText?: string;
  region: BranchRegion;
  locations: BranchLocation[];
  phone: string;
  phoneHref: string;
  email?: string;
  order: number;
};

const branchData: Branch[] = [
  {
    name: "Iloilo Branch",
    shortName: "Iloilo",
    type: "Branch",
    status: "Open",
    region: "Visayas",
    locations: [
      {
        name: "Iloilo Branch",
        address: "18A Quezon St., Brgy. Sampaguita, Iloilo City",
        mapUrl: "https://maps.app.goo.gl/Fsp1ckzF4343yhNR8",
        mapButtonLabel: "View Iloilo Branch on Google Maps",
      },
    ],
    phone: "0917 870 5424",
    phoneHref: "tel:+639178705424",
    email: PUBLIC_EMAIL,
    order: 1,
  },
  {
    name: "Bacolod Branch",
    shortName: "Bacolod",
    type: "Branch",
    status: "Open",
    region: "Visayas",
    locations: [
      {
        name: "Bacolod Branch",
        address: "Dona Juliana St., Libertad Brgy. 33, Bacolod City",
        mapUrl: "https://maps.app.goo.gl/aCw35yEuZRkNKbea9",
        mapButtonLabel: "View Bacolod Branch on Google Maps",
      },
    ],
    phone: "0998 537 3980",
    phoneHref: "tel:+639985373980",
    email: PUBLIC_EMAIL,
    order: 2,
  },
  {
    name: "Manila Branch",
    shortName: "Manila",
    type: "Branch",
    status: "Open",
    region: "Luzon",
    locations: [
      {
        name: "Manila Branch",
        address: "1732 Pedro Guevarra St., Sta. Cruz, Manila",
        mapUrl: "https://maps.app.goo.gl/oBTrFv5HBkbfiWvb7",
        mapButtonLabel: "View Manila Branch on Google Maps",
      },
    ],
    phone: "0954 341 1688",
    phoneHref: "tel:+639543411688",
    email: PUBLIC_EMAIL,
    order: 3,
  },
  {
    name: "Palawan Branches",
    shortName: "Palawan",
    type: "Branches",
    status: "Open",
    region: "Palawan",
    locations: [
      {
        name: "El Nido Branch",
        address: "Sitio Pasto, El Nido, Palawan",
        mapUrl:
          "https://www.google.com/maps/@11.2073576,119.4251566,3a,75y,268.76h,90t/data=!3m7!1e1!3m5!1sCPDYDvBFeO-lJx6okQy2Ug!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DCPDYDvBFeO-lJx6okQy2Ug%26yaw%3D268.76!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D",
        mapButtonLabel: "View El Nido Branch on Google Maps",
      },
      {
        name: "Puerto Princesa Branch",
        address: "Tiniguiban, Puerto Princesa City, Palawan",
      },
    ],
    phone: "0917 305 5588",
    phoneHref: "tel:+639173055588",
    email: PUBLIC_EMAIL,
    order: 4,
  },
  {
    name: "Cebu Warehouse",
    shortName: "Cebu",
    type: "Warehouse",
    status: "Warehouse Opening Soon",
    statusText:
      "Solareco Philippines is expanding in Cebu. Follow our official page for opening updates and product availability announcements.",
    region: "Visayas",
    locations: [
      {
        name: "Cebu Warehouse",
        address: "M.J. Cuenco Avenue, Mabolo, Cebu City",
      },
    ],
    phone: "0998 561 9091",
    phoneHref: "tel:+639985619091",
    email: PUBLIC_EMAIL,
    order: 5,
  },
  {
    name: "Davao Warehouse",
    shortName: "Davao",
    type: "Warehouse",
    status: "Warehouse Opening Soon",
    statusText:
      "Solareco Philippines is expanding in Davao. Follow our official page for opening updates and product availability announcements.",
    region: "Mindanao",
    locations: [
      {
        name: "Davao Warehouse",
        address: "R. Castillo Street, Agdao, Davao City",
      },
    ],
    phone: "0917 312 3440",
    phoneHref: "tel:+639173123440",
    email: PUBLIC_EMAIL,
    order: 6,
  },
];

export const branches = branchData.sort((first, second) => first.order - second.order);
