import type { Metadata } from "next";
import Contact from "../components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Dyota Engineered Solutions in Dubai, UAE. Call +971 55-366-5458 or email info@dyotaes.com for power quality and electrical engineering services.",
};

export default function ContactPage() {
  return <Contact isStandalone />;
}
