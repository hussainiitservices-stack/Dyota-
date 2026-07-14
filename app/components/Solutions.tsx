"use client";

import Link from "next/link";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { solutionsContent } from "../lib/content";

export default function Solutions({ isStandalone = false }: { isStandalone?: boolean }) {
  const HeadingTag = isStandalone ? "h1" : "h2";

  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className={`section-light scroll-mt-24 px-6 lg:px-8 ${isStandalone ? "pt-28 pb-24" : "py-24"}`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-dyota-navy/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-navy uppercase">
            Solutions
          </span>
          <HeadingTag
            id="solutions-heading"
            className="mb-4 text-4xl font-bold text-dyota-navy md:text-5xl"
          >
            {solutionsContent.title}
          </HeadingTag>
          <h4 className="mx-auto max-w-2xl text-lg font-normal text-foreground/70">
            {solutionsContent.subtitle}
          </h4>
          <div className="section-divider mx-auto mt-8 w-24" />
        </ScrollReveal>

        <StaggerContainer className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {solutionsContent.categories.map((category, index) => (
            <StaggerItem key={category.id}>
              <AnimatedCard
                minHeight="min-h-[280px]"
                delay={index * 0.08}
                accentClass="bg-gradient-to-r from-dyota-navy to-dyota-orange"
                className="p-6"
              >
                <h3
                  id={category.id}
                  className="mb-4 text-xl font-bold text-dyota-navy"
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dyota-orange" />
                      <h4 className="font-normal">{item}</h4>
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
      </div>
    </section>
  );
}
