export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  ...navLinks,
  { label: "Electrical Studies", href: "/services#electrical-studies" },
  { label: "Power Quality", href: "/services#power-quality" },
  { label: "HVAC Solutions", href: "/services#hvac" },
] as const;

export const siteImages = {
  heroBackground: "/images/hero-bg.jpg",
  electricalStudies: "/images/electrical-studies.jpg",
  electricalHero: "/images/electrical-hero.jpg",
  hvac: "/images/hvac.jpg",
  powerQuality: "/images/power-quality.jpg",
} as const;

export const seoKeywords = [
  "Harmonics and Power Quality Audits UAE",
  "Thermography on LV switchgear",
  "Switchgear maintenance and repair UAE",
  "Active Harmonic Filter UAE",
  "Capacitors and Reactors UAE",
  "Capacitor Bank UAE",
  "Delta T HVAC control",
  "Thermal Audit UAE",
  "Earth leakage audit UAE",
  "Electrical engineering consultancy UAE",
  "Reactive power management UAE",
  "Electrical load balancing UAE",
  "APFC panel suppliers UAE",
  "ETAP simulation services UAE",
  "Energy saving audit UAE",
  "Busduct testing UAE",
  "Harmonic filters UAE",
  "Load unbalance calculation",
  "Transient calculations simulation",
  "Reactive energy management UAE",
] as const;

export const brand = {
  tagline: ["Expertise.", "Experience.", "Excellence."],
  headline: {
    line1: "Power Quality & Electrical Engineering",
    line2: "Solutions in UAE",
  },
  experience: "20+ Years of Experience in Industry",
  mission:
    "Delivering harmonics and power quality audits, Delta T HVAC control, capacitor banks, active harmonic filters, and electrical engineering consultancy across the UAE.",
  closingTagline: "Designing Today, Powering Tomorrow",
  footerLeft: "20+ Years of Trust. Countless Success Stories.",
  footerRight: "Partnering in Progress. Committed to Excellence.",
};

export const heroContent = {
  tagline: brand.tagline,
  headline: brand.headline,
  experience: brand.experience,
  subheadline: brand.mission,
};

export const aboutContent = {
  title: "Electrical Engineering Consultancy UAE",
  description: `Dyota Engineered Solutions is a trusted electrical engineering consultancy in the UAE, delivering harmonics and power quality audits, analysis, and mitigation solutions for industrial and commercial facilities.

With 20+ years of experience, we specialize in thermography on LV switchgear, switchgear maintenance & repair, reactive power management, electrical load balancing, ETAP simulation services, earth leakage audits, and busduct testing — helping clients achieve authority approval, compliance, and long-term energy efficiency.`,
  vision:
    "To be the UAE's leading provider of power quality, harmonics assessment, and engineered electrical solutions — built on innovation, precision analysis, and robust engineering practices.",
  mission: brand.mission,
  values: [
    "Integrity & Authority Compliance",
    "Reliable Power Quality Solutions",
    "Safety-First Engineering",
    "Innovation in Energy Efficiency",
    "Commitment to Technical Excellence",
    "Customer-Centric Execution",
  ],
};

export const coreValues = [
  { title: "Harmonics & Power Quality", icon: "shield" },
  { title: "Reactive Energy Management", icon: "gear" },
  { title: "Delta T Energy Efficiency", icon: "leaf" },
  { title: "Thermal & Thermography Audit", icon: "target" },
  { title: "Optimized Performance", icon: "chart" },
] as const;

export const servicePillars = [
  {
    id: "electrical-studies",
    title: "Electrical System Studies & ETAP Simulation",
    accent: "navy" as const,
    icon: "⚡",
    image: siteImages.electricalStudies,
    summary:
      "Electrical engineering consultancy, ETAP simulation, load unbalance calculation, and transient calculations for authority approval in the UAE.",
    services: [
      "ETAP Simulation Services UAE",
      "Load Unbalance Calculation",
      "Transient Calculations & Simulation",
      "Electrical Load Balancing Services",
    ],
  },
  {
    id: "hvac",
    title: "Delta T HVAC Control & Energy Efficiency",
    accent: "orange" as const,
    icon: "❄️",
    image: siteImages.hvac,
    summary:
      "Delta T HVAC control and energy efficiency solutions — reducing costs and improving chiller performance across the UAE.",
    services: [
      "Delta T Control (ΔT Control)",
      "Energy Saving Audit System UAE",
      "Humidity & Air Quality Testing",
      "High Efficiency Chiller Systems",
    ],
  },
  {
    id: "power-quality",
    title: "Power Quality & Harmonic Mitigation",
    accent: "green" as const,
    icon: "🔋",
    image: siteImages.powerQuality,
    summary:
      "Harmonics and power quality audits, active harmonic filters, capacitor banks, APFC panels, and capacitors & reactors supply in the UAE.",
    services: [
      "Harmonics & Power Quality Audits",
      "Active Harmonic Filters UAE",
      "Capacitor Banks & APFC Panels",
      "Capacitors & Reactors Supply",
    ],
  },
] as const;

