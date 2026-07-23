import About from "../components/About";
import JsonLd from "../components/JsonLd";
import {
  ABOUT_PAGE_DESCRIPTION,
  ABOUT_PAGE_TITLE,
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  webPageSchema,
} from "../lib/seo";

export const metadata = createPageMetadata({
  title: "About Us",
  absoluteTitle: ABOUT_PAGE_TITLE,
  description: ABOUT_PAGE_DESCRIPTION,
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
            name: ABOUT_PAGE_TITLE,
            description: ABOUT_PAGE_DESCRIPTION,
            type: "AboutPage",
          }),
        ])}
      />
      <About isStandalone />
    </>
  );
}
