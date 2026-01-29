"use client";

import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Dynamic import for AnimatedBackground - only loads on client side
const AnimatedBackground = dynamic(
  () => import("@/components/effects/AnimatedBackground"),
  { 
    ssr: false,
    loading: () => null,
  }
);

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </div>
    </>
  );
}
