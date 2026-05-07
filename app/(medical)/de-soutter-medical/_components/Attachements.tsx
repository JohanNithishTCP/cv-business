"use client";

import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function Attachments() {
  return (
    <section className="relative w-full py-16 px-6 flex justify-center bg-[#5E76BA30] overflow-hidden">
      {/* BACKGROUND IMAGE (15% opacity) */}
      <div className="absolute inset-0">
        <Image
          src="/de-soutter-medical/bg-2.jpg" // 👉 your bg image
          alt="background"
          fill
          className="object-cover opacity-[0.15]"
        />
      </div>
      <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch px-6">
        {/* LEFT IMAGE */}
        <div data-aos="fade-left" className="lg:col-span-7 space-y-6">
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-white/40 flex items-center justify-center">
            {/* <Image
              src="/products/attachment-main.png" // 👉 put image in public/products/
              alt="hekaDrill Attachments"
              fill
              className="object-cover"
            /> */}

            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover "
            />
          </div>

          <button className="mt-4 bg-[#5E76BA] text-[#FFFFFF] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#4a5f9c] transition">
            View Details <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-right" className="lg:col-span-5 space-y-6">
          <h2 className="text-[#333333] text-[22px] font-medium">
            hekaDrill™ - Attachments
          </h2>

          <p className="text-[#333333] text-base leading-relaxed">
            The HDS series offers a comprehensive range of attachments tailored
            for versatility and precision. It includes both straight and angled
            options, as well as specialized craniotome attachments, designed to
            meet diverse surgical requirements.
          </p>

          <p className="text-[#333333] text-base leading-relaxed">
            Available in 2.38mm and 3.18mm shank sizes, each attachment ensures
            seamless compatibility and secure performance. Engineered with a
            no-lubrication design, these attachments reduce maintenance needs
            while maintaining consistent efficiency and reliability throughout
            procedures.
          </p>

          {/* SMALL IMAGE */}
          <div className="w-full h-70 relative rounded-2xl overflow-hidden bg-[#F9F9F9] shadow-md">
            <Image
              src="/de-soutter-medical/attachment.png" // 👉 second image
              alt="Attachments Set"
              fill
              className="object-contain p-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
