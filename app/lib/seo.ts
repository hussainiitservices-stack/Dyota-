import type { Metadata } from "next";
import { contactInfo, seoKeywords } from "./content";

export const SITE_URL = "https://www.dyotaes.com";
export const SITE_NAME = "Dyota Engineered Solutions";
export const SITE_BRAND = "Dyota ES";
export const DEFAULT_OG_IMAGE = "/images/hero-bg.jpg";
export const GOOGLE_SITE_VERIFICATION = "googlee3d9b88b6cf785ea";

/** 60–65 characters for search result titles */
export const DEFAULT_TITLE =
  "Electrical Engineering Services UAE | Power Quality Solutions | Dyota ES";

/** 160–165 characters for meta descriptions */
export const DEFAULT_DESCRIPTION =
  "Electrical Engineering Services UAE & Power Quality Solutions UAE. Active Harmonic Filter Manufacturer UAE, Capacitor Bank Manufacturer UAE, ETAP Simulation, Energy Audit UAE & DEWA Approval consultancy in Dubai.";

export const CONTACT_PAGE_TITLE =
  "Contact Electrical Engineering Companies in UAE | Dyota ES Dubai";

export const CONTACT_PAGE_DESCRIPTION =
  "Contact Dyota Engineered Solutions in Dubai for Electrical Engineering Services UAE, Power Quality Solutions UAE, Active Harmonic Filter UAE, Capacitor bank supplier in UAE, Energy Audit UAE and DEWA Approval consultancy. Call +971 55-366-5458.";

export const SOLUTIONS_PAGE_TITLE =
  "Power Quality Solutions UAE | Active Harmonic Filter & Capacitor Banks";

export const SOLUTIONS_PAGE_DESCRIPTION =
  "Power Quality Solutions UAE from an Active Harmonic Filter Manufacturer UAE and Capacitor Bank Manufacturer UAE. Best capacitor banks UAE, Harmonic Filter Supplier UAE, Power Factor Correction UAE and Chiller plant manager supplier UAE.";

export const SERVICES_PAGE_TITLE =
  "Electrical Engineering Services UAE | ETAP, Audit & Consultancy";

export const SERVICES_PAGE_DESCRIPTION =
  "Electrical Engineering Services UAE: ETAP Simulation Services UAE, Relay Coordination Study UAE, Electrical Audit UAE, Energy Audit UAE, Busduct Testing UAE, Thermal Imaging Inspection UAE, Arc Flash Study UAE and DEWA Approval consultancy in UAE.";

export const ABOUT_PAGE_TITLE =
  "About Dyota ES | Electrical Engineering Companies in UAE";

export const ABOUT_PAGE_DESCRIPTION =
  "About Dyota Engineered Solutions — Electrical Engineering companies in UAE offering Power Quality Solutions UAE, Active Harmonic Filter Manufacturer UAE, Capacitor Bank Manufacturer UAE, Electrical Consultancy UAE and energy audit companies in UAE expertise.";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: string;
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
  absoluteTitle,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const resolvedTitle = absoluteTitle ?? pageTitle(title, path);

  return {
    title: { absolute: resolvedTitle },
    description,
    keywords: keywords ? [...keywords] : [...seoKeywords],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
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
      title: resolvedTitle,
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
    alternateName: ["Dyota ES", "Dyota Engineered Solution LLC"],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.png`,
    email: contactInfo.email,
    telephone: contactInfo.phone,
    description: DEFAULT_DESCRIPTION,
    knowsAbout: [...seoKeywords],
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
    description: DEFAULT_DESCRIPTION,
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
    knowsAbout: [...seoKeywords],
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
    serviceType: "Electrical Engineering Services UAE",
    name: "Electrical Engineering Services UAE",
    description: SERVICES_PAGE_DESCRIPTION,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical Engineering Services UAE",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Engineering Services UAE & Electrical Consultancy UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ETAP Simulation Services UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Relay Coordination Study UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arc Flash Study UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Electrical Audit UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Energy Audit UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Busduct Testing UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Thermal Imaging Inspection UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Earth Leakage Audit UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "DEWA Approval consultancy in UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Power Factor Correction UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reactive Power Compensation UAE",
          },
        },
      ],
    },
  };
}

export function solutionsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Power Quality Solutions UAE",
    name: "Power Quality Solutions UAE",
    description: SOLUTIONS_PAGE_DESCRIPTION,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Power Quality Solutions UAE",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Active Harmonic Filter UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Capacitor Banks UAE — Capacitor Bank Manufacturer UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Power Factor Correction UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Chiller plant manager supplier UAE systems",
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
