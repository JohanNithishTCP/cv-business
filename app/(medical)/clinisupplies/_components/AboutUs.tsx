"use client";

import Image from "next/image";
import { CornerUpRight } from "lucide-react";

const features = [
  {
    img: "/clinisupplies/innovation.png",
    title: "Innovative",
    desc: "product design",
  },
  {
    img: "/clinisupplies/destination.png",
    title: "Home delivery",
    desc: "you can trust",
  },
  {
    img: "/clinisupplies/qualified.png",
    title: "Experienced",
    desc: "support",
  },
  {
    img: "/clinisupplies/medical-team.png",
    title: "Bladder and bowel",
    desc: "specialist nursing",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-[#F5F5F7] py-16 px-6 lg:py-24">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        {/* LEFT IMAGE */}
        <div data-aos="fade-left" className="w-full h-full">
          <div className="relative w-full h-full min-h-100 rounded-xl overflow-hidden">
            <Image
              src="/clinisupplies/about.png"
              alt="About"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-right">
          <p className="text-base text-[#333333] mb-2">About Us</p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#333333] mb-4">
            Everyone Deserves To Rise Above Pain
          </h2>

          <p className="text-[#666666] text-base leading-relaxed mb-6">
            Our purpose is to support people to live their lives more freely, always acting with respect for others. We do this by focusing our energy on relentless progress, moving fast but caring deeply, taking ownership in all that we do knowing we impact real peoples’ lives each and every day.
          </p>

          {/* FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white rounded-3xl p-4 shadow-md border hover:shadow-lg transition">
                <div className="bg-[#F26828] p-3 rounded-md  flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="w-20 h-15 object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-xl font-medium text-[#333333]">
                    {item.title}
                  </h4>
                  <p className="text-base text-[#666666]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="flex items-center gap-2 border-2 border-[#F26828] text-[#11121B] text-base font-semibold px-5 py-2 rounded-full hover:bg-[#F26828] hover:text-[#FFFFFF] transition-all group">
            Know More About Us
            <CornerUpRight
              size={20}
              className="text-[#F26828] group-hover:text-white group-hover:translate-x-1 transition-all"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
