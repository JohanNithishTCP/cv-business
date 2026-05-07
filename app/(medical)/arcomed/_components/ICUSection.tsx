// components/ICUSection.js
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { CheckCircleIcon, ArrowRightIcon } from "lucide-react";

const benefitList = [
  "Drug Colour coding",
  "Tailored medication safety",
  "Bidirectional integration",
  "Safe takeover for inotropes",
  "Silent ICUs",
  "Low sorbing consumables",
];

export default function ICUSection() {
  return (
    <section className="w-full py-16 lg:py-20">
      {/* Changed to grid-cols-12 for fine-grained control */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Spans 8 of 12 columns */}
        <div data-aos="fade-left" className="lg:col-span-7 space-y-3">
          <h2 className="text-[#C10E1A] font-semibold text-[22px] uppercase">
            ICU
          </h2>
          <h3 className="text-[#353A3D] font-semibold text-[22px]">
            Reduce complexity. Increase safety.
          </h3>
          <p className="text-[#333333] text-base leading-relaxed max-w-3xl">
            The medical infusion pumps by Arcomed are the best ICU pumps in the
            market. Discover our infusion technology, easy to read and use. Our
            ICU pumps are safe and include a wide range of features that make
            them easy to operate.
          </p>
          <div className="aspect-video bg-gray-100 rounded-2xl border border-dashed border-gray-300 overflow-hidden">
            <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

        {/* Right Column: Spans 4 of 12 columns */}
        <div
          data-aos="fade-right"
          className="lg:col-span-5 space-y-6 border-l border-[#0000001A] lg:pl-10">
          <h2 className="text-[#C10E1A] font-semibold text-[22px] uppercase">
            Key Benefits
          </h2>

          {/* Volumed Section */}
          <div className="space-y-4">
            <h4 className="text-[#353A3D] font-semibold text-xl">
              Volumed® μVP7000
            </h4>
            <p className="text-[#333333] text-base leading-relaxed">
              Enhances medication safety with smart drug colour coding, seamless
              integration, and reliable drug delivery. Designed for silent ICUs
              with low-sorbing consumables for maximum efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-y-3 pt-2">
              {benefitList.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-base text-[#333333]">
                  <img
                    src="/arcomed/check.png" // place inside public/icons/
                    alt="check"
                    className="w-6 h-6 shrink-0 mt-1 object-contain"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-[#0000001A]" />

          {/* Syramed Section */}
          <div className="space-y-2">
            <h4 className="text-[#353A3D] font-semibold text-xl">
              Syramed® μSP6000
            </h4>
            <p className="text-[#333333] text-base leading-relaxed">
              A compact infusion system ensuring safe, accurate medication
              delivery with smart integration and enhanced ICU efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-y-3 pt-2">
              {benefitList.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-base text-[#333333]">
                  <img
                    src="/arcomed/check.png" // place inside public/icons/
                    alt="check"
                    className="w-6 h-6 shrink-0 mt-1 object-contain"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative inline-flex items-center cursor-pointer">
            <button className="bg-[#C10E1A]  text-[#FFFFFF] text-base font-semibold px-8 h-12 rounded-full flex items-center pr-14 cursor-pointer">
              Discover Product
            </button>

            {/* Circle aligned with edge */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#FFFFFF] bg-[#353A3D] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
              <ArrowRightIcon size={20} className="text-[#FFFFFF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
