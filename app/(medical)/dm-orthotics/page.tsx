import TopBar from "./_components/TopBar";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Intro from "./_components/Intro";
import ProductGrid from "./_components/ProductGrid";
import ClinicVideo from "./_components/ClinicVideo";
import CustomRange from "./_components/CustomRange";
import CustomerStories from "./_components/CustomerStories";
import ProductShowcase from "./_components/ProductShowcase";
import KnowledgeHub from "./_components/KnowledgeHub";
import Footer from "./_components/Footer";
import AOSInitializer from "./_components/AOSInitializer";

export default function DMOrthoticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AOSInitializer />
      <TopBar />
      <Header />
      <Hero />
      <Intro />
      <ProductGrid />
      <CustomRange />
      <CustomerStories />
      <ProductShowcase />
      <ClinicVideo />
      <KnowledgeHub />
      <Footer />
    </main>
  );
}
