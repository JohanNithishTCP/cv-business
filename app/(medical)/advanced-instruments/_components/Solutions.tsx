"use client";

import React from "react";
import SectionHeader from "./SectionHeader";

const Solutions = () => {
    return (
        <section className="lg:min-h-screen py-10 md:py-20 bg-white overflow-hidden flex items-center justify-center" id="solutions">
            <div className="container mx-auto px-4 md:px-0 flex flex-col items-center">
                <SectionHeader
                    label="Solutions & Applications"
                    title="Supporting Every Department with Precision"
                    centered={true}
                />

                <div className="text-gray-600 space-y-4 mb-8 text-center max-w-7xl mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p className="text-base leading-relaxed">
                        Our solutions are designed to meet the specific needs of various medical departments, including intensive care units, operating rooms, cardiology, radiology, and neonatal care. We understand that each healthcare setting requires specialized equipment, and our offerings are tailored to enhance performance, safety, and efficiency.
                    </p>
                </div>

                <div className="relative bg-[#46C9FF] rounded-2xl lg:bg-transparent w-full max-w-7xl py-15 lg:mt-8 flex justify-center items-center md:h-[600px] group" data-aos="zoom-in" data-aos-delay="400">
                    {/* Blue Decorative Block (Centered with Offset) */}
                    <div className="hidden lg:block absolute right-15 -top-8 w-[75%] h-[110%] bg-[#46C9FF] rounded-[2.5rem]" />

                    {/* Video Container (Centered) */}
                    <div className="relative w-[80%] aspect-video bg-neutral-900 rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] overflow-hidden z-10">
                        <video
                            src="https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/360/advance_esu_400_360_.webm"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
