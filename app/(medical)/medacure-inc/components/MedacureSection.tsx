"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";
import { Check, CircleCheck } from "lucide-react";
import { useState } from "react";


export default function MedacureSection() {


  const features = [
    "Audible alarm for Power Failure, Low Battery, Low Oxygen Output, High Flow/Low Flow, No Breath Detected in Pulse Dose mode, High Temperature, Unit Malfunction",
    "Advanced trigger sensitivity with ability to detect the breathing at a lower pressure",
    "Multiple power options: AC power, DC power or rechargeable battery",
  ];

  return (
    <section className="bg-[#2E2662] py-20 overflow-hidden">
      <div className="max-w-380 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right">
          <div className="relative w-full h-[300px] md:h-[380px] rounded-2xl overflow-hidden">
            <DynamicVideoPlayer
              type="short-2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className="max-w-xl text-white">

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Portable Oxygen Concentrator
          </h2>

          {/* Description */}
          <p className="text-white/80 leading-7.5 mb-6">
            The MedaCure AeroLite Portable Oxygen Concentrator is designed to deliver
            reliable oxygen therapy with a strong focus on performance, portability,
            and patient convenience...
          </p>

          {/* Features */}
          <div className="space-y-3">
            {features.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex items-start gap-3"
              >
                <CircleCheck className="w-7 h-7 mt-1 text-[#2E2662] shrink-0 fill-white" />
                <p className="text-base text-white/90 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}