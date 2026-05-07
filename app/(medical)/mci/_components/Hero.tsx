"use client";

import React, { useState } from "react";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/mci/landing_page/mci_01.webm",
    "https://cdn.clinicalvisuals.com/medical/mci/landing_page/mci_02.webm"
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden flex items-end justify-center"
        >
            {/* Hero Background */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Hero Video */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
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
                {/* Dark Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[1]"></div> */}
            </div>

            {/* Hero Text - Positioned at bottom as per image */}
            <div className="container mx-auto px-6 md:px-12 relative z-20 pb-20 md:pb-28 flex flex-col items-center text-center">
                <h1
                    className="text-white! text-3xl md:text-4xl lg:text-5xl font-semibold max-w-4xl tracking-wide drop-shadow-lg"
                >
                    Innovating Medical Devices for Better Outcomes
                </h1>
                <p
                    className="text-white! mt-6 max-w-5xl text-sm md:text-base lg:text-lg font-normal leading-relaxed"
                >
                    We design and manufacture advanced medical solutions with a focus on precision, quality, and innovation.
                    With global expertise in craniomaxillofacial and neuro fixation systems, we deliver reliable
                    technologies that support healthcare professionals and improve patient care.
                </p>
            </div>
        </section>
    );
}
