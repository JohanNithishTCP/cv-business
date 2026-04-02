"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
  "https://cdn.clinicalvisuals.com/medical/invotec/landingvideos/invotec_02.webm",
];

export default function RegulatoryQuality() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const points = [
    "Continuously improving all aspects of our business.",
    "Improving communication with our customers through product definition, design and problem solving.",
    "Involving all employees in quality system efforts.",
  ];

  return (
    <section className="bg-[#f9f9f9] py-10 md:py-28 px-4 md:px-10 lg:px-4">
      <div className="max-w-400 mx-auto">

        {/* Section Title */}
        <h2
          className="text-center text-[22px] md:text-[30px] font-semibold text-black mb-6 md:mb-12"
          data-aos="fade-up"
        >
          Regulatory & Quality
        </h2>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h3 className="text-[#336699] underline font-medium text-xl mb-4">
              Quality Commitment
            </h3>

            <p className="text-base text-gray-600 leading-relaxed mb-5">
              Utah Medical Products, Inc.® and its subsidiaries are dedicated to delivering products of the highest quality, ensuring they meet or exceed the expectations and needs of our customers. This commitment to excellence is the cornerstone of UTMD’s operations. We are passionate about continuous quality improvement and take great pride in our ability to respond effectively to the diverse needs of our customers.
            </p>

            {/* Bullet Points */}
            <div className="space-y-3 mb-5">
              {points.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 shrink-0 rounded-full bg-[#336699] flex items-center justify-center mt-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <p className="text-base text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-base text-gray-600 leading-relaxed">
              Utah Medical Products, Inc.® (UTMD) is dedicated to creating the safest and most effective medical devices. Their quality systems are designed to achieve this goal, resulting in devices used hundreds of thousands of times each year in high-risk critical care, with very few complaints.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="w-full h-56 sm:h-72 md:h-96 rounded-lg overflow-hidden bg-gray-200 grid grid-cols-10 gap-2 p-2"
            data-aos="fade-left"
          >
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://cdn.clinicalvisuals.com/medical/utah/short_clips/UTAH-2.webm" type="video/webm" />
            </video>
          </div>

        </div>
      </div>
    </section>
  );
}