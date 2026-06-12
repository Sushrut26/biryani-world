"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type MotionStyle,
} from "framer-motion";

const HOVER_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]";

const FINE_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeMatchMedia(callback: () => void) {
  const fine = window.matchMedia(FINE_POINTER_QUERY);
  const reduced = window.matchMedia(REDUCED_MOTION_QUERY);
  fine.addEventListener("change", callback);
  reduced.addEventListener("change", callback);
  return () => {
    fine.removeEventListener("change", callback);
    reduced.removeEventListener("change", callback);
  };
}

function getEnabledSnapshot() {
  const hasTouch =
    "ontouchstart" in window ||
    (navigator.maxTouchPoints && navigator.maxTouchPoints > 0);
  if (hasTouch) return false;
  return (
    window.matchMedia(FINE_POINTER_QUERY).matches &&
    !window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

function getServerSnapshot() {
  return false;
}

export default function Cursor() {
  const enabled = useSyncExternalStore(
    subscribeMatchMedia,
    getEnabledSnapshot,
    getServerSnapshot,
  );

  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    const onOver = (e: Event) => {
      const target = e.target as Element | null;
      if (target && target.closest(HOVER_SELECTOR)) setHovering(true);
    };
    const onOut = (e: Event) => {
      const target = e.target as Element | null;
      if (target && target.closest(HOVER_SELECTOR)) setHovering(false);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerenter", onEnter);
    document.addEventListener("pointerover", onOver, true);
    document.addEventListener("pointerout", onOut, true);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerenter", onEnter);
      document.removeEventListener("pointerover", onOver, true);
      document.removeEventListener("pointerout", onOut, true);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const dotStyle: MotionStyle = {
    x,
    y,
    translateX: "-50%",
    translateY: "-50%",
  };
  const ringStyle: MotionStyle = {
    x: ringX,
    y: ringY,
    translateX: "-50%",
    translateY: "-50%",
  };

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-gold mix-blend-difference"
        style={ringStyle}
        animate={{
          width: hovering ? 56 : 32,
          height: hovering ? 56 : 32,
          opacity: hidden ? 0 : hovering ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-1.5 w-1.5 rounded-full bg-gold mix-blend-difference"
        style={dotStyle}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 0.4 : 1 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      />
    </>
  );
}
