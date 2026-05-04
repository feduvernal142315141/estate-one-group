/**
 * Virtual tour data model — provider-agnostic.
 *
 * Phase 0 ships only the `kuula` provider. The discriminated union exists
 * so Phase 2 can add `psv` (Photo Sphere Viewer + own storage) without
 * touching the consumer or component layer.
 */

export type TourProvider = "kuula" | "psv";

interface TourBase {
  /** Optional override for the poster shown before the player mounts. */
  poster?: string;
  /** When false (default), the tour does not auto-rotate. */
  autorotate?: boolean;
}

export interface KuulaTour extends TourBase {
  provider: "kuula";
  /** The 7-character share id from a Kuula URL (kuula.co/share/<id>). */
  id: string;
}

export interface PsvTour extends TourBase {
  provider: "psv";
  /** Storage key (e.g. R2/S3) for the equirectangular asset. */
  id: string;
}

export type Tour = KuulaTour | PsvTour;

export interface ResolvedTour {
  provider: TourProvider;
  embedUrl: string;
  posterUrl: string | null;
}
