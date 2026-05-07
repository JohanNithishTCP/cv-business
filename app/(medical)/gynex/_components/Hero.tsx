"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/gynex/landing_page/galileo_colposcope_1.webm",
    "https://cdn.clinicalvisuals.com/medical/gynex/landing_page/galileo_colposcope_2.webm",
    "https://cdn.clinicalvisuals.com/medical/gynex/landing_page/galileo_colposcope_3.webm",
];

const slides = [
    {
        id: 1,
        title: "Providers of high-quality OB/GYN instruments and equipment to customers worldwide.",
        description: "",
    }
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative w-full h-screen overflow-hidden flex items-end justify-center" data-aos="fade-in">
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-screen object-cover z-0"
                ></video>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-black/30 z-[1]"></div>
            </div>

            {/* Hero Text */}
            <div className="container relative z-20 pb-16 md:pb-24 flex flex-col items-center text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="!text-white text-xl md:text-2xl lg:text-4xl font-medium max-w-4xl tracking-wide drop-shadow-lg"
                >
                    Providers of high-quality OB/GYN instruments and equipment to customers worldwide.
                </motion.h1>
            </div>
        </section>
    );
}
