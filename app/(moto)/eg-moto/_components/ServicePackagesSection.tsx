"use client";

import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function ServicePackagesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Image Section */}
          <div className="rounded-3xl overflow-hidden shadow-lg aspect-[1.4/1]" data-aos="fade-up">
            <img
              src="/nihon/images/solution-1.png"
              alt="Tailor-Made Service Packages"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
              <h2 className="text-[#0068B3] font-semibold text-[16px]">
                Our Services
              </h2>
            </div>

            <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>

            <h3 className="text-[24px] md:text-[28px] font-bold text-[#353A3D] mb-5 leading-tight">
              Tailor-Made Service Packages for Reliable <br className="hidden md:block" /> Healthcare Solutions
            </h3>

            <div className="space-y-4 text-[#333333] text-[15px] leading-relaxed mb-6 text-justify">
              <p>
                Flexible service plans designed for hospitals and medtech environments. From installation and training to preventive maintenance, rapid repairs, and compliance updates—our experts keep your systems running at peak performance so you can focus on patient care.
              </p>
              <p>
                Our expert service teams work proactively to minimize downtime, optimize workflow efficiency, and maintain compliance with the latest healthcare standards and regulations. With customized maintenance plans, software updates, performance checks, and responsive support, we help healthcare providers maintain safe, efficient, and uninterrupted patient care.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>

            <div className="flex flex-col gap-6">
              <div>
                <Button href="#" variant="primary" size="md">
                  Book a consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
