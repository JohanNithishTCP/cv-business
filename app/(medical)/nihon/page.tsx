import Hero from "./_components/Hero";
import History from "./_components/History";
import VentilationSection from "./_components/VentilationSection";
import SolutionsSection from "./_components/SolutionsSection";
import TechnologiesSection from "./_components/TechnologiesSection";
import VentilationInfo from "./_components/VentilationInfo";
import ProductsSection from "./_components/ProductsSection";
import ServicePackagesSection from "./_components/ServicePackagesSection";
import TrainingSection from "./_components/TrainingSection";
import NewsletterSection from "./_components/NewsletterSection";

export default function NihonPage() {
  return (
    <main className="relative flex flex-col w-full bg-white ">
      <Hero />
      <History />
      <VentilationSection />
      <SolutionsSection />
      <TechnologiesSection />
      <VentilationInfo />
      <ProductsSection />
      <ServicePackagesSection />
      <TrainingSection />
      <NewsletterSection />
      {/* Add more sections here as needed */}
    </main>
  );
}
