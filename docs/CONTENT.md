# CONTENT.md — Real bilingual copy (EN / ES)

> Use this as the source of truth for text content during the refactor. Replace any placeholder Lorem Ipsum or template defaults with what's here. When new copy is needed, follow the patterns in `BRAND.md`.

## Brand strings

```json
{
  "brand": {
    "name": "Estate One Group",
    "tagline_en": "Where luxury becomes home.",
    "tagline_es": "Donde el lujo se convierte en hogar.",
    "shortDescription_en": "Discreet luxury real estate in South Florida.",
    "shortDescription_es": "Bienes raíces de lujo, con discreción, en el sur de Florida."
  }
}
```

## Navigation

| Key | EN | ES |
|---|---|---|
| `nav.home` | Home | Inicio |
| `nav.properties` | Properties | Propiedades |
| `nav.neighborhoods` | Neighborhoods | Zonas |
| `nav.services` | Services | Servicios |
| `nav.journal` | Journal | Diario |
| `nav.about` | The Firm | La Firma |
| `nav.contact` | Contact | Contacto |
| `nav.scheduleConsultation` | Schedule Consultation | Agende una asesoría |
| `nav.clientLogin` | Client Login | Acceso de Clientes |

## Hero (homepage)

### English
- **Eyebrow:** `MIAMI · SOUTH FLORIDA`
- **Headline (line 1, italic, cream):** `Where luxury`
- **Headline (line 2, italic, gold):** `becomes home.`
- **Subhead:** `A curated portfolio of South Florida's most extraordinary residences, presented by advisors who understand that a home is the most personal investment of all.`
- **CTA primary:** `EXPLORE THE COLLECTION`
- **CTA ghost:** `SCHEDULE A PRIVATE TOUR →`
- **Featured pill:** `FEATURED RESIDENCE` / `Villa Aurora · Sunny Isles`
- **Scroll cue:** `SCROLL`

### Spanish
- **Eyebrow:** `MIAMI · SUR DE FLORIDA`
- **Headline (line 1, italic, cream):** `Donde el lujo`
- **Headline (line 2, italic, gold):** `se convierte en hogar.`
- **Subhead:** `Un portafolio curado de las residencias más extraordinarias del sur de Florida, presentado por asesores que comprenden que un hogar es la inversión más personal de todas.`
- **CTA primary:** `EXPLORAR LA COLECCIÓN`
- **CTA ghost:** `AGENDE UNA VISITA PRIVADA →`
- **Featured pill:** `RESIDENCIA DESTACADA` / `Villa Aurora · Sunny Isles`
- **Scroll cue:** `EXPLORE`

## Floating search

| Key | EN | ES |
|---|---|---|
| `search.location` | Location | Ubicación |
| `search.lifestyle` | Lifestyle | Estilo de vida |
| `search.price` | Price | Precio |
| `search.bedrooms` | Bedrooms | Habitaciones |
| `search.placeholder.location` | Miami Beach, FL | Miami Beach, FL |
| `search.placeholder.lifestyle` | Waterfront · Penthouse · Estate | Frente al mar · Penthouse · Estate |
| `search.placeholder.price` | $1M — Unlimited | $1M — Sin límite |
| `search.placeholder.bedrooms` | Any | Cualquiera |
| `search.submit` | Discover | Descubrir |

## "The Collection" section header (homepage)

### EN
- **Eyebrow:** `THE COLLECTION`
- **Headline:** *Extraordinary residences, thoughtfully curated.*
- **Description:** `Each property in our portfolio is selected for its architectural distinction, location, and the lifestyle it offers — never for volume.`
- **CTA:** `VIEW THE FULL COLLECTION`

### ES
- **Eyebrow:** `LA COLECCIÓN`
- **Headline:** *Residencias extraordinarias, cuidadosamente seleccionadas.*
- **Description:** `Cada propiedad en nuestro portafolio se elige por su distinción arquitectónica, su ubicación y el estilo de vida que ofrece — nunca por volumen.`
- **CTA:** `VER LA COLECCIÓN COMPLETA`

## Property seed data (5 listings for MVP)

```ts
// content/properties.ts
import { Property } from '@/types/property';

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
    price: 425000000, // cents → $4,250,000
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
      // TODO: replace with commissioned photography
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
```

## Neighborhood profiles (for `/neighborhoods/[slug]`)

### Sunny Isles Beach (EN)
> Quiet by Miami standards, oceanfront by any standard. Sunny Isles is a long, narrow stretch of beach between Aventura and Bal Harbour, characterized by tall residential towers built in the last fifteen years. Owners are typically international, often year-round in winter and absent in summer. Bal Harbour Shops anchors the south end; the Newport Beachside Hotel anchors the north.

