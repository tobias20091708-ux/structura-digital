import type { MetadataRoute } from "next";
import { absoluteUrl, industries } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/kontakt"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/eksempel/vvs-demo"), changeFrequency: "monthly", priority: 0.5 },
    { url: absoluteUrl("/privatlivspolitik"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/handelsbetingelser"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/cookiepolitik"), changeFrequency: "yearly", priority: 0.2 },
  ];

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: absoluteUrl(`/${industry.slug}`),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...industryRoutes];
}
