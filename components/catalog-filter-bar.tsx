"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { Link, useRouter } from "@/lib/navigation";
import { ChevronDown, Check } from "lucide-react";
import {
  CATALOG_SORTS,
  CATALOG_TYPES,
  BEDS_OPTIONS,
  BATHS_OPTIONS,
  type CatalogSortKey,
  type CatalogTypeKey,
} from "@/lib/catalog";

/**
 * Catalog filter bar — v3.
 *
 * Editorial type chips on the left (text-only, gold underline on
 * active — matching the nav register, not pill chips), and a quiet
 * native sort select on the right. Chips are <Link>s so the URL
 * state is shareable and crawlable; sort uses router.push because
 * a select cannot be a hyperlink.
 *
 * Both controls preserve the other's URL param. Defaults stay out
 * of the URL (no `?sort=newest`, no `?type=all`) so canonical paths
 * remain clean. Taxonomy and validation helpers live in
 * `lib/catalog.ts` so the server page can import them without
 * tripping the client-boundary rule.
 */

function buildHref(params: {
  type?: CatalogTypeKey | null;
  sort?: CatalogSortKey;
  beds?: number | null;
  baths?: number | null;
  parking?: boolean;
}): string {
  const search = new URLSearchParams();
  if (params.type) search.set("type", params.type);
  if (params.sort && params.sort !== "newest") {
    search.set("sort", params.sort);
  }
  if (params.beds != null) search.set("beds", String(params.beds));
  if (params.baths != null) search.set("baths", String(params.baths));
  if (params.parking) search.set("parking", "1");
  const qs = search.toString();
  return qs ? `/properties?${qs}` : "/properties";
}

