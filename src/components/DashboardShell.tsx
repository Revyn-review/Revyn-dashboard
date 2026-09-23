"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { IconMenu2 } from "@tabler/icons-react";
import { Sidebar } from "./Sidebar";

export function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("revyn-sidebar-collapsed");

    if (saved === "true") setCollapsed(true);
  }, []);

  function toggleCollapse() {
    setCollapsed((prev) => {
      localStorage.setItem(
        "revyn-sidebar-collapsed",
        String(!prev)
      );

      return !prev;
    });
  }

  return (
    <div className="flex min-h-screen bg-[#090909] text-zinc-100">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={toggleCollapse}
      />

      <div className="min-w-0 flex-1">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#090909]/90 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3.5 sm:px-8">

            {/* Mobile menu */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-white/[0.05] hover:text-orange-400 lg:hidden"
              aria-label="Open sidebar"
            >
              <IconMenu2 size={22} />
            </button>

            <div className="flex-1" />

            {/* User */}
            <div className="flex items-center">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox:
                      "h-8 w-8 ring-1 ring-white/[0.08] hover:ring-orange-400/30 transition-all",
                  },
                }}
              />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main>{children}</main>
      </div>
    </div>
  );
}