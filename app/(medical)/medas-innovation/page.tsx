"use client";


import { useEffect } from "react";
import Lenis from "lenis";
import AOSInit from "../advanced-instruments/_components/AOSInit";
import MedasNavbar from "./components/MedasNavbar";
import MedasHero from "./components/MedasHero";
import MedasAbout from "./components/MedasAbout";
import MedasProject from "./components/MedasProject";
import MedasHighlight from "./components/MedasHighlight";
import MedasGrid from "./components/MedasGrid";
import MedasFeatures from "./components/MedasFeatures";
import MedasServices from "./components/MedasServices";
import MedasNews from "./components/MedasNews";
import MedasFooter from "./components/MedasFooter";
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

      <MedasNavbar/>
      <MedasHero/>
      <MedasAbout/>
      <MedasProject/>
      <MedasHighlight/>
      <MedasGrid/>
      <MedasFeatures/>
      <MedasServices/>
      <MedasNews/>
      <MedasFooter/>
    </main>
  );
}
