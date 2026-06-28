"use client";

import type { AiBuild } from "@/lib/site-data";

function Card({ b }: { b: AiBuild }) {
  return (
    <article className="flex w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl border border-line bg-paper2 sm:w-[340px]">
      {/* Designed brand tile — gradient + monogram (no faux UI) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden" style={{ background: b.gradient }}>
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,.6) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-[64px] font-bold tracking-tight text-white/85">
          {b.initials}
        </span>
        <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          {b.region}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12.5px] font-medium text-accent">
          {b.cat} · <span className="text-muted">{b.ct}</span>
        </p>
        <h3 className="mt-1.5 text-[20px] font-semibold tracking-tight">{b.name}</h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">{b.desc}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {b.tech.map((t) => (
            <span key={t} className="rounded-md border border-line bg-paper px-2 py-1 text-[11px] text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AiLabCarousel({ items }: { items: AiBuild[] }) {
  // duplicate the set so the marquee loops seamlessly (translateX -50%)
  return (
    <div className="vc-marquee vc-fade relative mt-10 w-full overflow-hidden">
      <div className="vc-marquee-track flex w-max items-stretch gap-5" style={{ animationDuration: "55s" }}>
        {items.map((b) => (
          <Card key={b.name} b={b} />
        ))}
        {items.map((b) => (
          <Card key={`${b.name}-dup`} b={b} />
        ))}
      </div>
    </div>
  );
}
