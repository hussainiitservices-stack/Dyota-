import Link from "next/link";
import type { ServiceDetail } from "../lib/services";
import { getRelatedServices } from "../lib/services";
import { contactInfo } from "../lib/content";

export default function ServiceDetailContent({
  service,
}: {
  service: ServiceDetail;
}) {
  const related = getRelatedServices(service);

  return (
    <article className="relative bg-gradient-to-b from-white/70 via-[#edf7ff]/50 to-[#80d8ff]/20 px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-foreground/60 sm:mb-8 sm:text-sm">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <li>
              <Link href="/" className="hover:text-dyota-orange">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/services" className="hover:text-dyota-orange">
                Services
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link
                href={`/services#${service.categoryId}`}
                className="hover:text-dyota-orange"
              >
                {service.categoryTitle}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-dyota-navy">{service.title}</li>
          </ol>
        </nav>

        <p className="mb-3 text-sm font-semibold tracking-wider text-dyota-orange uppercase">
          {service.categoryTitle}
        </p>
        <h1 className="mb-4 text-2xl font-bold break-words text-dyota-navy sm:mb-6 sm:text-3xl md:text-5xl">
          {service.title}
        </h1>
        <p className="mb-8 text-base leading-relaxed text-foreground/80 sm:mb-10 sm:text-lg">
          {service.description}
        </p>

        <section className="mb-10 sm:mb-12" aria-labelledby="service-category-heading">
          <h2
            id="service-category-heading"
            className="mb-3 text-xl font-bold text-dyota-navy sm:mb-4 sm:text-2xl"
          >
            {service.categoryTitle}
          </h2>
          <p className="text-sm leading-relaxed text-foreground/75 sm:text-base">
            {service.categoryDescription}
          </p>
        </section>

        {related.length > 0 && (
          <section className="mb-10 sm:mb-14" aria-labelledby="related-services-heading">
            <h2
              id="related-services-heading"
              className="mb-4 text-xl font-bold text-dyota-navy sm:mb-5 sm:text-2xl"
            >
              Related Services
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="block h-full rounded-xl border border-dyota-navy/10 bg-white/80 p-4 shadow-sm transition-colors hover:border-dyota-orange/40 sm:p-5"
                  >
                    <h3 className="mb-2 text-sm font-semibold text-dyota-navy sm:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-foreground/70 sm:text-sm">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="rounded-2xl bg-dyota-navy px-5 py-6 text-white sm:px-6 sm:py-8 md:px-10">
          <h2 className="mb-3 text-xl font-bold sm:text-2xl">Request This Service</h2>
          <p className="mb-5 max-w-2xl text-sm text-white/85 sm:mb-6 sm:text-base">
            Speak with Dyota Engineered Solutions in Dubai about {service.title}.
            Call {contactInfo.phone} or send an enquiry online.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-dyota-orange px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {contactInfo.phone}
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
