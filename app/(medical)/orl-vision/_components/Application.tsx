"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "ENT",
    desc: "In close cooperation with our customers, we design equipment to meet their needs. Optimally matched to the benefits in your everyday practice. We are the partner for ear, nose and throat physicians.",
    img: "/orlvision/app1.png",
  },
  {
    title: "HEARING AND ACOUSTICS",
    desc: "Our expertise in hearing aid acoustics enables us to create solutions that support effective consultations. We are a trusted partner for hearing care professionals.",
    img: "/orlvision/app2.png",
  },
  {
    title: "FEES / SWALLOWING DIAGNOSIS",
    desc: "Only with the right technique and a coordinated system can a good diagnosis be made, which can be the basis for targeted therapy and successful recovery. This is what looks like to us.",
    img: "/orlvision/app3.png",
  },
];

export default function Application() {
  return (
    <section className="bg-[#F49D00] py-12 md:py-16 px-4 md:px-6 text-white">
      <div className="max-w-400 mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <div
            data-aos="fade-up"
            className="flex items-center mb-4 text-center justify-center">
            {/* line + dot (no gap between them) */}
            <div className="flex items-center">
              <span className="w-10 h-0.5 bg-white"></span>
              <span className="w-2 h-2 bg-white rounded-full"></span>
            </div>

            {/* space only before text */}
            <p className="ml-2 text-xs font-semibold text-white tracking-wide uppercase">
              APPLICATIONS
            </p>
          </div>

          <h2 data-aos="fade-up" className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Solutions Across Every Application
          </h2>

          <p
            data-aos="fade-up"
            className="text-sm md:text-base mt-3 max-w-6xl mx-auto opacity-90">
            We develop specialized solutions for ENT, hearing care, and
            swallowing diagnostics, designed to meet real clinical needs. By
            combining advanced technology with user-focused design, our systems
            support accurate diagnosis, effective consultation, and improved
            patient outcomes across everyday medical practice.
          </p>
        </div>

        {/* Cards */}
        <div data-aos="fade-up" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col h-full">
              {/* IMAGE */}
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="relative w-full h-56 md:h-72 lg:h-85">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="mt-4 flex flex-col flex-1">
                {/* Top content */}
                <div>
                  <h3 className="font-semibold text-sm md:text-base tracking-wide mb-2 text-white">
                    {card.title}
                  </h3>

                  <p className="text-sm md:text-base text-white/90 mb-3 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* BUTTON (always bottom aligned) */}
                <div data-aos="fade-up" className="mt-auto">
                  <button className="cursor-pointer flex items-center gap-2 text-white text-sm md:text-base font-medium min-h-11">
                    Read More
                    <span className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
