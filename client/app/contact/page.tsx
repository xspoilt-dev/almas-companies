import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Almas Group for import-export services, international trading, logistics solutions, and business consulting. We're here to help your business grow globally.",
  keywords: [
    "Contact Almas Group",
    "Trade Inquiry",
    "Import Export Quote",
    "Logistics Contact",
    "Business Consultation",
  ],
  openGraph: {
    title: "Contact Us | Almas Group - Global Trade Partner",
    description:
      "Ready to expand your business globally? Contact our team for personalized trade solutions.",
    url: "https://almas-companies.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
