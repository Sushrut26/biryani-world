// Generates the 9 remaining biryani photos via Gemini 2.5 Flash Image
// (Nano Banana). Writes to /public/recipes/{slug}.jpg.
// Idempotent: skips any file that already exists. Delete a file to regenerate.
//
// Usage: node --env-file=.env.local scripts/generate-images.mjs

import { writeFile, access } from "node:fs/promises";
import { join } from "node:path";
import { GoogleGenAI } from "@google/genai";
import sharp from "sharp";

const OUT_DIR = new URL("../public/recipes/", import.meta.url).pathname;

const SHARED_PREAMBLE = `Editorial food photography, dark luxury cookbook aesthetic. Shot 3/4 above with a single warm side light, deep shadows, shallow depth of field. Background: charcoal-black weathered wooden table with subtle atmospheric haze of steam. Color palette grounded in gold, ivory, saffron, and deep red — no purple, no neon. No text, no logos, no watermarks. 5:4 aspect ratio, 2400×1920. Photorealistic.

`;

const PROMPTS = [
  {
    slug: "hyderabadi-kacchi",
    prompt: `A heavy unglazed clay handi pot, atta-dough seal cracked open at the rim revealing a hardened browned crust still clinging to the lip. Inside: tall fluffy basmati rice streaked with deep saffron orange, white, and pale yellow bands. Tender pieces of bone-in goat mutton peek through where the rice has been gently disturbed by a spoon. Crisp fried golden onions scattered across the top. Heavy steam rising. Beside the pot: a small bowl of deep red-brown mirchi ka salan (peanut-sesame chili curry) and a sliced raw onion with a lemon wedge. The cracked dough seal must be clearly visible.`,
  },
  {
    slug: "hyderabadi-pakki",
    prompt: `A polished copper serving plate piled with golden saffron biryani, several pieces of bone-in chicken visible through the rice (mahogany glaze on the skin from oil-separated masala), fried onion crisps and chopped mint leaves scattered on top, a single bright saffron streak across the surface. Beside the plate: a small white ceramic bowl of boondi raita (yogurt with crisp chickpea pearls) and a steel cup of dark red mirchi ka salan. A lemon wedge and raw onion rings on a side dish. Restaurant-elegant rather than rustic — Paradise-style presentation elevated to cookbook quality.`,
  },
  {
    slug: "lucknowi",
    prompt: `A shallow hammered-silver chafing dish containing pale ivory basmati rice flecked sparingly with saffron strands and one bright orange streak. Tender boneless mutton pieces, soft and glossy from yakhni cooking, nestled into the rice. A scatter of fresh rose petals as garnish. Beside the dish: a small etched silver bowl of pale white burani raita (garlic yogurt), a piece of golden sheermal bread folded on a linen napkin, and a small attardan (perfume bottle) suggestion. The mood is Persian, restrained, perfumed — delicate luxury, not the bold spice-forward look of Hyderabad.`,
  },
  {
    slug: "kolkata",
    prompt: `A flat brass thali plate with pale yellow saffron-streaked basmati rice mounded in the center. Two golden turmeric-yellow potato halves prominently placed on top — these potatoes are the visual hero and must dominate. A piece of bone-in mutton on the side of the mound. A whole hard-boiled egg sliced lengthwise. A faint scattering of fried onions. A wedge of lime. The rice is light in spice and color — Kolkata biryani is gentler than its Hyderabadi cousin. Beside the thali: a small bowl of simple salan. Mood: refined, exile-aristocratic, the food of Wajid Ali Shah's Metiabruz.`,
  },
  {
    slug: "thalassery",
    prompt: `A round terracotta serving dish lined with a glossy green banana leaf. Mounded on the leaf: tiny short-grain Kaima rice (visibly shorter and stickier than basmati), generous chicken curry pieces visible, generous handfuls of fried golden cashew nuts and plump golden raisins scattered across the surface. A wedge of lime, a single fried green chili, and small ceramic bowls of white coconut chammanthi and dark date pickle on the side. A pappadum standing upright beside the dish. Mood: coastal Kerala, Mappila-Muslim aristocratic, fennel-and-coconut warmth.`,
  },
  {
    slug: "ambur",
    prompt: `A hammered brass serving plate containing rust-orange tinted rice (Seeraga Samba — visibly shorter and rounder than basmati) generously layered with chunks of bone-in goat mutton glazed in a deep red chili paste masala. Sprinkle of fresh coriander leaves on top. Beside the plate: an essential small bowl of dhalcha (mutton-and-bottle-gourd dal curry, glossy brown-yellow), a small bowl of brinjal pachadi (purple eggplant raita), a raw onion ring slice, and a lime wedge. Tamil Nadu wood-fired warmth — spiced, not floral.`,
  },
  {
    slug: "sindhi",
    prompt: `A wide stainless-steel serving platter piled with vivid deep red-orange rice, heavily tomato-stained. Chunks of bone-in chicken visible through the rice. Several dried plums (aloo bukhara, dark wrinkled purple-black) prominently scattered across the surface. Slit green chilies and thin lemon slices nestled into the rice. A scatter of fresh coriander. Beside the platter: a small bowl of crisp white kachumber salad (cucumber, tomato, onion), and a wedge of fresh lime. The vibrancy is the point — Sindhi biryani is the loudest, brightest biryani in the world.`,
  },
  {
    slug: "mandi",
    prompt: `A massive round hammered-copper communal platter. Centerpiece: a whole golden-mahogany roasted chicken with crisp lacquered skin, perched on top of a generous bed of saffron-yellow long-grain basmati rice. Scattered across the rice: toasted whole almonds, pine nuts, golden raisins. A faint visible wisp of charcoal smoke rising from the rice (the dukhan signature). Beside the platter: a small ceramic bowl of bright green sahawiq hot sauce (cilantro, garlic, green chili), a stack of warm khubz flatbread, and a few pickled vegetables. Mood: Hadhrami desert luxury, communal, ancient.`,
  },
  {
    slug: "kabsa",
    prompt: `A huge round polished brass platter with long-grain rice in pale amber, flavored visibly with spices. Several pieces of bone-in chicken with crisp dark mahogany skin arranged on top of the rice. Three pierced dried black limes (loomi — wrinkled, almost coal-black) tucked into the rice as visual signatures — these must read clearly. Generous scatter of toasted almonds, golden raisins, and pine nuts across the top. Beside the platter: a small bowl of bright red daqous (tomato-chili-garlic sauce), warm Arabic flatbread folded on a linen napkin. Bedouin majlis mood, communal, generous.`,
  },
];

