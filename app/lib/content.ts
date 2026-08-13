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
  { label: "Engineering Studies", href: "/services#engineering-studies" },
] as const;

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
  "Relay Coordination Study UAE",
  "Electrical Audit UAE",
  "Energy Audit UAE",
  "Busduct Testing UAE",
  "Thermal Imaging Inspection UAE",
  "Earth Leakage Audit UAE",
  "Power Factor Correction UAE",
  "Active Harmonic Filter Manufacturer UAE",
  "Arc Flash Study UAE",
  "Reactive Power Compensation UAE",
  "Capacitor Bank Manufacturer UAE",
  "Harmonic Filter Supplier UAE",
  "Chiller plant manager supplier UAE",
  "energy audit companies in uae",
  "best capacitor banks uae",
  "Capacitor bank supplier in uae",
] as const;

export const brand = {
  tagline: ["Expertise.", "Experience.", "Excellence."],
  headline: {
    line1: "Electrical Engineering &",
    line2: "Power Quality Solutions",
  },
  experience: "20+ Years of Experience in Industry",
  mission:
    "Ready to elevate your electrical infrastructure with precision-engineered power quality products? Our manufacturing team delivers advanced Capacitors, Reactors, and Active Harmonic Filters to support efficiency, safety, and sustainable performance.",
  closingTagline: "Designing Today, Powering Tomorrow",
  footerLeft: "20+ Years of Trust. Countless Success Stories.",
  footerRight: "Partnering in Progress. Committed to Excellence.",
};

export const heroContent = {
  tagline: brand.tagline,
  headline: brand.headline,
  experience: brand.experience,
  subheadline:
    "Trusted among Electrical Engineering companies in UAE for Power Quality Solutions, Active Harmonic Filter supply, Energy Audit, and Electrical Engineering Services across Dubai and the region.",
};

export const aboutContent = {
  title: "Welcome to DES",
  intro:
    "Welcome to DES — with 20+ years of experience, your trusted partner for Power Quality Solutions, Energy Audit, and network testing with specialized engineering support.",
  description:
    "At DES, we provide comprehensive Electrical Engineering Services that enhance efficiency and reliability. From Active Harmonic Filter manufacturing and Capacitor Bank supply to Relay Coordination Study, Arc Flash Study, Busduct Testing, Thermal Imaging Inspection, and authority compliance support — we help your operations run safely with less downtime.",
  specialties: [
    "Power Quality Audit and Solutions",
    "Energy Audit and Chilled Water System Optimization",
    "Testing and Troubleshooting Network",
  ],
  vision:
    "To optimize the electrical industry by delivering cutting-edge solutions that enhance the health and reliability of electrical networks, ensuring sustainable energy for generations to come.",
  mission:
    "To manufacture high quality Capacitors, Reactors, and Active Harmonic Filter Panels, and deliver advanced Harmonics Study & Analysis, Power Quality Audits, Reactive Energy Management, and Delta T HVAC Control Solutions — enabling clients to achieve compliance, efficiency, and electrical stability.",
  values: [
    "Engineering Excellence – Precision built products designed for performance and durability.",
    "Innovation in Power Quality – Advanced harmonic mitigation technologies",
    "Customer Centric Delivery – Fast turnaround, reliable support, and tailored solutions",
    "Safety & Reliability – Products engineered for stable, long term operation.",
    "Local Manufacturing Commitment – Precision quality solutions with faster delivery.",
  ],
};

export const coreValues = [
  {
    title: "Harmonics & Power Quality",
    subtitle: "Audit and mitigation solutions",
    icon: "shield",
  },
  {
    title: "Reactive Energy Management",
    subtitle: "Capacitor banks and APFC panels",
    icon: "gear",
  },
  {
    title: "Delta T Energy Efficiency",
    subtitle: "Smart HVAC control systems",
    icon: "leaf",
  },
  {
    title: "Thermal & Thermography Audit",
    subtitle: "LV Switchgear and Power Busbar troubleshoot",
    icon: "target",
  },
  {
    title: "Optimized Performance",
    subtitle: "Electrical Network performance optimization",
    icon: "chart",
  },
] as const;

