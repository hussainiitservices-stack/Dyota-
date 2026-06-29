"use client";

import { motion } from "framer-motion";

type AnimatedLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
};

const sizes = {
  sm: { width: 120, height: 48 },
  md: { width: 200, height: 80 },
  lg: { width: 320, height: 128 },
};

export default function AnimatedLogo({
  className = "",
  size = "lg",
  showTagline = true,
}: AnimatedLogoProps) {
  const { width, height } = sizes[size];
  const scale = width / 320;

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 320 130"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Dyota Engineered Solutions logo"
      >
        {/* D outer shape */}
        <motion.path
          d="M10 10 H70 V120 H10 Z M10 10 H50 C85 10 85 120 50 120 H10 Z"
          fill="#002D88"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* E bars inside D */}
        <motion.rect
          x="22"
          y="35"
          width="38"
          height="12"
          fill="#002D88"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        />
        <motion.rect
          x="22"
          y="59"
          width="38"
          height="12"
          fill="#002D88"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
        />
        <motion.rect
          x="22"
          y="83"
          width="38"
          height="12"
          fill="#002D88"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        />

        {/* Orange top bar of E */}
        <motion.rect
          x="22"
          y="10"
          width="38"
          height="12"
          fill="#F26522"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 22, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* S letter body */}
        <motion.path
          d="M130 25 C130 10 155 10 175 10 C195 10 210 20 210 35 C210 50 195 55 175 60 C155 65 130 70 130 85 C130 100 155 120 175 120 C195 120 220 115 220 100"
          stroke="#002D88"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Orange swoosh through S */}
        <motion.path
          d="M145 65 C165 55 185 75 205 65 C215 60 220 70 215 80 C200 95 170 95 150 85"
          stroke="#F26522"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: "easeInOut" }}
        />

        {/* Flowing energy dot on swoosh */}
        <motion.circle
          r="4"
          fill="#FF7A33"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            offsetDistance: ["0%", "100%"],
          }}
          transition={{
            duration: 2,
            delay: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "linear",
          }}
          style={{
            offsetPath:
              'path("M145 65 C165 55 185 75 205 65 C215 60 220 70 215 80 C200 95 170 95 150 85")',
          }}
        />
      </svg>

      {showTagline && (
        <motion.p
          className="mt-2 text-center font-semibold tracking-[0.25em] text-dyota-navy"
          style={{ fontSize: `${10 * scale}px` }}
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: `${0.25 * scale}em` }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          DYOTA ENGINEERED SOLUTIONS
        </motion.p>
      )}
    </div>
  );
}
