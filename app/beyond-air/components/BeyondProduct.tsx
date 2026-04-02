"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    title: "LungFit PH",
    subtitle: "For Neonatal Intensive Care (NICU)",
    description:
      "Designed specifically for delicate neonatal environments, LungFit PH delivers low concentration nitric oxide with high precision. It supports the treatment of newborns with respiratory complications, ensuring safe, controlled, and effective therapy in critical care settings.",
  },
  {
    title: "LungFit PRO",
    subtitle: "For Hospital & Clinical Use",
    description:
      "Built for advanced hospital environments, LungFit PRO provides high concentration nitric oxide therapy for patients with severe respiratory conditions. It is ideal for treating pneumonia, viral infections, and other acute lung diseases with reliable performance and clinical efficiency.",
  },
  {
    title: "LungFit GO",
    subtitle: "For Home & Portable Care",
    description:
      "LungFit GO is a compact and portable solution designed for use beyond hospital settings. It enables convenient nitric oxide therapy for patients with chronic respiratory conditions, allowing continuous care with greater comfort, flexibility, and independence.",
  },
];

export default function BeyondProduct() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <div className="max-w-380 mx-auto">
        
        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          
          {/* LEFT */}
          <div data-aos="fade-up">
            <p className="text-green-600 text-lg font-medium mb-2">
              Our Product Range
            </p>

            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug max-w-md">
              Next-Generation Nitric Oxide Delivery Systems Designed for Every Stage of Patient Care
            </h2>
          </div>

          {/* RIGHT */}
          <div data-aos="fade-up" data-aos-delay="100">
            <p className="text-gray-500 text-base leading-relaxed max-w-full">
              Our product portfolio includes high-quality solutions such as the CMF System 1.5/2.0, Membrane Fixation System, Neuro Fixation System, and IMF Screws. Each product is carefully designed to support surgical precision, ensure stability, and deliver reliable outcomes across various medical applications.
            </p>
          </div>

        </div>

        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="flex flex-col items-center"
            >

              {/* BADGE */}
              {/* <div className="relative z-10 w-44 h-44 rounded-b-full bg-white shadow-[0_10px_50px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <div className="relative z-10 w-36 h-36 rounded-full bg-white  shadow-[0_10px_50px_rgba(0,0,0,0.12)] flex items-center justify-center">
                <span className="text-green-500 font-bold text-xl text-center px-4 leading-snug">
                  {item.title}
                </span>
              </div>
              </div> */}

              {/* <div className="relative m-20 flex items-center justify-center" style={{ width: "136px", height: "68px" }}>
              <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                <div className="h-full w-full rounded-xl"></div>
              </div>

              <div className="absolute bottom-5 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-b border-gray-100 bg-white box-shadow: 0 8px 16px 0px rgba(0,0,0,0.25)"></div>
              <div className="absolute bottom-8 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-white shadow-[0_10px_50px_rgba(0,0,0,0.12)]"></div>
            </div> */}

          <div className="relative w-full mt-20 flex justify-center">
            
            {/* CARD */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.07)] px-6 pb-6 pt-24 text-left">

              {/* TOP CURVE CUT EFFECT */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-white rounded-b-full shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-10 "></div>

              {/* FLOATING CIRCLE */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
                <div className="w-28 h-28 rounded-full bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-lg">
                    LungFit PH
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <h3 className="text-gray-900 font-bold text-xl">
                {item.subtitle}
              </h3>

              <p className="mt-3 text-gray-500 text-base leading-relaxed">
                {item.description}
              </p>

              {/* BUTTON */}
              <button className="mt-5 bg-[#00A4E4] text-white text-base px-6 py-3 rounded-md hover:bg-[#00a3e4cc] transition">
                See More
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