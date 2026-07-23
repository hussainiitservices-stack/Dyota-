import Solutions from "../components/Solutions";
import JsonLd from "../components/JsonLd";
import {
  SOLUTIONS_PAGE_DESCRIPTION,
  SOLUTIONS_PAGE_TITLE,
  breadcrumbSchema,
  buildSchemaGraph,
  createPageMetadata,
  solutionsSchema,
  webPageSchema,
} from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Solutions",
  absoluteTitle: SOLUTIONS_PAGE_TITLE,
  description: SOLUTIONS_PAGE_DESCRIPTION,
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={buildSchemaGraph([
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ]),
          webPageSchema({
            path: "/solutions",
            name: SOLUTIONS_PAGE_TITLE,
            description: SOLUTIONS_PAGE_DESCRIPTION,
            type: "CollectionPage",
          }),
          solutionsSchema(),
        ])}
      />
      <Solutions isStandalone />
    </>
  );
}
