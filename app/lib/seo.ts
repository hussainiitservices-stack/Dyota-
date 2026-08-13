import type { Metadata } from "next";
import { contactInfo, seoKeywords } from "./content";
import { serviceDetails } from "./services";

export const SITE_URL = "https://www.dyotaes.com";
export const SITE_NAME = "Dyota Engineered Solutions";
export const SITE_BRAND = "Dyota ES";
export const DEFAULT_OG_IMAGE = "/images/hero-bg.jpg";
export const GOOGLE_SITE_VERIFICATION = "googlee3d9b88b6cf785ea";

/** Keep UAE once in titles — avoid repeating it in every on-page phrase */
export const DEFAULT_TITLE =
  "Electrical Engineering & Power Quality Solutions | Dyota ES";

export const DEFAULT_DESCRIPTION =
  "Electrical Engineering Services, Power Quality Solutions, Active Harmonic Filters, capacitor banks, Energy Audit and Thermal Imaging for Dubai facilities. 20+ years of expertise.";

export const CONTACT_PAGE_TITLE =
  "Contact Dyota Engineered Solutions | Dubai Experts";

export const CONTACT_PAGE_DESCRIPTION =
  "Contact DES in Dubai for Electrical Engineering Services, Power Quality Solutions, Active Harmonic Filter supply, Energy Audit and Thermal Imaging Inspection. Call +971 55-366-5458.";

export const SERVICES_PAGE_TITLE =
  "Electrical Engineering Services UAE | Testing & Studies";

export const SERVICES_PAGE_DESCRIPTION =
  "Thermal Testing, Engineering Studies, Electrical Audit, Energy Audit, Relay Coordination, Arc Flash Study, Busduct Testing and Thermal Imaging Inspection from Dyota ES.";

export const SOLUTIONS_PAGE_TITLE =
  "Power Quality Solutions UAE | Harmonic Filters & Capacitor Banks";

export const SOLUTIONS_PAGE_DESCRIPTION =
  "Active Harmonic Filter Manufacturer and Capacitor Bank Manufacturer products — Harmonic Filter Supplier range, Power Factor Correction, APFC panels and Chiller plant manager systems from DES.";

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
    name: "Electrical Engineering Services UAE",
    serviceType: "Thermal Testing & Engineering Studies",
    description: SERVICES_PAGE_DESCRIPTION,
    url: `${SITE_URL}/services`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Our Services",
      itemListElement: serviceDetails.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${SITE_URL}/services/${service.slug}`,
          description: service.description,
        },
      })),
    },
  };
}

export function solutionsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Our Solutions — Power Quality Products UAE",
    serviceType: "Power Quality Solutions UAE",
    description: SOLUTIONS_PAGE_DESCRIPTION,
    url: `${SITE_URL}/solutions`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Our Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Capacitors",
            url: `${SITE_URL}/solutions#capacitors`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reactors",
            url: `${SITE_URL}/solutions#reactors`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Auto-PFC Controller",
            url: `${SITE_URL}/solutions#controllers`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Harmonic Filters",
            url: `${SITE_URL}/solutions#filters`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Capacitor Banks and Compact APFC Panels",
            url: `${SITE_URL}/solutions#panels`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hybrid Systems",
            url: `${SITE_URL}/solutions#panels`,
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
