"use client";

import React from "react";
import Button from "./Button";
import { ChevronDown } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const featureTags = [
  "10'' Air Cells",
  "Adjustable Cycle Times",
  "Cell On Cell Deisgn",
  "CPR Valve",
  "Digital Pressure Adjustment",
  "Lock-Out"
];

const Features = () => {
  return (
    <section className="pb-12 lg:pb-16">
      <div className="w-[95%] mx-auto bg-[#014D65] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('/emerald/images/bg-frame.jpg')] opacity-40 bg-cover bg-center"></div>
          {/* <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div> */}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12 space-y-2">
            <span className="text-white font-semibold text-base tracking-wider">Our Features</span>
            <h2 className="text-[28px] lg:text-[32px] font-bold text-white font-albert max-w-4xl mx-auto leading-tight mt-1">
              Digital Bariatric Alternating Pressure LAL Mattress System
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div data-aos="fade-right" className="w-full lg:w-1/2 space-y-8">
              <p className="text-white lg:text-[17px] text-[16px] leading-relaxed text-justify">
                Selectis Air Mattresses are designed to provide advanced pressure relief and exceptional comfort, ensuring a supportive and safe environment for patients. Featuring durable materials and innovative designs, they help promote airflow, reduce pressure points, and enhance overall care. With user-friendly functionality and customizable settings, these mattresses offer reliable performance and ease of use in a variety of healthcare settings.
              </p>

              {/* Tags Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featureTags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 text-white group hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <span className="text-[16px] font-medium">{tag}</span>
                    <ChevronDown size={18} className="text-white/60 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="#learn" variant="white" size="md" rounded="full" className="px-10 !text-[#014D65] font-bold" hasArrow={true}>
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Video Clip */}
            <div data-aos="fade-left" className="w-full lg:w-1/2">
              <div className="relative aspect-video rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                {/* Reusing short-1 type for the clip */}
                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-white/30 font-albert uppercase tracking-widest">Video Clip 01</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
