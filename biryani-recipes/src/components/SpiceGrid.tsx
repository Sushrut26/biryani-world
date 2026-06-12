"use client";

import { motion } from "framer-motion";
import SpiceCard from "./SpiceCard";
import { staggerContainer } from "@/lib/animations";
import type { SpiceCardData } from "@/data/facts";

export default function SpiceGrid({ cards }: { cards: SpiceCardData[] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-20 md:px-10 md:pt-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8"
      >
        {cards.map((card) => (
          <SpiceCard key={card.title} card={card} />
        ))}
      </motion.div>
    </section>
  );
}
