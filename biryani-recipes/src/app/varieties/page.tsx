import type { Metadata } from "next";
import VarietiesGrid from "@/components/VarietiesGrid";
import { BIRYANIS } from "@/data/biryanis";

export const metadata: Metadata = {
  title: "All Varieties",
  description:
    "Every biryani in the archive — Hyderabadi to Cape Malay. Filter by region, difficulty, or main protein.",
};

export default function VarietiesPage() {
  return (
    <div className="bg-night pb-24">
      <header className="mx-auto max-w-7xl px-5 pt-32 md:px-10 md:pt-40">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          The archive · {BIRYANIS.length} recipes
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-ivory md:text-8xl">
          Every biryani we have
          <span className="italic text-gold"> cooked.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
          Each entry is anchored to a city, a method, and a community. Filter
          by region or by what is in your kitchen tonight.
        </p>
      </header>

      <VarietiesGrid recipes={BIRYANIS} />
    </div>
  );
}
