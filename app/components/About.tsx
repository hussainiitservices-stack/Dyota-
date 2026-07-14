"use client";

import ScrollReveal, { StaggerContainer, StaggerItem } from "./ScrollReveal";
import AnimatedCard from "./AnimatedCard";
import { aboutContent, coreValues } from "../lib/content";

const valueIcons: Record<string, string> = {
  shield: "🛡️",
  gear: "⚙️",
  leaf: "🌱",
  target: "🎯",
  chart: "📈",
};

const accentMap = {
  vision: "from-dyota-navy to-dyota-navy-light",
  values: "from-dyota-orange to-dyota-orange-bright",
  mission: "from-dyota-navy-light to-dyota-orange",
};

function ValueCard({
  title,
  content,
  index,
  variant,
}: {
  title: string;
  content: string | string[];
  index: number;
  variant: "vision" | "values" | "mission";
}) {
  return (
    <AnimatedCard
      accentClass={`bg-gradient-to-r ${accentMap[variant]}`}
      minHeight="min-h-[400px]"
      delay={index * 0.1}
      className="p-8"
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accentMap[variant]} text-lg font-bold text-white`}
        >
          {title[0]}
        </div>
        <h4 className="text-xl font-bold text-dyota-navy">{title}</h4>
      </div>

      <div className="flex flex-1 flex-col">
        {Array.isArray(content) ? (
          <ul className="flex-1 space-y-2">
            {content.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-foreground/80"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dyota-orange" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="flex-1 leading-relaxed text-foreground/80">{content}</p>
        )}
      </div>
    </AnimatedCard>
  );
}

export default function About({ isStandalone = false }: { isStandalone?: boolean }) {
  const HeadingTag = isStandalone ? "h1" : "h2";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`section-gradient scroll-mt-24 px-6 lg:px-8 ${isStandalone ? "pt-28 pb-24" : "py-24"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-dyota-navy/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-navy uppercase">
            About
          </span>
          <HeadingTag
            id="about-heading"
            className="mb-4 text-4xl font-bold text-dyota-navy md:text-5xl"
          >
            {aboutContent.title}
          </HeadingTag>
          <div className="section-divider mx-auto mb-8 w-24" />
        </div>

        <ScrollReveal delay={0.1}>
          <div className="relative mb-10 overflow-hidden rounded-3xl border border-dyota-navy/10 bg-white p-8 shadow-sm md:p-12">
            <p className="mb-4 text-lg font-semibold leading-relaxed text-dyota-navy">
              {aboutContent.intro}
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              {aboutContent.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h4 className="mb-6 text-center text-xl font-bold text-dyota-navy">
            Our Expertise
          </h4>
          <ul className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.specialties.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-dyota-navy/10 bg-white px-5 py-4 shadow-sm"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-dyota-orange" />
                <span className="text-sm font-medium text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <StaggerContainer className="grid items-stretch gap-8 md:grid-cols-3" stagger={0.15}>
          <StaggerItem>
            <ValueCard title="Vision" content={aboutContent.vision} index={0} variant="vision" />
          </StaggerItem>
          <StaggerItem>
            <ValueCard title="Values" content={aboutContent.values} index={1} variant="values" />
          </StaggerItem>
          <StaggerItem>
            <ValueCard title="Mission" content={aboutContent.mission} index={2} variant="mission" />
          </StaggerItem>
        </StaggerContainer>

        <ScrollReveal className="mt-20" delay={0.2}>
          <h2 className="mb-8 text-center text-2xl font-bold text-dyota-navy">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-dyota-navy/10 bg-white p-6 text-center shadow-sm transition-transform hover:-translate-y-1 hover:border-dyota-orange/30"
              >
                <span className="mb-3 text-3xl" aria-hidden>
                  {valueIcons[value.icon]}
                </span>
                <h5 className="text-sm font-semibold text-dyota-navy">
                  {value.title}
                </h5>
                <h6 className="mt-2 text-xs font-medium text-foreground/60">
                  {value.subtitle}
                </h6>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
