import type { ResolvedTour, Tour } from "./types";
import * as kuula from "./providers/kuula";
import * as psv from "./providers/psv";

export type { Tour, KuulaTour, PsvTour, ResolvedTour, TourProvider } from "./types";

export function resolveTour(tour: Tour): ResolvedTour {
  const autorotate = tour.autorotate ?? false;

  switch (tour.provider) {
    case "kuula":
      return {
        provider: "kuula",
        embedUrl: kuula.getEmbedUrl(tour, { autorotate }),
        posterUrl: kuula.getPosterUrl(tour),
      };
    case "psv":
      return {
        provider: "psv",
        embedUrl: psv.getEmbedUrl(tour),
        posterUrl: psv.getPosterUrl(tour),
      };
  }
}
