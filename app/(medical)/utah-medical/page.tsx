"use client";

import { AOSInit } from "./_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import WhyChoose from "./_components/WhyChoose";
import Specializations from "./_components/Specializations";
import ProductEducation from "./_components/ProductEducation";
import Products from "./_components/Products";
import RegulatoryQuality from "./_components/RegulatorQuality";
import Footer from "./_components/Footer";
import FeaturedProducts from "./_components/FeaturedProducts";


export default function Home() {
  AOSInit();

   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,   // scroll speed
      easing: (t : number) => 1 - Math.pow(1 - t, 3), // easing curve
      smoothWheel: true,
      syncTouch: true,
      gestureOrientation: 'vertical',
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main>
      <Navbar/>
      <Hero/>
        {/* <div className="h-17.5" /> */}
         {/* Dummy content for scroll testing */}
      {/* <div className="h-250 bg-gray-50" /> */}
      <WhyChoose/>
      <Specializations/>
      <ProductEducation/>
      <FeaturedProducts/>
      <Products/>
      <RegulatoryQuality/>
      <Footer/>

    </main>
  );
}
