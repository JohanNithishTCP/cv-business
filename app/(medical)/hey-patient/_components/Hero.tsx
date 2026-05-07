"use client";

import React, { useState } from 'react';
import { Button } from './Button';

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/heypatient/video_1.webm"
];

export const Hero = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="py-6">
            <div className="site-container">
                <div className="overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl">
                    <div className="relative w-full h-[600px] md:h-screen bg-black ">
                        {/* Video Background */}
                        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                            <video
                                key={currentVideoIndex}
                                src={bannerVideos[currentVideoIndex]}
                                autoPlay
                                muted
                                loop
                                playsInline
                                onEnded={handleVideoEnd}
                                className="w-full h-full object-cover opacity-80"
                            ></video>
                            {/* Subtle dark gradient at bottom for text readability */}
                            {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div> */}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 z-20 pb-8 md:pb-12" data-aos="fade-up" data-aos-duration="1000">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                                <h1 className="text-xl sm:text-2xl md:text-[32px] font-bold text-white! max-w-2xl mx-auto leading-snug tracking-wide">
                                    Bringing Every Step of the Patient<br className="hidden sm:block" /> Journey Together
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
