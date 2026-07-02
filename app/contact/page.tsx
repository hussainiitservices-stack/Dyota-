import Contact from "../components/Contact";
import JsonLd from "../components/JsonLd";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  webPageSchema,
} from "../lib/seo";

const CONTACT_DESCRIPTION =
  "Contact Dyota Engineered Solutions in Dubai, UAE. Call +971 55-366-5458 or email info@dyotaes.com for power quality and electrical engineering services.";

export const metadata = createPageMetadata({
  title: "Contact",
  description: CONTACT_DESCRIPTION,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={buildSchemaGraph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          webPageSchema({
            path: "/contact",
            name: "Contact Dyota Engineered Solutions",
            description: CONTACT_DESCRIPTION,
            type: "ContactPage",
          }),
        ])}
      />
      <Contact isStandalone />
    </>
  );
}
