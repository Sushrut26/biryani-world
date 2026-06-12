import Link from "next/link";

const SECTIONS = [
  {
    title: "Explore",
    links: [
      { href: "/varieties", label: "All Varieties" },
      { href: "/recipes", label: "Recipes" },
      { href: "/map", label: "World Atlas" },
    ],
  },
  {
    title: "Learn",
    links: [
      { href: "/history", label: "History" },
      { href: "/spice-science", label: "Spice Science" },
      { href: "/facts", label: "Facts" },
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="border-t border-ash/60 bg-smoke">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-3xl tracking-tight text-ivory md:text-4xl"
            >
              <span className="text-gold">Biryani</span>Recipes
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory-dim">
              An obsessive archive of the world&rsquo;s biryanis &mdash;
              recipes, history, and migration routes. From the Nizam&rsquo;s
              handi to the Cape Malay deg pot.
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/80 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ash/60 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-ivory-dim">
            &copy; {new Date().getFullYear()} Biryani Recipes &middot; All rice
            reserved
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-ivory-dim">
            biryanirecipes.com
          </p>
        </div>
      </div>
    </footer>
  );
}
