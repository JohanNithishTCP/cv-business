"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Hero = () => {

    return (
        <section className="bg-black w-full h-screen flex flex-col items-center justify-end pb-10 md:pb-16 relative overflow-hidden" data-aos="fade-in">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <DynamicVideoPlayer
                    type="banner"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

            </div>

            {/* Content overlay */}
            <div className="relative z-20 w-full container mx-auto px-4 text-left flex flex-col items-start">
                <h1
                    className="text-white! text-xl lg:text-5xl leading-[1.2] font-bold mb-8 [text-shadow:4px_4px_8px_rgba(0,0,0,0.8)] tracking-tight max-w-3xl"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Trusted Innovation in Medical Solutions
                </h1>
            </div>
        </section>
    );
};

export default Hero;
