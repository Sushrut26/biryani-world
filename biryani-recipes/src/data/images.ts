// Image sources for recipes and site imagery.
//
// Three kinds of entries:
//   - { kind: "unsplash", id }       → resized via Unsplash URL params
//   - { kind: "local", path }        → /public path, next/image handles resizing
//   - { kind: "wikimedia", url, ... } → upload.wikimedia.org, CC-licensed, needs credit

export const IMAGE_BASE = "https://images.unsplash.com/" as const;

type ImageSource =
  | { kind: "unsplash"; id: string }
  | { kind: "local"; path: string }
  | {
      kind: "wikimedia";
      url: string;
      filename: string;
      credit?: string;
    };

const u = (id: string): ImageSource => ({ kind: "unsplash", id });
const local = (path: string): ImageSource => ({ kind: "local", path });
const wm = (filename: string, credit?: string): ImageSource => ({
  kind: "wikimedia",
  url: `https://upload.wikimedia.org/wikipedia/commons/${filename}`,
  filename,
  credit,
});

export const IMAGES = {
  hero: u("photo-1631515243349-e0cb75fb8d3a"),
  heroPot: u("photo-1589302168068-964664d93dc0"),
  generalBiryani1: u("photo-1567188040759-fb8a883dc6d8"),
  generalBiryani2: u("photo-1565299624946-b28f40a0ae38"),

  // Authentic regional photos from Wikimedia Commons, downloaded to /public/recipes/.
  // Credits — Kacchi: Mahi Tatavarty (CC BY-SA 4.0). Pakki: Dheerajk88 (CC BY-SA 4.0).
  // Lucknowi: Kalesh (CC BY-SA 4.0). Kolkata: DeepanjanGhosh (CC BY-SA 4.0).
  // Thalassery: Samira Khan (CC BY 2.0). Ambur: Sreenorainee (CC BY-SA 4.0).
  // Sindhi: Miansari66 (Public Domain). Mandi: Evan Bench (CC BY 2.0). Kabsa: Bhj028 (CC0).
  hyderabadiKacchi: local("/recipes/hyderabadi-kacchi.jpg"),
  hyderabadiPakki: local("/recipes/hyderabadi-pakki.jpg"),
  lucknowiBiryani: local("/recipes/lucknowi.jpg"),
  kolkataBiryani: local("/recipes/kolkata.jpg"),
  thalasseryBiryani: local("/recipes/thalassery.jpg"),
  amburBiryani: local("/recipes/ambur.jpg"),
  sindhiBiryani: local("/recipes/sindhi.jpg"),
  mandi: local("/recipes/mandi.jpg"),
  kabsa: local("/recipes/kabsa.jpg"),

  // legacy Unsplash entries retained for site imagery (not for recipes)
  muttonBiryani1: u("photo-1705174299330-939dd03cc864"),
  muttonBiryani2: u("photo-1691171047312-d809eccef46d"),
  muttonBiryani3: u("photo-1691170979035-27e5ec943205"),
  chickenBiryani1: u("photo-1603360946369-dc9bb6258143"),
  chickenBiryani2: u("photo-1574653853027-5382a3d23a15"),
  keralaBiryani: u("photo-1601050690597-df0568f70950"),
  basmatiRice: u("photo-1586201375761-83865001e31c"),
  spicesMix: wm("b/b5/Essence_of_Indian_food.JPG", "Wikimedia Commons"),
  saffron: u("photo-1568702846914-96b305d2aaeb"),
  friedOnions: u("photo-1547592166-23ac45744acd"),
  khaoMok: u("photo-1504674900247-0877df9cc836"),
  mughalCourt: u("photo-1524492412937-b28074a5d7da"),
  spiceRoute: u("photo-1587334207407-da00b8ca9a29"),
  dumpot: u("photo-1631515243349-e0cb75fb8d3a"),
  steamCooking: u("photo-1565299507177-b0ac66763828"),
  spiceScience: u("photo-1596040033229-a9821ebd058d"),

  // AI-generated, watermark-stripped, served from /public/recipes/
  bangladeshiKacchi: local("/recipes/bangladeshi-kacchi.jpg"),
  nasiBriyani: local("/recipes/nasi-briyani.jpg"),
  capeBreyani: local("/recipes/cape-malay.jpg"),
  zanzibarBiryani: local("/recipes/zanzibari.jpg"),
  mauritianBriani: local("/recipes/mauritian.jpg"),
} satisfies Record<string, ImageSource>;

export type ImageKey = keyof typeof IMAGES;

export function unsplash(
  key: ImageKey,
  opts: { w?: number; q?: number } = {},
): string {
  const src = IMAGES[key];
  switch (src.kind) {
    case "local":
      return src.path;
    case "wikimedia":
      return src.url;
    case "unsplash": {
      const w = opts.w ?? 1200;
      const q = opts.q ?? 80;
      return `${IMAGE_BASE}${src.id}?w=${w}&q=${q}&auto=format&fit=crop`;
    }
  }
}

export function imageCredit(key: ImageKey): string | null {
  const src = IMAGES[key];
  if (src.kind === "wikimedia") {
    return src.credit ?? "Wikimedia Commons";
  }
  return null;
}

export function imageSourcePage(key: ImageKey): string | null {
  const src = IMAGES[key];
  if (src.kind === "wikimedia") {
    return `https://commons.wikimedia.org/wiki/File:${src.filename.split("/").pop()}`;
  }
  return null;
}
