import React from "react";
import { ArrowRight, ArrowRightIcon } from "lucide-react";

const NewsSection = () => {
  return (
    <section className="w-full bg-[#4A4F54] py-16 lg:py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content (col-span-5) */}
        <div
          data-aos="fade-left"
          className="lg:col-span-6 flex flex-col space-y-6 text-[#FFFFFF]">
          <div className="space-y-2">
            <h3 className="text-2xl font-medium opacity-90">News</h3>
            <h2 className="text-2xl font-medium leading-tight">
              Arcomed AG becomes part of the CODAN Companies.
            </h2>
          </div>

          <div className="space-y-4 text-base leading-relaxed opacity-80 font-light">
            <p>
              The Swiss company Arcomed AG has been acquired by CODAN and is now
              part of the CODAN Companies. This step marks an important
              milestone in the continued development of Arcomed AG within a
              stable, long-term oriented corporate environment. Arcomed
              continues to focus on infusion technology and on delivering
              reliable solutions based on proven expertise.
            </p>
            <p>
              CODAN is a European, family-owned medical technology company with
              a long-standing focus on infusion therapy and related medical
              devices. Its activities are guided by clearly defined values such
              as reliability, responsibility and long-term partnerships with
              customers, partners and employees.
            </p>
          </div>

          <div className="pt-4">
            <div className="relative inline-flex items-center cursor-pointer">
              <button className="bg-[#C10E1A]  text-[#FFFFFF] cursor-pointer text-base font-semibold px-8 h-12 rounded-full flex items-center pr-14">
                See Latest Updates
              </button>

              {/* Circle aligned with edge */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#515557] bg-[#353A3D] cursor-pointer rounded-full shadow-lg flex items-center justify-center">
                <ArrowRightIcon size={20} className="text-[#FFFFFF]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Card (col-span-7) */}
        <div data-aos="fade-right" className="lg:col-span-6 relative">
          <div className="bg-[#E6F0EB] rounded-xl overflow-hidden shadow-2xl min-h-100 relative">
            <img
              src="/arcomed/news.png" // place your image in public/images/
              alt="Infusion Therapy"
              className="w-full h-full object-cover"
            />

            {/* Optional overlay for styling */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Optional decorative blur (kept from your design) */}
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/40 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
