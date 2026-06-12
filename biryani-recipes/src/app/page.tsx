import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import StatsRow from "@/components/StatsRow";
import RecipeCard from "@/components/RecipeCard";
import Grain from "@/components/Grain";
import { BIRYANIS } from "@/data/biryanis";
import { REGIONS } from "@/data/regions";
import { FACTS } from "@/data/facts";
import { unsplash } from "@/data/images";

const FEATURED_IDS = [
  "hyderabadi-kacchi",
  "lucknowi",
  "kolkata",
  "cape-malay",
  "mandi",
  "thalassery",
] as const;

const FEATURED = FEATURED_IDS.map((id) => BIRYANIS.find((b) => b.id === id)!).filter(
  Boolean,
);

const FEATURED_FACTS = FACTS.slice(0, 3);

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />

      <StatsRow />

      <section className="relative bg-smoke py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-16">
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
                Featured recipes
              </span>
              <h2 className="mt-5 font-display text-4xl tracking-tight text-ivory md:text-6xl">
                Six biryanis to start with —
                <span className="italic text-gold"> chosen for technique.</span>
              </h2>
            </div>
            <Link
              href="/varieties"
              className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-ivory transition-colors hover:text-gold"
            >
              All fourteen
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {FEATURED.map((b, i) => (
              <RecipeCard key={b.id} biryani={b} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night py-16 md:py-24 lg:py-36">
        <Grain opacity={0.05} />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ash/60 md:aspect-[4/5]">
            <Image
              src={unsplash("mughalCourt", { w: 1200, q: 85 })}
              alt="Mughal-era architectural detail evoking the court kitchens that codified dum pukht"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(8,7,10,0) 30%, rgba(8,7,10,0.85) 100%)",
              }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Persia → Delhi → Hyderabad → Dhaka → Cape Town
              </span>
              <p className="mt-3 font-display text-2xl text-ivory md:text-3xl">
                One pot. A thousand years of migration.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
              The story
            </span>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-ivory md:text-6xl">
              Biryani is not <em className="italic text-gold">one</em> dish.
              It is a technique that travelled.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ivory-dim md:text-lg">
              <p>
                Persian polow crossed the Khyber Pass with Arab and Persian
                traders. The Mughal court codified the sealed-pot method in
                the seventeenth century. Asaf Jah I carried it south to
                Hyderabad in 1713; Wajid Ali Shah carried it east to Kolkata in
                exile in 1856.
              </p>
              <p>
                Tamil Muslim traders took it to Penang and Singapore. Yemeni
                migrants brought mandi to the Hyderabad neighborhood of
                Barkas. Indian indentured labourers carried it to Mauritius;
                enslaved cooks from Java and Bengal carried it to the Cape of
                Good Hope. Each port added something irreversible.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/history"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-medium uppercase tracking-wider text-night transition-transform hover:scale-[1.02]"
              >
                Read the timeline
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/map"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-ivory/40 px-7 text-sm font-medium uppercase tracking-wider text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <MapPin className="h-4 w-4" />
                Open the atlas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-smoke py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
              The world map
            </span>
            <h2 className="mt-5 font-display text-4xl tracking-tight text-ivory md:text-6xl">
              Five regions. Fourteen dishes.
              <span className="italic text-gold"> One technique.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {REGIONS.map((region) => (
              <Link
                key={region.id}
                href={`/map#${region.id}`}
                className="group relative flex h-full flex-col justify-between rounded-2xl border border-ash/60 bg-char p-6 transition-colors duration-300 hover:border-gold/60 hover:bg-ash"
                style={{ transitionTimingFunction: "var(--ease-apple)" }}
              >
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                    {region.label}
                  </span>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-ivory">
                    {region.name}
                  </h3>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-ash/60 pt-4 text-xs uppercase tracking-wider text-ivory-dim">
                  <span>{region.varieties.length} recipes</span>
                  <ArrowRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end md:gap-16">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
                <Sparkles className="h-3 w-3" />
                Things to know
              </span>
              <h2 className="mt-5 font-display text-4xl tracking-tight text-ivory md:text-6xl">
                Three facts before you cook.
              </h2>
            </div>
            <Link
              href="/facts"
              className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-ivory transition-colors hover:text-gold"
            >
              See all twelve
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {FEATURED_FACTS.map((f) => (
              <article
                key={f.num}
                className="rounded-2xl border border-ash/60 bg-char p-7 transition-colors hover:border-gold/50"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                  Fact {f.num}
                </span>
                <h3 className="mt-4 font-display text-2xl leading-tight text-ivory">
                  {f.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory-dim">
                  {f.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-smoke py-20 md:py-28 lg:py-40">
        <Grain opacity={0.06} />
        <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            Start cooking
          </span>
          <h2 className="mt-6 font-display text-5xl tracking-tight text-ivory md:text-7xl">
            Pick a pot.
            <br />
            <span className="italic text-gold">Seal it.</span> Wait.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
            Every recipe here begins with the same instruction: trust the dum.
            Pick the city you want to cook from, gather the spices, and we
            will walk you the rest of the way.
          </p>
          <Link
            href="/varieties"
            className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-gold px-8 text-sm font-medium uppercase tracking-wider text-night transition-transform duration-300 hover:scale-[1.02]"
            style={{ transitionTimingFunction: "var(--ease-apple)" }}
          >
            Browse all recipes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
