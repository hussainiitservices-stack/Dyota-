import type { Metadata } from "next";
import About from "../components/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Dyota Engineered Solutions — 20+ years of electrical engineering consultancy, power quality audits, and harmonics mitigation expertise in the UAE.",
};

export default function AboutPage() {
  return <About isStandalone />;
}
