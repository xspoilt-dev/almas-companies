import { Metadata } from "next";
import CompaniesContent from "./CompaniesContent";

export const metadata: Metadata = {
  title: "Our Companies",
  description:
    "Explore the diverse portfolio of companies under Almas Group, spanning trading, logistics, manufacturing, warehousing, real estate, and retail sectors.",
  keywords: [
    "Almas Group Companies",
    "Trading Company",
    "Logistics Company",
    "Manufacturing",
    "Warehousing Solutions",
    "Business Portfolio",
  ],
  openGraph: {
    title: "Our Companies | Almas Group Business Portfolio",
    description:
      "Discover the diverse businesses operating under the Almas Group umbrella across multiple industries.",
    url: "https://almas-companies.com/companies",
  },
};

export default function CompaniesPage() {
  return <CompaniesContent />;
}
