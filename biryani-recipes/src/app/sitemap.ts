import type { MetadataRoute } from "next";
import { BIRYANIS } from "@/data/biryanis";

const BASE = "https://biryanirecipes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                          changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/recipes`,             changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/varieties`,           changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/history`,             changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/map`,                 changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/spice-science`,       changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE}/facts`,               changeFrequency: "monthly", priority: 0.7 },
  ];

  const recipePages: MetadataRoute.Sitemap = BIRYANIS.map((b) => ({
    url: `${BASE}/recipes/${b.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...recipePages];
}
