"use client";

import React from "react";
import { Lightbulb, Leaf } from "lucide-react";
import Button from "./Button";

const features = [
    {
        icon: "optomic/new-product.png",
        title: "Innovation & Production",
        description:
            "Driven by a strong R&D foundation, we develop advanced solutions in collaboration with experts. Our fully integrated production process—from design to final assembly—ensures consistent quality and precision at every stage.",
    },
    {
        icon: "optomic/badge.png",
        title: "Quality & Sustainability",
        description:
            "We adhere to strict European standards with certified quality and environmental systems. Our modern facilities and controlled processes ensure safe, reliable, and eco-friendly medical equipment.",
    },
];

export default function About() {
    return (
        <section className="py-24 bg-white" data-aos="fade-up">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[52%_48%] items-center gap-12 lg:gap-12">
                    {/* Left Side: Image */}
                    <div className="">
                        <div className="rounded-[40px] overflow-hidden bg-[#E8EEF4] aspect-square lg:aspect-[4/3] flex items-center justify-center shadow-2xl relative group">
                            <img
                                src="/optomic/about.jpg"
                                alt="Optomic Specialists at work"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className=" flex flex-col items-start">
                        {/* Section Label */}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-[#333] font-semibold">
                                About Us
                            </span>
                        </div>

                        {/* Subheading */}
                        <h2 className="text-3xl md:text-[30px] font-bold mb-4 leading-[1.15] tracking-tight !text-[#243783]">
                            Solutions designed by specialists for specialists
                        </h2>

                        {/* Body Text */}
                        <div className="text-[#333333] leading-[1.8] mb-5 text-justify">
                            <p>
                                With over 25 years of experience, Optomic specializes in designing, manufacturing, and delivering high-quality medical equipment. Our commitment to innovation, precision, and reliability allows us to meet the evolving needs of healthcare professionals worldwide.
                            </p>
                        </div>

                        {/* Feature Items */}
                        <div className="space-y-10 mb-8 w-full">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-6 group/item">
                                    <div className="w-14 h-14 bg-[#0096D6] rounded-full shadow-lg shadow-[#0096D6]/30 transition-all duration-300 group-hover/item:scale-110 group-hover/item:shadow-[#0096D6]/50 p-2">
                                        <img src={feature.icon} alt={feature.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#1A1A1A] text-[19px] mb-2 tracking-tight group-hover/item:text-[#0096D6] transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-[#666] text-[15.5px] leading-relaxed font-normal">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Button variant="optomic" size="md">
                            Know More About Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
