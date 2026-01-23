import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Almas Group's comprehensive range of international trade services including import-export, logistics, customs clearance, business consulting, and global sourcing.",
  keywords: [
    "Import Export Services",
    "International Trading",
    "Logistics Services",
    "Supply Chain Management",
    "Customs Clearance",
    "Business Consulting",
    "Global Sourcing",
    "Trade Documentation",
  ],
  openGraph: {
    title: "Services | Almas Group - Complete Trade Solutions",
    description:
      "From import-export to logistics and consulting, discover how our services can help your business succeed globally.",
    url: "https://almasgroup.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
