"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconLayoutDashboard,
  IconBrandGithub,
  IconGitPullRequest,
  IconSettings,
} from "@tabler/icons-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: IconLayoutDashboard },
  { href: "/repos", label: "Repositories", icon: IconBrandGithub },
  { href: "/reviews", label: "Reviews", icon: IconGitPullRequest },
  { href: "/settings", label: "Settings", icon: IconSettings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 shrink-0 border-r border-gray-200 bg-white h-screen sticky top-0 flex flex-col">
      <div className="px-5 py-5 border-b border-gray-100">
        <span className="text-lg font-semibold">Revyn</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? "bg-black text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-gray-100">
        <a
          href="https://github.com/apps/revyn-dev/installations/new"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
        >
          <IconBrandGithub size={18} />
          Connect a repo
        </a>
      </div>
    </aside>
  );
}