"use client";
import About from "./_components/About";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import VesperMask from "./_components/VesperMask";
import OurProducts from "./_components/OurProducts";
import EndToEnd from "./_components/EndToEnd";
import Partners from "./_components/Partners";
import LatestProducts from "./_components/LatestProducts";
import WhyDifferent from "./_components/WhyDifferent";
import Testimonials from "./_components/Testimonials";
import Updates from "./_components/Updates";
import Footer from "./_components/Footer";

export default function SunsetHealthcare() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col">
        <div className="bg-[#f2f4f7]">
          <Hero />
          <About />
          <VesperMask />
          <OurProducts />
          <EndToEnd />
          <Partners />
          <LatestProducts />
          <WhyDifferent />
          <Testimonials />
          <Updates />
        </div>
      </main>
      <Footer />
    </div>
  );
}