import type { Metadata } from "next";
import WorldAtlas from "@/components/WorldAtlas";

export const metadata: Metadata = {
  title: "Atlas",
  description:
    "An interactive world map of biryani — fourteen recipes, twelve countries, five regions. Pin by pin.",
};

export default function MapPage() {
  return (
    <div className="bg-night pb-24">
      <header className="mx-auto max-w-7xl px-5 pt-32 md:px-10 md:pt-40">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          The atlas
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-ivory md:text-8xl">
          A pot
          <span className="italic text-gold"> in every port.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
          Click a pin to open that region&rsquo;s biryanis. On smaller screens
          the pins become a scrolling tab bar at the top of the panel.
        </p>
      </header>

      <WorldAtlas />
    </div>
  );
}
