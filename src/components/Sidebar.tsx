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
} from "@tabler/icons-react";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: IconLayoutDashboard },
  { href: "/repos", label: "Repositories", icon: IconBrandGithub },
  { href: "/reviews", label: "Reviews", icon: IconGitPullRequest },
  { href: "/settings", label: "Settings", icon: IconSettings },
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
      {open && (
        <div className="fixed inset-0 bg-black/30 z-30 lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`
          shrink-0 border-r border-gray-200 bg-white h-screen flex flex-col
          fixed lg:sticky top-0 z-40 transition-all duration-200
          w-60
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          ${collapsed ? "lg:w-18" : "lg:w-60"}
        `}
      >
        <div className="px-5 py-5 border-b border-gray-100 flex items-center justify-between">
          <span className={`text-lg font-semibold ${collapsed ? "lg:hidden" : ""}`}>
            Revyn
          </span>

          <button
            onClick={onToggleCollapse}
            className="hidden lg:block text-gray-400 hover:text-black"
            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <IconSquareToggle size={20} />
          </button>

          <button onClick={onClose} className="lg:hidden text-gray-400 hover:text-black">
            <IconX size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    collapsed ? "lg:justify-center" : ""
                  } ${isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100"}`}
                >
                  <Icon size={18} className="shrink-0" />
                  <span className={collapsed ? "lg:hidden" : ""}>{item.label}</span>
                </Link>

                {collapsed && (
                  <span className="hidden lg:group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded-md z-50">
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-gray-100">
          <div className="relative group">
            <a
              href="https://github.com/apps/revyn-dev/installations/new"
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 ${
                collapsed ? "lg:justify-center" : ""
              }`}
            >
              <IconBrandGithub size={18} className="shrink-0" />
              <span className={collapsed ? "lg:hidden" : ""}>Connect a repo</span>
            </a>
            {collapsed && (
              <span className="hidden lg:group-hover:block absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded-md z-50">
                Connect a repo
              </span>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}