import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Flame, Users } from "lucide-react";
import Grain from "@/components/Grain";
import { BIRYANIS, BIRYANI_BY_SLUG } from "@/data/biryanis";
import { unsplash, imageCredit, imageSourcePage } from "@/data/images";

export const dynamicParams = false;

export function generateStaticParams() {
  return BIRYANIS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = BIRYANI_BY_SLUG[slug];
  if (!recipe) return { title: "Recipe not found" };
  return {
    title: recipe.name,
    description: recipe.shortDesc,
    openGraph: {
      title: recipe.name,
      description: recipe.shortDesc,
      images: [unsplash(recipe.image, { w: 1200, q: 85 })],
    },
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = BIRYANI_BY_SLUG[slug];
  if (!recipe) notFound();

  const credit = imageCredit(recipe.image);
  const creditUrl = imageSourcePage(recipe.image);

  return (
    <article className="bg-night pb-32">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={unsplash(recipe.image, { w: 1920, q: 85 })}
            alt={`${recipe.name} hero image`}
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
                "linear-gradient(180deg, rgba(8,7,10,0.6) 0%, rgba(8,7,10,0.5) 35%, rgba(8,7,10,0.95) 100%)",
            }}
          />
          <Grain opacity={0.05} />
        </div>

        <div className="mx-auto max-w-5xl px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-44">
          <Link
            href="/varieties"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ivory/80 transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" />
            All recipes
          </Link>

          <span className="mt-10 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-gold md:text-xs">
            <span className="text-base leading-none">{recipe.flag}</span>
            {recipe.country} · {recipe.city}
          </span>

          <h1 className="mt-5 font-display text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-tight text-ivory">
            {recipe.name}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory md:text-lg">
            {recipe.shortDesc}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3 md:gap-5">
            <MetaPill icon={<Flame className="h-3.5 w-3.5" />} label="Difficulty">
              {recipe.difficulty}
            </MetaPill>
            <MetaPill icon={<Clock className="h-3.5 w-3.5" />} label="Time">
              {recipe.time}
            </MetaPill>
            <MetaPill icon={<Users className="h-3.5 w-3.5" />} label="Serves">
              {recipe.serves}
            </MetaPill>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {recipe.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ivory/15 bg-night/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory-dim backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {credit && (
          <p className="absolute bottom-3 right-4 z-10 font-mono text-[9px] uppercase tracking-[0.25em] text-ivory/50 md:bottom-4 md:right-6">
            Photo:{" "}
            {creditUrl ? (
              <a
                href={creditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 transition-colors hover:text-gold hover:underline"
              >
                {credit}
              </a>
            ) : (
              credit
            )}
          </p>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-16 md:px-10 md:pt-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          The story
        </span>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-ivory md:text-5xl">
          Where it comes from.
        </h2>
        <p className="mt-7 max-w-3xl text-base leading-relaxed text-ivory-dim md:text-lg">
          {recipe.history}
        </p>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-12 px-5 md:px-10 md:mt-28 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            Ingredients
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ivory md:text-5xl">
            What you need.
          </h2>

          <ul className="mt-8 divide-y divide-ash/60 border-y border-ash/60">
            {recipe.ingredients.map((ing) => (
              <li
                key={ing.name}
                className="flex items-baseline justify-between gap-4 py-3.5"
              >
                <span className="text-sm leading-snug text-ivory md:text-base">
                  {ing.name}
                </span>
                <span className="shrink-0 font-mono text-xs uppercase tracking-wider text-gold md:text-sm">
                  {ing.qty || "—"}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
            Method
          </span>
          <h2 className="mt-4 font-display text-3xl tracking-tight text-ivory md:text-5xl">
            How to cook it.
          </h2>

          <ol className="mt-10 flex flex-col gap-10 md:gap-14">
            {recipe.steps.map((step, i) => (
              <li key={step.title} className="grid gap-4 sm:grid-cols-[auto_1fr] sm:gap-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold font-display text-xl text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl leading-tight text-ivory md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-ivory-dim md:text-lg">
                    {step.desc}
                  </p>
                  {step.tip && (
                    <p className="mt-5 border-l-2 border-[color:var(--red-spice)] bg-char/60 px-5 py-3 text-sm leading-relaxed text-ivory md:text-base">
                      <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--red-spice)]">
                        Pro tip
                      </span>
                      {step.tip}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-5 md:px-10 md:mt-32">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          Serve with
        </span>
        <h2 className="mt-4 font-display text-3xl tracking-tight text-ivory md:text-5xl">
          What goes on the plate.
        </h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {recipe.serve.map((s) => (
            <li
              key={s}
              className="rounded-full border border-ash bg-char px-4 py-2 text-sm text-ivory md:px-5 md:py-2.5 md:text-base"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {recipe.funFact && (
        <section className="mx-auto mt-24 max-w-5xl px-5 md:px-10 md:mt-32">
          <div className="rounded-2xl border border-ash bg-smoke p-8 md:p-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
              Did you know
            </span>
            <p className="mt-5 font-display text-2xl leading-snug text-ivory md:text-3xl">
              {recipe.funFact}
            </p>
          </div>
        </section>
      )}

      <section className="mx-auto mt-24 max-w-5xl px-5 md:px-10 md:mt-32">
        <Link
          href="/varieties"
          className="inline-flex h-14 items-center gap-3 rounded-full border border-ivory/40 px-7 text-sm font-medium uppercase tracking-wider text-ivory transition-colors hover:border-gold hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all recipes
        </Link>
      </section>
    </article>
  );
}

function MetaPill({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-ivory/20 bg-night/60 px-4 py-2 backdrop-blur">
      <span className="text-gold">{icon}</span>
      <span>
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ivory-dim">
          {label}
        </span>
        <span className="ml-2 text-sm font-medium uppercase tracking-wide text-ivory md:text-base">
          {children}
        </span>
      </span>
    </div>
  );
}
