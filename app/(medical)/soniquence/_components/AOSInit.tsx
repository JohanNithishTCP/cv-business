"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            once: false,    // Whether animations should happen only once
            easing: "ease-out-cubic", // Default easing for animations
            offset: 115,      // Offset for animation start
        });
    }, []);

    return null;
}
