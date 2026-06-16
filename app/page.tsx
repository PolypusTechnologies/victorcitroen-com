import { Hero } from "@/components/hero";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { BentoMedia } from "@/components/bento-media";
import { ContactForm } from "@/components/contact-form";
import { aiLab, work, experience, services, industries, faqs, sageBullets, sageTech } from "@/lib/site-data";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
      {children}
    </p>
  );
}

const bentoSpan = ["md:col-span-3", "md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-2"];

export default function Home() {
  return (
    <main id="top">
      <Hero />

      {/* ===== Services / What I do ===== */}
      <section id="services" className="border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1120px]">
          <Reveal className="max-w-[760px]">
            <SectionLabel>What I do</SectionLabel>
            <h2 className="tracking-tighter2 text-[clamp(34px,5vw,56px)] font-semibold leading-[1.05]">
              An AI delivery partner — from first conversation to live.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              I help teams take AI and enterprise-technology engagements from discovery to a
              GDPR-compliant production launch — technical enough to lead the build, commercial enough
              to win and deliver the mandate.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {services.map((s, i) => (
              <StaggerItem key={s.h}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-paper2 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.22)]">
                  <span className="text-[14px] font-semibold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-[22px] font-semibold tracking-tight">{s.h}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{s.p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== Approach / The Arc ===== */}
      <section id="arc" className="border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[900px] text-center">
          <Reveal>
            <SectionLabel>Approach</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-[clamp(24px,3.4vw,40px)] font-semibold leading-[1.28] tracking-tight">
              It started with a software studio I built in Caracas — then product rooms across Mexico,
              the US and Latin America, a recruitment agency in the Netherlands, and a funded game
              studio I helped run as COO. The thread was always the same:{" "}
              <span className="text-accent">own the whole arc.</span> Discovery, roadmap, the right
              team, the build, the launch, the commercial result.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-[clamp(19px,2.2vw,26px)] leading-[1.42] tracking-tight text-muted">
              Today that arc points at AI. I&apos;m hands-on across{" "}
              <span className="font-semibold text-ink">n8n, Python, Docker and API / JSON workflows</span>{" "}
              to prototype and automate — and I sit where strategy, GDPR-compliant deployment and
              commercial delivery meet. Not the person buried in the codebase; the person who makes
              sure the whole thing ships, safely, and earns its keep.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Flagship — SAGE Jr. (dark full-bleed case study) ===== */}
      <section id="sage" className="bg-[#1d1d1f] px-6 py-28 text-[#f5f5f7] sm:py-36">
        <div className="mx-auto max-w-[1000px] text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.14em] text-[#2997ff]">
              <span className="vc-dot h-2 w-2 rounded-full bg-[#2997ff]" /> Case study · Netherlands · Delivered May–June 2026
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="tracking-tighter2 mt-6 text-[clamp(44px,7vw,84px)] font-semibold leading-[1]">
              SAGE Jr.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-7 max-w-[760px] text-[clamp(18px,2.1vw,24px)] leading-[1.45] text-[#d2d2d7]">
              A GDPR-compliant AI support system for a Dutch managed-service provider. It ingests
              support tickets, redacts personal data locally, and drafts responses through Claude with
              confidence-based routing — auto, draft-for-review, or escalate. I delivered it as Product
              Owner, owning the architecture and GDPR design and driving an AI-assisted build end to end
              across an 11-phase roadmap, in a focused two-month engagement.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-auto mt-8 flex max-w-[820px] flex-wrap justify-center gap-2">
              {sageTech.map((t) => (
                <span key={t} className="rounded-full border border-[#3a3a3c] bg-[#262628] px-3.5 py-1.5 text-[12.5px] text-[#d2d2d7]">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Stagger className="mx-auto mt-12 grid max-w-[920px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sageBullets.map((b) => (
              <StaggerItem
                key={b}
                className="rounded-2xl border border-[#3a3a3c] bg-[#262628] p-5 text-left text-[14.5px] leading-snug text-[#e6e6ea]"
              >
                {b}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== AI Lab — bento with specs + region ===== */}
      <section id="ailab" className="border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1120px]">
          <Reveal className="max-w-[760px]">
            <SectionLabel>AI Lab</SectionLabel>
            <h2 className="tracking-tighter2 text-[clamp(34px,5vw,56px)] font-semibold leading-[1.05]">
              Things I&apos;m building right now.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Hands-on AI builds across agentic systems, automation and data tooling — prototyped with
              Claude and the modern AI stack. Codenamed; happy to walk through the architecture of any
              of them.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-6">
            {aiLab.map((b, i) => (
              <StaggerItem key={b.name} className={`group ${bentoSpan[i] ?? "md:col-span-2"}`}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.28)]">
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
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== Selected Work ===== */}
      <section id="work" className="border-t border-line bg-paper2 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1120px]">
          <Reveal className="max-w-[760px]">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="tracking-tighter2 text-[clamp(34px,5vw,56px)] font-semibold leading-[1.05]">
              30+ products, three continents.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              A selection delivered and designed through <b className="font-semibold text-ink">SeaiLab</b> and{" "}
              <b className="font-semibold text-ink">VCC</b> — across six countries, spanning automotive,
              fintech, real estate, healthcare, travel, government and e-commerce. Product and delivery
              leadership, UI/UX direction, and the teams that built them.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => (
              <StaggerItem key={w.title} className="group">
                <figure className="h-full overflow-hidden rounded-2xl border border-line bg-paper2 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-26px_rgba(0,0,0,0.3)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="aspect-[100/72] w-full bg-white object-cover"
                  />
                  <figcaption className="p-4">
                    <div className="text-[18px] font-semibold tracking-tight">{w.title}</div>
                    <div className="mt-1 text-[12.5px] text-muted">
                      {w.loc} · <span className="text-accent">{w.ct}</span>
                    </div>
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== Industries ===== */}
      <section id="industries" className="border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[1120px]">
          <Reveal className="max-w-[760px]">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="tracking-tighter2 text-[clamp(34px,5vw,56px)] font-semibold leading-[1.05]">
              Where AI moves the needle.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              By sector — each grounded in real delivery, taken from discovery to live, GDPR-compliant deployment.
            </p>
          </Reveal>
          <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((it) => (
              <StaggerItem key={it.h}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-paper2 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_-28px_rgba(0,0,0,0.2)]">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">{it.si}</span>
                  <h3 className="mt-2 text-[19px] font-semibold tracking-tight">{it.h}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-muted">{it.p}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.05}>
            <p className="mt-8 text-[15px] text-muted">
              Don&apos;t see your sector? The approach is the same everywhere — discovery to live,
              GDPR-compliant deployment, currently specialising in{" "}
              <span className="font-semibold text-ink">Palantir Foundry &amp; AIP</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Experience ===== */}
      <section id="experience" className="border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <SectionLabel>Experience</SectionLabel>
          </Reveal>
          <Stagger className="mt-8">
            {experience.map((j) => (
              <StaggerItem key={j.role}>
                <div className="grid grid-cols-1 gap-1 border-b border-line py-6 transition-[padding] duration-300 hover:pl-2.5 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <div className="text-[18px] font-semibold tracking-tight">{j.role}</div>
                    <div className="mt-0.5 text-[14.5px] text-muted">{j.org}</div>
                  </div>
                  <div className="text-[13px] text-muted sm:text-right">{j.meta}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== Languages ===== */}
      <section id="languages" className="border-t border-line bg-paper2 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[940px]">
          <Reveal>
            <SectionLabel>Languages</SectionLabel>
            <p className="text-[clamp(22px,3vw,34px)] font-medium leading-[1.4] tracking-tight">
              Dutch, Spanish &amp; English — <span className="text-accent">native.</span> Italian —
              professional. Portuguese — conversational. German — basic, improving in Zürich.
            </p>
            <p className="mt-5 text-[14px] text-muted">
              Cambridge-certified English · Dutch national (EU) · Swiss Residence Permit B
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="border-t border-line px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-[820px]">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="tracking-tighter2 text-[clamp(34px,5vw,56px)] font-semibold leading-[1.05]">
              Questions, answered.
            </h2>
          </Reveal>
          <Stagger className="mt-10 border-y border-line">
            {faqs.map((f) => (
              <StaggerItem key={f.q}>
                <details className="group border-b border-line py-5 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-semibold tracking-tight">
                    {f.q}
                    <span className="text-[22px] leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{f.a}</p>
                </details>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="border-t border-line bg-paper2 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-[820px] text-center">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <p className="text-[clamp(28px,4.4vw,52px)] font-semibold leading-[1.1] tracking-tight">
              Open to senior in-house AI roles and consulting engagements in Zürich and across
              Switzerland — product, delivery, or deployment leadership where{" "}
              <span className="text-accent">Foundry, AIP and real outcomes meet.</span>
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-12">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] text-muted">
              <a href="mailto:hello@victorcitroen.com" className="transition-colors hover:text-ink">hello@victorcitroen.com</a>
              <a href="tel:+41798310369" className="transition-colors hover:text-ink">+41 79 831 0369</a>
              <span>Zürich, Switzerland</span>
              <a href="https://www.linkedin.com/in/victorcitroen/" target="_blank" rel="noopener" className="transition-colors hover:text-ink">/in/victorcitroen ↗</a>
              <a href="/cv.pdf" className="font-medium text-accent transition-colors hover:text-[var(--accent-hover)]">Download CV</a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-9">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-3 text-[13px] text-muted">
          <span>© 2026 Victor Citroën — Zürich, Switzerland</span>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#top" className="transition-colors hover:text-ink">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
