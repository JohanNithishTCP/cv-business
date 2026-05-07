"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosInit = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: 'ease-out-cubic',
      duration: 1000,
      offset: 100,
    });
  }, []);

  return null;
};
