"use client";

import React, { useState } from 'react';

export default function HeroSection() {
    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/sleepnet/landingpage/sleepnet_01.webm",
        "https://cdn.clinicalvisuals.com/medical/sleepnet/landingpage/sleepnet_02.webm",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative h-screen min-h-[600px] w-full flex items-end justify-center overflow-hidden bg-black pb-24 lg:pb-32">
            {/* Background Video Layer */}
            <div className="absolute inset-0 z-0">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-cover"
                ></video>

            </div>

            {/* Centered Content Overlay (Responsive) positioned at bottom */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
                <h1
                    className="text-5xl md:text-6xl font-light tracking-tight mb-4 drop-shadow-md"
                    data-aos="fade-up"
                >
                    Breathe Easier. <span className="text-secondary font-semibold">Live Better.</span>
                </h1>
                <p
                    className="text-white/90 text-lg md:text-xl font-light max-w-2xl text-center drop-shadow-md"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    At Sleepnet<sup className="text-sm">®</sup> we believe in building high-quality<br /> respiratory products that help people lead healthier lives.
                </p>
            </div>
        </section>
    );
}
