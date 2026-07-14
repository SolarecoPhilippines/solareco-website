import type { MetadataRoute } from "next";
import { seoLandingPages } from "@/src/data/seoLandingPages";
import { SITE_URL } from "@/src/lib/constants";
import { getVisibleProducts } from "@/src/lib/productAssets";

export const dynamic = "force-static";

const staticRoutes = [
  "",
  "/products",
  "/about",
  "/contact",
  "/projects",
  "/downloads",
  "/privacy",
  "/terms",
  "/warranty-returns",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const productRoutes = getVisibleProducts().map((product) => `/products/${product.slug}`);
  const seoRoutes = seoLandingPages.map((page) => `/${page.slug}`);

  return [...staticRoutes, ...productRoutes, ...seoRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route.startsWith("/products") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/products" ? 0.9 : 0.7,
  }));
}
