"use client";

import { BIRYANIS } from "@/data/biryanis";

const NAMES = BIRYANIS.map((b) => b.name);

export default function Marquee() {
  return (
    <div
      className="group relative overflow-hidden border-y border-ash/60 bg-smoke py-7"
      aria-label="Biryani varieties ticker"
    >
      <div
        className="flex w-max items-center gap-12 whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{
          animation: "marquee 35s linear infinite",
        }}
      >
        {[...NAMES, ...NAMES].map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-12 font-display italic text-3xl text-ivory/80 md:text-5xl"
          >
            {name}
            <span aria-hidden className="text-gold">
              &#10022;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
