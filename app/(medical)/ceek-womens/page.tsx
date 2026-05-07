"use client";

import Banner from "./_components/Banner";
import About from "./_components/About";
import Vision from "./_components/Vision";
import Product from "./_components/Product";
import BottomVision from "./_components/BottomVision";
import Technology from "./_components/Technology";
import Innovation from "./_components/Innovation";
import Newsletter from "./_components/Newletter";
import Footer from "./_components/Footer";
import AOSInit from "../advanced-instruments/_components/AOSInit";
import { useEffect } from "react";
import Lenis from "lenis";

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
    <>
      <Banner />
      <About />
      <Vision />
      <Product />
      <BottomVision />
      <Technology />
      <Innovation />
      <Newsletter />
      <Footer />
    </>
  );
}
