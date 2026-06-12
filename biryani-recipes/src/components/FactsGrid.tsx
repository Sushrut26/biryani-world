"use client";

import { motion } from "framer-motion";
import FactCard from "./FactCard";
import { staggerContainer } from "@/lib/animations";
import type { Fact } from "@/data/facts";

export default function FactsGrid({ facts }: { facts: Fact[] }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-20 md:px-10 md:pt-28">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8"
      >
        {facts.map((f) => (
          <FactCard key={f.num} fact={f} />
        ))}
      </motion.div>
    </section>
  );
}
