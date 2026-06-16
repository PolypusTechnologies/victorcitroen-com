"use client";

import { useState } from "react";

const ENDPOINT = "https://formsubmit.co/ajax/e2d4ca177d326de55c253ed9ade8f209";

const inputCls =
  "w-full rounded-xl border border-line bg-paper2 px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, _subject: "New enquiry — victorcitroen.com" }),
      });
      if (!res.ok) throw new Error("bad status");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mx-auto max-w-[640px] rounded-2xl border border-line bg-paper2 p-8 text-center">
        <p className="text-[20px] font-semibold tracking-tight">Thanks — message sent.</p>
        <p className="mt-2 text-[15px] text-muted">I&apos;ll get back to you shortly at the email you provided.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-[640px] text-left">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" autoComplete="name" className={inputCls} />
        <input name="email" type="email" required placeholder="Email" autoComplete="email" className={inputCls} />
        <input name="company" placeholder="Company (optional)" className={inputCls} />
        <select name="enquiry" defaultValue="Consulting engagement" className={inputCls} aria-label="Type of enquiry">
          <option>Consulting engagement</option>
          <option>In-house / role</option>
          <option>Foundry / AIP project</option>
          <option>Something else</option>
        </select>
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="What would you like to build, ship or solve?"
        className={`${inputCls} mt-4 resize-y`}
      />
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <span className="text-[14px] text-[#c0392b]">
            Couldn&apos;t send — email{" "}
            <a className="underline" href="mailto:hello@victorcitroen.com">hello@victorcitroen.com</a> instead.
          </span>
        )}
      </div>
    </form>
  );
}
