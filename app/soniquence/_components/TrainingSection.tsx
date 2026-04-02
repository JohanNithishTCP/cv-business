"use client";

import { useState } from "react";


export default function TrainingSection() {

    return (
        <section className="w-full py-16 md:py-24 bg-white overflow-hidden">
            <div className="site-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-18 items-center">

                    {/* Left Images / Decor */}
                    <div
                        data-aos="fade-right"
                        className="relative w-full h-[380px] md:h-[480px]"
                    >
                        {/* Background Purple Shape */}
                        <div className="absolute left-[-20px] top-0 bottom-[-55px] w-[35%] bg-gradient-to-b from-[#4F00F5] to-[#B000F5] rounded-l-4xl rounded-r-0 z-0" />

                        {/* Main Image */}

                        <div className="absolute left-12 top-10 right-0 bottom-0 bg-gray-100 rounded-4xl overflow-hidden z-10 shadow-2xl">
                            <video
                                src="https://cdn.clinicalvisuals.com/medical/soniquence/360.webm"
                                autoPlay
                                muted
                                playsInline
                                loop
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>


                    {/* Right Text */}
                    <div
                        data-aos="fade-left"
                        className="space-y-6 lg:pl-1"
                    >
                        <h2 className="text-[1.8rem] md:text-[1.7rem] font-bold text-[#202020] leading-[1.2]">
                            Training With Experienced Surgeons
                        </h2>
                        <div className="space-y-5 text-[#555555] text-justify leading-relaxed text-[14px] md:text-[18px]">
                            <p>
                                Soniquence offers high-quality medical radiofrequency training programs for dental, medical, and veterinary offices. We believe in continual education to support the delivery of proprietary quality products and surgical applications. In an effort to ensure the most up-to-date training and product advancement, Soniquence offers centers of excellence with frequent workshops.
                            </p>
                            <p>
                                A team of experienced surgeons provides comprehensive seminars inclusive of didactic and cadaveric hands-on instruction.  During each radiofrequency workshop, participating members are given the opportunity to engage in hands-on experimentation with clinical instruction. Workshops are limited in attendance to ensure maximum hands-on experimentation during cadaveric instruction.
                            </p>
                        </div>
                        <div className="pt-2">
                            <button className="bg-[#B000F5] hover:bg-[#A300ED] text-white font-bold py-3 px-6 rounded-md text-[13px] tracking-wide transition-colors shadow-md">
                                Contact Us for More Info
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
}
