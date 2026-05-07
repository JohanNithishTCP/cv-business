"use client";

import Banner from "./_components/Banner";
import About from "./_components/About";
import ProductOverview from "./_components/ProductOverview";
import Products from "./_components/Products";
import Regulatory from "./_components/Regulatory";
import ProductSpecs from "./_components/ProductSpecs";
import NewsSection from "./_components/NewsSection";
import Footer from "./_components/Footer";
import AOSInit from "../advanced-instruments/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";

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
    <div>
      <Banner />
      <About />
      <ProductOverview />
      <Products />
      <Regulatory />
      <ProductSpecs />
      <NewsSection />
      <Footer />
    </div>
  );
}
