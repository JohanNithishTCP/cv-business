"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

export default function Development() {
  return (
    <section className="w-full py-16 flex justify-center">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div
          data-aos="fade-left"
          className="w-full h-full relative rounded-2xl overflow-hidden">
          <Image
            src="/de-soutter-medical/development.png" // 👉 place image in public/about/
            alt="About"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-right" className="space-y-6 text-[#333333]">
          <h2 className="text-[#333333] text-[22px] font-medium">
            Design & Development
          </h2>

          <p className="eading-relaxed text-base">
            At De Soutter Medical, we fundamentally believe in the need for
            continual investment in research and development (R&D). This ensures
            that we remain at the forefront of technological innovation.
          </p>

          <p className="leading-relaxed text-base">
            All of our products are designed and developed in house by our team
            of world class specialist engineers. Our design team incorporates a
            broad range of engineering disciplines, from mechanical and
            electronic manufacturing and software.
          </p>

          {/* FEATURES */}
          <div className="space-y-6">
            {[
              "Expertise across mechanical, electronic, software, and manufacturing engineering",
              "Strong partnerships with surgeons and healthcare professionals worldwide",
              "Development of innovative, practical, and high-performance solutions",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className=" bg-[#33363F] rounded-full p-1 text-[#FFFFFF] text-base font-bold">
                  <Check size={14} />
                </div>
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-4 bg-[#5A6FB0] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#4a5fa0] transition">
            View Our Innovation <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
