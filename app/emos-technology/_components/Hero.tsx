"use client";
import React, { useState } from 'react';

export default function Hero() {
    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/emos/landingpage/emos_01.webm",
        "https://cdn.clinicalvisuals.com/medical/emos/landingpage/emos_02.webm",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative h-[100vh] w-full flex items-end justify-center overflow-hidden bg-black pb-24">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover opacity-80"
                ></video>
                {/* Darken overlay for contrast */}
                <div className="absolute inset-0  z-[1]"></div>
            </div>

            {/* Centered Content Overlay (Responsive) */}
            <div className="relative z-10 text-center text-white px-4 max-w-5xl backdrop-blur-[2px] py-6 rounded-xl">
                <h1
                    data-aos="fade-up"
                    className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 tracking-tight animate-fade-in shadow-black/50 text-shadow-sm"
                >
                    Precision Technology for Modern Medicine
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-sm md:text-base lg:text-lg text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-md"
                >
                    German-engineered rigid and flexible endoscopes, accessories, and components <br className="hidden md:block" />
                    for diverse clinical applications.
                </p>
            </div>
        </section>
    );
}
