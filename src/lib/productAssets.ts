import { readdirSync, statSync } from "fs";
import path from "path";
import type { Product } from "@/src/data/products";
import { products } from "@/src/data/products";

const productImagesRoot = path.join(process.cwd(), "public", "images", "products");
const processedProductImagesRoot = path.join(process.cwd(), "public", "images", "products-processed");
const validImageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const preferredImageTerms = ["front", "main", "hero", "product", "610w", "100ah", "200ah", "300ah", "600ah"];

export type ProductImageAsset = {
  src: string;
  alt: string;
};

export type VisibleProduct = Product & {
  images: ProductImageAsset[];
  primaryImage: ProductImageAsset;
};

function titleCaseFromSlug(slug: string) {
  return slug
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

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

export function getProductImages(product: Product): ProductImageAsset[] {
  return product.imageFolders
    .flatMap((folder) => collectImages(path.join(productImagesRoot, folder)))
    .sort((first, second) => imageScore(second) - imageScore(first) || first.localeCompare(second))
    .map((filePath) => ({
      src: toPublicPath(getDisplayImagePath(filePath)),
      alt: product.name,
    }));
}

export function withProductImages(product: Product): VisibleProduct | null {
  const images = getProductImages(product);
  const primaryImage = images[0];

  if (!primaryImage) {
    return null;
  }

  return {
    ...product,
    images,
    primaryImage,
  };
}

export function getVisibleProducts() {
  const configuredFolders = new Set(products.flatMap((product) => product.imageFolders.map((folder) => folder.split(/[\\/]/)[0])));
  const configuredProducts = products.map(withProductImages).filter((product): product is VisibleProduct => Boolean(product));
  const configuredSlugs = new Set(products.map((product) => product.slug));
  const automaticProducts = (() => {
    try {
      return readdirSync(productImagesRoot)
        .filter((entry) => {
          const directory = path.join(productImagesRoot, entry);
          return statSync(directory).isDirectory() && !configuredFolders.has(entry) && !configuredSlugs.has(entry);
        })
        .map((folder): Product => {
          const name = titleCaseFromSlug(folder);

          return {
            slug: folder,
            name,
            category: "Solar Products",
            imageFolders: [folder],
            summary: `${name} is available for product inquiries through Solareco Philippines.`,
            description: `Explore ${name} for solar, electrical, and energy project requirements through Solareco Philippines.`,
            keyDetails: ["Available for product inquiry", "Contact Solareco for quotation and technical details"],
          };
        })
        .map(withProductImages)
        .filter((product): product is VisibleProduct => Boolean(product));
    } catch {
      return [];
    }
  })();

  return [...configuredProducts, ...automaticProducts];
}

export function getVisibleProductBySlug(slug: string) {
  return getVisibleProducts().find((product) => product.slug === slug) ?? null;
}
