"use client";

import "aos/dist/aos.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const expertiseCards = [
  {
    title: "Medical Imaging",
    img: "/stern-med/stern-exp-1.png",
    description:
      "SternMed core products are the medical imaging devices including Magnetic Resonance Imaging (MRI), Computed Tomography...",
  },
  {
    title: "OR Solutions",
    img: "/stern-med/stern-exp-2.png",
    description:
      "SternMed products in operation room category including Anesthesia Machine, OR Surgery Table, Electrosurgical Unit and Surgical Light are designed to...",
  },
  {
    title: "Patient Care",
    img: "/stern-med/stern-exp-3.png",
    description:
      "SternMed provides patient care devices like patient monitors, infusion and syringe pumps and medical ventilators, to support clinicians in giving...",
  },
]; 

export default function SternExpertCard() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* BACKGROUND */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1560a8] to-[#1f6fb8]" /> */}
      <div
        className="absolute inset-0 bg-cover bg-bottom-right bg-no-repeat"
        style={{ backgroundImage: "url('/stern-med/stern-bg.jpg')" }}
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[rgba(30,111,182,0.75)]" />
      {/* RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.12),transparent_40%)]" />

      {/* CONTENT */}
      <div className="relative max-w-380 mx-auto px-6">

        {/* HEADER */}
        <div
          data-aos="fade-up"
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Our expertise
          </h2>

          <p className="max-w-2xl mx-auto text-base text-white/80 leading-relaxed">
            We provide advanced Imaging & Diagnostics, Operating Room solutions,
            and ICU devices, ensuring reliable performance across diagnosis,
            surgery, and critical care.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {expertiseCards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-white/10 hover:translate-y-[-4px] transition duration-300"
            >

              {/* IMAGE */}
              <div className="rounded-xl overflow-hidden mb-5">
                {/* Placeholder image */}
                <div className="relative w-full h-55">
                  <Image src={card.img} alt="" fill className="object-cover" />
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {card.title}
                </h3>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-4"></div>

                <p className="text-base text-white/75 leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* CTA */}
                <button className="inline-flex cursor-pointer items-center gap-2 text-white font-medium text-base hover:gap-3 transition-all">
                  Read More
                  <span>
                    <ArrowRight size={18} className="text-white mt-0.5"/>
                  </span>
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}