import type { Neighborhood } from "@/content/neighborhoods";

/**
 * Cover image resolution for neighborhood surfaces.
 *
 * Same posture as `lib/property-images.ts`: until commissioned
 * neighborhood photography arrives under
 * `public/images/neighborhoods/`, every card and detail surface
 * needs a working cover. Each neighborhood is mapped by id.
 *
 * Both `<NeighborhoodCard>` and the detail page consume this so
 * the index grid and the detail hero always agree on which image
 * represents the neighborhood.
 */
// TODO: remove this map once /public/images/neighborhoods/* exists.
const COVER_PLACEHOLDER_BY_ID: Record<string, string> = {
  "sunny-isles-beach":
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=85&w=1800&auto=format&fit=crop",
  "coral-gables":
    "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?q=85&w=1800&auto=format&fit=crop",
  "coconut-grove":
    "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=85&w=1800&auto=format&fit=crop",
  "south-of-fifth":
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=85&w=1800&auto=format&fit=crop",
  edgewater:
    "https://images.unsplash.com/photo-1570737543098-4a8c1cb976c6?q=85&w=1800&auto=format&fit=crop",
};

export function getNeighborhoodCover(neighborhood: Neighborhood): {
  url: string | null;
  alt: string;
} {
  return {
    url: COVER_PLACEHOLDER_BY_ID[neighborhood.id] ?? null,
    alt: `${neighborhood.name.en} — Miami neighborhood`,
  };
}
