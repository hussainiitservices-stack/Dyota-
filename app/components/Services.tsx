"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import {
  servicePillars,
  electricalStudies,
  engineeringApproach,
  clientBenefits,
  powerQualityProducts,
  hvacSolutions,
  siteImages,
} from "../lib/content";

const accentStyles = {
  navy: "bg-dyota-navy text-white border-dyota-navy",
  orange: "bg-dyota-orange text-white border-dyota-orange",
  green: "bg-dyota-green text-white border-dyota-green",
  purple: "bg-dyota-purple text-white border-dyota-purple",
};

const accentText = {
  navy: "text-dyota-navy",
  orange: "text-dyota-orange",
  green: "text-dyota-green",
  purple: "text-dyota-purple",
};

const benefitIcons: Record<string, string> = {
  shield: "🛡️",
  chart: "📈",
  cost: "💰",
  safety: "⚠️",
  compliance: "📋",
};

function SectionHeader({
  badge,
  title,
  subtitle,
  badgeColor = "orange",
  headingLevel = "h2",
  headingId,
}: {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  badgeColor?: "orange" | "navy" | "green";
  headingLevel?: "h1" | "h2";
  headingId?: string;
}) {
  const HeadingTag = headingLevel;
  const badgeClasses = {
    orange: "bg-dyota-orange/10 text-dyota-orange",
    navy: "bg-dyota-navy/10 text-dyota-navy",
    green: "bg-dyota-green/10 text-dyota-green",
  };

  return (
    <ScrollReveal className="mb-12 text-center">
      <span
        className={`mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider uppercase ${badgeClasses[badgeColor]}`}
      >
        {badge}
      </span>
      <HeadingTag
        id={headingId}
        className="mb-4 text-3xl font-bold text-dyota-navy md:text-4xl"
      >
        {title}
      </HeadingTag>
      {subtitle && (
        <h4 className="mx-auto max-w-2xl text-lg font-normal text-foreground/70">
          {subtitle}
        </h4>
      )}
      <div className="section-divider mx-auto mt-6 w-24" />
    </ScrollReveal>
  );
}

