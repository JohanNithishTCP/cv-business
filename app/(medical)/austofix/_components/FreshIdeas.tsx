"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FreshIdeas() {
  return (
    <section className="bg-[#6CA033] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Image */}
        <div data-aos="fade-left" className="rounded-2xl overflow-hidden">
          <Image
            src="/austofix/blank.png"
            alt="idea"
            width={1000}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Content */}
        <div data-aos="fade-right" className="text-white">
          {/* Small Title */}
          <p className="flex items-center gap-2 text-sm mb-3">
            <span className="relative w-3 h-3 bg-[#6CA033] rounded-full overflow-hidden">
              <Image
                src="/austofix/screw.png"
                alt="idea"
                fill
                className="object-contain p-px"
              />
            </span>
            Fresh Ideas
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 leading-snug">
            Do you have an innovative fresh idea?
          </h2>

          {/* Paragraph */}
          <p className="text-sm text-white/90 mb-3 leading-relaxed">
            Do you have an innovative fresh idea? Austofix wants to hear from
            you. Our aim is to provide clinicians with great products that are
            intuitive with improved clinical outcomes. Great ideas often derive
            from the users, this is why we appreciate any feedback, and welcome
            the opportunity to create new and improved products based on your
            input.
          </p>

          <p className="text-sm text-white/90 mb-3 leading-relaxed">
            Leverage our manufacturing, design & regulatory expertise and bring
            your ideas to the domestic market.
          </p>

          <p className="text-sm text-white/90 mb-8 leading-relaxed">
            We are committed to helping grow our industry and are actively
            looking to on-board more partners.
          </p>

          {/* Button */}
          <div className="md:col-span-2 flex">
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
      </div>
    </section>
  );
}
