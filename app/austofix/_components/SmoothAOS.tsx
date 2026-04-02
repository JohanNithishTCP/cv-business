"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";

export default function SmoothAOS() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });

    AOS.init({
      duration: 800,
      once: false, // repeat animation
      mirror: true, // animate when scrolling up also
      easing: "ease-in-out",
    });

    lenis.on("scroll", () => {
      AOS.refreshHard();
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}
