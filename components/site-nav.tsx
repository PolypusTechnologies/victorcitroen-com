"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#ailab", label: "AI Lab" },
  { href: "#work", label: "Work" },
  { href: "#industries", label: "Industries" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line/70 bg-paper/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-12 max-w-[1120px] items-center justify-between px-6">
        <a href="#top" className="text-[17px] font-semibold tracking-tight">
          Victor Citroën<span className="text-accent">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12.5px] text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="/cv.pdf"
          className="rounded-full bg-accent px-4 py-1.5 text-[12.5px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
        >
          CV
        </a>
      </nav>
    </header>
  );
}
