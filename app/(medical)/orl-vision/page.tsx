"use client";

import About from "./_components/About";
import Application from "./_components/Application";
import Banner from "./_components/Banner";
import Configuration from "./_components/Configuration";
import Expertise from "./_components/Expertise";
import ProductsSection from "./_components/Products";
import WhyChooseUs from "./_components/WhyChooseUs";
import Feature from "./_components/Feature";
import Footer from "./_components/Footer";
import AOSInit from "../mci/_components/AOSInit";
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
    <>
      <Banner />
      <About />
      <Application />
      <WhyChooseUs />
      <ProductsSection />
      <Expertise />
      <Configuration />
      <Feature />
      <Footer />
    </>
  );
}
