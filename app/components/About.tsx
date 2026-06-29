"use client";

import { motion } from "framer-motion";
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
        <motion.div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accentMap[variant]} text-lg font-bold text-white`}
          whileHover={{ rotate: [0, -10, 10, 0] }}
        >
          {title[0]}
        </motion.div>
        <h3 className="text-xl font-bold text-dyota-navy">{title}</h3>
      </div>

      <div className="flex flex-1 flex-col">
        {Array.isArray(content) ? (
          <ul className="flex-1 space-y-2">
            {content.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-2 text-foreground/80"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-dyota-orange" />
                {item}
              </motion.li>
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
  return (
    <section
      id="about"
      className={`relative scroll-mt-24 bg-white px-6 lg:px-8 ${isStandalone ? "pt-28 pb-24" : "py-24"}`}
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <motion.span className="mb-4 inline-block rounded-full bg-dyota-navy/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-navy uppercase">
            About
          </motion.span>
          <h2 className="mb-4 text-4xl font-bold text-dyota-navy md:text-5xl">
            {aboutContent.title}
          </h2>
          <div className="section-divider mx-auto mb-8 w-24" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-dyota-navy/5 to-dyota-orange/5 p-8 md:p-12">
            <motion.div
              className="absolute top-0 right-0 h-64 w-64 rounded-full bg-dyota-orange/10 blur-3xl"
              animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <p className="relative text-lg leading-relaxed text-foreground/85 whitespace-pre-line">
              {aboutContent.description}
            </p>
          </div>
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
          <h3 className="mb-8 text-center text-2xl font-bold text-dyota-navy">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-2 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                className="flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-dyota-navy/10 bg-white p-6 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(242,101,34,0.3)" }}
              >
                <motion.span
                  className="mb-3 text-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                >
                  {valueIcons[value.icon]}
                </motion.span>
                <p className="text-sm font-semibold text-dyota-navy">{value.title}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
