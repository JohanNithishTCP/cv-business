"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
export default function About() {
  return (
    <section className="bg-gray-100 py-12 md:py-16 px-4 md:px-10 lg:px-12">
      <div className="max-w-400 mx-auto grid lg:grid-cols-2 items-stretch gap-8 md:gap-10">
        {/* Image */}
        <div
          data-aos="fade-up"
          className="relative w-full h-70 md:h-100 lg:h-auto min-h-75 rounded-xl overflow-hidden">
          <Image
            src="/orlvision/about.png"
            alt="Endoscopy"
            fill
            className="object-cover "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <div data-aos="fade-up" className="flex items-center mb-4">
            {/* line + dot (no gap between them) */}
            <div className="flex items-center ">
              <span className="w-10 h-0.5 bg-[#F49D00]"></span>
              <span className="w-2 h-2 bg-[#F49D00] rounded-full shrink-0"></span>
            </div>

            {/* space only before text */}
            <p className="ml-3 text-xs font-semibold text-gray-600 tracking-wide uppercase">
              ABOUT US
            </p>
          </div>

          <h2
            data-aos="fade-up"
            className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 leading-snug">
            Innovating endoscopy solutions for ENT, hearing care, and
            diagnostics.
          </h2>

          <p
            data-aos="fade-up"
            className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed text-justify">
            With over 30 years of expertise in medical endoscopy, we design and
            deliver high-quality solutions tailored to real clinical needs. From
            ENT and hearing aid acoustics to swallowing diagnostics, our
            products are developed in close collaboration with healthcare
            professionals. Combining innovation, precision, and global
            standards, we provide reliable technology that enhances diagnosis,
            treatment, and patient care worldwide.
          </p>

          {/* Points */}
          <div className="space-y-4">
            <div data-aos="fade-up" className="flex items-start gap-3">
              <span className="w-5 h-5 bg-[#F49D00] rounded-full shrink-0 flex items-center justify-center mt-1">
                <Check className="text-white text-lg w-4 h-4" />
              </span>
              <div data-aos="fade-up">
                <h4 className="font-semibold text-gray-700 text-base md:text-xl">
                  Experience & Expertise
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  With over 30 years of industry experience, we bring deep
                  knowledge and proven excellence in developing advanced
                  endoscopy solutions that meet evolving medical demands.
                </p>
              </div>
            </div>

            <div data-aos="fade-up" className="flex items-start gap-3">
              <span className="w-5 h-5 bg-[#F49D00] rounded-full shrink-0 flex items-center justify-center mt-1">
                <Check className="text-white text-lg w-4 h-4" />
              </span>

              <div data-aos="fade-up">
                <h4 className="font-semibold text-gray-600 text-base md:text-xl">
                  Collaborative Approach
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  All our solutions are built to meet strict international
                  standards, including MDR compliance and ISO certification,
                  ensuring safety, reliability, and consistent performance.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div data-aos="fade-up" className="mt-6">
            <div className="relative inline-block group">
              <button className="bg-[#F49D00] cursor-pointer text-white font-semibold text-sm md:text-base px-5 py-2.5 pr-14 rounded-full hover:bg-[#dda263] transition">
                Learn More about us
              </button>

              {/* Floating Arrow */}
              <span className="absolute top-1/2 -translate-y-1/2 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-transform">
                <ArrowRight size={18} className="text-[#F49D00]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
