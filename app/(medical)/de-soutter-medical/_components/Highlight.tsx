"use client";

import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Highlight() {
  return (
    <section className="relative w-full py-16 flex justify-center bg-[#5E76BA] overflow-hidden">
      {/* BACKGROUND IMAGE (15% opacity) */}
      <div className="absolute inset-0">
        <Image
          src="/de-soutter-medical/bg-1.png" // 👉 your bg image
          alt="background"
          fill
          className="object-cover opacity-[0.15]"
        />
      </div>
      <div className="container grid grid-cols-1 px-6 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div
          data-aos="fade-left"
          className="lg:col-span-5 text-[#FFFFFF] space-y-6">
          <h2 className="text-[#FFFFFF] text-[22px] font-medium">hekaDrill™</h2>

          <p className="text-[#FFFFFF] text-base">
            hekaDrill high speed neuro and ENT instrument developed with
            innovation and precision as a guiding principle. High speed
            instrument designed for delicate bone dissection. The hekaDrill has
            been developed with innovation and precision as a guiding principle
            enabling the surgeon to perform the most demanding neuro and ENT
            procedures with complete confidence.
          </p>

          {/* Features */}
          <div className="space-y-3">
            <h2 className="text-[22px] font-medium">Key Features</h2>

            {[
              "High speed 85000 rpm motor",
              "Wireless foot pedal",
              "Adjustable acceleration and braking",
              "Adjustable bur exposure lengths",
              "Advanced motor control ensures total comfort",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className=" bg-[#FFFFFF] rounded-full p-1 text-[#5A6FB0] text-base font-bold">
                  <Check size={14} />
                </div>
                {/* <Image
                  src="/de-soutter-medical/check.png" // 👉 put image in public/icons/
                  alt="check"
                  width={16}
                  height={16}
                  className="mt-1 bg-[#FFFFFF] rounded-full p-1 text-[#5A6FB0]"
                /> */}

                <p className="text-[#FFFFFF] text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-4 bg-[#FFFFFF] text-[#5A6FB0] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
            Discover More <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-right"
          className="lg:col-span-7 w-full aspect-video bg-[#FFFFFF]/20 rounded-2xl overflow-hidden backdrop-blur-sm flex items-center justify-center">
          {/* <video
            src="/video/hekadrill.mp4" // 👉 put your video in public/video/
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          /> */}
          <DynamicVideoPlayer
            type="short"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
