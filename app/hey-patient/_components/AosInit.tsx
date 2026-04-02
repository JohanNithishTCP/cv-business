"use client";

import { useEffect } from "react";
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AosInit = () => {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [pathname]);

    return null;
};
