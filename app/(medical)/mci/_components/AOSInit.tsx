"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true, // Only animate once
            delay: 100,
            offset: 200, // Start animation when element is in view
            mirror: false,
            // Disabling AOS for elements that cause overflow on mobile
            disable: window.innerWidth < 1024 ? 'mobile' : false, // Optional: disable on mobile if too heavy
        });

        // Small delay to ensure all elements are rendered
        const timer = setTimeout(() => {
            AOS.refresh();
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return null;
}
