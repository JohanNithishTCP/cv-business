import Banner from "./_components/Banner";
import About from "./_components/About";

import Testing from "./_components/Testing";
import Products from "./_components/Products";
import ServicesSection from "./_components/service";
import Support from "./_components/Support";
import Features from "./_components/Features";
import Prevention from "./_components/Prevention";
import Solutions from "./_components/Solutions";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Testing />
      <Products />
      <ServicesSection />
      <Support />
      <Features />
      <Prevention />
      <Solutions />
      <NewsSection />
      <Footer />
    </>
  );
}
