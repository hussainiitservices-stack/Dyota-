"use client";

import Link from "next/link";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { solutionsContent } from "../lib/content";

export default function Solutions({ isStandalone = false }: { isStandalone?: boolean }) {
  const HeadingTag = isStandalone ? "h1" : "h2";
  const CategoryTag = isStandalone ? "h2" : "h3";
  const categories = isStandalone
    ? solutionsContent.categories
    : solutionsContent.categories.map((category) => ({
        ...category,
        items: category.items.slice(0, 3),
      }));

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className={`relative scroll-mt-24 bg-gradient-to-b from-[#80d8ff]/20 via-[#edf7ff]/50 to-white/60 px-4 sm:px-6 lg:px-8 ${
        isStandalone ? "pt-12 pb-16 sm:pt-16 sm:pb-24" : "py-16 sm:py-24"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-8 text-center sm:mb-12">
          <span className="mb-4 inline-block rounded-full bg-dyota-navy/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-navy uppercase">
            Solutions
          </span>
          <HeadingTag
            id="solutions-heading"
            className="mb-4 text-2xl font-bold text-dyota-navy sm:text-3xl md:text-5xl"
          >
            {solutionsContent.title}
          </HeadingTag>
          <p className="mx-auto max-w-3xl text-base font-normal text-foreground/70 sm:text-lg">
            {solutionsContent.subtitle}
          </p>
          <div className="section-divider mx-auto mt-8 w-24" />
        </ScrollReveal>

        {isStandalone && (
          <ScrollReveal className="mb-14">
            <p className="mx-auto max-w-4xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">
              {solutionsContent.intro}
            </p>
          </ScrollReveal>
        )}

        <StaggerContainer
          className="grid items-stretch gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {categories.map((category, index) => (
            <StaggerItem key={category.id}>
              <AnimatedCard
                minHeight="min-h-[260px]"
                delay={index * 0.08}
                accentClass="bg-gradient-to-r from-dyota-navy to-dyota-orange"
                className="p-5 sm:p-6"
              >
                <CategoryTag
                  id={isStandalone ? category.id : undefined}
                  className="mb-3 text-xl font-bold text-dyota-navy"
                >
                  {category.title}
                </CategoryTag>
                {"description" in category && category.description && (
                  <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                    {category.description}
                  </p>
                )}
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dyota-orange" />
                      <span className="font-medium text-dyota-navy/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {!isStandalone && (
          <ScrollReveal className="mt-12 text-center">
            <Link
              href="/solutions"
              className="inline-flex rounded-full bg-dyota-orange px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              View All Solutions
            </Link>
          </ScrollReveal>
        )}

        {isStandalone && (
          <ScrollReveal className="mt-14 text-center">
            <p className="mb-5 text-base text-foreground/75">
              Need Capacitor Banks, Harmonic Filters, or a complete APFC solution in the UAE?
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-dyota-navy px-8 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Request a Quote
            </Link>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
