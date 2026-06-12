import type { ImageKey } from "./images";

export type BiryaniRegion =
  | "india"
  | "pakistan"
  | "middle-east"
  | "southeast-asia"
  | "africa"
  | "diaspora";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface RecipeStep {
  title: string;
  desc: string;
  tip?: string;
}

export interface Ingredient {
  name: string;
  qty: string;
}

export interface Biryani {
  id: string;
  slug: string;
  name: string;
  region: BiryaniRegion;
  country: string;
  flag: string;
  city: string;
  lat: number;
  lng: number;
  image: ImageKey;
  tags: string[];
  difficulty: Difficulty;
  time: string;
  serves: string;
  shortDesc: string;
  history: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  serve: string[];
  funFact?: string;
}

export const BIRYANIS: Biryani[] = [
  {
    id: "hyderabadi-kacchi",
    slug: "hyderabadi-kacchi-biryani",
    name: "Hyderabadi Kacchi Biryani",
    region: "india",
    country: "India",
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Hyderabad",
    lat: 17.385,
    lng: 78.486,
    image: "hyderabadiKacchi",
    tags: ["Kacchi Method", "Mutton", "Dum Pukht", "Advanced"],
    difficulty: "Advanced",
    time: "6 hours",
    serves: "6",
    shortDesc:
      "The king of all biryanis. Raw marinated mutton and par-boiled rice sealed in a handi — the most technically demanding biryani on Earth.",
    history:
      "Codified in the Asaf Jahi (Nizami) court of Hyderabad, 18th–20th century. Descended directly from the Mughal imperial kitchen tradition brought south by Asaf Jah I, appointed by Aurangzeb in 1713. The Nizam's court allegedly used 78 distinct masala components.",
    ingredients: [
      { name: "Mutton/goat on bone", qty: "1 kg" },
      { name: "Aged basmati rice (soaked 30 min)", qty: "500g" },
      { name: "Full-fat yogurt, whisked", qty: "1½ cups" },
      { name: "Birista (deep-fried onions)", qty: "4 large onions" },
      { name: "Ginger-garlic paste", qty: "4 tbsp" },
      { name: "Raw papaya paste (tenderizer)", qty: "1 tbsp" },
      { name: "Red chili powder", qty: "1 tbsp" },
      { name: "Biryani masala (ground)", qty: "2 tsp" },
      { name: "Green chilies, slit", qty: "6–8" },
      { name: "Saffron in warm milk", qty: "½ tsp in 4 tbsp milk" },
      { name: "Kewra water", qty: "1 tsp" },
      { name: "Pure ghee", qty: "6 tbsp" },
      { name: "Mint & coriander, chopped", qty: "Large bunches" },
      { name: "Lemon juice", qty: "1 lemon" },
      { name: "Salt", qty: "To taste" },
      { name: "Atta dough for sealing", qty: "1 cup flour + water" },
    ],
    steps: [
      {
        title: "Marinate the Meat",
        desc: "Coat raw mutton thoroughly with yogurt, ginger-garlic paste, papaya paste, half the birista, red chili powder, biryani masala, mint, coriander, green chilies, lemon juice, and 2 tbsp ghee. Work the marinade deep into every crevice. Refrigerate for minimum 4 hours — 48 hours transforms it entirely.",
        tip: "Raw papaya paste contains the enzyme papain which breaks down protein chains. Two tablespoons per kilo is optimal — more makes the meat mushy.",
      },
      {
        title: "Par-boil the Rice",
        desc: "Bring 4 litres of water to a rolling boil. Add whole spices (4 green cardamom, 4 cloves, 1 cinnamon, 2 bay leaves, 1 tsp shahi jeera) and salt so generously the water tastes like the sea. Add drained soaked rice and cook to exactly 70% done — each grain firm with a visible white core. Drain immediately.",
        tip: "The 70% rule is non-negotiable. Under-boiled = raw top layer. Over-boiled = mush under dum. Test by pressing a grain — it should still resist.",
      },
      {
        title: "Layer in the Handi",
        desc: "Into a heavy-bottomed handi or thick pot: spread marinated raw mutton evenly at the bottom. Layer half the par-boiled rice over it. Drizzle half the saffron milk, scatter birista, mint, and coriander. Add remaining rice. Drizzle remaining saffron milk, kewra water, remaining birista, remaining ghee in streaks across the top.",
      },
      {
        title: "Seal the Dum",
        desc: "Make a stiff wheat-flour dough. Press it firmly all around the rim where the lid meets the pot — no steam may escape. Place on highest heat for 5 minutes to build internal pressure, then move to your lowest possible flame with a heavy tawa (iron griddle) placed underneath as a heat diffuser.",
        tip: "The dough seal is gas-impermeable in a way no metal lid ever is. Press firmly. When it has hardened and browned, the dum is done — without ever lifting the lid.",
      },
      {
        title: "The 90-Minute Wait",
        desc: "Cook on lowest heat for 60–90 minutes. Do not lift the lid. Do not peek. Trust the dum. The meat cooks entirely in its own juices and yogurt moisture, rising as steam through the rice. Remove from heat and rest sealed for 15–20 minutes.",
      },
      {
        title: "Break the Seal",
        desc: "Break the dough seal at the table. Lift the lid slowly — the steam that rises carries the full perfume of the biryani. Use a flat spatula to gently fold and serve, ensuring each plate carries saffron-golden top rice, herb-flecked middle rice, and tender meat.",
      },
    ],
    serve: [
      "Mirchi ka salan (peanut-sesame chili curry)",
      "Dahi ki chutney (whisked spiced yogurt)",
      "Baghara baingan (smoked aubergine)",
      "Raw sliced onion with lemon",
      "Cucumber raita",
    ],
    funFact:
      "The Nizam of Hyderabad's court allegedly used 78 distinct masala components in their royal biryani. Today's most elaborate home recipe uses around 24.",
  },
  {
    id: "hyderabadi-pakki",
    slug: "hyderabadi-pakki-biryani",
    name: "Hyderabadi Pakki Biryani",
    region: "india",
    country: "India",
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Hyderabad",
    lat: 17.385,
    lng: 78.486,
    image: "hyderabadiPakki",
    tags: ["Pakki Method", "Chicken", "Dum Pukht", "Intermediate"],
    difficulty: "Intermediate",
    time: "2.5 hours",
    serves: "4–6",
    shortDesc:
      "The restaurant standard — chicken cooked first in a masala, layered with par-boiled rice, finished in a sealed dum. More forgiving than kacchi, equally magnificent.",
    history:
      "The pakki method — where meat is fully cooked before layering — became the restaurant standard across Hyderabad and the world. It is the version served at Paradise, the most famous biryani restaurant chain in India.",
    ingredients: [
      { name: "Bone-in chicken, large pieces", qty: "1 kg" },
      { name: "Aged basmati rice", qty: "500g" },
      { name: "Birista", qty: "3 large onions" },
      { name: "Full-fat yogurt", qty: "1 cup" },
      { name: "Ginger-garlic paste", qty: "3 tbsp" },
      { name: "Red chili powder", qty: "2 tsp" },
      { name: "Biryani masala", qty: "1½ tsp" },
      { name: "Saffron in warm milk", qty: "½ tsp in 3 tbsp milk" },
      { name: "Kewra water", qty: "1 tsp" },
      { name: "Pure ghee", qty: "5 tbsp" },
      { name: "Mint & coriander", qty: "Generous bunches" },
      { name: "Salt", qty: "To taste" },
    ],
    steps: [
      {
        title: "Marinate",
        desc: "Marinate chicken in yogurt, ginger-garlic, chili powder, biryani masala, half the birista, mint, coriander, and salt for minimum 1 hour. Overnight is better.",
      },
      {
        title: "Cook the Masala",
        desc: "In a heavy pot, heat 3 tbsp ghee over medium-high. Add the marinated chicken. Cook until the masala thickens and oil visibly separates at the edges — about 20 minutes. The oil separation is your signal: the masala is done.",
        tip: "Never skip waiting for oil separation. It means all moisture has cooked off and the spices have properly bloomed. Rushing this gives raw-tasting masala.",
      },
      {
        title: "Par-boil Rice",
        desc: "Par-boil basmati in heavily salted whole-spice water to 70% done. Drain immediately.",
      },
      {
        title: "Layer",
        desc: "Layer rice over the chicken masala in the pot. Drizzle saffron milk, kewra water, remaining ghee and birista. Seal with foil pressed tightly + heavy lid placed on top.",
      },
      {
        title: "Dum",
        desc: "Cook on lowest heat for 20–25 minutes. Rest 10 minutes before opening. Gently fold with a flat spatula to mix layers when serving.",
      },
    ],
    serve: ["Mirchi ka salan", "Boondi raita", "Raw onion rings", "Lemon wedges"],
  },
  {
    id: "lucknowi",
    slug: "lucknowi-awadhi-biryani",
    name: "Lucknowi Awadhi Biryani",
    region: "india",
    country: "India",
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Lucknow",
    lat: 26.847,
    lng: 80.946,
    image: "lucknowiBiryani",
    tags: ["Yakhni Stock", "Mutton", "Rose Water", "Advanced"],
    difficulty: "Advanced",
    time: "5 hours",
    serves: "6",
    shortDesc:
      "The perfumer's biryani. Meat slow-cooked in aromatic stock, layered with rice perfumed with rose water, kewra, and meetha attar. Subtle, floral, refined.",
    history:
      "Created in the Nawabi court of Awadh, Lucknow, 18th–19th century. The Nawabs of Awadh — Persian-origin Shia aristocrats — were the most refined culinary patrons in early-modern Asia. Their dum pukht school became the template for Mughal-descended cooking worldwide.",
    ingredients: [
      { name: "Bone-in mutton", qty: "1 kg" },
      { name: "Aged basmati rice", qty: "500g" },
      { name: "Birista", qty: "4 large onions" },
      { name: "Full-fat yogurt", qty: "1 cup" },
      { name: "Fresh cream", qty: "¼ cup" },
      { name: "Yellow chili powder (mild)", qty: "1 tsp" },
      {
        name: "Yakhni whole spices (potli)",
        qty: "Cardamom, clove, cinnamon, mace, bay, black pepper in muslin",
      },
      { name: "Saffron in warm milk", qty: "½ tsp in 4 tbsp milk" },
      { name: "Kewra water", qty: "1 tsp" },
      { name: "Pure rose water", qty: "½ tsp" },
      { name: "Meetha attar (sweet floral essence)", qty: "2 drops only" },
      { name: "Pure ghee", qty: "¼ cup" },
      { name: "Salt", qty: "To taste" },
    ],
    steps: [
      {
        title: "Make the Yakhni Stock",
        desc: "Simmer mutton bones with the whole-spice potli, ginger, garlic, one quartered onion, and salt in 2 litres of water for 2–3 hours. Strain carefully. This aromatic stock is the soul of Lucknowi biryani — never skip it.",
        tip: "The yakhni is what sets Lucknowi biryani apart from every other style. Every molecule of flavour in the finished rice comes from this stock.",
      },
      {
        title: "Cook the Mutton",
        desc: "Cook mutton pieces in 2 cups of the reserved yakhni with ghee, whisked yogurt, cream, and yellow chili powder until the meat is tender and the gravy is reduced and thick — about 40 minutes.",
      },
      {
        title: "Par-boil in Yakhni",
        desc: "Par-boil basmati rice in the remaining yakhni (topped up with water if needed) to exactly 70% done. The rice absorbs the stock's flavour from its first contact with the water.",
      },
      {
        title: "Layer",
        desc: "Layer in handi: mutton with thick masala at the bottom; rice on top; saffron milk drizzled in streaks; kewra water; rose water; just 2 drops of meetha attar; ghee; birista. No fresh mint or coriander — let the attar speak.",
        tip: "Meetha attar is intensely concentrated. Two drops perfumes the whole pot. Three drops ruins it. Measure carefully.",
      },
      {
        title: "Seal & Dum",
        desc: "Seal with atta dough. Dum on lowest heat for 20–25 minutes, or in a 180°C oven for 15 minutes. Rest 15 minutes. Break seal at the table.",
      },
    ],
    serve: [
      "Burani raita (garlic yogurt)",
      "Kachumber salad",
      "Sheermal bread",
      "Lemon wedge",
    ],
    funFact:
      "Meetha attar — the sweet floral perfume unique to Lucknowi cooking — is made by distilling flowers including screwpine, sandalwood, and Damask rose into a base oil. It has been produced in Lucknow's Chowk district for over 300 years.",
  },
  {
    id: "kolkata",
    slug: "kolkata-biryani",
    name: "Kolkata Biryani",
    region: "india",
    country: "India",
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Kolkata",
    lat: 22.572,
    lng: 88.363,
    image: "kolkataBiryani",
    tags: ["Pakki Method", "Mutton", "Potato", "Intermediate"],
    difficulty: "Intermediate",
    time: "3 hours",
    serves: "4–6",
    shortDesc:
      "Born in exile. The last Nawab of Awadh brought his royal chefs to Bengal in 1856. The potato entered biryani as a luxury novelty — and became its soul.",
    history:
      "Nawab Wajid Ali Shah, deposed by the British East India Company in 1856, was exiled to Metiabruz, Kolkata. He built a miniature Lucknow there, complete with royal chefs. Contrary to popular legend of poverty, the Nawab received a British pension of ₹12 lakh per year — the potato was added as a fashionable novelty, not a budget stretcher.",
    ingredients: [
      { name: "Mutton on the bone", qty: "800g" },
      { name: "Aged basmati rice", qty: "500g" },
      { name: "Potatoes, peeled and halved", qty: "4 medium" },
      { name: "Birista", qty: "3 large onions" },
      { name: "Full-fat yogurt", qty: "1 cup" },
      { name: "Ginger-garlic paste", qty: "2 tbsp" },
      { name: "Light ground spice mix (Kolkata blend — mild)", qty: "1 tsp" },
      { name: "Yellow food colour or turmeric water", qty: "For potatoes" },
      { name: "Saffron in warm milk", qty: "½ tsp in 3 tbsp milk" },
      { name: "Kewra water", qty: "1 tsp" },
      { name: "Meetha attar", qty: "2 drops" },
      { name: "Pure ghee", qty: "5 tbsp" },
      { name: "Hard-boiled eggs (optional)", qty: "4" },
      { name: "Salt", qty: "To taste" },
    ],
    steps: [
      {
        title: "Marinate",
        desc: "Marinate mutton in yogurt, ginger-garlic, light spice mix, salt for 2 hours minimum.",
      },
      {
        title: "Prepare the Potato",
        desc: "Parboil potato halves in salted water until just barely cooked through — they should resist a knife slightly. Drain. Brush all over with yellow food colour or turmeric water. Shallow-fry in ghee until golden on all sides.",
        tip: "The potato MUST be pre-cooked. The dum time is only enough to finish and perfume it — a raw potato never cooks through in 20 minutes of dum.",
      },
      {
        title: "Cook the Mutton",
        desc: "Cook marinated mutton in ghee with whole spices until tender, 40–60 minutes. Reduce gravy until it just coats the meat like a glaze.",
      },
      {
        title: "Layer",
        desc: "Layer: mutton at bottom; fried golden potatoes over the meat; hard-boiled eggs (optional); half the par-boiled rice; saffron milk; kewra; meetha attar; remaining rice; birista; a final drizzle of ghee.",
      },
      {
        title: "Dum",
        desc: "Seal with foil + heavy lid. Dum on lowest heat 20 minutes. Rest 10 minutes. Each plate gets one potato half, one egg, meat, and rice.",
      },
    ],
    serve: ["Simple salan on the side", "Lime wedge", "Kachumber"],
    funFact:
      "In 2013, when potato prices spiked in West Bengal, many Kolkata biryani houses simply refused to serve biryani. They would not offer it without the potato. Sales of chicken chaap and Chinese food surged across the city.",
  },
  {
    id: "thalassery",
    slug: "thalassery-malabar-biryani",
    name: "Thalassery Malabar Biryani",
    region: "india",
    country: "India",
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Thalassery, Kerala",
    lat: 11.748,
    lng: 75.493,
    image: "thalasseryBiryani",
    tags: ["Kaima Rice", "Chicken", "Coastal Kerala", "Intermediate"],
    difficulty: "Intermediate",
    time: "90 minutes",
    serves: "4–5",
    shortDesc:
      "Kerala's coastal aristocrat. Uses tiny Kaima/Jeerakasala rice — not basmati. Fennel-forward spice, raisins, cashews, and the gentlest dum in Indian biryani.",
    history:
      "Developed in the kitchens of the Moplah (Mappila) Muslim community of Malabar — descended from Arab traders who settled the Kerala coast from the 7th century CE. The choice of Kaima rice over basmati reflects the community's coastal, non-Mughal identity.",
    ingredients: [
      { name: "Bone-in chicken", qty: "1 kg" },
      { name: "Kaima/Jeerakasala rice (rinse, do NOT soak)", qty: "500g" },
      { name: "Birista", qty: "4 large onions" },
      { name: "Tomatoes, chopped", qty: "4" },
      { name: "Ginger-garlic-chili paste", qty: "2 tbsp" },
      { name: "Full-fat curd/yogurt", qty: "1 cup" },
      { name: "Malabar garam masala (fennel-forward)", qty: "1 tsp" },
      {
        name: "Whole spices: cardamom, clove, cinnamon, star anise, fennel",
        qty: "2 tsp each",
      },
      { name: "Pure ghee", qty: "¼ cup" },
      { name: "Fried cashews & golden raisins", qty: "Generous handful each" },
      { name: "Saffron or pinch of turmeric in water", qty: "Pinch" },
      { name: "Rose water (optional)", qty: "1 tbsp" },
      { name: "Mint & coriander", qty: "Generous" },
      { name: "Lime juice", qty: "1 lime" },
    ],
    steps: [
      {
        title: "Make Chicken Masala",
        desc: "Heat ghee; sauté whole spices until fragrant. Add ginger-garlic-chili paste; fry 2 minutes. Add chopped tomatoes; cook until oil separates. Add whisked yogurt, three-quarters of the birista, Malabar garam masala. Add chicken pieces; cook covered 15–20 minutes (no water needed — chicken releases enough). Finish with lime juice, mint, coriander. The masala should be thick, coating the chicken.",
        tip: "Have the rice ready to cook the moment the masala is done. Kaima rice absorbs water quickly and should not sit waiting.",
      },
      {
        title: "Cook the Kaima Rice",
        desc: "Heat 2 tbsp ghee in a flat-bottomed pot; add a few whole spices; add rinsed (not soaked) Kaima rice; toast gently for 2 minutes. Add 750ml boiling water + salt. Cover tightly; cook exactly 10–12 minutes on low heat.",
        tip: "Kaima rice is unlike basmati — it needs NO soaking and cooks in 10 minutes flat. Treat it like Italian risotto rice: watch it, don't walk away.",
      },
      {
        title: "Layer & Dum",
        desc: "Layer in pot: chicken masala; cooked Kaima rice; saffron water; rose water; remaining birista; fried cashews and golden raisins; ghee. Seal lightly; dum on lowest heat for just 10–15 minutes.",
      },
    ],
    serve: [
      "Pappadum",
      "Lime pickle",
      "Coconut chammanthi",
      "Raita",
      "Date pickle (ethapazham achar)",
    ],
    funFact:
      "Kaima/Jeerakasala rice — named for its cumin-seed shape — is a Western Ghats heirloom variety grown only in Kerala. It contains the same aromatic compound (2-acetyl-1-pyrroline) as basmati, but in a much smaller, stickier grain. It has never been successfully cultivated outside Kerala.",
  },
  {
    id: "ambur",
    slug: "ambur-biryani",
    name: "Ambur Biryani",
    region: "india",
    country: "India",
    flag: "\u{1F1EE}\u{1F1F3}",
    city: "Ambur, Tamil Nadu",
    lat: 12.793,
    lng: 78.715,
    image: "amburBiryani",
    tags: ["Seeraga Samba", "Mutton", "Red Chili Paste", "Intermediate"],
    difficulty: "Intermediate",
    time: "2 hours",
    serves: "5–6",
    shortDesc:
      "The wood-fire biryani of Tamil Nadu. Seeraga samba rice, a soaked red-chili paste (not powder), and a legendary meat-to-rice ratio. Always served with dhalcha.",
    history:
      "Descended from the kitchens of the Nawabs of Arcot — an 18th-century Mughal vassal dynasty that ruled the Carnatic from Arcot. Hasin Baig, a cook in the Arcot Nawab's kitchen, opened the first Ambur Star Biryani restaurant in his hometown in 1890. The family is now in its fourth generation.",
    ingredients: [
      { name: "Mutton on bone", qty: "1 kg" },
      { name: "Seeraga samba rice (soak 30 min)", qty: "500g" },
      { name: "Dried red chilies, soaked in warm water", qty: "10–12" },
      { name: "Onions, sliced", qty: "3 large" },
      { name: "Tomatoes, chopped", qty: "3" },
      { name: "Curd/yogurt", qty: "1 cup" },
      { name: "Ginger-garlic paste", qty: "1 tbsp" },
      {
        name: "Whole spices: cardamom, clove, cinnamon, star anise, bay",
        qty: "1 each",
      },
      { name: "Mint & coriander", qty: "Generous bunches" },
      { name: "Ghee + neutral oil", qty: "¼ cup each" },
      { name: "Lime juice", qty: "1 lime" },
      { name: "Salt", qty: "To taste" },
    ],
    steps: [
      {
        title: "Make the Red Chili Paste",
        desc: "Soak 10–12 dried red chilies in warm water for 20 minutes. Drain and grind to a completely smooth paste. This paste — not chili powder — is the Ambur precision instrument for heat control.",
        tip: "The paste gives warmth and complexity at a molecular level that dry powder cannot. Ambur biryani is spiced, not spicy. The precision is in the paste.",
      },
      {
        title: "Build the Masala",
        desc: "Heat ghee+oil; sauté whole spices. Add sliced onions; cook to light golden. Add ginger-garlic paste; fry 2 minutes. Add the red chili paste; fry until oil separates. Add tomatoes; cook to a thick glossy masala. Add yogurt, salt, mint, coriander.",
      },
      {
        title: "Cook the Mutton",
        desc: "Add mutton to the masala; cook covered 40–50 minutes until very tender. The gravy should be thick and coating the meat like a glaze — not soupy.",
      },
      {
        title: "Layer & Dum",
        desc: "Par-boil seeraga samba in salted water to 75%. Drain. Layer rice over the mutton in the same cooking pot; drizzle a little masala liquid; cover tightly; dum on lowest heat for 20 minutes (traditionally over a wood fire, which adds a faint smokiness).",
      },
    ],
    serve: [
      "Dhalcha (mutton-dal-bottle gourd curry — essential)",
      "Brinjal pachadi (eggplant raita)",
      "Raw onion",
      "Lime wedge",
    ],
    funFact:
      "Ambur biryani famously uses a 1:1 meat-to-rice ratio by weight — twice the meat of most other styles. The original Ambur Star Biryani restaurant (est. 1890) is still run by the same family and has never changed its recipe.",
  },
  {
    id: "sindhi",
    slug: "sindhi-biryani",
    name: "Sindhi Biryani",
    region: "pakistan",
    country: "Pakistan",
    flag: "\u{1F1F5}\u{1F1F0}",
    city: "Karachi / Hyderabad, Sindh",
    lat: 24.86,
    lng: 67.001,
    image: "sindhiBiryani",
    tags: ["Tangy-Spicy", "Chicken", "Tomatoes & Plums", "Intermediate"],
    difficulty: "Intermediate",
    time: "2 hours",
    serves: "5–6",
    shortDesc:
      "Pakistan's national biryani — heavily spiced, tangy with tomatoes and dried plums, visually a deep red-orange. The Shan spice box made it famous worldwide.",
    history:
      "Originating in Sindh province, Pakistan. The Sindhi biryani's heavy use of tomatoes — unusual in biryani — reflects Portuguese influence through the Goa–Sindh spice trade routes. Shan Foods, founded in Karachi in 1981, made Sindhi biryani masala the most exported South Asian spice mix on Earth.",
    ingredients: [
      { name: "Chicken or mutton on bone", qty: "1 kg" },
      { name: "Aged basmati rice", qty: "500g" },
      { name: "Tomatoes, chopped", qty: "4 large" },
      { name: "Potatoes, halved", qty: "3 medium" },
      { name: "Dried plums (aloo bukhara)", qty: "10–12" },
      { name: "Birista", qty: "3 large onions" },
      { name: "Full-fat yogurt", qty: "1 cup" },
      { name: "Ginger-garlic-chili paste", qty: "2 tbsp" },
      { name: "Large green chilies, slit", qty: "6" },
      { name: "Sindhi biryani masala", qty: "1.5 tbsp" },
      { name: "Red chili powder", qty: "2 tsp" },
      { name: "Lemon slices (placed in dum layer)", qty: "1 lemon" },
      { name: "Yellow food colour", qty: "For rice" },
      { name: "Mint & coriander", qty: "Very generous" },
    ],
    steps: [
      {
        title: "Brown the Meat",
        desc: "Heat oil; add chicken with ginger-garlic-chili paste; add red chili and Sindhi masala; stir 3 minutes. Add chopped tomatoes; cook until thick and oil separates. Add full-fat yogurt; cook 10 minutes.",
      },
      {
        title: "Add Potatoes & Plums",
        desc: "Add potato halves and dried plums; cook covered 15 minutes until potatoes are tender. Layer half the birista, mint, coriander, slit green chilies, and lemon slices on top of the meat. Do NOT stir — these will perfume the dum from above.",
        tip: "Never skip the aloo bukhara. The dried plum is the tangy-sweet counterpoint that makes Sindhi biryani Sindhi. Without it, you have a generic Pakistani biryani.",
      },
      {
        title: "Layer & Dum",
        desc: "Par-boil basmati to 70%. Layer rice over the meat; drizzle yellow food colour in streaks; add remaining birista, mint, coriander; drizzle ghee. Seal with tight foil + lid. Dum 15–20 minutes on lowest heat.",
      },
    ],
    serve: ["Raita", "Kachumber salad", "Fresh lime", "Cold salad"],
  },
  {
    id: "bangladeshi-kacchi",
    slug: "bangladeshi-kacchi-biryani",
    name: "Bangladeshi Dhakaiya Kacchi",
    region: "pakistan",
    country: "Bangladesh",
    flag: "\u{1F1E7}\u{1F1E9}",
    city: "Old Dhaka",
    lat: 23.711,
    lng: 90.408,
    image: "bangladeshiKacchi",
    tags: ["Kacchi Method", "Mutton", "Wedding Dish", "Expert"],
    difficulty: "Expert",
    time: "8+ hours",
    serves: "6–8",
    shortDesc:
      "The centerpiece of Old Dhaka weddings. Raw marinated mutton, par-boiled rice, fried potatoes — fragrant and gentle, not spicy. A kacchi tradition entirely distinct from Hyderabad.",
    history:
      "Old Dhaka's kacchi biryani culture is so established that entire caterer dynasties exist whose only product is biryani. Fakhruddin Biryani, founded in the 1970s, reportedly serves 50,000+ plates on Eid days. The family recipe has never been written down.",
    ingredients: [
      { name: "Mutton/goat on bone (more meat than rice)", qty: "1.5 kg" },
      { name: "Long-grain basmati", qty: "750g" },
      { name: "Full-fat yogurt", qty: "1 cup" },
      { name: "Raw papaya paste", qty: "2 tbsp" },
      { name: "Birista", qty: "3 large onions" },
      {
        name: "Garam masala (gentle, aromatic — not Hyderabadi hot)",
        qty: "3 tbsp homemade",
      },
      { name: "Saffron in warm milk", qty: "Generous" },
      { name: "Kewra water", qty: "2 tsp" },
      { name: "Rose water", qty: "2 tsp" },
      { name: "Dried plums (aloo bukhara)", qty: "10" },
      { name: "Potatoes, peeled, fried with turmeric", qty: "6 medium" },
      { name: "Pure ghee", qty: "½ cup" },
      { name: "Mawa/khoya (optional, traditional)", qty: "1 tbsp" },
      { name: "Atta dough for sealing", qty: "" },
    ],
    steps: [
      {
        title: "Overnight Marinade",
        desc: "Marinate raw mutton with yogurt, papaya paste, ginger-garlic paste, gentle garam masala, half the birista, ghee, and salt for minimum 8 hours — overnight preferred. The marinade must smell aromatic and floral, not aggressive with chili.",
        tip: "Bangladeshi kacchi is identifiable by fragrance, not heat. This is Awadhi subtlety applied to raw-meat technique. Under-season rather than over-season — the perfume comes from the aromatics.",
      },
      {
        title: "Par-boil",
        desc: "Par-boil basmati in heavily salted, whole-spice-infused water to exactly 70% done. Drain.",
      },
      {
        title: "Layer",
        desc: "Raw marinated mutton at the bottom of the sealed pot; fried turmeric-yellow potatoes placed over the meat; dried plums scattered; par-boiled rice on top; saffron milk drizzled; kewra water; rose water; mawa; remaining birista; ghee.",
      },
      {
        title: "Seal & Long Dum",
        desc: "Seal firmly with atta dough. Start on high heat for 7 minutes to build steam pressure, then reduce to the absolute lowest flame for 90 minutes to 2 hours. Place hot coal on the lid if available for traditional top-heat.",
      },
      {
        title: "Rest & Reveal",
        desc: "Rest sealed for 20 minutes off heat. Open only at serving. Accompany immediately with cold burhani.",
      },
    ],
    serve: [
      "Burhani (spiced buttermilk: yogurt, garlic, mint, roasted cumin, black salt)",
      "Kachumber salad",
      "Green chili",
      "Fresh lime",
    ],
    funFact:
      "Fakhruddin Biryani in Old Dhaka, founded in the 1970s, serves over 50,000 plates of kacchi on Eid days. The family recipe has never been written down in 50+ years — it is passed from cook to cook by hand, smell, and taste alone.",
  },
  {
    id: "mandi",
    slug: "yemeni-mandi",
    name: "Yemeni Chicken Mandi",
    region: "middle-east",
    country: "Yemen",
    flag: "\u{1F1FE}\u{1F1EA}",
    city: "Hadhramaut, Yemen",
    lat: 15.937,
    lng: 48.508,
    image: "mandi",
    tags: ["Pit-Smoked", "Whole Chicken", "Hawaij Spice", "Intermediate"],
    difficulty: "Intermediate",
    time: "2 hours",
    serves: "4–6",
    shortDesc:
      "The ancestral pit-fire rice of Yemen. Whole chicken rubbed with hawaij, rice absorbs the dripping juices below, all sealed in an underground tannour. The charcoal smoke is the secret.",
    history:
      "The name mandi derives from the Arabic nada (dew) — referring to the moist quality of the slowly pit-cooked meat. Originating in the Hadhramaut region of eastern Yemen, mandi traveled to Hyderabad with Yemeni migrants in the 17th century and now feeds the entire Gulf. The 13th-century Aleppan cookbook Kitab al-Wuslah already describes the underground-pit technique.",
    ingredients: [
      { name: "Whole chicken (or 6–8 bone-in thighs)", qty: "1.5 kg" },
      { name: "Long-grain basmati or jasmine rice", qty: "500g" },
      { name: "Chicken stock", qty: "4 cups" },
      { name: "Onion, sliced", qty: "2 large" },
      { name: "Garlic, crushed", qty: "4 cloves" },
      { name: "Dried black lime (loomi), pierced", qty: "1" },
      { name: "Turmeric", qty: "1 tsp" },
      { name: "Ground cumin", qty: "1 tsp" },
      { name: "Ground coriander", qty: "1 tsp" },
      { name: "Ground cinnamon", qty: "1 tsp" },
      { name: "Ground cardamom", qty: "1 tsp" },
      { name: "Ground cloves", qty: "½ tsp" },
      { name: "Black pepper", qty: "1 tsp" },
      { name: "Chili powder", qty: "½ tsp" },
      { name: "Saffron threads", qty: "½ tsp" },
      { name: "Bay leaf", qty: "1" },
      { name: "Ghee or oil", qty: "3 tbsp" },
      {
        name: "Natural charcoal piece",
        qty: "For the dukhan smoke — essential",
      },
      { name: "Salt", qty: "To taste" },
    ],
    steps: [
      {
        title: "Mix the Hawaij & Rub the Chicken",
        desc: "Combine all the ground spices with saffron and salt to make hawaij. Pat chicken completely dry. Rub the hawaij all over and under the skin, pressing into every cavity. Rest 30 minutes.",
      },
      {
        title: "Build the Broth",
        desc: "Heat ghee in a heavy oven-proof pot. Sauté onions until golden. Add garlic and remaining hawaij spices. Pour in stock. Add pierced loomi (dried black lime). Bring to a full boil.",
      },
      {
        title: "Add Rice & Chicken",
        desc: "Stir rinsed rice into the boiling spiced stock. Place the spice-rubbed whole chicken directly on top of the rice, skin-side up. Cover the pot very tightly.",
      },
      {
        title: "Oven Cook",
        desc: "Transfer to a 200°C (390°F) oven. Cook for 40–45 minutes. In the last 10 minutes, remove the lid and switch on the broiler/grill — this crisps the chicken skin to a beautiful mahogany.",
      },
      {
        title: "The Dukhan Smoke — The Most Important Step",
        desc: "Remove pot from oven. Push chicken aside. Place a small square of foil in a hollow in the rice. Using long tongs, place one piece of glowing natural charcoal in the foil cup. Immediately drop 3–4 drops of oil or ghee onto the charcoal — it will smoke instantly. Cover the entire pot tightly and trap the smoke for exactly 5 minutes.",
        tip: "The dukhan (smoke) is what makes mandi mandi. Without it you have a well-spiced chicken-rice. With it you have something that tastes like the Hadhramaut valley. Never skip this step.",
      },
      {
        title: "Fluff & Serve",
        desc: "Remove and discard the charcoal piece. Fluff the rice with a fork. Place rice on a massive platter. Arrange the whole chicken on top. Serve immediately.",
      },
    ],
    serve: [
      "Sahawiq/zahawiq (Yemeni hot sauce: tomato, garlic, cilantro, green chili, lemon — grind together fresh)",
      "Plain cold yogurt",
      "Pickled vegetables",
      "Warm flat bread",
    ],
    funFact:
      "A persistent legend holds that mandi was first cooked by the people of Prophet Saleh in the Ahqaf desert of Yemen, making it one of the oldest recorded cooking techniques on Earth. Hadhrami Yemeni migrants brought mandi to Hyderabad in the 17th century — where it is now served in dedicated Yemeni restaurants in the Barkas neighborhood.",
  },
  {
    id: "kabsa",
    slug: "saudi-kabsa",
    name: "Saudi Chicken Kabsa",
    region: "middle-east",
    country: "Saudi Arabia",
    flag: "\u{1F1F8}\u{1F1E6}",
    city: "Riyadh / Najd",
    lat: 24.713,
    lng: 46.675,
    image: "kabsa",
    tags: ["One-Pot", "Chicken", "Loomi", "Beginner"],
    difficulty: "Beginner",
    time: "90 minutes",
    serves: "4–6",
    shortDesc:
      "Saudi Arabia's unofficial national dish. Unlike biryani's layered architecture, kabsa cooks rice and meat together from the start. Loomi — dried black lime — is the soul.",
    history:
      "Kabsa is the national dish of Saudi Arabia and a staple of Bedouin hospitality across the Arabian Peninsula. The name comes from the Arabic root k-b-s (to press or squeeze), referring to cooking all ingredients together in one pot. Unlike biryani's layered dum structure, kabsa is a true one-pot dish where rice absorbs the meat's broth from the first moment.",
    ingredients: [
      { name: "Whole chicken, jointed", qty: "1.5 kg" },
      { name: "Basmati or long-grain rice, rinsed", qty: "3 cups" },
      { name: "Onion, diced", qty: "1 large" },
      { name: "Garlic cloves, minced", qty: "4" },
      { name: "Tomatoes, diced (or 3 tbsp tomato paste)", qty: "4" },
      { name: "Dried black limes (loomi), each pierced", qty: "3" },
      {
        name: "Ground kabsa spice mix (cumin, coriander, cinnamon, cardamom, clove, black pepper, nutmeg)",
        qty: "2 tsp",
      },
      {
        name: "Whole spices: cinnamon stick, 4 cardamom pods, bay leaf",
        qty: "",
      },
      { name: "Saffron threads or turmeric", qty: "Pinch" },
      { name: "Chicken stock", qty: "5 cups" },
      { name: "Ghee or olive oil", qty: "2 tbsp" },
      { name: "Toasted almonds, pine nuts, raisins", qty: "For garnish" },
      { name: "Salt", qty: "To taste" },
    ],
    steps: [
      {
        title: "Build the Aromatic Base",
        desc: "Heat ghee in a large heavy pot. Sauté onion until golden-translucent. Add garlic, tomatoes, whole spices, and ground kabsa spice mix. Cook until the tomatoes break down into a thick sauce, about 8 minutes.",
      },
      {
        title: "Brown the Chicken",
        desc: "Add chicken pieces to the pot. Brown lightly on all sides, about 5 minutes.",
      },
      {
        title: "Add Stock & Loomi",
        desc: "Pour in the chicken stock. Add the pierced dried black limes. The loomi slowly releases sour, slightly citrusy notes throughout the cooking. Bring to a boil, reduce heat, and simmer covered until chicken is fully cooked and tender — about 30–35 minutes.",
      },
      {
        title: "Finish the Chicken",
        desc: "Remove the cooked chicken pieces. Optional: place them briefly under a hot broiler/grill for 5–8 minutes to crisp and colour the skin. This contrast of tender meat and crisp skin is a kabsa signature.",
      },
      {
        title: "Cook the Rice in the Broth",
        desc: "Add the rinsed rice directly to the spiced chicken broth. Stir, bring to a simmer, cover tightly and cook on low heat until rice is cooked and all broth has been absorbed — about 20 minutes.",
        tip: "The rice absorbs every molecule of the spiced chicken broth from start to finish — this is the fundamental difference from biryani's separate-cooking approach.",
      },
      {
        title: "Plate & Garnish",
        desc: "Mound rice onto a large communal platter. Arrange the chicken pieces on top. Scatter toasted almonds, pine nuts, and golden raisins generously across everything.",
      },
    ],
    serve: [
      "Daqous (Saudi tomato-chili-garlic sauce — blend fresh and serve cold)",
      "Green salad",
      "Plain yogurt",
      "Warm Arabic flatbread",
    ],
    funFact:
      "Loomi — dried black lime — is unique to the cooking of Yemen, Oman, and the Gulf states. The limes are boiled in salt water then sun-dried for months until the interior turns completely black. The result is a concentrated, sour-smoky flavour impossible to replicate. Without loomi, kabsa is merely a spiced rice dish.",
  },
  {
    id: "nasi-briyani",
    slug: "malaysian-nasi-briyani",
    name: "Malaysian Nasi Briyani Ayam",
    region: "southeast-asia",
    country: "Malaysia & Singapore",
    flag: "\u{1F1F2}\u{1F1FE}",
    city: "Kuala Lumpur / Penang",
    lat: 3.14,
    lng: 101.687,
    image: "nasiBriyani",
    tags: ["Pandan & Evaporated Milk", "Chicken", "Separate Layers", "Intermediate"],
    difficulty: "Intermediate",
    time: "75 minutes",
    serves: "4",
    shortDesc:
      "The Southeast Asian adaptation — rice cooked by absorption with pandan and lemongrass, evaporated milk adding richness. Rice and chicken served separately, not layered. Pure Malaysian fingerprint.",
    history:
      "Brought to British Malaya by Tamil Muslim (Mamak) traders from the 19th century onward, and independently by Arab Hadhrami merchants in Penang and Johor. The local adaptation replaced dum cooking with an absorption method and added indigenous aromatics: pandan, lemongrass, and evaporated milk — creating something entirely new.",
    ingredients: [
      { name: "Bone-in chicken pieces", qty: "1 kg" },
      { name: "Basmati rice", qty: "2 cups" },
      { name: "Evaporated milk", qty: "1 cup" },
      { name: "Water", qty: "2 cups" },
      { name: "Pandan leaves, knotted", qty: "2" },
      { name: "Lemongrass stalk, bruised", qty: "1" },
      { name: "Greek yogurt", qty: "1 cup" },
      { name: "Biryani spice mix", qty: "1 tbsp" },
      { name: "Onion, sliced", qty: "2" },
      { name: "Ginger-garlic paste", qty: "1 tbsp" },
      { name: "Turmeric", qty: "½ tsp (for colour)" },
      { name: "Whole spices: cardamom, cinnamon, star anise, clove", qty: "" },
      { name: "Pure ghee", qty: "4 tbsp" },
      {
        name: "Fried shallots, toasted cashews, golden raisins",
        qty: "For garnish",
      },
    ],
    steps: [
      {
        title: "Marinate Chicken",
        desc: "Marinate chicken in yogurt, turmeric, biryani spice mix, and salt for 30 minutes.",
      },
      {
        title: "Cook Chicken Separately",
        desc: "Heat ghee; sauté whole spices until fragrant; add onions to soft golden. Add ginger-garlic paste; add marinated chicken; brown on all sides. Add one chopped tomato; cook until oil separates. Simmer covered until chicken is cooked through — about 25 minutes. Keep warm.",
      },
      {
        title: "Cook Rice by Absorption",
        desc: "In a separate pot: heat 2 tbsp ghee; sauté a few whole spices and sliced onion until soft. Add basmati rice; toast 1 minute. Pour in evaporated milk + water + knotted pandan leaves + bruised lemongrass + turmeric + salt. Cover tightly; cook on low heat for 15 minutes; rest undisturbed 5 minutes; fluff with a fork.",
        tip: "The evaporated milk + pandan + lemongrass combination is the Malaysian fingerprint. This transforms what would otherwise be a plain absorption method into something fragrant and rich. Never skip these three ingredients.",
      },
      {
        title: "Plate Separately",
        desc: "Plate rice on a large platter. Serve the chicken curry in a separate bowl alongside — not on top. Garnish rice with fried shallots, toasted cashews, and golden raisins.",
      },
    ],
    serve: [
      "Acar (pickled cucumber-carrot-pineapple in sweet-sour dressing)",
      "Pappadum",
      "Dalcha (lentil and mutton-scrap curry)",
      "Sliced cucumber",
      "Hard-boiled egg",
    ],
  },
  {
    id: "cape-malay",
    slug: "cape-malay-breyani",
    name: "Cape Malay Breyani",
    region: "africa",
    country: "South Africa",
    flag: "\u{1F1FF}\u{1F1E6}",
    city: "Bo-Kaap, Cape Town",
    lat: -33.918,
    lng: 18.423,
    image: "capeBreyani",
    tags: ["Brown Lentils", "Lamb", "VOC Legacy", "Intermediate"],
    difficulty: "Intermediate",
    time: "3 hours",
    serves: "6",
    shortDesc:
      "The most unique biryani on Earth. Created by enslaved cooks from Java, Bengal, and India in 17th-century Cape Town. The brown lentil layer exists nowhere else in the world.",
    history:
      "The Cape Malay community descends from enslaved and exiled people from Indonesia, Malaysia, Bengal, Sri Lanka, and the Coromandel Coast, brought to the Cape of Good Hope by the Dutch East India Company (VOC) from 1652 onward. Their breyani — spelled as it is pronounced in Afrikaans — is a creole creation unlike any other: South Asian technique, Dutch colonial spices, Indonesian aromatics, African ingredients.",
    ingredients: [
      { name: "Lamb or chicken on bone", qty: "1 kg" },
      { name: "Basmati rice, par-boiled to 70%", qty: "500g" },
      { name: "Brown lentils (masoor), boiled until soft", qty: "250g" },
      { name: "Birista", qty: "4 large onions" },
      {
        name: "Potatoes, parboiled then fried golden with turmeric",
        qty: "4 medium",
      },
      { name: "Hard-boiled eggs", qty: "6" },
      { name: "Buttermilk or yogurt (for marinade)", qty: "1 cup" },
      {
        name: "Breyani masala (cumin, coriander, cinnamon, cardamom, clove, allspice)",
        qty: "2 tsp",
      },
      { name: "Turmeric (borrie)", qty: "1 tsp" },
      { name: "Kashmiri paprika", qty: "1 tbsp" },
      { name: "Tomatoes, grated", qty: "2" },
      { name: "Saffron in warm milk", qty: "Generous" },
      { name: "Oil & ghee", qty: "" },
    ],
    steps: [
      {
        title: "Marinate",
        desc: "Marinate meat for 2+ hours in buttermilk + breyani masala + turmeric + paprika + ginger-garlic + salt.",
      },
      {
        title: "Cook the Meat",
        desc: "Brown meat in oil; add grated tomatoes; cook covered until completely tender and the masala is thick and glossy — 40–60 minutes for lamb. The gravy should coat the back of a spoon.",
      },
      {
        title: "Prepare the Layers",
        desc: "Cook lentils separately until soft but still holding their shape. Parboil potato halves; brush with turmeric; fry golden. Hard-boil eggs. Par-boil basmati to 70%.",
      },
      {
        title: "The Cape Malay Layer Order",
        desc: "Layer from bottom to top in a deep heavy pot: meat with all its thick gravy; brown lentils (this is the signature layer — found nowhere else); fried turmeric-yellow potatoes; whole hard-boiled eggs; half the par-boiled rice; saffron milk; birista; remaining rice; remaining birista; a final drizzle of ghee.",
        tip: "The brown lentil layer is non-negotiable. It is the Cape Malay community's most distinctive identity marker in food. Lentils absorb the meat gravy from below and the rice starch from above — creating a uniquely textured layer.",
      },
      {
        title: "Seal & Bake",
        desc: "Cover tightly with foil pressed around the rim, then a heavy lid on top. Bake at 160°C for 45 minutes — or lowest stovetop heat for 30 minutes.",
      },
    ],
    serve: [
      "Sambal (Cape Malay fresh chili sauce)",
      "Blatjang (fruit-vinegar chutney)",
      "Sliced banana with desiccated coconut",
      "Yellow rice on the side",
    ],
    funFact:
      "The Cape Malay community's Bo-Kaap neighborhood in Cape Town — famous for its brightly painted pastel houses — was once called the “Malay Quarter.” Breyani is served at every wedding, Eid, Mawlid, and funeral. It is, for this community, as identity-defining as biryani is in Hyderabad.",
  },
  {
    id: "zanzibari",
    slug: "zanzibari-biryani",
    name: "Zanzibari Biryani",
    region: "africa",
    country: "Tanzania",
    flag: "\u{1F1F9}\u{1F1FF}",
    city: "Stone Town, Zanzibar",
    lat: -6.165,
    lng: 39.198,
    image: "zanzibarBiryani",
    tags: ["Rose Water", "Chicken", "Cloves", "Intermediate"],
    difficulty: "Intermediate",
    time: "2 hours",
    serves: "4–6",
    shortDesc:
      "The Swahili Coast crown. Zanzibar — spice island, clove capital — created a biryani perfumed with its own cloves and rose water. The Indian Ocean trade in one pot.",
    history:
      "Zanzibar was the most cosmopolitan port on the East African coast, controlled by the Omani Sultans from 1698–1856. Indian merchant communities settled there from the 18th century, bringing biryani with them. The Omani Sultans' decision in the 1820s to forcibly transplant cloves from Indonesia to Zanzibar created both the island's economy and its dominant biryani flavour.",
    ingredients: [
      { name: "Chicken on bone", qty: "1 kg" },
      { name: "Basmati rice, par-boiled to 70%", qty: "500g" },
      { name: "Birista", qty: "3 large onions" },
      { name: "Tomatoes, chopped", qty: "4" },
      { name: "Ginger-garlic-chili paste", qty: "2 tbsp" },
      { name: "Plain yogurt", qty: "1 cup" },
      { name: "Zanzibar cloves (use generously)", qty: "6" },
      {
        name: "Green cardamom, cinnamon, nutmeg, mace",
        qty: "Heavy-handed",
      },
      {
        name: "Paprika, cumin, coriander, turmeric",
        qty: "1 tsp each",
      },
      { name: "Tomato paste", qty: "2 tbsp" },
      {
        name: "Rose water — the Zanzibari signature",
        qty: "2 generous tbsp",
      },
      { name: "Saffron in warm milk", qty: "Pinch" },
      { name: "Pure ghee", qty: "4 tbsp" },
    ],
    steps: [
      {
        title: "Build the Masala",
        desc: "Heat ghee; sauté whole cloves and spices until highly fragrant. Add onions to soft golden. Add ginger-garlic-chili paste; add ground spices; add chopped tomatoes and tomato paste. Cook to a thick, glossy, dark masala.",
      },
      {
        title: "Cook the Chicken",
        desc: "Add chicken; cook covered until tender — 25–35 minutes. Stir in whisked yogurt off the heat to prevent curdling. The gravy should be thick and deeply coloured.",
      },
      {
        title: "Layer",
        desc: "Half the par-boiled rice; chicken with all its gravy; remaining rice; birista; saffron milk; and then — the Zanzibari signature — drizzle 2 generous tablespoons of pure rose water across the entire top of the rice.",
      },
      {
        title: "Oven Dum",
        desc: "Cover tightly. Transfer to a 190°C oven for 35–40 minutes (or lowest stovetop heat for 25 minutes).",
        tip: "The rose water drizzled on top is what makes this Zanzibari. Without it, you have a well-spiced East African biryani. With it, the finished dish carries the scent of Persian trade routes all the way to the Swahili Coast.",
      },
    ],
    serve: [
      "Kachumbari (tomato-onion-chili-coriander-lime salad — the East African standard)",
      "Pickled green mango",
      "Coconut chutney",
    ],
    funFact:
      "Zanzibar produces approximately 70% of the world's clove supply — a crop stolen by Omani Sultan Said ibn Sultan from the Dutch colonial monopoly in the Indonesian Banda Islands in the 1820s. Every clove in Zanzibari biryani carries a history of colonial botanical piracy.",
  },
  {
    id: "mauritian",
    slug: "mauritian-briani",
    name: "Mauritian Chicken Briani",
    region: "africa",
    country: "Mauritius",
    flag: "\u{1F1F2}\u{1F1FA}",
    city: "Port Louis, Mauritius",
    lat: -20.166,
    lng: 57.502,
    image: "mauritianBriani",
    tags: ["Deg Pot", "Chicken", "Potato Lining", "Advanced"],
    difficulty: "Advanced",
    time: "4+ hours",
    serves: "6–8",
    shortDesc:
      "Mauritius's wedding centrepiece. Cooked in a copper deg pot lined with sliced raw potato to prevent sticking. Accompanied by mazavaroo — a fierce Mauritian green-chili paste.",
    history:
      "Mauritius's Indian Muslim community, descended from indentured labourers who arrived from the 1830s after the abolition of slavery, built an unbreakable briani tradition. Dedicated briani-houses exist that cook nothing else. The unique potato-lining technique — found nowhere else in the world — emerged from the practical constraints of cooking for hundreds at a time.",
    ingredients: [
      { name: "Chicken on bone", qty: "1.5 kg" },
      {
        name: "Basmati rice (soak 2 hours, par-boil to 60%)",
        qty: "600g",
      },
      {
        name: "Potatoes — thin-sliced (for pot lining) + quartered and fried yellow",
        qty: "5 large total",
      },
      {
        name: "Hard-boiled eggs, pan-fried with turmeric",
        qty: "4",
      },
      { name: "Birista", qty: "4 large onions" },
      { name: "Full-fat yogurt", qty: "1 cup" },
      { name: "Ginger paste + garlic paste", qty: "1 tbsp each" },
      { name: "Mauritian briani masala", qty: "2 tbsp" },
      { name: "Saffron in warm water", qty: "Generous" },
      { name: "Fresh mint & coriander", qty: "Large bunches" },
      { name: "Honey", qty: "1 tbsp" },
      { name: "Pure ghee", qty: "6 tbsp" },
      { name: "Atta dough for sealing", qty: "" },
    ],
    steps: [
      {
        title: "Marinate",
        desc: "Marinate chicken for 2+ hours (overnight preferred) in yogurt, ginger-garlic, briani masala, salt, chili, mint, coriander, honey, and ghee. The honey is a Mauritian touch — it caramelises the chicken slightly during dum.",
      },
      {
        title: "Line the Pot with Potato",
        desc: "This is the Mauritian innovation. Line the entire bottom of a heavy-bottomed pot with thin slices of raw potato, slightly overlapping. This prevents the rice from burning and creates an extraordinary potato base that absorbs all the meat juices dripping down.",
        tip: "The potato lining is what makes Mauritian briani Mauritian. No other biryani tradition in the world does this. The finished potato wafers at the bottom of the pot — golden, soaked in meat juices — are fought over at the table.",
      },
      {
        title: "Layer",
        desc: "Marinated chicken (still raw) on top of the potato lining; fried potato quarters; pan-fried eggs; half the birista; half the par-boiled rice; saffron water drizzled; mint and coriander; remaining rice; remaining birista; ghee across the top.",
      },
      {
        title: "Seal & Dum",
        desc: "Seal firmly with atta dough. Cook on lowest possible heat for 45 minutes. Rest sealed for 20–30 minutes without opening.",
      },
    ],
    serve: [
      "Chatini pomme d'amour (Mauritian tomato salsa: blend fresh tomatoes, onion, chili, coriander, salt, lime)",
      "Vinegar-based cucumber and carrot salad",
      "Mazavaroo (fierce Mauritian green-chili paste)",
      "Mint chutney",
    ],
    funFact:
      "The potato slices lining the bottom of a Mauritian deg pot are the most prized part of the briani. They emerge golden and crisp on one side, soaked in chicken juices on the other. At Mauritian wedding feasts, the person who gets the pot-bottom potato is considered the luckiest guest.",
  },
];

export const BIRYANI_BY_SLUG: Record<string, Biryani> = Object.fromEntries(
  BIRYANIS.map((b) => [b.slug, b]),
);

export const BIRYANI_BY_ID: Record<string, Biryani> = Object.fromEntries(
  BIRYANIS.map((b) => [b.id, b]),
);

export function biryanisByRegion(region: BiryaniRegion): Biryani[] {
  return BIRYANIS.filter((b) => b.region === region);
}
