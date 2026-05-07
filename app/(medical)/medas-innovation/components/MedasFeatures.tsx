"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight, Check } from "lucide-react";

export default function MedasFeatures() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-380 mx-auto px-6 lg:px-10">

        {/* TOP TEXT */}
        <div
          data-aos="fade-up"
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-[#3F5897] text-lg md:text-2xl leading-relaxed font-semibold">
            Health care solutions means sense of quality and serve reasons that
            lead us deliver all our potential in this objective. Accurate design
            and perform in useful medical devices, in more tech and certificate
            medical industrial facilities obtaining top quality consumables
            products.
          </p>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-300 mt-8"></div>
        </div>

        {/* BOTTOM GRID */}
        <div className="mt-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT VIDEO */}
          <div data-aos="fade-right">
            <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px] rounded-xl overflow-hidden">

              <div className="absolute inset-0">

                <DynamicVideoPlayer
                  type="short-1"
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" className="w-full md:max-w-xl">

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              Key Features of Two-Way Silicone Coated Latex Foley Catheter
            </h3>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-base leading-[1.9]">
              This catheter is made from premium medical-grade latex with a smooth
              silicone coating for easy insertion and enhanced patient comfort.
              Its two-way design ensures efficient drainage and secure balloon
              placement during use.
            </p>

            {/* FEATURES GRID */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">

              {[
                "Silicone-coated latex for smooth, comfortable use",
                "Two-way design for effective drainage",
                "Color-coded sizes for quick identification",
                "EO sterilized & single-use for safety",
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0287C3] flex items-center justify-center text-white text-base shrink-0">
                    <Check size={12} className="" />
                  </div>
                  <p className="text-gray-600 text-base">{item}</p>
                </div>
              ))}

            </div>

            {/* CTA */}
            <button className="mt-6 cursor-pointer bg-[#0287C3] hover:bg-[#026ca8] text-white px-6 py-3 rounded-md flex items-center gap-2 transition">
              Explore Products <span><ArrowRight /></span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}