"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";


const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_01.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_02.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_03.webm",
    "https://cdn.clinicalvisuals.com/medical/tsi/landingpage/tsi_04.webm",
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden flex items-end justify-center"
            data-aos="fade-in"
        >
            {/* Hero Background Placeholder */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Hero Video / Image Placeholder */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <video
                        key={currentVideoIndex}
                        src={bannerVideos[currentVideoIndex]}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="absolute inset-0 w-full h-screen object-cover z-0"
                    ></video>
                </div>
                {/* Overlay gradient */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[1]"></div> */}
            </div>

            {/* Hero Text */}
            <div className="container relative z-20 pb-16 md:pb-24 flex flex-col items-center text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-white! text-2xl md:text-3xl lg:text-[40px] font-semibold max-w-4xl tracking-wide drop-shadow-lg leading-tight"
                >
                    Precision Medical Solutions for Modern Care
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-white/80! mt-4 max-w-4xl text-base md:text-xl! font-normal leading-relaxed"
                >
                    We design high-quality medical equipment focused on innovation, precision, and global standards,
                    delivering reliable solutions for healthcare professionals worldwide.
                </motion.p>
            </div>
        </section>
    );
}
