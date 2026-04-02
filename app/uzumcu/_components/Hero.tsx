"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_01.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_02.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_03.webm",
    "https://cdn.clinicalvisuals.com/siteImages/bytech/bytec_04.webm",
];

const heroContent = {
    title: "Innovative Operating Room Solutions by Üzümcü",
    description: "Üzümcü is a global manufacturer of operating room equipment and medical gas systems with over 50 years of experience,\n providing innovative and reliable healthcare solutions to hospitals in more than 100 countries",
};

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
        >
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                ></video>
            </div>

            {/* Hero Content */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="container mx-auto px-4 flex flex-col justify-end h-full w-full text-center text-white pb-24">
                    <div className="relative mx-auto z-20 text-shadow-xl pointer-events-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-2xl md:text-4xl font-bold leading-tight mb-4"
                        >
                            {heroContent.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xs md:text-md lg:text-lg! font-normal opacity-90 max-w-6xl mx-auto leading-relaxed drop-shadow-md"
                        >
                            {heroContent.description}
                        </motion.p>
                    </div>
                </div>
            </div>
        </section >
    );
}
