"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import MedacureNavbar from "./components/MedacureNavbar";
import MedacureHero from "./components/MedacureHero";
import MedacureAbout from "./components/MedacureAbout";
import MedacureProduct from "./components/MedacureProduct";
import MedacureHighlight from "./components/MedacureHighlight";
import MedacureQuality from "./components/MedacureQuality";
import MedacureFeatureTop from "./components/MedacureFeatureTop";
import MedacureFeatureBottom from "./components/MedacureFeatureBottom";
import MedacureSection from "./components/MedacureSection";
import MedacurePartners from "./components/MedacurePartners";
import MedacureFooter from "./components/MedacureFooter";

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
     
    <main id="home">
      <MedacureNavbar/>
      <MedacureHero/>
      <MedacureAbout/> 
      <MedacureProduct/>
      <MedacureHighlight/>
      <MedacureQuality/>
      <MedacureFeatureTop/>
      <MedacureFeatureBottom/>
      <MedacureSection/>
      <MedacurePartners/>
      <MedacureFooter/>
    </main>
  );
}