export const servicesContent = {
  title: "Electrical Engineering Services",
  subtitle:
    "Thermal testing, engineering studies, Electrical Audit, Energy Audit, Relay Coordination Study, Arc Flash Study, Busduct Testing, Thermal Imaging Inspection, and Earth Leakage Audit — delivered for industrial and commercial facilities.",
  categories: [
    {
      id: "thermal-testing",
      title: "Thermal Testing",
      description:
        "Hands-on thermal and electrical testing to verify network health, equipment readiness, and safe operating conditions — including Busduct Testing and Thermal Imaging Inspection support.",
      items: [
        {
          title: "Dark-Hour Test",
          description:
            "Assess electrical network behaviour during low-load or off-peak hours to identify hidden losses, idle risks, and operating anomalies.",
        },
        {
          title: "Capacitor Bank Test",
          description:
            "Verify capacitor bank health, switching performance, and Power Factor Correction effectiveness for stable reactive support.",
        },
        {
          title: "UPS Load / Unload Test",
          description:
            "Validate UPS transfer, load acceptance, and unload response to ensure backup power reliability during critical operations.",
        },
        {
          title: "Battery Test",
          description:
            "Evaluate battery capacity, discharge behaviour, and backup readiness to prevent unexpected power interruption.",
        },
        {
          title: "Switchgear Test",
          description:
            "Inspect and test LV switchgear performance, protection response, and connection integrity for safer network operation.",
        },
        {
          title: "Earth Testing",
          description:
            "Measure earthing system effectiveness to improve fault clearance, personnel safety, and equipment protection.",
        },
        {
          title: "Loop Impedance Test",
          description:
            "Check earth fault loop impedance to confirm protective devices can clear faults within safe operating limits.",
        },
        {
          title: "LV Test",
          description:
            "Comprehensive low-voltage system testing to verify insulation, continuity, and overall electrical network readiness.",
        },
        {
          title: "Earth Leakage Test",
          description:
            "Detect leakage currents linked to Earth Leakage Audit findings — reducing shock risk, nuisance trips, and energy waste.",
        },
        {
          title: "Network Imbalance Test",
          description:
            "Identify phase imbalance and load distribution issues that reduce efficiency and increase equipment heating risk.",
        },
        {
          title: "Busduct Testing",
          description:
            "Inspect busduct and busbar systems to detect hotspots, joint issues, and reliability risks before failure occurs.",
        },
        {
          title: "Thermal Imaging Inspection",
          description:
            "Infrared Thermal Imaging Inspection of switchgear and connections to forecast risk and guide preventive maintenance.",
        },
      ],
    },
    {
      id: "engineering-studies",
      title: "Engineering Studies & Analysis",
      description:
        "Engineering studies covering Power Quality Solutions, Relay Coordination Study, Arc Flash Study, Electrical Audit, Energy Audit, Reactive Power Compensation, and mathematical modeling & simulation.",
      items: [
        {
          title: "Harmonics and Power Quality Audits",
          description:
            "Measure harmonics and disturbances to strengthen Power Quality Solutions with clear mitigation recommendations.",
        },
        {
          title: "Relay Coordination Study",
          description:
            "Relay Coordination Study to improve protection selectivity, reduce nuisance trips, and keep healthy circuits online.",
        },
        {
          title: "Arc Flash Study",
          description:
            "Arc Flash Study to quantify incident energy, guide PPE planning, and improve electrical workplace safety.",
        },
        {
          title: "Electrical Audit",
          description:
            "Electrical Audit of network condition and risks with prioritized corrective actions for operations teams.",
        },
        {
          title: "Energy Audit",
          description:
            "Energy Audit support for facilities seeking measurable savings — practical recommendations from energy audit specialists.",
        },
        {
          title: "Earth Leakage Audit",
          description:
            "Earth Leakage Audit to locate leakage paths, improve safety, and reduce unexplained protection trips.",
        },
        {
          title: "Reactive Power Compensation",
          description:
            "Reactive Power Compensation analysis and design to cut penalties and stabilize voltage profiles.",
        },
        {
          title: "Mathematical Modeling & Simulation",
          description:
            "Build accurate electrical models to simulate network behaviour before implementing upgrades or mitigation solutions.",
        },
        {
          title: "Design Calculation for Harmonic Mitigation, Sag/Swell Correction, Unbalance",
          description:
            "Engineering calculations for harmonic mitigation, voltage sag/swell correction, and unbalance control.",
        },
        {
          title: "Load Un-balance Calculation",
          description:
            "Calculate and correct load unbalance to reduce losses, overheating, and uneven phase loading in LV systems.",
        },
        {
          title: "Transient Calculations / Simulation",
          description:
            "Analyse switching and fault transients to protect equipment and improve coordination across electrical networks.",
        },
        {
          title: "Authority Compliance Support",
          description:
            "Technical documentation and study inputs to support authority compliance and project approval readiness.",
        },
      ],
    },
  ],
};

