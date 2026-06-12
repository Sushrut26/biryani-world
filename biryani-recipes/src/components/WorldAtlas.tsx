"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { BIRYANIS } from "@/data/biryanis";
import { REGIONS } from "@/data/regions";
import { unsplash } from "@/data/images";
import { slideInRight } from "@/lib/animations";

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldAtlas() {
  const reduce = useReducedMotion();
  const [activeRegionId, setActiveRegionId] = useState<string | null>(null);

  const activeRegion = REGIONS.find((r) => r.id === activeRegionId) ?? null;
  const activeRecipes =
    activeRegion?.varieties
      .map((id) => BIRYANIS.find((b) => b.id === id))
      .filter((b): b is NonNullable<typeof b> => Boolean(b)) ?? [];

  return (
    <div className="mx-auto mt-12 max-w-7xl px-5 md:mt-16 md:px-10">
      <div className="flex gap-3 overflow-x-auto pb-3 md:hidden [-webkit-overflow-scrolling:touch]">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setActiveRegionId(r.id)}
            className={[
              "inline-flex h-11 shrink-0 cursor-pointer items-center rounded-full border px-5 text-xs font-medium uppercase tracking-wider transition-colors",
              activeRegionId === r.id
                ? "border-gold bg-gold text-night"
                : "border-ash text-ivory hover:border-gold/60",
            ].join(" ")}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-ash/60 bg-[#1a1612]">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 175, center: [20, 12] }}
          width={980}
          height={520}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            backgroundColor: "transparent",
          }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: Array<{ rsmKey: string }> }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#3a3128",
                      stroke: "#0e0c0a",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#544632",
                      stroke: "#0e0c0a",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#6a5840",
                      stroke: "#0e0c0a",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {BIRYANIS.map((b) => (
            <Marker key={b.id} coordinates={[b.lng, b.lat]}>
              <g
                onClick={() => setActiveRegionId(b.region)}
                style={{ cursor: "pointer" }}
              >
                <circle r={16} fill="transparent" />
                <motion.circle
                  r={6}
                  fill="rgba(200,149,42,0.25)"
                  animate={reduce ? undefined : { r: [6, 12, 6], opacity: [0.6, 0, 0.6] }}
                  transition={
                    reduce
                      ? undefined
                      : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                  }
                />
                <circle
                  r={4}
                  fill="#C8952A"
                  stroke="#08070A"
                  strokeWidth={1}
                />
                <title>{`${b.name} — ${b.city}, ${b.country}`}</title>
              </g>
            </Marker>
          ))}
        </ComposableMap>

        <div className="border-t border-ash/60 px-5 py-5 md:hidden">
          <p className="text-xs uppercase tracking-wider text-ivory-dim">
            Tap a pin or pick a region above.
          </p>
        </div>
      </div>

      <div className="mt-10 hidden flex-wrap gap-3 md:flex">
        {REGIONS.map((r) => (
          <button
            key={r.id}
            type="button"
            onClick={() => setActiveRegionId(r.id)}
            className={[
              "inline-flex h-11 cursor-pointer items-center rounded-full border px-5 text-xs font-medium uppercase tracking-wider transition-colors",
              activeRegionId === r.id
                ? "border-gold bg-gold text-night"
                : "border-ash text-ivory hover:border-gold/60",
            ].join(" ")}
          >
            {r.label}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeRegion && (
          <motion.aside
            key={activeRegion.id}
            role="dialog"
            aria-label={`${activeRegion.name} — biryanis`}
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-ash/60 bg-smoke shadow-2xl md:max-w-lg"
          >
            <div className="flex items-start justify-between gap-4 border-b border-ash/60 px-6 py-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                  {activeRegion.label}
                </span>
                <h2 className="mt-2 font-display text-3xl leading-tight text-ivory md:text-4xl">
                  {activeRegion.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveRegionId(null)}
                aria-label="Close region panel"
                className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-ash text-ivory transition-colors hover:border-gold hover:text-gold"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6 [-webkit-overflow-scrolling:touch]">
              <p className="text-sm leading-relaxed text-ivory-dim">
                {activeRegion.origin}
              </p>
              <p className="mt-5 border-l-2 border-gold/60 pl-4 font-display text-lg italic text-ivory">
                {activeRegion.fact}
              </p>

              <div className="mt-8 grid gap-5">
                {activeRecipes.map((b) => (
                  <Link
                    key={b.id}
                    href={`/recipes/${b.slug}`}
                    className="group flex gap-4 rounded-xl border border-ash bg-char p-3 transition-colors hover:border-gold/50"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
                      <Image
                        src={unsplash(b.image, { w: 240, q: 70 })}
                        alt={b.name}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                        {b.flag} {b.city}
                      </span>
                      <h3 className="mt-1 font-display text-xl leading-snug text-ivory">
                        {b.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs text-ivory-dim">
                        {b.shortDesc}
                      </p>
                    </div>
                    <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
