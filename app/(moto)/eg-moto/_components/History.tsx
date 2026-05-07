"use client";

import React from "react";
import { Target } from "lucide-react";
import Button from "./Button";

export default function History() {
  return (
    <section className="w-full py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">
          {/* Illustration Section */}
          <div className="flex justify-center lg:justify-start" data-aos="fade-up">
            <img
              src="/nihon/images/about.png"
              alt="Nihon Kohden Wing Illustration"
              className="max-w-full h-auto object-cover"
            />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
              <h2 className="text-[#0068B3] font-semibold text-[16px]">
                About Nihon Kohden's History
              </h2>
            </div>

            <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>

            <h3 className="text-[24px] md:text-[28px] font-bold text-[#353A3D] mb-4">
              Leading the evolution of medical engineering
            </h3>

            <p className="text-[#333333] leading-relaxed text-[17px] mb-6 text-justify">
              The neuromuscular tissue of a small bird inspired the founding of Nihon Kohden. Dr. Yoshio Ogino – founder of Nihon Kohden – was researching electrical engineering when he witnessed an experiment involving stimulation of the neuromuscular tissue of a small bird. He was amazed by the wonder of biology and remarked that "to measure part of a living body requires several hundred times."
            </p>

            <div className="w-full h-[1px] bg-[#000000]/10 mb-8"></div>

            {/* Features/Points */}
            <div className="flex flex-col gap-8 mb-10">
              <div className="flex gap-5" data-aos="fade-up">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0068B3] flex items-center justify-center text-white shadow-lg p-2">
                  <img src="/nihon/images/target.png" alt="Spark of Nature" className="max-w-full h-auto object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-[#333] text-[20px] mb-1">A Spark from Nature</h4>
                  <p className="text-[#666] text-[17px] leading-snug">
                    Dr. Yoshio Ogino was inspired after witnessing an experiment on a small bird's neuromuscular tissue.
                  </p>
                </div>
              </div>

              <div className="flex gap-5" data-aos="fade-up">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0068B3] flex items-center justify-center text-white shadow-lg p-2">
                  <img src="/nihon/images/idea.png" alt="Spark of Nature" className="max-w-full h-auto object-contain" />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-semibold text-[#333] text-[20px] mb-1">Realizing the Limits of Technology</h4>
                  <p className="text-[#666] text-[17px] leading-snug">
                    He discovered that measuring the human body required far greater sensitivity than existing electrical engineering equipment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button href="#" variant="primary" size="md">
                Get to Know Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
