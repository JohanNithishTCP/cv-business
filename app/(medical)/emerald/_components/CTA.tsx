"use client";

import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="">
      <div className="w-[95%] mx-auto bg-[#014D65] rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('/emerald/images/bg-frame.jpg')] opacity-40 bg-cover bg-center"></div>
        </div>

        <div className="relative z-10 space-y-3">
          <h2 className="text-[30px] lg:text-[36px] font-bold text-white font-albert">
            Have a Question?
          </h2>
          <p className="text-white/80 lg:text-[17px] text-[16px] max-w-2xl mx-auto">
            Send us a message and someone from our sales team will reach out to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button href="#contact" variant="white" size="md" rounded="full" className="px-10 !text-[#014D65] font-bold shadow-lg" hasArrow={true}>
              Contact Us
            </Button>
            <Button href="#dealer" variant="white" size="md" rounded="full" className="px-10 !text-[#014D65] font-bold shadow-lg" hasArrow={true}>
              Become a Dealer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
