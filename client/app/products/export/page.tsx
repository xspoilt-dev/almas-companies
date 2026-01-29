import { Metadata } from "next";
import ExportProductsContent from "./ExportProductsContent";

export const metadata: Metadata = {
  title: "Export Products | Almas Group",
  description: "Discover our export products catalog. Quality Bangladeshi and regional products for global markets.",
};

export default function ExportProductsPage() {
  return <ExportProductsContent />;
}
