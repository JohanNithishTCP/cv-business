"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CleanRoom() {
  return (
    <section className="bg-[#6CA033] py-16 px-6 ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Content */}
        <div data-aos="fade-up" className="text-white">
          <p className="flex items-center gap-2 text-sm mb-3">
            <span className="w-3 h-3 rounded-full overflow-hidden">
              <Image
                src="/austofix/screw.png"
                alt="icon"
                width={12}
                height={12}
                className="w-full h-full object-cover"
              />
            </span>
            Clean Room
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
            A leading manufacturer and designer of orthopaedic trauma medical
            devices with 30 years experience.
          </h2>

          <p className="text-sm text-white/90 mb-3 leading-relaxed">
            At Austofix, our commitment to manufacturing excellence is
            underpinned by our state-of-the-art ISO Class 8 cleanroom facility.
            Certified to ISO 14644-3, our cleanroom meets stringent
            international standards for airborne particulate cleanliness and
            environmental control.
          </p>

          <p className="text-sm text-white/90 leading-relaxed">
            Our cleanroom is a critical part of our production process, enabling
            us to maintain contamination control while supporting the
            manufacture of safe, reliable, and effective medical technologies.
          </p>
        </div>

        {/* Right Image */}
        <div data-aos="fade-right" className="rounded-2xl overflow-hidden">
          <Image
            src="/austofix/blank.png"
            alt="idea"
            width={1000}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* ✅ Button centered across both columns */}
        <div className="md:col-span-2 flex justify-center ">
          <div className="relative inline-block group">
            <button className="bg-white text-[#6CA033] px-6 py-3 pr-14 rounded-full font-medium hover:bg-gray-100 transition">
              Find Out More
            </button>

            <span className="absolute top-1/2 -translate-y-1/2 -right-3 w-10 h-10 bg-[#BDD630] rounded-full flex items-center justify-center shadow-md group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={18} className="text-[#3C7324]" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
