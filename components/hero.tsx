"use client";

import { motion, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/site-data";
import { LogoMarquee } from "@/components/logo-marquee";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE, delay: 0.05 * i },
        };

  return (
    <header className="relative overflow-hidden px-6 pt-28 pb-16 text-center sm:pt-36">
      {/* soft Apple-blue glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(0,113,227,0.12), transparent 70%)" }}
        aria-hidden
      />
      <div className="mx-auto max-w-[920px]">
        <motion.p
          {...rise(0)}
          className="mb-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-accent"
        >
          AI Deployment Manager · GenAI Delivery Strategist · Zürich
        </motion.p>
        <motion.h1
          {...rise(1)}
          className="tracking-tighter2 text-[clamp(56px,11vw,128px)] font-semibold leading-[0.92]"
        >
          Victor <span className="text-accent">Citroën</span>
        </motion.h1>
        <motion.p
          {...rise(2)}
          className="mx-auto mt-8 max-w-[760px] text-[clamp(19px,2.4vw,27px)] font-medium leading-[1.35] tracking-tight text-ink"
        >
          I take ideas from a first conversation all the way to something live and working — owning
          the roadmap, the team, and the result. I&apos;ve done it for a Volkswagen platform, a funded
          game studio, and most recently a GDPR-compliant AI system I delivered in the Netherlands.
        </motion.p>
        <motion.p {...rise(3)} className="mx-auto mt-5 max-w-[680px] text-[15px] leading-relaxed text-muted">
          Specialising in Palantir Foundry &amp; AIP and GDPR-compliant AI deployment. Technical enough
          to lead the build, commercial enough to win and deliver the mandate.
        </motion.p>
        <motion.div {...rise(4)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/cv.pdf"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Download CV
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-[15px] font-medium text-accent transition-colors hover:bg-[rgba(0,113,227,0.06)]"
          >
            See the work
          </a>
        </motion.div>

        <motion.div
          {...rise(5)}
          className="mx-auto mt-16 grid max-w-[760px] grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.l} className="bg-paper2 px-4 py-6">
              <div className="text-[clamp(28px,4vw,40px)] font-semibold leading-none tracking-tight">
                {s.n}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-wider text-muted">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div {...rise(6)} className="mx-auto mt-16 max-w-[1100px]">
        <p className="mb-4 text-[12px] uppercase tracking-[0.16em] text-muted">The stack I build with</p>
        <LogoMarquee />
      </motion.div>
    </header>
  );
}
