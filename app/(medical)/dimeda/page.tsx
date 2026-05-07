'use client';


import { useEffect } from "react";
import AOSInit from "../mci/_components/AOSInit";
import About from "./_components/About";
import BannerSlider from "./_components/BannerSlider";
import FeatureOne from "./_components/FeatureOne";
import FeatureTwo from "./_components/FeatureTwo";
import Footer from "./_components/Footer";
import Products from "./_components/Products";
import Standards from "./_components/Standards";
import Subscription from "./_components/Subscription";
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
      <BannerSlider />
      <About />
      <Products />
      <Standards />
      <FeatureOne />
      <FeatureTwo />
      <Subscription />
      <Footer />
    </>
  );
}
