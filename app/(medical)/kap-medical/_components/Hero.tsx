"use client";
import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function Hero() {
    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/001.webm",
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/002.webm",
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/003.webm",
        "https://cdn.clinicalvisuals.com/medical/kap/landingpage/004.webm",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };


    return (
        <section className="relative bg-black text-white h-[100vh] items-center justify-center flex overflow-hidden">
            <div className="container ml-0 mr-auto px-4 sm:px-6 lg:px-8 2xl:pl-32 relative z-10 w-full">
                <div className="max-w-2xl" data-aos="fade-right">
                    <div className="bg-[#002B4966] backdrop-blur-sm p-8 rounded-lg border-l-4 border-[#D32F2F] max-w-xl">
                        <h1 className="text-3xl! md:text-4xl! font-bold mb-4 leading-tight text-white!">
                            Precision In Every Procedure
                        </h1>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed text-white!">
                            At KAP Medical we deliver high-performance surgical instruments
                            engineered for accuracy, durability, and uncompromising quality.
                            Trusted by healthcare professionals nationwide, our solutions are
                            designed to enhance clinical outcomes, streamline surgical
                            workflows, and support excellence in every operating room.
                        </p>
                        <Button href="/products" variant="danger">
                            Explore Our Products
                        </Button>
                    </div>
                </div>
            </div>

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
        </section>
    );
}
