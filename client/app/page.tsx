import HeroSlider from "@/components/home/HeroSlider";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatsSection from "@/components/home/StatsSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseUs />
      <TrustIndicators />
      <CTASection />
    </>
  );
}
