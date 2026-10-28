"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Show, UserButton } from "@clerk/nextjs";
import {
  IconSparkles,
  IconBrandX,
  IconBrandLinkedin,
  IconArrowRight,
  IconBolt,
  IconShieldCheck,
  IconCircleCheckFilled,
  IconCode,
  IconBug,
  IconLock,
  IconTerminal2,
  IconGitPullRequest,
  IconGitCompare,
  IconMessageCircle,
  IconBrandGithub,
  IconChevronDown,
  IconCheck,
  IconAlertTriangle,
  IconScan,
  IconWand,
  IconRefresh,
  IconInfoCircle,
  IconPlus,
} from "@tabler/icons-react";

function MacWindow({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group overflow-hidden rounded-2xl  p-2 bg-white/5 shadow-2xl shadow-orange-950/20 flex flex-col gap-1">
      <div className="flex items-center justify-between border-b border-white/6 bg-[#11100f] px-4 py-3 rounded-xl">
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
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          className="relative h-auto w-full rounded-xl"
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
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="text-lg sm:text-xl font-semibold font-sans tracking-tigh">
            Revyn<span className="text-orange-500">.</span>dev
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <Link
            href="#features"
            className="transition-colors hover:text-zinc-100"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="transition-colors hover:text-zinc-100"
          >
            How it works
          </Link>

          <Link href="#demo" className="transition-colors hover:text-zinc-100">
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
              className="group inline-flex items-center gap-2 rounded-full  bg-linear-to-b from-orange-300 via-orange-400 to-orange-600 px-4 py-2 text-sm font-medium text-white transition-all"
            >
              Get started
              <IconArrowRight
                size={16}
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
      <section className="relative px-2 sm:px-6 pt-12 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-zinc-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
            </span>
            Actively maintaining
          </div>

          {/* Heading */}
          <h1 className="text-balance text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl">
            Code{" "}
            <span className="italic bg-linear-to-b from-orange-300 via-orange-400 to-orange-600 bg-clip-text text-transparent ">
              reviews
            </span>
            ,
            <br />
            <span className="">
              without the <span className="italic">bottleneck</span>.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xs sm:max-w-2xl text-sm sm:text-base leading-7 text-zinc-400 ">
            Revyn reviews every pull request automatically. Catch bugs, security
            issues, and risky changes before they reach production.
          </p>

          {/* CTAs */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/sign-up"
              className="group inline-flex items-center gap-2   rounded-full  bg-linear-to-b from-orange-300 via-orange-500 to-orange-600 px-5 py-3 text-sm font-medium text-white transition-all"
            >
              <IconBrandGithub size={16} />
              Connect GitHub
              <IconArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-full  px-5 py-3 text-sm font-medium text-zinc-300 hover:text-zinc-100 transition-all"
            >
              See how it works
            </a>
          </div>

          {/* Trust */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-white">
            <span className="flex items-center gap-1.5">
              <IconCircleCheckFilled size={13} className="text-orange-400" />
              GitHub native
            </span>

            <span className="hidden h-3 w-px bg-white/8 sm:block" />

            <span className="flex items-center gap-1.5">
              <IconCircleCheckFilled size={13} className="text-orange-400" />
              No code changes
            </span>

            <span className="hidden h-3 w-px bg-white/8 sm:block" />

            <span className="flex items-center gap-1.5">
              <IconCircleCheckFilled size={13} className="text-orange-400" />
              Automatic reviews
            </span>
          </div>
        </div>

        {/* Demo */}
        <div id="demo" className="mx-auto mt-20 max-w-5xl">
          <div className="relative">
            <div className="absolute -inset-10 -z-10 rounded-full bg-orange-600/9 blur-[110px]" />

            <MacWindow
              src="/revyn-demo.png"
              alt="Revyn AI review comment on a GitHub pull request"
            />
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section id="features" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <Feature
            icon={<IconMessageCircle size={17} stroke={1.6} />}
            title="Comments where they matter"
            desc="Actionable feedback, right beside the lines that need attention."
          />

          <Feature
            icon={<IconBug size={17} stroke={1.6} />}
            title="Catch bugs before merge"
            desc="Surface logic errors, risky changes, and potential security issues."
          />

          <Feature
            icon={<IconBrandGithub size={17} stroke={1.6} />}
            title="Fits your GitHub workflow"
            desc="Review pull requests without adding another step to your process."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-5xl px-6 pb-32 pt-16">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-orange-400">
              The workflow
            </div>

            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-5xl">
              From first commit
              <br />
              <span className="text-zinc-500">to a sharper review.</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-zinc-500">
            Your existing GitHub workflow, with another set of eyes on every
            change.
          </p>
        </div>

        {/* Continuous pipeline */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c0c0c]">
          {/* Ambient surface detail */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(249,115,22,0.055),transparent_55%)]" />

          {/* Pipeline rail */}
          <div className="relative mx-7 mt-9 hidden h-px bg-white/[0.09] sm:mx-12 sm:block">
            <motion.div
              className="absolute inset-y-0 w-[22%] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
              animate={{ left: ["-22%", "100%"] }}
              transition={{
                duration: 4.5,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0.1,
              }}
            />
          </div>

          <div className="relative grid grid-cols-1 divide-y divide-white/[0.07] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {/* Stage 01 */}
            <div className="group p-6 transition-colors duration-300 hover:bg-white/[0.015] sm:p-7">
              <div className="mb-7 flex items-center justify-between sm:-mt-[53px] sm:mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-[#111] text-zinc-300 transition-all duration-300 group-hover:border-orange-400/40 group-hover:text-orange-300">
                  <IconGitPullRequest size={18} stroke={1.6} />
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-zinc-500" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  Input
                </span>
              </div>

              <h3 className="text-base font-medium text-zinc-100">
                Open a pull request
              </h3>
              <p className="mt-2 min-h-[72px] text-[13px] leading-6 text-zinc-500">
                Push your changes and open a PR like you always do. Revyn works
                through your GitHub integration.
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[11px] text-zinc-500">
                <IconBrandGithub size={14} />
                <span>GitHub repository</span>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="group p-6 transition-colors duration-300 hover:bg-white/[0.015] sm:p-7">
              <div className="mb-7 flex items-center justify-between sm:-mt-[53px] sm:mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/25 bg-[#17110d] text-orange-300 transition-all duration-300 group-hover:border-orange-400/50">
                  <IconGitCompare size={18} stroke={1.6} />
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <motion.span
                  className="h-1 w-1 rounded-full bg-orange-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <span className="text-[10px] uppercase tracking-[0.16em] text-orange-300/80">
                  Analysis
                </span>
              </div>

              <h3 className="text-base font-medium text-zinc-100">
                Inspect the changes
              </h3>
              <p className="mt-2 min-h-[72px] text-[13px] leading-6 text-zinc-500">
                Revyn analyzes the diff for potential logic errors, risky
                changes, and security issues.
              </p>

              {/* Tiny code-diff motif */}
              <div className="mt-6 space-y-1.5 border-t border-white/[0.07] pt-4 font-mono text-[10px]">
                <div className="flex items-center gap-2 text-zinc-600">
                  <span>diff</span>
                  <span className="text-zinc-700">/</span>
                  <span>changeset</span>
                </div>
                <div className="flex gap-2 rounded-sm bg-red-400/[0.06] px-2 py-1.5 text-red-300/70">
                  <span>-</span>
                  <span>old logic</span>
                </div>
                <div className="flex gap-2 rounded-sm bg-emerald-400/[0.06] px-2 py-1.5 text-emerald-300/80">
                  <span>+</span>
                  <span>new changes</span>
                </div>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="group p-6 transition-colors duration-300 hover:bg-white/[0.015] sm:p-7">
              <div className="mb-7 flex items-center justify-between sm:-mt-[53px] sm:mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.12] bg-[#111] text-zinc-300 transition-all duration-300 group-hover:border-orange-400/40 group-hover:text-orange-300">
                  <IconMessageCircle size={18} stroke={1.6} />
                </div>
              </div>

              <div className="mb-3 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-zinc-500" />
                <span className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  Feedback
                </span>
              </div>

              <h3 className="text-base font-medium text-zinc-100">
                Review the findings
              </h3>
              <p className="mt-2 min-h-[72px] text-[13px] leading-6 text-zinc-500">
                Read actionable comments directly in your pull request and
                decide what needs fixing before merge.
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[11px] text-zinc-500">
                <span className="flex h-5 w-5 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
                  <IconCheck size={11} />
                </span>
                <span>Back to your workflow</span>
              </div>
            </div>
          </div>

          {/* Return path: feedback loops back to the next change */}
          <div className="relative flex items-center justify-center gap-3 border-t border-white/[0.07] px-5 py-4">
            <motion.div
              className="h-1 w-1 rounded-full bg-orange-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[11px] text-zinc-500">
              Apply feedback. Push again. The cycle continues.
            </span>
            <IconRefresh size={13} className="text-zinc-600" />
          </div>
        </div>
      </section>

      {/* WHY REVYN */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c0c0c]">
          {/* Subtle ambient accent */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-500/[0.045] blur-[90px]" />

          <div className="relative grid grid-cols-1 md:grid-cols-[0.95fr_1.05fr]">
            {/* Main message */}
            <div className="flex flex-col justify-between p-6 sm:p-9 md:p-10">
              <div>
                <div className="mb-6 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.03] text-orange-300">
                    <IconBug size={16} stroke={1.7} />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                    Signal over noise
                  </span>
                </div>

                <h3 className="max-w-md text-2xl font-semibold leading-[1.2] tracking-[-0.035em] text-zinc-100 sm:text-3xl">
                  Not every diff
                  <br className="hidden sm:block" /> deserves a comment.
                </h3>

                <p className="mt-4 max-w-sm text-[13px] leading-6 text-zinc-500 sm:text-sm">
                  Code reviews should help you ship with confidence, not bury
                  you in noise. Revyn focuses on potential bugs, security
                  issues, and risky logic worth investigating.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <div className="flex -space-x-1">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0c0c0c] bg-zinc-800 text-zinc-300">
                    <IconCode size={12} />
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#0c0c0c] bg-zinc-800 text-orange-300">
                    <IconShieldCheck size={12} />
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500">
                  Relevant findings.{" "}
                  <span className="text-zinc-300">Less noise.</span>
                </p>
              </div>
            </div>

            {/* Review signals */}
            <div className="border-t border-white/[0.08] md:border-l md:border-t-0">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4 sm:px-7">
                <span className="text-xs font-medium text-zinc-300">
                  What Revyn looks for
                </span>
                <span className="font-mono text-[10px] text-zinc-600">
                  REVIEW SCOPE
                </span>
              </div>

              <div className="grid grid-cols-2">
                <Signal
                  icon={<IconShieldCheck size={17} stroke={1.6} />}
                  title="Security"
                  desc="Potential vulnerabilities"
                />
                <Signal
                  icon={<IconCode size={17} stroke={1.6} />}
                  title="Logic"
                  desc="Bugs and edge cases"
                />
                <Signal
                  icon={<IconLock size={17} stroke={1.6} />}
                  title="Sensitive changes"
                  desc="Risky code paths"
                />
                <Signal
                  icon={<IconTerminal2 size={17} stroke={1.6} />}
                  title="PR context"
                  desc="Changes in context"
                />
              </div>

              {/* Quiet bottom rail */}
              <div className="flex items-center gap-2 border-t border-white/[0.08] px-5 py-3.5 sm:px-7">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400/80" />
                <span className="text-[10px] leading-5 text-zinc-500">
                  Built around actionable review feedback
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-orange-400">
            Built for developers
          </div>

          <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold leading-tight tracking-[-0.04em] text-zinc-100 sm:text-4xl">
            Your codebase deserves
            <br className="hidden sm:block" /> another pair of eyes.
          </h2>
        </motion.div>

        {/* Bento */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {/* Main visual */}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="group relative isolate min-h-[250px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c0c0c] sm:col-span-2 sm:row-span-2 sm:min-h-[410px]"
          >
            <Image
              src="/revyn-demo-2.png"
              alt="Revyn reviewing a pull request"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />

            {/* Subtle scanning line */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent"
              animate={{ top: ["12%", "88%", "12%"] }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Speed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c0c0c] p-5 transition-colors duration-300 hover:border-white/[0.16] sm:p-6"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                Review speed
              </span>
              <IconBolt size={17} className="text-orange-400" />
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="font-mono text-4xl font-medium tracking-[-0.06em] text-zinc-100 sm:text-5xl">
                &lt;30
              </span>
              <span className="font-mono text-sm text-zinc-500">sec</span>
            </div>

            <p className="mt-3 max-w-[220px] text-xs leading-5 text-zinc-500">
              Average time to first review comment.
            </p>

            <div className="mt-6 flex items-center gap-1.5" aria-hidden="true">
              {Array.from({ length: 12 }, (_, i) => (
                <motion.span
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i === 8 ? "bg-orange-400/80" : "bg-white/[0.12]"
                  }`}
                  animate={i === 8 ? { opacity: [1, 0.4, 1] } : undefined}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>

          {/* Guardrails */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c0c0c] p-5 transition-colors duration-300 hover:border-white/[0.16] sm:p-6"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                Review boundaries
              </span>
              <IconShieldCheck
                size={17}
                className="text-zinc-400 transition-colors group-hover:text-orange-300"
              />
            </div>

            <h3 className="text-base font-medium text-zinc-100">
              Less irrelevant noise.
            </h3>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              Keep reviews focused on meaningful changes.
            </p>

            <div className="mt-5 space-y-2.5 border-t border-white/[0.07] pt-4">
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <IconCheck size={14} className="shrink-0 text-zinc-500" />
                <span>Relevant code changes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                <IconCheck size={14} className="shrink-0 text-zinc-500" />
                <span>Review configuration</span>
              </div>
            </div>
          </motion.div>

          {/* Workflow strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c0c0c] p-5 transition-colors duration-300 hover:border-white/[0.16] sm:col-span-2 sm:p-6"
          >
            <div className="flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div className="max-w-sm">
                <div className="mb-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500">
                  <IconBrandGithub size={15} />
                  GitHub-native
                </div>
                <h3 className="text-base font-medium text-zinc-100 sm:text-lg">
                  No extra place to check.
                </h3>
                <p className="mt-2 text-xs leading-5 text-zinc-500 sm:text-sm">
                  Review comments live alongside your pull request, keeping your
                  existing workflow intact.
                </p>
              </div>

              {/* Small connected workflow motif */}
              <div className="flex items-center gap-2 self-start rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 sm:self-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-[#111] text-zinc-400">
                  <IconGitPullRequest size={17} />
                </div>
                <div className="relative h-px w-5 overflow-hidden bg-white/10">
                  <motion.div
                    className="absolute inset-y-0 w-2 bg-orange-400"
                    animate={{ x: [-8, 20] }}
                    transition={{
                      duration: 1.6,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  />
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-[#111] text-zinc-300">
                  <IconMessageCircle size={17} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE REVIEW DEMO */}
      <InteractiveReview />

      {/* ANIMATED FEATURE BENTO */}
      <AnimatedFeatureBento />

      {/* FAQ */}
      <FAQSection />

      {/* Bottom CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-orange-400/10 bg-[#0d0c0b] px-8 py-20 text-center shadow-[0_0_80px_rgba(249,115,22,0.04)]">
          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-orange-600/[0.12] blur-[100px]" />

          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/10 bg-orange-500/[0.05] px-3 py-1 text-xs text-zinc-400">
              <IconSparkles size={13} className="text-orange-400" />
              AI code review for modern teams
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ship faster.
              <br />
              <span>Review smarter.</span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-zinc-500">
              Connect your GitHub repository and let Revyn handle the first pass
              on every pull request.
            </p>

            <Link
              href="/sign-up"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-b from-orange-300 via-orange-400 to-orange-500 border-t px-6 py-3 text-sm font-semibold text-white "
            >
              <IconBrandGithub size={17} />
              Connect GitHub
              <IconArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="border-t border-white/[0.07] bg-[#090909]">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {/* Main footer */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 sm:grid-cols-4 sm:py-14">
            {/* Brand */}
            <div className="col-span-2 sm:col-span-1">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white"
              >
                Revyn<span className="text-orange-500">.</span>dev
              </Link>

              <p className="mt-3 max-w-[210px] text-xs leading-6 text-zinc-500">
                An extra pair of eyes for every pull request.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                Product
              </h4>

              <ul className="space-y-3 text-[13px] text-zinc-400">
                <li>
                  <Link
                    href="#features"
                    className="transition-colors hover:text-zinc-100"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="transition-colors hover:text-zinc-100"
                  >
                    How it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#demo"
                    className="transition-colors hover:text-zinc-100"
                  >
                    Interactive demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="transition-colors hover:text-zinc-100"
                  >
                    Get started
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account & resources */}
            <div>
              <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                Resources
              </h4>

              <ul className="space-y-3 text-[13px] text-zinc-400">
                <li>
                  <Link
                    href="/sign-in"
                    className="transition-colors hover:text-zinc-100"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/apps/revyn-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-zinc-100"
                  >
                    GitHub App
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Revyn-review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-zinc-100"
                  >
                    Source & projects
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                Connect
              </h4>

              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/Revyn-review"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-zinc-500 transition-colors hover:text-orange-300"
                >
                  <IconBrandGithub size={18} stroke={1.6} />
                </a>

                <a
                  href="https://x.com/CodeX_Pabitra"
                  target="_blank"
                  aria-label="X"
                  className="text-zinc-500 transition-colors hover:text-orange-300"
                >
                  <IconBrandX size={18} stroke={1.6} />
                </a>

                <a
                  href="https://www.linkedin.com/in/pabitra-maity-72ba04323/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-zinc-500 transition-colors hover:text-orange-300"
                >
                  <IconBrandLinkedin size={18} stroke={1.6} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col gap-4 border-t border-white/[0.06] py-5 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Revyn.dev. All rights reserved.</p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-zinc-500 transition-colors hover:text-zinc-200"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-zinc-500 transition-colors hover:text-zinc-200"
              >
                Terms & Conditions
              </Link>
              <a
                href="https://github.com/apps/revyn-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function InteractiveReview() {
  const [reviewed, setReviewed] = useState(false);

  const issues = [
    {
      line: "24",
      severity: "High",
      title: "Missing authorization check",
      description:
        "Verify that the current user has permission to access this resource before returning sensitive data.",
    },
    {
      line: "38",
      severity: "Medium",
      title: "Potential null reference",
      description: "Validate the user object before accessing its properties.",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      {/* Section heading */}
      <div className="mb-10 max-w-2xl">
        <div className="mb-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-orange-400">
          Interactive preview
        </div>

        <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-zinc-100 sm:text-5xl">
          A second look at
          <br className="hidden sm:block" /> every important change.
        </h2>

        <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">
          Explore an illustrative review to see how potential issues can be
          surfaced alongside the code that needs attention.
        </p>
      </div>

      {/* Review workspace */}
      <div className="relative overflow-hidden rounded-2xl border border-white/1">
        {/* Workspace header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#101010] px-4 py-4 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.03] text-zinc-300">
              <IconGitPullRequest size={18} stroke={1.6} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-zinc-200">
                feat: improve authentication
              </p>
              <p className="mt-1 truncate text-[11px] text-zinc-500">
                example-project <span className="text-zinc-700">/</span> pull
                request #42
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.025] px-2.5 py-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                reviewed ? "bg-orange-400" : "bg-zinc-500"
              }`}
            />
            <span className="text-[10px] text-zinc-400">
              {reviewed ? "Sample findings" : "Awaiting preview"}
            </span>
          </div>
        </div>

        {/* File navigation */}
        <div className="flex items-center gap-4 overflow-hidden border-b border-white/[0.07] px-4 sm:px-5">
          <div className="flex shrink-0 items-center gap-2 border-b border-orange-400/70 py-3 text-xs text-zinc-200">
            <IconCode size={14} className="text-zinc-400" />
            src/auth.ts
          </div>
          <span className="truncate py-3 text-[11px] text-zinc-600">
            +2 review observations
          </span>
        </div>

        {/* Editor + review panel */}
        <div className="grid min-w-0 grid-cols-1 md:grid-cols-[1.05fr_0.95fr]">
          {/* Code pane */}
          <div className="min-w-0 border-b border-white/[0.08] p-4 sm:p-6 md:border-b-0 md:border-r">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">
                Authentication handler
              </span>
              <span className="font-mono text-[10px] text-zinc-600">TS</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-[#080808] py-3 font-mono text-[11px] leading-[2.2] sm:text-xs">
              <div className="min-w-[320px]">
                <div className="flex whitespace-pre px-3 text-zinc-600 sm:px-4">
                  <span className="mr-5 w-4 shrink-0 text-right">21</span>
                  <span className="text-purple-300/80">
                    export async function
                  </span>
                  <span className="ml-1 text-sky-200/80">getUser</span>
                  <span className="text-zinc-400">(id: string) {"{"}</span>
                </div>

                <div className="flex whitespace-pre px-3 text-zinc-400 sm:px-4">
                  <span className="mr-5 w-4 shrink-0 text-right">22</span>
                  <span className="text-purple-300/80">const</span>
                  <span className="ml-1">user = </span>
                  <span className="text-purple-300/80">await</span>
                  <span className="ml-1">db.user.findUnique(</span>
                </div>

                <div className="flex whitespace-pre px-3 text-zinc-400 sm:px-4">
                  <span className="mr-5 w-4 shrink-0 text-right">23</span>
                  <span className="text-zinc-500">{"{"}</span>
                  <span className="ml-1">
                    where: {"{"} id {"}"} {"}"}
                  </span>
                </div>

                <div className="relative flex whitespace-pre border-y border-orange-400/10 bg-orange-400/[0.07] px-3 text-orange-100 sm:px-4">
                  <span className="mr-5 w-4 shrink-0 text-right text-orange-400/70">
                    24
                  </span>
                  <span>return user;</span>
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[2px] bg-orange-400/80"
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                </div>

                <div className="flex whitespace-pre px-3 text-zinc-600 sm:px-4">
                  <span className="mr-5 w-4 shrink-0 text-right">25</span>
                  <span>{"}"}</span>
                </div>
              </div>
            </div>

            {/* Code context note */}
            <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5">
              <IconInfoCircle
                size={16}
                className="mt-0.5 shrink-0 text-zinc-500"
              />
              <p className="text-[11px] leading-5 text-zinc-500">
                Example code only. Whether authorization is required depends on
                the application's access-control rules.
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
              <span className="text-[10px] text-zinc-600">
                Illustrative code diff
              </span>
              <div className="flex items-center gap-3 font-mono text-[10px]">
                <span className="text-emerald-400/80">+12</span>
                <span className="text-red-400/80">-4</span>
              </div>
            </div>
          </div>

          {/* Findings pane */}
          <div className="flex min-w-0 flex-col p-4 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.03] text-zinc-300">
                  <IconSparkles size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-200">
                    Review findings
                  </p>
                  <p className="mt-0.5 text-[10px] text-zinc-500">
                    Illustrative output
                  </p>
                </div>
              </div>

              {reviewed && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-md border border-white/[0.09] bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-zinc-400"
                >
                  02
                </motion.span>
              )}
            </div>

            <AnimatePresence mode="wait">
              {reviewed ? (
                <motion.div
                  key="findings"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  {issues.map((issue, index) => (
                    <motion.div
                      key={issue.line}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.12 }}
                      className="rounded-xl border border-white/[0.08] bg-[#101010] p-4 transition-colors duration-300 hover:border-white/[0.14]"
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] text-zinc-500">
                          auth.ts:{issue.line}
                        </span>

                        <span
                          className={`rounded-md border px-2 py-1 text-[10px] ${
                            issue.severity === "High"
                              ? "border-red-400/20 bg-red-400/[0.06] text-red-300"
                              : "border-amber-400/20 bg-amber-400/[0.05] text-amber-300"
                          }`}
                        >
                          {issue.severity}
                        </span>
                      </div>

                      <div className="flex items-start gap-2.5">
                        <IconAlertTriangle
                          size={15}
                          className="mt-0.5 shrink-0 text-zinc-400"
                        />
                        <div className="min-w-0">
                          <h4 className="text-[13px] font-medium leading-5 text-zinc-200">
                            {issue.title}
                          </h4>
                          <p className="mt-2 text-xs leading-[1.7] text-zinc-500">
                            {issue.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <div className="flex items-center gap-2 px-1 pt-1 text-[10px] text-zinc-500">
                    <IconInfoCircle size={14} />
                    <span>Sample findings, not a live repository review.</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[230px] flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-white/[0.12] bg-white/[0.01] px-5 py-8 text-center sm:min-h-[280px]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.03] text-zinc-400">
                    <IconScan size={21} stroke={1.5} />
                  </div>

                  <p className="text-sm font-medium text-zinc-200">
                    The review starts here.
                  </p>
                  <p className="mt-2 max-w-[230px] text-xs leading-5 text-zinc-500">
                    Reveal the sample findings to explore the kind of feedback a
                    code review might surface.
                  </p>

                  <div className="mt-5 flex items-center gap-1.5">
                    <span className="h-1 w-5 rounded-full bg-zinc-500" />
                    <span className="h-1 w-1 rounded-full bg-zinc-700" />
                    <span className="h-1 w-1 rounded-full bg-zinc-700" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Demo control */}
            <button
              type="button"
              onClick={() => setReviewed((value) => !value)}
              className="mt-5 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border-t px-4 py-3 text-sm font-medium text-zinc-200 transition-colors duration-200 bg-linear-to-b from-orange-300 via-orange-400 to-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
            >
              {reviewed ? "Reset preview" : "Reveal sample findings"}
              <motion.span
                animate={{ x: reviewed ? 0 : [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: reviewed ? 0 : Infinity }}
              >
                {reviewed ? (
                  <IconRefresh size={15} />
                ) : (
                  <IconArrowRight size={15} />
                )}
              </motion.span>
            </button>

            <p className="mt-3 text-center text-[10px] leading-5 text-zinc-600">
              Interactive demo · No repository is analyzed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedFeatureBento() {
  const features = [
    {
      icon: <IconShieldCheck size={20} />,
      title: "Security-aware reviews",
      description:
        "Surface potentially risky patterns before changes reach production.",
      label: "SECURITY",
    },
    {
      icon: <IconBug size={20} />,
      title: "Find meaningful bugs",
      description:
        "Focus attention on logic errors and behavior that deserves a second look.",
      label: "CODE QUALITY",
    },
    {
      icon: <IconMessageCircle size={20} />,
      title: "Where the code lives",
      description:
        "Keep review feedback close to the changed lines in your pull request.",
      label: "GITHUB NATIVE",
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 pb-28">
      <div className="mb-10 max-w-xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-orange-400">
          Thoughtful by design
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Your workflow.
          <br />
          <span className="text-zinc-500">With another pair of eyes.</span>
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="group relative min-h-72 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0c0b] p-7 md:row-span-2"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-orange-500/[0.09] blur-[90px] transition-all duration-700 group-hover:bg-orange-500/[0.16]" />

          <div className="relative">
            <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/15 bg-orange-500/[0.08] text-orange-400">
              <IconGitPullRequest size={21} />
            </span>
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              Your pull request
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              Review where you already work.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
              Bring automated analysis into your existing GitHub workflow
              without making another dashboard the center of your day.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Pull request opened",
                "Changes inspected",
                "Review feedback prepared",
              ].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500/[0.09] text-xs text-orange-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-zinc-300">{step}</span>
                  <IconArrowRight size={14} className="ml-auto text-zinc-600" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-white/[0.07] bg-[#0d0c0b] p-6 transition-colors duration-300 hover:border-orange-400/20 hover:bg-[#11100e]"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] text-zinc-400 transition-colors group-hover:border-orange-400/20 group-hover:bg-orange-500/[0.08] group-hover:text-orange-300">
                {feature.icon}
              </span>
              <span className="font-mono text-[9px] tracking-widest text-zinc-600">
                {feature.label}
              </span>
            </div>
            <h3 className="text-base font-medium text-zinc-100">
              {feature.title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-zinc-500">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Revyn, and how does it work?",
      answer:
        "Revyn is an AI-powered code reviewer that analyzes GitHub pull requests to help identify potential bugs, security risks, and logic issues before your code gets merged.",
    },
    {
      question: "How do I get started with Revyn?",
      answer:
        "Connect Revyn with GitHub, select the repositories you want to use, and follow the setup instructions to start reviewing pull requests.",
    },
    {
      question: "Does Revyn modify or rewrite my source code?",
      answer:
        "No. Revyn reviews your code and provides feedback on potential issues. It does not modify or rewrite your source code for you.",
    },
    {
      question: "Is Revyn free to use?",
      answer:
        "Yes! Revyn is currently free to use. You can get started without paying for a subscription. Check the latest product updates for any future pricing changes.",
    },
    {
      question: "Can Revyn catch every bug or security issue?",
      answer:
        "No tool can guarantee that every issue will be found. Revyn helps surface potential problems, but you should still validate findings, run tests, and use human code reviews.",
    },
    {
      question: "Does Revyn replace human code reviews?",
      answer:
        "Not at all. Revyn acts as an extra pair of eyes, helping developers spot issues earlier while human reviewers provide context, architectural judgment, and final approval.",
    },
    {
      question: "Is my code safe when using Revyn?",
      answer:
        "Your code may be processed by the AI services used for reviews. Before connecting private repositories, check Revyn's current privacy policy and the permissions requested by its GitHub App.",
    },
  ];

  return (
    <section className="mx-auto max-w-3xl px-5 pb-24 sm:px-6 sm:pb-28">
      <div className="mb-10 text-center">
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-orange-500">
          FAQ
        </p>

        <h2 className="text-3xl font-semibold tracking-[-0.035em] text-zinc-100 sm:text-4xl">
          Got questions?
          <span className="text-zinc-500"> We've got answers.</span>
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-500">
          Everything you need to know before bringing Revyn into your workflow.
        </p>
      </div>

      <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `revyn-faq-panel-${index}`;

          return (
            <div key={faq.question}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-orange-400/60"
              >
                <span
                  className={`text-sm font-medium leading-6 transition-colors duration-200 ${
                    isOpen
                      ? "text-zinc-100"
                      : "text-zinc-300 group-hover:text-zinc-100"
                  }`}
                >
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className={`shrink-0 transition-colors duration-200 ${
                    isOpen
                      ? "text-orange-300"
                      : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                  aria-hidden="true"
                >
                  <IconPlus size={17} stroke={1.5} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.25, ease: "easeInOut" },
                      opacity: { duration: 0.18 },
                    }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-5 pr-8 text-[13px] leading-6 text-zinc-500">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
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
    <div className="group px-0 py-7 ">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/3 text-zinc-400 transition-all group-hover:border-orange-400/20 group-hover:bg-orange-500/8 group-hover:text-orange-300">
        {icon}
      </div>

      <h3 className="text-sm font-medium text-white">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-zinc-500">{desc}</p>
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

      <h3 className="text-sm font-medium text-white">{title}</h3>

      <p className="mt-2 text-xs leading-5 text-zinc-500">{desc}</p>
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
    <div className="group min-w-0 border-b border-r border-white/[0.07] p-4 transition-colors duration-300 hover:bg-white/[0.025] sm:p-6">
      <div className="mb-5 flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.025] text-zinc-400 transition-colors duration-300 group-hover:border-orange-400/25 group-hover:text-orange-300">
        {icon}
      </div>

      <h4 className="text-[13px] font-medium text-zinc-200">{title}</h4>
      <p className="mt-1.5 text-[11px] leading-5 text-zinc-500 sm:text-xs">
        {desc}
      </p>
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
