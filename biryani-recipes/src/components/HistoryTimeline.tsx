"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { TimelineEntry } from "@/data/timeline";

export default function HistoryTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl px-5 md:mt-28 md:px-10">
      <div
        aria-hidden
        className="absolute bottom-0 left-[28px] top-0 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="flex flex-col gap-12 md:gap-24">
        {entries.map((entry, i) => {
          const onRight = i % 2 === 0;
          return (
            <motion.li
              key={`${entry.year}-${entry.title}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              <span
                aria-hidden
                className="absolute left-[22px] top-2 h-3 w-3 rounded-full bg-gold ring-4 ring-night md:left-1/2 md:-translate-x-1/2"
              />

              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                <div
                  className={
                    onRight
                      ? "md:order-1 md:pr-12 md:text-right"
                      : "md:order-2 md:pl-12"
                  }
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                    {entry.year} &middot; {entry.place}
                  </span>
                  <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight text-ivory md:mt-4 md:text-4xl">
                    {entry.title}
                  </h3>
                </div>
                <div
                  className={
                    onRight
                      ? "md:order-2 md:pl-12"
                      : "md:order-1 md:pr-12 md:text-right"
                  }
                >
                  <p className="mt-3 text-base leading-relaxed text-ivory-dim md:mt-1 md:text-lg">
                    {entry.body}
                  </p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
