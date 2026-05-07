"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const technologies = [
  {
    title: "Pulse Oximeter",
    logo: "/nihon/images/tech-s1.png",
    image: "/nihon/images/tech-b1.png",
    description: "The Pulse Oximeter is a device that continuously and non-invasively monitors the level of oxygen in patients' bloodstream...",
    link: "#",
    logoName: "BluPRO"
  },
  {
    title: "iNIBP",
    logo: "/nihon/images/tech-s2.png",
    image: "/nihon/images/tech-b2.png",
    description: "iNIBP is Nihon Kohden's non-invasive blood pressure measurement algorithm using inflation technology. iNIBP completes...",
    link: "#",
    logoName: "iNIBP"
  },
  {
    title: "esCCO",
    logo: "/nihon/images/tech-s3.png",
    image: "/nihon/images/tech-b3.png",
    description: "esCCO provides cardiac output information only using common vital sign parameters of ECG, SpO2 and blood pressure...",
    link: "#",
    logoName: "esCCO"
  }
];

const TechnologiesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#D8EFFF]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
            <h2 className="text-[#0068B3] font-semibold text-[16px]">
              Innovative Technologies
            </h2>
          </div>

          <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>
          <p className="text-[#333333] text-sm md:text-[17px] leading-relaxed">
            Nihon Kohden has developed innovative and unique technologies that contribute to progress in medical care.  We boldly take on new challenges, maintaining a keen eye for detail as we keep in mind the spirit of the founder.

          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="flex flex-col group"
              data-aos="fade-up"
            >
              {/* Card Image Area */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white mb-6 aspect-[4/3]">
                {/* Logo Badge */}
                <div className="absolute top-0 left-0 z-20 bg-white px-4 py-2 rounded-2xl shadow-md min-w-[140px] flex items-center justify-center h-24 border-[6px] border-[#D8EFFF]">
                  <img
                    src={tech.logo}
                    alt={tech.title}
                    className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <img
                  src={tech.image}
                  alt={tech.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Card Content */}
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#2B2F31] mb-3">{tech.title}</h3>
              <p className="text-[#333333] text-[17px] mb-4 leading-relaxed">
                {tech.description}
              </p>
              <Link
                href={tech.link}
                className="text-[#0068B3] font-bold text-sm md:text-[16px] flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read More <span className="text-lg">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Slider Indicator */}
        <div className="flex justify-center mt-12 gap-2">
          <div className="w-12 h-1.5 rounded-full bg-[#0068B3]"></div>
          <div className="w-12 h-1.5 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
