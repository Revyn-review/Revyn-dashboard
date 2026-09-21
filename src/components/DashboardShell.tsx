"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { IconMenu2 } from "@tabler/icons-react";
import { Sidebar } from "./Sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("revyn-sidebar-collapsed");
    if (saved === "true") setCollapsed(true);
  }, []);

  function toggleCollapse() {
    setCollapsed((prev) => {
      localStorage.setItem("revyn-sidebar-collapsed", String(!prev));
      return !prev;
    });
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={toggleCollapse}
      />

      <div className="flex-1 min-w-0">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-20">
          <div className="px-4 sm:px-8 py-4 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-black"
            >
              <IconMenu2 size={22} />
            </button>
            <div className="flex-1" />
            <UserButton />
          </div>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}