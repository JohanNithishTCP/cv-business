import React from "react";
import { ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function EndToEnd() {
  return (
    <section
      className="w-full py-16 md:py-24 text-white relative bg-cover bg-bottom"
      style={{ backgroundImage: "url('/sunset-healthcare/home/bg.jpg')" }}
    >
      {/* Color overlay over the background image */}
      <div className="absolute inset-0 bg-[#54626d] opacity-97 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col">
            <h3 data-aos="fade-up" className="font-bold mb-3 text-[14px] text-white/90 uppercase">Our Services</h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium mb-6 leading-[1.2]">
              End-to-end healthcare solutions designed for efficiency, quality, and business growth
            </h2>
            <div data-aos="fade-up" data-aos-delay="200" className="space-y-4 text-[17px] leading-[1.7] text-justify text-white/90 mb-8">
              <p>
                We provide a comprehensive range of services that go beyond product supply, helping healthcare businesses operate more efficiently and grow with confidence. From private labeling and custom packaging to OEM manufacturing and quality testing, our solutions are tailored to meet diverse operational needs.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                With nationwide coverage and global reach, we ensure fast sourcing, reliable distribution, and seamless delivery. Our flexible approach includes drop shipping, simplified onboarding, and direct access to knowledgeable support—making it easier for businesses to scale and succeed.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                Explore Product <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="300" className="w-full relative rounded-2xl overflow-hidden border border-gray-200 aspect-video">
            <DynamicVideoPlayer
              type="360"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
