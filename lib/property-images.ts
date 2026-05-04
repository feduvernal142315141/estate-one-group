import type { Property } from "@/content/properties";

/**
 * Cover and gallery image resolution for property surfaces.
 *
 * Until commissioned photography arrives under
 * `public/images/properties/`, every card, catalog grid, and detail
 * surface needs working images. Each property maps to Unsplash
 * placeholders by id; removing an entry falls back to the property's
 * own first/cover image URL, then to null.
 *
 * TODO: remove COVER_PLACEHOLDER_BY_ID and GALLERY_BY_ID once
 * /public/images/properties/* exists.
 */

export interface GalleryImage {
  url: string;
  alt: string;
}

const BASE = "https://images.unsplash.com";
const Q = "?q=85&w=1600&auto=format&fit=crop";

function u(id: string): string {
  return `${BASE}/${id}${Q}`;
}

const COVER_PLACEHOLDER_BY_ID: Record<string, string> = {
  "villa-aurora": u("photo-1613490493576-7fde63acd811"),
  "the-atelier": u("photo-1600607687939-ce8a6c25118c"),
  "casa-del-mar": u("photo-1600585154340-be6161a56a0c"),
  "continuum-sky": u("photo-1600566753190-17f0baa2a6c3"),
  "banyan-house": u("photo-1613977257592-4a9a32f9141a"),
  "brickell-heights-24": u("photo-1558618666-fcd25c85cd64"),
  "south-beach-residence": u("photo-1605146769289-440113cc3d00"),
  "wynwood-sky-loft": u("photo-1584738766473-61c083514bf4"),
  "palm-island-manor": u("photo-1512917774080-9991f1c4c750"),
  "coral-gables-retreat": u("photo-1583608205776-bfd35f0d9f83"),
  "aventura-circle": u("photo-1522708323590-d24dbb6b0267"),
  "grove-townhouse": u("photo-1600047509807-ba8f99d2cdde"),
  "brickell-key-studio": u("photo-1576941089067-2de3c901e126"),
  "pinecrest-estate": u("photo-1564013799919-ab600027ffc6"),
  "south-beach-mid-century": u("photo-1523217582562-09d0def993a6"),
  "key-biscayne-villa": u("photo-1600047509807-ba8f99d2cdde"),
  "edgewater-tower": u("photo-1568605114967-8130f3a36994"),
  "the-grove-house": u("photo-1570129477492-45c003edd2be"),
  "miami-beach-terrace": u("photo-1580587771525-78b9dba3b914"),
  "fort-lauderdale-canal": u("photo-1494526585095-c41746248156"),
};

const GALLERY_BY_ID: Record<string, string[]> = {
  "villa-aurora": [
    u("photo-1613490493576-7fde63acd811"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "the-atelier": [
    u("photo-1600607687939-ce8a6c25118c"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1600566753190-17f0baa2a6c3"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "casa-del-mar": [
    u("photo-1600585154340-be6161a56a0c"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1502005097973-6a7082348e28"),
  ],
  "continuum-sky": [
    u("photo-1600566753190-17f0baa2a6c3"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1552321554-5fefe8c9ef14"),
    u("photo-1600210492493-0946911123ea"),
  ],
  "banyan-house": [
    u("photo-1613977257592-4a9a32f9141a"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1502005097973-6a7082348e28"),
  ],
  "brickell-heights-24": [
    u("photo-1558618666-fcd25c85cd64"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "south-beach-residence": [
    u("photo-1605146769289-440113cc3d00"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1600585154340-be6161a56a0c"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1552321554-5fefe8c9ef14"),
    u("photo-1575429198097-0414ec08e8cd"),
  ],
  "wynwood-sky-loft": [
    u("photo-1584738766473-61c083514bf4"),
    u("photo-1600607687939-ce8a6c25118c"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1600566753190-17f0baa2a6c3"),
  ],
  "palm-island-manor": [
    u("photo-1512917774080-9991f1c4c750"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1502005097973-6a7082348e28"),
  ],
  "coral-gables-retreat": [
    u("photo-1583608205776-bfd35f0d9f83"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "aventura-circle": [
    u("photo-1522708323590-d24dbb6b0267"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "grove-townhouse": [
    u("photo-1600047509807-ba8f99d2cdde"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1600566753190-17f0baa2a6c3"),
  ],
  "brickell-key-studio": [
    u("photo-1576941089067-2de3c901e126"),
    u("photo-1600607687939-ce8a6c25118c"),
    u("photo-1552321554-5fefe8c9ef14"),
    u("photo-1556909114-f6e7ad7d3136"),
  ],
  "pinecrest-estate": [
    u("photo-1564013799919-ab600027ffc6"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1502005097973-6a7082348e28"),
  ],
  "south-beach-mid-century": [
    u("photo-1523217582562-09d0def993a6"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "key-biscayne-villa": [
    u("photo-1600047509807-ba8f99d2cdde"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "edgewater-tower": [
    u("photo-1568605114967-8130f3a36994"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1600566753190-17f0baa2a6c3"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "the-grove-house": [
    u("photo-1570129477492-45c003edd2be"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
  ],
  "miami-beach-terrace": [
    u("photo-1580587771525-78b9dba3b914"),
    u("photo-1600607688960-e095ff83135c"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1600566753190-17f0baa2a6c3"),
    u("photo-1552321554-5fefe8c9ef14"),
  ],
  "fort-lauderdale-canal": [
    u("photo-1494526585095-c41746248156"),
    u("photo-1600210492493-0946911123ea"),
    u("photo-1556909114-f6e7ad7d3136"),
    u("photo-1522771739844-6a9f6d5f14af"),
    u("photo-1575429198097-0414ec08e8cd"),
    u("photo-1502005097973-6a7082348e28"),
  ],
};

export function getCoverImage(property: Property): {
  url: string | null;
  alt: string;
} {
  const cover =
    property.images.find((image) => image.isCover) ?? property.images[0];
  const url = COVER_PLACEHOLDER_BY_ID[property.id] ?? cover?.url ?? null;
  const alt = cover?.alt.en ?? property.title.en;
  return { url, alt };
}

export function getGalleryImages(property: Property): GalleryImage[] {
  const urls = GALLERY_BY_ID[property.id];
  if (urls && urls.length > 0) {
    return urls.map((url, i) => ({
      url,
      alt:
        i === 0
          ? (property.images.find((img) => img.isCover)?.alt.en ??
            property.title.en)
          : `${property.title.en} — view ${i + 1}`,
    }));
  }
  return property.images.map((img) => ({ url: img.url, alt: img.alt.en }));
}
