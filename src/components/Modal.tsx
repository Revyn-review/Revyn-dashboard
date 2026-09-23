"use client";

import { useEffect } from "react";
import { IconX } from "@tabler/icons-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({
  open,
  onClose,
  title,
  children,
}: ModalProps) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (open) {
      document.addEventListener("keydown", handleEsc);
    }

    return () =>
      document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Orange ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/[0.07] blur-[100px]" />

      {/* Modal */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.08] bg-[#11100f] p-6 shadow-2xl shadow-black/50 animate-in zoom-in-95 duration-150">

        {/* Top orange glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-56 -translate-x-1/2 rounded-full bg-orange-500/[0.06] blur-[50px]" />

        <div className="relative">

          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-base font-semibold tracking-tight text-white">
              {title}
            </h2>

            <button
              onClick={onClose}
              className="rounded-lg p-1.5 text-zinc-500 transition-all hover:bg-white/[0.06] hover:text-orange-400"
              aria-label="Close modal"
            >
              <IconX size={18} />
            </button>
          </div>

          {/* Content */}
          {children}
        </div>
      </div>
    </div>
  );
}