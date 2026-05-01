# CONTENT.md — Real bilingual copy (EN / ES)

> Use this as the source of truth for text content during the refactor. Replace any placeholder Lorem Ipsum or template defaults with what's here. When new copy is needed, follow the patterns in `BRAND.md`.

## Brand strings

```json
{
  "brand": {
    "name": "Estate One Group",
    "tagline_en": "Miami real estate, considered.",
    "tagline_es": "Miami real estate, con criterio.",
    "shortDescription_en": "Modern real estate in South Florida. Premium homes, off-market access.",
    "shortDescription_es": "Real estate moderno en el sur de Florida. Propiedades premium, acceso fuera de mercado."
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
| `nav.scheduleConsultation` | Contact us | Contáctanos |
| `nav.clientLogin` | Client Login | Acceso de Clientes |

## Hero (homepage)

### English
- **Eyebrow:** `Miami · South Florida`
- **Headline:** `Miami real estate, considered.`
- **Subhead:** `Premium homes in Miami and South Florida. We work with a small number of clients each year, by referral.`
- **CTA primary:** `Browse Properties`
- **CTA ghost:** `Schedule a tour`

### Spanish
- **Eyebrow:** `Miami · Sur de Florida`
- **Headline:** `Miami real estate, con criterio.`
- **Subhead:** `Propiedades premium en Miami y el sur de Florida. Trabajamos con un número limitado de clientes al año, por referencia.`
- **CTA primary:** `Ver propiedades`
- **CTA ghost:** `Agendar una visita`

## Floating search

| Key | EN | ES |
|---|---|---|
| `search.location` | Location | Ubicación |
| `search.propertyType` | Property type | Tipo de propiedad |
| `search.price` | Price | Precio |
| `search.bedrooms` | Bedrooms | Habitaciones |
| `search.placeholder.location` | Miami Beach, FL | Miami Beach, FL |
| `search.placeholder.propertyType` | Condo · House · Penthouse · Estate | Condo · Casa · Penthouse · Estate |
| `search.placeholder.price` | $1M — Unlimited | $1M — Sin límite |
| `search.placeholder.bedrooms` | Any | Cualquiera |
| `search.submit` | Search | Buscar |

## Properties section (homepage)

### EN
- **Eyebrow:** `Selected homes`
- **Headline:** `Properties currently for sale.`
- **Description:** `We list a small number of homes at a time. Each one is selected for its architecture, location, and condition.`
- **CTA:** `See all properties`

### ES
- **Eyebrow:** `Propiedades seleccionadas`
- **Headline:** `Propiedades disponibles.`
- **Description:** `Presentamos un número reducido de propiedades a la vez. Cada una se elige por su arquitectura, ubicación y estado.`
- **CTA:** `Ver todas las propiedades`

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
      en: `Villa Aurora was designed by Chad Oppenheim in 2021 — poured concrete shell, Italian travertine throughout, 5,800 square feet across two levels with a 60-foot infinity pool aligned with the ocean horizon.

Sunny Isles Beach sits between Aventura and Bal Harbour. Bal Harbour Shops and a private marina are four minutes by car.

This is the first time Villa Aurora has been offered since completion.`,
      es: `Villa Aurora fue diseñada por Chad Oppenheim en 2021 — estructura de hormigón vertido, travertino italiano en todo el espacio, 539 metros cuadrados en dos niveles con una piscina infinity de 18 metros alineada con el horizonte oceánico.

Sunny Isles Beach se ubica entre Aventura y Bal Harbour. Bal Harbour Shops y una marina privada quedan a cuatro minutos en automóvil.

Es la primera vez que Villa Aurora sale al mercado desde su finalización.`,
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
      en: `On the 47th floor of an Edgewater tower, The Atelier has 14-foot ceilings, a 1,200-square-foot terrace facing Biscayne Bay, and an interior designed by a Milan-based studio — hand-troweled Venetian plaster, white oak floors with ebony inlays, custom Boffi kitchen.

Edgewater is Miami's quietest creative district. Wynwood and the Design District are minutes away.

A home for someone who needs space to think, with a view.`,
      es: `En el piso 47 de una torre emblemática de Edgewater, The Atelier tiene techos de 4 metros, una terraza de 111 metros cuadrados frente a la bahía Biscayne, y un interior diseñado por un estudio de Milán — estuco veneciano aplicado a mano, pisos de roble blanco con incrustaciones de ébano, cocina Boffi a medida.

