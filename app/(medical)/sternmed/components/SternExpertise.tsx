"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ArrowRight, Circle, CircleCheck } from "lucide-react";

const cards = [
  {
    title: "Imaging & Diagnostics",
    img: "/stern-med/stern-1.jpg",
    items: ["MRI", "Ultrasound", "Mammography systems", "CT", "X-ray systems"],
  },
  {
    title: "Operating Room Solutions",
    img: "/stern-med/stern-2.png",
    items: ["Anesthesia devices", "Surgical lights", "Surgical tables", "ESU"],
  },
  {
    title: "ICU Devices",
    img: "/stern-med/stern-3.jpg",
    items: ["Patient monitors", "Syringe pumps", "Infusion pumps", "ICU ventilators"],
  },
];

export default function SternExpertise() {


  return (
    <section className="relative bg-[#f3f4f6] py-20 overflow-hidden">
      
      {/* subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)]"></div>

      <div className="relative max-w-380 mx-auto px-6 text-center">
        
        {/* HEADER */}
        <div data-aos="fade-up" className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            Our expertise
          </h2>

          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            We provide advanced Imaging & Diagnostics, Operating Room solutions,
            and ICU devices, ensuring reliable performance across diagnosis,
            surgery, and critical care.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-xl shadow-md p-5 flex gap-4 items-start text-left hover:shadow-lg transition"
            >
              
              {/* IMAGE PLACEHOLDER */}
              <div className="w-40 h-40 bg-gray-300 rounded-lg flex-shrink-0">
                <Image src={card.img} alt={card.title} width={150} height={250} className="object-cover w-full h-full rounded-lg"/>
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>

                <ul className="space-y-1 text-base text-gray-600">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 flex items-center justify-center rounded-full text-[18px]">
                        <CircleCheck size={22} className="fill-[#25477F] text-white "/>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="zoom-in">
          <button className="inline-flex font-bold items-center gap-2 bg-[#1E6FB6] cursor-pointer text-white text-base px-6 py-3 rounded-md hover:bg-[#102b57] transition">
            Explore Features
            <span><ArrowRight/></span>
          </button>
        </div>

      </div>
    </section>
  );
}