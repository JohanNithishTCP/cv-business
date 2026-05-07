import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function ModeOfOperations() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16">

        {/* Video Column */}
        <div data-aos="fade-right">
          <div className="relative aspect-video rounded-3xl overflow-hidden flex items-center justify-center group cursor-pointer transition-all hover:bg-gray-100">
            <DynamicVideoPlayer type="short-2" className="absolute inset-0 w-full h-full object-cover z-0 " />
          </div>
        </div>

        {/* Info Column */}
        <div className="flex flex-col gap-8" data-aos="fade-left">
          <h2 className="text-[30px] md:text-[32px] font-semibold text-[#1A1A1A] leading-tight">
            Intuitive design and Mode of Operations
          </h2>

          <p className="text-[#827E76] leading-relaxed text-[16px] md:text-[17px]">
            The Horizon Brammi's user interface is designed to be simple, intuitive, and easy to follow. The responsive touchscreen enables desired settings to be adjusted even during use. Users can see real-time temperature trends clearly displayed.
          </p>

          <div className="flex flex-col gap-6">
            {/* Servo Mode */}
            <div className="flex items-start gap-4">
              <div className="p-2 w-14 h-14 bg-[#064163] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#064163]/10">
                <img src="/horizon/images/thermometer.png" alt="Servo Controlled Mode" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-[#1A1A1A] font-bold mb-1 uppercase tracking-tight text-[20px]">Servo-Controlled Mode</h4>
                <p className="text-[16px] text-[#827E76] leading-snug">Automatically adjusts the mattress temperature to maintain the set target core temperature using precise servo control</p>
              </div>
            </div>

            {/* Mattress Mode */}
            <div className="flex items-start gap-4">
              <div className="p-2 w-14 h-14 bg-[#064163] rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-[#064163]/10">
                <img src="/horizon/images/mattress.png" alt="Mattress Mode" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-[#1A1A1A] font-bold mb-1 uppercase tracking-tight text-[20px]">Mattress Mode</h4>
                <p className="text-[16px] text-[#827E76] leading-snug">Keeps the mattress temperature steady, regardless of any changes in the neonate's core temperature</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
