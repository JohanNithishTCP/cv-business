"use client";
import React, { useState } from 'react';

export default function Hero() {
    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/histologics/landingpage/histologics_01.webm",
        "https://cdn.clinicalvisuals.com/medical/histologics/landingpage/histologics_02.webm",
        "https://cdn.clinicalvisuals.com/medical/histologics/landingpage/histologics_03.webm",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative w-full h-screen flex justify-center items-end pb-24 overflow-hidden">
            {/* Background Video Layer */}
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

            {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}

            <div
                className="relative max-w-4xl z-20 container mx-auto text-center text-white"
                data-aos="fade-up"
            >
                <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-xl">
                    Saving Lives Worldwide
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold drop-shadow-xl">
                    with Kylon<sup className="text-2xl md:text-3xl">®</sup> Tissue-Based Devices
                </h2>
            </div>
        </section>
    );
}
