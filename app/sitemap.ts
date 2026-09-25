import { MetadataRoute } from "next";
import { GUIDANCE_THEMES } from "@/data/themes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hikmah-guidance.vercel.app";
  const currentDate = new Date().toISOString();

  // Core static landing pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/explore`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/safety`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dynamic thematic topic pages
  const topicPages: MetadataRoute.Sitemap = GUIDANCE_THEMES.map((theme) => ({
    url: `${baseUrl}/topic/${theme.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...topicPages];
}
