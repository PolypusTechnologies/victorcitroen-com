"use client";

import { useState } from "react";

/**
 * Base layer = gradient + initials (always rendered).
 * The real image sits on top and shows by default; if the file is missing (404),
 * onError unmounts it and the gradient placeholder shows through.
 * Drop a file into /public/assets and it appears — no code change.
 */
export function BentoMedia({
  src,
  gradient,
  initials,
  className = "",
}: {
  src: string;
  gradient: string;
  initials: string;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: gradient }}>
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-wide text-white/90"
        aria-hidden
      >
        {initials}
      </span>
      {!broken && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setBroken(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
