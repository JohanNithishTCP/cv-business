import React from "react";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-12">
        {/* About Part */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mb-20">
          {/* Team Image Section */}
          <div data-aos="fade-right">
            <div className="rounded-3xl overflow-hidden shadow-sm relative group">
              <div className="bg-gray-100 aspect-[16/10] w-full flex items-center justify-center relative overflow-hidden">
                <img
                  src="/horizon/images/about.png"
                  alt="Horizon Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col gap-6" data-aos="fade-left">
            <h2 className="text-[30px] md:text-[32px] font-semibold text-[#1A1A1A] leading-tight">
              About Horizon Med Tech
            </h2>

            <div className="space-y-6 text-[#827E76] leading-relaxed font-light text-[16px] md:text-[17px]">
              <p>
                Horizon Med Tech is a clinically-led British manufacturing and distribution medical technology business.
              </p>
              <p>
                Horizon Med Tech is focussed on providing "best in class" technology at affordable prices, with world-class training and support based on our specialist and commercial expertise.
              </p>
              <p>
                Our global mission is to deliver quality, improve knowledge and enhance clinical outcomes.
              </p>
            </div>

            <div className="pt-4">
              <Button href="#about">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 mb-20" data-aos="fade-up"></div>

        {/* Mission Part */}
        <div className="max-w-7xl mx-auto text-center" data-aos="zoom-in">
          <p className="text-2xl md:text-[28px] font-medium text-[#064163] leading-[1.6]">
            Our mission is to help Clinicians and Healthcare Providers achieve the best outcomes for patients. We are specialists in Neonatal and Paediatric care, and our solutions cross from Intensive Care to Home-based technologies
          </p>
        </div>
      </div>
    </section>
  );
}
