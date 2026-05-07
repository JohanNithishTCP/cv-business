"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight, CircleCheck } from "lucide-react";
export default function SternFeatures() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="bg-[#f5f6f7] py-14 md:py-20 overflow-hidden">
      <div className="max-w-380 mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right">

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              Ecut 400S Plus - Features
            </h2>

            {/* GROUP 1 */}
            <div className="mb-6">
              <h3 className="text-[#1E6FB6] font-semibold mb-3 text-lg">
                Twin operative activity
              </h3>

              <ul className="space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <span>
                    <CircleCheck size={22} className="fill-[#25477F] text-white " />
                  </span>
                  Two output channels for monopolar cutting
                </li>

                <li className="flex items-start gap-3">
                  <span>
                    <CircleCheck size={22} className="fill-[#25477F] text-white " />
                  </span>
                  Two independent setting and output channels for the most
                  frequent monopolar coagulation
                </li>
              </ul>
            </div>

            {/* GROUP 2 */}
            <div className="mb-8">
              <h3 className="text-[#1E6FB6] font-semibold mb-3 text-lg">
                Controlled cutting procedures
              </h3>

              <ul className="space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <span>
                    <CircleCheck size={22} className="fill-[#25477F] text-white " />
                  </span>
                  Automatic power or TACS (Tissue Adaptive Contact System)
                </li>

                <li className="flex items-start gap-3">
                  <span>
                    <CircleCheck size={22} className="fill-[#25477F] text-white " />
                  </span>
                  Enhanced cutting current for eschar free incision
                </li>

                <li className="flex items-start gap-3">
                  <span>
                    <CircleCheck size={22} className="fill-[#25477F] text-white " />
                  </span>
                  Cutting current with selectable coagulating property for bleeding controlled dissection
                </li>

                <li className="flex items-start gap-3">
                  <span>
                    <CircleCheck size={22} className="fill-[#25477F] text-white " />
                  </span>
                  Low capacitive coupling by slow BLEND current for endoscopic procedures
                </li>
              </ul>
            </div>

            {/* CTA */}
            <button className="inline-flex items-center gap-2 bg-[#1E6FB6] text-white text-sm px-5 py-3 rounded-md hover:bg-[#25477F] transition cursor-pointer">
              View Product
              <span>
                <ArrowRight size={18} className="text-white" />
              </span>
            </button>
          </div>

          {/* RIGHT MEDIA */}
          <div data-aos="fade-left">
            <div className="rounded-xl overflow-hidden">
              {/* Video placeholder */}
              <div className="w-full h-[220px] sm:h-[280px] md:h-[360px] bg-gray-300">
                <DynamicVideoPlayer type="short-2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}