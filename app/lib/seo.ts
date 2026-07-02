import type { Metadata } from "next";
import { contactInfo, seoKeywords } from "./content";

export const SITE_URL = "https://www.dyotaes.com";
export const SITE_NAME = "Dyota Engineered Solutions";
export const SITE_BRAND = "Dyota ES";
export const DEFAULT_OG_IMAGE = "/images/hero-bg.jpg";
export const GOOGLE_SITE_VERIFICATION = "googlee3d9b88b6cf785ea";

/** ≤60 characters for search result titles */
export const DEFAULT_TITLE =
  "Dyota ES | Power Quality & Electrical Engineering UAE";

/** ≤160 characters for meta descriptions */
export const DEFAULT_DESCRIPTION =
  "Power quality audits, harmonic filters, ETAP simulation, capacitor banks and Delta T HVAC control for industrial facilities in Dubai and the UAE.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  ogImage?: string;
};

export function pageTitle(label: string, path = ""): string {
  if (path === "/") return DEFAULT_TITLE;
  return `${label} | ${SITE_BRAND}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const absoluteTitle = pageTitle(title, path);

  return {
    title: { absolute: absoluteTitle },
    description,
    keywords: keywords ? [...keywords] : [...seoKeywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [ogImage],
    },
  };
}

export function buildSchemaGraph(
  schemas: Record<string, unknown>[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map(({ "@context": _, ...schema }) => schema),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [contactInfo.linkedin],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: "en-AE",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    sameAs: [contactInfo.linkedin],
    priceRange: "$$",
  };
}

export function webPageSchema({
  path,
  name,
  description,
  type = "WebPage",
}: {
  path: string;
  name: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-AE",
  };
}

export function breadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Electrical Engineering & Power Quality",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Engineering Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical System Studies & ETAP Simulation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Power Quality & Harmonics Solutions",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Delta T HVAC Control & Energy Efficiency",
          },
        },
      ],
    },
  };
}

export function globalSchemaGraph() {
  return buildSchemaGraph([
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema(),
    webPageSchema({
      path: "/",
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    }),
  ]);
}
