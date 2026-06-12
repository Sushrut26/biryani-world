import type { Metadata } from "next";
import FactsGrid from "@/components/FactsGrid";
import { FACTS } from "@/data/facts";

export const metadata: Metadata = {
  title: "Facts",
  description:
    "Twelve facts about biryani — from 93 million Swiggy orders to the kewra-water threshold that turns rice into soap.",
};

export default function FactsPage() {
  return (
    <div className="bg-night pb-28">
      <header className="mx-auto max-w-7xl px-5 pt-32 md:px-10 md:pt-40">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          Twelve facts
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-ivory md:text-8xl">
          Things you only learn
          <span className="italic text-gold"> after the fifth pot.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
          Numbers, histories, and the kind of detail that turns a recipe into
          a story. Read in any order.
        </p>
      </header>

      <FactsGrid facts={FACTS} />
    </div>
  );
}
