import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ProductsSection from "./_components/ProductsSection";
import AboutSection from "./_components/AboutSection";
import DiscoverSection from "./_components/DiscoverSection";
import UpgradeBanner from "./_components/UpgradeBanner";
import OurProductsSection from "./_components/OurProductsSection";
import TrainingSection from "./_components/TrainingSection";
import TestimonialSection from "./_components/TestimonialSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <ProductsSection />
        <AboutSection />
        <DiscoverSection />
        <UpgradeBanner />
        <OurProductsSection />
        <TrainingSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
}
