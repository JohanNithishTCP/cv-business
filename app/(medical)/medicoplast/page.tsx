"use client";


import { useEffect } from "react";
import Lenis from "lenis";
import { AOSInit } from "./components/AOSInit";
import { NavbarMedico } from "./components/NavbarMedico";
import HeroMedico from "./components/HeroMedico";
import AboutMedico from "./components/AboutMedico";
import ServiceMedico from "./components/ServiceMedico";
import ChooseMedico from "./components/ChooseMedico";
import ProductMedico from "./components/ProductMedico";
import CleanMedico from "./components/CleanMedico";
import FooterMedico from "./components/FooterMedico";
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
    <main className="overflow-x-hidden w-full">
      <NavbarMedico/>
      <HeroMedico/>
      <AboutMedico/>
      <ServiceMedico/>
      <ChooseMedico/>
      <ProductMedico/>
      <CleanMedico/>
      <FooterMedico/>

    </main>
  );
}
