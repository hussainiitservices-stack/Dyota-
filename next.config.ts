import type { NextConfig } from "next";

/**
 * Legacy service URLs (often indexed with a `-uae` suffix) → final live paths.
 * Uses statusCode 301 (not permanent:true/308) per SEO requirement.
 * Query strings are preserved by Next.js redirects.
 * ETAP (`/services/etap-simulation-services-uae`) is intentionally omitted → 404.
 */
const legacyServiceRedirects = [
  {
    source: "/services/electrical-consultancy-uae",
    destination: "/",
  },
  {
    source: "/services/busduct-testing-uae",
    destination: "/services/busduct-testing",
  },
  {
    source: "/services/power-quality-studies-uae",
    destination: "/solutions",
  },
  {
    source: "/services/electrical-engineering-services-uae",
    destination: "/services",
  },
  {
    source: "/services/arc-flash-study-uae",
    destination: "/services/arc-flash-study",
  },
  {
    source: "/services/thermal-imaging-inspection-uae",
    destination: "/services/thermal-imaging-inspection",
  },
  {
    source: "/services/energy-audit-uae",
    destination: "/services/energy-audit",
  },
] as const;

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.113.9.37"],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return legacyServiceRedirects.map(({ source, destination }) => ({
      source,
      destination,
      statusCode: 301,
    }));
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
