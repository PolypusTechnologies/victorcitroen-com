export type Stat = { n: string; l: string };
export type AiBuild = {
  name: string; initials: string; cat: string; ct: string;
  img: string; gradient: string; desc: string;
  region: string; tech: string[];
};
export type WorkItem = { img: string; title: string; loc: string; ct: string; href?: string };
export type Job = { role: string; org: string; meta: string };
export type Service = { h: string; p: string };
export type Industry = { si: string; h: string; p: string };
export type Faq = { q: string; a: string };

export const services: Service[] = [
  { h: "AI Strategy & Roadmap",
    p: "Opportunity assessment to a prioritised, deployable AI roadmap — OKRs, RFP & proposal authorship, pricing and C-suite buy-in." },
  { h: "GenAI & LLM Solution Delivery",
    p: "RAG systems, agentic workflows and LLM integration (Claude, GPT, Gemini) from prototype to production." },
  { h: "Palantir Foundry & AIP",
    p: "Ontology modelling, data pipelines and operational AIP workflows — building deep, hands-on capability." },
  { h: "GDPR-Compliant Deployment",
    p: "Local PII redaction, DPIA, Art. 30 audit logging, EU data residency and human-in-the-loop, shipped safely." },
  { h: "Workflow Automation & Integration",
    p: "n8n, Python, Docker, REST & webhooks — automating operations end to end and connecting systems." },
  { h: "Fractional AI Product / Delivery Lead",
    p: "Embedded ownership taking an AI initiative from discovery to live — and the commercial result." },
];

export const industries: Industry[] = [
  { si: "Automotive", h: "Automotive & Mobility",
    p: "AI for dealer and service operations, predictive uptime and workflow automation. Delivered VW Service Xpress across 200+ dealerships and International Trucks' uptime tooling." },
  { si: "Healthcare", h: "Healthcare & Life Sciences",
    p: "GDPR-compliant AI for clinical and administrative workflows — document understanding, triage support and patient-data handling with PII redaction and EU residency. Built the ZanarPlus healthcare platform." },
  { si: "Fintech", h: "Financial Services & Fintech",
    p: "AI for document processing, risk and compliance automation, and customer operations — across banking, payments and crypto products." },
  { si: "Logistics", h: "Logistics & Heavy Industry",
    p: "Predictive maintenance, fleet uptime and compliance automation. Delivered International Trucks — Uptime for fleet operators." },
  { si: "Public Sector", h: "Public Sector & Government",
    p: "AI for citizen services, document automation and operational decision-making — with the governance and GDPR rigour the public sector requires. Delivered a municipal platform (Lechería)." },
  { si: "SaaS / MSP", h: "Managed Services & SaaS",
    p: "AI support systems with confidence-based routing and human-in-the-loop — like SAGE Jr., a GDPR-compliant AI support system for a Dutch managed-service provider." },
  { si: "Gaming", h: "Gaming & Interactive",
    p: "AI-assisted production tooling and player & operations workflows. Ran a USD 500K-funded game studio (Varkalai) as COO." },
  { si: "HR / Talent", h: "HR & Talent Acquisition",
    p: "AI for sourcing, candidate screening and recruitment-operations automation — built on hands-on experience as a senior technology recruiter and Head of Talent Acquisition." },
];

export const faqs: Faq[] = [
  { q: "Who is Victor Citroën?",
    a: "A Senior AI Product & Delivery Lead and AI consultant based in Zürich, Switzerland, specialising in Palantir Foundry & AIP and GDPR-compliant AI deployment — with 30+ products delivered across three continents, including a Volkswagen dealer-operations platform and International Trucks uptime tooling." },
  { q: "What AI consulting services do you offer?",
    a: "AI strategy & roadmapping, GenAI and LLM solution delivery, Palantir Foundry & AIP solution design, GDPR-compliant AI deployment, workflow automation and integration, and fractional AI product/delivery leadership." },
  { q: "Where are you based and who do you work with?",
    a: "Based in Zürich and available across Switzerland, the DACH region and the EU, with remote engagements in the US and Latin America. I work with enterprises, scale-ups, managed-service providers and regulated industries such as healthcare, finance and the public sector." },
  { q: "Do you work with Palantir Foundry and AIP?",
    a: "Yes — I'm currently specialising in Palantir Foundry & AIP: ontology modelling, data pipelines and operational AI workflows." },
  { q: "How can I contact or hire you?",
    a: "Email hello@victorcitroen.com or connect on LinkedIn. I'm open to senior in-house AI roles and consulting engagements across Switzerland and the EU." },
];

export const sageTech: string[] = [
  "n8n orchestration", "Claude API", "Atera ingestion", "Microsoft Azure",
  "spaCy NER redaction", "Signed audit log",
];

export const stats: Stat[] = [
  { n: "8+", l: "Years" },
  { n: "30+", l: "Products delivered" },
  { n: "3", l: "Continents" },
  { n: "6", l: "Languages" },
];

