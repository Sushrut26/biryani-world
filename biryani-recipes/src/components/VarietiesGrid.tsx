"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import RecipeCard from "./RecipeCard";
import { staggerContainer } from "@/lib/animations";
import type { Biryani, BiryaniRegion, Difficulty } from "@/data/biryanis";

const REGION_FILTERS: { id: BiryaniRegion | "all"; label: string }[] = [
  { id: "all", label: "All regions" },
  { id: "india", label: "India" },
  { id: "pakistan", label: "Pakistan & BD" },
  { id: "middle-east", label: "Middle East" },
  { id: "southeast-asia", label: "Southeast Asia" },
  { id: "africa", label: "Africa & IO" },
];

const DIFFICULTY_FILTERS: { id: Difficulty | "all"; label: string }[] = [
  { id: "all", label: "Any level" },
  { id: "Beginner", label: "Beginner" },
  { id: "Intermediate", label: "Intermediate" },
  { id: "Advanced", label: "Advanced" },
  { id: "Expert", label: "Expert" },
];

const PROTEIN_FILTERS = [
  { id: "all", label: "Any protein" },
  { id: "mutton", label: "Mutton / Lamb" },
  { id: "chicken", label: "Chicken" },
] as const;

type ProteinFilter = (typeof PROTEIN_FILTERS)[number]["id"];

function inferProtein(b: Biryani): "mutton" | "chicken" | "other" {
  const tags = b.tags.map((t) => t.toLowerCase());
  if (tags.some((t) => t.includes("mutton") || t.includes("lamb"))) return "mutton";
  if (tags.some((t) => t.includes("chicken"))) return "chicken";
  return "other";
}

export default function VarietiesGrid({ recipes }: { recipes: Biryani[] }) {
  const [region, setRegion] = useState<BiryaniRegion | "all">("all");
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [protein, setProtein] = useState<ProteinFilter>("all");

  const filtered = useMemo(() => {
    return recipes.filter((b) => {
      if (region !== "all" && b.region !== region) return false;
      if (difficulty !== "all" && b.difficulty !== difficulty) return false;
      if (protein !== "all" && inferProtein(b) !== protein) return false;
      return true;
    });
  }, [recipes, region, difficulty, protein]);

  return (
    <div className="mx-auto mt-16 max-w-7xl px-5 md:mt-20 md:px-10">
      <div className="sticky top-16 z-30 -mx-5 mb-10 border-y border-ash/60 bg-night/85 px-5 py-5 backdrop-blur-md md:top-20 md:-mx-10 md:mb-14 md:px-10">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-8">
          <FilterRow
            label="Region"
            options={REGION_FILTERS}
            value={region}
            onChange={(v) => setRegion(v as BiryaniRegion | "all")}
          />
          <FilterRow
            label="Level"
            options={DIFFICULTY_FILTERS}
            value={difficulty}
            onChange={(v) => setDifficulty(v as Difficulty | "all")}
          />
          <FilterRow
            label="Protein"
            options={PROTEIN_FILTERS}
            value={protein}
            onChange={(v) => setProtein(v as ProteinFilter)}
          />
        </div>
      </div>

      <p className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-ivory-dim">
        Showing {filtered.length} of {recipes.length}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-ash/60 bg-char p-12 text-center">
          <p className="font-display text-3xl text-ivory">
            No biryanis match those filters.
          </p>
          <p className="mt-3 text-ivory-dim">
            Try widening the region or dropping a level.
          </p>
        </div>
      ) : (
        <motion.div
          key={`${region}-${difficulty}-${protein}`}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8"
        >
          {filtered.map((b) => (
            <RecipeCard key={b.id} biryani={b} />
          ))}
        </motion.div>
      )}
    </div>
  );
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly { id: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
        {label}
      </span>
      <div className="-mx-1 flex min-h-[44px] items-center gap-2 overflow-x-auto px-1 [-webkit-overflow-scrolling:touch]">
        {options.map((opt) => {
          const active = opt.id === value;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onChange(opt.id)}
              aria-pressed={active}
              className={[
                "inline-flex h-11 shrink-0 cursor-pointer items-center rounded-full border px-4 text-xs font-medium uppercase tracking-wider transition-colors",
                active
                  ? "border-gold bg-gold text-night"
                  : "border-ash text-ivory-dim hover:border-gold/60 hover:text-ivory",
              ].join(" ")}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
