import type { KuulaTour } from "../types";

const KUULA_ID_PATTERN = /^[A-Za-z0-9]{4,12}$/;

interface EmbedOptions {
  autorotate: boolean;
}

export function getEmbedUrl(tour: KuulaTour, options: EmbedOptions): string {
  if (!KUULA_ID_PATTERN.test(tour.id)) {
    throw new Error(
      `Invalid Kuula share id: "${tour.id}". Expected the 4–12 character id from kuula.co/share/<id>.`,
    );
  }

  const params = new URLSearchParams({
    fs: "1",
    vr: "0",
    zoom: "1",
    initload: "0",
    thumbs: "1",
    chromeless: "1",
    logo: "-1",
    autorotate: options.autorotate ? "0.3" : "0",
  });

  return `https://kuula.co/share/${tour.id}?${params.toString()}`;
}

export function getPosterUrl(tour: KuulaTour): string | null {
  if (tour.poster) return tour.poster;
  return null;
}
