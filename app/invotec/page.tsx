"use client";

import AboutSection from "./_components/AboutSection";
import CatalogSection from "./_components/CatalogSection";
import ExpertSection from "./_components/ExpertSection";
import Footer from "./_components/Footer";
import Hero from "./_components/HeaderVideoSection";
import KnowMore from "./_components/KnowMore";
import Navbar from "./_components/Navbar";
import ServicesSection from "./_components/ServiceSection";
import Lenis from "lenis";
import { useEffect } from "react";

export default function Home() {

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
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <CatalogSection />
      <ServicesSection />
      <ExpertSection />
      <KnowMore />
      <Footer />
    </>
  );
}
