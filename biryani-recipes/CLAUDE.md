@AGENTS.md

# biryanirecipes.com — Claude Code Project Rules

This file is read automatically by Claude Code on every response. All rules below apply permanently to every file, component, and piece of content written in this project. No exceptions.

---

## PROJECT IDENTITY

- **Site:** biryanirecipes.com
- **Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS · Framer Motion · next/image
- **Mission:** The world's most comprehensive, beautiful biryani website. Recipe-focused. History-rich. Globally sourced.

---

## RULE SET 1 — FRONTEND DESIGN (always active)

Before writing any UI code, commit to a BOLD aesthetic direction. Ask:
- What problem does this interface solve? Who uses it?
- What makes this page UNFORGETTABLE? What's the one thing a visitor will remember?
- Is the design intentional, not generic?

### Design System — FOLLOW EXACTLY

```css
--gold: #C8952A;
--gold-light: #E8B84B;
--gold-pale: #F5E6C0;
--night: #08070A;          /* page background */
--smoke: #100D0A;          /* section alternates */
--char: #1C1712;           /* card background */
--ash: #2A2419;            /* card hover */
--ivory: #F2E8D5;          /* primary text */
--ivory-dim: #C4B99A;      /* secondary text */
--red-spice: #8B2E15;      /* accent, tips */
--saffron: #D4832A;        /* warm accent */
--ease-apple: cubic-bezier(0.23, 1, 0.32, 1);
```

**Typography:**
- Display/headings: `Cormorant Garamond` — editorial, luxury, 300–700 weight
- Body: `DM Sans` — clean, modern, 300–500 weight
- Mono (spice quantities, code): `DM Mono`
- Load via `next/font/google` in layout.tsx

**Style:** Dark luxury editorial × Apple motion-driven × Storytelling-driven layout

**NEVER:**
- Use Inter, Roboto, Arial, or system fonts for headings
- Use purple gradients, generic blue SaaS palettes
- Use emoji as icons — Lucide React SVG icons ONLY
- Use placeholder grey boxes
- Use predictable cookie-cutter layouts

**ALWAYS:**
- CSS variables for every colour token
- Unexpected layouts: asymmetry, overlap, grid-breaking elements
- Grain overlay on hero sections (SVG fractalNoise, opacity 0.03)
- Generous negative space or controlled density — never a timid middle
- Radial gradient atmospheric backgrounds (not solid colours)
- `backdrop-filter: blur()` on nav, modals, panels
- Custom magnetic cursor (desktop/mouse only — hidden on touch)

---

## RULE SET 2 — UI UX PRO MAX (always active)

Run the Design System Reasoning Engine before writing any component.

**This project maps to:**
- Product type: Restaurant / Food + E-commerce Luxury
- Style: Dark Luxury Editorial + Motion-Driven + Exaggerated Minimalism
- Layout: Storytelling-Driven → Hero → Journey → Impact → CTA

### UX Rules — Non-negotiable

- `cursor-pointer` on ALL clickable elements
- Hover states with `transition: all 150–300ms ease`
- Focus states visible: `outline: 2px solid var(--gold)`
- Min touch target: **44×44px** on mobile
- Text contrast: **4.5:1 minimum** (WCAG AA)
- Responsive breakpoints: **375px → 768px → 1024px → 1440px**
- `prefers-reduced-motion` respected on every animation
- Loading, empty, and error states defined for every data-dependent component

### Mobile Rules

- Hamburger menu replaces nav links below 1024px
- Full-screen drawer for mobile nav (slides in from right, dark background)
- Map region tabs replace clickable SVG pins on mobile (horizontal scroll tabs)
- Recipe modal = full screen (inset: 0) on mobile
- All panels = full width on mobile
- `-webkit-overflow-scrolling: touch` on all scrollable panels
- Touch targets padded to 44px with invisible padding around small visual elements

### Anti-Patterns — Never Do

- Generic AI purple/pink gradients
- Neon colours on food/luxury
- Forced dark mode on food imagery sections
- Placeholder grey boxes where real content belongs
- Animations that block content loading
- Missing empty/error states
- Stacking multiple modals without escape handling
- Inputs without labels

