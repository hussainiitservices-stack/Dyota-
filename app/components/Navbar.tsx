"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "../lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`nav-header fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dyota-navy/95 shadow-lg shadow-dyota-navy/20 backdrop-blur-md"
          : "glass-nav"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Image
            src="/logo-header.png"
            alt="Dyota Engineered Solutions"
            title="Dyota Engineered Solutions — Home"
            width={56}
            height={56}
            className="h-11 w-11 rounded-full object-contain drop-shadow-md sm:h-12 sm:w-12"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href} className="nav-link-item">
              <Link
                href={link.href}
                className={`group relative text-sm font-medium tracking-wider uppercase transition-colors ${
                  isActive(link.href)
                    ? "text-dyota-orange"
                    : "text-white/90 hover:text-dyota-orange"
                }`}
              >
                {link.label}
                <span
                  className={`nav-underline absolute -bottom-1 left-0 h-0.5 bg-dyota-orange transition-all duration-300 group-hover:w-full ${
                    isActive(link.href) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="nav-cta hidden rounded-full glass-btn-orange px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 md:block"
        >
          Get In Touch
        </Link>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span
            className={`mobile-menu-bar block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`mobile-menu-bar block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`mobile-menu-bar block h-0.5 w-6 bg-white transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`mobile-nav fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dyota-navy md:hidden ${
          mobileOpen ? "mobile-nav-open" : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        {navLinks.map((link) => (
          <div key={link.href} className="mobile-nav-link">
            <Link
              href={link.href}
              className={`text-2xl font-semibold tracking-wider uppercase ${
                isActive(link.href) ? "text-dyota-orange" : "text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          </div>
        ))}
        <Link
          href="/contact"
          className="mt-4 rounded-full bg-dyota-orange px-8 py-3 text-lg font-semibold text-white"
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
