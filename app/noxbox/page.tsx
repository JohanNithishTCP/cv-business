"use client";

import AboutSection from "./_components/AboutSection";
import { AOSInit } from "./_components/AOSInit";
import Footer from "./_components/Footer";
import GetInTouch from "./_components/GetinTouch";
import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import ProductsSection from "./_components/ProductSection";
import PurposeSection from "./_components/PurposeSection";
import StayUpdated from "./_components/StayUpdated";
import SupportSection from "./_components/SupportSection";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {

  AOSInit();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,   // scroll speed
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // easing curve
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
    <main className="relative w-full min-h-screen overflow-hidden">

      <Navbar />

      <HeroSection />


      {/* Dummy Section for Scroll */}
      {/* <section className="h-screen bg-white" /> */}
      <AboutSection />
      <ProductsSection />
      <SupportSection />
      <PurposeSection />
      <GetInTouch />
      <StayUpdated />
      <Footer />
    </main>
  );
}