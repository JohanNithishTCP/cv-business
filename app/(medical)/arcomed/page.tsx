import Image from "next/image";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Features from "./_components/Features";
import InnovationSection from "./_components/Innovation";
import ICUSection from "./_components/ICUSection";
import Consumables from "./_components/Consumeables";
import Accessories from "./_components/Accessories";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Features />
      <InnovationSection />
      <ICUSection />
      <Consumables />
      <Accessories />
      <NewsSection />
      <Footer />
    </>
  );
}
