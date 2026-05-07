"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const VideoBanner = () => {
    return (
        <section className=" py-6 lg:py-20 bg-white relative overflow-hidden">
            <div className="site-container">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Left Side: Video Content */}
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
                                <video
                                    src="https://cdn.clinicalvisuals.com/medical/heypatient/video_2.webm"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover"
                                ></video>
                            </div>
                        </div>

                        {/* Right Side: Text Content */}
                        <div data-aos="fade-left" data-aos-duration="1000" className="flex flex-col">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-[#08949E]! leading-tight mb-8">
                                The Patient Portal that simplifies your<br className="hidden md:block" /> everyday work.
                            </h3>

                            <p className=" mb-10 text-justify leading-[1.8] max-w-xl">
                                You want patients who are well prepared, at the right time and in the right place with up-to-date information and smooth processes. Our functional modules guide patients, automate key steps and create a digital experience that delivers measurable impact. Let's get started together.
                            </p>

                            <div className="flex justify-start">
                                <button className="bg-[#08949E] text-white rounded-full px-8 py-3 flex items-center gap-2 text-[14px] font-bold hover:bg-[#067a82] transition-all">
                                    <span>Start Now</span>
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
