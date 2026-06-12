"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/varieties", label: "Varieties" },
  { href: "/recipes", label: "Recipes" },
  { href: "/history", label: "History" },
  { href: "/map", label: "Atlas" },
  { href: "/spice-science", label: "Spice Science" },
  { href: "/facts", label: "Facts" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,border-color] duration-500",
          scrolled
            ? "bg-night/75 backdrop-blur-md border-b border-ash/60"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        style={{ transitionTimingFunction: "var(--ease-apple)" }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
          <Link
            href="/"
            className="font-display text-xl tracking-tight text-ivory md:text-2xl"
          >
            <span className="text-gold">Biryani</span>
            <span className="text-ivory">Recipes</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "group relative text-sm font-medium tracking-wide uppercase transition-colors",
                    active
                      ? "text-gold"
                      : "text-ivory/70 hover:text-ivory",
                  ].join(" ")}
                >
                  {link.label}
                  <span
                    className={[
                      "absolute -bottom-1 left-0 h-px bg-gold transition-[width] duration-500",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    ].join(" ")}
                    style={{ transitionTimingFunction: "var(--ease-apple)" }}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-ash/60 text-ivory hover:border-gold hover:text-gold transition-colors [touch-action:manipulation] cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            id="mobile-drawer"
            className="fixed inset-0 z-[60] lg:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="absolute inset-0 bg-night/80 backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-smoke border-l border-ash/60 px-7 py-6 flex flex-col"
              variants={{
                hidden: { x: "100%" },
                visible: { x: 0 },
              }}
              transition={{
                duration: 0.55,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-ivory">
                  <span className="text-gold">Biryani</span>Recipes
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ash/60 text-ivory hover:border-gold hover:text-gold transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {LINKS.map((link, i) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.05,
                        duration: 0.55,
                        ease: [0.23, 1, 0.32, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={[
                          "block py-3 font-display text-3xl tracking-tight transition-colors",
                          active
                            ? "text-gold"
                            : "text-ivory hover:text-gold",
                        ].join(" ")}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8 text-xs uppercase tracking-[0.2em] text-ivory-dim">
                biryanirecipes.com
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
