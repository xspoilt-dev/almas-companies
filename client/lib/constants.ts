import {
  FaGlobe,
  FaTruck,
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
    title: "Shipping",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80",
    shortDescription: "Comprehensive maritime shipping solutions for global cargo transportation.",
    fullDescription: "Our shipping services provide reliable maritime transport for your cargo across international waters. We ensure safe, timely delivery of goods with full tracking and comprehensive insurance coverage. From container shipping to specialized cargo handling, we manage every aspect of sea freight.",
    benefits: [
      "Global shipping network",
      "Container and bulk cargo handling",
      "Secure cargo management",
      "Real-time shipment tracking",
      "Comprehensive insurance options",
    ],
  },
  {
    id: 2,
    title: "Ship-Charterer",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    shortDescription: "Professional vessel chartering services for bulk and specialized cargo.",
    fullDescription: "We arrange vessel chartering for businesses requiring dedicated shipping capacity. Our expertise in ship brokerage ensures you get the right vessel at competitive rates. Whether voyage charter or time charter, we handle negotiations and logistics seamlessly.",
    benefits: [
      "Voyage and time charter options",
      "Vessel selection and vetting",
      "Competitive charter rates",
      "Contract negotiation support",
      "Operational coordination",
    ],
  },
  {
    id: 3,
    title: "Custom Clearance (Air, Sea, Land)",
    image: "https://rlinetrans.com/images/banner1.jpg",
    shortDescription: "Expert customs clearance services across all transportation modes.",
    fullDescription: "Navigate complex customs regulations with our comprehensive clearance services. We handle documentation, duties, and compliance for air, sea, and land shipments, ensuring smooth passage through customs checkpoints worldwide with minimal delays.",
    benefits: [
      "Multi-modal customs expertise",
      "Regulatory compliance assurance",
      "Duty optimization strategies",
      "Fast clearance processing",
      "24/7 customs support",
    ],
  },
  {
    id: 4,
    title: "International Freight Forwarder (Air & Sea)",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    shortDescription: "End-to-end freight forwarding solutions for air and ocean cargo.",
    fullDescription: "As a licensed international freight forwarder, we coordinate the movement of your cargo via air and sea routes. Our global network of partners ensures competitive rates, reliable service, and comprehensive cargo management from origin to destination.",
    benefits: [
      "Air and ocean freight solutions",
      "Global carrier partnerships",
      "Competitive freight rates",
      "Cargo consolidation services",
      "End-to-end shipment coordination",
    ],
  },
  {
    id: 5,
    title: "Lighterage Contractor",
    image: "https://skmsbd.com/media/blog_images/post_images/Lighter_Vessel_in_Chittagong.jpeg",
    shortDescription: "Specialized lighterage services for port and harbor cargo operations.",
    fullDescription: "We provide lighterage operations to transfer cargo between vessels and shore facilities. Our fleet of barges and experienced crews handle bulk and breakbulk cargo efficiently in ports, harbors, and anchorages, ensuring smooth cargo operations.",
    benefits: [
      "Port and harbor operations",
      "Barge fleet management",
      "Bulk cargo handling",
      "Ship-to-shore transfers",
      "Anchorage services",
    ],
  },
  {
    id: 6,
    title: "Local Transportation",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    shortDescription: "Reliable inland transportation for domestic cargo distribution.",
    fullDescription: "Our local transportation network ensures efficient movement of goods within domestic markets. From pickup to delivery, we provide reliable trucking services with modern fleet management, real-time tracking, and flexible scheduling to meet your distribution needs.",
    benefits: [
      "Nationwide coverage",
      "Modern fleet management",
      "Real-time GPS tracking",
      "Flexible scheduling options",
      "Dedicated customer support",
    ],
  },
  {
    id: 7,
    title: "Door To Door",
    image: "https://bentranspvtltd.com/wp-content/uploads/2025/09/Door-to-Door-1.jpg",
    shortDescription: "Complete door-to-door logistics solutions for seamless delivery.",
    fullDescription: "Experience hassle-free shipping with our comprehensive door-to-door service. We handle everything from pickup at origin to final delivery at destination, including customs clearance, documentation, and last-mile delivery, ensuring a smooth end-to-end experience.",
    benefits: [
      "Complete end-to-end service",
      "Pickup and delivery coordination",
      "All documentation handled",
      "Customs clearance included",
      "Single point of contact",
    ],
  },
  {
    id: 8,
    title: "Custom Documentation",
    image: "https://cdn.prod.website-files.com/65ae5e2298de9d281214b068/66e5a0608b33955498e1f582_AD_4nXdySA38BPI6QmChAZPBvKijK-BeAjKDXz-9KXUu01CVJqjDU2RS0QYZ4VU8orOK2mNoB6WhtzbsT6olvUtc-gke1GpKEG4xp4E30Pbdhc7iMSHGefDIx0PU9Rz-McIQSRO3_puMtdoQmYBFK_t4FrIKNPuy.png",
    shortDescription: "Professional customs documentation and compliance services.",
    fullDescription: "Our expert team prepares and manages all customs documentation requirements for international shipments. We ensure accuracy, compliance with regulations, and timely submission to avoid delays and penalties, handling everything from commercial invoices to certificates of origin.",
    benefits: [
      "Complete documentation preparation",
      "Regulatory compliance expertise",
      "Electronic filing systems",
      "Certificate management",
      "Audit support services",
    ],
  },
  {
    id: 9,
    title: "Import and Export Documentation",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    shortDescription: "Complete import/export documentation and trade compliance services.",
    fullDescription: "We manage the entire documentation process for import and export operations. From bills of lading to certificates of origin, our team ensures all paperwork is accurate, compliant, and processed efficiently to facilitate smooth international trade transactions.",
    benefits: [
      "Import/export paperwork management",
      "Trade compliance verification",
      "Documentation accuracy guarantee",
      "Digital document management",
      "Regulatory updates and advisories",
    ],
  },
  {
    id: 10,
    title: "Product Sourcing",
    image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=800&q=80",
    shortDescription: "Global product sourcing and supplier management services.",
    fullDescription: "Leverage our extensive global network to source quality products at competitive prices. We identify reliable suppliers, conduct quality inspections, negotiate terms, and manage the entire procurement process to ensure you receive products that meet your specifications.",
    benefits: [
      "Global supplier network",
      "Quality assurance inspections",
      "Competitive price negotiation",
      "Supplier vetting and verification",
      "Sample coordination and approval",
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
  email: "info@almas-companies.com",
  phone: "+8801740768976",
  hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/almasgroup",
  twitter: "https://twitter.com/almasgroup",
  facebook: "https://facebook.com/almasgroup",
} as const;
