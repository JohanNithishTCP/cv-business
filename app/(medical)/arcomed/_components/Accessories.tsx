import React from "react";
import { ArrowRight, ArrowRightIcon, CornerUpRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Accessories = () => {
  const products = [
    "UniQueDoc TM",
    "Floor Stands TM",
    "UniQueConcept TM",
    "UniQueMRIShield TM",
  ];

  return (
    <section className="w-full py-16 lg:py-20  bg-[#FFFFFF]">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: col-span-7 */}
        <div
          data-aos="fade-left"
          className="lg:col-span-7 w-full aspect-video bg-black rounded-3xl border border-gray-200 overflow-hidden relative">
          <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
        </div>

        {/* Right Side: col-span-5 */}
        <div
          data-aos="fade-right"
          className="lg:col-span-5 flex flex-col space-y-8">
          <header>
            <h2 className="text-[#C10E1A] text-[22px] font-semibold mb-4 leading-tight">
              Extremely simple and practical
            </h2>
            <div className="text-[#333333] text-base leading-relaxed space-y-4">
              <p>
                Arcomed accessories are designed to be simple, practical, and
                highly efficient for clinical environments. The range includes
                flexible docking systems supporting multiple pumps, intelligent
                integration with hospital systems, and MRI-compatible solutions
                that ensure safety and clear visibility.
              </p>
              <p>
                With features like easy cleaning, robust construction,
                centralized power, and mobility-focused floor stands, these
                accessories enhance workflow, improve connectivity, and provide
                reliable support for modern healthcare settings.
              </p>
            </div>
          </header>

          {/* Product Grid (2 columns within the col-span-5) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.map((item, index) => (
              <button
                key={index}
                className="group flex items-center justify-between w-full bg-[#FFFFFF] rounded-2xl shadow-[#0000003D] shadow-sm border border-gray-100 hover:shadow-md transition-all pl-5 pr-0 py-0 overflow-hidden">
                {/* Product Name */}
                <span className="text-[#333333] text-base px-5 py-3">
                  {item}
                </span>

                {/* Arrow Container with Left-Only Border */}
                <div className="flex items-center justify-center h-full rounded-lg px-4 border-l-[3px] border-[#000000] group-hover:bg-gray-50 transition-colors">
                  <CornerUpRight
                    size={20}
                    className="text-[#333333] group-hover:text-red-600 transition-colors"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <div className="relative inline-flex items-center cursor-pointer">
              <button className="bg-[#C10E1A]  text-[#FFFFFF] text-base font-semibold px-8 h-12 rounded-full flex items-center pr-14 cursor-pointer">
                Explore Accessories
              </button>

              {/* Circle aligned with edge */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#FFFFFF] bg-[#353A3D] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                <ArrowRightIcon size={20} className="text-[#FFFFFF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessories;
