export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [...navLinks] as const;

export const siteImages = {
  heroBackground: "/images/hero-bg.jpg",
  electricalStudies: "/images/electrical-studies.jpg",
  electricalHero: "/images/electrical-hero.jpg",
  hvac: "/images/hvac.jpg",
  powerQuality: "/images/power-quality.jpg",
} as const;

export const seoKeywords = [
  "Electrical Engineering Services UAE",
  "Electrical Engineering companies in UAE",
  "Power Quality Solutions UAE",
  "Active harmonic filter UAE suppliers",
  "Active Harmonic Filter UAE",
  "ETAP Simulation Services UAE",
  "Relay Coordination Study UAE",
  "Electrical Audit UAE",
  "Energy Audit UAE",
  "Busduct Testing UAE",
  "Thermal Imaging Inspection UAE",
  "Earth Leakage Audit UAE",
  "Power Factor Correction UAE",
  "Electrical Consultancy UAE",
  "Active Harmonic Filter Manufacturer UAE",
  "Arc Flash Study UAE",
  "Reactive Power Compensation UAE",
  "Capacitor Bank Manufacturer UAE",
  "Harmonic Filter Supplier UAE",
  "Chiller plant manager supplier UAE",
  "energy audit companies in uae",
  "DEWA Approval consultancy in uae",
  "best capacitor banks uae",
  "Capacitor bank supplier in uae",
] as const;

export const brand = {
  tagline: ["Expertise.", "Experience.", "Excellence."],
  headline: {
    line1: "Electrical Engineering",
    line2: "& Power Quality Solutions UAE",
  },
  experience: "20+ Years of Experience in Industry",
  mission:
    "To deliver trusted Electrical Engineering Services UAE and Power Quality Solutions UAE as a leading electrical engineering company in the UAE — manufacturing Active Harmonic Filters, capacitor banks, and harmonic filter systems, while providing ETAP simulation, relay coordination study, electrical audit, energy audit, busduct testing, thermal imaging inspection, earth leakage audit, power factor correction, arc flash study, reactive power compensation, DEWA approval consultancy, and electrical consultancy across Dubai and the UAE.",
  closingTagline: "Designing Today, Powering Tomorrow",
  footerLeft: "20+ Years of Trust. Countless Success Stories.",
  footerRight: "Partnering in Progress. Committed to Excellence.",
};

export const heroContent = {
  tagline: brand.tagline,
  headline: brand.headline,
  experience: brand.experience,
  subheadline:
    "Dyota ES is among the trusted Electrical Engineering companies in UAE — Active Harmonic Filter Manufacturer UAE, Capacitor Bank Manufacturer UAE, Harmonic Filter Supplier UAE, and specialists in Power Factor Correction UAE, ETAP Simulation Services UAE, Energy Audit UAE, and DEWA Approval consultancy in UAE.",
};

export const aboutContent = {
  title: "About Dyota Engineered Solutions",
  intro:
    "Dyota Engineered Solutions (Dyota ES) is a Dubai-based provider of Electrical Engineering Services UAE and Power Quality Solutions UAE, serving industrial and commercial clients for 20+ years as one of the established Electrical Engineering companies in UAE.",
  description:
    "We combine Electrical Consultancy UAE with UAE manufacturing of Active Harmonic Filter UAE products, the best capacitor banks UAE facilities rely on, and end-to-end support as a Capacitor bank supplier in UAE and Active harmonic filter UAE suppliers. Our engineers deliver Electrical Audit UAE, Energy Audit UAE, Busduct Testing UAE, Thermal Imaging Inspection UAE, Earth Leakage Audit UAE, Arc Flash Study UAE, Relay Coordination Study UAE, ETAP Simulation Services UAE, Reactive Power Compensation UAE, and DEWA Approval consultancy in UAE — helping facilities achieve compliance, safety, and measurable efficiency.",
  specialties: [
    "Electrical Engineering Services UAE & Electrical Consultancy UAE",
    "Power Quality Solutions UAE — Active Harmonic Filter Manufacturer UAE",
    "Capacitor Bank Manufacturer UAE & Power Factor Correction UAE",
    "ETAP Simulation, Relay Coordination Study & Arc Flash Study UAE",
    "Electrical Audit, Energy Audit & Thermal Imaging Inspection UAE",
    "Busduct Testing, Earth Leakage Audit & DEWA Approval consultancy in UAE",
  ],
  vision:
    "To be recognized among the leading Electrical Engineering companies in UAE and preferred energy audit companies in UAE — delivering Power Quality Solutions UAE, Active Harmonic Filter UAE systems, and reliable electrical consultancy that keep networks safe, efficient, and DEWA-compliant for generations to come.",
  values: [
    "Engineering Excellence – Precision Electrical Engineering Services UAE built for performance and durability.",
    "Power Quality Innovation – Active Harmonic Filter Manufacturer UAE technologies and Reactive Power Compensation UAE expertise.",
    "Customer-Centric Delivery – Trusted Capacitor bank supplier in UAE and Harmonic Filter Supplier UAE support with fast turnaround.",
    "Safety & Compliance – Arc Flash Study UAE, Relay Coordination Study UAE, and DEWA Approval consultancy in UAE.",
    "UAE Manufacturing Commitment – Best capacitor banks UAE and Active Harmonic Filter UAE products made for local conditions.",
    "Audit & Inspection Rigor – Electrical Audit UAE, Energy Audit UAE, Busduct Testing UAE, and Thermal Imaging Inspection UAE.",
  ],
  mission: brand.mission,
};

