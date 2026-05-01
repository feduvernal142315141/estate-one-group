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
  tour3dUrl?: string;
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
    address: {
      city: 'Sunny Isles Beach',
      state: 'FL',
      neighborhood: 'Sunny Isles Beach',
    },
    approximate: { lat: 25.9495, lng: -80.1234 },
    images: [
      { url: '/images/properties/villa-aurora-cover.jpg', alt: { en: 'Villa Aurora exterior at golden hour', es: 'Exterior de Villa Aurora al atardecer' }, position: 0, isCover: true },
    ],
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
    address: {
      city: 'Miami',
      state: 'FL',
      neighborhood: 'Edgewater',
    },
    approximate: { lat: 25.7948, lng: -80.1864 },
    images: [
      { url: '/images/properties/atelier-cover.jpg', alt: { en: 'The Atelier living space with bay view', es: 'Espacio principal de The Atelier con vista a la bahía' }, position: 0, isCover: true },
    ],
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
];
