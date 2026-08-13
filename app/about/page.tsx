import About from "../components/About";
import JsonLd from "../components/JsonLd";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  webPageSchema,
} from "../lib/seo";

const ABOUT_DESCRIPTION =
  "Welcome to DES — Electrical Engineering companies experience with Power Quality Solutions, Energy Audit, and network testing in Dubai.";

export const metadata = createPageMetadata({
  title: "About Us",
  absoluteTitle: "About Us | Dyota Engineered Solutions — Power Quality",
  description: ABOUT_DESCRIPTION,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildSchemaGraph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          webPageSchema({
            path: "/about",
            name: "About Dyota Engineered Solutions",
            description: ABOUT_DESCRIPTION,
            type: "AboutPage",
          }),
        ])}
      />
      <About isStandalone />
    </>
  );
}
