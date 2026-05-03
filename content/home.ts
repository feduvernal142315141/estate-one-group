/**
 * Homepage seed content — bilingual.
 *
 * The three pillars below mirror BRAND.md > "Three pillars" and
 * CONTENT.md > "Three pillars (used on About + homepage)". They are
 * verifiable claims, not fabricated metrics. When real performance
 * data is collected (closings, aggregate volume), it can be added
 * alongside or in place of these pillars without retracting any
 * previously published number.
 */

export type LocalizedString = { readonly en: string; readonly es: string };

export type HomePillar = {
  readonly id: string;
  readonly title: LocalizedString;
  readonly description: LocalizedString;
};

export const homePillars: readonly HomePillar[] = [
  {
    id: "off-market",
    title: {
      en: "Off-market access",
      es: "Acceso fuera de mercado",
    },
    description: {
      en: "We work with sellers and buyers on properties that never reach public listings.",
      es: "Trabajamos con vendedores y compradores en propiedades que nunca llegan a las plataformas públicas.",
    },
  },
  {
    id: "architectural-focus",
    title: {
      en: "Architectural focus",
      es: "Enfoque arquitectónico",
    },
    description: {
      en: "Year built, architect, materials, structural integrity — we evaluate homes the way a buyer should.",
      es: "Año, arquitecto, materiales, integridad estructural — evaluamos las propiedades como un comprador debería.",
    },
  },
  {
    id: "bilingual",
    title: {
      en: "Bilingual fluency",
      es: "Fluidez bilingüe",
    },
    description: {
      en: "Miami's most interesting buyers and sellers move between English and Spanish without thinking. So do we.",
      es: "Los compradores y vendedores más interesantes de Miami se mueven entre inglés y español sin pensarlo. Nosotros también.",
    },
  },
] as const;
