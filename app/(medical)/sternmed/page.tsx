"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import Navbar from "../arcomed/_components/Navbar";
import SternNavbar from "./components/SternNavbar";
import SternHero from "./components/SternHero";
import SternAbout from "./components/SternAbout";
import SternProduct from "./components/SternProduct";
import SternDecision from "./components/SternDecision";
import SternExpertise from "./components/SternExpertise";
import SternFeatures from "./components/SternFeatures";
import SternExpertCard from "./components/SternExpertCard";
import SternTestimonial from "./components/SternTestimonial";
import SternNews from "./components/SternNews";
import SternFooter from "./components/SternFooter";

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
      <SternNavbar/>
      <SternHero/>
      <SternAbout/>
      <SternProduct/>
      <SternDecision/>
      <SternExpertise/>
      <SternFeatures/>
      <SternExpertCard/>
      <SternTestimonial/>
      <SternNews/>
      <SternFooter/>
    </main>
  );
}