export const electricalStudies = {
  headline: { line1: "Smart Design.", line2: "Reliable Power." },
  subheadline:
    "Expert electrical engineering studies — harmonics assessment, thermography, thermal audit, and switchgear services across the UAE",
  services: [
    {
      title: "Harmonics & Power Quality Audits",
      accent: "navy" as const,
      description:
        "Comprehensive harmonics and power quality audits, analysis, and mitigation solutions aligned with IEEE & IEC standards in the UAE.",
      highlights: [
        "Harmonics Assessment & THD Analysis",
        "Power Quality Audits UAE",
        "Harmonic Filters Selection",
        "Mitigation Solutions Design",
        "IEEE 519 / IEC Compliance",
      ],
    },
    {
      title: "Thermography & Thermal Audit",
      accent: "orange" as const,
      description:
        "Thermography on LV switchgear, busduct, busbar, and busriser — identifying hotspots before they cause failures.",
      highlights: [
        "Thermography on LV Switchgear",
        "Thermal Audit on Busduct/Busbar",
        "Busriser / Busduct Testing UAE",
        "Infrared Scanning & Reporting",
        "Preventive Maintenance Planning",
      ],
    },
    {
      title: "Switchgear Maintenance & ETAP Simulation",
      accent: "navy" as const,
      description:
        "Switchgear maintenance & repair, ETAP simulation services, and transient calculations for safe, compliant networks.",
      highlights: [
        "Switchgear Maintenance & Repair",
        "ETAP Simulation Services UAE",
        "Transient Calculations & Simulation",
        "Arc Flash Assessment",
        "Authority Approval Support",
      ],
    },
    {
      title: "Load Balancing & Reactive Power",
      accent: "orange" as const,
      description:
        "Electrical load balancing, reactive power management, and reactive energy management for optimized network performance.",
      highlights: [
        "Electrical Load Balancing UAE",
        "Reactive Power Management",
        "Reactive Energy Management",
        "Load Unbalance Calculation",
        "CPM & Power Factor Correction",
      ],
    },
  ],
};

export const engineeringApproach = [
  {
    step: 1,
    title: "Site Assessment",
    description: "Harmonics assessment, thermography, and system data collection.",
  },
  {
    step: 2,
    title: "Engineering Analysis",
    description: "ETAP modeling, load flow, and power quality calculations.",
  },
  {
    step: 3,
    title: "Simulation & Design",
    description: "Transient simulations, filter sizing, and mitigation design.",
  },
  {
    step: 4,
    title: "Reporting & Approval",
    description: "Detailed reports for authority approval and compliance.",
  },
  {
    step: 5,
    title: "Implementation",
    description: "Capacitor banks, APFC panels, and harmonic filter deployment.",
  },
] as const;

export const clientBenefits = [
  { title: "Enhanced System Reliability", icon: "shield" },
  { title: "Optimized Performance & Efficiency", icon: "chart" },
  { title: "Reduced Losses & Costs", icon: "cost" },
  { title: "Safety & Risk Reduction", icon: "safety" },
  { title: "Compliance with Global Standards", icon: "compliance" },
] as const;

export const powerQualityProducts = {
  headline: {
    line1: "Power Quality Products &",
    line2: "Harmonic Mitigation UAE",
  },
  subheadline:
    "Leading supplier of capacitor banks, active harmonic filters, capacitors & reactors, and APFC panels — engineered for efficiency and reliability in the UAE.",
  products: [
    {
      title: "Capacitor Banks & APFC Panels",
      accent: "navy" as const,
      description:
        "Automatic and fixed capacitor banks and APFC panel suppliers in the UAE for power factor improvement and reactive energy management.",
    },
    {
      title: "Active Harmonic Filters",
      accent: "green" as const,
      description:
        "Active harmonic filters suppliers in the UAE — real-time harmonic mitigation for clean, stable, and efficient power.",
    },
    {
      title: "Harmonic Filters & Passive Filters",
      accent: "orange" as const,
      description:
        "Detuned and high-pass harmonic filters for effective harmonics reduction and power quality improvement.",
    },
    {
      title: "Capacitors & Reactors",
      accent: "purple" as const,
      description:
        "Power capacitor and reactors supplier in the UAE — heavy-duty components for long-lasting performance.",
    },
  ],
  values: [
    "Premium Quality",
    "Advanced Technology",
    "Better Performance",
    "Reliable & Durable",
    "Customer Support",
  ],
};

export const hvacSolutions = {
  headline: { line1: "Delta T HVAC Control &", line2: "Energy Efficiency UAE" },
  subheadline:
    "Intelligent Delta T HVAC control and energy saving audit solutions for comfort, efficiency, and sustainability",
  tagline: "Save Energy · Reduce Costs · Build a Sustainable Tomorrow",
  features: [
    { title: "ΔT Control", icon: "❄️" },
    { title: "Energy Saving Audit", icon: "🌡️" },
    { title: "Air Quality Testing", icon: "🌱" },
    { title: "Reliable Performance", icon: "🛡️" },
  ],
  products: [
    "Water Cooled Chillers",
    "Air Cooled Chillers",
    "Primary Pumping System",
    "Delta T Control System",
  ],
  deltaT: {
    title: "Delta T Control (ΔT Control)",
    description:
      "Our Delta T HVAC control system optimizes the temperature difference between supply and return water — maximizing chiller efficiency, reducing pump power, and delivering measurable energy savings across UAE facilities.",
    benefits: [
      "Lower energy consumption",
      "Reduced pump power",
      "Improved system efficiency",
      "Extended equipment life",
    ],
  },
  whyItMatters: [
    {
      title: "Energy Saving Audit",
      description:
        "Comprehensive energy saving audit system to identify savings and optimize HVAC performance.",
    },
    {
      title: "Humidity & Air Quality",
      description:
        "Humidity and air quality testing for healthier, more comfortable environments.",
    },
    {
      title: "Sustainable Operations",
      description:
        "Lower carbon footprint through efficient Delta T HVAC control operations.",
    },
    {
      title: "Smart Monitoring",
      description:
        "Real-time data and analytics for better decision making and CPM optimization.",
    },
  ],
  closing:
    "Intelligent HVAC. Greater Efficiency. Lower Costs. A Better Future.",
};

export const contactInfo = {
  location: "Dubai, UAE",
  phone: "+971 55-366-5458",
  email: "info@dyotaes.com",
  website: "www.dyotaes.com",
};
