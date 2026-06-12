"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion, useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import Grain from "./Grain";
import { unsplash } from "@/data/images";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const y = reduce ? "0%" : yRaw;
  const opacity = reduce ? 1 : opacityRaw;

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-night"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={unsplash("hero", { w: 1920, q: 85 })}
          alt="Hyderabadi mutton biryani served from a sealed handi pot"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 38%, rgba(8,7,10,0.05) 0%, rgba(8,7,10,0.55) 55%, rgba(8,7,10,0.95) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,7,10,0.55) 0%, rgba(8,7,10,0) 30%, rgba(8,7,10,0) 60%, rgba(8,7,10,1) 100%)",
          }}
        />
        <Grain opacity={0.05} />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-40">
        <div className="hero-stagger flex flex-col gap-7 md:max-w-4xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold md:text-xs">
            <span className="mr-3 inline-block h-px w-12 translate-y-[-3px] bg-gold align-middle" />
            An obsessive archive of the world&rsquo;s biryanis
          </span>

          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-[-0.02em] text-ivory">
            The dish that
            <br />
            <span className="italic text-gold">migrated</span> across
            <br />
            half the world.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
            Fourteen biryanis. Twelve countries. One sealed pot. From the
            Nizam&rsquo;s handi in Hyderabad to the Cape Malay deg in Bo-Kaap,
            every recipe here is sourced, tested, and written for cooks who
            care about why, not just what.
          </p>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              href="/varieties"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-medium uppercase tracking-wider text-night transition-transform duration-300 hover:scale-[1.02] active:scale-[0.97] md:h-14"
              style={{ transitionTimingFunction: "var(--ease-apple)" }}
            >
              Explore varieties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/map"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ivory/40 px-7 text-sm font-medium uppercase tracking-wider text-ivory backdrop-blur transition-colors hover:border-gold hover:text-gold md:h-14"
            >
              Open the atlas
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-ivory-dim md:mt-16 md:text-xs">
            <ArrowDown className="h-4 w-4 animate-bounce text-gold" />
            Scroll for the story
          </div>
        </div>
      </div>
    </section>
  );
}
