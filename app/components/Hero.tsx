"use client";

import Image from "next/image";
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
          alt="Electrical substation and power engineering background"
          title="Electrical substation and power engineering background — Dyota ES UAE"
          fill
          className="scale-105 object-cover object-center"
          sizes="100vw"
          priority
        />
      </div>

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
        <p className="hero-animate hero-animate-delay-1 mb-6 flex flex-wrap items-center justify-center gap-x-2 text-sm font-semibold tracking-[0.2em] uppercase sm:text-base">
          <span className="text-white/90 drop-shadow-md">{tag1}</span>
          <span className="text-dyota-orange drop-shadow-md">{tag2}</span>
          <span className="text-white/90 drop-shadow-md">{tag3}</span>
        </p>

        <h1 className="hero-animate hero-animate-delay-2 mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="block text-white drop-shadow-lg">
            {heroContent.headline.line1}
          </span>
          <span className="mt-2 block text-dyota-orange drop-shadow-lg">
            {heroContent.headline.line2}
          </span>
        </h1>

        <div className="hero-animate hero-animate-delay-3 relative mb-8">
          <div className="rounded-full border border-dyota-orange/60 bg-dyota-orange/20 px-8 py-3.5 backdrop-blur-sm">
            <p className="text-base font-bold tracking-wide text-white drop-shadow-md sm:text-lg">
              {heroContent.experience}
            </p>
          </div>
        </div>

        <p className="hero-animate hero-animate-delay-4 mb-10 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-md sm:text-lg">
          {heroContent.subheadline}
        </p>

        <div className="hero-animate hero-animate-delay-5 flex flex-col gap-4 sm:flex-row">
          <a
            href="/services"
            className="rounded-full bg-dyota-orange/90 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-dyota-orange/30 backdrop-blur-sm transition-transform hover:scale-105"
          >
            Explore Solutions
          </a>
          <a
            href="/contact"
            className="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:border-dyota-orange hover:bg-white/15"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
