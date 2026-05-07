"use client";

import { useEffect } from "react";
import AOSInit from "../sleepnet/_components/AOSInit";
import Lenis from "lenis";
import LutechNavbar from "./components/LutechNavbar";
import LutechHero from "./components/LutechHero";
import LutechAbout from "./components/LutechAbout";
import LutechProduct from "./components/LutechProduct";
import LutechServices from "./components/LutechServices";
import LutechBenefits from "./components/LutechBenefits";
import LutechFeature from "./components/LutechFeature";
import LutechChoose from "./components/LutechChoose";
import LutechBlog from "./components/LutechBlog";
import LutechFooter from "./components/LutechFooter";

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
      <LutechNavbar/>
      <LutechHero/>
      <LutechAbout/>
      <LutechProduct/>
      <LutechServices/>
      <LutechBenefits/>
      <LutechFeature/>
      <LutechChoose/>
      <LutechBlog/>
      <LutechFooter/>
    </main>
  );
}
 