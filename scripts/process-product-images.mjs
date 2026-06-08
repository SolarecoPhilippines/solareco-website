import { existsSync, mkdirSync, readdirSync, statSync } from "fs";
import path from "path";
import sharp from "sharp";

const sourceRoot = path.join(process.cwd(), "public", "images", "products");
const outputRoot = path.join(process.cwd(), "public", "images", "products-processed");
const validImageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);

function collectImages(directory) {
  if (!existsSync(directory)) {
    return [];
  }

  return readdirSync(directory).flatMap((entry) => {
    const filePath = path.join(directory, entry);
    const stats = statSync(filePath);

    if (stats.isDirectory()) {
      return collectImages(filePath);
    }

    if (!stats.isFile() || stats.size === 0 || !validImageExtensions.has(path.extname(entry).toLowerCase())) {
      return [];
    }

    return [filePath];
  });
}

async function processImage(filePath) {
  const relativePath = path.relative(sourceRoot, filePath);
  const parsed = path.parse(relativePath);
  const outputPath = path.join(outputRoot, parsed.dir, `${parsed.name}.webp`);

  mkdirSync(path.dirname(outputPath), { recursive: true });

  await sharp(filePath)
    .rotate()
    .trim({ background: "#ffffff", threshold: 18 })
    .resize({ width: 1400, height: 1400, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 88, effort: 5 })
    .toFile(outputPath);
}

const images = collectImages(sourceRoot);

await Promise.all(
  images.map(async (filePath) => {
    try {
      await processImage(filePath);
    } catch (error) {
      console.warn(`Skipping product image processing for ${filePath}: ${error instanceof Error ? error.message : error}`);
    }
  }),
);

console.log(`Processed ${images.length} product image${images.length === 1 ? "" : "s"}.`);
