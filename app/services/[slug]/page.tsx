import { notFound } from "next/navigation";
import JsonLd from "../../components/JsonLd";
import ServiceDetailContent from "../../components/ServiceDetailContent";
import {
  getAllServiceSlugs,
  getServiceBySlug,
  serviceDetails,
} from "../../lib/services";
import {
  SITE_URL,
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  webPageSchema,
} from "../../lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    absoluteTitle: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [
      service.title,
      service.categoryTitle,
      ...serviceDetails.map((item) => item.title),
    ],
  });
}

function servicePageSchema(
  service: NonNullable<ReturnType<typeof getServiceBySlug>>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.categoryTitle,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={buildSchemaGraph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          webPageSchema({
            path: `/services/${service.slug}`,
            name: service.metaTitle,
            description: service.metaDescription,
          }),
          servicePageSchema(service),
        ])}
      />
      <ServiceDetailContent service={service} />
    </>
  );
}
