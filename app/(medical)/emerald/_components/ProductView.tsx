"use client";

import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const ProductView = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Content */}
          <div data-aos="fade-right" className="w-full lg:w-1/2 space-y-6">
            <div className="">
              <span className="text-[#199A68] font-semibold text-[16px] lg:text-[17px]">SKU #: 61759</span>
              <h2 className="text-[28px] lg:text-[32px] font-semibold text-[#014D65] leading-tight mt-1">
                Digital Bariatric Alternating Pressure LAL Mattress System
              </h2>
            </div>

            <p className="lg:text-[17px] text-[16px] text-[#333333] leading-relaxed">
              The Selectis Serenity XL Digital Bariatric Alternating Pressure LAL Mattress System is designed to provide advanced pressure relief and support for patients up to 660 lbs. Its innovative design enhances comfort, promotes skin integrity, and helps caregivers manage pressure redistribution effectively. With user-friendly controls and safety features, this system delivers reliable performance for various care settings.
            </p>

            <div className="w-full h-[1px] bg-[#dddddd]"></div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="#view" variant="primary" size="md" rounded="full" className="px-10 group !bg-[#014D65]" hasArrow={true}>
                View Product
              </Button>
              <Button href="#cart" variant="ghost" size="md" rounded="full" className="px-10 !bg-[#F5F5F5] !text-[#199A68] border-none group" hasArrow={true} arrowVariant="green">
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Right Side: 360 Video Player */}
          <div data-aos="fade-left" className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-lg ">
              <DynamicVideoPlayer
                type="360"
                className="absolute inset-0 w-full h-full object-cover"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
