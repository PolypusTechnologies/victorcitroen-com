import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">404</p>
      <h1 className="tracking-tighter2 mt-4 text-[clamp(40px,7vw,72px)] font-semibold leading-[1]">
        Page not found.
      </h1>
      <p className="mt-5 max-w-[480px] text-[17px] text-muted">
        That page doesn&apos;t exist. Let&apos;s get you back to the work.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
      >
        Back home
      </Link>
    </main>
  );
}
