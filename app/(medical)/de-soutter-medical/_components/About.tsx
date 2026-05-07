"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <section className="w-full bg-[#F5F6FA] py-16 flex justify-center">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT - IMAGE */}
        <div
          data-aos="fade-left"
          className="w-full h-full relative rounded-2xl overflow-hidden">
          <Image
            src="/de-soutter-medical/about.jpg" // 👉 place image in public/about/
            alt="About"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT - CONTENT */}
        <div data-aos="fade-right" className="space-y-6">
          <h2 className="text-[#5E76BA] text-[22px] font-semibold">
            About De Soutter Medical
          </h2>

          <p className="text-[#333333] text-base">
            Founded in 1990, De Soutter Medical is a leading European
            manufacturer of surgical power tools. Our goal is to develop and
            produce advanced surgical cutting solutions for a rapidly changing
            global healthcare market.
          </p>

          <p className="text-[#333333] text-base">
            De Soutter Medical produces first class, cost effective surgical
            power tools. Through continuous product research and development, we
            are developing new technologies and expanding our intellectual
            property portfolio.
          </p>

          {/* FEATURE 1 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#5E76BA] text-[#FFFFFF] p-3 rounded-full shrink-0">
              <img
                src="/de-soutter-medical/icon-1.png"
                alt="Innovation"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h4 className="text-[22px] font-medium">
                Precision & Excellence
              </h4>
              <p className="text-base text-[#333333]">
                We are committed to delivering highly accurate,
                performance-driven surgical solutions.
              </p>
            </div>
          </div>

          {/* FEATURE 2 */}
          <div className="flex items-start gap-4">
            <div className="bg-[#5E76BA] text-[#FFFFFF] p-3 rounded-full shrink-0">
              <img
                src="/de-soutter-medical/icon-2.png"
                alt="Innovation"
                className="w-6 h-6"
              />
            </div>
            <div>
              <h4 className="text-[22px] font-medium">Innovation at Core</h4>
              <p className="text-base text-[#333333]  ">
                Continuous research and engineering drive our ability to create
                advanced technologies.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-4 bg-[#5E76BA] text-[#FFFFFF] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#4a5f9c] transition">
            Get to Know Us <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
