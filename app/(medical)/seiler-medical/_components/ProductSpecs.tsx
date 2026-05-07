import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const ProductSpecs = () => {
  const specifications = [
    "2x - 28x Magnification Range",
    "Fastest Image Processing Available - No Latency in the Video Image",
    "Full HD Monitor for Best Possible 3D Image Resolution",
    "Natural Intuitive 3D Image with Normal Depth Perception and No Loss of Clarity",
  ];

  return (
    <section className="container mx-auto px-6 py-16 bg-[#FFFFFF]">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left Side: Product Image/Placeholder */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-video bg-[#f2f2f2] rounded-3xl overflow-hidden shadow-sm">
            {/* Checkerboard Pattern Placeholder */}
            <div className="relative h-full bg-[#FFFFFF] rounded-2xl  shadow-sm overflow-hidden">
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <header className="space-y-4">
            <h2 className="text-3xl md:text-[38px] font-semibold text-[#333333] tracking-tight">
              3D Dental Surgical Microscope
            </h2>
            <h3 className="text-[24px] font-medium text-[#333333]">
              Specifications:
            </h3>
            <p className="text-[#333333] leading-[1.9] text-sm md:text-base">
              You rely on your microscope to provide you consistent service
              day-in and day-out. Seiler microscopes are widely regarded as some
              of the most reliable surgical microscopes and colposcopes
              available on the market today.
            </p>
          </header>

          {/* Specifications List */}
          <ul className="space-y-3 ">
            {specifications.map((spec, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#0077b6] w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-[#333333] text-sm md:text-base ">
                  {spec}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="cursor-pointer group flex items-center gap-4 bg-[#0077b6] hover:bg-[#005f92] text-[#FFFFFF] px-7 py-3 rounded-full transition-all duration-300 shadow-md">
              <span className="font-bold text-sm">Request A Quote</span>
              <div className="bg-[#FFFFFF] rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="text-[#0077b6] w-4.5 h-4.5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
