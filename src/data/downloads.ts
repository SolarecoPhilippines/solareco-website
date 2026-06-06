export type DownloadStatus = "Available" | "Coming Soon";

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
    description: "Product specifications and technical data for priority product lines.",
    items: [
      { name: "SAKO datasheet placeholder", status: "Coming Soon" },
      { name: "SAKO All-in-One datasheet placeholder", status: "Coming Soon" },
      { name: "SOLAHESTIA panel datasheet placeholder", status: "Coming Soon" },
    ],
  },
  {
    title: "Edited Marketing Materials",
    description: "Brand-ready brochures, sales sheets, and product explainers.",
    items: [
      { name: "Solareco product overview", status: "Coming Soon" },
      { name: "Solar solutions flyer", status: "Coming Soon" },
    ],
  },
  {
    title: "ROHS Certificates",
    description: "Compliance files to be reviewed before public release.",
    items: [{ name: "ROHS certificate placeholder", status: "Coming Soon" }],
  },
  {
    title: "IEC Certificates",
    description: "International electrical certification placeholders.",
    items: [{ name: "IEC certificate placeholder", status: "Coming Soon" }],
  },
  {
    title: "ISO Certificates",
    description: "Quality management and supplier documentation placeholders.",
    items: [{ name: "ISO certificate placeholder", status: "Coming Soon" }],
  },
];

