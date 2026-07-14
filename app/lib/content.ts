export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { label: "Thermal Testing", href: "/services#thermal-testing" },
  { label: "Harmonics Audits", href: "/services#engineering-studies" },
] as const;

export const siteImages = {
  heroBackground: "/images/hero-bg.jpg",
  electricalStudies: "/images/electrical-studies.jpg",
  electricalHero: "/images/electrical-hero.jpg",
  hvac: "/images/hvac.jpg",
  powerQuality: "/images/power-quality.jpg",
} as const;

export const seoKeywords = [
  "Harmonics Study and Analysis UAE",
  "Power Quality Audits UAE",
  "UAE manufacturing power quality solutions",
  "Harmonic Filters UAE",
  "Delta T HVAC Control UAE",
  "Thermography LV switchgear",
  "Active Harmonic Filter UAE",
  "Capacitors and Reactors UAE",
  "Capacitor Bank UAE",
  "Thermal Testing UAE",
  "Reactive power management UAE",
  "APFC panel suppliers UAE",
  "Energy saving audit UAE",
  "Busduct testing UAE",
  "LV switchgear troubleshooting UAE",
  "Power busbar troubleshooting UAE",
  "Electrical network performance optimization UAE",
] as const;

export const brand = {
  tagline: ["Expertise.", "Experience.", "Excellence."],
  headline: {
    line1: "Power Quality &",
    line2: "Engineered Solutions UAE",
  },
  experience: "20+ Years of Experience in Industry",
  mission:
    "To manufacture high quality Capacitors, Reactors, and Active Harmonic Filter Panels, and deliver advanced Harmonics Study & Analysis, Power Quality Audits, Reactive Energy Management, and Delta T HVAC Control Solutions across the UAE — enabling clients to achieve compliance, efficiency, and electrical stability.",
  closingTagline: "Designing Today, Powering Tomorrow",
  footerLeft: "20+ Years of Trust. Countless Success Stories.",
  footerRight: "Partnering in Progress. Committed to Excellence.",
};

export const heroContent = {
  tagline: brand.tagline,
  headline: brand.headline,
  experience: brand.experience,
  subheadline:
    "Experts in Harmonics Study & Analysis, Power Quality Audits, UAE-based manufacturing of Power quality solution, Harmonic Filters, and Delta-T HVAC Control Solutions.",
};

export const aboutContent = {
  title: "Welcome to DES",
  intro:
    "Welcome to DES, with 20+ years of experience your trusted partner in Power Quality Solutions for Electrical Network, Energy Audit Energy Savings, and Network Testing and Troubleshooting with specialized solutions.",
  description:
    "At DES, we are committed to providing comprehensive and innovative solutions to enhance the efficiency and reliability of your energy systems. Our expertise spans across various domains ensure your business operates at its best, minimizing downtime and maximizing savings.",
  specialties: [
    "Power Quality Audit and Solutions",
    "Energy Audit and Chilled Water System Optimization",
    "Testing and Troubleshooting Network",
  ],
  vision:
    "To optimize the electrical industry by delivering cutting-edge solutions that enhance the health and reliability of electrical networks, ensuring sustainable energy for generations to come.",
  values: [
    "Engineering Excellence – Precision built products designed for performance and durability.",
    "Innovation in Power Quality – Advanced harmonic mitigation technologies",
    "Customer Centric Delivery – Fast turnaround, reliable support, and tailored solutions",
    "Safety & Reliability – Products engineered for stable, long term operation.",
    "UAE Manufacturing Commitment – Made in UAE with precision quality Solutions and faster delivery.",
  ],
  mission: brand.mission,
};

export const coreValues = [
  {
    title: "Harmonics & Power Quality",
    subtitle: "Study, analysis and audit solutions",
    icon: "shield",
  },
  {
    title: "UAE Manufacturing",
    subtitle: "Capacitors, reactors and filter panels",
    icon: "gear",
  },
  {
    title: "Delta-T HVAC Control",
    subtitle: "Energy audit and chilled water optimization",
    icon: "leaf",
  },
  {
    title: "Network Testing",
    subtitle: "LV switchgear and busbar troubleshooting",
    icon: "target",
  },
  {
    title: "Network Optimization",
    subtitle: "Electrical network performance enhancement",
    icon: "chart",
  },
] as const;

export const solutionsContent = {
  title: "Our Solutions",
  subtitle:
    "UAE-manufactured power quality products — precision-engineered capacitors, reactors, harmonic filters, and control systems.",
  categories: [
    {
      id: "capacitors",
      title: "Capacitors",
      items: ["Capacitors"],
    },
    {
      id: "reactors",
      title: "Reactors",
      items: ["Reactors"],
    },
    {
      id: "controllers",
      title: "Controllers",
      items: ["Auto-PFC Controller"],
    },
    {
      id: "filters",
      title: "Harmonic Filters",
      items: ["Harmonic Filters", "Customize Filters"],
    },
    {
      id: "panels",
      title: "Panels & Systems",
      items: [
        "Low Voltage Capacitors, Reactors and Controllers",
        "Capacitor Banks and Compact APFC Panels",
        "Hybrid Systems",
      ],
    },
  ],
};

export const servicesContent = {
  title: "Our Services",
  subtitle:
    "Comprehensive testing, analysis, and engineering services for electrical networks across the UAE.",
  categories: [
    {
      id: "thermal-testing",
      title: "Thermal Testing",
      items: [
        "Dark-Hour Test",
        "Capacitor Bank Test",
        "UPS Load / Unload Test",
        "Battery Test",
        "Switchgear Test",
        "Earth Testing",
        "Loop Impedance Test",
        "LV Test",
        "Earth Leakage Test",
        "Network Imbalance Test",
      ],
    },
    {
      id: "engineering-studies",
      title: "Engineering Studies & Analysis",
      items: [
        "Harmonics and Power Quality Audits",
        "Harmonics Assessment",
        "Mathematical Modeling & Simulation",
        "Design Calculation for Harmonic Mitigation, Sag/Swell Correction, Unbalance",
        "Reactive Energy Management",
        "Transient Calculations / Simulation",
        "Load Un-balance Calculation",
        "Earth Leakage Current Calculation / Simulation",
        "Reactive Energy Calculation / Simulation",
      ],
    },
    {
      id: "thermography",
      title: "Thermography Services",
      description:
        "Providing detailed thermography services in line with NFPA and IEC standards to ensure reliable operations of the network along with forecasting future risks and providing mitigation solutions.",
      items: [
        "Thermography on LV Switchgear",
        "Thermal Audit on Busduct / Busbar",
        "Infrared Scanning & Reporting",
        "Risk Forecasting & Mitigation Planning",
      ],
    },
  ],
};

export const contactCta =
  "Ready to elevate your electrical infrastructure with precision-engineered power-quality products? Our UAE-based manufacturing team delivers advanced Capacitors, Reactors, and Active Harmonic Filters to support your journey toward efficiency, safety, and sustainable performance.";

export const contactInfo = {
  location: "Dubai, UAE",
  phone: "+971 55-366-5458",
  email: "info@dyotaes.com",
  website: "www.dyotaes.com",
  linkedin: "https://www.linkedin.com/company/dyotaes/",
};
