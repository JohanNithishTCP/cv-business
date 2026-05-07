"use client";

import React, { useState } from "react";
import { Check, ChevronRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

/**
 * Expertise Section for MCI
 */
const Expertise = () => {

    const bannerVideos = [
        "https://cdn.clinicalvisuals.com/medical/mci/short_clips/mci_short_clip_01.webm",
        "https://cdn.clinicalvisuals.com/medical/mci/short_clips/mci_short_clip_02.webm",
        "https://cdn.clinicalvisuals.com/medical/mci/short_clips/mci_short_clip_03.webm",
    ];
    const listItems = [
        "Integrating cutting-edge technology across every stage of production",
        "Specialized in Craniomaxillofacial (CMF) and Neuro Fixation Systems",
        "Delivering high-quality osteosynthesis solutions with precision and reliability",
        // "Focused on developing implantable devices and disposable surgical instruments",
        // "Committed to innovation, excellence, and improved patient outcomes"
    ];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };

    return (
        <section className="relative py-24 bg-[url('/mci/images/expertice.png')] bg-cover bg-center overflow-hidden">
            {/* Background Abstract Waves */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/20 to-transparent blur-3xl animate-pulse" />
                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="rgba(255,255,255,0.05)" />
                </svg>
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8 text-white" data-aos="fade-right">
                        <div className="space-y-6">
                            <SectionHeader
                                light
                                subtitle="Expertise & Innovation"
                                title="Advanced medical solutions driven by technology, precision, and global collaboration"
                            />

                            <p className="!text-white text-sm md:text-[15px] leading-relaxed font-medium">
                                We combine advanced technology and deep medical expertise to develop high-quality fixation systems and surgical solutions. With a strong focus on precision, innovation, and collaboration with leading surgeons and institutions, we deliver reliable products that meet global standards and improve patient outcomes.
                            </p>
                        </div>

                        {/* Checklist */}
                        <ul className="space-y-4 pt-2">
                            {listItems.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center gap-3 group px-1"
                                >
                                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#0e2a5e] shrink-0">
                                        <Check size={12} strokeWidth={4} />
                                    </div>
                                    <span className="text-base font-medium text-white/90">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <div className="pt-6">
                            <Button text="Learn More Expertise" variant="white" />
                        </div>
                    </div>

                    {/* Right: Image Placeholder */}
                    <div
                        className="relative"
                        data-aos="fade-left"
                    >
                        <div className="aspect-[16/9] p-2 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl relative overflow-hidden flex items-center justify-center">
                            <video
                                key={currentVideoIndex}
                                src={bannerVideos[currentVideoIndex]}
                                autoPlay
                                muted
                                playsInline
                                onEnded={handleVideoEnd}
                                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                            ></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;