Edgewater es el distrito creativo más tranquilo de Miami. Wynwood y el Design District quedan a minutos.

Una casa para alguien que necesita espacio para pensar, con vista.`,
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
      en: `Casa del Mar is a 1932 Mediterranean Revival on a third of an acre on a guard-gated street in Coral Gables, behind a wall of century-old banyan trees. A preservation-focused firm restored it in 2019 — the original cast-stone fireplaces, hand-hewn cypress beams, and barrel-tile roof were retained; every system inside the walls was replaced.

Coral Gables is South Florida's most enduring address. The Riviera Country Club is two blocks away, the Biltmore three.

A house with a century of history, restored to last another hundred years.`,
      es: `Casa del Mar es un Mediterranean Revival de 1932 sobre un tercio de acre en una calle privada de Coral Gables, detrás de un muro de banyans centenarios. Una firma especializada en preservación la restauró en 2019 — se conservaron las chimeneas originales de piedra fundida, las vigas de ciprés talladas a mano y el techo de tejas de barril; todos los sistemas internos fueron reemplazados.

Coral Gables es la dirección más perdurable del sur de Florida. El Riviera Country Club queda a dos cuadras, el Biltmore a tres.

Una casa con un siglo de historia, restaurada para perdurar otros cien años.`,
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
      en: `Continuum Sky occupies the full top floor of Continuum North — 6,400 square feet with private elevator access and 360-degree views of the Atlantic, Government Cut, and the Miami skyline. The original four-bedroom plan was reconfigured into three primary suites, each with its own terrace, plus a study with a private balcony facing Fisher Island.

South of Fifth is Miami's most discreet neighborhood. South Pointe Park is two minutes on foot.

A penthouse for someone who has earned the view.`,
      es: `Continuum Sky ocupa el piso completo en la cima de Continuum North — 595 metros cuadrados con acceso de elevador privado y vistas de 360 grados al Atlántico, Government Cut y el skyline de Miami. La distribución original de cuatro habitaciones fue reconfigurada en tres suites principales, cada una con su terraza, más un estudio con balcón privado frente a Fisher Island.

South of Fifth es el barrio más discreto de Miami. El paseo de South Pointe Park queda a dos minutos a pie.

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
      en: `Banyan House is a 2014 architectural home on a half-acre lot in Coconut Grove, designed by a firm whose principal trained under Norman Foster. The house is organized around a courtyard with a single century-old banyan at its center; every primary room opens to it. Construction is concrete and glass, with board-formed concrete and ipê wood throughout.

Coconut Grove is Miami's oldest residential neighborhood. The sailing club, two private K-12 schools, and the Vizcaya Museum are within walking distance.

A home for someone who understands architecture as a way of life.`,
      es: `Banyan House es una residencia arquitectónica de 2014 en un lote de medio acre en Coconut Grove, diseñada por una firma cuyo socio principal se formó con Norman Foster. La casa se organiza alrededor de un patio con un solo banyan centenario en el centro; cada habitación principal se abre hacia él. La construcción es de hormigón y cristal, con hormigón de encofrado de tabla y madera de ipé en todo el espacio.

Coconut Grove es el vecindario residencial más antiguo de Miami. El club de vela, dos colegios privados K-12 y el Museo Vizcaya quedan a distancia caminable.

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
**Eyebrow:** `The Firm`
**Headline:** `A modern real estate firm in South Florida.`
**Body (3 paragraphs):**
> Estate One Group is a small, founder-led real estate firm in South Florida. We work with a limited number of clients each year, by referral.
>
> Our work is straightforward: we identify homes worth owning — often before they are publicly listed — and we represent the people who own them. We pay attention to architecture, materials, and what makes a neighborhood matter long-term.
>
> We are bilingual by design. Miami's most interesting buyers and sellers move between English and Spanish without thinking, and so do we. If you have read this far, we would be glad to meet.

**CTA:** `Contact us`

### ES
**Eyebrow:** `La Firma`
**Headline:** `Una firma moderna de real estate en el sur de Florida.`
**Body:**
> Estate One Group es una firma pequeña de real estate en el sur de Florida, dirigida por sus fundadores. Trabajamos con un número limitado de clientes cada año, por referencia.
>
> Nuestro trabajo es simple: identificamos casas que vale la pena tener — a menudo antes de que se listen públicamente — y representamos a quienes las poseen. Prestamos atención a la arquitectura, los materiales, y lo que hace que un vecindario importe a largo plazo.
>
> Somos bilingües por diseño. Los compradores y vendedores más interesantes de Miami se mueven entre inglés y español sin pensarlo, y nosotros también. Si ha llegado hasta aquí, nos dará gusto conocerle.

**CTA:** `Contáctanos`

## Three pillars (used on About + homepage)

| EN | ES |
|---|---|
| Off-market access | Acceso fuera de mercado |
| Architectural focus | Enfoque arquitectónico |
| Bilingual fluency | Fluidez bilingüe |

## Forms (lead capture)

### Contact form labels

| Field | EN | ES |
|---|---|---|
| Name | Full name | Nombre completo |
| Email | Email address | Correo electrónico |
| Phone | Phone (optional) | Teléfono (opcional) |
| Intent | I am interested in… | Me interesa… |
| Buying | Buying a home | Comprar una casa |
| Selling | Selling a home | Vender una casa |
| Consulting | Talking to your team | Hablar con su equipo |
| Tour | Touring a property | Visitar una propiedad |
| Message | Message (optional) | Mensaje (opcional) |
| Submit | Send | Enviar |
| Success | Thank you. We'll be in touch within 24 hours. | Gracias. Le contactaremos en las próximas 24 horas. |
| Error | Something went wrong. Please try again or email us directly. | Algo salió mal. Intente nuevamente o escríbanos directamente. |

### Schedule tour modal

**EN headline:** `Visit this home.`
**EN sub:** `Tours are private, by appointment. Submit your details and we'll confirm.`