---

## RULE SET 3 — MOTION / FRAMER MOTION (always active)

Every animated element must use Framer Motion. Never use CSS transitions for scroll-triggered animations.

### Standard Animation Variants — use these everywhere

```typescript
// src/lib/animations.ts — import from here, don't redefine inline

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

export const slideInRight = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
}

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3 } }
}
```

### Animation Rules — Always Follow

**Scroll reveals:** Every section, card, and content block uses `whileInView` with `viewport={{ once: true, amount: 0.15 }}`. Never animate things that have already been seen.

**Stagger grids:** Any grid of 3+ cards uses `staggerContainer` on the parent and `fadeUp` on each child. Delay between children: 0.08–0.12s.

**Hero:** Full page-load orchestration — eyebrow fades in first (delay 0.3s), H1 next (delay 0.5s), subtitle (delay 0.8s), CTAs (delay 1.0s), scroll indicator (delay 1.5s). All use `animation: fadeUp 1.2s ease forwards` with CSS (not Framer Motion) since hero loads before React hydration.

**Exit animations:** Always wrap conditionally rendered elements (modals, panels, drawers) in `<AnimatePresence>`. Every animated child needs a `key` prop and `exit` prop.

**Gestures:**
```typescript
// Recipe cards
whileHover={{ y: -4, transition: { duration: 0.2 } }}

// Buttons
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.97 }}

// Map pins
animate={{ scale: [1, 1.2, 1] }}
transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
```

**Counters:** Use `useMotionValue` + `useTransform` + `animate()` for stat counters. Trigger on `useInView`. Duration: 2s, ease: "easeOut".

**Parallax:** Hero background translates at 25% scroll speed. Use `useScroll` + `useTransform`.

**Performance rules — strict:**
- ONLY animate `transform` properties: `x`, `y`, `scale`, `rotate`, `opacity`
- NEVER animate `left`, `top`, `width`, `height`, `margin`, `padding`
- Use `layout="position"` not `layout` for large lists
- `viewport={{ once: true }}` on all scroll animations — never re-trigger
- `useReducedMotion()` check in every animated component

**Pitfalls to avoid:**
- Never omit `<AnimatePresence>` around conditionally rendered components
- Never omit `key` prop on animated list items
- Never animate CSS layout properties
- Never put `layoutId` on more than 2 elements (hero transitions only)

---

## RULE SET 4 — HUMANIZER (always active for all text content)

Every piece of text content written for this site — recipe descriptions, history paragraphs, card copy, button labels, page intros, fun facts — must pass the humanizer checklist before being finalised.

### AI Writing Patterns to Eliminate

**NEVER use these words/phrases:**
- "stands as", "serves as", "functions as" → use "is"
- "testament to", "reminder that", "underscores", "highlights" → cut entirely or restate as a fact
- "pivotal moment", "significant", "crucial", "vital role" → cut or replace with specific detail
- "evolving landscape", "rapidly evolving", "thriving ecosystem" → cut
- "at its core", "in essence", "fundamentally" → cut
- "let's dive in", "let's explore", "here's what you need to know" → just say the thing
- "not just X, it's Y" (negative parallelism) → pick one
- "seamless, intuitive, and powerful" (triple adjective syndrome) → pick one or none
- "In conclusion", "To summarise" → just end
- "It's worth noting that" → just note it
- "delve into", "unpack", "leverage", "robust", "holistic", "bespoke" → banned

**Never do these structures:**
- Three-item lists where the third is the "broader" one ("it's not just about X, it's about Y, it's about the bigger Z")
- Sentences ending in "-ing" phrases that add fake depth ("highlighting the importance of X, reflecting its broader Y")
- False enthusiasm ("Great question!", "Certainly!", "Absolutely!")
- Opening with significance inflation ("Biryani is one of the most significant dishes in culinary history, representing...")

### What Good Writing Looks Like for biryanirecipes.com

**Voice:** Confident, specific, knowledgeable. Like a food writer who has actually made these dishes and eaten them in the places they come from. Opinionated but not pretentious. Respectful of history but not academic.

**Recipe descriptions:** Lead with what's unique about THIS biryani, not generic rice-and-spice preamble. Be specific.

