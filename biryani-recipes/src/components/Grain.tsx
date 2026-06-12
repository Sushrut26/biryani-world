export default function Grain({
  className = "",
  opacity = 0.04,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full mix-blend-overlay ${className}`}
      style={{ opacity }}
      preserveAspectRatio="none"
    >
      <filter id="biryani-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.78  0 0 0 0 0.58  0 0 0 0 0.16  0 0 0 1 0"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#biryani-grain)" />
    </svg>
  );
}