export default function Services({ isStandalone = false }: { isStandalone?: boolean }) {
  return (
    <>
      {/* Three Pillars */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className={`relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-white to-dyota-navy/5 px-6 lg:px-8 ${
          isStandalone ? "pt-28 pb-24" : "py-24"
        }`}
      >
        <div className="relative mx-auto max-w-7xl">
          <SectionHeader
            badge="Our Solutions"
            title="Three Pillars of Excellence"
            subtitle="Comprehensive engineering services across electrical systems, HVAC, and power quality."
            headingLevel={isStandalone ? "h1" : "h2"}
            headingId="services-heading"
          />

          <StaggerContainer className="grid items-stretch gap-8 lg:grid-cols-3" stagger={0.15}>
            {servicePillars.map((pillar, index) => (
              <StaggerItem key={pillar.id}>
                <AnimatedCard
                  as="a"
                  href={`#${pillar.id}`}
                  minHeight="min-h-[480px]"
                  delay={index * 0.1}
                  accentClass="bg-gradient-to-r from-dyota-navy via-dyota-orange to-dyota-navy"
                  className="overflow-hidden p-0 shadow-lg ring-1 ring-dyota-navy/5"
                >
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      title={pillar.title}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dyota-navy/80 to-transparent" />
                    <motion.div
                      className={`absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full text-xl ${accentStyles[pillar.accent]}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {pillar.icon}
                    </motion.div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3
                      className={`mb-2 text-xl font-bold ${accentText[pillar.accent]} group-hover:underline`}
                    >
                      {pillar.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                      {pillar.summary}
                    </p>
                    <ul className="mt-auto space-y-1.5">
                      {pillar.services.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-2 text-sm text-foreground/75"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-dyota-orange" />
                          <h6 className="font-normal">{s}</h6>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Electrical Studies */}
      <section
        id="electrical-studies"
        className="scroll-mt-24 bg-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Electrical System Studies"
            title={
              <>
                <span className={accentText.navy}>{electricalStudies.headline.line1}</span>{" "}
                <span className={accentText.orange}>
                  {electricalStudies.headline.line2}
                </span>
              </>
            }
            subtitle={electricalStudies.subheadline}
            badgeColor="navy"
          />

          {/* Section hero banner */}
          <ScrollReveal className="mb-10">
            <div className="relative h-56 overflow-hidden rounded-2xl shadow-xl sm:h-64 md:h-72 lg:h-80">
              <Image
                src={siteImages.electricalHero}
                alt="Electrical engineering and power system studies in UAE"
                title="Electrical engineering and power system studies in UAE"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dyota-navy/85 via-dyota-navy/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
                <p className="mb-2 text-sm font-semibold tracking-widest text-dyota-orange uppercase">
                  ETAP Simulation · Thermography · Harmonics
                </p>
                <p className="max-w-lg text-lg font-semibold text-white md:text-xl">
                  Expert electrical engineering studies for safe, compliant, and
                  future-ready power networks across the UAE.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid items-stretch gap-6 sm:grid-cols-2" stagger={0.1}>
            {electricalStudies.services.map((service, index) => (
              <StaggerItem key={service.title}>
                <AnimatedCard
                  as="article"
                  minHeight="min-h-[360px]"
                  delay={index * 0.08}
                  accentClass={`bg-gradient-to-r ${service.accent === "navy" ? "from-dyota-navy to-dyota-navy-light" : "from-dyota-orange to-dyota-orange-bright"}`}
                  className="p-6 shadow-sm"
                >
                  <h4
                    className={`mb-4 inline-flex rounded-lg px-3 py-1 text-xs font-bold uppercase ${accentStyles[service.accent]}`}
                  >
                    {service.title}
                  </h4>
                  <p className="mb-4 text-sm text-foreground/70">{service.description}</p>
                  <ul className="mt-auto space-y-2">
                    {service.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dyota-orange" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Engineering Approach */}
          <ScrollReveal className="mt-20">
            <h4 className="mb-10 text-center text-2xl font-bold text-dyota-navy">
              Our Engineering Approach
            </h4>
            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              {engineeringApproach.map((step, i) => (
                <motion.div
                  key={step.title}
                  className="relative flex flex-1 flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                >
                  <motion.div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-dyota-navy text-xl font-bold text-white"
                    whileHover={{ scale: 1.1, backgroundColor: "#F26522" }}
                  >
                    {step.step}
                  </motion.div>
                  <h5 className="mb-2 font-semibold text-dyota-navy">{step.title}</h5>
                  <h6 className="text-sm text-foreground/65">{step.description}</h6>
                  {i < engineeringApproach.length - 1 && (
                    <motion.div
                      className="absolute top-8 hidden h-0.5 bg-dyota-orange/40 lg:block"
                      style={{ left: "60%", width: "80%" }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Benefits banner */}
          <motion.div
            className="mt-16 rounded-2xl bg-dyota-navy p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-8 text-center text-xl font-bold text-white">
              Benefits To You
            </h4>
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
                  <p className="text-xs font-medium text-white/90 sm:text-sm">
                    {benefit.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Power Quality Products */}
      <section
        id="power-quality"
        className="scroll-mt-24 bg-gradient-to-b from-dyota-navy/5 to-white px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={siteImages.powerQuality}
                  alt="Power quality and harmonic mitigation solutions in UAE"
                  title="Power quality and harmonic mitigation solutions in UAE"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="mb-4 inline-block rounded-full bg-dyota-navy/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-navy uppercase">
                Power Quality
              </span>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                <span className="text-dyota-navy">
                  {powerQualityProducts.headline.line1}
                </span>{" "}
                <span className="text-dyota-orange">
                  {powerQualityProducts.headline.line2}
                </span>
              </h2>
              <p className="mb-8 text-foreground/70">
                {powerQualityProducts.subheadline}
              </p>

              <div className="grid items-stretch gap-4">
                {powerQualityProducts.products.map((product, i) => (
                  <AnimatedCard
                    key={product.title}
                    scrollAnimate
                    minHeight="min-h-[120px]"
                    delay={i * 0.1}
                    accentClass={`bg-gradient-to-r ${product.accent === "navy" ? "from-dyota-navy to-dyota-navy-light" : product.accent === "green" ? "from-dyota-green to-dyota-green" : product.accent === "orange" ? "from-dyota-orange to-dyota-orange-bright" : "from-dyota-purple to-dyota-purple"}`}
                    className="p-4 shadow-sm"
                  >
                    <h5 className={`font-bold ${accentText[product.accent]}`}>
                      {product.title}
                    </h5>
                    <h6 className="mt-1 text-sm text-foreground/70">
                      {product.description}
                    </h6>
                  </AnimatedCard>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {powerQualityProducts.values.map((v) => (
                  <span
                    key={v}
                    className="rounded-full bg-dyota-navy px-3 py-1 text-xs font-semibold text-white"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* HVAC Solutions */}
      <section id="hvac" className="scroll-mt-24 bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="HVAC Systems"
            title={
              <>
                <span className={accentText.navy}>{hvacSolutions.headline.line1}</span>{" "}
                <span className={accentText.orange}>{hvacSolutions.headline.line2}</span>
              </>
            }
            subtitle={hvacSolutions.subheadline}
            badgeColor="green"
          />

          <div className="mb-12 grid grid-cols-2 items-stretch gap-4 md:grid-cols-4">
            {hvacSolutions.features.map((f, i) => (
              <motion.div
                key={f.title}
                className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-dyota-green/20 bg-dyota-green/5 p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="mb-2 text-3xl">{f.icon}</span>
                <p className="text-sm font-semibold text-dyota-navy">{f.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <ScrollReveal>
              <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={siteImages.hvac}
                  alt="Delta T HVAC control and energy efficiency systems in UAE"
                  title="Delta T HVAC control and energy efficiency systems in UAE"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {hvacSolutions.products.map((p) => (
                  <div
                    key={p}
                    className="rounded-lg bg-dyota-navy/5 px-4 py-3 text-center text-sm font-medium text-dyota-navy"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="rounded-2xl border border-dyota-orange/20 bg-gradient-to-br from-dyota-orange/5 to-dyota-green/5 p-8">
                <h4 className="mb-3 text-xl font-bold text-dyota-navy">
                  {hvacSolutions.deltaT.title}
                </h4>
                <p className="mb-6 text-sm leading-relaxed text-foreground/75">
                  {hvacSolutions.deltaT.description}
                </p>

                {/* Animated Delta T diagram */}
                <div className="relative mb-6 flex items-center justify-center py-8">
                  <motion.div
                    className="absolute flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="rounded-lg bg-dyota-navy px-4 py-2 text-sm font-semibold text-white"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Supply →
                    </motion.div>
                    <motion.div
                      className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-dyota-orange bg-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-center text-xs font-bold text-dyota-orange">
                        ΔT
                        <br />
                        Optimized
                      </span>
                    </motion.div>
                    <motion.div
                      className="rounded-lg bg-dyota-green px-4 py-2 text-sm font-semibold text-white"
                      animate={{ x: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      ← Return
                    </motion.div>
                  </motion.div>
                </div>

                <ul className="mb-8 space-y-2">
                  {hvacSolutions.deltaT.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="text-dyota-green">✓</span> {b}
                    </li>
                  ))}
                </ul>

                <div className="grid items-stretch gap-4 sm:grid-cols-2">
                  {hvacSolutions.whyItMatters.map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex min-h-[120px] flex-col rounded-xl bg-white p-4 shadow-sm"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <h5 className="font-semibold text-dyota-navy">{item.title}</h5>
                      <h6 className="mt-1 text-xs text-foreground/65">{item.description}</h6>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <motion.p
            className="mt-12 text-center text-xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-dyota-navy">Intelligent HVAC. Greater Efficiency. Lower Costs. </span>
            <span className="text-dyota-green">A Better Future.</span>
          </motion.p>
        </div>
      </section>
    </>
  );
}
