import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Logistics from "./_components/Logistics";
import Innovation from "./_components/Innovation";
import ProductsFeature from "./_components/ProductsFeature";
import Experience from "./_components/Experience";
import ProductRange from "./_components/ProductRange";
import News from "./_components/News";
import CTA from "./_components/CTA";
import Footer from "./_components/Footer";

export default function KimalHomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* We keep About from earlier as the intro section, then layout the new sections as seen in screenshots */}
        <About />
        <Logistics />
        <Innovation />
        <ProductsFeature />
        <Experience />
        <ProductRange />
        <News />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
