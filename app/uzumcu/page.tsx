import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutSection from "./_components/AboutSection";
import EquipmentSection from "./_components/EquipmentSection";
import ProductCatalog from "./_components/ProductCatalog";
import SuccessSection from "./_components/SuccessSection";
import InnovationSection from "./_components/InnovationSection";
import NewsSection from "./_components/NewsSection";
import HelpSection from "./_components/HelpSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProductCatalog />
      <AboutSection />
      <EquipmentSection />
      <SuccessSection />
      <InnovationSection />
      <NewsSection />
      <HelpSection />
      <Footer />
    </main>
  );
}

