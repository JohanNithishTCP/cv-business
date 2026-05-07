"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight } from "lucide-react";

const features = [
  "Colposcope with Vertical Stand",
  "Adjustable anti-glare LED lights",
  "Up to 30x magnification",
  "Full HD video and image capture",
  "Green filter",
  "Integrates with EMR",
];

export default function LutechProduct() {
  return (
    <section className="relative bg-[#f3f4f6] pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">

      {/* TOP TEAL BAND */}
      <div className="absolute top-0 left-0 w-full h-32 bg-[#0f6c86]" />

      <div className="relative max-w-380 mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT MEDIA CARD */}
          <div
            data-aos="fade-right"
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg -mt-5">

              {/* VIDEO (future ready) */}
              <div data-aos="fade-right">
                <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                  <DynamicVideoPlayer
                    type="short-1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" className="max-w-xl lg:mt-14">

            {/* Title */}
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#0f6c86] leading-snug mb-4 ">
              Digital Video Colposcope <br />
              with Vertical Stand
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-4 font-rubik">
              The LT-300HD with Vertical Stand provides a compact solution for
              cervical exam rooms. Experience digital colposcopy with a system
              designed for both the patient and provider. The LCD screen eliminates
              the eyepiece creating a more comfortable exam experience by
              increasing the distance between patient and physician.
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-3 font-rubik">

                  {/* Icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#0f6c86] text-white text-xs mt-1">
                    ✓
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-base">{item}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center group ">
              <button className="cursor-pointer bg-[#00769E] text-white px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
                Discover Features
              </button>

              <button className="cursor-pointer w-11 h-11 flex items-center justify-center rounded-full bg-[#00769E] text-white hover:opacity-90 transition">
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}