"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import { contactCta, contactInfo } from "../lib/content";

export default function Contact({ isStandalone = false }: { isStandalone?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const HeadingTag = isStandalone ? "h1" : "h2";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const fields = [
    { name: "firstName", label: "First Name", type: "text", half: true },
    { name: "lastName", label: "Last Name", type: "text", half: true },
    { name: "company", label: "Company", type: "text", half: false },
    { name: "email", label: "Email", type: "email", half: false },
    { name: "message", label: "Message", type: "textarea", half: false },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`section-warm relative scroll-mt-24 overflow-hidden px-6 lg:px-8 ${
        isStandalone ? "pt-28 pb-24" : "py-24"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-dyota-orange/15 to-transparent"
            style={{ top: `${10 + i * 16}%` }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-dyota-orange/10 px-4 py-1.5 text-sm font-semibold tracking-wider text-dyota-orange uppercase">
            Contact
          </span>
          <HeadingTag
            id="contact-heading"
            className="mb-4 text-4xl font-bold text-dyota-navy md:text-5xl"
          >
            Get In Touch
          </HeadingTag>
          <div className="section-divider mx-auto w-24" />
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <h4 className="text-xl font-bold text-dyota-navy">Contact Information</h4>
              {[
                {
                  label: "Location",
                  value: contactInfo.location,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ),
                  extra: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  ),
                },
                {
                  label: "Phone",
                  value: contactInfo.phone,
                  href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  ),
                },
                {
                  label: "Email",
                  value: contactInfo.email,
                  href: `mailto:${contactInfo.email}`,
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dyota-orange/10 text-dyota-orange"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {item.icon}
                      {"extra" in item && item.extra}
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60">
                      {item.label}
                    </p>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-semibold text-dyota-navy transition-colors hover:text-dyota-orange"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-dyota-navy">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="rounded-2xl border border-dyota-navy/10 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <p className="leading-relaxed text-foreground/80">{contactCta}</p>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <motion.form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-dyota-navy/10 bg-white p-8 shadow-lg shadow-dyota-navy/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-6 text-2xl font-bold text-dyota-navy">
                Write To Us
              </h4>

              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.name}
                    className={field.half ? "" : "sm:col-span-2"}
                  >
                    <label
                      htmlFor={field.name}
                      className="mb-1.5 block text-sm font-medium text-dyota-navy/70"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      {field.type === "textarea" ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          rows={4}
                          required={field.name === "email" || field.name === "message"}
                          className="w-full rounded-xl border-2 border-dyota-navy/10 bg-slate-50 px-4 py-3 text-foreground outline-none transition-all focus:border-dyota-orange focus:bg-white"
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                        />
                      ) : (
                        <input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={
                            field.name === "email" ||
                            field.name === "firstName"
                          }
                          className="w-full rounded-xl border-2 border-dyota-navy/10 bg-slate-50 px-4 py-3 text-foreground outline-none transition-all focus:border-dyota-orange focus:bg-white"
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                        />
                      )}
                      <AnimatePresence>
                        {focused === field.name && (
                          <motion.div
                            className="absolute -bottom-0.5 left-0 h-0.5 bg-dyota-orange"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            exit={{ width: 0 }}
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>

              <motion.button
                type="submit"
                className="mt-6 w-full rounded-xl bg-dyota-orange py-4 text-base font-semibold text-white shadow-lg shadow-dyota-orange/30"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#FF7A33",
                  boxShadow: "0 10px 30px rgba(247,148,29,0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="mt-4 rounded-xl bg-dyota-navy/10 p-4 text-center text-dyota-navy"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Thank you for your enquiry! Our team will contact you
                    shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
