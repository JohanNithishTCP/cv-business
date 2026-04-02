"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            easing: "ease-out-cubic",
            offset: 100,
            mirror: true,
        });
    }, []);

    return null;
}
