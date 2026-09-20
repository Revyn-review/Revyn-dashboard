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
} from "@tabler/icons-react";

function MacWindow({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/60 overflow-hidden bg-white">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1000}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <span className="text-lg font-semibold tracking-tight">Revyn</span>

        <Show when="signed-out">
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="text-sm text-gray-600 hover:text-black"
            >
              Sign in
            </Link>
            <Link
              href="/sign-up"
              className="text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Get started
            </Link>
          </div>
        </Show>

        <Show when="signed-in">
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm text-gray-600 hover:text-black"
            >
              Dashboard
            </Link>
            <UserButton />
          </div>
        </Show>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(0,0,0,0.05) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center px-6 pt-24 pb-16">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full mb-6">
            <IconSparkles size={14} />
            AI-powered code review
          </div>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight mb-6 leading-[1.1]">
            Every pull request,
            <br />
            <span className="bg-linear-to-r from-gray-900 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              reviewed instantly.
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Revyn connects to your GitHub repos and reviews every PR
            automatically — catching bugs, flagging risky changes, and
            summarizing what changed, before a human ever has to look.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <IconBrandGithub size={18} />
              Connect your repo
            </Link>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-gray-700 px-5 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              See it in action
              <IconArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Demo screenshot, Mac window */}
        <div id="demo" className="max-w-5xl mx-auto px-6 pb-24">
          <MacWindow
            src="/revyn-demo.png"
            alt="Revyn AI review comment on a GitHub pull request"
          />
        </div>
      </section>

      {/* Feature strip */}
      <section className="max-w-5xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <Feature
          icon={<IconMessageCircle size={20} />}
          title="Inline comments"
          desc="Issues flagged exactly where they happen, on the exact line."
        />
        <Feature
          icon={<IconSparkles size={20} />}
          title="Real bug detection"
          desc="Not style nitpicks — logic errors, missing awaits, security smells."
        />
        <Feature
          icon={<IconBrandGithub size={20} />}
          title="Zero setup"
          desc="Install the GitHub App, connect a repo, done."
        />
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-3">
            How it works
          </h2>
          <p className="text-gray-500">
            Three steps, and every future PR is covered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Step
            number="01"
            icon={<IconBrandGithub size={20} />}
            title="Connect a repo"
            desc="Install the Revyn GitHub App on the repos you want reviewed."
          />
          <Step
            number="02"
            icon={<IconGitPullRequest size={20} />}
            title="Open a PR"
            desc="Revyn picks up every new pull request automatically — no extra steps."
          />
          <Step
            number="03"
            icon={<IconBolt size={20} />}
            title="Get reviewed"
            desc="Inline comments and a summary land on the PR, usually within seconds."
          />
        </div>
      </section>

      {/* Bento grid */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 sm:row-span-2 rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
            <Image
              src="/revyn-demo-2.png"
              alt="Revyn reviewing a pull request in real time"
              width={1200}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-xl border border-gray-200 bg-black text-white p-6 flex flex-col justify-center">
            <span className="text-3xl font-semibold">&lt; 30s</span>
            <span className="text-sm text-gray-300 mt-1">
              Average time to first review comment
            </span>
          </div>

          <div className="rounded-xl border border-gray-200 p-6 flex flex-col justify-center">
            <IconShieldCheck size={20} className="mb-2 text-gray-400" />
            <span className="text-sm font-medium">Guardrails built in</span>
            <span className="text-xs text-gray-500 mt-1">
              Skips lockfiles and generated code — reviews what matters.
            </span>
          </div>

          <div className="sm:col-span-2 rounded-xl border border-gray-200 p-6 flex items-center justify-between">
            <div>
              <span className="text-sm font-medium">
                Works with your existing workflow
              </span>
              <p className="text-xs text-gray-500 mt-1">
                No new tools to learn — reviews show up as normal GitHub PR
                comments.
              </p>
            </div>
            <IconBrandGithub size={28} className="text-gray-300 shrink-0" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl bg-black text-white px-8 py-16 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 0%, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Ship with confidence.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Set up Revyn in under two minutes. Your next pull request gets
              reviewed automatically.
            </p>
            <Link
              href="/sign-up"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <IconBrandGithub size={18} />
              Connect your repo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 sm:col-span-1">
              <span className="text-lg font-semibold">Revyn</span>
              <p className="text-sm text-gray-500 mt-2">
                AI code review for every pull request.
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/sign-up" className="hover:text-black">
                    Get started
                  </Link>
                </li>
                <li>
                  <Link href="/sign-in" className="hover:text-black">
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Resources
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="#" className="hover:text-black">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black">
                    Changelog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/apps/revyn-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    GitHub App
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Codewithpabitra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black"
                  aria-label="GitHub"
                >
                  <IconBrandGithub size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black"
                  aria-label="X / Twitter"
                >
                  <IconBrandX size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Revyn. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <Link href="#" className="hover:text-gray-600">
                Privacy
              </Link>
              <Link href="#" className="hover:text-gray-600">
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
    <div>
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3 text-gray-700">
        {icon}
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
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
    <div className="relative bg-white border border-gray-200 rounded-xl p-6">
      <span className="text-xs font-mono text-gray-300 absolute top-4 right-5">
        {number}
      </span>
      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-gray-700">
        {icon}
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}
