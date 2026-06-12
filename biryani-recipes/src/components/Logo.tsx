export default function Logo({ size = 32 }: { size?: number }) {
  const h = Math.round(size * 1.25);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 32 40"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Knob */}
      <circle cx="16" cy="4.5" r="2.2" fill="var(--gold)" />

      {/* Lid — slight dome ellipse */}
      <ellipse cx="16" cy="9" rx="10" ry="3.2" fill="var(--gold)" />

      {/* Dough seal band — the atta strip that locks the dum */}
      <rect
        x="5"
        y="11.2"
        width="22"
        height="2.8"
        rx="1.4"
        fill="var(--gold)"
        opacity="0.55"
      />

      {/* Pot body — wide belly, narrow mouth, rounded base */}
      <path
        d="M7 14 C4.8 18 3.2 24.5 3.8 31 C4.4 37 9.5 40.5 16 40.5 C22.5 40.5 27.6 37 28.2 31 C28.8 24.5 27.2 18 25 14 Z"
        fill="var(--gold)"
      />

      {/* Subtle steam slots on lid — classic handi detail */}
      <rect x="13" y="7.5" width="1.2" height="3" rx="0.6" fill="var(--night)" opacity="0.35" />
      <rect x="17.8" y="7.5" width="1.2" height="3" rx="0.6" fill="var(--night)" opacity="0.35" />
    </svg>
  );
}
