import React from "react";
import { PlusCircle, ArrowUpRight, Hexagon } from "lucide-react";
import Image from "next/image";

const FeatureSection = () => {
  const firstTwoFeatures = [
    "Access to a global network across the Middle East, Europe, Asia, South America, and Africa.",
    "Access to our patented variable angle screw technology",
  ];
  const thirdFeature = "Streamlined entry into the Australian market.";

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side: Placeholder Image Area */}
        <div
          data-aos="fade-left"
          className="w-full bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
          <Image
            src="/austofix/blank.png"
            alt="idea"
            width={1000}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Content */}
        <div data-aos="fade-right" className="flex flex-col">
          {/* Subheading */}
          <div className="text-[#6CA033] ">
            {/* Small Title */}
            <p className="flex items-center gap-2 text-sm mb-3">
              <span className="w-3 h-3  rounded-full">
                <Image
                  src="/austofix/screw-1.png"
                  alt="idea"
                  width={12}
                  height={12}
                  className="w-full h-full object-contain p-px"
                />
              </span>
              what we will offer?
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
            Turning ideas into market-ready medical solutions
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
            Our 25 years of Medical Device experience and a high quality &
            responsive commercialisation platform for any Class I — Class IIb
            Medical Device.
          </p>

          {/* Feature List */}
          <div className="space-y-3 pt-8">
            {/* First two features stack normally */}
            {firstTwoFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <PlusCircle
                  className="text-[#2D5A1E] shrink-0"
                  size={20}
                  fill="#2D5A1E"
                  color="white"
                />
                <span className="text-xs md:text-sm text-gray-600 font-medium">
                  {feature}
                </span>
              </div>
            ))}

            {/* Change: 3rd Feature and Button in a Flex Row */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex flex-1 items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100 w-full">
                <PlusCircle
                  className="text-[#2D5A1E] shrink-0"
                  size={20}
                  fill="#2D5A1E"
                  color="white"
                />
                <span className="text-xs md:text-sm text-gray-600 font-medium">
                  {thirdFeature}
                </span>
              </div>

              {/* View More Button aligned with the 3rd box */}
              <div className="relative inline-block group">
                <button className="bg-[#6CA033] text-white px-6 py-3 pr-14 rounded-full font-medium hover:bg-[#7e9b5f] transition">
                  View More
                </button>

                <span className="absolute top-1/2 -translate-y-1/2 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} className="text-[#BDD630]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
