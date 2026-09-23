"use client";

import { useUser } from "@clerk/nextjs";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";
import { Modal } from "@/components/Modal";

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ??
  "http://localhost:4000";

export default function SettingsPage() {
  const { user } = useUser();

  const [disconnecting, setDisconnecting] =
    useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  async function handleDisconnect() {
    if (!user) return;

    setDisconnecting(true);

    try {
      const res = await fetch(
        `${SERVER_URL}/api/installations?clerkUserId=${user.id}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setModalOpen(false);

      toast.success("GitHub disconnected", {
        description:
          "Don't forget to also uninstall the app from your GitHub settings.",
      });

      setTimeout(
        () => window.location.reload(),
        1200,
      );
    } catch {
      toast.error("Couldn't disconnect", {
        description:
          "Something went wrong. Try again in a moment.",
      });

      setDisconnecting(false);
    }
  }

  return (
    <div className="px-8 py-8 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#F5F5F4] mb-1">
          Settings
        </h1>

        <p className="text-sm text-[#78716C]">
          Manage your account and GitHub connection
        </p>
      </div>

      <div className="bg-[#10100F] border border-white/[0.06] rounded-xl p-6 mb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F97316]/[0.08] border border-[#F97316]/[0.12]">
            <div className="h-2 w-2 rounded-full bg-[#F97316]" />
          </div>

          <h3 className="text-sm font-medium text-[#E7E5E4]">
            Account
          </h3>
        </div>

        <p className="text-sm text-[#78716C] pl-11">
          {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>

      <div className="bg-[#10100F] border border-red-500/20 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/[0.08] border border-red-500/[0.12]">
            <IconAlertTriangle
              size={16}
              className="text-red-400"
            />
          </div>

          <h3 className="text-sm font-medium text-red-400">
            Disconnect GitHub
          </h3>
        </div>

        <p className="text-sm text-[#78716C] leading-relaxed mb-4">
          Removes Revyn&apos;s record of your GitHub
          installation. You&apos;ll also need to uninstall the
          app from your{" "}
          <a
            href="https://github.com/settings/installations"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A8A29E] underline underline-offset-2 hover:text-[#F5F5F4]"
          >
            GitHub App settings
          </a>{" "}
          to fully revoke access.
        </p>

        <button
          onClick={() => setModalOpen(true)}
          className="text-sm bg-red-500/90 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors"
        >
          Disconnect
        </button>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Disconnect GitHub?"
      >
        <p className="text-sm text-[#78716C] leading-relaxed mb-6">
          This removes Revyn&apos;s access to your review
          history. You&apos;ll need to reconnect to resume
          getting PR reviews.
        </p>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setModalOpen(false)}
            className="text-sm px-4 py-2 rounded-lg text-[#A8A29E] hover:bg-white/[0.05] hover:text-[#F5F5F4] transition-colors"
          >
            Cancel
          </button>

          <button
            onClick={handleDisconnect}
            disabled={disconnecting}
            className="text-sm bg-red-500/90 text-white px-4 py-2 rounded-lg hover:bg-red-500 disabled:opacity-50 transition-colors"
          >
            {disconnecting
              ? "Disconnecting..."
              : "Yes, disconnect"}
          </button>
        </div>
      </Modal>
    </div>
  );
}