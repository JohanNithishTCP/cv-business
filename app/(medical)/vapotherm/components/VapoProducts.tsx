"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/vapotherm/360/360.webm"
];


export default function VapoProducts() {

      const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };


  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-380 mx-auto space-y-10 md:space-y-16">

        {/* TOP ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="min-w-0">
            {/* <p className="text-sm text-gray-500 mb-2">
              [Pediatrics to Adults]
            </p> */}

            <h2 className="text-2xl md:text-3xl font-semibold text-[#0C66AF] mb-4">
              HVT® 2.0 System
            </h2>

            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Mask-Free respiratory support with Vapotherm HVT® 2.0 lets you
              improve your experience as well as your patients—realize ease of
              care anytime and anywhere within your hospital.
            </p>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Vapotherm HVT 2.0 uses our revolutionary high velocity therapy and is ready for use in approximately 5 minutes. It requires minimal patient coaching, and staff intervention. A large, intuitive touchscreen gives you clinically relevant information from a distance, which helps you make informed decisions quickly, and with confidence. A disposable patient circuit supports infection control and enables quick disinfection. On-screen troubleshooting support, and comprehensive alarms that facilitate patient safety and ease of care.
            </p>

            <button className="bg-[#0C66AF] cursor-pointer text-white px-6 py-3 rounded-full text-base hover:bg-[#0A569C] transition min-h-[44px]">
              View Products
            </button>
          </div>

          {/* RIGHT MEDIA */}
          <div
            data-aos="zoom-in"
            className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-xl overflow-hidden"
          >
            <video
              key={currentVideoIndex}
              src={bannerVideos[currentVideoIndex]}
              autoPlay
              loop
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200" />

        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="min-w-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#0C66AF] mb-4">
              Rethinking Ventilation: Do You Always Need Pressure?
            </h3>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              NiPPV has been the gold-standard treatment for patients with
              hypercapnia. But while NiPPV may be preferable to intubation,
              it’s not necessarily a therapy that all indicated patients tolerate.
            </p>

            <button className="bg-[#0C66AF] cursor-pointer text-white px-6 py-3 rounded-full text-base hover:bg-[#0A569C] transition min-h-[44px] w-full sm:w-auto">
              Take the free On-Demand CEEU Course
            </button>
          </div>

          <div data-aos="fade-left" className="flex gap-4 h-48 sm:h-56 md:h-[220px]">
            
            <img
              src="/vapotherm/assets/vapotherm-ventilation.png"
              alt="img1"
              className="w-full h-full object-cover rounded-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
}