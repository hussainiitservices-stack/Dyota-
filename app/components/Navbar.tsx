"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dyota-navy/95 shadow-lg shadow-dyota-navy/20 backdrop-blur-md"
          : "glass-nav"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Image
              src="/logo-header.png"
              alt="Dyota Engineered Solutions"
              width={56}
              height={56}
              className="h-11 w-11 rounded-full object-contain drop-shadow-md sm:h-12 sm:w-12"
              priority
            />
          </motion.div>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <Link
                href={link.href}
                className={`group relative text-sm font-medium tracking-wider uppercase transition-colors ${
                  isActive(link.href)
                    ? "text-dyota-orange"
                    : "text-white/90 hover:text-dyota-orange"
                }`}
              >
                {link.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-dyota-orange"
                  initial={{ width: isActive(link.href) ? "100%" : 0 }}
                  animate={{ width: isActive(link.href) ? "100%" : 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="rounded-full glass-btn-orange px-6 py-2.5 text-sm font-semibold text-white"
          >
            Get In Touch
          </Link>
        </motion.div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>
      </nav>

      <motion.div
        className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-dyota-navy md:hidden"
        initial={false}
        animate={mobileOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 40 }}
            animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: mobileOpen ? i * 0.08 : 0 }}
          >
            <Link
              href={link.href}
              className={`text-2xl font-semibold tracking-wider uppercase ${
                isActive(link.href) ? "text-dyota-orange" : "text-white"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
        <Link
          href="/contact"
          className="mt-4 rounded-full bg-dyota-orange px-8 py-3 text-lg font-semibold text-white"
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
        </Link>
      </motion.div>
    </motion.header>
  );
}
