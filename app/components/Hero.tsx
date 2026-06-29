"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ElectricGrid from "./ElectricGrid";
import { heroContent, siteImages } from "../lib/content";

export default function Hero() {
  const [tag1, tag2, tag3] = heroContent.tagline;

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.heroBackground}
          alt=""
          fill
          className="scale-105 object-cover object-center"
          sizes="100vw"
          priority
          aria-hidden
        />
      </div>

      {/* Soft vignette — readability without a box */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-dyota-navy-dark/50 via-dyota-navy/25 to-dyota-navy-dark/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,26,77,0.45)_100%)]"
        aria-hidden
      />

      <div className="absolute inset-0 z-[2]">
        <ElectricGrid />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p
          className="mb-6 flex flex-wrap items-center justify-center gap-x-2 text-sm font-semibold tracking-[0.2em] uppercase sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="text-white/90 drop-shadow-md">{tag1}</span>
          <span className="text-dyota-orange drop-shadow-md">{tag2}</span>
          <span className="text-white/90 drop-shadow-md">{tag3}</span>
        </motion.p>

        <motion.h1
          className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="block text-white drop-shadow-lg">
            {heroContent.headline.line1}
          </span>
          <span className="mt-2 block text-dyota-orange drop-shadow-lg">
            {heroContent.headline.line2}
          </span>
        </motion.h1>

        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.45, type: "spring", stiffness: 120 }}
        >
          <div className="rounded-full border border-dyota-orange/60 bg-dyota-orange/20 px-8 py-3.5 backdrop-blur-sm">
            <motion.p
              className="text-base font-bold tracking-wide text-white drop-shadow-md sm:text-lg"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {heroContent.experience}
            </motion.p>
          </div>
        </motion.div>

        <motion.p
          className="mb-10 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {heroContent.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <motion.a
            href="#services"
            className="rounded-full bg-dyota-orange/90 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-dyota-orange/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(242,101,34,1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-dyota-orange hover:bg-white/15"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="white"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
      </div>
    </section>
  );
}
