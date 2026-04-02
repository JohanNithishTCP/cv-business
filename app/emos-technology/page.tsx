import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import AboutSection from "./_components/AboutSection";
import WhyEmos from "./_components/WhyEmos";
import Banner from "./_components/Banner";
import RepairSection from "./_components/RepairSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <AboutSection />
      <WhyEmos />
      <Banner />
      <RepairSection />
      <Footer />
    </main>
  );
}
