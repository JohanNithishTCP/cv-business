import { ArrowRight } from "lucide-react";
import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Solutions = () => {
  const features = [
    "Spacious cabin with 1110L of volume – Designed for a comfortable testing environment",
    "Reinforced bench – Supports up to 551 lbs/250 kg for greater patient accessibility",
    "Low step-in clearance – Less than 3/7.5 cm for easier patient transfer",
    "Flexible telescopic arm – Extends 25/63.0 cm outside the cabin for convenient flexible testing",
    // "Prominent grab bar – Enhances patient safety for entry and exit",
    "Low profile breathing circuit allows for optimized patient viewing and coaching during maneuver",
  ];

  return (
    <section className="bg-[#FFFFFF] py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image Placeholder */}
        <div
          data-aos="fade-up"
          className="w-full aspect-video rounded-2xl overflow-hidden">
          <DynamicVideoPlayer
            type="short-2"
            className=" w-full h-full object-cover rounded-2xl "
          />
        </div>

        {/* Right Side: Content */}
        <div data-aos="fade-up" className="space-y-5">
          <span className="inline-block bg-[#00689B]/12 text-[#00689B] text-[14px] px-4 py-2 rounded-md">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-[32px] font-bold text-[#1F242E]">
            Safety Oriented Cabin Design
          </h2>
          <div className="bg-[#00689B]/12 p-6 rounded-2xl">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
