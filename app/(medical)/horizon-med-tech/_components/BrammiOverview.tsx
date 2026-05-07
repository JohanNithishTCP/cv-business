import React from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function BrammiOverview() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 md:gap-16">

        {/* Video Column */}
        <div data-aos="fade-right" className="lg:col-span-7">
          <div className="relative aspect-video rounded-3xl overflow-hidden flex items-center justify-center group cursor-pointer transition-all hover:bg-gray-100">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover z-0 " />
          </div>
        </div>

        {/* Text Column */}
        <div className="flex flex-col gap-8 lg:col-span-5" data-aos="fade-left">
          <h2 className="text-[30px] md:text-[32px] font-semibold text-[#1A1A1A] leading-tight">
            Horizon Brammi Overview
          </h2>

          <div className="space-y-6 text-[#827E76] font-light leading-relaxed text-[16px] md:text-[17px] text-justify">
            <p>
              The Horizon Brammi is a compact thermoregulation device which has been designed to achieve precise temperature control in neonatal patients. It incorporates different modes to suit clinical management, including a fully automated, servo-controlled function to deliver moderate hypothermia followed by controlled slow rewarming, all of which is fully configurable.
            </p>
            <p>
              The front panel houses a responsive touchscreen display offering an intuitive interface for operation, including step-by-step instructions for filling and draining the system. It features a back-up battery enabling up to 1 hr of use in the event of power interruption.
            </p>
          </div>

          <div className="pt-4 lg:pt-0">
            <Button href="#">
              View Product
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