export const aiLab: AiBuild[] = [
  { name: "Atelier", initials: "At", cat: "AI commerce", ct: "Claude-built engine",
    img: "/assets/ai-atelier.jpg", gradient: "linear-gradient(135deg,#ff9f0a,#ff375f)",
    region: "Netherlands",
    tech: ["Claude", "Shopify", "Next.js", "Catalog automation"],
    desc: "An AI-assisted e-commerce engine — product cataloguing, listing copy and storefront flows generated and orchestrated with Claude." },
  { name: "Pythia", initials: "Py", cat: "Autonomous trading", ct: "Agentic research system",
    img: "/assets/ai-pythia.jpg", gradient: "linear-gradient(135deg,#5e5ce6,#bf5af2)",
    region: "Switzerland",
    tech: ["Python", "Agentic workflows", "Market-data APIs", "Risk logic"],
    desc: "A self-driven trading-research system — agentic market-data analysis and risk logic, built as a personal learning project." },
  { name: "Ticker", initials: "Tk", cat: "Automation", ct: "Real-time signal pipeline",
    img: "/assets/ai-ticker.jpg", gradient: "linear-gradient(135deg,#34c759,#30b0c7)",
    region: "United States",
    tech: ["TradingView", "Webhooks", "Supabase", "Realtime log"],
    desc: "A real-time trading-signal pipeline — webhook ingestion into a live, queryable signal log." },
  { name: "Quarry", initials: "Qy", cat: "AI tooling", ct: "Multi-API data collection",
    img: "/assets/ai-quarry.jpg", gradient: "linear-gradient(135deg,#0a84ff,#0040dd)",
    region: "Germany",
    tech: ["Next.js", "Claude", "Google / Meta APIs", "CSV / PDF export"],
    desc: "An AI data-collection and enrichment tool — gathers and structures data across multiple APIs with clean CSV / PDF export." },
  { name: "Sentinel", initials: "Sn", cat: "Agents", ct: "Self-hosted local AI",
    img: "/assets/ai-sentinel.jpg", gradient: "linear-gradient(135deg,#64d2ff,#5e5ce6)",
    region: "Switzerland",
    tech: ["Docker", "Self-hosted LLM", "Linux / VPS", "Hardened gateway"],
    desc: "A self-hosted local AI agent with a hardened gateway — autonomous task execution on private infrastructure." },
];

export const work: WorkItem[] = [
  { img: "/assets/thecircle.jpg", title: "The Circle Zürich", loc: "Switzerland", ct: "Luxury event · RSVP & guest CRM", href: "https://thecirclezurich.ch" },
  { img: "/assets/servicexpress.jpg", title: "VW Service Xpress", loc: "Mexico", ct: "Service-ops · 200+ dealerships" },
  { img: "/assets/uptime.jpg", title: "International Trucks — Uptime", loc: "Mexico", ct: "Workforce compliance" },
  { img: "/assets/varkalai.jpg", title: "Varkalai — Cradle of Fate", loc: "USD 500K-funded", ct: "PC game · COO / Product Owner" },
  { img: "/assets/sheldon.jpg", title: "Sheldon", loc: "Argentina", ct: "AI commercial assistant" },
  { img: "/assets/tripsafety.jpg", title: "Trip Safety", loc: "United States", ct: "Student-safety platform" },
  { img: "/assets/goeducational.jpg", title: "GO Educational Tours", loc: "United States", ct: "Travel + trip builder" },
  { img: "/assets/zanarplus.jpg", title: "ZanarPlus", loc: "Colombia", ct: "Healthcare platform" },
  { img: "/assets/condesalud.jpg", title: "CondeSalud", loc: "Venezuela", ct: "Home healthcare" },
  { img: "/assets/home24.jpg", title: "Home24", loc: "Venezuela", ct: "Real-estate platform" },
  { img: "/assets/grau.jpg", title: "GRAÜ Inmobiliaria", loc: "Venezuela", ct: "Real-estate platform" },
  { img: "/assets/luxuryve.jpg", title: "Luxury Venezuela", loc: "Venezuela", ct: "Luxury real estate" },
  { img: "/assets/tradigi.jpg", title: "Tradigi", loc: "Venezuela", ct: "Crypto trading" },
  { img: "/assets/binnopay.jpg", title: "Binnopay", loc: "Venezuela", ct: "Crypto wallet & payments" },
  { img: "/assets/walletonia.jpg", title: "Walletonia", loc: "Venezuela", ct: "Gaming & crypto marketplace" },
  { img: "/assets/uven.jpg", title: "U-Ven", loc: "Venezuela", ct: "Rideshare app" },
  { img: "/assets/lecheria.jpg", title: "Lechería", loc: "Venezuela", ct: "Municipal / gov platform" },
  { img: "/assets/tomasreyna.jpg", title: "Dr. Tomás Reyna", loc: "Venezuela", ct: "Dental practice platform" },
  { img: "/assets/petitebreak.jpg", title: "PetiteBreak", loc: "Venezuela", ct: "Jewelry e-commerce" },
  { img: "/assets/twohi.jpg", title: "TWOHI", loc: "Venezuela", ct: "Multi-brand e-commerce" },
];

export const experience: Job[] = [
  { role: "Senior AI Technical Product Owner & CSM", org: "SF-ICT B.V. · Den Dungen, NL (remote)", meta: "May — June 2026" },
  { role: "Founder & Principal, AI Integration & Product Delivery", org: "VC Technology Consultant · Zürich", meta: "Apr 2025 — present" },
  { role: "Co-Founder, IT Business Development & Head of Talent Acquisition", org: "369 Media · The Hague", meta: "Feb 2024 — Apr 2025" },
  { role: "Senior Technology Recruitment Consultant", org: "FRG Technology Consulting & Amoria Bond · Amsterdam", meta: "Feb 2023 — Jan 2024" },
  { role: "Chief Operating Officer (LATAM)", org: "Dekreed Interactive / Varkalai · Miami (remote)", meta: "Jan 2021 — Apr 2023" },
  { role: "Founder & Managing Director", org: "SeaiLab · Caracas", meta: "Sep 2018 — Dec 2021" },
  { role: "Fintech Business Development Executive", org: "DataSpartan Technologies · London", meta: "Aug 2017 — Jul 2018" },
];

export const sageBullets: string[] = [
  "Local PII redaction — zero raw data leaves the EU",
  "Confidence-based routing & human-in-the-loop",
  "Append-only signed audit log (GDPR Art. 30)",
  "SSO, secrets management, encrypted at rest",
  "Shadow-mode pilot before any automated action",
];
