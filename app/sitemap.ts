import type { MetadataRoute } from "next";
import { seedProperties } from "@/content/properties";
import { seedNeighborhoods } from "@/content/neighborhoods";

/**
 * Sitemap — dynamic, derived from seed data.
 *
 * Includes every indexable route. `/privacy` and `/terms` are
 * excluded because they carry `robots: { index: false }` while
 * counsel finalizes the text. `/not-found` is excluded by Next.
 *
 * The base URL is read from `NEXT_PUBLIC_SITE_URL` so that staging
 * and production resolve correctly. The fallback exists only so a
 * local dev build doesn't crash before the env var is set.
 */
// TODO: set NEXT_PUBLIC_SITE_URL on Vercel (production + preview)
// once the production domain is registered, then remove the fallback.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://estateonegroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, priority: 1.0 },
    { url: `${SITE_URL}/properties`, lastModified: now, priority: 0.9 },
    { url: `${SITE_URL}/neighborhoods`, lastModified: now, priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, priority: 0.7 },
    { url: `${SITE_URL}/journal`, lastModified: now, priority: 0.4 },
    { url: `${SITE_URL}/press`, lastModified: now, priority: 0.3 },
    { url: `${SITE_URL}/accessibility`, lastModified: now, priority: 0.2 },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = seedProperties
    .filter((p) => p.status === "active")
    .map((p) => ({
      url: `${SITE_URL}/properties/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      priority: 0.85,
    }));

  const neighborhoodRoutes: MetadataRoute.Sitemap = seedNeighborhoods.map(
    (n) => ({
      url: `${SITE_URL}/neighborhoods/${n.slug}`,
      lastModified: now,
      priority: 0.7,
    }),
  );

  return [...staticRoutes, ...propertyRoutes, ...neighborhoodRoutes];
}
