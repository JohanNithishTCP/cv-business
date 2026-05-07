"use client";

import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Long Term Care",
    description: "We provide reliable medical solutions designed to support patients in long-term care settings, ensuring comfort, safety, and consistent health monitoring. Our products help caregivers deliver better outcomes with ease and efficiency.",
    image: "/emerald/images/serve-1.png",
    href: "#long-term-care"
  },
  {
    title: "Assisted Living",
    description: "Our solutions enhance independence while ensuring the right level of support for residents in assisted living environments. We focus on comfort, dignity, and safety through innovative and easy-to-use medical products.",
    image: "/emerald/images/serve-2.png",
    href: "#assisted-living"
  },
  {
    title: "Homecare",
    description: "We bring hospital-grade care into the comfort of your home with user-friendly and dependable medical solutions. Our products empower patients and caregivers to manage health conditions safely and confidently.",
    image: "/emerald/images/serve-3.png",
    href: "#homecare"
  }
];

const WhoWeServe = () => {
  return (
    <section className="pb-12 lg:pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div data-aos="fade-right" className="space-y-4">
            <span className="text-[#199A68] font-semibold text-[16px] lg:text-[17px] tracking-wider">Who We Serve</span>
            <h2 className="text-[28px] lg:text-[32px] font-bold text-[#014D65] leading-tight font-albert mt-1">
              Healthcare Solutions for Every Care Environment
            </h2>
          </div>
          <div data-aos="fade-left">
            <Button href="#more" variant="secondary" size="md" rounded="full" className="px-10 bg-[#014D65]" hasArrow={true}>
              Learn More
            </Button>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="py-8 border-t border-[#DDDDDD] first:border-t-0"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Image side */}
                <div className="w-full lg:w-[550px] aspect-[21/10] lg:aspect-[10/3.5] rounded-2xl overflow-hidden relative group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content side */}
                <div className="flex-1 flex items-start justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="text-[24px] font-bold text-[#014D65] font-albert">{service.title}</h3>
                    <p className="text-[16px] lg:text-[17px] text-[#666666] leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={service.href}
                    className="w-12 h-12 rounded-full bg-[#014D65] flex items-center justify-center text-white shrink-0 hover:bg-[#059347] transition-all duration-300 transform hover:scale-110 mt-1"
                  >
                    <ArrowUpRight size={24} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
