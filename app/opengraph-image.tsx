import { ImageResponse } from "next/og";

/**
 * Homepage Open Graph image.
 *
 * Typographic composition rather than a photograph — until
 * commissioned imagery exists, a fabricated "luxury home" stock
 * shot would set the wrong tone (and BRAND.md prohibits it).
 * Charcoal canvas, gold rule, brand mark, tagline. Same restraint
 * register as the rest of the site.
 *
 * Next.js generates this as a 1200×630 PNG at build time and wires
 * the meta tags automatically. Per-route variants (e.g. property
 * detail OG with the cover photo) can be added later by dropping
 * an `opengraph-image.tsx` into `app/properties/[slug]/`.
 */

export const alt =
  "Estate One Group — modern, founder-led real estate in South Florida";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 120px",
          color: "#FFF9DC",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(199, 153, 28, 0.85)",
            }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "rgba(199, 153, 28, 0.95)",
              fontWeight: 500,
            }}
          >
            South Florida
          </span>
        </div>

        <div
          style={{
            fontSize: 108,
            fontWeight: 300,
            lineHeight: 1.02,
            letterSpacing: -2,
            marginTop: 56,
            color: "#FFF9DC",
          }}
        >
          Estate One Group.
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 300,
            lineHeight: 1.4,
            color: "rgba(255, 249, 220, 0.65)",
            marginTop: 40,
            maxWidth: 800,
          }}
        >
          Modern, founder-led, by referral.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 120,
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255, 249, 220, 0.4)",
            fontWeight: 500,
          }}
        >
          estateonegroup.com
        </div>
      </div>
    ),
    size,
  );
}
