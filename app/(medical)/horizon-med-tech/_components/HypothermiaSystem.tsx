import React from "react";
import Button from "./Button";
import { CheckCircle2 } from "lucide-react";

export default function HypothermiaSystem() {
  return (
    <section className="w-full py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16">

        {/* Text Column */}
        <div className="flex flex-col gap-8" data-aos="fade-right">
          <h2 className="text-[30px] md:text-[32px] font-semibold text-[#1A1A1A] leading-tight">
            Brammi Therapeutic Hypothermia System
          </h2>

          <div className="space-y-6 text-[#827E76] leading-relaxed text-[16px] md:text-[17px] text-justify">
            <p>
              The system features on-screen setup and draining instructions that guide users through installation and maintenance with ease. It includes a graphical display of temperature, allowing for clear and precise monitoring at a glance. The unit is supported by a sturdy stand that comes with a front storage basket, providing convenient space for accessories or essentials. Additionally, it offers data save and transfer capabilities, enabling users to store and manage important information efficiently.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {[
              "Battery mode for continuity of therapy during transfer",
              "Continuous mattress temperature (non-servo) mode",
              "Continuous cooling and warm (servo) modes"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-3">
                <img src="/horizon/images/check-circle.png" alt="check" className="w-6 h-6" />
                <span className="text-[#827E76] font-normal text-[16px] md:text-[17px]">{text}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Button href="#">
              View Product
            </Button>
          </div>
        </div>

        {/* Image Column */}
        <div data-aos="fade-left">
          <div className="bg-[#F1F1F1] rounded-[40px] p-8 md:p-12 overflow-hidden">
            <img
              src="/horizon/images/picterus-jaundice-pro.png"
              alt="Brammi System"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