### Sunny Isles Beach (ES)
> Tranquilo según los estándares de Miami; frente al mar según cualquier estándar. Sunny Isles es un tramo largo y angosto de playa entre Aventura y Bal Harbour, caracterizado por torres residenciales altas construidas en los últimos quince años. Los propietarios suelen ser internacionales, presentes durante el invierno y ausentes en verano. Bal Harbour Shops ancla el extremo sur; el Newport Beachside Hotel ancla el norte.

### Coral Gables (EN)
> Coral Gables is South Florida's most enduring address. Founded in 1925 as a planned Mediterranean-style city, it has resisted the high-rise era almost entirely; the result is a low, walkable, tree-canopied municipality with the highest concentration of historic homes in the region. The Biltmore Hotel and the Riviera Country Club are the social anchors.

### Coral Gables (ES)
> Coral Gables es la dirección más perdurable del sur de Florida. Fundada en 1925 como una ciudad planificada de estilo mediterráneo, ha resistido casi por completo la era de los rascacielos; el resultado es una municipalidad baja, caminable y arbolada, con la mayor concentración de casas históricas de la región. El Hotel Biltmore y el Riviera Country Club son sus anclas sociales.

### Edgewater (EN)
> Edgewater is the quieter half of Miami's bayfront. North of Downtown and west of Wynwood, the neighborhood has gained a series of architecturally significant residential towers over the past decade. The Margaret Pace Park sits on the bay; the area is walkable to Wynwood and the Design District.

### Edgewater (ES)
> Edgewater es la mitad tranquila del bayfront de Miami. Al norte del centro y al oeste de Wynwood, el barrio ha sumado una serie de torres residenciales arquitectónicamente significativas en la última década. El Margaret Pace Park está a orillas de la bahía; el área es caminable hacia Wynwood y el Design District.

### South of Fifth (EN)
> South of Fifth — locally known as SoFi — is the small, residential southern tip of South Beach, separated from the rest of the island by Fifth Street and a noticeable shift in pace. The neighborhood is anchored by South Pointe Park, the Joe's Stone Crab restaurant, and a handful of well-known residential towers including Continuum and Apogee.

### South of Fifth (ES)
> South of Fifth — conocido localmente como SoFi — es la punta sur, residencial y pequeña, de South Beach, separada del resto de la isla por la calle Quinta y un notable cambio de ritmo. El barrio está anclado por South Pointe Park, el restaurante Joe's Stone Crab, y un puñado de torres residenciales reconocidas como Continuum y Apogee.

### Coconut Grove (EN)
> Coconut Grove is Miami's oldest residential neighborhood, established in the 1870s by Bahamian settlers. The character today is part old-Florida, part academic (the University of Miami is adjacent), part bohemian. The waterfront is dotted with sailing clubs; the streets are canopied with ficus and live oak.

### Coconut Grove (ES)
> Coconut Grove es el vecindario residencial más antiguo de Miami, fundado en la década de 1870 por colonos bahameños. El carácter actual es en parte Florida histórica, en parte académico (la Universidad de Miami queda contigua), en parte bohemio. El frente costero está salpicado de clubes de vela; las calles están cubiertas por copas de ficus y robles vivos.

## About / The Firm page

### EN
**Eyebrow:** `THE FIRM`
**Headline:** *A practice, not a portal.*
**Body (4 paragraphs):**
> Estate One Group is a small, founder-led real estate practice in South Florida. We work with a limited number of clients each year, by introduction.
>
> The work is straightforward: we identify residences worth owning — often before they are publicly listed — and we represent the people who own them with discretion and architectural literacy. We do not chase volume.
>
> Our practice is bilingual by design. Miami's most interesting buyers and sellers move between English and Spanish without thinking, and so do we.
>
> If you have read this far, we would be glad to meet.

**CTA:** `Schedule a conversation →`

### ES
**Eyebrow:** `LA FIRMA`
**Headline:** *Una práctica, no un portal.*
**Body:**
> Estate One Group es una práctica pequeña, dirigida por sus fundadores, de bienes raíces en el sur de Florida. Trabajamos con un número limitado de clientes cada año, por referencia.
>
> El trabajo es simple: identificamos residencias que vale la pena poseer — a menudo antes de que se listen públicamente — y representamos a quienes las poseen con discreción y comprensión arquitectónica. No perseguimos volumen.
>
> Nuestra práctica es bilingüe por diseño. Los compradores y vendedores más interesantes de Miami se mueven entre inglés y español sin pensarlo, y nosotros también.
>
> Si ha llegado hasta aquí, nos dará gusto conocerlo.

