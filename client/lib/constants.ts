import {
  FaShip,
  FaGlobe,
  FaTruck,
  FaFileAlt,
  FaHandshake,
  FaSearch,
  FaBuilding,
  FaIndustry,
  FaWarehouse,
  FaShoppingCart,
} from "react-icons/fa";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/companies", label: "Companies" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: 1,
    title: "Import & Export Services",
    icon: FaShip,
    shortDescription: "Comprehensive global trade solutions for seamless cross-border transactions.",
    fullDescription: "We facilitate international trade by managing the complete import and export process. Our expertise spans documentation, customs clearance, freight forwarding, and compliance management across multiple countries and trade agreements.",
    benefits: [
      "End-to-end import/export management",
      "Customs clearance expertise",
      "Trade compliance assurance",
      "Competitive shipping rates",
      "Real-time shipment tracking",
    ],
  },
  {
    id: 2,
    title: "International Trading",
    icon: FaGlobe,
    shortDescription: "Strategic partnerships for global market expansion and trade facilitation.",
    fullDescription: "Our international trading division connects buyers and sellers across continents. We leverage our global network to identify opportunities, negotiate favorable terms, and ensure successful transactions in diverse markets.",
    benefits: [
      "Global market access",
      "Trade partner identification",
      "Price negotiation support",
      "Market research and analysis",
      "Risk mitigation strategies",
    ],
  },
  {
    id: 3,
    title: "Logistics & Supply Chain",
    icon: FaTruck,
    shortDescription: "Efficient end-to-end logistics solutions optimizing your supply chain.",
    fullDescription: "From warehousing to last-mile delivery, our logistics services ensure your goods move efficiently. We design and manage supply chains that reduce costs, minimize delays, and maximize reliability.",
    benefits: [
      "Multimodal transportation",
      "Warehouse management",
      "Inventory optimization",
      "Distribution network design",
      "Cost-effective solutions",
    ],
  },
  {
    id: 4,
    title: "Customs & Documentation",
    icon: FaFileAlt,
    shortDescription: "Expert handling of all customs procedures and trade documentation.",
    fullDescription: "Navigate complex customs regulations with confidence. Our team handles all documentation requirements, ensures regulatory compliance, and expedites clearance processes to keep your goods moving.",
    benefits: [
      "Documentation preparation",
      "Customs brokerage services",
      "Regulatory compliance",
      "Duty optimization",
      "Electronic customs filing",
    ],
  },
  {
    id: 5,
    title: "Business Consulting",
    icon: FaHandshake,
    shortDescription: "Strategic advisory services to accelerate your international growth.",
    fullDescription: "Our consulting team provides strategic guidance for businesses entering or expanding in international markets. We offer market entry strategies, partner identification, and operational optimization to drive success.",
    benefits: [
      "Market entry strategy",
      "Business plan development",
      "Partner due diligence",
      "Operational efficiency",
      "Growth acceleration",
    ],
  },
  {
    id: 6,
    title: "Sourcing & Procurement",
    icon: FaSearch,
    shortDescription: "Global sourcing expertise to find quality products at competitive prices.",
    fullDescription: "Leverage our extensive supplier network to source products worldwide. We identify reliable suppliers, negotiate pricing, conduct quality inspections, and manage the procurement process from order to delivery.",
    benefits: [
      "Supplier identification",
      "Quality assurance",
      "Price negotiation",
      "Sample management",
      "Order consolidation",
    ],
  },
] as const;

export const COMPANIES = [
  {
    id: 1,
    name: "Almas Trading Co.",
    icon: FaGlobe,
    description: "International commodity trading and wholesale distribution across global markets.",
    category: "Trading",
  },
  {
    id: 2,
    name: "Almas Logistics",
    icon: FaTruck,
    description: "Comprehensive freight forwarding and supply chain management solutions.",
    category: "Logistics",
  },
  {
    id: 3,
    name: "Almas Industries",
    icon: FaIndustry,
    description: "Manufacturing and industrial production facilities for export-quality goods.",
    category: "Manufacturing",
  },
  {
    id: 4,
    name: "Almas Warehousing",
    icon: FaWarehouse,
    description: "State-of-the-art storage and distribution centers strategically located worldwide.",
    category: "Storage",
  },
  {
    id: 5,
    name: "Almas Properties",
    icon: FaBuilding,
    description: "Commercial real estate development and property management services.",
    category: "Real Estate",
  },
  {
    id: 6,
    name: "Almas Retail",
    icon: FaShoppingCart,
    description: "Consumer goods retail and e-commerce operations serving diverse markets.",
    category: "Retail",
  },
] as const;

export const CORE_VALUES = [
  {
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical standards that build lasting trust.",
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in every service, continuously improving to exceed expectations.",
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and creative solutions to solve complex global trade challenges.",
  },
  {
    title: "Partnership",
    description: "We build collaborative relationships with clients, suppliers, and communities for mutual success.",
  },
] as const;

export const STATS = [
  { value: "25+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "1000+", label: "Happy Clients" },
  { value: "5000+", label: "Shipments Annually" },
] as const;

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Global Import & Export Excellence",
    subtitle: "Connecting businesses across continents with reliable trade solutions",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80",
  },
  {
    id: 2,
    title: "Logistics That Move Your Business",
    subtitle: "Efficient supply chain management for seamless operations",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
  },
  {
    id: 3,
    title: "Your Trusted Trade Partner",
    subtitle: "25+ years of international trading expertise at your service",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80",
  },
] as const;

export const CONTACT_INFO = {
  address: "28, 1 Toyenbee Circular Rd, Dhaka 1000",
  email: "arman@almas-companies.com",
  phone: "+8801740768976",
  hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/almasgroup",
  twitter: "https://twitter.com/almasgroup",
  facebook: "https://facebook.com/almasgroup",
} as const;
