"use client";

import React, { useState } from "react";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_01.webm",
    "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/landing_page/adavnced_esu_400_02.webm"
];

const Hero = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="bg-black w-full min-h-screen flex flex-col items-center justify-end pb-16 md:pb-24 relative overflow-hidden" data-aos="fade-in">
            {/* Video Background */}
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

            {/* Content overlay */}
            <div className="relative z-10 w-full container mx-auto px-4 md:px-0 text-center max-w-4xl">
                <h1
                    className="text-white! text-3xl md:text-4xl font-extrabold leading-tight mb-6 [text-shadow:4px_4px_8px_rgba(0,0,0,0.8)] tracking-wide "
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Advanced Medical Solutions For Every Healthcare Need
                </h1>

                <p
                    className="text-white! text-base md:text-lg  font-medium leading-relaxed [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    We provide high-quality medical equipment and solutions that support efficient operations and better patient care worldwide with reliability.
                </p>
            </div>
        </section>
    );
};

export default Hero;
