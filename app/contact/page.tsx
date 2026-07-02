import Contact from "../components/Contact";
import JsonLd from "../components/JsonLd";
import {
  CONTACT_PAGE_DESCRIPTION,
  CONTACT_PAGE_TITLE,
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  webPageSchema,
} from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Contact Us",
  absoluteTitle: CONTACT_PAGE_TITLE,
  description: CONTACT_PAGE_DESCRIPTION,
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
            name: CONTACT_PAGE_TITLE,
            description: CONTACT_PAGE_DESCRIPTION,
            type: "ContactPage",
          }),
        ])}
      />
      <Contact isStandalone />
    </>
  );
}
