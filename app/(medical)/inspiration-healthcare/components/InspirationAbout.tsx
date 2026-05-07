"use client"

import { Check, ArrowRight, CornerUpRight } from "lucide-react"

export default function InspirationAbout() {

  return (
    <section className="bg-white py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">

        {/* LEFT IMAGE */}
        <div data-aos="fade-right" className="relative w-full max-w-[620px] pl-6 pb-6 md:pl-10 md:pb-10 mx-auto md:mx-0 overflow-hidden">
          {/* Grey chamfered frame — absolute, peeks out bottom-left */}
          <img src="/inspiration-healthcare/assets/subtract.png" alt="frame" className="w-full h-full object-cover" />
          {/* Image — sits on top, offset to top-right by the padding */}
          <img
            src="/inspiration-healthcare/assets/inspiration-about.png"
            alt="about"
            className="absolute w-[79%] aspect-[49/46] object-cover object-center block z-10 top-[6%] right-[8.3%] shadow-2xl"
          />
        </div>
        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">

          <p className="text-base text-[#26505E] mb-3 font-medium">About Us</p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#26505E] mb-4 leading-snug">
            Specialists in neonatal and critical care innovation
          </h2>

          <p className="text-[#666666] text-base  leading-relaxed mb-6">
            Inspiration Healthcare Group designs, manufactures, and markets advanced medical technology focused on improving patient care and clinical outcomes. With a commitment to innovation and quality, we develop solutions that support healthcare professionals in delivering safe, effective, and efficient treatment.
          </p>

          {/* FEATURES */}
          <div className="space-y-5">

            {[
              {
                title: "Innovation-Driven Solutions",
                desc: "We create cutting-edge medical technologies that solve real clinical challenges, ensuring practical and effective solutions for better patient care.",
              },
              {
                title: "Neonatal & Critical Care Expertise",
                desc: "We provide specialized neonatal and intensive care equipment, supporting clinicians in delivering life-saving treatment.",
              },
              {
                title: "Precision Manufacturing",
                desc: "Our products are manufactured with the highest quality standards, using advanced materials and precision engineering.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 150}
                className="flex gap-4"
              >
                <div className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full bg-gray-800 text-white">
                  <Check size={14} className=""/>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 cursor-pointer flex items-center gap-2 bg-[#7B868C] hover:bg-gray-400 transition px-5 py-3 rounded-full text-sm text-white min-h-[44px]">
            Know More About Us
            <CornerUpRight size={16} />
          </button>

        </div>
      </div>
    </section>
  )
}