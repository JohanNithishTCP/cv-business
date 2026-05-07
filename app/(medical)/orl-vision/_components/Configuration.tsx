"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/orl-vision/360/360.webm",

];

export default function Configuration() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-white pt-16 md:pb-22 relative">
      {/* orange background */}
      <div className="absolute top-0 left-0 w-full h-[55%] md:h-[60%] bg-[#F49D00]"></div>

      {/* CONTENT */}
      <div
        data-aos="fade-up"
        className="relative max-w-4xl md:max-w-5xl mx-auto text-center text-white px-4">
        {/* Label */}
        <div className="flex items-center justify-center mb-3">
          <div className="flex items-center">
            <span className="w-8 md:w-10 h-0.5 bg-white"></span>
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </div>

          <p className="ml-2 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
            OUR CONFIGURATIONS
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
          Flexible Setups For Every Clinical Need.
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-white/90">
          Our configurations range from basic to advanced systems, combining
          video endoscopy, medical carts, and accessories for efficient
          diagnostics. Designed for flexibility and easy integration, all
          solutions are supported with compatible software and drivers.
        </p>
      </div>

      {/* video card*/}
      <div
        data-aos="fade-up"
        className="relative max-w-6xl mx-auto px-4 mt-8 md:mt-12 -mb-10 md:-mb-16">
        <div className="relative aspect-4/3 md:aspect-video rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.2)]">
          <video
            key={currentVideoIndex}
            src={bannerVideos[currentVideoIndex]}
            autoPlay
            muted
            loop
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