export const clientBenefits = [
  { title: "Enhanced System Reliability", icon: "shield" },
  { title: "Optimized Performance & Efficiency", icon: "chart" },
  { title: "Reduced Losses & Costs", icon: "cost" },
  { title: "Safety & Risk Reduction", icon: "safety" },
  { title: "Compliance with Global Standards", icon: "compliance" },
] as const;

export const solutionsContent = {
  title: "Power Quality Solutions",
  subtitle:
    "Active Harmonic Filter Manufacturer and Capacitor Bank Manufacturer offerings — Harmonic Filter Supplier products, Power Factor Correction systems, and Chiller plant manager solutions for industrial networks.",
  intro:
    "DES manufactures and supplies precision Power Quality Solutions: Active Harmonic Filter systems, the best capacitor banks for demanding loads, Capacitor bank supplier packages, Auto-PFC Controllers, Compact APFC Panels, Hybrid Systems, and Chiller plant manager supplier options that improve efficiency and network reliability.",
  categories: [
    {
      id: "capacitors",
      title: "Capacitors & Capacitor Banks",
      description:
        "Capacitor Bank Manufacturer quality for Power Factor Correction — trusted Capacitor bank supplier options and best capacitor banks for industrial and commercial facilities.",
      items: [
        "Capacitors",
        "Capacitor Banks and Compact APFC Panels",
        "Best capacitor banks for industrial loads",
      ],
    },
    {
      id: "reactors",
      title: "Reactors",
      description:
        "Detuned and application-specific reactors that protect capacitor banks, limit inrush, and support Harmonic Filter and Power Factor Correction installations.",
      items: ["Reactors"],
    },
    {
      id: "controllers",
      title: "Auto-PFC Controller",
      description:
        "Automatic Power Factor Correction controllers that monitor load conditions and switch capacitor stages for efficient Reactive Power Compensation.",
      items: ["Auto-PFC Controller"],
    },
    {
      id: "filters",
      title: "Active Harmonic Filter",
      description:
        "Active Harmonic Filter Manufacturer designs and Active harmonic filter suppliers support — Harmonic Filter Supplier range plus Customize Filters for site-specific mitigation.",
      items: [
        "Active Harmonic Filter",
        "Harmonic Filters",
        "Customize Filters",
      ],
    },
    {
      id: "panels",
      title: "Panels, Hybrid Systems & CPM",
      description:
        "Low Voltage Capacitors, Reactors and Controllers, Hybrid Systems, and Chiller plant manager supplier solutions for monitoring and energy performance.",
      items: [
        "Low Voltage Capacitors, Reactors and Controllers",
        "Hybrid Systems",
        "Chiller plant manager systems",
      ],
    },
  ],
};

export const contactInfo = {
  location: "Dubai, UAE",
  phone: "+971 55-366-5458",
  email: "info@dyotaes.com",
  website: "www.dyotaes.com",
  linkedin: "https://www.linkedin.com/company/dyotaes/",
};
