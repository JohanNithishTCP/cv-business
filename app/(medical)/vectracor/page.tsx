import Banner from "./_components/Banner";
import About from "./_components/About";
import Products from "./_components/Products";
import Features from "./_components/Features";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";
import WhatWeDo from "./_components/WhatWeDo";
import ProductDetails from "./_components/productDetails";
import ClinicalResearch from "./_components/clinicalResearch";
import Software from "./_components/software";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Features />
      <WhatWeDo />
      <ProductDetails />
      <Products />
      <ClinicalResearch />
      <Software />
      <NewsSection />
      <Footer /> 
    </>
  );
}