**ES headline:** `Visite esta casa.`
**ES sub:** `Las visitas son privadas, por cita. Comparta sus datos y le confirmamos.`

## Footer

### Column groups

| Group | Items EN | Items ES |
|---|---|---|
| Properties | All listings · By neighborhood · Off-market | Todas · Por zona · Fuera de mercado |
| Firm | The Firm · Journal · Contact | La Firma · Diario · Contacto |
| Contact | +1 (xxx) xxx-xxxx · adiel@estateonegroup.com · Miami, FL | +1 (xxx) xxx-xxxx · adiel@estateonegroup.com · Miami, FL |

### Newsletter

| Field | EN | ES |
|---|---|---|
| Heading | Stay updated | Manténgase informado |
| Sub | New listings, off-market opportunities, and notes on the South Florida market. Four times a year. | Nuevas propiedades, oportunidades fuera de mercado, y notas sobre el mercado del sur de Florida. Cuatro veces al año. |
| Placeholder | your@email.com | su@correo.com |
| Submit | Subscribe | Suscribirse |

### Bottom strip

| EN | ES |
|---|---|
| © 2026 Estate One Group · All rights reserved | © 2026 Estate One Group · Todos los derechos reservados |
| Privacy · Terms · Sitemap | Privacidad · Términos · Mapa del sitio |

## Error / empty states

### 404 page

**EN:**
- **Eyebrow:** `404`
- **Headline:** `Page not found.`
- **Sub:** `The link may have been moved, or the page may no longer exist.`
- **CTA:** `Back to home`

**ES:**
- **Eyebrow:** `404`
- **Headline:** `Página no encontrada.`
- **Sub:** `El enlace puede haber sido movido, o la página ya no existe.`
- **CTA:** `Volver al inicio`

### Empty filter results

**EN:** `No homes match these filters. Try adjusting your criteria, or [contact us] for off-market opportunities.`

**ES:** `No hay casas que coincidan con estos filtros. Intente ajustar los criterios, o [contáctenos] para oportunidades fuera de mercado.`

## Lead notification email (sent to firm via Resend)

**Subject (EN):** `New inquiry — [Name] — [Property name or 'general']`
**Subject (ES):** `Nueva consulta — [Nombre] — [Nombre de propiedad o 'general']`

```
Name: [name]
Email: [email]
Phone: [phone or —]
Source: [property page / contact / tour request]
Property: [property slug or —]
Intent: [buying / selling / tour / talking to team]
Language: [en / es]

Message:
[message or —]

—
Sent from estateonegroup.com on [timestamp]
```

## Things still missing (to gather before launch)

- [ ] Real founders bios — 80–120 words each, EN + ES (names and details pending decision)
- [ ] Real phone number for the firm
- [ ] Real office address (for `/contact`)
- [ ] Real social handles (IG, LinkedIn)
- [ ] At least 3 real testimonials with permission to publish
- [ ] Real privacy policy + terms (consult a lawyer)
- [ ] Real property photography for the 5 seed listings
- [ ] Domain decision: estateonegroup.com / .us / .group / etc.
