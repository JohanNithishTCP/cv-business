import React from "react";
import { ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const ProductOverview = () => {
  return (
    <section className="relative w-full min-h-150 flex items-center overflow-hidden">
      {/* Background Split Layer */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        {/* Left Side: Gradient with Hex Pattern (Simulated) */}
        <div className="w-full md:w-1/2 bg-[#3a9ad9] relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, [#FFFFFF] 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-400/30 to-transparent" />
        </div>

        {/* Right Side: Solid Blue */}
        <div className="w-full md:w-1/2 bg-[#0475BC]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content Column */}
          <div className="w-full lg:w-[40%] text-[#FFFFFF] space-y-6">
            <div>
              <span className="text-[18px] font-medium border-b-2 border-[#FFFFFF]/50 pb-1">
                Product Overview
              </span>
              <h2 className="text-3xl md:text-[38px] font-semibold mt-4">
                3D Dental Surgical Microscope
              </h2>
            </div>

            <div className="space-y-4 text-sm md:text-base leading-[1.9] text-[#FFFFFF]">
              <p>
                Finally! A dental surgical microscope that any dentist can use
                easily due to 3D technology. Lightweight, fluid maneuverability
                and heads-up 3D display make Seiler's 3D dental surgical
                microscope a breeze to work with.
              </p>
              <p>
                Watch a seamless, magnified video image at 1080p and 60 frames
                per second with the fastest image processing available.
              </p>
              <p>
                With up to 28x magnification, unprecedented depth of field and
                German Schott glass, it's revolutionizing the way surgical
                microscopes are used worldwide. Two-Year warranty on optics and
                mechanics.
              </p>
              <p>
                See the 3D in action with this{" "}
                <a
                  href="#"
                  className="underline hover:text-[#FFFFFF] transition-colors">
                  video playlist!
                </a>
              </p>
            </div>

            {/* Support Button */}
            <button className="flex items-center gap-4 cursor-pointer bg-[#FFFFFF] text-[#0077b6] px-6 py-2.5 rounded-full hover:bg-blue-50 transition-colors shadow-lg group">
              <span className="font-semibold text-base">
                Get Product Support
              </span>
              <div className="bg-[#0475BC] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="text-[#FFFFFF] w-6 h-6" />
              </div>
            </button>
          </div>

          {/* Right Video Placeholder Column */}
          <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
            <div className="w-full aspect-video bg-[#FFFFFF]/90 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              {/* This represents the checkered area in your image */}
              <div className="relative h-full bg-[#FFFFFF] rounded-2xl overflow-hidden">
                <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
