"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";
import { Check, CircleCheck } from "lucide-react";
import { useState } from "react";



export default function MedacureHighlight() {

  return (
    <section className="bg-[#2E2662] py-20 overflow-hidden">
      <div className="max-w-380 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="text-white max-w-2xl">

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            AeroLite Portable Oxygen Concentrator
          </h2>

          {/* Description */}
          <p className="text-white leading-7.5 mb-6">
            The AeroLite Portable Oxygen Concentrator by Medacure provides
            medical grade oxygen in a compact battery operated unit. Lightweight
            and portable, it's ideal for travel. Includes a long lasting battery
            with optional extended battery that will double the use time...
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              "High oxygen output: 1260 ml",
              "Compact and lightweight design",
              "Ultra-Quiet Low noise level",
              "Six pulse flow settings",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CircleCheck className="shrink-0 w-6 h-6 text-[#2E2662] fill-[#ffffff] " />
                <span className="text-white/90 text-base">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            data-aos="zoom-in"
            className="border cursor-pointer border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2e2463] transition"
          >
            View Products
          </button>
        </div>

        {/* RIGHT VIDEO BOX */}
        <div
          data-aos="fade-left"
          className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden"
        >
          {/* Replace with video later */}
          <DynamicVideoPlayer
            type="360"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}