**CTA:** `Agendar una conversación →`

## Three pillars (used on About + homepage)

| EN | ES |
|---|---|
| Off-Market Access | Acceso Fuera de Mercado |
| Architectural Literacy | Comprensión Arquitectónica |
| Discretion | Discreción |

## Forms (lead capture)

### Contact form labels

| Field | EN | ES |
|---|---|---|
| Name | Full name | Nombre completo |
| Email | Email address | Correo electrónico |
| Phone | Phone (optional) | Teléfono (opcional) |
| Intent | I am interested in… | Me interesa… |
| Buying | Buying a residence | Comprar una residencia |
| Selling | Selling a residence | Vender una residencia |
| Consulting | A consultation | Una asesoría |
| Tour | Touring a property | Visitar una propiedad |
| Message | Message (optional) | Mensaje (opcional) |
| Submit | Send Message | Enviar Mensaje |
| Success | Thank you. We will be in touch within 24 hours. | Gracias. Nos pondremos en contacto dentro de 24 horas. |
| Error | Something went wrong. Please try again or email us directly. | Algo salió mal. Intente nuevamente o escríbanos directamente. |

### Schedule tour modal

**EN headline:** *Visit this residence.*
**EN sub:** `Tours are arranged privately, by appointment. Submit your details and we will be in touch to confirm.`

**ES headline:** *Visite esta residencia.*
**ES sub:** `Las visitas se organizan de forma privada, por cita. Comparta sus datos y nos pondremos en contacto para confirmar.`

## Footer

### Column groups

| Group | Items EN | Items ES |
|---|---|---|
| Properties | All listings · By neighborhood · Off-market access | Todas las propiedades · Por zona · Acceso fuera de mercado |
| Firm | The Firm · The Journal · Contact | La Firma · El Diario · Contacto |
| Contact | +1 (xxx) xxx-xxxx · adiel@estateonegroup.com · Miami, FL | +1 (xxx) xxx-xxxx · adiel@estateonegroup.com · Miami, FL |

### Newsletter

| Field | EN | ES |
|---|---|---|
| Heading | Receive our quarterly journal | Reciba nuestro diario trimestral |
| Sub | A short letter, four times a year, on the South Florida market and selected residences. | Una carta breve, cuatro veces al año, sobre el mercado del sur de Florida y residencias seleccionadas. |
| Placeholder | your@email.com | su@correo.com |
| Submit | Subscribe → | Suscribirse → |

### Bottom strip

| EN | ES |
|---|---|
| © 2026 Estate One Group · All rights reserved | © 2026 Estate One Group · Todos los derechos reservados |
| Privacy · Terms · Sitemap | Privacidad · Términos · Mapa del sitio |

## Error / empty states

### 404 page

**EN:**
- **Eyebrow:** `404`
- **Headline:** *This page could not be found.*
- **Sub:** `The link may have been moved, or the page may no longer exist.`
- **CTA:** `Return to Homepage →`

**ES:**
- **Eyebrow:** `404`
- **Headline:** *Esta página no se pudo encontrar.*
- **Sub:** `El enlace puede haber sido movido, o la página puede ya no existir.`
- **CTA:** `Volver al inicio →`

### Empty filter results

**EN:** *No residences match these filters.* / `Try adjusting your criteria, or [contact us] for off-market opportunities.`

**ES:** *Ninguna residencia coincide con estos filtros.* / `Pruebe ajustar sus criterios, o [contáctenos] para oportunidades fuera de mercado.`

## Lead notification email (sent to Adiel via Resend)

**Subject (EN):** `New inquiry from [Name] · [Property name]`
**Subject (ES):** `Nueva consulta de [Nombre] · [Nombre de propiedad]`

```
Name: [name]
Email: [email]
Phone: [phone or —]
Source: [property page / contact / tour request]
Property: [property slug or —]
Intent: [buying / selling / consulting / tour]
Language: [en / es]

Message:
[message or —]

—
Sent from estateonegroup.com on [timestamp]
```

## Things still missing (to gather before launch)

- [ ] Real founders bio (Adiel + co-founder) — 80–120 words each, EN + ES
- [ ] Real phone number for the firm
- [ ] Real office address (for `/contact`)
- [ ] Real social handles (IG, LinkedIn)
- [ ] At least 3 real testimonials with permission to publish
- [ ] Real privacy policy + terms (consult a lawyer)
- [ ] Press logos if any (Forbes, Architectural Digest, etc.)
- [ ] Real property photography for the 5 seed listings (or commission)
- [ ] Decision: which domain (estateonegroup.com / .us / .group / etc.)
