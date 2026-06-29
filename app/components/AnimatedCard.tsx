"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  accentClass?: string;
  as?: "div" | "article" | "a";
  href?: string;
  minHeight?: string;
  delay?: number;
  scrollAnimate?: boolean;
};

export default function AnimatedCard({
  children,
  className = "",
  accentClass = "bg-gradient-to-r from-dyota-navy via-dyota-orange to-dyota-navy",
  as = "div",
  href,
  minHeight = "min-h-[380px]",
  delay = 0,
  scrollAnimate = false,
}: AnimatedCardProps) {
  const Component = as === "a" ? motion.a : as === "article" ? motion.article : motion.div;

  const scrollProps = scrollAnimate
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" as const },
        transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
      }
    : {};

  return (
    <Component
      {...(as === "a" && href ? { href } : {})}
      {...scrollProps}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-dyota-navy/10 bg-white shadow-lg shadow-dyota-navy/5 ${minHeight} ${className}`}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,45,136,0.12)" }}
    >
      <motion.div
        className={`absolute top-0 left-0 h-1 w-full ${accentClass}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
        style={{ originX: 0 }}
      />
      {children}
    </Component>
  );
}
