/**
 * Catalog taxonomy and URL-param helpers.
 *
 * Lives outside the client component on purpose: server components
 * (`app/properties/page.tsx`) need to import `normalizeType` /
 * `normalizeSort` to validate searchParams, and Next.js will not let
 * a server component import non-component values from a `"use client"`
 * module. Keeping these pure functions here lets both worlds consume
 * them without the boundary error.
 */

export type CatalogTypeKey =
  | "house"
  | "condo"
  | "townhouse"
  | "penthouse"
  | "estate"
  | "land";

export type CatalogSortKey =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "sqft-desc";

export const CATALOG_TYPES: ReadonlyArray<{
  key: CatalogTypeKey;
  label: string;
}> = [
  { key: "house", label: "Houses" },
  { key: "condo", label: "Condominiums" },
  { key: "penthouse", label: "Penthouses" },
  { key: "estate", label: "Estates" },
  { key: "townhouse", label: "Townhouses" },
  { key: "land", label: "Land" },
];

export const CATALOG_SORTS: ReadonlyArray<{
  key: CatalogSortKey;
  label: string;
}> = [
  { key: "newest", label: "Most recent" },
  { key: "price-asc", label: "Price (low to high)" },
  { key: "price-desc", label: "Price (high to low)" },
  { key: "sqft-desc", label: "Largest" },
];

const VALID_TYPES = new Set<CatalogTypeKey>(CATALOG_TYPES.map((t) => t.key));
const VALID_SORTS = new Set<CatalogSortKey>(CATALOG_SORTS.map((s) => s.key));

export function normalizeType(raw: string | undefined): CatalogTypeKey | null {
  if (!raw) return null;
  return VALID_TYPES.has(raw as CatalogTypeKey)
    ? (raw as CatalogTypeKey)
    : null;
}

export function normalizeSort(raw: string | undefined): CatalogSortKey {
  if (!raw) return "newest";
  return VALID_SORTS.has(raw as CatalogSortKey)
    ? (raw as CatalogSortKey)
    : "newest";
}

export const BEDS_OPTIONS: ReadonlyArray<{
  value: number | null;
  label: string;
  labelShort: string;
}> = [
  { value: null, label: "Any bedrooms", labelShort: "Any" },
  { value: 1, label: "1+ beds", labelShort: "1+" },
  { value: 2, label: "2+ beds", labelShort: "2+" },
  { value: 3, label: "3+ beds", labelShort: "3+" },
  { value: 4, label: "4+ beds", labelShort: "4+" },
  { value: 5, label: "5+ beds", labelShort: "5+" },
];

export const BATHS_OPTIONS: ReadonlyArray<{
  value: number | null;
  label: string;
  labelShort: string;
}> = [
  { value: null, label: "Any bathrooms", labelShort: "Any" },
  { value: 1, label: "1+ baths", labelShort: "1+" },
  { value: 2, label: "2+ baths", labelShort: "2+" },
  { value: 3, label: "3+ baths", labelShort: "3+" },
];

export function normalizeBeds(raw: string | undefined): number | null {
  if (!raw) return null;
  const n = parseInt(raw, 10);
  return n >= 1 && n <= 5 ? n : null;
}

export function normalizeBaths(raw: string | undefined): number | null {
  if (!raw) return null;
  const n = parseInt(raw, 10);
  return n >= 1 && n <= 3 ? n : null;
}

export function normalizeParking(raw: string | undefined): boolean {
  return raw === "1";
}
