import type { BiryaniRegion } from "./biryanis";

export interface Region {
  id: BiryaniRegion;
  label: string;
  name: string;
  origin: string;
  varieties: string[];
  fact: string;
  lat: number;
  lng: number;
}

export const REGIONS: Region[] = [
  {
    id: "india",
    label: "South Asia",
    name: "The Heartland",
    lat: 20,
    lng: 77,
    origin:
      "The epicentre of biryani civilisation. From the Mughal courts of Delhi and Lucknow to the Nizam's palace in Hyderabad and the Kerala coast, India alone holds twenty-plus distinct named styles.",
    varieties: [
      "hyderabadi-kacchi",
      "hyderabadi-pakki",
      "lucknowi",
      "kolkata",
      "thalassery",
      "ambur",
    ],
    fact: "The Nizam of Hyderabad's court allegedly used 78 distinct masala components in their royal biryani. Modern recipes use 20–24.",
  },
  {
    id: "pakistan",
    label: "Pakistan & Bangladesh",
    name: "Kacchi Country",
    lat: 30,
    lng: 70,
    origin:
      "Home to the world's most spiced (Sindhi) and most fragrant (Bangladeshi kacchi) biryanis. Karachi's Student Biryani, founded 1969, now operates globally.",
    varieties: ["sindhi", "bangladeshi-kacchi"],
    fact: "Fakhruddin Biryani in Old Dhaka serves over 50,000 plates of kacchi on Eid days. The family recipe has never been written down.",
  },
  {
    id: "middle-east",
    label: "Middle East",
    name: "Ancient Cousins",
    lat: 24,
    lng: 45,
    origin:
      "The Arab world gave biryani its Persian DNA. Yemen's underground-pit mandi and Saudi Arabia's kabsa are the living ancestors and siblings of South Asian biryani.",
    varieties: ["mandi", "kabsa"],
    fact: "The 13th-century Aleppan cookbook Kitab al-Wuslah describes underground-pit meat roasting — the direct ancestor of Yemeni mandi.",
  },
  {
    id: "southeast-asia",
    label: "Southeast Asia",
    name: "Monsoon Adaptations",
    lat: 5,
    lng: 110,
    origin:
      "Biryani arrived via Tamil Muslim traders, Arab merchants, and British colonial networks. Each culture added pandan, lemongrass, coconut milk, and evaporated milk.",
    varieties: ["nasi-briyani"],
    fact: "Burmese danpauk is the only major biryani outside South Asia whose name is a direct phonetic borrowing of the Persian term dum pukht.",
  },
  {
    id: "africa",
    label: "Africa & Indian Ocean",
    name: "Swahili Coast Legacy",
    lat: -10,
    lng: 40,
    origin:
      "The Indian Ocean monsoon trade carried biryani along the Swahili Coast. Zanzibar's clove-and-rose-water biryani and Cape Town's brown-lentil breyani are its most distinctive results.",
    varieties: ["zanzibari", "cape-malay", "mauritian"],
    fact: "Cape Malay breyani is the only biryani in the world layered with brown lentils — a uniquely South African innovation from the VOC colonial era.",
  },
];

export const REGION_BY_ID: Record<BiryaniRegion, Region | undefined> =
  Object.fromEntries(REGIONS.map((r) => [r.id, r])) as Record<
    BiryaniRegion,
    Region | undefined
  >;
