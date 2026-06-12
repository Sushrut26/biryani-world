export interface Fact {
  num: string;
  title: string;
  text: string;
}

export const FACTS: Fact[] = [
  {
    num: "01",
    title: "93 Million Orders in One Year",
    text: "In 2025, Swiggy alone recorded 93 million biryani orders in India — 57.7 million of them chicken. That is one biryani ordered every 3.25 seconds, 24 hours a day, 365 days a year.",
  },
  {
    num: "02",
    title: "78 Masalas",
    text: "The Nizam of Hyderabad's court allegedly used 78 distinct masala components in their royal biryani. Today's most elaborate home recipes use around 24.",
  },
  {
    num: "03",
    title: "The Potato Was a Luxury",
    text: "Despite popular legend, Nawab Wajid Ali Shah received a British pension of ₹12 lakh per annum — enough to feed tigers. The potato entered Kolkata biryani as a fashionable luxury novelty, not a budget stretcher.",
  },
  {
    num: "04",
    title: "Zanzibar's Clove Monopoly",
    text: "Zanzibar produces 70%+ of the world's cloves — a crop forcibly transplanted from Indonesia by the Omani Sultan in the 1820s. Every clove in Zanzibari biryani carries a history of colonial botanical piracy.",
  },
  {
    num: "05",
    title: "Only Biryani Named After Persian",
    text: "Burmese danpauk (ဒံပေါက်) is the only major biryani outside South Asia whose name is a direct phonetic borrowing of the Persian term dum pukht.",
  },
  {
    num: "06",
    title: "Brown Lentils: Cape Town Only",
    text: "Cape Malay breyani is the only biryani in the world layered with brown lentils. This addition emerged from the enslaved community's adaptation to Dutch colonial Cape Town ingredients in the 17th century.",
  },
  {
    num: "07",
    title: "The 2013 Kolkata Potato Crisis",
    text: "When potato prices spiked in 2013, many Kolkata biryani houses simply stopped serving biryani. They would not serve it without the potato. Sales of chicken chaap and Chinese food surged.",
  },
  {
    num: "08",
    title: "One Drop of Meetha Attar",
    text: "The sweet floral perfume used in Lucknowi biryani is distilled from flowers including screwpine, sandalwood, and rose. One drop per kilogram of rice perfumes the entire pot. Two drops ruins it.",
  },
  {
    num: "09",
    title: "The Glass Test for Birista",
    text: "A correctly made birista (fried onion) should shatter like glass between your fingers after cooling. If it bends, it was fried at too high a heat and will taste bitter in the biryani.",
  },
  {
    num: "10",
    title: "50,000 Plates on Eid",
    text: "Fakhruddin Biryani in Old Dhaka reportedly serves over 50,000 plates of kacchi biryani on Eid days. The family recipe has never been written down in its 50+ years of operation.",
  },
  {
    num: "11",
    title: "The Dough Seal as Thermometer",
    text: "A sealed atta-dough rim that has hardened and browned tells an experienced cook the dum is complete — without ever lifting the lid. The browning corresponds precisely to peak internal temperature.",
  },
  {
    num: "12",
    title: "Kewra: One Tsp or Soap",
    text: "Kewra water — extracted from pandanus flowers — is perhaps the most concentration-sensitive ingredient in cooking. One teaspoon perfumes a pot. Two teaspoons and the biryani tastes like soap. The line is that precise.",
  },
];

export interface SpiceCardData {
  title: string;
  compound?: string;
  body: string;
  tag: string;
}

export const SPICE_CARDS: SpiceCardData[] = [
  {
    title: "Why Aged Basmati",
    compound: "2-acetyl-1-pyrroline",
    tag: "Rice Chemistry",
    body: "Basmati aged 1–2 years has lost surface moisture; the grains absorb spice-laden steam without turning sticky. The aroma compound 2-acetyl-1-pyrroline is what gives basmati its popcorn-pandan signature — and it intensifies as the grain ages.",
  },
  {
    title: "The 70% Rule",
    tag: "Par-boiling",
    body: "Rice par-boiled to exactly 70% doneness has a firm white core and a yielding outer layer. The core absorbs steam during dum without disintegrating; the outer layer melds with neighbouring grains. Anything less is raw at the top; anything more is mush at the bottom.",
  },
  {
    title: "Papain & Mutton",
    compound: "Papain",
    tag: "Tenderising",
    body: "Raw papaya contains papain, a protease that cleaves protein chains between glutamine and asparagine residues. Two tablespoons per kilo of mutton transforms 4-hour-tough goat into a fork-tender Hyderabadi handi. Three tablespoons turns it to slurry.",
  },
  {
    title: "Birista Maillard",
    tag: "Browning",
    body: "Fried onions develop flavour through the Maillard reaction — amino acids and reducing sugars forming melanoidins above 140°C. Fry on medium heat; high heat burns the surface before the inside browns, giving you bitterness instead of sweetness. Properly fried birista shatters like glass.",
  },
  {
    title: "Saffron — Crocin & Picrocrocin",
    compound: "Crocin, picrocrocin, safranal",
    tag: "Pigment",
    body: "Saffron's colour comes from crocin, its slight bitterness from picrocrocin, its hay-and-honey aroma from safranal. Bloom threads in warm (not hot) milk for 20 minutes — heat destroys safranal. Drizzle the milk in streaks, not stirred in: the visible streaks of gold define the dish.",
  },
  {
    title: "Kewra & Pandan",
    tag: "Aromatics",
    body: "Kewra water is extracted from the male flowers of Pandanus odoratissimus — a screwpine tree found from Kerala to Indonesia. Its dominant compound is 2-acetyl-1-pyrroline (yes, the same as basmati), but in concentrations 50× higher. A teaspoon per kilo of rice doubles the aroma. A tablespoon ruins everything.",
  },
  {
    title: "Why Dum Works",
    tag: "Steam Cooking",
    body: "A sealed pot under low heat reaches around 96–98°C — below boiling, above evaporation. Rice cooks in steam alone, never in liquid. Aromatics rise vertically and re-condense on the rice as they fall. The dough seal makes the lid gas-impermeable in a way no metal ever is.",
  },
  {
    title: "Loomi: Sun-Black Lime",
    tag: "Middle East",
    body: "Dried black limes (loomi) are boiled in salt water, then sun-dried for months until the interior turns coal-black. The result is concentrated sourness with a peculiar fermented edge that comes from the slow dehydration. Pierce before adding so the flavour leaches into the pot — never crush.",
  },
];
