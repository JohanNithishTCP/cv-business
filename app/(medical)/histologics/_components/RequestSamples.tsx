"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

export default function RequestSamples() {
    const videoClips = [
        "https://cdn.clinicalvisuals.com/medical/histologics/shortclips/histologics_01.webm",
        "https://cdn.clinicalvisuals.com/medical/histologics/shortclips/histologics_02.webm",
        "https://cdn.clinicalvisuals.com/medical/histologics/shortclips/histologics_03.webm",
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoClips.length);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:gap-16 md:flex-row items-center  overflow-hidden bg-white">
                    {/* Left Text Box */}
                    <div className="w-full md:w-1/2 p-12 md:p-0 flex flex-col justify-center" data-aos="fade-right">
                        <h2 className="text-[27px] font-bold text-[#0073CF] mb-6">
                            Request Product Samples
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                            Experience the quality and precision of our medical devices firsthand.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                            Get your sample pack from Histologics® to evaluate our devices in hand—including SoftBiopsy® and SpiraBrush® CX. Review build quality, ergonomics, and instructions with your clinical team—then choose what fits your workflow.
                        </p>
                        <div>
                            <Button>
                                Request Samples
                            </Button>
                        </div>
                    </div>

                    {/* Right Image Box */}
                    <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[600px] bg-gray-50 flex items-center justify-center border-l border-gray-100" data-aos="fade-left">
                        <video
                            key={currentVideoIndex}
                            src={videoClips[currentVideoIndex]}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    );
}
