"use client";

import React, { useState } from "react";
import { Award, Globe, HeadphonesIcon, Users, ShieldCheck, HeartPulse } from "lucide-react";
import SectionHeader from "./SectionHeader";

const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/short_clips/adavnced_esu_400_short_clip_01.webm",
    "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/short_clips/adavnced_esu_400_short_clip_02.webm",
    "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/short_clips/adavnced_esu_400_short_clip_03.webm",
];

const items = [
    {
        icon: "/advanced-instruments/images/quality.png",
        label: "Premium Quality",
        description: "Built for international standards",
    },
    {
        icon: "/advanced-instruments/images/support.png",
        label: "Expert Support",
        description: "Strong technical assistance",
    },
    {
        icon: "/advanced-instruments/images/global.png",
        label: "Global Reach",
        description: "Worldwide distribution network",
    },
    {
        icon: "/advanced-instruments/images/customer.png",
        label: "Customer Focus",
        description: "Smooth and efficient experience",
    }
];

const WhyChooseUs = () => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleVideoEnd = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
    };
    return (
        <section className="py-16 md:py-20 bg-[url('/advanced-instruments/images/why-bg.png')] bg-cover bg-center relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10 items-center">
                <div>
                    <SectionHeader
                        label="Why Choose Us"
                        title="Your Trusted Partner in Healthcare Excellence"
                        light={true}
                    />

                    <div className="space-y-4 mb-8" data-aos="fade-up" data-aos-delay="200">
                        <p className="text-base leading-relaxed text-white!">
                            We are committed to delivering advanced healthcare solutions that seamlessly combine innovation, quality, and reliability. Our products are designed with precision to meet the evolving needs of modern medical environments, ensuring safety, efficiency, and superior performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mt-12">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-6 group"
                                data-aos="fade-up"
                                data-aos-delay={300 + index * 100}
                            >
                                <div className="p-4 rounded-full text-white shadow-inner transition-colors bg-white flex-shrink-0">
                                    <img src={item.icon} alt={item.label} className="w-8 h-8" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white! text-xl font-bold mb-1 tracking-tight">{item.label}</h4>
                                    <p className="text-white! text-sm lg:text-base leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

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
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        ></video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
