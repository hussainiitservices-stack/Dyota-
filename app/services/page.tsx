import Services from "../components/Services";
import JsonLd from "../components/JsonLd";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  servicesSchema,
  webPageSchema,
} from "../lib/seo";

const SERVICES_DESCRIPTION =
  "ETAP simulation, electrical system studies, power quality solutions, harmonic filters, capacitor banks and Delta T HVAC control services across the UAE.";

export const metadata = createPageMetadata({
  title: "Services",
  description: SERVICES_DESCRIPTION,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildSchemaGraph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          webPageSchema({
            path: "/services",
            name: "Engineering Services",
            description: SERVICES_DESCRIPTION,
            type: "CollectionPage",
          }),
          servicesSchema(),
        ])}
      />
      <Services isStandalone />
    </>
  );
}
