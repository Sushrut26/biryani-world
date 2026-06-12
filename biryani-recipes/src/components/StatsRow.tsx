"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Stat {
  value: number;
  format?: (n: number) => string;
  label: string;
  caption: string;
}

const STATS: Stat[] = [
  {
    value: 93,
    format: (n) => `${n}M+`,
    label: "Swiggy orders in 2025",
    caption:
      "One biryani every 3.25 seconds, all year, on a single Indian platform.",
  },
  {
    value: 14,
    format: (n) => `${n}`,
    label: "Recipes archived here",
    caption:
      "Each one sourced from a specific city, a specific tradition, a specific kitchen.",
  },
  {
    value: 78,
    format: (n) => `${n}`,
    label: "Masalas in the Nizam's biryani",
    caption:
      "Allegedly. Today's most elaborate home recipe uses around 24.",
  },
  {
    value: 50,
    format: (n) => `${n.toLocaleString()}+`,
    label: "Plates on Eid in Old Dhaka",
    caption:
      "Fakhruddin's kacchi recipe has never been written down. It is passed by hand and smell.",
  },
];

function CountUp({ stat }: { stat: Stat }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const mv = useMotionValue(reduce ? stat.value : 0);
  const rounded = useTransform(mv, (latest) => Math.round(latest));
  const [text, setText] = useState(() =>
    (stat.format ?? ((n) => `${n}`))(reduce ? stat.value : 0),
  );

  useEffect(() => {
    const fmt = stat.format ?? ((n) => `${n}`);
    const unsub = rounded.on("change", (latest) => setText(fmt(latest)));
    return () => unsub();
  }, [rounded, stat.format]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(mv, stat.value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, mv, reduce, stat.value]);

  return (
    <span ref={ref} className="block font-display text-6xl text-gold md:text-7xl">
      {text}
    </span>
  );
}

export default function StatsRow() {
  return (
    <section className="border-y border-ash/60 bg-night py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 max-w-2xl md:mb-16 lg:mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            By the numbers
          </span>
          <h2 className="mt-5 font-display text-4xl tracking-tight text-ivory md:text-6xl">
            Biryani is the most-ordered restaurant dish in India for the
            <span className="italic text-gold"> eleventh year</span> running.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-8"
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <CountUp stat={stat} />
              <p className="mt-4 font-display text-2xl leading-tight text-ivory md:text-3xl">
                {stat.label}
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-dim">
                {stat.caption}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
