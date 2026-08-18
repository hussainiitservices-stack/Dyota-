"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  navLinks,
  servicesContent,
  solutionsContent,
} from "../lib/content";

const solutionsMenu = [
  { label: "All Solutions", href: "/solutions" },
  ...solutionsContent.categories.map((category) => ({
    label: category.title,
    href: `/solutions#${category.id}`,
  })),
];

const servicesMenu = [
  { label: "All Services", href: "/services" },
  ...servicesContent.categories.map((category) => ({
    label: category.title,
    href: `/services#${category.id}`,
  })),
];

function DropdownChevron({ open }: { open?: boolean }) {
  return (
    <svg
      className={`h-3.5 w-3.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<"solutions" | "services" | null>(
    null,
  );
  const [openMobile, setOpenMobile] = useState<"solutions" | "services" | null>(
    null,
  );
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDesktop(null);
    setOpenMobile(null);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  function closeMobile() {
    setMobileOpen(false);
    setOpenMobile(null);
  }

  return (
    <header className="nav-header sticky top-0 z-50 w-full glass-nav">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          onClick={closeMobile}
        >
          <Image
            src="/logo-des.png"
            alt="Dyota Engineered Solutions logo — Electrical Engineering & Power Quality Solutions"
            title="Dyota Engineered Solutions — Home"
            width={200}
            height={80}
            className="h-11 w-auto max-w-[160px] object-contain sm:h-14 sm:max-w-none md:h-16 lg:h-[4.5rem]"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-5 lg:gap-8 md:flex">
          {navLinks.map((link) => {
            if (link.href === "/solutions" || link.href === "/services") {
              const key = link.href === "/solutions" ? "solutions" : "services";
              const menu = key === "solutions" ? solutionsMenu : servicesMenu;
              const open = openDesktop === key;

              return (
                <li
                  key={link.href}
                  className="nav-link-item relative"
                  onMouseEnter={() => setOpenDesktop(key)}
                  onMouseLeave={() => setOpenDesktop(null)}
                >
                  <button
                    type="button"
                    className={`group flex items-center gap-1.5 text-sm font-medium tracking-wider uppercase transition-colors ${
                      isActive(link.href)
                        ? "text-dyota-orange"
                        : "text-dyota-navy/85 hover:text-dyota-orange"
                    }`}
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDesktop((current) =>
                        current === key ? null : key,
                      )
                    }
                  >
                    {link.label}
                    <DropdownChevron open={open} />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 z-50 w-64 -translate-x-1/2 pt-3 transition-all ${
                      open
                        ? "pointer-events-auto visible opacity-100"
                        : "pointer-events-none invisible opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden rounded-2xl border border-white/60 bg-white/95 py-2 shadow-xl shadow-[#2c5f9e]/15 backdrop-blur-xl">
                      {menu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm font-medium text-dyota-navy/85 transition-colors hover:bg-[#edf7ff] hover:text-dyota-orange"
                          onClick={() => setOpenDesktop(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.href} className="nav-link-item">
                <Link
                  href={link.href}
                  className={`group relative text-sm font-medium tracking-wider uppercase transition-colors ${
                    isActive(link.href)
                      ? "text-dyota-orange"
                      : "text-dyota-navy/85 hover:text-dyota-orange"
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
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="nav-cta hidden rounded-full glass-btn-orange px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 md:block lg:px-6"
        >
          Get In Touch
        </Link>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-dyota-navy/10 bg-white/50 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`mobile-menu-bar block h-0.5 w-5 bg-dyota-navy transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`mobile-menu-bar block h-0.5 w-5 bg-dyota-navy transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`mobile-menu-bar block h-0.5 w-5 bg-dyota-navy transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-nav absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-white/50 bg-white/98 shadow-lg backdrop-blur-xl md:hidden ${
          mobileOpen ? "mobile-nav-open" : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-1 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
          {navLinks.map((link) => {
            if (link.href === "/solutions" || link.href === "/services") {
              const key = link.href === "/solutions" ? "solutions" : "services";
              const menu = key === "solutions" ? solutionsMenu : servicesMenu;
              const open = openMobile === key;

              return (
                <div key={link.href} className="mobile-nav-link w-full">
                  <button
                    type="button"
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-semibold tracking-wide uppercase ${
                      isActive(link.href) ? "text-dyota-orange" : "text-dyota-navy"
                    }`}
                    aria-expanded={open}
                    onClick={() =>
                      setOpenMobile((current) =>
                        current === key ? null : key,
                      )
                    }
                  >
                    {link.label}
                    <DropdownChevron open={open} />
                  </button>
                  {open && (
                    <div className="mb-2 ml-3 space-y-0.5 border-l-2 border-dyota-orange/30 pl-3">
                      {menu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-2 py-2.5 text-sm font-medium text-dyota-navy/80"
                          onClick={closeMobile}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={link.href} className="mobile-nav-link">
                <Link
                  href={link.href}
                  className={`block rounded-xl px-3 py-3 text-base font-semibold tracking-wide uppercase ${
                    isActive(link.href) ? "text-dyota-orange" : "text-dyota-navy"
                  }`}
                  onClick={closeMobile}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-dyota-orange px-6 py-3 text-sm font-semibold text-white"
            onClick={closeMobile}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </header>
  );
}
