import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://almasgroup.com"),
  title: {
    default: "Almas Group | Global Import Export & Trade Services",
    template: "%s | Almas Group",
  },
  description:
    "Almas Group is a leading import-export company offering international trading, logistics, supply chain solutions, customs clearance, and business consulting services worldwide.",
  keywords: [
    "Import Export Company",
    "Global Trade Services",
    "International Logistics",
    "Supply Chain Solutions",
    "Business Consulting",
    "Export Import Services",
    "Almas Group",
    "International Trading",
    "Customs Clearance",
    "Freight Forwarding",
    "Trade Consulting",
    "Global Sourcing",
  ],
  authors: [{ name: "Almas Group" }],
  creator: "Almas Group",
  publisher: "Almas Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://almasgroup.com",
    siteName: "Almas Group",
    title: "Almas Group | Global Import Export & Trade Services",
    description:
      "Your trusted partner in international trade, logistics, and business consulting. 25+ years of experience serving clients across 50+ countries.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Almas Group - Global Trade Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Almas Group | Global Import Export & Trade Services",
    description:
      "Your trusted partner in international trade, logistics, and business consulting.",
    images: ["/og-image.jpg"],
    creator: "@almasgroup",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://almasgroup.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
