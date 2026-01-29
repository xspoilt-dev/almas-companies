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
  { 
    href: "/products", 
    label: "Products",
    children: [
      { href: "/products/import", label: "Import Products" },
      { href: "/products/export", label: "Export Products" },
    ]
  },
  { href: "/companies", label: "Companies" },
  { href: "/contact", label: "Contact" },
] as const;

export const IMPORT_PRODUCTS = [
  {
    id: 1,
    name: "Corn Gluten Meal (CGM)",
    image: "/images/import/Corn_Gluten_Meal_(CGM)​.jpg",
    description: "High-protein animal feed ingredient derived from corn processing. Rich in protein content, ideal for poultry and livestock nutrition.",
    category: "Animal Feed",
  },
  {
    id: 2,
    name: "Cotton Yarn",
    image: "/images/import/cotton_yarn.jpg",
    description: "Premium quality cotton yarn for textile manufacturing. Available in various counts and specifications for diverse textile applications.",
    category: "Textiles",
  },
  {
    id: 3,
    name: "Fish Meal",
    image: "/images/import/Fish_Meal.jpg",
    description: "Nutrient-rich fish meal for aquaculture and animal feed. High in protein and omega-3 fatty acids for optimal animal growth.",
    category: "Animal Feed",
  },
  {
    id: 4,
    name: "Fish Oil",
    image: "/images/import/Fish_Oil.jpg",
    description: "High-quality fish oil for feed, pharmaceutical, and industrial applications. Rich in essential fatty acids and vitamins.",
    category: "Oils & Fats",
  },
  {
    id: 5,
    name: "HDPE (High-Density Polyethylene)",
    image: "/images/import/HDPE_(High-Density_Polyethylene).jpg",
    description: "Industrial-grade HDPE polymer for manufacturing containers, pipes, and plastic products. Excellent chemical resistance and durability.",
    category: "Polymers",
  },
  {
    id: 6,
    name: "High Tenacity Polyester Filament Yarn",
    image: "/images/import/high_tenacity_polyster_filament_yarn.jpg",
    description: "High-strength polyester yarn for industrial textiles, tire cords, and technical fabrics. Superior tensile strength and dimensional stability.",
    category: "Textiles",
  },
  {
    id: 7,
    name: "Limestone (Food Grade)",
    image: "/images/import/Limestone_(food_frade).jpg",
    description: "Food-grade limestone for poultry feed and calcium supplementation. Essential mineral source for animal nutrition and eggshell quality.",
    category: "Minerals",
  },
  {
    id: 8,
    name: "Maize",
    image: "/images/import/Maize.jpg",
    description: "Premium quality maize for food processing and animal feed. Versatile grain commodity with high energy content.",
    category: "Grains",
  },
  {
    id: 9,
    name: "Sugarcane Molasses",
    image: "/images/import/Sugarcane_molasses.jpg",
    description: "High-quality sugarcane molasses for animal feed and fermentation industries. Rich in minerals and carbohydrates.",
    category: "By-products",
  },
  {
    id: 10,
    name: "Wheat",
    image: "/images/import/wheat.jpg",
    description: "Premium wheat grain for flour milling and food production. High-quality grain meeting international standards.",
    category: "Grains",
  },
  {
    id: 11,
    name: "Wheat Bran",
    image: "/images/import/Wheat_Bran.jpg",
    description: "Nutritious wheat bran for animal feed and food products. Excellent source of fiber and essential nutrients.",
    category: "By-products",
  },
];

export const EXPORT_PRODUCTS = [
  {
    id: 1,
    name: "Grain",
    image: "/images/export/grain.jpg",
    description: "Premium quality grains for international markets. High-grade cereals meeting global food safety standards.",
    category: "Grains",
  },
  {
    id: 2,
    name: "Orange",
    image: "/images/export/orange.jpg",
    description: "Fresh citrus oranges packed with vitamin C. Sweet and juicy fruits sourced from the finest orchards.",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Pomegranate",
    image: "/images/export/POMEGRANATE.jpg",
    description: "Premium pomegranates rich in antioxidants. Fresh, ruby-red arils with exceptional taste and quality.",
    category: "Fruits",
  },
  {
    id: 4,
    name: "Poultry Meal",
    image: "/images/export/Poultry_Meal.jpg",
    description: "High-protein poultry meal for animal feed. Excellent source of amino acids and nutrients for livestock.",
    category: "Animal Feed",
  },
  {
    id: 5,
    name: "Rapeseed Extraction",
    image: "/images/export/Rapeseed_Extraction.jpg",
    description: "Quality rapeseed meal extracted from premium seeds. Ideal for animal nutrition and feed formulation.",
    category: "By-products",
  },
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
    title: "Inland water transport (IWT)",
    image: "https://skmsbd.com/media/blog_images/post_images/Lighter_Vessel_in_Chittagong.jpeg",
    shortDescription: "Specialized inland waterway transport services for efficient cargo movement.",
    fullDescription: "We provide comprehensive inland water transport services using rivers and waterways for efficient cargo movement. Our fleet of vessels and experienced crews handle bulk and breakbulk cargo efficiently through inland water routes, ensuring cost-effective and environmentally friendly transportation.",
    benefits: [
      "River and waterway operations",
      "Vessel fleet management",
      "Bulk cargo handling",
      "Port-to-inland transfers",
      "Eco-friendly transport solutions",
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
    title: "Warehouse Service",
    image: "https://bentranspvtltd.com/wp-content/uploads/2025/09/Door-to-Door-1.jpg",
    shortDescription: "Comprehensive warehousing and storage solutions for your cargo.",
    fullDescription: "Our modern warehouse facilities provide secure storage and distribution solutions for your goods. With state-of-the-art inventory management systems, climate-controlled storage options, and strategic locations, we ensure your cargo is stored safely and efficiently until ready for shipment or distribution.",
    benefits: [
      "Secure storage facilities",
      "Inventory management systems",
      "Climate-controlled options",
      "Strategic locations",
      "Loading and unloading services",
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
  {
    id: 11,
    title: "Bulk Cargo Handling",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    shortDescription: "Professional bulk cargo handling and stevedoring services.",
    fullDescription: "Our specialized bulk cargo handling services ensure efficient loading, unloading, and storage of large-volume shipments. With experienced stevedores, modern equipment, and systematic procedures, we handle grain, coal, ore, and other bulk materials safely and efficiently at ports and terminals.",
    benefits: [
      "Experienced stevedoring teams",
      "Modern cargo handling equipment",
      "Safe loading and unloading",
      "Grain, coal, and ore handling",
      "Port and terminal operations",
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
  { value: "30+", label: "Years Experience" },
  { value: "10+", label: "Countries Served" },
  { value: "100+", label: "Happy Clients" },
  { value: "600+", label: "Shipments Annually" },
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
    subtitle: "30+ years of international trading expertise at your service",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80",
  },
] as const;

export const BUSINESS_CATEGORY = "Commercial and Industrial Raw-materials Supplier" as const;

export const CONTACT_INFO = {
  address: "28, 1 Toyenbee Circular Rd, Dhaka 1000",
  email: "info@almas-companies.com",
  phone: "+8801740768976",
  hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/almas-companies",
  twitter: "https://twitter.com/almasgroup",
  facebook: "https://www.facebook.com/profile.php?id=61587080888872",
} as const;
