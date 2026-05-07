"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/gynex/short_cilps /galileo_colposcope_1.webm",
    "https://cdn.clinicalvisuals.com/medical/gynex/short_cilps /galileo_colposcope_2.webm",
    "https://cdn.clinicalvisuals.com/medical/gynex/short_cilps /galileo_colposcope_3.webm",
];

export default function VideoSection() {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Content - Purple Background */}
                <div className="bg-[#7C2B83] text-white p-10 md:p-16 lg:p-24 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight !text-white">
                        Providers of high-quality OB/GYN instruments and equipment to customers worldwide.
                    </h2>
                    <p className="!text-white leading-relaxed !text-[18px] mb-8 text-justify">
                        At Gynex, we specialize in providing high-quality OB/GYN instruments and equipment to gynecologists and healthcare professionals worldwide. With a strong commitment to precision, reliability, and innovation, our products are designed to support the highest standards of women’s healthcare. From diagnostic tools to surgical instru ments, every item in our catalog is crafted to deliver exceptional performance and durability in clinical settings. We proudly serve  hospitals, private practices, and clinics across the globe, offering fast, dependable shipping and dedicated customer support.
                    </p>

                    <ul className="space-y-4">
                        {[1, 2, 3].map((_, index) => (
                            <li key={index} className="flex items-center gap-3">
                                <CheckCircle2 size={18} className="text-white shrink-0" />
                                <span className="text-[16px] font-medium">Precision-Engineered Instruments for Reliable Performance</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content - 360 Video Placeholder */}
                <div className="bg-[#F4F4F4] min-h-[400px] flex items-center justify-center relative overflow-hidden">
                    <video
                        key={currentVideoIndex}
                        src={bannerVideos[currentVideoIndex]}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
