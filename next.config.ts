import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.113.9.37"],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Legacy Wix API paths — stop 404s from old indexed URLs
      {
        source: "/_api/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/services/electrical-studies",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/hvac",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/services/power-quality",
        destination: "/services",
        permanent: true,
      },
    ];
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
