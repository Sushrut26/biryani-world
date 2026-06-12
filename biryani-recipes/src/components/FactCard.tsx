"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Fact } from "@/data/facts";

export default function FactCard({ fact }: { fact: Fact }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ash bg-char p-8 transition-colors hover:border-gold/50"
      style={{ transitionTimingFunction: "var(--ease-apple)" }}
    >
      <span className="font-display text-7xl leading-none text-gold/30 transition-colors group-hover:text-gold/50 md:text-8xl">
        {fact.num}
      </span>
      <h3 className="mt-6 font-display text-2xl leading-tight text-ivory md:text-3xl">
        {fact.title}
      </h3>
      <p className="mt-5 text-base leading-relaxed text-ivory-dim">
        {fact.text}
      </p>
    </motion.article>
  );
}