export const coreValues = [
  {
    title: "Electrical Engineering UAE",
    subtitle: "Services, consultancy and DEWA approval support",
    icon: "shield",
  },
  {
    title: "Power Quality Solutions",
    subtitle: "Active harmonic filters and PFC systems",
    icon: "gear",
  },
  {
    title: "Studies & Simulation",
    subtitle: "ETAP, relay coordination and arc flash",
    icon: "chart",
  },
  {
    title: "Audit & Inspection",
    subtitle: "Electrical, energy and thermal imaging",
    icon: "target",
  },
  {
    title: "UAE Manufacturing",
    subtitle: "Capacitor banks and harmonic filter supply",
    icon: "leaf",
  },
] as const;

export const solutionsContent = {
  title: "Power Quality Solutions UAE",
  subtitle:
    "Active Harmonic Filter Manufacturer UAE and Capacitor Bank Manufacturer UAE — supplying the best capacitor banks UAE and Harmonic Filter Supplier UAE products for Power Factor Correction UAE and Reactive Power Compensation UAE.",
  categories: [
    {
      id: "harmonic-filters",
      title: "Active Harmonic Filter UAE",
      description:
        "As Active harmonic filter UAE suppliers and an Active Harmonic Filter Manufacturer UAE, we design and supply Active Harmonic Filter UAE panels that mitigate harmonics, protect equipment, and improve network stability for industrial and commercial facilities.",
      items: [
        "Active Harmonic Filter UAE panels",
        "Active harmonic filter UAE suppliers support & commissioning",
        "Active Harmonic Filter Manufacturer UAE custom designs",
        "Harmonic Filter Supplier UAE product range",
        "Customized harmonic mitigation filters",
      ],
    },
    {
      id: "capacitor-banks",
      title: "Capacitor Banks UAE",
      description:
        "Capacitor Bank Manufacturer UAE and Capacitor bank supplier in UAE delivering the best capacitor banks UAE clients need for Power Factor Correction UAE, lower utility penalties, and stable reactive power performance.",
      items: [
        "Best capacitor banks UAE — LV capacitor banks",
        "Capacitor Bank Manufacturer UAE compact APFC panels",
        "Capacitor bank supplier in UAE turnkey supply",
        "Hybrid capacitor bank systems",
        "Low voltage capacitors, reactors and controllers",
      ],
    },
    {
      id: "power-factor",
      title: "Power Factor Correction UAE",
      description:
        "Power Factor Correction UAE and Reactive Power Compensation UAE solutions that reduce losses, improve voltage profile, and optimize electrical network efficiency across Dubai and the UAE.",
      items: [
        "Power Factor Correction UAE (APFC) systems",
        "Reactive Power Compensation UAE design",
        "Auto-PFC controllers",
        "Reactors for detuned PFC applications",
        "Network power factor optimization",
      ],
    },
    {
      id: "chiller-cpm",
      title: "Chiller Plant Manager UAE",
      description:
        "Chiller plant manager supplier UAE solutions supporting chilled-water plant efficiency, monitoring, and energy performance for commercial and industrial facilities.",
      items: [
        "Chiller plant manager supplier UAE systems",
        "Chilled water plant monitoring & control",
        "Delta-T optimization support",
        "Energy-saving plant management tools",
      ],
    },
  ],
};

