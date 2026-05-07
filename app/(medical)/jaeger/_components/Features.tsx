import { ArrowRight } from "lucide-react";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Features = () => {
  const features = [
    "Designed for patient comfort & accessibility",
    "Compact yet spacious cabin for versatile clinical use",
    "Advanced ultrasonic & digital pressure compensation technology for greater accuracy",
    "Requires only a single gas tank to operate",
    "Optimized for compliance with ERS/ATS 2019 guidelines",
    "The only body plethysmograph with Resistance Volume Loops - A unique graphical aid displaying the relationship between airway resistance and lung volumes",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image Placeholder */}
        <div
          data-aos="fade-up"
          className="aspect-video rounded-2xl flex items-center justify-center">
          <DynamicVideoPlayer
            type="short-1"
            className=" w-full h-full object-cover rounded-2xl "
          />
        </div>

        {/* Right Side: Content */}
        <div data-aos="fade-up" className="space-y-6">
          <span className="inline-block bg-[#00689B]/12 text-[#00689B] text-[14px] px-4 py-2 rounded-md">
            Advanced solutions
          </span>
          <h2 className="text-3xl md:text-[32px] font-bold text-[#1F242E]">
            Why Choose Vyntus™ BODY?
          </h2>

          <ul className="space-y-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#4CAF50] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#333333] text-base leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button
            data-aos="fade-up"
            style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
            className="group flex items-center text-[#FFFFFF] text-[14px] px-4 py-2 rounded-md transition shadow-md cursor-pointer w-fit">
            Explore More <ArrowRight size={16} className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
