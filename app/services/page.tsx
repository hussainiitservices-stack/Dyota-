import type { Metadata } from "next";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Electrical system studies, ETAP simulation, power quality solutions, capacitor banks, active harmonic filters, and Delta T HVAC control services in the UAE.",
};

export default function ServicesPage() {
  return <Services isStandalone />;
}
