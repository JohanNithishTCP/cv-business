"use client";

import Image from "next/image";
import { AOSInit } from "./_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import ProductServices from "./_components/ProductServices";
import CompanySection from "./_components/CompanySection";
import WhyChooseUs from "./_components/ChooseUs";
import ProductCategories from "./_components/ProductCategories";
import TeamSection from "./_components/TeamSection";
import EmployerSection from "./_components/EmployerSection";
import Footer from "./_components/Footer";

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
      <div className="bg-gray-100">
        <ProductServices/>
        <CompanySection/>
        <WhyChooseUs/>
        <ProductCategories/>
        <TeamSection/>
        <EmployerSection/>
        <Footer/>
      </div>
    </main>
  );
}
