import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Almas Group, a leading global import-export company with 25+ years of experience in international trade, logistics, and business consulting.",
  keywords: [
    "About Almas Group",
    "Import Export History",
    "International Trade Company",
    "Global Business Partner",
    "Trade Excellence",
  ],
  openGraph: {
    title: "About Almas Group | Global Trade Excellence Since 1999",
    description:
      "Discover our journey, mission, and values. 25+ years of connecting businesses across continents.",
    url: "https://almas-companies.com/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
