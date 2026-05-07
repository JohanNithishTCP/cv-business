"use client";

import { ArrowBigRight, ArrowUpRight } from "lucide-react";

const features = [
  "Focuses on improving cancer detection and forensic medical documentation",
  "Uses innovative digital colposcopy technology",
  "Improves quality of cervical cancer screening and forensic exams",
  "Supports accurate documentation and better workflow",
];

export default function LutechAbout() {
  return (
    <section className="bg-[#f5f7f9] py-12 md:py-16 lg:py-20">
      <div className="max-w-380 mx-auto px-4 md:px-6 lg:px-10 grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="w-full">
          
          {/* Label */}
          <p className="text-base text-gray-500  font-medium">About Us</p>

          {/* Heading */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#00769E] leading-tight mb-6">
            A company committed to quality.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-7.5 mb-6 font-rubik">
            Lutech Medical is dedicated to advancing cancer detection and forensic
            medical documentation through innovative digital colposcopy technology.
            We aim to set the gold standard in medical imaging by delivering
            solutions that streamline efficiency during exams, safeguard sensitive
            patient information, and enhance the experience for both providers and
            patients.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((item, i) => (
              <div key={i} className="flex items-start gap-3 font-rubik">
                
                {/* Icon */}
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#0196D5] text-white text-xs mt-1">
                  ✓
                </div>

                {/* Text */}
                <p className="text-gray-700 text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center group ">
            <button className="cursor-pointer bg-[#00769E] text-white px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
              Get to Know Us
            </button>

            <button className="cursor-pointer w-11 h-11 flex items-center justify-center rounded-full bg-[#00769E] text-white hover:opacity-90 transition ">
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition"/>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="w-full h-[240px] md:h-[340px] lg:h-[420px] rounded-2xl shadow-md overflow-hidden"
        >
          <img
            src="/lutech-medical/assets/lutech-about.jpg" // replace later
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}