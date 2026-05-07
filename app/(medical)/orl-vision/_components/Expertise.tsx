"use client";

import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/orl-vision/short_clips/neuxmed_2.webm",
  "https://cdn.clinicalvisuals.com/medical/orl-vision/short_clips/neuxmed_3.webm"
       
];


export default function Expertise() {

      const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  const points = [
    {
      text: "We develop equipment tailored to daily clinical practice through close collaboration with ENT specialists.",
      icon: "/orlvision/icon1.png",
    },
    {
      text: "Our solutions improve consultation and usability for hearing care professionals.",
      icon: "/orlvision/icon2.png",
    },
    {
      text: "Accurate diagnostics powered by advanced technology.",
      icon: "/orlvision/icon3.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-10 overflow-hidden">
      <div className="max-w-400 mx-auto grid lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {/* LEFT VIDEO */}
        <div
          data-aos="fade-left"
          className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <video
            key={currentVideoIndex}
            src={bannerVideos[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-right">
          {/* Top Label */}
          <div className="flex items-center mb-2">
            {/* line + dot (no gap between them) */}
            <div className="flex items-center">
              <span className="w-10 h-0.5 bg-[#F49D00]"></span>
              <span className="w-2 h-2 bg-[#F49D00] rounded-full"></span>
            </div>

            {/* space only before text */}
            <p className="ml-3 text-xs font-semibold text-gray-600 tracking-wide uppercase">
              OUR EXPERTISE
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-snug mb-2">
            Specialized Expertise Designed To Meet Diverse Clinical Needs.
          </h2>

          {/* Description */}
          <p className="mb-2 text-sm md:text-base text-gray-600 leading-relaxed text-justify">
            Our expertise spans ENT, hearing care, and swallowing diagnostics,
            where we develop solutions tailored to real-world medical practice.
            By combining advanced technology with a deep understanding of user
            needs, we support accurate diagnosis, improved consultations, and
            better patient outcomes across every application.
          </p>

          {/* Points */}
          <div className="space-y-4 md:space-y-5 mt-3">
            {points.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* ICON */}
                <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-[#F49D00] rounded-full shrink-0">
                  <Image src={item.icon} alt="icon" width={30} height={30} />
                </div>

                {/* TEXT */}
                <p className="text-sm md:text-base text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-6">
            <div className="relative inline-block group">
              <button className="cursor-pointer bg-[#F49D00] text-white font-semibold text-sm md:text-base px-5 py-2.5 pr-14 rounded-full hover:bg-[#e38c00] transition">
                Learn More about us
              </button>

              {/* Floating Arrow */}
              <span className="cursor-pointer absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-transform">
                <ArrowRight size={18} className="text-[#F49D00]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
