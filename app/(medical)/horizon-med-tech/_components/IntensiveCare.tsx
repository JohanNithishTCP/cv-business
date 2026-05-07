"use client";

import React from "react";
import Button from "./Button";

const products = [
  {
    title: "Horizon Brammi",
    description: "Advanced Thermoregulatory device. Includes full servo-control modes with configurable automatic cooling and rewarming. Non-servo warming / cooling modes. Compact design.",
    image: "/horizon/images/horizon-brammi.png",
    href: "#",
  },
  {
    title: "Picterus Jaundice Pro",
    description: "Instant jaundice screening for newborn babies with a mobile phone and calibration card. Validated in all skin types, for use by health care staff and also by parents.",
    image: "/horizon/images/picterus-jaundice-pro.png",
    href: "#",
  }
];

export default function IntensiveCare() {
  return (
    <section className="w-full py-24 bg-[#064163] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.28] pointer-events-none bg-[url('/horizon/images/about-bg.png')] bg-cover bg-center"
      />
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        {/* Header Part */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] justify-between items-start md:items-end gap-10 mb-16">
          <div className="max-w-2xl" data-aos="fade-right">
            <h2 className="text-3xl md:text-[32px] font-semibold text-white mb-6 leading-tight">
              Delivery, Neonatal and Intensive Care
            </h2>
            <p className="text-white leading-relaxed text-base md:text-[17px]">
              All products come with extensive product, clinical and service training, warranty and service options.
            </p>
          </div>

          <div data-aos="fade-left">
            <Button href="#" variant="white">
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="relative group transition-all duration-500"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Image Box */}
              <div className="bg-[#f2f3f5] rounded-[30px] overflow-hidden aspect-[16/10] w-full p-4 md:p-8 flex items-center justify-center relative translate-y-0 shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain relative z-0 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Content Box */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl mx-4 -mt-20 relative z-20 flex flex-col gap-4">
                <h3 className="text-[22px] font-bold text-[#064163]">
                  {product.title}
                </h3>
                <p className="text-base md:text-[17px] leading-relaxed">
                  {product.description}
                </p>
                <div className="pt-1">
                  <Button href={product.href}>
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

