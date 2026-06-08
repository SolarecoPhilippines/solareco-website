export type DownloadStatus = "Available";

export type DownloadGroup = {
  title: string;
  description: string;
  items: {
    name: string;
    status: DownloadStatus;
  }[];
};

export const downloadGroups: DownloadGroup[] = [
  {
    title: "Datasheets",
    description: "Product specifications and technical data for public product review.",
    items: [],
  },
  {
    title: "Marketing Materials",
    description: "Brand-ready brochures, sales sheets, and product explainers.",
    items: [],
  },
  {
    title: "ROHS Certificates",
    description: "Reviewed compliance files for public release.",
    items: [],
  },
  {
    title: "IEC Certificates",
    description: "Reviewed international electrical certification files.",
    items: [],
  },
  {
    title: "ISO Certificates",
    description: "Reviewed quality management and supplier documentation.",
    items: [],
  },
];

export function getAvailableDownloadGroups() {
  return downloadGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.status === "Available"),
    }))
    .filter((group) => group.items.length > 0);
}
