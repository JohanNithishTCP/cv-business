"use client";

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const VentilationSection = () => {
  return (
    <section
      className="py-16 lg:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(0, 104, 179, 0.79) 0%, rgba(0, 45, 77, 0.96) 100%)" }}
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white lg:col-span-5" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-white"></div>
              <h2 className="text-white font-semibold text-[16px]">
                NKV-550 Ventilation System
              </h2>
            </div>

            <div className="w-full h-[1px] bg-white/20 mb-6"></div>

            <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-4 leading-tight">
              Intelligent Ventilation for Advanced Patient Care
            </h3>

            <div className="space-y-6 mb-10">
              <p className="text-gray-100 font-light text-[17px] leading-relaxed text-justify">
                Nihon Kohden's overriding philosophy inherent to the NKV-550 design is to Treasure Every Breath®. Our focus is to provide clinically relevant innovations and solutions for patients requiring mechanical ventilation. The NKV-550 Ventilator System is suitable for neonatal through adult patients and is equipped with a range of applications and modes, including invasive and non-invasive ventilation, O2 therapy, and airway care apps.
              </p>
              {/* <p className="text-gray-100 font-light text-[17px] leading-relaxed text-justify">
                Built with Nihon Kohden's philosophy of combining medical insight with advanced engineering, the NKV-550 delivers reliable performance, seamless usability, and innovative respiratory solutions that empower healthcare professionals to provide the highest standard of care — because every breath matters.
              </p> */}
            </div>
            <div className="w-full h-[1px] bg-white/20 mb-6"></div>

            <Button href="#" variant="white" size="md">
              Get to Know Us
            </Button>
          </div>

          {/* Right Video Placeholder */}
          <div className="relative lg:col-span-7" data-aos="fade-up">
            <div className="aspect-video bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center relative overflow-hidden group">
              <DynamicVideoPlayer type="360" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentilationSection;
