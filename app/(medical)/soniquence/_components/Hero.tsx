"use client";
import React, { useState } from 'react';

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/soniquence/landing_page/sequence_1.webm",
    "https://cdn.clinicalvisuals.com/medical/soniquence/landing_page/sequence_2.webm",
    "https://cdn.clinicalvisuals.com/medical/soniquence/landing_page/sequence_3.webm",
    "https://cdn.clinicalvisuals.com/medical/soniquence/landing_page/sequence_4.webm",
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="bg-black w-full min-h-screen flex flex-col items-center justify-end pb-16 md:pb-24 relative overflow-hidden">
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
                {/* Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10"></div> */}
            </div>

            <div className="relative z-10 text-left px-4 site-container">
                <h1
                    data-aos="fade-in"
                    data-aos-delay="2500"
                    className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-semibold leading-relaxed tracking-wide [text-shadow:8px_4px_7px_rgba(0,0,0,0.6)]"
                >
                    Delivering Medical, Veterinary, and Dental Practices<br />
                    Industry-Leading SoniqFrequency Surgical Technology
                </h1>
            </div>
        </section>
    );
}

