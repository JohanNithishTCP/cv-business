"use client";

import React, { useState } from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";


export default function History() {
  return (
    <section className="w-full flex justify-center pt-6 ">
      <div className="container mx-auto space-y-10">
        <div className="bg-[#F5F5F5] border border-[#F5F5F5] rounded-2xl">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center p-4 lg:p-8">
            {/* LEFT VIDEO (8 cols) */}
            <div
              data-aos="fade-left"
              className="col-span-12 lg:col-span-7 rounded-2xl overflow-hidden bg-[#F5F5F5] h-55 sm:h-70 lg:h-auto">
              <DynamicVideoPlayer
                type="short-2"
                className="w-full h-full object-cover" />
            </div>

            {/* RIGHT CONTENT (4 cols) */}
            <div data-aos="fade-right" className="col-span-12 lg:col-span-5">
              <p className="text-[#333333] text-[17px] font-medium mb-1">
                Our History
              </p>

              <h3 className="text-[24px] font-semibold mb-4">
                Delphos was born from the union of visionaries.
              </h3>

              <p className="text-[#059347] text-[17px] font-bold  mb-2 italic">
                “With over 25 years of experience”
              </p>

              <p className="text-[#666666] text-[17px] leading-relaxed mb-4 text-justify">
                This expertise was fundamental in establishing a successful
                formula that combines an understanding of the sector's needs
                with an unwavering commitment to quality.
              </p>

              <p className="text-[#666666] text-[17px] leading-relaxed mb-4 text-justify">
                With this robust infrastructure, we are able to offer customized
                and innovative solutions that meet the demands of healthcare
                professionals and provide significant benefits to patients.
              </p>

              <Button href="#" variant="primary" size="md" className="w-fit">
                Know About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
