"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SmoothAOS() {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      AOS.init({
        duration: 800,
        once: true,
        mirror: false,
        easing: "ease-in-out",
        offset: 100,
      });
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", () => {
      AOS.refresh();
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
