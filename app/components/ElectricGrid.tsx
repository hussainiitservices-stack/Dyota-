"use client";

import { motion } from "framer-motion";

export default function ElectricGrid() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-dyota-orange/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-dyota-navy/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#002D88"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Energy lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-dyota-orange/40 to-transparent"
          style={{
            top: `${20 + i * 18}%`,
            left: 0,
            right: 0,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: [0, 0.6, 0] }}
          transition={{
            duration: 3,
            delay: i * 0.8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Circuit nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute h-2 w-2 rounded-full bg-dyota-orange/60"
          style={{
            top: `${15 + (i % 4) * 22}%`,
            left: `${10 + Math.floor(i / 4) * 80}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 1, 0.4],
            boxShadow: [
              "0 0 0 0 rgba(247,148,29,0)",
              "0 0 12px 4px rgba(247,148,29,0.4)",
              "0 0 0 0 rgba(247,148,29,0)",
            ],
          }}
          transition={{
            duration: 2.5,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
