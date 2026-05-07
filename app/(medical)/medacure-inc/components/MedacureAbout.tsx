"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hexagon from "./MedacureHexagon";
import { CircleCheck } from "lucide-react";

const highlights = [
  {
    title: "Our professional staff",
    description: "is expertly trained in a broad range of healthcare products.",
  },
  {
    title: "Our service and dedication",
    description: "to our clients are unsurpassed.",
  },
  {
    title: "Our goal",
    description:
      "is to offer the most advanced quality product at the absolute lowest price.",
  },
];

export default function MedacureAbout() {


  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden" id="about">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src="/medacure/assets/medacure-bg.jpg"
          alt="pattern"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-380 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT - HEX IMAGES */}
        <div className="" data-aos="fade-right">
            <img src="/medacure/assets/medacure-about1.png" alt="hex-bg" className="w-full h-full object-cover" />
        </div>

        {/* RIGHT - CONTENT */}
        <div data-aos="fade-left">
          <p className="text-[#2E2662] font-semibold mb-3">
            About MedaCure Inc.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
            Leading the Future of Healthcare Products
          </h2>

          <p className="text-gray-600 mb-4 leading-7.5">
            MedaCure® designs, develops & manufactures a full range of Durable Medical Equipment for the long term and homecare space. Our unique product line includes beds, patient lifts, alternating pressure and preventive mattresses, oxygen concentrators, wheelchairs and a full line of furniture and chairs. With exclusive patented features, our products rival all of the major brands in quality, service and price.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            We continuously conduct research to bring you innovative products that deliver exceptional results and maximize the health and wellness of the patient. The ongoing research and training of our team guarantees that our professional knowledge is at the forefront of the latest developments in health and senior care.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-6">
            {highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[#666666]">
                <CircleCheck
                  size={20}
                  color="#ffffff"
                  fill="#2E2662"
                  className="shrink-0 mt-1"
                />
                <span>
                  <span className="text-[#2E2662] font-medium">
                    {item.title}
                  </span>{" "}
                  {item.description}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            data-aos="zoom-in"
            className="cursor-pointer border-2 border-[#2E2662] text-[#333333] px-6 py-3 rounded-full hover:bg-[#2E2662] hover:text-white transition"
          >
            Know More About Us
          </button>
        </div>
      </div>
    </section>
  );
}