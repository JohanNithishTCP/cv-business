"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";



export default function MedacureFeatureTop() {

  return (
    <section className="relative overflow-hidden" id="furniture">

      {/* Top Purple Background */}
      <div className="bg-[#2E2662] h-[220px] w-full" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-20 pointer-events-none">
        <img
          src="/medacure/assets/medacure-bg.jpg"
          alt="pattern"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-380 mx-auto px-6 relative -mt-28 grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE (overlapping) */}
        <div data-aos="fade-right">
          <div className="relative w-full h-[300px] md:h-[440px] rounded-2xl overflow-hidden">

            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TEXT */}
        <div data-aos="fade-left" className="max-w-2xl">

          <p className="text-base text-black lg:text-[#ffffff] font-medium mb-2">
            Our Features
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-black lg:text-white mb-10">
            AeroLite Portable Oxygen Concentrator
          </h2>

          <p className="text-gray-600 leading-7.5 mb-6">
            MedaCure products are engineered with advanced trigger sensitivity, enabling precise detection of patient breathing even at lower pressure levels for enhanced comfort and responsiveness. Designed for reliability and convenience, they offer an extended operating time with a single 8-cell battery (included), along with an optional 16-cell battery for even longer use. To ensure uninterrupted performance across different settings, the system supports multiple power options, including AC power, DC power, and a rechargeable battery, providing flexibility and dependability wherever it is needed.
          </p>

          <button className="cursor-pointer border-2 border-[#2E2662] text-[#2E2662] px-6 py-3 rounded-full hover:bg-[#2E2662] hover:text-white transition">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
}