import React from "react";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const features = [
  "Full cycle servo-controlled mode for Therapeutic Hypothermia",
  "Continuous core and skin temperature measurement",
  "Fully configurable for duration/degree of hypothermia & rewarming"
];

export default function ProductFeature() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-16">

        {/* Text Section */}
        <div className="flex flex-col gap-8 lg:col-span-5" data-aos="fade-right">
          <h2 className="text-[30px] md:text-[32px] font-bold text-[#1A1A1A] leading-tight">
            Horizon Brammi Servo Controlled Cooling / Warming
          </h2>

          <div className="space-y-6">
            <p className="text-[#827E76] leading-relaxed text-[16px] md:text-[17px]">
              The Brammi is designed to deliver precise, regulated thermoregulation for neonates. The Brammi is intuitive to set-up, simple and reliable to use, and easy to clean.
            </p>
            <p className="text-[#827E76] leading-relaxed text-[16px] md:text-[17px]">
              Warranty, product training and clinical support & education, are all included.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <img src="/horizon/images/check-circle.png" alt="check" className="w-6 h-6" />
                <span className="text-[#827E76] font-normal text-[16px] md:text-[17px] leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Media Section (360 Video Placeholder) */}
        <div data-aos="fade-left" className="lg:col-span-7">
          <div className="relative aspect-video rounded-3xl overflow-hidden flex items-center justify-center group cursor-pointer transition-all hover:bg-gray-100">
            <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover z-0 " />
          </div>
        </div>

      </div>
    </section>
  );
}