**History paragraphs:** Specific dates, specific people, specific places. Acknowledge contested facts.

**Step descriptions:** Active voice. Tell the cook WHY, not just WHAT.

**Pro tips:** Specific and counter-intuitive.

### Self-audit process for all copy

1. Read it aloud. Does it sound like a person?
2. Banned words check.
3. Trailing -ing phrases check.
4. Generic opener cut.
5. Every claim specific.
6. Sentence length variation.

---

## RULE SET 5 — COMPONENT PATTERNS (always active)

### Image handling — always use next/image

Always add `images.unsplash.com` to `next.config.ts` remotePatterns.

### Nav component rules

- Sticky, transparent on load → glassmorphism on scroll
- Mobile (< 1024px): hamburger right — links hidden
- Mobile drawer: full-screen overlay, slides in from right
- Close drawer on: link click, Escape key, backdrop click

### Recipe card rules

- Always show: image, region label, name, country + flag, 2-line description, difficulty badge, time badge
- Hover: image scales 1.05, card lifts `y: -4`
- Click: opens recipe page (or modal in list contexts)

### Recipe modal / page rules

- Hero image (full-bleed), eyebrow (country), title, meta row (difficulty / time / serves)
- Two-column body on desktop: ingredients left, steps right
- Steps: numbered circles (gold outline), step title, description, pro tip (spice-red left border)
- Serve-with: tag chips
- `<AnimatePresence>` wraps modal, `scaleIn` variant

### Map component rules

- Use `react-simple-maps` with Natural Earth projection
- Country fills: `#1C1712` (char), hover: `rgba(200,149,42,0.2)`
- Pins: 10px gold dots, pulsing animation
- Click pin → region slide panel opens from right
- Mobile fallback: horizontal scrolling tab bar of all regions

### Stat counter rules

Use Framer Motion `useMotionValue` + `useTransform` + `animate()` triggered by `useInView`.

### Marquee rules

- Continuous horizontal scroll, 35s linear infinite
- Duplicate content for seamless loop
- Pause on hover

---

## RULE SET 6 — CODE QUALITY (always active)

- TypeScript strict mode — no `any`, no `as unknown`
- All data in `/src/data/*.ts` — never inline long data in components
- All animation variants in `/src/lib/animations.ts` — never redefine inline
- All colour values via CSS variables or Tailwind tokens — never hardcoded hex in components
- `useReducedMotion()` check in every component that animates
- `next/image` for every image — never `<img>`
- `aria-label` on every icon button
- `alt` text on every image — descriptive, not empty string
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- No `console.log` in production code
- All pages export `generateMetadata()` or `metadata` with title, description
- `loading="lazy"` implicit via next/image (only `priority` on above-fold)

---

## RULE SET 7 — VERCEL DEPLOYMENT (active for deployment tasks)

### next.config.ts required settings

```typescript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
}
```

### Environment

No environment variables required. All images are public Unsplash URLs. No API keys.

### Deploy command

```bash
npx vercel --prod
```

### Domain setup

In Vercel dashboard → Project → Settings → Domains → Add:
- `biryanirecipes.com`
- `www.biryanirecipes.com` (redirects to apex)

Then add DNS records at your registrar:
```
A     @     76.76.21.21
CNAME www   cname.vercel-dns.com
```

---

## REMINDER — WHAT CLAUDE CODE MUST DO ON EVERY RESPONSE

1. **Before any UI code:** Apply frontend-design aesthetic principles. Ask "what makes this unforgettable?"
2. **Before any component:** Apply ui-ux-pro-max checklist. Check touch targets, hover states, responsive breakpoints.
3. **For every animation:** Use Framer Motion with the standard variants from `src/lib/animations.ts`. Include `useReducedMotion()`.
4. **For every piece of text:** Apply humanizer rules. No banned words. Specific over vague. Reads aloud like a person.
5. **For every image:** Use `next/image` with Unsplash URL + proper `sizes` + `alt` text.
6. **Before finishing:** Run the pre-delivery checklist mentally — SVG icons only, cursor-pointer, focus states, responsive, no placeholders.
