"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import InspirationNavbar from "./components/InspirationNavbar";
import InspirationHero from "./components/InspirationHero";
import InspirationAbout from "./components/InspirationAbout";
import InspirationRespiratory from "./components/InspirationRespiratory";
import InspirationHealth from "./components/InspirationHealth";
import InspirationCares from "./components/InspirationCares";
import InspirationProducts from "./components/InspirationProducts";
import InspirationValues from "./components/InspirationValues";
import InspirationInsights from "./components/InspirationInsights";
import InspirationFooter from "./components/InspirationFooter";

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
    <main className="">
      <InspirationNavbar/>
      <InspirationHero/>
      <InspirationAbout/>
      <InspirationRespiratory/>
      <InspirationHealth/>
      <InspirationCares/>
      <InspirationProducts/>
      <InspirationValues/>
      <InspirationInsights/>
      <InspirationFooter/>
    </main>
  );
}
