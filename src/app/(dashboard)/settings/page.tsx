"use client";

import { useUser } from "@clerk/nextjs";
import { IconAlertTriangle } from "@tabler/icons-react";
import { useState } from "react";

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:4000";

export default function SettingsPage() {
  const { user } = useUser();
  const [disconnecting, setDisconnecting] = useState(false);

  async function handleDisconnect() {
    if (!user) return;
    if (
      !confirm(
        "This will remove Revyn's access to your review history. Continue?",
      )
    )
      return;

    setDisconnecting(true);
    await fetch(`${SERVER_URL}/api/installations?clerkUserId=${user.id}`, {
      method: "DELETE",
    });
    setDisconnecting(false);
    window.location.reload();
  }

  return (
    <div className="px-8 py-8 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-1">Settings</h1>
      <p className="text-sm text-gray-500 mb-8">
        Manage your account and GitHub connection
      </p>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4">
        <h3 className="text-sm font-medium mb-1">Account</h3>
        <p className="text-sm text-gray-500">
          {user?.primaryEmailAddress?.emailAddress}
        </p>
      </div>

      <div className="bg-white border border-red-200 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-2">
          <IconAlertTriangle size={16} className="text-red-500" />
          <h3 className="text-sm font-medium text-red-700">
            Disconnect GitHub
          </h3>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Removes Revyn's record of your GitHub installation. You'll also need
          to uninstall the app from your{" "}
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
          onClick={handleDisconnect}
          disabled={disconnecting}
          className="text-sm bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
        >
          {disconnecting ? "Disconnecting..." : "Disconnect"}
        </button>
      </div>
    </div>
  );
}
