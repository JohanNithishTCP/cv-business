"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import VapoNavbar from "./components/VapoNavbar";
import VapoHero from "./components/VapoHero";
import VapoAbout from "./components/VapoAbout";
import VapoTheraphy from "./components/VapoTheraphy";
import VapoSolutions from "./components/VapoSolutions";
import VapoTeam from "./components/VapoTeam";
import VapoProducts from "./components/VapoProducts";
import VapoMobility from "./components/VapoMobility";
import VapoFooter from "./components/VapoFooter";


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
    <main className="overflow-x-hidden">
      <VapoNavbar/>
      <VapoHero/>
      <VapoAbout/>
      <VapoTheraphy/>
      <VapoSolutions/>
      <VapoTeam/>
      <VapoProducts/>
      <VapoMobility/>
      <VapoFooter/>
    </main>
  );
}
