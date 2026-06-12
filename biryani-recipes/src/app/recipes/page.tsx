import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import { BIRYANIS, biryanisByRegion } from "@/data/biryanis";
import { REGIONS } from "@/data/regions";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Recipes grouped by region — South Asia, Pakistan & Bangladesh, Middle East, Southeast Asia, Africa & the Indian Ocean.",
};

export default function RecipesIndex() {
  return (
    <div className="bg-night pb-24">
      <header className="mx-auto max-w-7xl px-5 pt-32 md:px-10 md:pt-40">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          The archive · grouped by region
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-ivory md:text-8xl">
          Recipes by the
          <span className="italic text-gold"> port they sailed from.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
          Five regions, {BIRYANIS.length} biryanis. Each block opens with a
          short note on what unites the dishes — and what separates them.
        </p>
        <Link
          href="/varieties"
          className="mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-ivory transition-colors hover:text-gold"
        >
          Or browse the filterable grid
          <ArrowRight className="h-4 w-4" />
        </Link>
      </header>

      <div className="mx-auto mt-20 flex max-w-7xl flex-col gap-24 px-5 md:px-10 md:mt-28 md:gap-32">
        {REGIONS.map((region) => {
          const items = biryanisByRegion(region.id);
          if (items.length === 0) return null;
          return (
            <section key={region.id} id={region.id}>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
                    {region.label}
                  </span>
                  <h2 className="mt-4 font-display text-4xl tracking-tight text-ivory md:text-6xl">
                    {region.name}
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-ivory-dim md:text-lg">
                    {region.origin}
                  </p>
                  <p className="mt-6 border-l-2 border-gold/60 pl-4 font-display text-lg italic text-ivory-dim md:text-xl">
                    {region.fact}
                  </p>
                </div>

                <div className="grid gap-6">
                  {items.map((b) => (
                    <RecipeCard key={b.id} biryani={b} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
