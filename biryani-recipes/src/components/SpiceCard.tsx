"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { SpiceCardData } from "@/data/facts";

export default function SpiceCard({ card }: { card: SpiceCardData }) {
  return (
    <motion.article
      variants={fadeUp}
      className="flex h-full flex-col rounded-2xl border border-ash bg-char p-7 transition-colors hover:border-gold/50"
      style={{ transitionTimingFunction: "var(--ease-apple)" }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
        {card.tag}
      </span>
      <h3 className="mt-4 font-display text-3xl leading-tight text-ivory">
        {card.title}
      </h3>
      {card.compound && (
        <p className="mt-3 font-mono text-xs text-ivory-dim">
          {card.compound}
        </p>
      )}
      <p className="mt-5 text-base leading-relaxed text-ivory-dim">
        {card.body}
      </p>
    </motion.article>
  );
}
