import type { Metadata } from "next";
import HistoryTimeline from "@/components/HistoryTimeline";
import { TIMELINE } from "@/data/timeline";

export const metadata: Metadata = {
  title: "History",
  description:
    "From 10th-century Persian polow to Wajid Ali Shah's exile to Kolkata in 1856 — the migration routes that built biryani.",
};

export default function HistoryPage() {
  return (
    <div className="bg-night pb-28">
      <header className="mx-auto max-w-7xl px-5 pt-32 md:px-10 md:pt-40">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-gold">
          A history in fifteen acts
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-ivory md:text-8xl">
          A thousand years
          <br />
          of <span className="italic text-gold">sealed pots.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ivory-dim md:text-lg">
          Biryani has no single origin story. It has migration routes. The
          earliest precursors come from Persian polow; the codification
          happens in the Mughal court; the global diffusion follows soldiers,
          traders, colonial empires, and indentured labourers. Here is the
          short version.
        </p>
      </header>

      <HistoryTimeline entries={TIMELINE} />
    </div>
  );
}
