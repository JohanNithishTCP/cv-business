"use client";

import { useEffect, useState } from "react";
import AOS from "aos";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/vapotherm/short_clips/Vapotherm_3.webm",
];



export default function VapoMobility() {

          const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };



  return (
    <section className="w-full">
      
      {/* TOP BLUE SECTION */}
      <div className="bg-[#1f6aa5] text-white py-12 md:py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT VIDEO */}
          <div
            data-aos="fade-right"
            className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-xl overflow-hidden"
          >
            {/* Future Video */}
            <video
                key={currentVideoIndex}
                src={bannerVideos[currentVideoIndex]}
                autoPlay
                muted
                loop
                playsInline
                onEnded={handleVideoEnd}
                className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Seamless mobility and respiratory support for your patients.
              Anytime. Anywhere.
            </h2>

            <p className="text-base opacity-90 leading-relaxed">
              Our solution is powered by AC with an internal battery to add safety
              in the event of a power failure, an optional transfer battery for
              additional power needs, and has an internal blower that eliminates
              the need for air tanks during patient transfers.
              <br /><br />
              Mounted on our ergonomically designed roll stand and engineered to
              hold two O2 cylinders it allows you to safely maintain therapy,
              when and where you need it throughout the hospital – untethered
              from the wall with optimal mobility.
            </p>
          </div>

        </div>
      </div>

      {/* BOTTOM CTA SECTION */}
      <div className="bg-white py-12 md:py-16 px-4 md:px-8 lg:px-16 text-center">
        <div data-aos="fade-up" className="max-w-2xl mx-auto">
          
          <h3 className="text-xl md:text-3xl font-semibold text-[#0C66AF] mb-4">
            Request a Demo
          </h3>

          <p className="text-gray-600 text-base mb-6">
            Mask-Free respiratory support with Vapotherm HVT® 2.0 lets you
            improve your experience as well as your patients—realize ease of
            care anytime and anywhere within your hospital.
          </p>

          <button className="bg-[#0C66AF] text-white px-6 py-3 rounded-full text-base hover:bg-[#0A569C] transition min-h-[44px]">
            View Products
          </button>

        </div>
      </div>

    </section>
  );
}