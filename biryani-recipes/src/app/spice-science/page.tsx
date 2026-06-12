import type { Metadata } from "next";
import Image from "next/image";
import Grain from "@/components/Grain";
import SpiceGrid from "@/components/SpiceGrid";
import { SPICE_CARDS } from "@/data/facts";
import { unsplash } from "@/data/images";

export const metadata: Metadata = {
  title: "Spice Science",
  description:
    "The chemistry of biryani — papain in raw papaya, 2-acetyl-1-pyrroline in basmati, the Maillard reaction in birista. Why every rule exists.",
};

export default function SpiceSciencePage() {
  return (
    <div className="bg-night pb-32">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={unsplash("spicesMix", { w: 1920, q: 85 })}
            alt="Whole biryani spices spread out — cardamom, clove, cinnamon, star anise"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,7,10,0.6) 0%, rgba(8,7,10,0.5) 30%, rgba(8,7,10,0.95) 100%)",
            }}
          />
          <Grain opacity={0.05} />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            Why the rules exist
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-ivory md:text-8xl">
            The chemistry of a
            <span className="italic text-gold"> sealed pot.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory md:text-lg">
            Every rule in a biryani recipe has a molecular reason behind it.
            The 70% par-boil, two tablespoons of papaya per kilo, one drop of
            meetha attar — these are not superstitions. They are the result
            of a few hundred years of kitchens measuring what works.
          </p>
        </div>
      </section>

      <SpiceGrid cards={SPICE_CARDS} />
    </div>
  );
}
