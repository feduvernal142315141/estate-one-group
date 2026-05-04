"use client";

import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { resolveTour, type Tour } from "@/lib/virtual-tour";
import { trackVirtualTourOpened } from "@/lib/analytics";
import { TourPoster } from "./tour-poster";

const TourPlayer = dynamic(() => import("./tour-player"), {
  ssr: false,
});

export interface VirtualTourCopy {
  label: string;
  heading: string;
  enter: string;
  loading: string;
  fullscreen: string;
  exitFullscreen: string;
  iframeTitle: string;
}

interface VirtualTourProps {
  tour: Tour;
  propertyId: string;
  fallbackPoster: string;
  posterAlt: string;
  copy: VirtualTourCopy;
}

export function VirtualTour({
  tour,
  propertyId,
  fallbackPoster,
  posterAlt,
  copy,
}: VirtualTourProps) {
  const [isLive, setIsLive] = useState(false);

  const resolved = useMemo(() => resolveTour(tour), [tour]);
  const posterUrl = resolved.posterUrl ?? fallbackPoster;

  const handleEnter = useCallback(() => {
    trackVirtualTourOpened(propertyId, tour.provider);
    setIsLive(true);
  }, [propertyId, tour.provider]);

  if (!isLive) {
    return (
      <TourPoster
        posterUrl={posterUrl}
        posterAlt={posterAlt}
        label={copy.label}
        heading={copy.heading}
        cta={copy.enter}
        onEnter={handleEnter}
      />
    );
  }

  return (
    <TourPlayer
      embedUrl={resolved.embedUrl}
      title={copy.iframeTitle}
      loadingLabel={copy.loading}
      fullscreenLabel={copy.fullscreen}
      exitFullscreenLabel={copy.exitFullscreen}
    />
  );
}
