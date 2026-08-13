import { servicesContent } from "./content";

export type ServiceDetail = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  categoryId: string;
  categoryTitle: string;
  categoryDescription: string;
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const serviceDetails: ServiceDetail[] = servicesContent.categories.flatMap(
  (category) =>
    category.items.map((item) => ({
      slug: slugify(item.title),
      title: item.title,
      description: item.description,
      metaTitle: `${item.title} | Dyota ES`,
      metaDescription: item.description,
      categoryId: category.id,
      categoryTitle: category.title,
      categoryDescription: category.description,
    })),
);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceDetails.map((service) => service.slug);
}

export function getRelatedServices(
  service: ServiceDetail,
  limit = 4,
): ServiceDetail[] {
  const sameCategory = serviceDetails.filter(
    (item) =>
      item.categoryId === service.categoryId && item.slug !== service.slug,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = serviceDetails.filter(
    (item) =>
      item.categoryId !== service.categoryId && item.slug !== service.slug,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function getServiceHref(title: string): string {
  return `/services/${slugify(title)}`;
}
