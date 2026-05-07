// components/AboutSection.js
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Image */}
        <div
          data-aos="fade-left"
          className="lg:col-span-7 relative h-full w-full">
          <img
            src="/arcomed/about.png" // Replace with your image path
            alt="Zürich City View"
            className="rounded-2xl object-cover w-full h-full shadow-lg"
          />
        </div>

        {/* Right Column: Content */}
        <div data-aos="fade-right" className="lg:col-span-5 space-y-4">
          <div className="space-y-3">
            <h2 className="text-[#C10E1A] font-semibold text-[22px]">
              About Arcomed
            </h2>
            <div className="text-[#333333] space-y-4 leading-relaxed text-base">
              <p>
                As a global innovation leader of Swiss origin since 1974, we
                pride ourselves on delivering the highest quality solutions to
                healthcare. We have pioneered multiple developments, greatly
                contributing to the highest levels of patient safety and patient
                care.
              </p>
              <p>
                At Arcomed, our values define how we innovate, collaborate, and
                deliver excellence in healthcare. We are committed to building
                trust through quality, transparency, and long-term partnerships
                while continuously advancing patient care through innovation.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-[#C10E1A] font-semibold text-[22px]">
              Our Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Value Card 1 */}
              <div className="border border-[#0000000D] p-6 rounded-xl shadow-sm text-center space-y-2">
                <h4 className="font-semibold text-[20px] text-[#353A3D]">
                  Innovation First
                </h4>
                <p className="text-base font-light text-[#333333]">
                  We continuously invest in research and development to deliver
                  advanced, future-ready healthcare
                </p>
              </div>

              {/* Value Card 2 */}
              <div className="border border-[#0000000D] p-6 rounded-xl shadow-sm text-center space-y-2">
                <h4 className="font-semibold text-[20px] text-[#353A3D]">
                  Quality & Reliability
                </h4>
                <p className="text-base font-light text-[#333333]">
                  Swiss precision and strict standards ensure safe,
                  high-performance products every time.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="relative inline-flex items-center cursor-pointer">
            <button className="bg-[#C10E1A]  text-[#FFFFFF] text-base font-semibold px-8 h-12 rounded-full flex items-center pr-14 cursor-pointer">
              Get to Know Us
            </button>

            {/* Circle aligned with edge */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#FFFFFF] bg-[#353A3D] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
              <ArrowRightIcon size={20} className="text-[#FFFFFF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