export function CatalogFilterBar({
  activeType,
  activeSort,
  activeBeds,
  activeBaths,
  activeParking,
  countsByType,
  totalCount,
}: {
  activeType: CatalogTypeKey | null;
  activeSort: CatalogSortKey;
  activeBeds: number | null;
  activeBaths: number | null;
  activeParking: boolean;
  countsByType: Partial<Record<CatalogTypeKey, number>>;
  totalCount: number;
}) {
  const t = useTranslations("catalog.filterBar");
  const router = useRouter();
  const searchParams = useSearchParams();

  function onSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value as CatalogSortKey;
    const params = new URLSearchParams(searchParams.toString());
    if (next === "newest") params.delete("sort");
    else params.set("sort", next);
    const qs = params.toString();
    router.push(qs ? `/properties?${qs}` : "/properties", { scroll: false });
  }

  const visibleTypes = CATALOG_TYPES.filter(
    (t) => (countsByType[t.key] ?? 0) > 0,
  );

  const parkingHref = buildHref({
    type: activeType,
    sort: activeSort,
    beds: activeBeds,
    baths: activeBaths,
    parking: !activeParking,
  });

  return (
    <div className="border-y border-neutral-200 bg-off-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-12 lg:py-6">
        {/* Left: type chips */}
        <div
          className="-mx-1 flex items-center gap-x-6 overflow-x-auto px-1 lg:mx-0 lg:flex-wrap lg:gap-x-8 lg:gap-y-2 lg:overflow-visible lg:px-0"
          role="tablist"
          aria-label="Filter by property type"
        >
          <FilterChip
            href={buildHref({
              sort: activeSort,
              beds: activeBeds,
              baths: activeBaths,
              parking: activeParking,
            })}
            label={t("all")}
            count={totalCount}
            active={activeType === null}
          />
          {visibleTypes.map((type) => (
            <FilterChip
              key={type.key}
              href={buildHref({
                type: type.key,
                sort: activeSort,
                beds: activeBeds,
                baths: activeBaths,
                parking: activeParking,
              })}
              label={t(`types.${type.key}` as Parameters<typeof t>[0])}
              count={countsByType[type.key] ?? 0}
              active={activeType === type.key}
            />
          ))}
        </div>

        {/* Right: Beds & Baths + Parking + Sort */}
        <div className="flex shrink-0 items-center gap-3 self-end lg:self-auto">
          {/* Beds & Baths dropdown */}
          <BedsAndBathsDropdown
            activeBeds={activeBeds}
            activeBaths={activeBaths}
            activeType={activeType}
            activeSort={activeSort}
            activeParking={activeParking}
            onNavigate={(href) => router.push(href, { scroll: false })}
          />

          {/* Parking toggle */}
          <Link
            href={parkingHref}
            scroll={false}
            className={`flex items-center gap-1.5 border px-3 py-1.5 text-[13px] font-medium tracking-[-0.005em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 ${
              activeParking
                ? "border-charcoal bg-charcoal text-brand-cream"
                : "border-neutral-200 text-neutral-600 hover:border-charcoal hover:text-charcoal"
            }`}
            aria-pressed={activeParking}
          >
            {activeParking && (
              <Check className="h-3 w-3 shrink-0" strokeWidth={2.5} aria-hidden />
            )}
            {t("parking")}
          </Link>

          {/* Divider */}
          <span className="h-5 w-px bg-neutral-200" aria-hidden />

          {/* Sort */}
          <div className="flex items-center gap-3">
            <label
              htmlFor="catalog-sort"
              className="text-[13px] tracking-[-0.005em] text-neutral-500"
            >
              {t("sort")}
            </label>
            <div className="relative">
              <select
                id="catalog-sort"
                value={activeSort}
                onChange={onSortChange}
                className="cursor-pointer appearance-none border-b border-charcoal/20 bg-transparent py-1.5 pl-1 pr-7 text-[14px] font-medium text-charcoal transition-colors duration-300 hover:border-charcoal focus-visible:border-brand-gold focus-visible:outline-none motion-reduce:transition-none"
              >
                {CATALOG_SORTS.map((option) => (
                  <option key={option.key} value={option.key}>
                    {t(`sorts.${option.key}` as Parameters<typeof t>[0])}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden
                className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal/60"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Beds & Baths Dropdown ────────────────────────────────────────────────────

interface BedsAndBathsDropdownProps {
  activeBeds: number | null;
  activeBaths: number | null;
  activeType: CatalogTypeKey | null;
  activeSort: CatalogSortKey;
  activeParking: boolean;
  onNavigate: (href: string) => void;
}

function BedsAndBathsDropdown({
  activeBeds,
  activeBaths,
  activeType,
  activeSort,
  activeParking,
  onNavigate,
}: BedsAndBathsDropdownProps) {
  const t = useTranslations("catalog.filterBar");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  // Compute button label
  const buttonLabel = useCallback(() => {
    if (activeBeds == null && activeBaths == null) return t("bedsAndBaths");
    const parts: string[] = [];
    if (activeBeds != null) parts.push(`${activeBeds}+ ${t("bedroomsLabel")}`);
    if (activeBaths != null) parts.push(`${activeBaths}+ ${t("bathroomsLabel")}`);
    return parts.join(" · ");
  }, [activeBeds, activeBaths, t]);

  const isActive = activeBeds != null || activeBaths != null;

  function handleBedSelect(value: number | null) {
    const href = buildHref({
      type: activeType,
      sort: activeSort,
      beds: value,
      baths: activeBaths,
      parking: activeParking,
    });
    onNavigate(href);
  }

  function handleBathSelect(value: number | null) {
    const href = buildHref({
      type: activeType,
      sort: activeSort,
      beds: activeBeds,
      baths: value,
      parking: activeParking,
    });
    onNavigate(href);
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1.5 border px-3 py-1.5 text-[13px] font-medium tracking-[-0.005em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold/60 ${
          isActive
            ? "border-charcoal bg-charcoal text-brand-cream"
            : "border-neutral-200 text-neutral-600 hover:border-charcoal hover:text-charcoal"
        }`}
      >
        {buttonLabel()}
        <ChevronDown
          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-20 mt-1 min-w-[260px] border border-charcoal/80 bg-charcoal p-5 shadow-xl">
          {/* Bedrooms */}
          <div className="mb-5">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-brand-cream/50">
              {t("bedroomsLabel")}
            </p>
            <div className="flex flex-wrap gap-2">
              {BEDS_OPTIONS.map((opt) => (
                <button
                  key={opt.labelShort}
                  type="button"
                  onClick={() => handleBedSelect(opt.value)}
                  className={`min-w-[44px] px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 ${
                    activeBeds === opt.value
                      ? "bg-brand-gold text-charcoal"
                      : "border border-brand-cream/20 text-brand-cream/70 hover:border-brand-cream/60 hover:text-brand-cream"
                  }`}
                >
                  {opt.labelShort}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-brand-cream/50">
              {t("bathroomsLabel")}
            </p>
            <div className="flex flex-wrap gap-2">
              {BATHS_OPTIONS.map((opt) => (
                <button
                  key={opt.labelShort}
                  type="button"
                  onClick={() => handleBathSelect(opt.value)}
                  className={`min-w-[44px] px-3 py-1.5 text-[13px] font-medium transition-colors duration-150 ${
                    activeBaths === opt.value
                      ? "bg-brand-gold text-charcoal"
                      : "border border-brand-cream/20 text-brand-cream/70 hover:border-brand-cream/60 hover:text-brand-cream"
                  }`}
                >
                  {opt.labelShort}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Filter Chip ─────────────────────────────────────────────────────────────

function FilterChip({
  href,
  label,
  count,
  active,
}: {
  href: string;
  label: string;
  count: number;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      scroll={false}
      role="tab"
      aria-selected={active}
      className={`group relative shrink-0 py-2 text-[14px] font-medium tracking-[-0.005em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold/60 motion-reduce:transition-none ${
        active ? "text-charcoal" : "text-neutral-500 hover:text-charcoal"
      }`}
    >
      <span className="relative inline-block">
        {label}
        <span className="ml-1.5 text-[12px] tabular-nums text-neutral-400">
          {count}
        </span>
        <span
          aria-hidden
          className={`pointer-events-none absolute -bottom-1 left-0 h-px w-full origin-center bg-brand-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </span>
    </Link>
  );
}
