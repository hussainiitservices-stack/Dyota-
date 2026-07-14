import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dyota Engineered Solutions",
    short_name: "Dyota ES",
    description:
      "Power quality solutions, harmonic filters, and UAE-manufactured capacitors and reactors in Dubai, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#002D88",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
