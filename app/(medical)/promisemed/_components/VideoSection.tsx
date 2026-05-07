"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function VideoSection() {
  return (
    <section className="w-full bg-gray-100 pb-16">
      {/* Top Gradient Bar */}
      <div className="w-full h-50 bg-linear-to-r from-[#009B43] to-[#2353A3]"></div>

      {/* Video Card */}
      <div className="container mx-auto px-6 -mt-30">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden" data-aos="fade-up">
          {/* Video Area */}
          <div

            className="w-full aspect-video flex items-center justify-center">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-6">
          {/* Left */}
          <div className="max-w-4xl">
            <h2 className="text-lg md:text-[32px] font-semibold text-[#333333]">
              VeriEndo® Single-use Flexible Cystoscope
            </h2>

            <p className="text-base text-[#333333] mt-2 leading-relaxed">
              Promisemed VeriEndo® Single-use Flexible Cystoscope eliminates the
              risk of cross-contamination between patients and healthcare
              professionals due to incomplete disinfection and in the meanwhile
              highly reduce the cost.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-8 py-2 rounded-full text-[18px] font-semibold bg-linear-to-r from-[#009B43] to-[#2353A3] text-white hover:shadow-md transition text-center cursor-pointer">
              Features and Benefits
            </button>

            <div className="flex-1 sm:flex-none p-0.5 rounded-full bg-linear-to-r from-[#009B43] to-[#2353A3]">
              <button className="w-full px-6 py-2 rounded-full bg-white text-[#333333] text-[18px] font-semibold hover:bg-[#2353A3] hover:text-white transition text-center cursor-pointer">
                Specification
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
