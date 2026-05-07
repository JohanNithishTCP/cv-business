"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight, CircleCheck } from "lucide-react";
import { RxDoubleArrowRight } from "react-icons/rx";

export default function SternProduct() {

  return (
    <section className="relative py-20 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-bottom-right bg-no-repeat"
        style={{ backgroundImage: "url('/stern-med/stern-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-[#1E6FB6CF]" />

      {/* OPTIONAL RADIAL GLOW */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full"></div>
      <div className="relative max-w-380 mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT VIDEO */}
          <div data-aos="fade-right">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-300 h-[320px] md:h-[380px]">
              {/* Replace with video later */}
              <DynamicVideoPlayer type="short-1" className="w-full h-full object-cover" />

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" className="text-white max-w-xl">
            <p className="text-base opacity-80 mb-2">
              Ecut 400S Plus
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              electrosurgical unit
            </h2>

            <p className="text-base leading-relaxed opacity-90 mb-4">
              Ecut 400S Plus is an advanced electrosurgical unit enabling surgeons to perform mono and bipolar surgery simultaneously in a wide range of applications such as ambulatory surgery, endoscopy, first aid, gastroenterology, general surgery, Gynecology, neurosurgery, otorhinolaryngology, orthopedics, pediatric surgery, plastic surgery, pulmonology and Vascular Surgery, Thorax Surgery and Trans Urethral Resection (TUR).
            </p>

            <p className="text-base leading-relaxed opacity-90 mb-6">
              The versatile electrosurgery devices from SternMed are argon assisted. The automatic adjustment of the cutting and coagulation performance are the further highlights.
            </p>

            <button className="inline-flex items-center gap-2 bg-white text-[#1E6FB6]  cursor-pointer text-base px-5 py-3 rounded-md hover:bg-gray-100 transition">
              View Specifications
              <span><ArrowRight /></span>
            </button>
          </div>
        </div>

        {/* BOTTOM ACCESSORIES */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center gap-8">

          {/* LEFT LABEL */}
          <div className="text-white font-semibold tracking-wide flex">
            ACCESSORIES <span className="ml-2">
              <RxDoubleArrowRight className="w-5 h-5 mt-0.5" />
            </span>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 gap-6 w-full">

            {/* CARD 1 */}
            <div data-aos="fade-up" className="bg-white/90 rounded-xl shadow-md p-6 relative">

              <div className="absolute top-1 left-1 bg-[#25477F] text-white text-base px-4 py-1 rounded-tl-xl rounded-br-xl">
                Imaging & Diagnostics
              </div>

              <ul className="mt-8 space-y-3 text-base text-gray-700 grid lg:grid-cols-2">
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Disposable handle with switches</li>
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Disposable split neutral electrode</li>
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Reusable handle with switches</li>
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Cable for neutral electrode</li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div data-aos="fade-up" className="bg-white/90 rounded-xl shadow-md p-6 relative">

              <div className="absolute top-1 left-1 bg-[#25477F] text-white text-base px-4 py-1 rounded-tl-xl rounded-br-xl">
                Optional accessories
              </div>

              <ul className="mt-8 space-y-3 text-base text-gray-700 grid lg:grid-cols-2">
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Cable for neutral plate</li>
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Disposable Neutral electrode</li>
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Conductive Rubber neutral electrode</li>
                <li className="flex gap-2 items-center"> <span><CircleCheck className="fill-[#25477F] text-white" /></span> Bipolar artery sealer forceps cable</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}