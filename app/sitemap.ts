import type { MetadataRoute } from "next";
import { CHECKED_DATE, SITE_URL, indexableRoutes } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: new Date(`${CHECKED_DATE}T00:00:00.000Z`),
    changeFrequency: path === "/codes" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/beginner-guide" ? 0.9 : 0.8,
  }));
}
