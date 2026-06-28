"use client";

import { useRef } from "react";
import { BentoMedia } from "@/components/bento-media";
import type { AiBuild } from "@/lib/site-data";

export function AiLabCarousel({ items }: { items: AiBuild[] }) {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-[18px] text-muted transition hover:border-accent hover:text-accent"
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper text-[18px] text-muted transition hover:border-accent hover:text-accent"
        >
          <span aria-hidden>→</span>
        </button>
      </div>

      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((b) => (
          <article
            key={b.name}
            data-card
            className="group flex w-[86vw] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-line bg-paper2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.28)] sm:w-[400px]"
          >
            <div className="relative">
              <BentoMedia src={b.img} gradient={b.gradient} initials={b.initials} className="aspect-[16/10] w-full" />
              <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                {b.region}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-[12.5px] font-medium text-accent">
                {b.cat} · <span className="text-muted">{b.ct}</span>
              </p>
              <h3 className="mt-1.5 text-[22px] font-semibold tracking-tight">{b.name}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{b.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {b.tech.map((t) => (
                  <span key={t} className="rounded-md border border-line bg-paper px-2 py-1 text-[11px] text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
