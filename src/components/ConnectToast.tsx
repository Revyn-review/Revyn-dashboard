"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export function ConnectToast() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get("connected") === "true") {
      toast.success("GitHub connected", {
        description: "Revyn will now review pull requests on your connected repos.",
      });
      router.replace(pathname); // strip the query param so it doesn't re-fire on refresh
    }
    if (searchParams.get("error")) {
      toast.error("Connection failed", {
        description: "Something went wrong linking your GitHub account. Try again.",
      });
      router.replace(pathname);
    }
  }, [searchParams, router, pathname]);

  return null;
}