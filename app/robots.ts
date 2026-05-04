import type { MetadataRoute } from "next";

/**
 * robots.txt — explicit allow with two narrow disallows.
 *
 * `/privacy` and `/terms` carry `robots: { index: false }` page-
 * level metadata while counsel finalizes the text. Mirroring that
 * here in robots.txt is belt-and-suspenders: it stops crawlers
 * from following the link in the footer at all, not just from
 * indexing the page after they fetch it.
 *
 * Sitemap pointer matches `app/sitemap.ts`.
 */
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://estateonegroup.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