const apiKey = process.env.GOOGLE_AI_API_KEY;
if (!apiKey) {
  console.error("GOOGLE_AI_API_KEY not set. Run with --env-file=.env.local");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const exists = (p) =>
  access(p).then(
    () => true,
    () => false,
  );

async function generateOne({ slug, prompt }) {
  const outPath = join(OUT_DIR, `${slug}.jpg`);
  if (await exists(outPath)) {
    console.log(`skip   ${slug}.jpg (already exists)`);
    return { slug, status: "skip" };
  }

  const fullPrompt = SHARED_PREAMBLE + prompt;

  const t0 = Date.now();
  let response;
  try {
    response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: fullPrompt,
    });
  } catch (err) {
    console.error(`error  ${slug}: ${err.message ?? err}`);
    return { slug, status: "error", error: err };
  }

  const parts = response?.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p) => p.inlineData?.data);
  if (!imgPart) {
    console.error(`error  ${slug}: no image in response`);
    return { slug, status: "no-image" };
  }

  const raw = Buffer.from(imgPart.inlineData.data, "base64");

  // Normalize to JPEG at 90% mozjpeg
  const normalized = await sharp(raw).jpeg({ quality: 90, mozjpeg: true }).toBuffer();
  await writeFile(outPath, normalized);

  console.log(
    `ok     ${slug}.jpg  ${(normalized.length / 1024).toFixed(0)} KB  ${(Date.now() - t0) / 1000}s`,
  );
  return { slug, status: "ok" };
}

const results = [];
for (const item of PROMPTS) {
  // Sequential, not parallel — Gemini free tier rate-limits aggressively.
  results.push(await generateOne(item));
}

const ok = results.filter((r) => r.status === "ok").length;
const skipped = results.filter((r) => r.status === "skip").length;
const failed = results.filter((r) => r.status !== "ok" && r.status !== "skip");

console.log(`\ndone. ok: ${ok}, skipped: ${skipped}, failed: ${failed.length}`);
if (failed.length) {
  console.log("failed slugs:", failed.map((f) => f.slug).join(", "));
  process.exit(1);
}
