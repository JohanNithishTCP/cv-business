"use client";

import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Maintenance and training",
    desc: "Just got your Lutech product and not sure where to start? Give us a call or schedule a training session. We will be happy to...",
    img: "/lutech-medical/assets/lutech-main.jpg",
    imgFit: "object-cover",
  },
  {
    title: "Lutech Digital Benefits",
    desc: "For a limited time Lutech Medical is offering special pricing and transition support to help DYSIS users make the switch.",
    img: "/lutech-medical/assets/lutech-digital.png",
    imgFit: "object-contain",
  },
  {
    title: "Warranty Policy",
    desc: "Lutech Medical stands behind every product we design, manufacture and sell. We will honor every transaction and treat...",
    img: "/lutech-medical/assets/lutech-warranty.jpg",
    imgFit: "object-cover",
  },
];

export default function LutechServices() {
  return (
    <section className="bg-[#D2F4FF] py-12 lg:py-20">
      <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-10 text-center">

        {/* TITLE */}
        <h2
          data-aos="fade-up"
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0f6c86] mb-4"
        >
          Our Services
        </h2>

        {/* DESCRIPTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 text-sm sm:text-base max-w-5xl mx-auto mb-8 sm:mb-12 font-rubik"
        >
          We offer complete support through repair, maintenance, and training
          services to ensure smooth and efficient operation. Our digital solutions
          improve workflow, accuracy, and data security, while our warranty policy
          provides reliable protection and peace of mind.
        </p>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {services.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className={`backdrop-blur-sm rounded-2xl transition flex flex-col`}
            >

              {/* IMAGE */}
              <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-xl border border-gray-300 overflow-hidden mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className={`absolute inset-0 w-full h-full ${item.imgFit} object-center`}
                />
              </div>

            <div className="px-1 flex flex-col flex-1">

              {/* TITLE */}
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="font-rubik text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="flex items-center group mt-auto">
                <button className="cursor-pointer bg-[#00769E] text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:opacity-90 transition">
                  Explore Service
                </button>
                <button className="cursor-pointer w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-[#00769E] text-white hover:opacity-90 transition">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition"/>
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