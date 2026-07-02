import About from "../components/About";
import JsonLd from "../components/JsonLd";
import {
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  webPageSchema,
} from "../lib/seo";

const ABOUT_DESCRIPTION =
  "About Dyota Engineered Solution LLC — 20+ years of power quality, harmonics, ETAP simulation and electrical engineering consultancy across Dubai and the UAE.";

export const metadata = createPageMetadata({
  title: "About Us",
  absoluteTitle:
    "About Us | Dyota Engineered Solutions LLC — Electrical Engineering UAE",
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
