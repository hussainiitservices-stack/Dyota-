"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { servicesContent, clientBenefits } from "../lib/content";
import { getServiceHref } from "../lib/services";

const benefitIcons: Record<string, string> = {
  shield: "🛡️",
  chart: "📈",
  cost: "💰",
  safety: "⚠️",
  compliance: "📋",
};

export default function Services({ isStandalone = false }: { isStandalone?: boolean }) {
  const HeadingTag = isStandalone ? "h1" : "h2";
  const CategoryTag = isStandalone ? "h2" : "h3";
  const ItemTag = isStandalone ? "h3" : "h4";
  const categories = isStandalone
    ? servicesContent.categories
    : servicesContent.categories.map((category) => ({
        ...category,
        items: category.items.slice(0, 4),
      }));

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white/50 to-[#edf7ff]/40 px-6 lg:px-8 ${
        isStandalone ? "pt-16 pb-24" : "py-24"
      }`}
    >
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-dyota-orange/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-orange uppercase">
            Services
          </span>
          <HeadingTag
            id="services-heading"
            className="mb-4 text-3xl font-bold text-dyota-navy md:text-5xl"
          >
            {servicesContent.title}
          </HeadingTag>
          <p className="mx-auto max-w-3xl text-lg font-normal text-foreground/70">
            {isStandalone
              ? servicesContent.subtitle
              : "Thermal Testing, Engineering Studies, Electrical Audit, Energy Audit and Power Quality analysis for industrial networks."}
          </p>
          <div className="section-divider mx-auto mt-8 w-24" />
        </ScrollReveal>

        <div className="space-y-16">
          {categories.map((category, index) => (
            <ScrollReveal key={category.id} delay={index * 0.1}>
              <div
                id={isStandalone ? category.id : undefined}
                className="scroll-mt-28"
              >
                <CategoryTag className="mb-3 text-2xl font-bold text-dyota-navy md:text-3xl">
                  {category.title}
                </CategoryTag>
                {"description" in category && category.description && (
                  <p className="mb-6 max-w-4xl text-base leading-relaxed text-foreground/75">
                    {category.description}
                  </p>
                )}
                <StaggerContainer
                  className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  stagger={0.05}
                >
                  {category.items.map((item, itemIndex) => (
                    <StaggerItem key={item.title}>
                      <Link
                        href={getServiceHref(item.title)}
                        className="block h-full"
                        aria-label={`${item.title} — view service details`}
                      >
                        <AnimatedCard
                          minHeight="min-h-[140px]"
                          delay={itemIndex * 0.03}
                          accentClass="bg-gradient-to-r from-dyota-orange to-dyota-navy"
                          className="h-full p-5 transition-shadow hover:shadow-md"
                        >
                          <ItemTag className="mb-2 text-sm font-semibold text-dyota-navy md:text-base">
                            {item.title}
                          </ItemTag>
                          <p className="text-xs leading-relaxed text-foreground/70 md:text-sm">
                            {item.description}
                          </p>
                        </AnimatedCard>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {isStandalone && (
          <motion.div
            className="mt-16 rounded-2xl border border-white/60 bg-gradient-to-b from-[#80d8ff]/30 via-[#edf7ff]/70 to-white/80 p-8 shadow-lg shadow-[#2c5f9e]/10 backdrop-blur-md md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-xl font-bold text-dyota-navy">
              Benefits To You
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
              {clientBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className="mb-2 text-2xl">{benefitIcons[benefit.icon]}</span>
                  <p className="text-xs font-medium text-dyota-navy/85 sm:text-sm">
                    {benefit.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

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
