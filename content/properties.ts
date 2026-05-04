import type { Tour } from "@/lib/virtual-tour";

export interface PropertyImage {
  url: string;
  alt: { en: string; es: string };
  position: number;
  isCover: boolean;
}

export interface Property {
  id: string;
  slug: string;
  status: 'active' | 'pending' | 'sold' | 'off_market';

  title: { en: string; es: string };
  description: { en: string; es: string };

  price: number;
  currency: 'USD';
  type: 'house' | 'condo' | 'townhouse' | 'penthouse' | 'estate' | 'land';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize?: number;
  yearBuilt?: number;
  garageSpaces?: number;

  address: {
    street?: string;
    city: string;
    state: 'FL';
    zip?: string;
    neighborhood: string;
  };
  approximate: { lat: number; lng: number };
  exact?: { lat: number; lng: number };

  images: PropertyImage[];
  videoUrl?: string;
  /** @deprecated Use `tour` (Tour discriminated union). Will be removed once all listings migrate. */
  tour3dUrl?: string;
  tour?: Tour;
  floorPlanUrls?: string[];

  features: string[];
  badge?: 'exclusive' | 'just_listed' | 'prime' | 'sold';

  agentId: string;

  createdAt: string;
  updatedAt: string;
}

// TODO Sprint 1: replace placeholder image paths when commissioned photography arrives
export const seedProperties: Property[] = [
  {
    id: 'villa-aurora',
    slug: 'villa-aurora',
    status: 'active',
    title: {
      en: 'Villa Aurora',
      es: 'Villa Aurora',
    },
    description: {
      en: `Sunlight enters Villa Aurora through floor-to-ceiling glass that disappears into the walls — a deliberate choice by the residence's architect, who designed the home to dissolve the boundary between interior and the Atlantic.

Built in 2021 with a poured-concrete shell and Italian travertine throughout, the home spans 5,800 square feet across two levels, including a 60-foot infinity edge pool that reads as continuous with the ocean horizon.

Sunny Isles Beach has become a quiet alternative to South Beach for owners who value privacy. Bal Harbour Shops, the K-12 RASG Hebrew Academy, and a private marina are within four minutes by car.

Properties of this provenance trade rarely. Villa Aurora is offered for the first time since its completion.`,
      es: `La luz natural entra a Villa Aurora a través de cristales de piso a techo que desaparecen en las paredes — una decisión consciente del arquitecto, quien diseñó la residencia para diluir el límite entre el interior y el Atlántico.

Construida en 2021 con una estructura de hormigón vertido y travertino italiano en todo el espacio, la residencia se extiende sobre 539 metros cuadrados en dos niveles, e incluye una piscina infinity de 18 metros que se percibe continua con el horizonte oceánico.

Sunny Isles Beach se ha convertido en una alternativa discreta a South Beach para propietarios que valoran la privacidad. Bal Harbour Shops, la academia RASG Hebrew K-12 y una marina privada se encuentran a cuatro minutos en automóvil.

Propiedades de esta procedencia rara vez salen al mercado. Villa Aurora se ofrece por primera vez desde su finalización.`,
    },
    price: 425000000,
    currency: 'USD',
    type: 'estate',
    bedrooms: 5,
    bathrooms: 6,
    sqft: 5800,
    lotSize: 12500,
    yearBuilt: 2021,
    garageSpaces: 3,
    address: {
      city: 'Sunny Isles Beach',
      state: 'FL',
      neighborhood: 'Sunny Isles Beach',
    },
    approximate: { lat: 25.9495, lng: -80.1234 },
    images: [
      { url: '/images/properties/villa-aurora-cover.jpg', alt: { en: 'Villa Aurora exterior at golden hour', es: 'Exterior de Villa Aurora al atardecer' }, position: 0, isCover: true },
    ],
    // TODO: replace with the Kuula share id from the Villa Aurora upload (kuula.co/share/<id>).
    tour: { provider: 'kuula', id: '7l9bL' },
    features: ['oceanfront', 'pool', 'smart_home', 'private_marina', 'wine_cellar'],
    badge: 'exclusive',
    agentId: 'adiel',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-01-01T00:00:00Z',
  },
  {
    id: 'the-atelier',
    slug: 'the-atelier',
    status: 'active',
    title: {
      en: 'The Atelier',
      es: 'The Atelier',
    },
    description: {
      en: `On the 47th floor of an Edgewater landmark, The Atelier is a residence in the literal sense — a home built around a working artist's studio, with northern light, 14-foot ceilings, and a 1,200-square-foot terrace that frames Biscayne Bay.

The interior was designed in collaboration with a Milan-based studio. Materials include hand-troweled Venetian plaster, white oak floors with ebony inlays, and a custom kitchen by Boffi.

Edgewater is Miami's quietest creative district. Wynwood and the Design District are minutes away; the airport is reachable in fifteen.

A residence for someone who needs space to think, alone, with a view.`,
      es: `En el piso 47 de un edificio emblemático de Edgewater, The Atelier es una residencia en el sentido literal de la palabra — un hogar construido alrededor del estudio de un artista, con luz del norte, techos de 4 metros, y una terraza de 111 metros cuadrados que enmarca la bahía Biscayne.

El interior fue diseñado en colaboración con un estudio de Milán. Los materiales incluyen estuco veneciano aplicado a mano, pisos de roble blanco con incrustaciones de ébano, y una cocina personalizada de Boffi.

Edgewater es el distrito creativo más tranquilo de Miami. Wynwood y el Design District quedan a minutos; el aeropuerto está a quince.

Una residencia para alguien que necesita espacio para pensar, en soledad, con una vista.`,
    },
    price: 289000000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2400,
    yearBuilt: 2018,
    garageSpaces: 2,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Edgewater',
    },
    approximate: { lat: 25.7948, lng: -80.1864 },
    images: [
      { url: '/images/properties/atelier-cover.jpg', alt: { en: 'The Atelier living space with bay view', es: 'Espacio principal de The Atelier con vista a la bahía' }, position: 0, isCover: true },
    ],
    // TODO: replace with the Kuula share id from The Atelier upload (kuula.co/share/<id>).
    tour: { provider: 'kuula', id: '7l9bL' },
    features: ['bay_view', 'high_ceilings', 'private_terrace', 'concierge'],
    badge: 'just_listed',
    agentId: 'adiel',
    createdAt: '2026-01-15T00:00:00Z',
    updatedAt: '2026-01-15T00:00:00Z',
  },
  {
    id: 'casa-del-mar',
    slug: 'casa-del-mar',
    status: 'active',
    title: {
      en: 'Casa del Mar',
      es: 'Casa del Mar',
    },
    description: {
      en: `Casa del Mar sits on a third of an acre on a guard-gated street in Coral Gables, behind a wall of mature banyan trees that have grown together over a century.

The house itself is a 1932 Mediterranean Revival, restored in 2019 by a preservation-focused firm that retained the original cast-stone fireplaces, hand-hewn cypress beams, and barrel-tile roof while replacing every system inside the walls.

Coral Gables is South Florida's most enduring address. The Riviera Country Club is two blocks away, the Biltmore three.

A house with provenance, restored to last another hundred years.`,
      es: `Casa del Mar se encuentra sobre un tercio de acre, en una calle privada de Coral Gables, detrás de un muro de banyans maduros que han crecido entrelazados durante un siglo.

La residencia es un Mediterranean Revival de 1932, restaurado en 2019 por una firma especializada en preservación que conservó las chimeneas originales de piedra fundida, las vigas de ciprés talladas a mano, y el techo de tejas de barril, mientras reemplazaba cada sistema interno de la casa.

Coral Gables es la dirección más perdurable del sur de Florida. El Riviera Country Club queda a dos cuadras, el Biltmore a tres.

Una casa con procedencia, restaurada para perdurar otros cien años.`,
    },
    price: 675000000,
    currency: 'USD',
    type: 'estate',
    bedrooms: 7,
    bathrooms: 8,
    sqft: 9200,
    lotSize: 14500,
    yearBuilt: 1932,
    garageSpaces: 3,
    address: {
      city: 'Coral Gables',
      state: 'FL',
      neighborhood: 'Coral Gables',
    },
    approximate: { lat: 25.7215, lng: -80.2684 },
    images: [
      { url: '/images/properties/casa-del-mar-cover.jpg', alt: { en: 'Casa del Mar facade with banyan trees', es: 'Fachada de Casa del Mar con banyans' }, position: 0, isCover: true },
    ],
    features: ['historic', 'pool', 'gardens', 'gated', 'wine_cellar', 'guest_house'],
    badge: 'prime',
    agentId: 'adiel',
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: '2026-02-01T00:00:00Z',
  },
  {
    id: 'continuum-sky',
    slug: 'continuum-sky',
    status: 'active',
    title: {
      en: 'Continuum Sky',
      es: 'Continuum Sky',
    },
    description: {
      en: `The full top floor of Continuum North, with private elevator access and a 360-degree view that includes the Atlantic, Government Cut, and the Miami skyline.

The 6,400-square-foot residence has been opened up from the original four-bedroom layout to three primary suites, each with its own terrace, plus a study with a private balcony facing Fisher Island.

South of Fifth has become Miami's most discreet neighborhood. The South Pointe Park promenade is two minutes on foot.

A penthouse for someone who has earned the view.`,
      es: `El piso completo en el último nivel de Continuum North, con acceso de elevador privado y una vista de 360 grados que abarca el Atlántico, Government Cut, y el skyline de Miami.

La residencia de 595 metros cuadrados se reconfiguró del diseño original de cuatro habitaciones, a tres suites principales — cada una con su propia terraza — más un estudio con balcón privado que mira hacia Fisher Island.

South of Fifth se ha convertido en el barrio más discreto de Miami. El paseo de South Pointe Park queda a dos minutos a pie.

Un penthouse para alguien que ha ganado la vista.`,
    },
    price: 820000000,
    currency: 'USD',
    type: 'penthouse',
    bedrooms: 3,
    bathrooms: 4.5,
    sqft: 6400,
    yearBuilt: 2008,
    garageSpaces: 2,
    address: {
      city: 'Miami Beach',
      state: 'FL',
      neighborhood: 'South of Fifth',
    },
    approximate: { lat: 25.7705, lng: -80.1340 },
    images: [
      { url: '/images/properties/continuum-cover.jpg', alt: { en: 'Continuum Sky penthouse view at dusk', es: 'Vista del penthouse Continuum Sky al atardecer' }, position: 0, isCover: true },
    ],
    features: ['oceanfront', 'penthouse', 'private_elevator', 'multiple_terraces', 'concierge'],
    badge: 'exclusive',
    agentId: 'adiel',
    createdAt: '2026-02-15T00:00:00Z',
    updatedAt: '2026-02-15T00:00:00Z',
  },
  {
    id: 'banyan-house',
    slug: 'banyan-house',
    status: 'active',
    title: {
      en: 'Banyan House',
      es: 'Banyan House',
    },
    description: {
      en: `Banyan House is a 2014 architectural home tucked into a half-acre lot in Coconut Grove, designed by a Miami firm whose principal trained under Norman Foster.

The home is organized around a courtyard with a single century-old banyan tree at its center; every primary room opens to it. The construction is concrete and glass, the materials are board-formed concrete and ipê wood.

Coconut Grove is Miami's oldest residential neighborhood. The Grove sailing club, two private K-12 schools, and the Vizcaya Museum are within walking distance.

A house for someone who values architecture as a way of life.`,
      es: `Banyan House es una residencia arquitectónica de 2014, asentada en un lote de medio acre en Coconut Grove, diseñada por una firma de Miami cuyo socio principal se formó con Norman Foster.

La casa se organiza alrededor de un patio con un solo banyan centenario en el centro; cada habitación principal se abre hacia él. La construcción es de hormigón y cristal; los materiales son hormigón con encofrado de tabla y madera de ipé.

Coconut Grove es el vecindario residencial más antiguo de Miami. El club de vela, dos colegios privados K-12, y el Museo Vizcaya quedan a distancia caminable.

Una casa para alguien que entiende la arquitectura como una forma de vida.`,
    },
    price: 340000000,
    currency: 'USD',
    type: 'house',
    bedrooms: 4,
    bathrooms: 4.5,
    sqft: 4200,
    lotSize: 21800,
    yearBuilt: 2014,
    garageSpaces: 2,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Coconut Grove',
    },
    approximate: { lat: 25.7281, lng: -80.2435 },
    images: [
      { url: '/images/properties/banyan-cover.jpg', alt: { en: 'Banyan House courtyard with century-old tree', es: 'Patio de Banyan House con árbol centenario' }, position: 0, isCover: true },
    ],
    features: ['architectural', 'courtyard', 'pool', 'mature_trees', 'gated'],
    badge: 'just_listed',
    agentId: 'adiel',
    createdAt: '2026-03-01T00:00:00Z',
    updatedAt: '2026-03-01T00:00:00Z',
  },
  {
    id: 'brickell-heights-24',
    slug: 'brickell-heights-24',
    status: 'active',
    title: {
      en: 'Brickell Heights 24',
      es: 'Brickell Heights 24',
    },
    description: {
      en: `On the 24th floor of a 2019 Brickell tower, this one-bedroom residence offers unobstructed views of Biscayne Bay through floor-to-ceiling glass and a private balcony. The interior is finished in wide-plank engineered oak and honed concrete — materials chosen to age well.

Brickell is Miami's most walkable neighborhood. Mary Brickell Village, the Underline, and Brickell City Centre are within three blocks.

An entry point into a neighborhood building its next chapter.`,
      es: `En el piso 24 de una torre de Brickell de 2019, esta residencia de una habitación ofrece vistas sin obstáculos de la bahía Biscayne a través de cristales de piso a techo y un balcón privado. El interior está terminado en roble de ingeniería y hormigón pulido — materiales elegidos para envejecer bien.

Brickell es el barrio más peatonal de Miami. Mary Brickell Village, the Underline, y Brickell City Centre están a tres cuadras.

Un punto de entrada a un barrio que construye su próximo capítulo.`,
    },
    price: 38500000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 1,
    bathrooms: 1.5,
    sqft: 820,
    yearBuilt: 2019,
    garageSpaces: 1,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Brickell',
    },
    approximate: { lat: 25.7596, lng: -80.1952 },
    images: [
      { url: '/images/properties/brickell-heights-cover.jpg', alt: { en: 'Brickell Heights 24 exterior', es: 'Exterior Brickell Heights 24' }, position: 0, isCover: true },
    ],
    features: ['bay_view', 'concierge', 'private_balcony', 'gym'],
    badge: 'just_listed',
    agentId: 'adiel',
    createdAt: '2026-03-15T00:00:00Z',
    updatedAt: '2026-03-15T00:00:00Z',
  },
  {
    id: 'south-beach-residence',
    slug: 'south-beach-residence',
    status: 'active',
    title: {
      en: 'South Beach Residence',
      es: 'South Beach Residence',
    },
    description: {
      en: `On Collins Avenue in the heart of Mid-Beach, this two-bedroom unit occupies a full corner floor of a boutique twelve-story building completed in 2020. The interiors were fit out by a local studio: natural oak millwork, Calacatta countertops, a chef's kitchen with Gaggenau appliances.

The building offers a rooftop pool and gym. The beach is a four-minute walk.

A turnkey city address with no compromises.`,
      es: `En Collins Avenue en el corazón de Mid-Beach, esta unidad de dos habitaciones ocupa el piso de esquina completo de un edificio boutique de doce pisos terminado en 2020. Los interiores fueron diseñados por un estudio local: carpintería de roble natural, encimeras de Calacatta, cocina de chef con electrodomésticos Gaggenau.

El edificio ofrece piscina en la azotea y gimnasio. La playa queda a cuatro minutos caminando.

Una dirección urbana llave en mano sin compromisos.`,
    },
    price: 87500000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1240,
    yearBuilt: 2020,
    garageSpaces: 1,
    address: {
      city: 'Miami Beach',
      state: 'FL',
      neighborhood: 'Mid-Beach',
    },
    approximate: { lat: 25.8103, lng: -80.1224 },
    images: [
      { url: '/images/properties/south-beach-residence-cover.jpg', alt: { en: 'South Beach Residence exterior', es: 'Exterior South Beach Residence' }, position: 0, isCover: true },
    ],
    features: ['rooftop_pool', 'gym', 'concierge', 'private_balcony', 'doorman'],
    agentId: 'adiel',
    createdAt: '2026-03-20T00:00:00Z',
    updatedAt: '2026-03-20T00:00:00Z',
  },
  {
    id: 'wynwood-sky-loft',
    slug: 'wynwood-sky-loft',
    status: 'active',
    title: {
      en: 'Wynwood Sky Loft',
      es: 'Wynwood Sky Loft',
    },
    description: {
      en: `Two bedrooms, double-height ceilings, and a 400-square-foot terrace overlooking Wynwood's grid of painted walls. The unit was designed by the same studio behind the building's common areas — poured concrete slab exposed at the ceiling, steel pivot doors, polished concrete floors.

The Design District and the Pérez Art Museum are ten minutes by car. Wynwood Walls are two blocks north.

A loft-format residence in the city's most creative block.`,
      es: `Dos habitaciones, techos dobles en altura, y una terraza de 37 metros cuadrados con vista al cuadrícula de murales de Wynwood. La unidad fue diseñada por el mismo estudio detrás de las áreas comunes del edificio — losa de hormigón expuesta en el techo, puertas pivotantes de acero, pisos de hormigón pulido.

El Design District y el Museo de Arte Pérez quedan a diez minutos en carro. Wynwood Walls está a dos cuadras al norte.

Una residencia en formato loft en el bloque más creativo de la ciudad.`,
    },
    price: 65000000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1380,
    yearBuilt: 2022,
    garageSpaces: 1,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Wynwood',
    },
    approximate: { lat: 25.8008, lng: -80.1994 },
    images: [
      { url: '/images/properties/wynwood-sky-loft-cover.jpg', alt: { en: 'Wynwood Sky Loft exterior', es: 'Exterior Wynwood Sky Loft' }, position: 0, isCover: true },
    ],
    features: ['high_ceilings', 'private_terrace', 'rooftop_pool', 'doorman'],
    badge: 'just_listed',
    agentId: 'adiel',
    createdAt: '2026-03-25T00:00:00Z',
    updatedAt: '2026-03-25T00:00:00Z',
  },
  {
    id: 'palm-island-manor',
    slug: 'palm-island-manor',
    status: 'active',
    title: {
      en: 'Palm Island Manor',
      es: 'Palm Island Manor',
    },
    description: {
      en: `On a private island accessible only by bridge, this 8,400-square-foot Mediterranean estate was rebuilt to its foundation in 2022. The result is a home where the original 1940s archways survive alongside a commercial kitchen, a climate-controlled wine room, and a 70-foot lap pool.

Palm Island is one of Miami's most guarded addresses. Fisher Island is visible from the rear terrace. Downtown is fifteen minutes by boat.

A restoration that respected the architecture and improved everything else.`,
      es: `En una isla privada accesible solo por un puente, esta finca mediterránea de 780 metros cuadrados fue reconstruida hasta sus cimientos en 2022. El resultado es una casa donde los arcos originales de los años 40 conviven con una cocina comercial, una bodega climatizada, y una piscina lap de 21 metros.

Palm Island es una de las direcciones más resguardadas de Miami. Fisher Island es visible desde la terraza trasera. El centro queda a quince minutos en lancha.

Una restauración que respetó la arquitectura y mejoró todo lo demás.`,
    },
    price: 720000000,
    currency: 'USD',
    type: 'estate',
    bedrooms: 5,
    bathrooms: 5.5,
    sqft: 8400,
    lotSize: 18000,
    yearBuilt: 1942,
    garageSpaces: 4,
    address: {
      city: 'Miami Beach',
      state: 'FL',
      neighborhood: 'Palm Island',
    },
    approximate: { lat: 25.7835, lng: -80.1671 },
    images: [
      { url: '/images/properties/palm-island-manor-cover.jpg', alt: { en: 'Palm Island Manor exterior', es: 'Exterior Palm Island Manor' }, position: 0, isCover: true },
    ],
    features: ['waterfront', 'pool', 'wine_cellar', 'gated', 'private_dock', 'smart_home', 'guest_house'],
    badge: 'exclusive',
    agentId: 'adiel',
    createdAt: '2026-04-01T00:00:00Z',
    updatedAt: '2026-04-01T00:00:00Z',
  },
  {
    id: 'coral-gables-retreat',
    slug: 'coral-gables-retreat',
    status: 'active',
    title: {
      en: 'Coral Gables Retreat',
      es: 'Coral Gables Retreat',
    },
    description: {
      en: `Two blocks from the Miracle Mile, this 2016 new-construction house reads as a classic Coral Gables home from the street — covered arcade, barrel tile, lime plaster — and opens inside to 11-foot ceilings, an open kitchen by Sub-Zero and Wolf, and a 50-foot saltwater pool.

The Shops at Merrick Park are four blocks away. The Biltmore Hotel and golf course are within walking distance.

Traditional address, thoroughly contemporary interior.`,
      es: `A dos cuadras de Miracle Mile, esta casa de nueva construcción de 2016 luce como una residencia clásica de Coral Gables desde la calle — arcada cubierta, tejas de barril, cal — y se abre por dentro a techos de 3.3 metros, una cocina abierta de Sub-Zero y Wolf, y una piscina de agua salada de 15 metros.

The Shops at Merrick Park están a cuatro cuadras. El Hotel Biltmore y su campo de golf quedan a distancia caminable.

Dirección tradicional, interior completamente contemporáneo.`,
    },
    price: 210000000,
    currency: 'USD',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 4100,
    lotSize: 9800,
    yearBuilt: 2016,
    garageSpaces: 2,
    address: {
      city: 'Coral Gables',
      state: 'FL',
      neighborhood: 'Coral Gables',
    },
    approximate: { lat: 25.7490, lng: -80.2587 },
    images: [
      { url: '/images/properties/coral-gables-retreat-cover.jpg', alt: { en: 'Coral Gables Retreat exterior', es: 'Exterior Coral Gables Retreat' }, position: 0, isCover: true },
    ],
    features: ['pool', 'gated', 'smart_home', 'high_ceilings', 'outdoor_kitchen'],
    agentId: 'adiel',
    createdAt: '2026-04-05T00:00:00Z',
    updatedAt: '2026-04-05T00:00:00Z',
  },
  {
    id: 'aventura-circle',
    slug: 'aventura-circle',
    status: 'active',
    title: {
      en: 'Aventura Circle',
      es: 'Aventura Circle',
    },
    description: {
      en: `On the 18th floor of a full-service Aventura tower, this three-bedroom unit offers unobstructed Intracoastal Waterway views from every principal room. The kitchen was updated in 2023 with Miele appliances and book-matched stone countertops.

The building includes a spa, three pools, tennis courts, and valet parking. Aventura Mall is a four-minute walk.

Resort-quality amenities in a professionally managed building.`,
      es: `En el piso 18 de una torre de servicio completo en Aventura, esta unidad de tres habitaciones ofrece vistas sin obstáculos del Intracoastal Waterway desde cada habitación principal. La cocina fue actualizada en 2023 con electrodomésticos Miele y encimeras de piedra en libro abierto.

El edificio incluye spa, tres piscinas, canchas de tenis y estacionamiento con valet. El Aventura Mall está a cuatro minutos caminando.

Amenidades de nivel resort en un edificio bien administrado.`,
    },
    price: 92000000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 1820,
    yearBuilt: 2015,
    garageSpaces: 2,
    address: {
      city: 'Aventura',
      state: 'FL',
      neighborhood: 'Aventura',
    },
    approximate: { lat: 25.9565, lng: -80.1392 },
    images: [
      { url: '/images/properties/aventura-circle-cover.jpg', alt: { en: 'Aventura Circle building', es: 'Edificio Aventura Circle' }, position: 0, isCover: true },
    ],
    features: ['waterway_view', 'spa', 'concierge', 'tennis', 'multiple_pools', 'valet'],
    agentId: 'adiel',
    createdAt: '2026-04-08T00:00:00Z',
    updatedAt: '2026-04-08T00:00:00Z',
  },
  {
    id: 'grove-townhouse',
    slug: 'grove-townhouse',
    status: 'active',
    title: {
      en: 'Grove Townhouse',
      es: 'Grove Townhouse',
    },
    description: {
      en: `Four stories of considered living on a quiet street in Coconut Grove — a 2018 townhouse with a private roof deck, a two-car garage, and a courtyard pool. The kitchen and living areas occupy the second floor to take full advantage of the treetop elevation.

The Grove Harbour marina, two Montessori schools, and Coconut Grove Playhouse are within walking distance.

A townhouse for someone who values vertical living in an old neighborhood.`,
      es: `Cuatro pisos de vida pensada en una calle tranquila de Coconut Grove — una casa adosada de 2018 con terraza privada en la azotea, garaje para dos autos, y una piscina en el patio. La cocina y los espacios comunes ocupan el segundo piso para aprovechar la elevación entre los árboles.

La marina Grove Harbour, dos escuelas Montessori, y el Coconut Grove Playhouse quedan a distancia caminable.

Una casa adosada para quien valora la vida vertical en un barrio histórico.`,
    },
    price: 135000000,
    currency: 'USD',
    type: 'townhouse',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2900,
    yearBuilt: 2018,
    garageSpaces: 2,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Coconut Grove',
    },
    approximate: { lat: 25.7250, lng: -80.2380 },
    images: [
      { url: '/images/properties/grove-townhouse-cover.jpg', alt: { en: 'Grove Townhouse exterior', es: 'Exterior Grove Townhouse' }, position: 0, isCover: true },
    ],
    features: ['rooftop_deck', 'courtyard', 'pool', 'gated', 'smart_home'],
    badge: 'just_listed',
    agentId: 'adiel',
    createdAt: '2026-04-10T00:00:00Z',
    updatedAt: '2026-04-10T00:00:00Z',
  },
  {
    id: 'brickell-key-studio',
    slug: 'brickell-key-studio',
    status: 'active',
    title: {
      en: 'Brickell Key Studio',
      es: 'Brickell Key Studio',
    },
    description: {
      en: `A 620-square-foot studio on Brickell Key, a private island in Biscayne Bay connected to Brickell by a single bridge. The unit has been renovated with polished concrete floors, built-in storage, and floor-to-ceiling glass that captures the bay on three sides.

The island has a 1.1-mile walking path around its perimeter, a hotel, and a marina. Brickell's restaurants are a three-minute drive.

A small residence in one of Miami's most coveted locations.`,
      es: `Un estudio de 58 metros cuadrados en Brickell Key, una isla privada en la bahía Biscayne conectada a Brickell por un único puente. La unidad ha sido renovada con pisos de hormigón pulido, almacenamiento integrado, y cristales de piso a techo que capturan la bahía en tres lados.

La isla cuenta con un sendero de 1.7 km alrededor de su perímetro, un hotel y una marina. Los restaurantes de Brickell quedan a tres minutos en carro.

Una residencia pequeña en una de las ubicaciones más codiciadas de Miami.`,
    },
    price: 35000000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 0,
    bathrooms: 1,
    sqft: 620,
    yearBuilt: 2001,
    garageSpaces: 1,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Brickell Key',
    },
    approximate: { lat: 25.7651, lng: -80.1892 },
    images: [
      { url: '/images/properties/brickell-key-studio-cover.jpg', alt: { en: 'Brickell Key Studio view', es: 'Vista Brickell Key Studio' }, position: 0, isCover: true },
    ],
    features: ['bay_view', 'concierge', 'gym', 'private_island', 'marina_access'],
    agentId: 'adiel',
    createdAt: '2026-04-12T00:00:00Z',
    updatedAt: '2026-04-12T00:00:00Z',
  },
  {
    id: 'pinecrest-estate',
    slug: 'pinecrest-estate',
    status: 'active',
    title: {
      en: 'Pinecrest Estate',
      es: 'Pinecrest Estate',
    },
    description: {
      en: `On a fully private one-acre lot in Pinecrest, this six-bedroom compound includes the main house, a detached guest residence, a full cabana, and an outdoor kitchen beside a 60-foot pool. The main house was built in 2017 and finished by a firm whose prior work includes a Bal Harbour private club.

Pinecrest is Miami's quietest suburb with its most consistent public schools. The Deering Estate is three miles south.

An estate built without compromise, in a neighborhood that values permanence.`,
      es: `En un lote completamente privado de un acre en Pinecrest, este conjunto de seis habitaciones incluye la casa principal, una residencia de huéspedes independiente, una cabana completa, y una cocina exterior junto a una piscina de 18 metros. La casa principal fue construida en 2017 y terminada por una firma cuyo trabajo previo incluye un club privado en Bal Harbour.

Pinecrest es el suburbio más tranquilo de Miami con las mejores escuelas públicas. El Deering Estate queda a tres millas al sur.

Una finca construida sin compromisos, en un barrio que valora la permanencia.`,
    },
    price: 450000000,
    currency: 'USD',
    type: 'estate',
    bedrooms: 6,
    bathrooms: 7,
    sqft: 8800,
    lotSize: 43560,
    yearBuilt: 2017,
    garageSpaces: 4,
    address: {
      city: 'Pinecrest',
      state: 'FL',
      neighborhood: 'Pinecrest',
    },
    approximate: { lat: 25.6646, lng: -80.3065 },
    images: [
      { url: '/images/properties/pinecrest-estate-cover.jpg', alt: { en: 'Pinecrest Estate exterior', es: 'Exterior Pinecrest Estate' }, position: 0, isCover: true },
    ],
    features: ['pool', 'guest_house', 'outdoor_kitchen', 'gated', 'smart_home', 'wine_cellar', 'generator'],
    badge: 'prime',
    agentId: 'adiel',
    createdAt: '2026-04-14T00:00:00Z',
    updatedAt: '2026-04-14T00:00:00Z',
  },
  {
    id: 'south-beach-mid-century',
    slug: 'south-beach-mid-century',
    status: 'active',
    title: {
      en: 'South Beach Mid-Century',
      es: 'South Beach Mid-Century',
    },
    description: {
      en: `On the fourth floor of a restored 1950 Ocean Drive building, this one-bedroom unit has been updated with period-appropriate terrazzo floors, jalousie windows, and custom millwork that respects the original architecture. It is the result of a careful, unhurried restoration.

Ocean Drive, Lummus Park, and the beach are directly below.

A South Beach address for someone who understands what South Beach actually is.`,
      es: `En el cuarto piso de un edificio restaurado de 1950 en Ocean Drive, esta unidad de una habitación ha sido actualizada con pisos de terrazo de época, ventanas de celosía, y carpintería personalizada que respeta la arquitectura original. Es el resultado de una restauración cuidadosa y sin prisa.

Ocean Drive, Lummus Park, y la playa están directamente abajo.

Una dirección de South Beach para alguien que entiende lo que South Beach realmente es.`,
    },
    price: 48500000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 1,
    bathrooms: 1,
    sqft: 780,
    yearBuilt: 1950,
    garageSpaces: 0,
    address: {
      city: 'Miami Beach',
      state: 'FL',
      neighborhood: 'South Beach',
    },
    approximate: { lat: 25.7740, lng: -80.1300 },
    images: [
      { url: '/images/properties/south-beach-mid-century-cover.jpg', alt: { en: 'South Beach Mid-Century facade', es: 'Fachada South Beach Mid-Century' }, position: 0, isCover: true },
    ],
    features: ['historic', 'ocean_view', 'art_deco'],
    agentId: 'adiel',
    createdAt: '2026-04-15T00:00:00Z',
    updatedAt: '2026-04-15T00:00:00Z',
  },
  {
    id: 'key-biscayne-villa',
    slug: 'key-biscayne-villa',
    status: 'active',
    title: {
      en: 'Key Biscayne Villa',
      es: 'Key Biscayne Villa',
    },
    description: {
      en: `A 4,600-square-foot house on a corner lot in Key Biscayne, four blocks from the beach. Built in 2008, renovated in 2022 with a new kitchen, new bathrooms, a new pool, and impact glass throughout. A house that functions like a new construction without reading as one.

Key Biscayne has one of the lowest crime rates in South Florida. The Ritz-Carlton is twelve blocks north. Crandon Park and the Virginia Key Beach are minutes away.

A serious house for a family that will use it.`,
      es: `Una casa de 427 metros cuadrados en una esquina en Key Biscayne, a cuatro cuadras de la playa. Construida en 2008, renovada en 2022 con nueva cocina, nuevos baños, nueva piscina, y cristal de impacto en toda la propiedad. Una casa que funciona como nueva construcción sin parecerlo.

Key Biscayne tiene uno de los índices de criminalidad más bajos del sur de Florida. El Ritz-Carlton está a doce cuadras al norte. Crandon Park y Virginia Key Beach quedan a minutos.

Una casa seria para una familia que la va a usar.`,
    },
    price: 320000000,
    currency: 'USD',
    type: 'house',
    bedrooms: 4,
    bathrooms: 4,
    sqft: 4600,
    lotSize: 11200,
    yearBuilt: 2008,
    garageSpaces: 2,
    address: {
      city: 'Key Biscayne',
      state: 'FL',
      neighborhood: 'Key Biscayne',
    },
    approximate: { lat: 25.6899, lng: -80.1625 },
    images: [
      { url: '/images/properties/key-biscayne-villa-cover.jpg', alt: { en: 'Key Biscayne Villa exterior', es: 'Exterior Key Biscayne Villa' }, position: 0, isCover: true },
    ],
    features: ['pool', 'gated', 'smart_home', 'impact_glass', 'outdoor_kitchen'],
    agentId: 'adiel',
    createdAt: '2026-04-18T00:00:00Z',
    updatedAt: '2026-04-18T00:00:00Z',
  },
  {
    id: 'edgewater-tower',
    slug: 'edgewater-tower',
    status: 'active',
    title: {
      en: 'Edgewater Tower',
      es: 'Edgewater Tower',
    },
    description: {
      en: `On the 31st floor of a glass tower at the water's edge of Edgewater, this three-bedroom unit has a wraparound terrace facing Biscayne Bay. The finish level is above the building standard — the current owner added Poliform cabinetry, Waterworks fixtures, and wide-plank white oak floors throughout.

Wynwood and the Design District are visible from the terrace. Edgewater is the most rapidly appreciating neighborhood on Miami's east coast.

A best-in-building unit on a best-in-neighborhood floor.`,
      es: `En el piso 31 de una torre de cristal al borde del agua en Edgewater, esta unidad de tres habitaciones tiene una terraza envolvente con vista a la bahía Biscayne. El nivel de terminaciones está por encima del estándar del edificio — el propietario actual incorporó carpintería Poliform, accesorios Waterworks, y pisos de roble blanco de tablón ancho en toda la unidad.

Wynwood y el Design District son visibles desde la terraza. Edgewater es el barrio de mayor apreciación en la costa este de Miami.

La mejor unidad del edificio en el mejor piso del barrio.`,
    },
    price: 165000000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 3.5,
    sqft: 2200,
    yearBuilt: 2020,
    garageSpaces: 2,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Edgewater',
    },
    approximate: { lat: 25.7980, lng: -80.1855 },
    images: [
      { url: '/images/properties/edgewater-tower-cover.jpg', alt: { en: 'Edgewater Tower exterior', es: 'Exterior Edgewater Tower' }, position: 0, isCover: true },
    ],
    features: ['bay_view', 'multiple_terraces', 'concierge', 'private_elevator_lobby', 'gym', 'pool'],
    badge: 'prime',
    agentId: 'adiel',
    createdAt: '2026-04-20T00:00:00Z',
    updatedAt: '2026-04-20T00:00:00Z',
  },
  {
    id: 'the-grove-house',
    slug: 'the-grove-house',
    status: 'active',
    title: {
      en: 'The Grove House',
      es: 'The Grove House',
    },
    description: {
      en: `A 2,900-square-foot house on a deep lot in Coconut Grove, one block from Main Highway. Built in 1998, renovated in 2021 with a new kitchen, a new pool, and a rear addition that added a family room and covered outdoor dining area.

The house is priced for value in a neighborhood where comparable lots are being assembled for teardowns.

A solid house in a neighborhood worth holding.`,
      es: `Una casa de 270 metros cuadrados en un lote profundo de Coconut Grove, a una cuadra de Main Highway. Construida en 1998, renovada en 2021 con nueva cocina, nueva piscina, y una adición trasera que añadió una sala familiar y área de comedor exterior cubierta.

La casa tiene precio de valor en un barrio donde los lotes comparables se están adquiriendo para demoliciones.

Una casa sólida en un barrio que vale la pena mantener.`,
    },
    price: 110000000,
    currency: 'USD',
    type: 'house',
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2900,
    lotSize: 8500,
    yearBuilt: 1998,
    garageSpaces: 2,
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Coconut Grove',
    },
    approximate: { lat: 25.7295, lng: -80.2420 },
    images: [
      { url: '/images/properties/grove-house-cover.jpg', alt: { en: 'The Grove House exterior', es: 'Exterior The Grove House' }, position: 0, isCover: true },
    ],
    features: ['pool', 'outdoor_dining', 'mature_trees', 'gated'],
    agentId: 'adiel',
    createdAt: '2026-04-22T00:00:00Z',
    updatedAt: '2026-04-22T00:00:00Z',
  },
  {
    id: 'miami-beach-terrace',
    slug: 'miami-beach-terrace',
    status: 'active',
    title: {
      en: 'Miami Beach Terrace',
      es: 'Miami Beach Terrace',
    },
    description: {
      en: `Two bedrooms and a 600-square-foot wraparound terrace on the top floor of a boutique eight-unit building in the North Beach Architectural District. The building was designed by a Miami Beach-based firm completed in 2019 — each of its eight units has a distinct plan.

The beach is three blocks east. The Faena District is four blocks south.

A penthouse-format unit at a non-penthouse price.`,
      es: `Dos habitaciones y una terraza envolvente de 55 metros cuadrados en el último piso de un edificio boutique de ocho unidades en el Distrito Arquitectónico de North Beach. El edificio fue diseñado por una firma local y terminado en 2019 — cada una de sus ocho unidades tiene un plano distinto.

La playa está a tres cuadras al este. El Faena District, a cuatro cuadras al sur.

Una unidad en formato penthouse a precio que no lo es.`,
    },
    price: 130000000,
    currency: 'USD',
    type: 'condo',
    bedrooms: 2,
    bathrooms: 2.5,
    sqft: 1680,
    yearBuilt: 2019,
    garageSpaces: 1,
    address: {
      city: 'Miami Beach',
      state: 'FL',
      neighborhood: 'North Beach',
    },
    approximate: { lat: 25.8290, lng: -80.1204 },
    images: [
      { url: '/images/properties/miami-beach-terrace-cover.jpg', alt: { en: 'Miami Beach Terrace top floor', es: 'Último piso Miami Beach Terrace' }, position: 0, isCover: true },
    ],
    features: ['wraparound_terrace', 'ocean_view', 'rooftop_pool', 'boutique_building'],
    agentId: 'adiel',
    createdAt: '2026-04-25T00:00:00Z',
    updatedAt: '2026-04-25T00:00:00Z',
  },
  {
    id: 'fort-lauderdale-canal',
    slug: 'fort-lauderdale-canal',
    status: 'active',
    title: {
      en: 'Fort Lauderdale Canal',
      es: 'Fort Lauderdale Canal',
    },
    description: {
      en: `On a deep-water canal in Fort Lauderdale's Harbor Beach neighborhood, this four-bedroom house has 90 feet of water frontage and a private dock suited to a 50-foot vessel. The interior was renovated in 2021 with an open kitchen, a new primary suite, and impact glass throughout.

The Intracoastal, the ocean inlet, and the marina are within minutes by boat. Fort Lauderdale-Hollywood International Airport is twenty minutes by car.

A serious waterfront house at a South Florida price.`,
      es: `En un canal de agua profunda en el barrio Harbor Beach de Fort Lauderdale, esta casa de cuatro habitaciones tiene 27 metros de frente al agua y un muelle privado para embarcaciones de hasta 15 metros. El interior fue renovado en 2021 con cocina abierta, suite principal nueva, y cristal de impacto en toda la propiedad.

El Intracoastal, la entrada oceánica y la marina están a minutos en lancha. El aeropuerto Fort Lauderdale-Hollywood queda a veinte minutos en carro.

Una verdadera casa frente al agua a precio de sur de Florida.`,
    },
    price: 98000000,
    currency: 'USD',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3200,
    lotSize: 9600,
    yearBuilt: 2005,
    garageSpaces: 2,
    address: {
      city: 'Fort Lauderdale',
      state: 'FL',
      neighborhood: 'Harbor Beach',
    },
    approximate: { lat: 26.1004, lng: -80.1031 },
    images: [
      { url: '/images/properties/fort-lauderdale-canal-cover.jpg', alt: { en: 'Fort Lauderdale Canal house', es: 'Casa Fort Lauderdale Canal' }, position: 0, isCover: true },
    ],
    features: ['waterfront', 'private_dock', 'pool', 'impact_glass', 'outdoor_kitchen'],
    agentId: 'adiel',
    createdAt: '2026-04-28T00:00:00Z',
    updatedAt: '2026-04-28T00:00:00Z',
  },
];
