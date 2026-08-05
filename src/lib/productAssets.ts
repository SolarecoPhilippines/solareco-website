import { readdirSync, statSync } from "fs";
import path from "path";
import type { Product } from "@/src/data/products";
import { products } from "@/src/data/products";

const productImagesRoot = path.join(process.cwd(), "public", "images", "products");
const processedProductImagesRoot = path.join(process.cwd(), "public", "images", "products-processed");
const validImageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"]);
const preferredImageTerms = ["front", "main", "hero", "product", "610w", "100ah", "200ah", "300ah", "600ah"];

export type ProductImageAsset = {
  src: string;
  alt: string;
  label: string;
};

export type VisibleProduct = Omit<Product, "primaryImage"> & {
  images: ProductImageAsset[];
  primaryImage: ProductImageAsset;
};

function toPublicPath(filePath: string) {
  return `/${path.relative(path.join(process.cwd(), "public"), filePath).replace(/\\/g, "/")}`;
}

function getDisplayImagePath(filePath: string) {
  const relativePath = path.relative(productImagesRoot, filePath);
  const parsed = path.parse(relativePath);
  const processedPath = path.join(processedProductImagesRoot, parsed.dir, `${parsed.name}.webp`);

  try {
    return statSync(processedPath).isFile() ? processedPath : filePath;
  } catch {
    return filePath;
  }
}

function collectImages(directory: string): string[] {
  try {
    return readdirSync(directory).flatMap((entry) => {
      const filePath = path.join(directory, entry);
      const stats = statSync(filePath);

      if (stats.isDirectory()) {
        return collectImages(filePath);
      }

      if (!stats.isFile() || stats.size === 0) {
        return [];
      }

      return validImageExtensions.has(path.extname(entry).toLowerCase()) ? [filePath] : [];
    });
  } catch {
    return [];
  }
}

function imageScore(filePath: string) {
  const normalized = filePath.toLowerCase();
  const termScore = preferredImageTerms.reduce(
    (score, term, index) => (normalized.includes(term) ? score + preferredImageTerms.length - index : score),
    0,
  );

  return termScore * 1000 - normalized.length;
}

const contextLabels: Record<string, string> = {
  front: "Front View",
  side: "Side View",
  back: "Back View",
  ports: "Ports and Connections",
  connections: "Ports and Connections",
  display: "Display",
  dimensions: "Dimensions",
};

function getImageLabel(filePath: string, product: Product) {
  const publicPath = toPublicPath(filePath);
  const configuredLabel = Object.entries(product.imageLabels ?? {}).find(([pathFragment]) =>
    publicPath.toLowerCase().includes(pathFragment.toLowerCase()),
  )?.[1];

  if (configuredLabel) {
    return configuredLabel;
  }

  const segments = path
    .relative(productImagesRoot, filePath)
    .split(path.sep)
    .slice(0, -1)
    .reverse();

  for (const segment of segments) {
    const label = contextLabels[segment.toLowerCase()];
    if (label) {
      return label;
    }
  }

  return "Product View";
}

export function getProductImages(product: Product): ProductImageAsset[] {
  return product.imageFolders
    .flatMap((folder) => collectImages(path.join(productImagesRoot, folder)))
    .sort((first, second) => imageScore(second) - imageScore(first) || first.localeCompare(second))
    .map((filePath) => {
      const label = getImageLabel(filePath, product);

      return {
        src: toPublicPath(getDisplayImagePath(filePath)),
        alt: `${product.name} - ${label}`,
        label,
      };
    });
}

export function withProductImages(product: Product): VisibleProduct | null {
  const images = getProductImages(product);
  const configuredPrimaryImage = product.primaryImage
    ? images.find((image) => image.src.endsWith(product.primaryImage ?? ""))
    : undefined;
  const primaryImage = configuredPrimaryImage ?? images[0];

  if (!product.published || !primaryImage) {
    return null;
  }

  return {
    ...product,
    images,
    primaryImage,
  };
}

export function getVisibleProducts() {
  return products.map(withProductImages).filter((product): product is VisibleProduct => Boolean(product));
}

export function getVisibleProductBySlug(slug: string) {
  return getVisibleProducts().find((product) => product.slug === slug) ?? null;
}