export const servicesContent = {
  title: "Electrical Engineering Services UAE",
  subtitle:
    "Full-spectrum Electrical Engineering Services UAE and Electrical Consultancy UAE — ETAP Simulation Services UAE, Relay Coordination Study UAE, Electrical Audit UAE, Energy Audit UAE, Busduct Testing UAE, Thermal Imaging Inspection UAE, Earth Leakage Audit UAE, Arc Flash Study UAE, and DEWA Approval consultancy in UAE.",
  categories: [
    {
      id: "engineering-consultancy",
      title: "Electrical Engineering & Consultancy UAE",
      description:
        "As one of the trusted Electrical Engineering companies in UAE, Dyota ES provides Electrical Engineering Services UAE and Electrical Consultancy UAE for industrial, commercial, and infrastructure projects — including DEWA Approval consultancy in UAE for compliant submissions and approvals.",
      items: [
        "Electrical Engineering Services UAE",
        "Electrical Consultancy UAE",
        "Electrical Engineering companies in UAE — project advisory",
        "DEWA Approval consultancy in UAE",
        "Network design review & compliance support",
      ],
    },
    {
      id: "power-quality-studies",
      title: "Power Quality, ETAP & Protection Studies",
      description:
        "Power Quality Solutions UAE backed by ETAP Simulation Services UAE, Relay Coordination Study UAE, Arc Flash Study UAE, Earth Leakage Audit UAE, and Reactive Power Compensation UAE analysis for safer, more reliable networks.",
      items: [
        "ETAP Simulation Services UAE",
        "Relay Coordination Study UAE",
        "Arc Flash Study UAE",
        "Earth Leakage Audit UAE",
        "Harmonics & Power Quality Solutions UAE studies",
        "Reactive Power Compensation UAE calculations",
        "Load unbalance & transient simulation",
        "Sag/swell and harmonic mitigation design",
      ],
    },
    {
      id: "audits-inspection",
      title: "Electrical Audit, Energy Audit & Inspection",
      description:
        "Electrical Audit UAE, Energy Audit UAE, Busduct Testing UAE, and Thermal Imaging Inspection UAE from a team counted among energy audit companies in UAE — identifying risks, losses, and actionable savings.",
      items: [
        "Electrical Audit UAE",
        "Energy Audit UAE",
        "energy audit companies in uae — site assessments",
        "Busduct Testing UAE",
        "Thermal Imaging Inspection UAE",
        "Thermography on LV switchgear",
        "Thermal audit on busduct / busbar",
        "Infrared scanning & risk forecasting",
      ],
    },
    {
      id: "network-testing",
      title: "Network Testing & Diagnostics",
      description:
        "Hands-on electrical network testing and troubleshooting across the UAE — supporting Power Factor Correction UAE verification, capacitor bank performance checks, and safe day-to-day operations.",
      items: [
        "Dark-hour test & network imbalance test",
        "Capacitor bank test & Power Factor Correction UAE verification",
        "UPS load / unload test & battery test",
        "Switchgear test, LV test & loop impedance test",
        "Earth testing & earth leakage test",
        "LV switchgear and power busbar troubleshooting",
      ],
    },
  ],
};

export const contactCta =
  "Need Electrical Engineering Services UAE, Power Quality Solutions UAE, Active Harmonic Filter UAE supply, Capacitor bank supplier in UAE support, Energy Audit UAE, ETAP Simulation Services UAE, or DEWA Approval consultancy in UAE? Contact Dyota Engineered Solutions in Dubai — your partner among leading Electrical Engineering companies in UAE.";

export const contactInfo = {
  location: "Dubai, UAE",
  phone: "+971 55-366-5458",
  email: "info@dyotaes.com",
  website: "www.dyotaes.com",
  linkedin: "https://www.linkedin.com/company/dyotaes/",
};
