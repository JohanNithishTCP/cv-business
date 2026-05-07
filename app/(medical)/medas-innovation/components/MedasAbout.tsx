"use client";

import { ArrowRight } from "lucide-react";

export default function MedasAbout() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-380 mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT IMAGE */}
          <div data-aos="fade-right" className="w-full h-full">
            <div className="w-full h-[320px] md:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden">
              <img
                src="/medas-innovation/assets/medas-about.png"
                alt="about"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" className="max-w-xl">
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              About Medadv
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-[#385393] italic text-sm md:text-base">
              “Innovations Improving Health Solutions”
            </p>

            {/* Description */}
            <div className="mt-4 space-y-3 text-gray-600 text-base leading-[1.9]">
              <p>
                Our logistic center and headquarters Located in city of Miami,
                service all over the world offer a wide range of solutions in
                health care business supplies and device.
              </p>
              <p>
                We offer something more than consumables; we offer solutions, we
                know very well what’s mean critical times... but it is more than a
                Medicor craft, it is strictly manufacture compliance, it is
                logistic on time, it is accurate partners who understand that our
                customers are really something more... in short the job well done.
              </p>
            </div>

            {/* CTA */}
            <button className="mt-6 cursor-pointer bg-[#0287C3] hover:bg-[#006AB1] text-white px-6 py-3 rounded-md flex items-center gap-2 transition">
              Learn More <span><ArrowRight/></span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}