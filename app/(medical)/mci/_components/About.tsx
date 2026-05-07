"use client";

import React from "react";
import { Target, Eye, Diamond, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Button from "./Button";

const About = () => {
    const cards = [
        {
            title: "Mission",
            description: "Advance patient care with innovative, trusted medical devices built through global collaboration.",
            icon: Target,
        },
        {
            title: "Vision",
            description: "Be a global leader in medical devices, known for innovation, quality, and improving patient outcomes.",
            icon: Eye,
        },
        {
            title: "Values",
            description: "Teamwork, responsibility, agility, innovation, and a strong commitment to continuous improvement.",
            icon: Diamond,
        }
    ];

    return (
        <section className="py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Image Placeholder */}
                    <div className="relative lg:col-span-6" data-aos="fade-right">
                        <div className="rounded-lg overflow-hidden bg-white shadow-sm flex items-center justify-center border border-gray-100 max-h-[800px]">
                            <img src="/mci/images/abt.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-6 lg:col-span-6" data-aos="fade-left">
                        <SectionHeader
                            subtitle="About Us"
                            title="Innovative Solutions, Life-Changing Results Through Advanced Medical Technology"
                        />
                        <p className="text-gray-500 text-sm leading-relaxed font-medium text-justify">
                            Founded in 2014, MCI (Medical Concept Innovation inc.) entered the market bringing technological solutions to the medical device sector. Immersed in an environment constantly evolving with innovation, MCI has resources that strengthen our strategic capabilities and drive the development of increasingly efficient and competitive solutions. Headquartered in Sunrise, Florida, MCI is an American company with a global presence, offering high-quality and reliable systems.
                        </p>

                        <p className="text-[#1a2350] font-bold text-[16px] md:text-lg">
                            Driven by innovation, guided by responsibility, and committed to better healthcare
                        </p>

                        {/* Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-4 pt-4">
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    data-aos="fade-up"
                                    data-aos-delay={idx * 100}
                                    className="p-6 rounded-xl bg-white border border-blue-100 shadow-sm flex flex-col items-center text-center space-y-4"
                                >
                                    <div className="w-12 h-12 rounded-full border-2 border-[#2b4d91] flex items-center justify-center text-[#2b4d91]">
                                        <card.icon size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-[#1a2350]">{card.title}</h3>
                                        <p className="text-[12px] md:text-xs text-gray-500 leading-relaxed font-medium">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Button */}
                        <div className="pt-6">
                            <Button text="Know More About Us" variant="primary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
