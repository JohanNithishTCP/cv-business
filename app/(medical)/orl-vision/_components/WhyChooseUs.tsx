"use client";

import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/orl-vision/short_clips/neuxmed_1.webm",

];


export default function WhyChooseUs() {

      const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16 px-4 md:px-6 overflow-hidden">
      <div className="max-w-400 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {/* LEFT CONTENT */}
        <div data-aos="fade-left">
          <div className="flex items-center mb-4">
            {/* line + dot (no gap between them) */}
            <div className="flex items-center">
              <span className="w-10 h-0.5 bg-[#F49D00]"></span>
              <span className="w-2 h-2 bg-[#F49D00] rounded-full"></span>
            </div>

            {/* space only before text */}
            <p className="ml-3 text-xs font-semibold text-gray-600 tracking-wide uppercase">
              WHY CHOOSE US
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-snug mb-4">
            Precision-Engineered Endoscopy Solutions With Certified Quality And
            Trusted Performance Worldwide.
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 text-justify">
            We deliver high-quality endoscopy solutions built on
            precision-driven German engineering. Our products are MDR compliant
            and ISO certified, ensuring safety and reliability across global
            standards. Designed to be customizable and adaptable, our solutions
            meet diverse clinical needs and are trusted by healthcare
            professionals worldwide for their consistent performance.
          </p>

          {/* Bullet Points */}
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-3">
              <span className="w-5 h-5 bg-[#F49D00] rounded-full shrink-0 flex items-center justify-center mt-1">
                <Check className="text-white text-lg w-4 h-4" />
              </span>
              <p className="text-sm md:text-base text-gray-700">
                Extensive experience in developing reliable and advanced
                endoscopy solutions for medical use.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 bg-[#F49D00] rounded-full shrink-0 flex items-center justify-center mt-1">
                <Check className="text-white text-lg w-4 h-4" />
              </span>
              <p className="text-sm md:text-base text-gray-700">
                Flexible systems that can be adapted to meet specific clinical
                requirements and workflows.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="w-5 h-5 bg-[#F49D00] rounded-full shrink-0 flex items-center justify-center mt-1">
                <Check className="text-white text-lg w-4 h-4" />
              </span>
              <p className="text-sm md:text-base text-gray-700">
                Built to meet MDR regulations and ISO standards, ensuring
                safety, consistency, and global acceptance.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <div className="relative inline-block group cursor-pointer">
              <button className="bg-[#F49D00] text-white font-semibold text-sm md:text-base px-5 py-2.5 pr-14 rounded-full hover:bg-[#dda263] transition">
                Learn More about us
              </button>

              {/* Floating Arrow */}
              <span className="absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-transform">
                <ArrowRight size={18} className="text-[#F49D00]" />
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT VIDEO */}
        <div
          data-aos="fade-right"
          className="relative w-full aspect-video rounded-xl overflow-hidden">
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
      </div>
    </section>
  );
}
