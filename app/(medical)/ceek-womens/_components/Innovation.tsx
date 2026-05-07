"use client";

import { CornerUpRight } from "lucide-react";
import Image from "next/image";

export default function Innovation() {
  return (
    <section className="relative h-100 md:h-125 flex items-center px-6 md:px-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/ceek/bg-full.png" // full design image
        alt="background"
        fill
        className="object-cover object-top"
        priority
      />

      {/* Optional Overlay for readability */}
      <div className="absolute" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white md:px-25  ">
        <p
          data-aos="fade-up"
          className="text-xl md:text-3xl leading-relaxed mb-6">
          For the first time, women’s health is achieving the same level of
          innovation as other medical fields, and Ceek is leading the way.
        </p>

        <button
          data-aos="fade-up"
          className="flex cursor-pointer items-center gap-2 bg-[#FFFFFF] text-[#6F6685] px-6 py-2 rounded-full text-base font-semibold hover:opacity-90 hover:scale-105 transition">
          Learn More
          <CornerUpRight size={20} />
        </button>
      </div>
    </section>
  );
}
