"use client";

import Link from "next/link";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { servicesContent } from "../lib/content";

export default function Services({ isStandalone = false }: { isStandalone?: boolean }) {
  const HeadingTag = isStandalone ? "h1" : "h2";
  // Homepage preview: shorter copy so /services is the indexable full page
  const categories = isStandalone
    ? servicesContent.categories
    : servicesContent.categories.map((category) => ({
        ...category,
        items: category.items.slice(0, 3),
      }));

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`section-gradient scroll-mt-24 px-6 lg:px-8 ${isStandalone ? "pt-28 pb-24" : "py-24"}`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-dyota-orange/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-orange uppercase">
            Services
          </span>
          <HeadingTag
            id="services-heading"
            className="mb-4 text-4xl font-bold text-dyota-navy md:text-5xl"
          >
            {servicesContent.title}
          </HeadingTag>
          <h4 className="mx-auto max-w-2xl text-lg font-normal text-foreground/70">
            {isStandalone
              ? servicesContent.subtitle
              : "Electrical Engineering Services UAE, ETAP Simulation, Energy Audit UAE, Thermal Imaging Inspection UAE, and DEWA Approval consultancy in UAE."}
          </h4>
          <div className="section-divider mx-auto mt-8 w-24" />
        </ScrollReveal>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.1}>
              <div
                id={isStandalone ? category.id : undefined}
                className="scroll-mt-28"
              >
                <h3 className="mb-6 text-2xl font-bold text-dyota-navy">
                  {category.title}
                </h3>
                {isStandalone &&
                  "description" in category &&
                  category.description && (
                    <p className="mb-6 max-w-4xl text-base leading-relaxed text-foreground/80">
                      {category.description}
                    </p>
                  )}
                <StaggerContainer
                  className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  stagger={0.06}
                >
                  {category.items.map((item, itemIndex) => (
                    <StaggerItem key={item}>
                      <AnimatedCard
                        minHeight="min-h-[100px]"
                        delay={itemIndex * 0.04}
                        accentClass="bg-gradient-to-r from-dyota-orange to-dyota-navy"
                        className="p-4"
                      >
                        <h4 className="text-sm font-semibold text-dyota-navy">
                          {item}
                        </h4>
                      </AnimatedCard>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {!isStandalone && (
          <ScrollReveal className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex rounded-full bg-dyota-navy px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              View All Services
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
