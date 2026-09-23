"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconBrandGithub,
  IconGitPullRequest,
  IconSettings,
  IconX,
  IconSquareToggle,
  IconArrowUpRight,
} from "@tabler/icons-react";

const navItems = [
  {
    href: "/dashboard",
    label: "Overview",
    icon: IconLayoutDashboard,
  },
  {
    href: "/repos",
    label: "Repositories",
    icon: IconBrandGithub,
  },
  {
    href: "/reviews",
    label: "Reviews",
    icon: IconGitPullRequest,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: IconSettings,
  },
];

export function Sidebar({
  open,
  onClose,
  collapsed,
  onToggleCollapse,
}: {
  open: boolean;
  onClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          shrink-0
          fixed
          lg:sticky
          top-0
          z-40
          flex
          h-screen
          flex-col
          border-r
          border-white/[0.06]
          bg-[#0b0b0a]
          transition-all
          duration-200

          w-64

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }

          ${collapsed ? "lg:w-[72px]" : "lg:w-64"}
        `}
      >
        {/* Brand */}
        <div
          className={`
            flex
            h-[65px]
            items-center
            border-b
            border-white/[0.06]
            px-4
            ${
              collapsed
                ? "lg:justify-center"
                : "justify-between"
            }
          `}
        >
          {/* Logo */}
          <Link
            href="/dashboard"
            onClick={onClose}
            className={`
              group
              flex
              items-center
              gap-2.5
              ${
                collapsed
                  ? "lg:hidden"
                  : ""
              }
            `}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-500/10 shadow-lg shadow-orange-500/[0.08] transition-all group-hover:border-orange-400/30 group-hover:bg-orange-500/[0.15]">
              <span className="text-sm font-bold text-orange-400">
                R
              </span>
            </div>

            <div>
              <span className="block text-sm font-semibold tracking-tight text-white">
                Revyn
              </span>

              <span className="block text-[9px] uppercase tracking-[0.16em] text-zinc-600">
                AI code review
              </span>
            </div>
          </Link>

          {/* Collapsed logo */}
          {collapsed && (
            <Link
              href="/dashboard"
              onClick={onClose}
              className="hidden lg:flex"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-orange-400/20 bg-orange-500/10 text-sm font-bold text-orange-400 transition-all hover:border-orange-400/30 hover:bg-orange-500/15">
                R
              </div>
            </Link>
          )}

          {/* Desktop collapse */}
          <button
            onClick={onToggleCollapse}
            className="hidden rounded-lg p-1.5 text-zinc-600 transition-all hover:bg-white/[0.05] hover:text-orange-400 lg:block"
            title={
              collapsed
                ? "Expand sidebar"
                : "Collapse sidebar"
            }
          >
            <IconSquareToggle size={19} />
          </button>

          {/* Mobile close */}
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-orange-400 lg:hidden"
            aria-label="Close sidebar"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-5">
          <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
            {collapsed ? "" : "Workspace"}
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <div
                  key={item.href}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`
                      relative
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      duration-200

                      ${
                        collapsed
                          ? "lg:justify-center"
                          : ""
                      }

                      ${
                        isActive
                          ? "bg-orange-500/[0.10] text-orange-300 shadow-[inset_0_0_0_1px_rgba(249,115,22,0.10)]"
                          : "text-zinc-500 hover:bg-white/[0.035] hover:text-zinc-200"
                      }
                    `}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.7)]" />
                    )}

                    <Icon
                      size={18}
                      className={`
                        shrink-0
                        transition-colors
                        ${
                          isActive
                            ? "text-orange-400"
                            : ""
                        }
                      `}
                    />

                    <span
                      className={
                        collapsed
                          ? "lg:hidden"
                          : ""
                      }
                    >
                      {item.label}
                    </span>
                  </Link>

                  {/* Collapsed tooltip */}
                  {collapsed && (
                    <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/[0.08] bg-[#161513] px-2.5 py-1.5 text-xs font-medium text-zinc-200 shadow-xl group-hover:block">
                      {item.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Bottom connection */}
        <div className="border-t border-white/[0.06] p-3">

          <div className="relative group">
            <a
              href="https://github.com/apps/revyn-dev/installations/new"
              className={`
                flex
                items-center
                gap-3
                rounded-lg
                border
                border-orange-400/10
                bg-orange-500/[0.07]
                px-3
                py-2.5
                text-sm
                font-medium
                text-orange-300
                transition-all

                hover:border-orange-400/20
                hover:bg-orange-500/[0.12]
                hover:text-orange-200

                ${
                  collapsed
                    ? "lg:justify-center"
                    : ""
                }
              `}
            >
              <IconBrandGithub
                size={18}
                className="shrink-0"
              />

              <span
                className={
                  collapsed
                    ? "lg:hidden"
                    : ""
                }
              >
                Connect a repo
              </span>

              {!collapsed && (
                <IconArrowUpRight
                  size={14}
                  className="ml-auto text-orange-500/60"
                />
              )}
            </a>

            {/* Collapsed tooltip */}
            {collapsed && (
              <span className="pointer-events-none absolute left-full top-1/2 z-50 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/[0.08] bg-[#161513] px-2.5 py-1.5 text-xs font-medium text-zinc-200 shadow-xl group-hover:block">
                Connect a repo
              </span>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}