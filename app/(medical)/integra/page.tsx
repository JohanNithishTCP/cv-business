import Header from "./_components/Header";
import Hero from "./_components/Hero";
import AboutSection from "./_components/AboutSection";
import ServicesSection from "./_components/ServicesSection";
import ESGSection from "./_components/ESGSection";
import HistorySection from "./_components/HistorySection";
import NewsCenterSection from "./_components/NewsCenterSection";
import LatestNewsSection from "./_components/LatestNewsSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans flex flex-col w-full">
      <Header />
      <div className="px-4 lg:px-8 mt-2 mb-10">
        <Hero />
      </div>
      <AboutSection />
      <ServicesSection />
      <ESGSection />
      <HistorySection />
      <NewsCenterSection />
      <LatestNewsSection />
      <Footer />
    </main>
  );
}
