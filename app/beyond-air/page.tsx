"use client";

import { useEffect } from "react";
import { AOSInit } from "./components/AOSInit";
import Lenis from "lenis";
import BeyondNavbar from "./components/BeyondNavbar";
import BeyondHero from "./components/BeyondHero";
import BeyondChooseUs from "./components/BeyondChoose";
import BeyondSustain from "./components/BeyondSustain";
import BeyondWhoWe from "./components/BeyondWhoWe";
import BeyondInnovation from "./components/BeyondInnovation";
import BeyondProduct from "./components/BeyondProduct";
import BeyondRespiratory from "./components/BeyondRespiratory";
import BeyondCorporate from "./components/BeyondCorporate";
import BeyondFooter from "./components/BeyondFooter";

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
      <BeyondNavbar/>
      <BeyondHero/>
      <BeyondWhoWe/>
      <BeyondInnovation/>
      <BeyondProduct/>
      {/* <BeyondChooseUs/> */}
      <BeyondSustain/> 
      <BeyondRespiratory/>
      <BeyondCorporate/>
      <BeyondFooter/>
    </main>
  );
}
