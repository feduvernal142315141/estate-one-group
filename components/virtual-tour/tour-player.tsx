"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";

interface TourPlayerProps {
  embedUrl: string;
  title: string;
  loadingLabel: string;
  fullscreenLabel: string;
  exitFullscreenLabel: string;
}

export default function TourPlayer({
  embedUrl,
  title,
  loadingLabel,
  fullscreenLabel,
  exitFullscreenLabel,
}: TourPlayerProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    const el = wrapperRef.current;
    if (!el) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch {
      // Fullscreen denied or unsupported — silent fallback.
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full bg-charcoal data-[fullscreen=true]:aspect-auto data-[fullscreen=true]:h-full"
      data-fullscreen={isFullscreen}
    >
      <div className="relative aspect-[4/5] w-full md:aspect-[16/10] data-[fullscreen=true]:aspect-auto data-[fullscreen=true]:h-full">
        <iframe
          src={embedUrl}
          title={title}
          allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer; magnetometer"
          allowFullScreen
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="absolute inset-0 h-full w-full border-0"
        />

        {!loaded && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-cream/60">
              {loadingLabel}
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? exitFullscreenLabel : fullscreenLabel}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center bg-charcoal/60 text-brand-cream backdrop-blur-sm transition-colors duration-200 hover:bg-charcoal/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 lg:right-5 lg:top-5"
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          ) : (
            <Maximize2 className="h-4 w-4" strokeWidth={1.5} aria-hidden />
          )}
        </button>
      </div>
    </div>
  );
}
