"use client";

import { useUser } from "@clerk/nextjs";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";
import { Modal } from "@/components/Modal";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:4000";

export default function SettingsPage() {
  const { user } = useUser();
  const [disconnecting, setDisconnecting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  async function handleDisconnect() {
    if (!user) return;

    setDisconnecting(true);
    try {
      const res = await fetch(`${SERVER_URL}/api/installations?clerkUserId=${user.id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Request failed");

      setModalOpen(false);
      toast.success("GitHub disconnected", {
        description: "Don't forget to also uninstall the app from your GitHub settings.",
      });

      setTimeout(() => window.location.reload(), 1200);
    } catch {
      toast.error("Couldn't disconnect", {
        description: "Something went wrong. Try again in a moment.",
      });
      setDisconnecting(false);
    }
  }

  return (
    <div className="px-8 py-8 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-1">Settings</h1>
      <p className="text-sm text-gray-500 mb-8">Manage your account and GitHub connection</p>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
        <h3 className="text-sm font-medium mb-1">Account</h3>
        <p className="text-sm text-gray-500">{user?.primaryEmailAddress?.emailAddress}</p>
      </div>

      <div className="bg-white border border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-2">
          <IconAlertTriangle size={16} className="text-red-500" />
          <h3 className="text-sm font-medium text-red-700">Disconnect GitHub</h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Removes Revyn's record of your GitHub installation. You'll also need to uninstall the
          app from your{" "}
          <a
            href="https://github.com/settings/installations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            GitHub App settings
          </a>{" "}
          to fully revoke access.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="text-sm bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Disconnect
        </button>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Disconnect GitHub?">
        <p className="text-sm text-gray-500 mb-6">
          This removes Revyn's access to your review history. You'll need to reconnect to resume
          getting PR reviews.
        </p>
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => setModalOpen(false)}
            className="text-sm px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleDisconnect}
            disabled={disconnecting}
            className="text-sm bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
          >
            {disconnecting ? "Disconnecting..." : "Yes, disconnect"}
          </button>
        </div>
      </Modal>
    </div>
  );
}