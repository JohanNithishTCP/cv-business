"use client";

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const VentilationInfo = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
              <h2 className="text-[#0068B3] font-semibold text-[16px]">
                NKV-550 Ventilation System
              </h2>
            </div>

            <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>

            {/* <h3 className="text-[24px] md:text-[28px] font-bold text-[#353A3D] mb-4">
              Information
            </h3> */}

            <p className="text-[#333333] text-[17px] mb-4 text-justify">
              The NKV-550 Ventilator System provides advanced, seamless respiratory care with intelligent monitoring, lung-protective technology, and flexible ventilation support for efficient patient-focused treatment.
            </p>

            <div className="space-y-4 mb-4">
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 size={24} className="text-[#0068B3]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#353A3D] mb-1 text-base md:text-[20px]">Seamless Patient Care</h4>
                  <p className="text-[#333333] text-base md:text-[17px] leading-relaxed">
                    The NKV-550 enables seamless ventilation transitions for faster, more efficient patient care.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 size={24} className="text-[#0068B3]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#353A3D] mb-1 text-base md:text-[20px]">Lung Protection</h4>
                  <p className="text-[#333333] text-base md:text-[17px] leading-relaxed">
                    The NKV-550 features Gentle Lung&reg; technology to support lung-protective ventilation and improve patient safety.
                  </p>
                </div>
              </div>
            </div>

            <Button href="#" variant="primary" size="md">
              View All Information
            </Button>
          </div>

          {/* Right Visual Placeholder */}
          <div data-aos="fade-up">
            <div className="aspect-video w-full h-full rounded-3xl overflow-hidden relative">
              <DynamicVideoPlayer type="short-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VentilationInfo;
