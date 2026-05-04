"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";

export interface GalleryImage {
  url: string;
  alt: string;
}

interface PropertyGalleryProps {
  images: GalleryImage[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = useCallback((index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const main = images[0];
  const sideImages = images.slice(1, 5);
  const totalImages = images.length;

  if (!main) return null;

  return (
    <>
      {/* ── Gallery layout ── */}
      <div className="relative w-full overflow-hidden bg-charcoal">
        {/* Mobile: single hero image with count button */}
        <div className="relative h-[68vh] min-h-[420px] lg:hidden">
          <Image
            src={main.url}
            alt={main.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <button
            type="button"
            onClick={() => openAt(0)}
            className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal backdrop-blur-sm transition-colors duration-200 hover:bg-white"
          >
            <LayoutGrid className="h-3.5 w-3.5" aria-hidden />
            {totalImages} photos
          </button>
        </div>

        {/* Desktop: 3/5 main + 2/5 thumbnails 2×2 */}
        <div className="hidden lg:grid lg:h-[85vh] lg:max-h-[900px] lg:grid-cols-[3fr_2fr] lg:gap-[2px]">
          {/* Main image */}
          <button
            type="button"
            onClick={() => openAt(0)}
            className="group relative overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-gold/60"
            aria-label={`${title} — main photo`}
          >
            <Image
              src={main.url}
              alt={main.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
            />
          </button>

          {/* 2×2 side thumbnails */}
          <div className="grid grid-cols-2 grid-rows-2 gap-[2px]">
            {Array.from({ length: 4 }).map((_, i) => {
              const img = sideImages[i];
              if (!img) {
                return (
                  <div key={i} className="relative overflow-hidden bg-charcoal/40" />
                );
              }
              const isLast = i === 3 && totalImages > 5;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => openAt(i + 1)}
                  className="group relative overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-gold/60"
                  aria-label={`${title} — photo ${i + 2}`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
                  />
                  {isLast && (
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/55">
                      <span className="text-[13px] font-medium uppercase tracking-[0.1em] text-brand-cream">
                        +{totalImages - 5} more
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* "View all photos" button — desktop only, bottom-right */}
        <button
          type="button"
          onClick={() => openAt(0)}
          className="absolute bottom-5 right-5 hidden items-center gap-2 bg-white/90 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal backdrop-blur-sm transition-colors duration-200 hover:bg-white lg:flex"
        >
          <LayoutGrid className="h-3.5 w-3.5" aria-hidden />
          View all {totalImages} photos
        </button>
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          title={title}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}

// ─── Lightbox ────────────────────────────────────────────────

interface LightboxProps {
  images: GalleryImage[];
  title: string;
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ images, title, activeIndex, onClose, onNavigate }: LightboxProps) {
  const total = images.length;
  const activeThumbRef = useRef<HTMLButtonElement>(null);

  const prev = useCallback(() => {
    onNavigate(activeIndex === 0 ? total - 1 : activeIndex - 1);
  }, [activeIndex, total, onNavigate]);

  const next = useCallback(() => {
    onNavigate(activeIndex === total - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, total, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  // Lock body scroll
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Scroll active thumbnail into view
  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  const activeImage = images[activeIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-[#080808]"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo gallery`}
    >
      {/* Top bar: title · counter · close */}
      <div className="flex shrink-0 items-center justify-between px-5 py-4 lg:px-8 lg:py-5">
        <p className="text-[13px] tracking-[0.01em] text-white/50">
          <span className="font-medium text-white/80">{title}</span>
          <span className="mx-3 text-white/20">·</span>
          <span className="tabular-nums text-white/60">
            {activeIndex + 1}
            <span className="mx-1 text-white/30">/</span>
            {total}
          </span>
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-9 w-9 items-center justify-center rounded-none text-white/50 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-brand-gold/60"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Main image area with prev/next */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {/* Prev */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous photo"
          className="absolute left-0 top-0 flex h-full w-14 items-center justify-center text-white/40 transition-colors duration-200 hover:text-white lg:w-20"
        >
          <ChevronLeft className="h-8 w-8" strokeWidth={1.25} />
        </button>

        {/* Image */}
        <div className="relative h-full w-full px-14 lg:px-20">
          {activeImage && (
            <Image
              key={activeIndex}
              src={activeImage.url}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          )}
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="Next photo"
          className="absolute right-0 top-0 flex h-full w-14 items-center justify-center text-white/40 transition-colors duration-200 hover:text-white lg:w-20"
        >
          <ChevronRight className="h-8 w-8" strokeWidth={1.25} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="shrink-0 px-4 pb-5 pt-3 lg:px-8 lg:pb-6">
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((img, i) => (
            <button
              key={i}
              type="button"
              ref={i === activeIndex ? activeThumbRef : undefined}
              onClick={() => onNavigate(i)}
              aria-label={`View photo ${i + 1}`}
              aria-current={i === activeIndex ? "true" : undefined}
              className={`relative h-14 w-[84px] shrink-0 overflow-hidden transition-opacity duration-200 lg:h-[72px] lg:w-[108px] ${
                i === activeIndex
                  ? "opacity-100 outline outline-1 outline-brand-gold"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="108px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
