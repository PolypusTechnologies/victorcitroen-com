"use client";

import { useState } from "react";

/**
 * Base layer = gradient + initials, ALWAYS present.
 * The real image (if it exists in /public/assets) fades in on top once it loads.
 * If the file isn't there yet (404), onError keeps it hidden and the gradient shows.
 * Drop the file in and it upgrades automatically — no code change.
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
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: gradient }}>
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-bold tracking-wide text-white/90"
        aria-hidden
      >
        {initials}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
        style={{ opacity: loaded ? 1 : 0 }}
      />
    </div>
  );
}
