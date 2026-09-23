import Image from "next/image";
import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import {
  IconBrandGithub,
  IconSparkles,
  IconMessageCircle,
  IconBrandX,
  IconBrandLinkedin,
  IconArrowRight,
  IconGitPullRequest,
  IconBolt,
  IconShieldCheck,
  IconCircleCheckFilled,
  IconCode,
  IconBug,
  IconLock,
  IconTerminal2,
} from "@tabler/icons-react";

function MacWindow({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0c] shadow-2xl shadow-orange-950/20">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#11100f] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600">
          <IconBrandGithub size={12} />
          pull-request
        </div>

        <div className="w-10" />
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-orange-500/[0.035] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          className="relative h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090909] text-[#f5f5f4]">

      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-orange-600/[0.11] blur-[150px]" />

        <div className="absolute right-[-200px] top-[500px] h-[400px] w-[400px] rounded-full bg-orange-500/[0.035] blur-[120px]" />

        <div className="absolute left-[-200px] top-[1100px] h-[350px] w-[350px] rounded-full bg-orange-700/[0.025] blur-[120px]" />
      </div>

      {/* Grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-40" />

      {/* NAV */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-500/10 shadow-lg shadow-orange-500/10 transition-all group-hover:border-orange-400/30 group-hover:bg-orange-500/15">
            <IconCode
              size={16}
              className="text-orange-300"
            />
          </div>

          <span className="text-[15px] font-semibold tracking-tight">
            Revyn
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">
          <Link
            href="#features"
            className="transition-colors hover:text-orange-300"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="transition-colors hover:text-orange-300"
          >
            How it works
          </Link>

          <Link
            href="#demo"
            className="transition-colors hover:text-orange-300"
          >
            Demo
          </Link>
        </div>

        <Show when="signed-out">
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="hidden text-sm text-zinc-400 transition-colors hover:text-white sm:block"
            >
              Sign in
            </Link>

            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-2 rounded-lg border border-orange-400/20 bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              Get started
              <IconArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Show>

        <Show when="signed-in">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm text-zinc-400 transition-colors hover:text-orange-300"
            >
              Dashboard
            </Link>

            <UserButton />
          </div>
        </Show>
      </nav>

      {/* HERO */}
      <section className="relative px-6 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/15 bg-orange-500/[0.07] px-3 py-1.5 text-xs font-medium text-orange-300 shadow-[0_0_30px_rgba(249,115,22,0.06)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
            </span>

            AI-powered code review
          </div>

          {/* Heading */}
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Code reviews,
            <br />

            <span className="text-gradient">
              without the bottleneck.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Revyn reviews every pull request automatically.
            Catch bugs, security issues, and risky changes before
            they reach production.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition-all hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              <IconBrandGithub size={17} />

              Connect GitHub

              <IconArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-orange-400/20 hover:bg-orange-500/[0.05] hover:text-orange-200"
            >
              See how it works
            </a>
          </div>

          {/* Trust */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-600">
            <span className="flex items-center gap-1.5">
              <IconCircleCheckFilled
                size={13}
                className="text-emerald-400/70"
              />
              GitHub native
            </span>

            <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="flex items-center gap-1.5">
              <IconCircleCheckFilled
                size={13}
                className="text-emerald-400/70"
              />
              No code changes
            </span>

            <span className="hidden h-3 w-px bg-white/[0.08] sm:block" />

            <span className="flex items-center gap-1.5">
              <IconCircleCheckFilled
                size={13}
                className="text-emerald-400/70"
              />
              Automatic reviews
            </span>
          </div>
        </div>

        {/* Demo */}
        <div
          id="demo"
          className="mx-auto mt-20 max-w-5xl"
        >
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-full bg-orange-600/[0.09] blur-[110px]" />

            <MacWindow
              src="/revyn-demo.png"
              alt="Revyn AI review comment on a GitHub pull request"
            />
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section
        id="features"
        className="mx-auto max-w-5xl px-6 py-24"
      >
        <div className="grid grid-cols-1 divide-y divide-white/[0.06] border-y border-white/[0.06] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <Feature
            icon={<IconMessageCircle size={19} />}
            title="Inline comments"
            desc="Issues are flagged exactly where they happen."
          />

          <Feature
            icon={<IconSparkles size={19} />}
            title="Real bugs"
            desc="Focuses on logic, security, and risky changes."
          />

          <Feature
            icon={<IconBrandGithub size={19} />}
            title="GitHub native"
            desc="Install once. Every future PR gets reviewed."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="mx-auto max-w-5xl px-6 pb-28"
      >
        <div className="mb-12 max-w-xl">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-orange-400">
            Workflow
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            From pull request
            <br />
            to reviewed code.
          </h2>

          <p className="mt-4 text-sm leading-6 text-zinc-500">
            Revyn fits directly into the workflow your engineering
            team already uses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Step
            number="01"
            icon={<IconBrandGithub size={19} />}
            title="Connect GitHub"
            desc="Install the Revyn GitHub App and select the repositories you want reviewed."
          />

          <Step
            number="02"
            icon={<IconGitPullRequest size={19} />}
            title="Open a PR"
            desc="Create a pull request like you normally would. Revyn automatically detects it."
          />

          <Step
            number="03"
            icon={<IconBolt size={19} />}
            title="Get reviewed"
            desc="AI analysis and inline review comments appear directly inside your PR."
          />
        </div>
      </section>

      {/* WHY REVYN */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-orange-400/10 bg-[#0d0c0b]">
          <div className="absolute left-1/2 top-[-180px] h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-orange-600/[0.07] blur-[120px]" />

          <div className="relative grid grid-cols-1 divide-y divide-white/[0.06] md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="p-8 md:p-10">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-500/[0.08]">
                <IconBug
                  size={20}
                  className="text-orange-400"
                />
              </div>

              <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-orange-400">
                Catch what matters
              </p>

              <h3 className="text-2xl font-semibold tracking-tight">
                Not every diff deserves a comment.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                Revyn focuses its review on bugs, security issues,
                broken logic, and changes that could create problems
                in production.
              </p>
            </div>

            <div className="grid grid-cols-2">
              <Signal
                icon={<IconShieldCheck size={18} />}
                title="Security"
                desc="Risky patterns"
              />

              <Signal
                icon={<IconCode size={18} />}
                title="Logic"
                desc="Broken behavior"
              />

              <Signal
                icon={<IconLock size={18} />}
                title="Guardrails"
                desc="Sensitive files"
              />

              <Signal
                icon={<IconTerminal2 size={18} />}
                title="Workflow"
                desc="PR native"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENTO */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="mb-10 text-center">
          <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-orange-400">
            Built for developers
          </div>

          <h2 className="text-3xl font-semibold tracking-tight">
            Your codebase gets another pair of eyes.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Main visual */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0c0b] sm:col-span-2 sm:row-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.08] via-transparent to-orange-500/[0.02]" />

            <Image
              src="/revyn-demo-2.png"
              alt="Revyn reviewing a pull request"
              width={1200}
              height={900}
              className="relative h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </div>

          {/* Speed */}
          <div className="rounded-2xl border border-orange-400/10 bg-gradient-to-br from-orange-500/[0.12] to-transparent p-6">
            <span className="font-mono text-4xl font-semibold tracking-tight text-white">
              &lt;30s
            </span>

            <p className="mt-2 text-sm leading-5 text-zinc-400">
              Average time to first review comment.
            </p>
          </div>

          {/* Guardrails */}
          <div className="rounded-2xl border border-white/[0.07] bg-[#0d0c0b] p-6 transition-colors hover:border-orange-400/10">
            <IconShieldCheck
              size={21}
              className="mb-5 text-emerald-400"
            />

            <span className="block text-sm font-medium text-white">
              Built-in guardrails
            </span>

            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Skip lockfiles and generated code.
              Review what actually matters.
            </p>
          </div>

          {/* Workflow */}
          <div className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-[#0d0c0b] p-6 transition-colors hover:border-orange-400/10 sm:col-span-2">
            <div>
              <span className="text-sm font-medium text-white">
                Fits your existing workflow
              </span>

              <p className="mt-1.5 max-w-md text-xs leading-5 text-zinc-500">
                No new dashboard required. Reviews appear
                directly where your team already works.
              </p>
            </div>

            <IconBrandGithub
              size={28}
              className="text-zinc-700 transition-colors group-hover:text-orange-400"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-orange-400/10 bg-[#0d0c0b] px-8 py-20 text-center shadow-[0_0_80px_rgba(249,115,22,0.04)]">
          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-600/[0.12] blur-[100px]" />

          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/10 bg-orange-500/[0.05] px-3 py-1 text-xs text-zinc-400">
              <IconSparkles
                size={13}
                className="text-orange-400"
              />
              AI code review for modern teams
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ship faster.
              <br />
              <span className="text-gradient">
                Review smarter.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-500">
              Connect your GitHub repository and let Revyn
              handle the first pass on every pull request.
            </p>

            <Link
              href="/sign-up"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              <IconBrandGithub size={17} />
              Connect GitHub
              <IconArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">

            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md border border-orange-400/10 bg-orange-500/10">
                  <IconCode
                    size={14}
                    className="text-orange-300"
                  />
                </div>

                <span className="font-semibold">
                  Revyn
                </span>
              </div>

              <p className="mt-3 max-w-[180px] text-xs leading-5 text-zinc-600">
                AI-powered code review for every pull request.
              </p>
            </div>

            <FooterColumn
              title="Product"
              links={[
                ["Get started", "/sign-up"],
                ["Sign in", "/sign-in"],
                ["Pricing", "#"],
              ]}
            />

            <FooterColumn
              title="Resources"
              links={[
                ["Docs", "#"],
                ["Changelog", "#"],
                ["GitHub App", "https://github.com/apps/revyn-dev"],
              ]}
            />

            <div>
              <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
                Connect
              </h4>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Codewithpabitra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-orange-400"
                >
                  <IconBrandGithub size={18} />
                </a>

                <a
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-orange-400"
                >
                  <IconBrandX size={18} />
                </a>

                <a
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-orange-400"
                >
                  <IconBrandLinkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-6 text-[11px] text-zinc-700 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Revyn. All rights reserved.
            </p>

            <div className="flex gap-5">
              <Link
                href="#"
                className="transition-colors hover:text-zinc-400"
              >
                Privacy
              </Link>

              <Link
                href="#"
                className="transition-colors hover:text-zinc-400"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group px-6 py-7 first:pl-0 last:pr-0">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-400 transition-all group-hover:border-orange-400/20 group-hover:bg-orange-500/[0.08] group-hover:text-orange-300">
        {icon}
      </div>

      <h3 className="text-sm font-medium text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-zinc-500">
        {desc}
      </p>
    </div>
  );
}

function Step({
  number,
  icon,
  title,
  desc,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative rounded-2xl border border-white/[0.07] bg-[#0d0c0b] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-400/20 hover:bg-[#11100e] hover:shadow-[0_15px_40px_rgba(249,115,22,0.05)]">
      <span className="absolute right-5 top-5 font-mono text-[10px] text-zinc-700">
        {number}
      </span>

      <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.03] text-zinc-400 transition-all group-hover:border-orange-400/20 group-hover:bg-orange-500/[0.08] group-hover:text-orange-300">
        {icon}
      </div>

      <h3 className="text-sm font-medium text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-zinc-500">
        {desc}
      </p>
    </div>
  );
}

function Signal({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group border-b border-white/[0.06] p-6 transition-colors last:border-b-0 hover:bg-orange-500/[0.025] md:[&:nth-child(odd)]:border-r">
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-zinc-500 transition-all group-hover:border-orange-400/20 group-hover:bg-orange-500/[0.08] group-hover:text-orange-400">
        {icon}
      </div>

      <div className="text-sm font-medium text-white">
        {title}
      </div>

      <div className="mt-1 text-xs text-zinc-600">
        {desc}
      </div>
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h4 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-600">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="text-xs text-zinc-500 transition-colors hover:text-orange-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}