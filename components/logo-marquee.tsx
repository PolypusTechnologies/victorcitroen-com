"use client";

// The AI / automation stack — real tools from the CV. Pure-CSS infinite marquee.
const TOOLS = [
  "Claude", "ChatGPT", "Gemini", "n8n", "Make", "Zapier",
  "Python", "Docker", "Supabase", "Hugging Face", "Microsoft Azure", "Pinecone",
];

export function LogoMarquee() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <div className="vc-marquee vc-fade group relative w-full overflow-hidden py-2">
      <div className="vc-marquee-track flex w-max items-center gap-3">
        {items.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-line bg-paper2 px-4 py-2 text-[13px] font-medium text-muted"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
