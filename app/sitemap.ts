import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

/** Stable lastmod — avoid regenerating "now" on every request (hurts crawl trust) */
const LAST_CONTENT_UPDATE = new Date("2026-07-23T12:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solutions`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
