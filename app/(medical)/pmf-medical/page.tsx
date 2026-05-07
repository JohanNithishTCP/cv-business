import { HeroSection } from "./_components/home/HeroSection";
import { ProductsSection } from "./_components/home/ProductsSection";
import { PatientsSection } from "./_components/home/PatientsSection";
import { CliniciansSection } from "./_components/home/CliniciansSection";
import { AboutUsSection } from "./_components/home/AboutUsSection";
import { NewsSection } from "./_components/home/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ProductsSection />
      <PatientsSection />
      <CliniciansSection />
      <NewsSection />
    </>
  );
}
