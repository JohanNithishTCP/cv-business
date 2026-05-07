"use client";

import React from "react";
import Button from "./Button";

const whyFeatures = [
  {
    title: "Skilled Product Development Team",
    icon: "/emerald/images/skill.png"
  },
  {
    title: "Quick order Processing & Shipment",
    icon: "/emerald/images/truck.png"
  },
  {
    title: "Lasting Products You Can Rely On",
    icon: "/emerald/images/diamond.png"
  },
  {
    title: "Dedicated Customer support team",
    icon: "/emerald/images/call-center.png"
  }
];

const checklist = [
  "Nationwide Distribution Centers",
  "Strong Distributor Relationships",
  "Guaranteed In-Stock* Program",
  "Efficient Supply Chain Management"
];

const WhyChoose = () => {
  return (
    <section className="pb-12 lg:pb-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-[#199A68] font-semibold text-[16px] lg:text-[17px] tracking-wider">Why Choose Emerald Supply?</span>
          <h2 className="text-[28px] lg:text-[32px] font-bold text-[#014D65] font-albert leading-tight mt-1">
            We are a seasoned player in the DME field
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Image */}
          <div data-aos="fade-right" className="w-full lg:w-1/2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src="/emerald/images/supply.png"
                alt="Emerald Supply Setup"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div data-aos="fade-left" className="w-full lg:w-1/2 space-y-8">
            <p className="text-[16px] lg:text-[17px] text-[#333333] leading-relaxed">
              Our commitment to excellence is reflected in our quick responses and ship times, ensuring that your needs are met promptly. Additionally, we maintain a robust inventory of equipment, guaranteeing that you have access to the products you require when you need them. Being a reputable DME manufacturer, you can trust in our quality, reliability, and efficiency, making us your top choice.
            </p>

            {/* Icons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center shrink-0">
                    <img src={feature.icon} alt={feature.title} className="w-8 h-8 object-contain" />
                  </div>
                  <span className="text-[15px] font-bold text-[#014D65] mt-1 leading-tight">{feature.title}</span>
                </div>
              ))}
            </div>
            <div className="w-full h-[1px] bg-[#dddddd]"></div>
            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img src="/emerald/images/check.png" alt="Check" className="w-5 h-5 object-contain" />
                  <span className="text-[15px] text-[#333333] font-medium">{item}</span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
