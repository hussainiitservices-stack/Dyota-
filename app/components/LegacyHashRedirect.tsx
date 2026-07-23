"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Old Wix / marketing fragment IDs that no longer exist on /services */
const LEGACY_SERVICE_HASHES = new Set([
  "electrical-studies",
  "power-quality",
  "hvac",
]);

/**
 * Hash fragments are never sent to the server, so Next redirects cannot clear them.
 * Strip known legacy hashes so the address bar becomes a clean /services URL.
 */
export default function LegacyHashRedirect() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/services") return;

    const hash = window.location.hash.replace(/^#/, "").toLowerCase();
    if (!hash || !LEGACY_SERVICE_HASHES.has(hash)) return;

    window.history.replaceState(null, "", "/services");
  }, [pathname]);

  return null;
}
