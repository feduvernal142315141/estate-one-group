import type { PsvTour } from "../types";

export function getEmbedUrl(_tour: PsvTour): string {
  throw new Error(
    "Photo Sphere Viewer provider is not implemented yet. Switch the tour entry to provider: 'kuula' or implement Phase 2.",
  );
}

export function getPosterUrl(tour: PsvTour): string | null {
  return tour.poster ?? null;
}
