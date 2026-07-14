import { existsSync, statSync } from "fs";
import path from "path";

export type DownloadStatus = "Available";

export type DownloadItem = {
  name: string;
  href: string;
  status: DownloadStatus;
  brand: string;
  documentType: string;
  revisionDate: string;
  fileSize: string;
};

export type DownloadGroup = {
  title: string;
  description: string;
  items: DownloadItem[];
};

export const downloadGroups: DownloadGroup[] = [
  {
    title: "Datasheets",
    description: "Product specifications and technical data approved for public product review.",
    items: [],
  },
  {
    title: "Marketing Materials",
    description: "Brand brochures, sales sheets, and product explainers approved for public use.",
    items: [],
  },
  {
    title: "ROHS Certificates",
    description: "Reviewed compliance files approved for public release.",
    items: [],
  },
  {
    title: "IEC Certificates",
    description: "Reviewed international electrical certification files approved for public release.",
    items: [],
  },
  {
    title: "ISO Certificates",
    description: "Reviewed quality-management and supplier documentation approved for public release.",
    items: [],
  },
];

function isSafeExistingPublicDownload(item: DownloadItem) {
  if (!item.href.startsWith("/downloads/") || item.href.includes("..")) {
    return false;
  }

  const publicRoot = path.resolve(process.cwd(), "public");
  const downloadsRoot = path.join(publicRoot, "downloads");
  const filePath = path.resolve(publicRoot, item.href.replace(/^\/+/, ""));

  if (!filePath.startsWith(`${downloadsRoot}${path.sep}`) || !existsSync(filePath)) {
    return false;
  }

  try {
    return statSync(filePath).isFile() && statSync(filePath).size > 0;
  } catch {
    return false;
  }
}

export function getAvailableDownloadGroups() {
  return downloadGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.status === "Available" && isSafeExistingPublicDownload(item)),
    }))
    .filter((group) => group.items.length > 0);
}
