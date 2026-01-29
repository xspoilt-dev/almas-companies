import { Metadata } from "next";
import ImportProductsContent from "./ImportProductsContent";

export const metadata: Metadata = {
  title: "Import Products | Almas Group",
  description: "Explore our wide range of import products including grains, animal feed, textiles, polymers, and more. Quality assured international commodities.",
};

export default function ImportProductsPage() {
  return <ImportProductsContent />;
}
