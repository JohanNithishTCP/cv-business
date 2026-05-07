import HeroSection from "./_components/home/HeroSection";
import AboutSection from "./_components/home/AboutSection";
import AudienceSection from "./_components/home/AudienceSection";
import ProductsSection from "./_components/home/ProductsSection";
import TechnologySection from "./_components/home/TechnologySection";
import BenefitsSection from "./_components/home/BenefitsSection";
import TestimonialSection from "./_components/home/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ProductsSection />
      <TechnologySection />
      <BenefitsSection />
      <TestimonialSection />
    </main>
  );
}
