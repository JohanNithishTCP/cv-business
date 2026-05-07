"use client";

import React from "react";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Image */}
          <div data-aos="fade-right" className="w-full lg:w-1/2">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <img
                src="/emerald/images/about.png"
                alt="Hospital Bed"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div data-aos="fade-left" className="w-full lg:w-1/2 space-y-6">
            <div className="mb-2">
              <span className="text-[#199A68] font-semibold text-base tracking-wider">About Our Company</span>
              <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#014D65] mt-1 mb-3">
                A DME Manufacturer You Can Rely On
              </h2>
            </div>

            <p className="lg:text-[17px] text-[16px] leading-relaxed">
              With over 25 years of experience in the healthcare industry, our product development team has researched, analyzed, tested, and approved each and every product we create. Manufactured with the end user in mind, <span className="text-[#199A68] font-semibold underline underline-offset-4">Emerald Supply</span> ensures that each model is user-friendly and equipped with features that make it a best seller.
            </p>

            <ul className="space-y-4">
              {[
                "Quality products that meet and exceed industry standards",
                "Regulatory compliant, we prioritize a commitment to safety in both the production & distribution of our equipment",
                "We are a brand that really knows the true needs and expectations of your customers"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src="/emerald/images/check.png" alt="Check" className="w-5 h-5" />
                  <span className="text-[17px] text-[#333333]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button href="#more" variant="secondary" size="md" rounded="full" className="px-10 group bg-[#014D65]" hasArrow={true}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
