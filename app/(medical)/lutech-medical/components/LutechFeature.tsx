"use client";

import { ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Increased Patient Engagement:",
    desc: "Involve your patients in the examination process by displaying real-time images on a monitor. Sharing this visual information builds trust, promotes patient understanding...",
  },
  {
    title: "Compact Design:",
    desc: "The LT-300HD Vertical Stand is sleek and versatile, designed to fit comfortably in any exam room, no matter the size. This compact solution enables full functionality...",
  },
  {
    title: "Seamless Integration with EMR Systems:",
    desc: "Easily connect the Lutech Colposcope to a laptop or workstation on wheels. Capture high-quality images that attach directly into your electronic medical...",
  },
  {
    title: "Enhanced Provider Experience:",
    desc: "The LT-300HD Vertical Stand allows for a less invasive exam, improving comfort for both the patient and the provider. By removing traditional eye pieces...",
  },
];

export default function LutechFeature() {
  return (
    <section className="bg-[#E0F7FF] py-12 lg:py-20">
      <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          
          {/* TITLE */}
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0f6c86] mb-4"
          >
            Key Features
          </h2>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600 text-base max-w-6xl mb-10 font-rubik"
          >
            We offer complete support through repair, maintenance, and training
            services to ensure smooth and efficient operation. Our digital
            solutions improve workflow, accuracy, and data security, while our
            warranty policy provides reliable protection and peace of mind.
          </p>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  mb-8 lg:mb-10">
            {features.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="bg-white rounded-2xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>

                <p className="text-base text-gray-600 leading-relaxed mb-3 font-rubik">
                  {item.desc}
                </p>

                <span className="font-rubik text-[#0f6c86] text-base font-medium cursor-pointer underline hover:text-[#031e28] transition">
                  View More &gt;&gt;
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
        <div className="flex items-center group ">
            <button className="cursor-pointer bg-[#00769E] text-white px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
              Discover Features
            </button>

            <button className="cursor-pointer w-11 h-11 flex items-center justify-center rounded-full bg-[#00769E] text-white hover:opacity-90 transition">
              <ArrowUpRight
               size={20} className="group-hover:rotate-45 transition"/>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          data-aos="fade-left"
          className="flex justify-center md:justify-end"
        >
          <img
            src="/lutech-medical/assets/lutech-stand.png"
            alt="product"
            className="h-[260px] hidden lg:flex lg:h-full w-auto object-contain md:translate-y-6"
          />
        </div>

      </div>
    </section>
  );
}