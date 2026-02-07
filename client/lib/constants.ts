import {
  FaGlobe,
  FaTruck,
  FaBuilding,
  FaIndustry,
  FaWarehouse,
  FaShoppingCart,
  FaSeedling,
  FaFlask,
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
  {
    id: 12,
    name: "Grain",
    image: "/images/export/grain.jpg",
    description: "Premium quality grains for international markets. High-grade cereals meeting global food safety standards.",
    category: "Grains",
  },
  {
    id: 13,
    name: "Orange",
    image: "/images/export/orange.jpg",
    description: "Fresh citrus oranges packed with vitamin C. Sweet and juicy fruits sourced from the finest orchards.",
    category: "Fruits",
  },
  {
    id: 14,
    name: "Pomegranate",
    image: "/images/export/POMEGRANATE.jpg",
    description: "Premium pomegranates rich in antioxidants. Fresh, ruby-red arils with exceptional taste and quality.",
    category: "Fruits",
  },
  {
    id: 15,
    name: "Poultry Meal",
    image: "/images/export/Poultry_Meal.jpg",
    description: "High-protein poultry meal for animal feed. Excellent source of amino acids and nutrients for livestock.",
    category: "Animal Feed",
  },
  {
    id: 16,
    name: "Rapeseed Extraction",
    image: "/images/export/Rapeseed_Extraction.jpg",
    description: "Quality rapeseed meal extracted from premium seeds. Ideal for animal nutrition and feed formulation.",
    category: "By-products",
  },
  {
    id: 17,
    name: "Shoe Accessories",
    image: "/images/import/Shoe_Accessories.jpg",
    description: "High-quality shoe components and accessories for footwear manufacturing. Premium materials for durable and stylish footwear.",
    category: "Accessories",
  },
  {
    id: 18,
    name: "Shoe Mould",
    image: "/images/import/shoe_mould.jpg",
    description: "Precision-engineered shoe moulds for footwear production. Durable and accurate moulds for consistent quality manufacturing.",
    category: "Manufacturing Tools",
  },
];

export const EXPORT_PRODUCTS = [
  {
    id: 1,
    name: "Potato",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&q=80",
    description: "Fresh Bangladeshi potatoes. Available season: December to March. High-quality produce for international markets.",
    category: "Vegetables",
  },
  {
    id: 2,
    name: "Cabbage",
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=800&q=80",
    description: "Fresh cabbage from Bangladesh. Season: October to February. Crisp and nutritious for export.",
    category: "Vegetables",
  },
  {
    id: 3,
    name: "Cauliflower",
    image: "https://images.unsplash.com/photo-1692956706779-576c151ec712?w=800&q=80",
    description: "Premium cauliflower. Season: October to February. Fresh and high-quality for global markets.",
    category: "Vegetables",
  },
  {
    id: 4,
    name: "Carrot",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=800&q=80",
    description: "Fresh carrots from Bangladesh. Season: October to April. Rich in nutrients and perfect for export.",
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Brinjal (Eggplant)",
    image: "https://images.unsplash.com/photo-1730202452902-3b0fa8d96536?w=800&q=80",
    description: "High-quality brinjal (eggplant). Season: October to April. Fresh produce for international buyers.",
    category: "Vegetables",
  },
  {
    id: 6,
    name: "Green Chilli",
    image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=800&q=80",
    description: "Fresh green chilli from Bangladesh. Season: October to April. Spicy and flavorful for export.",
    category: "Vegetables",
  },
  {
    id: 7,
    name: "Teasel Gourd (Kakrol)",
    image: "https://specprodstorage.blob.core.windows.net/spotpics/sp88931_300.jpg",
    description: "Teasel Gourd (Kakrol). Season: May to September. Traditional Bangladeshi vegetable for export markets.",
    category: "Vegetables",
  },
  {
    id: 8,
    name: "Bitter Gourd (Korola)",
    image: "https://images.unsplash.com/photo-1739903760973-4731a8e79a03?w=800&q=80",
    description: "Fresh bitter gourd. Season: May to August. Nutritious vegetable popular in Asian cuisine.",
    category: "Vegetables",
  },
  {
    id: 9,
    name: "Bottle Gourd (Laow)",
    image: "https://images.unsplash.com/photo-1730127487636-b7fe550af030?w=800&q=80",
    description: "Bottle Gourd (Laow). Season: October to February. Fresh and healthy for global markets.",
    category: "Vegetables",
  },
  {
    id: 11,
    name: "Tomato",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=800&q=80",
    description: "Fresh Bangladeshi tomatoes. Year-round availability. Premium quality for export markets.",
    category: "Vegetables",
  },
  {
    id: 12,
    name: "Crab",
    image: "/images/export/crab.jpg",
    description: "Fresh crabs from Bangladesh coastal waters. Rich in protein and omega-3 fatty acids. Premium quality seafood for international markets.",
    category: "Seafood",
  },
  {
    id: 13,
    name: "Eel Fish",
    image: "/images/export/eil_fish.jpg",
    description: "High-quality eel fish from Bangladesh waters. Rich in vitamins and minerals. Fresh catch for global seafood markets.",
    category: "Seafood",
  },
  {
    id: 14,
    name: "Prawn",
    image: "/images/export/prawn.jpg",
    description: "Premium prawns from Bangladesh. Fresh and frozen varieties available. Sustainably sourced for export to international markets.",
    category: "Seafood",
  },
  {
    id: 15,
    name: "Shrimp",
    image: "/images/export/Shrimp.jpg",
    description: "High-quality shrimp processed to international standards. Fresh and frozen options. Bangladesh's finest seafood export.",
    category: "Seafood",
  },
  {
    id: 16,
    name: "Tilapia",
    image: "/images/export/tilapia.jpg",
    description: "Farm-raised tilapia from Bangladesh. High protein, low fat fish. Fresh and processed for global markets.",
    category: "Seafood",
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
    name: "ALMAS BANGLADESH LIMITED",
    icon: FaGlobe,
    description: "International commodity trading and wholesale distribution across global markets.",
    category: "Trading",
  },
  {
    id: 2,
    name: "ALMAS BROTHERS",
    icon: FaTruck,
    description: "Comprehensive freight forwarding and supply chain management solutions.",
    category: "Logistics",
  },
  {
    id: 3,
    name: "ALMAS ENTERPRISE",
    icon: FaIndustry,
    description: "Manufacturing and industrial production facilities for export-quality goods.",
    category: "Manufacturing",
  },
  {
    id: 4,
    name: "ALMAS RETAIL CENTER",
    icon: FaShoppingCart,
    description: "Consumer goods retail and e-commerce operations serving diverse markets.",
    category: "Retail",
  },
  {
    id: 5,
    name: "AGRO DIAMOND BANGLADESH LIMITED",
    icon: FaSeedling,
    description: "Agricultural products and agro-based industrial solutions for sustainable farming.",
    category: "Agriculture",
  },
  {
    id: 6,
    name: "INOTECH BIOSCINCE COMPANY LIMITED",
    icon: FaFlask,
    description: "Biotechnology and life sciences research for innovative healthcare solutions.",
    category: "Bioscience",
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
] as const;

export const BUSINESS_CATEGORY = "Commercial and Industrial Raw-materials Supplier" as const;

export const CONTACT_INFO = {
  address: "28, 1 Toyenbee Circular Rd, Dhaka 1000",
  email: "info@almas-companies.com",
  phone: "+8801712184118",
  hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/almas-companies",
  twitter: "https://twitter.com/almasgroup",
  facebook: "https://www.facebook.com/profile.php?id=61587080888720",
} as const;
