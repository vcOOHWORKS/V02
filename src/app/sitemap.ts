import type { MetadataRoute } from "next";
import { articles } from "@/content/journal";
import { legalDocs } from "@/content/legal";
import { categories } from "@/content/treatments";
import { absoluteUrl, siteUpdated } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestArticle = articles.map((a) => a.published).sort().at(-1) ?? siteUpdated;
  return [
    { url: absoluteUrl("/"), lastModified: siteUpdated, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/our-story"), lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/results"), lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/about"), lastModified: siteUpdated, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/branches"), lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/treatments"), lastModified: siteUpdated, changeFrequency: "monthly", priority: 0.9 },
    ...categories.map((c) => ({
      url: absoluteUrl(`/treatments/${c.slug}`),
      lastModified: siteUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: absoluteUrl("/journal"), lastModified: latestArticle, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map((a) => ({
      url: absoluteUrl(`/journal/${a.slug}`),
      lastModified: a.published,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...legalDocs.map((d) => ({
      url: absoluteUrl(`/${d.slug}`),
      lastModified: d.updated,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
