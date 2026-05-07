"use client";

import { useState } from "react";
import { ChevronRight, ChevronsDown } from "lucide-react";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/integralife/landingpage/integralife_01.webm",
    "https://cdn.clinicalvisuals.com/medical/integralife/landingpage/integralife_02.webm"
];

export default function Hero() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative w-full h-screen rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-xl">
            {/* Video Background */}
            <div className="absolute inset-0 bg-[#011B55]">
                <video
                    key={currentVideoIndex}
                    src={bannerVideos[currentVideoIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* Dark gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#011B55]/80 via-[#023399]/50 to-transparent z-10" /> */}
            </div>

            {/* Content */}
            <div className="relative z-20 w-full px-6 md:px-12 flex items-center justify-between">
                {/* Text Area */}
                {/* <div data-aos="fade-up" data-aos-delay="200" className="flex-1 px-8 md:px-16 max-w-2xl text-left">
                    <h1 className="text-4xl md:text-[44px] font-bold leading-[1.2] text-white mb-6 tracking-tight drop-shadow-2xl">
                        Purpose In Motion: Turning<br />
                        Integrity into Impact
                    </h1>
                    <p className="text-[13px] md:text-sm text-white/90 leading-relaxed mb-8 max-w-lg">
                        Whether running a race, volunteering, or ensuring the highest standards in
                        compliance, Alyse Phillips, senior compliance specialist, reflects on what it
                        means to live our purpose
                    </p>

                    <button className="group pl-5 pr-1.5 py-1.5 rounded-full bg-[#43C056] hover:bg-[#38A849] text-white text-[13px] font-semibold flex items-center gap-3 transition-all shadow-md w-fit">
                        Search Specialist
                        <span className="w-6 h-6 rounded-full bg-white text-[#43C056] flex items-center justify-center group-hover:bg-zinc-50 transition-colors shadow-sm">
                            <ChevronRight className="w-4 h-4 ml-0.5" strokeWidth={3} />
                        </span>
                    </button>
                </div> */}
            </div>


        </section>
    );
}
