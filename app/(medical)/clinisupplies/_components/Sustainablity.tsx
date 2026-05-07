"use client";

import Image from "next/image";
import { Check, ArrowUpRight, CornerUpRight } from "lucide-react";

export default function Sustainability() {
  return (
    <section className="bg-[#FFFFFF] py-16 lg:py-24 px-6">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
        {/* LEFT CONTENT */}
        <div data-aos="fade-left">
          <p className="text-base text-[#333333] mb-2">Sustainability</p>

          <h2 className="text-4xl font-medium text-[#333333] mb-4 leading-snug">
            Sustainability Commitment and Action
          </h2>

          <p className="text-[#666666] mb-4 text-base leading-relaxed">
            At the heart of Clinisupplies is a culture that values people and
            our planet. Not only do we offer products and services that meet
            quality and performance expectations, but we also go beyond and
            positively contribute to our world by enabling sustainable practices
            throughout our product and service lifecycles.
          </p>

          <p className="text-[#666666] mb-4 text-base leading-relaxed">
            We carefully consider the wider impact of our operations on
            sustainability. We do this in two ways: commitment and action.
          </p>
          <p className="text-[#666666] mb-6 text-base leading-relaxed">
            Every product we develop, every service we offer, and every decision
            we make is driven by sustainability. Audited, accountable, and
            future-focused.
          </p>

          {/* LIST */}
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3 text-base text-[#666666]">
              <span className="bg-orange-500 p-1 rounded-full mt-1">
                <Check className="text-white w-3 h-3" />
              </span>
              People and the planet are at the heart of everything we do
            </li>

            <li className="flex items-start gap-3 text-base text-[#666666]">
              <span className="bg-orange-500 p-1 rounded-full mt-1">
                <Check className="text-white w-3 h-3" />
              </span>
              Deliver high-quality products and services beyond expectations
            </li>

            <li className="flex items-start gap-3 text-base text-[#666666]">
              <span className="bg-orange-500 p-1 rounded-full mt-1">
                <Check className="text-white w-3 h-3" />
              </span>
              Carefully consider the environmental and social impact
            </li>
          </ul>

          {/* BUTTON */}
          <button className="flex items-center gap-2 border-2 border-[#F26828] text-[#11121B] text-base font-semibold px-5 py-2 rounded-full hover:bg-[#F26828] hover:text-[#FFFFFF] transition-all group">
            Our Impact
            <CornerUpRight
              size={20}
              className="text-[#F26828] group-hover:text-white group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-right"
          className="w-full h-full relative rounded-xl overflow-hidden">
          <Image
            src="/clinisupplies/sustainability.png" // replace with your image
            alt="Sustainability"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
