import About from "../components/About";
import JsonLd from "../components/JsonLd";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  webPageSchema,
} from "../lib/seo";

const ABOUT_DESCRIPTION =
  "20+ years of electrical engineering consultancy in the UAE. Power quality audits, harmonics mitigation, ETAP simulation and compliance-driven solutions in Dubai.";

export const metadata = createPageMetadata({
  title: "About Us",
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
