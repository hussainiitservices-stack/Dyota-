import Services from "../components/Services";
import JsonLd from "../components/JsonLd";
import LegacyHashRedirect from "../components/LegacyHashRedirect";
import {
  SERVICES_PAGE_DESCRIPTION,
  SERVICES_PAGE_TITLE,
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  servicesSchema,
  webPageSchema,
} from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  absoluteTitle: SERVICES_PAGE_TITLE,
  description: SERVICES_PAGE_DESCRIPTION,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <LegacyHashRedirect />
      <JsonLd
        data={buildSchemaGraph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          webPageSchema({
            path: "/services",
            name: SERVICES_PAGE_TITLE,
            description: SERVICES_PAGE_DESCRIPTION,
            type: "CollectionPage",
          }),
          servicesSchema(),
        ])}
      />
      <Services isStandalone />
    </>
  );
}
