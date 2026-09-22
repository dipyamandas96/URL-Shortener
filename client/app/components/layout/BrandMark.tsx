interface BrandMarkProps {
  className?: string;
  gradientId: string;
}

export function BrandMark({
  className = "h-8 w-8",
  gradientId,
}: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="8"
          y1="8"
          x2="40"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c4b5fd" />
          <stop offset="0.48" stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
      </defs>

      <circle
        cx="24"
        cy="24"
        r="20"
        fill="#8b5cf6"
        fillOpacity="0.08"
      />

      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke={`url(#${gradientId})`}
        strokeWidth="2"
        opacity="0.9"
      />

      <path
        d="M18 20.5a5.5 5.5 0 0 1 7.8-4.9l3.6 2.1a5.5 5.5 0 0 1-6.5 9.1l-4.3-2.3a5.5 5.5 0 0 1-1-9.1Zm12.8 7.1a5.5 5.5 0 0 1-7.8 4.9l-3.6-2.1a5.5 5.5 0 0 1 6.5-9.1l4.3 2.3a5.5 5.5 0 0 1 1 9.1Z"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
}