
import Link from "next/link";
import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: LegalSection[];
};

export default function LegalPageLayout({
  eyebrow,
  title,
  description,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#080808] text-zinc-100">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-6 sm:pt-20">
        <Link
          href="/"
          className="inline-flex items-center text-lg font-semibold tracking-tight"
        >
          Revyn<span className="text-orange-500">.</span>dev
        </Link>

        <header className="relative mt-16 max-w-3xl sm:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 -z-0 h-40 w-64 rounded-full bg-orange-500/[0.07] blur-[90px]"
          />

          <p className="relative text-xs font-medium uppercase tracking-[0.2em] text-orange-400">
            {eyebrow}
          </p>

          <h1 className="relative mt-4 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="relative mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            {description}
          </p>

          <p className="relative mt-5 text-xs text-zinc-600">
            Last updated: October 28, 2026
          </p>
        </header>

        <div className="mt-12 grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-[190px_minmax(0,1fr)] md:gap-16">
          <aside className="h-fit md:sticky md:top-8">
            <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
              On this page
            </p>

            <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-3 md:flex-col md:gap-3">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#section-${index + 1}`}
                  className="text-xs text-zinc-500 transition-colors hover:text-orange-300"
                >
                  {String(index + 1).padStart(2, "0")}{" "}
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 max-w-3xl">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  id={`section-${index + 1}`}
                  className="scroll-mt-10"
                >
                  <h2 className="text-lg font-medium tracking-tight text-zinc-100 sm:text-xl">
                    {section.title}
                  </h2>

                  <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-400">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-white/[0.08] pt-7">
              <p className="text-sm leading-6 text-zinc-500">
                Questions about this policy? Contact us at{" "}
                <span className="text-zinc-300">
                  pabitra05.maity@gmail.com
                </span>
                .
              </p>

              <Link
                href="/"
                className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-orange-300"
              >
                <span aria-hidden="true">←</span>
                Back to Revyn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}