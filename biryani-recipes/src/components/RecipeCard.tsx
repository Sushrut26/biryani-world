"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock, Flame } from "lucide-react";
import { unsplash } from "@/data/images";
import { fadeUp } from "@/lib/animations";
import type { Biryani } from "@/data/biryanis";

const DIFFICULTY_TINT: Record<Biryani["difficulty"], string> = {
  Beginner: "text-emerald-200/90 border-emerald-200/30",
  Intermediate: "text-gold border-gold/40",
  Advanced: "text-saffron border-saffron/40",
  Expert: "text-[color:var(--red-spice)] border-[color:var(--red-spice)]/60",
};

export default function RecipeCard({
  biryani,
  priority = false,
}: {
  biryani: Biryani;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      variants={fadeUp}
      whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.2 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ash/60 bg-char transition-colors duration-300 hover:border-gold/50"
      style={{ transitionTimingFunction: "var(--ease-apple)" }}
    >
      <Link
        href={`/recipes/${biryani.slug}`}
        className="absolute inset-0 z-20"
        aria-label={`Open the recipe for ${biryani.name}`}
      />

      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={unsplash(biryani.image, { w: 800, q: 80 })}
          alt={`${biryani.name} — ${biryani.country}`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          style={{ transitionTimingFunction: "var(--ease-apple)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,7,10,0) 0%, rgba(8,7,10,0) 50%, rgba(8,7,10,0.9) 100%)",
          }}
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-night/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory backdrop-blur-md">
          {biryani.flag} {biryani.country}
        </span>
        <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/20 bg-night/60 text-ivory backdrop-blur-md transition-colors group-hover:border-gold group-hover:text-gold">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
          {biryani.city}
        </span>
        <h3 className="mt-3 font-display text-2xl leading-tight text-ivory md:text-3xl">
          {biryani.name}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ivory-dim">
          {biryani.shortDesc}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ash/60 pt-4 text-xs uppercase tracking-wider text-ivory-dim">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 ${DIFFICULTY_TINT[biryani.difficulty]}`}
          >
            <Flame className="h-3 w-3" />
            {biryani.difficulty}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-gold" />
            {biryani.time}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
