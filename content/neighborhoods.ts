export interface NeighborhoodMarker {
  en: string;
  es: string;
}

export interface Neighborhood {
  id: string;
  slug: string;
  /** Canonical name; must match `property.address.neighborhood` for cross-linking. */
  name: { en: string; es: string };
  /** ~2-line statement used on cards in the index grid. */
  blurb: { en: string; es: string };
  /** 3-paragraph editorial body for the detail page. Paragraphs separated by blank lines. */
  description: { en: string; es: string };
  /** Concrete anchors a buyer would care about — landmarks, distances, schools, zoning. */
  markers: NeighborhoodMarker[];
}

// TODO: replace placeholder neighborhood photography once commissioned
// imagery is staged under public/images/neighborhoods/.
export const seedNeighborhoods: Neighborhood[] = [
  {
    id: "sunny-isles-beach",
    slug: "sunny-isles-beach",
    name: { en: "Sunny Isles Beach", es: "Sunny Isles Beach" },
    blurb: {
      en: "An oceanfront barrier island defined by ambitious residential towers — Atlantic-front life north of Bal Harbour, without South Beach's density.",
      es: "Una isla barrera oceánica definida por torres residenciales ambiciosas — vida sobre el Atlántico al norte de Bal Harbour, sin la densidad de South Beach.",
    },
    description: {
      en: `Sunny Isles Beach is a barrier island on the Atlantic, north of Bal Harbour. The waterfront is now defined by tall residential architecture from firms like Arquitectonica and Foster + Partners — the corridor was historically known as Motel Row before it became Florida's most architecturally ambitious mile of high-rise housing.

Bal Harbour Shops, the RASG Hebrew Academy, and a private marina are within four minutes by car. Aventura Mall is ten minutes north.

The neighborhood draws owners who want oceanfront life without South Beach's foot traffic — privacy at the building level, with the beach immediately at the door.`,
      es: `Sunny Isles Beach es una isla barrera sobre el Atlántico, al norte de Bal Harbour. La fachada al mar está hoy definida por arquitectura residencial de altura — firmas como Arquitectonica y Foster + Partners — un corredor que se conocía como Motel Row antes de convertirse en la milla más arquitectónicamente ambiciosa de vivienda en altura del estado.

Bal Harbour Shops, la academia RASG Hebrew, y una marina privada se encuentran a cuatro minutos en automóvil. Aventura Mall queda diez minutos al norte.

El barrio atrae a propietarios que valoran la vida frente al océano sin el tránsito peatonal de South Beach — privacidad a nivel de edificio, con la playa al pie de la puerta.`,
    },
    markers: [
      { en: "On the Atlantic Ocean", es: "Sobre el Océano Atlántico" },
      {
        en: "Bal Harbour Shops · 4 minutes",
        es: "Bal Harbour Shops · 4 minutos",
      },
      { en: "Aventura Mall · 10 minutes", es: "Aventura Mall · 10 minutos" },
      {
        en: "Adjacent to Sunny Isles Marina",
        es: "Adyacente a la Sunny Isles Marina",
      },
    ],
  },
  {
    id: "coral-gables",
    slug: "coral-gables",
    name: { en: "Coral Gables", es: "Coral Gables" },
    blurb: {
      en: "George Merrick's 1925 Mediterranean Revival city — preserved boulevards, mature canopy, and the most enduring architectural address in South Florida.",
      es: "La ciudad Mediterranean Revival de George Merrick (1925) — bulevares preservados, dosel maduro, y la dirección arquitectónica más perdurable del sur de Florida.",
    },
    description: {
      en: `Coral Gables was planned in 1925 by George Merrick as a Mediterranean Revival city — the gates, the boulevards, the Venetian Pool, and the Biltmore Hotel were designed in a single coordinated aesthetic. The neighborhood retains that integrity a century later: zoning protects setbacks, mature canopy, and historic facades.

The Riviera Country Club and the University of Miami sit within its borders. Public art and shaded boulevards run through the residential streets.

Coral Gables draws owners who value architectural continuity, walkable shaded streets, and a city that has refused to let its plan dilute over time.`,
      es: `Coral Gables fue planificada en 1925 por George Merrick como una ciudad de estilo Mediterranean Revival — las puertas, los bulevares, la Venetian Pool, y el Biltmore Hotel se diseñaron bajo una estética coordinada. El barrio mantiene esa integridad un siglo después: la zonificación preserva los retiros, la copa madura de los árboles, y las fachadas históricas.

El Riviera Country Club y la Universidad de Miami se ubican dentro de sus límites. Arte público y bulevares sombreados recorren las calles residenciales.

Coral Gables atrae a propietarios que valoran la continuidad arquitectónica, las calles caminables y sombreadas, y una ciudad que se ha rehusado a diluir su plan con el tiempo.`,
    },
    markers: [
      {
        en: "Planned 1925 by George Merrick",
        es: "Planificada en 1925 por George Merrick",
      },
      {
        en: "Biltmore · Venetian Pool · Riviera Country Club",
        es: "Biltmore · Venetian Pool · Riviera Country Club",
      },
      {
        en: "University of Miami within district",
        es: "Universidad de Miami dentro del distrito",
      },
      {
        en: "Architectural zoning protections",
        es: "Protección arquitectónica por zonificación",
      },
    ],
  },
  {
    id: "coconut-grove",
    slug: "coconut-grove",
    name: { en: "Coconut Grove", es: "Coconut Grove" },
    blurb: {
      en: "Miami's oldest neighborhood — bayfront and bohemian, with deep tree canopy, three private schools, and the Vizcaya estate at its center.",
      es: "El barrio más antiguo de Miami — frente a la bahía y bohemio, con dosel arbóreo profundo, tres colegios privados, y la finca Vizcaya en su centro.",
    },
    description: {
      en: `Coconut Grove is Miami's oldest neighborhood — settled in the 1870s on Biscayne Bay, decades before the city of Miami itself was incorporated. The character is bohemian and architectural: a deep canopy of mature ficus and banyans shades streets that thread between bayfront estates and small artist studios.

Vizcaya Museum and Gardens, the Coconut Grove Sailing Club, and three private K-12 schools — Carrollton, Ransom Everglades, and St. Stephen's Episcopal — are within walking distance.

The neighborhood draws owners who want architecture, water, and shade in equal measure, in a part of Miami that has held its character against everything around it.`,
      es: `Coconut Grove es el barrio más antiguo de Miami — fundado en la década de 1870 sobre la bahía de Biscayne, décadas antes de que la propia ciudad de Miami se incorporara. El carácter es bohemio y arquitectónico: un dosel profundo de ficus y banyans maduros sombrea calles que se entretejen entre fincas frente a la bahía y pequeños estudios de artistas.

Vizcaya Museum and Gardens, el Coconut Grove Sailing Club, y tres colegios privados K-12 — Carrollton, Ransom Everglades, y St. Stephen's Episcopal — quedan a distancia caminable.

El barrio atrae a propietarios que buscan arquitectura, agua, y sombra en partes iguales, en una parte de Miami que ha mantenido su carácter frente a todo lo que la rodea.`,
    },
    markers: [
      {
        en: "Settled in the 1870s — Miami's oldest",
        es: "Fundada en la década de 1870 — el más antiguo de Miami",
      },
      {
        en: "Vizcaya Museum and Gardens",
        es: "Vizcaya Museum and Gardens",
      },
      {
        en: "Coconut Grove Sailing Club · The Barnacle",
        es: "Coconut Grove Sailing Club · The Barnacle",
      },
      {
        en: "Three private K-12 schools nearby",
        es: "Tres colegios privados K-12 cercanos",
      },
    ],
  },
  {
    id: "south-of-fifth",
    slug: "south-of-fifth",
    name: { en: "South of Fifth", es: "South of Fifth" },
    blurb: {
      en: "The discreet southern end of Miami Beach — residential, low-rise, looking south across Government Cut toward Fisher Island.",
      es: "El extremo sur discreto de Miami Beach — residencial, de baja altura, mirando al sur a través de Government Cut hacia Fisher Island.",
    },
    description: {
      en: `South of Fifth is the southern tip of Miami Beach — everything below 5th Street, where the island narrows to a point at South Pointe Park. The neighborhood is residential rather than commercial: low-rise townhouses, the Continuum towers, Joe's Stone Crab, and a promenade that runs the length of the park.

The southern exposure looks across Government Cut toward Fisher Island. Smith & Wollensky and Prime 112 anchor a quiet but serious dining edge.

South of Fifth draws owners who want Miami Beach proximity without the central foot traffic — the discreet end of the island, with the rest of it twenty minutes away when needed.`,
      es: `South of Fifth es la punta sur de Miami Beach — todo lo que queda al sur de la calle 5, donde la isla se estrecha hasta un punto en South Pointe Park. El barrio es residencial más que comercial: townhouses bajos, las torres del Continuum, Joe's Stone Crab, y un paseo que recorre toda la longitud del parque.

La exposición sur mira a través de Government Cut hacia Fisher Island. Smith & Wollensky y Prime 112 anclan un borde gastronómico tranquilo pero serio.

South of Fifth atrae a propietarios que quieren la cercanía de Miami Beach sin el tránsito peatonal central — el extremo discreto de la isla, con el resto de ella a veinte minutos cuando se necesita.`,
    },
    markers: [
      {
        en: "South tip of Miami Beach · below 5th Street",
        es: "Punta sur de Miami Beach · al sur de la calle 5",
      },
      {
        en: "South Pointe Park promenade",
        es: "Paseo de South Pointe Park",
      },
      {
        en: "Joe's Stone Crab · Smith & Wollensky",
        es: "Joe's Stone Crab · Smith & Wollensky",
      },
      {
        en: "View across Government Cut to Fisher Island",
        es: "Vista a través de Government Cut hacia Fisher Island",
      },
    ],
  },
  {
    id: "edgewater",
    slug: "edgewater",
    name: { en: "Edgewater", es: "Edgewater" },
    blurb: {
      en: "A bayfront strip between downtown and Wynwood — the residential anchor for Miami's creative and cultural corridor.",
      es: "Una franja frente a la bahía entre el centro y Wynwood — el ancla residencial del corredor creativo y cultural de Miami.",
    },
    description: {
      en: `Edgewater is a thin bayfront strip between downtown Miami and Wynwood, defined since the 2010s by tall residential architecture facing Biscayne Bay. The neighborhood is quieter than its surroundings — Wynwood, the Design District, and Midtown sit immediately west — making it the residential anchor for the city's creative and cultural corridor.

Margaret Pace Park runs along the bay. Miami International Airport is fifteen minutes west; Brickell is five minutes south.

Edgewater draws owners who work in the arts and design economy and want to live close to it, but at home — out of the noise.`,
      es: `Edgewater es una franja delgada frente a la bahía, entre el centro de Miami y Wynwood, definida desde la década de 2010 por arquitectura residencial de altura que mira hacia la bahía de Biscayne. El barrio es más tranquilo que su entorno — Wynwood, el Design District, y Midtown quedan inmediatamente al oeste — lo cual lo convierte en el ancla residencial del corredor creativo y cultural de la ciudad.

Margaret Pace Park bordea la bahía. El Aeropuerto Internacional de Miami está a quince minutos al oeste; Brickell a cinco minutos al sur.

Edgewater atrae a propietarios que trabajan en la economía del arte y el diseño y quieren vivir cerca de ella, pero en casa — fuera del ruido.`,
    },
    markers: [
      {
        en: "Biscayne Bay frontage",
        es: "Frente a la bahía de Biscayne",
      },
      {
        en: "Wynwood, Design District · 5 minutes",
        es: "Wynwood, Design District · 5 minutos",
      },
      { en: "Midtown Miami · adjacent", es: "Midtown Miami · adyacente" },
      { en: "MIA airport · 15 minutes", es: "Aeropuerto MIA · 15 minutos" },
    ],
  },
];
