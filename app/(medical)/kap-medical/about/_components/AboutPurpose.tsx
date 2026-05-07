"use client";
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPurpose() {
    const sections = [
        {
            title: "Our Mission",
            id: "mission",
            icon: <Target className="text-white" size={28} />,
            image: "images/about/mission.jpg",
            description: "To design and manufacture innovative therapeutic support surfaces and medical electronic solutions that enhance patient outcomes, support caregivers, and uphold the highest standards of quality and safety."
        },
        {
            title: "Our Vision",
            id: "vision",
            icon: <Eye className="text-white" size={28} />,
            image: "images/about/vision.jpg",
            description: "To be a trusted U.S. leader in advanced medical support technologies, recognized for engineering excellence, regulatory integrity, and unwavering commitment to healthcare innovation."
        },
        {
            title: "Our Values",
            id: "values",
            icon: <Heart className="text-white" size={28} />,
            image: "images/about/values.jpg",
            description: "We are committed to advancing healthcare technology through continuous research, thoughtful design, and engineering excellence."
        }
    ];

    return (
        <section className="py-20 lg:py-30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#002B49] mb-4">Our Purpose & Principles</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
                        Driven by innovation and guided by integrity, our mission, vision, and values define who we are, how we operate, and the standards we uphold in advancing healthcare technology.
                    </p>
                </div>

                <div className="bg-[#002B49] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {sections.map((section, index) => (
                            <div
                                key={section.id}
                                className={`group relative p-8 md:p-12 lg:p-16 h-full min-h-[400px] flex flex-col items-center md:items-start text-center md:text-left transition-all duration-500 border-[#ffffff10] ${index !== sections.length - 1 ? 'md:border-r' : ''} ${index !== 0 ? 'border-t md:border-t-0' : ''}`}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-cover bg-center scale-100 group-hover:scale-110"
                                    style={{ backgroundImage: `url(/kap-medical/${section.image})` }}
                                />

                                {/* Background Overlay */}
                                <div className="absolute inset-0 z-1 bg-[#002B49] group-hover:bg-transparent transition-colors duration-500" />

                                {/* Content */}
                                <div className="relative z-10 w-full flex flex-col items-center md:items-start">
                                    <div className="w-16 h-16 bg-[#BF0D3E] rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                        {section.icon}
                                    </div>
                                    <h3 className="text-white! text-2xl lg:text-3xl font-bold mb-6 transition-transform duration-300">
                                        {section.title}
                                    </h3>
                                    <p className="text-white! text-[15px] leading-relaxed text-justify md:text-left">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
