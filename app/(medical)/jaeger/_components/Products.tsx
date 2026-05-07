"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const products = [
  {
    title: "Vyntus™ BODY Plethybaseograph",
    category: "Pulmonary Function Testing",
    image: "/jaeger/p-1.png",
  },
  {
    title: "Vyntus™ ONE Pulmonary Function System",
    category: "Cardiopulmonary Exercise Testing",
    image: "/jaeger/p-2.png",
  },
  {
    title: "Vyntus™ CPX Metabolic Cart",
    category: "Cardiopulmonary Exercise Testing",
    image: "/jaeger/p-3.jpg",
  },
  {
    title: "Vyntus™ SPIRO PC Spirometer",
    category: "Spirometry",
    image: "/jaeger/p-4.png",
  },
  {
    title: "Vyntus™ WALK Mobile Exercise Testing",
    category: "Cardiopulmonary Exercise Testing",
    image: "/jaeger/p-5.png",
  },
  {
    title: "SentrySuite™ Software Solution",
    category: "Pulmonary Function Testing",
    image: "/jaeger/p-6.png",
  },
  {
    title: "MicroGard® II PFT Filter",
    category: "Cardiopulmonary Exercise Testing",
    image: "/jaeger/p-7.png",
  },
  {
    title: "Vyntus™ ECG 12-lead PC-ECG",
    category: "Pulmonary Function Testing",
    image: "/jaeger/p-8.png",
  },
  {
    title: "ARTIQ.PFT for SentrySuite™ Software Solution",
    category: "Pulmonary Function Testing",
    image: "/jaeger/p-9.png",
  },
  {
    title: "SentryConnect Electronic Medical Record (EMR) Interface",
    category: "Cardiopulmonary Exercise Testing",
    image: "/jaeger/p-10.png",
  },
  {
    title: "Vyntus™ PNEUMO Spirometer",
    category: "Spirometry",
    image: "/jaeger/p-11.png",
  },
  {
    title: "IOS Impulse Oscillometry",
    category: "Pulmonary Function Testing",
    image: "/jaeger/p-12.png",
  },
  {
    title: "APS Nebulizer System",
    category: "Pulmonary Function Testing",
    image: "/jaeger/p-13.png",
  },
];

export default function Products() {
  const swiperRef = useRef<any>(null);
  const next = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const prev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-6 text-center space-y-4">
        {/* Top Content */}
        <div data-aos="fade-up" className="space-y-4 max-w-6xl mx-auto">
          <span className="inline-block bg-[#00689B]/12 text-[#00689B] text-[14px] px-4 py-2 rounded-md mb-0">
            Our Products
          </span>

          <h2 className="text-2xl md:text-[32px] font-bold text-[#1F242E] mt-6">
            Comprehensive Respiratory Diagnostic Solutions
          </h2>

          <p className="text-[#333333] text-base">
            Explore a complete range of advanced systems designed for accurate
            breathing assessment, exercise analysis, and clinical evaluation.
            From lab-based platforms to portable devices and integrated
            software, these solutions support efficient workflows, precise
            results, and enhanced decision-making across healthcare
            environments.
          </p>
        </div>

        {/* Cards */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="items-stretch !py-10 !px-4 mb-0 cursor-grab"
        >
          {products.map((item, i) => (
            <SwiperSlide key={i} className="h-auto">
              <div
                data-aos="fade-up"
                className="relative bg-[#FFFFFF] rounded-xl shadow-[0px_3px_8px_0px_rgba(0,0,0,0.24)] p-6 md:pl-50 flex flex-col md:flex-row items-start md:items-center min-h-[350px] md:min-h-[240px] h-full">
                {/* IMAGE */}
                <div className="relative md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 w-full md:w-43 h-45 rounded-xl overflow-hidden shadow-md mb-4 md:mb-0">
                  {/* Tag */}
                  <span className="absolute top-0 left-0 md:-left-2 bg-[#00689B] text-[#FFFFFF] text-center text-sm font-medium px-3 py-1 rounded">
                    Request Information
                  </span>

                  <img
                    src={item.image}
                    alt={item.title}
                    width={170}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* CONTENT */}
                <div className="space-y-3 w-full flex flex-col justify-center text-left">
                  <p className="text-[14px] text-[#6E777D]">{item.category}</p>

                  <h3 className="text-[22px] font-semibold text-[#1F242E] leading-snug">
                    {item.title}
                  </h3>

                  <div className="border-t border-dashed border-[#E4E4E4]"></div>

                  <button className="inline-flex items-center justify-center gap-2 border border-[#D1D5DB] px-4 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition w-fit">
                    Discover More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div data-aos="fade-up" className="flex justify-center gap-4 pt-4">
          <button
            onClick={prev}
            className="bg-[#00689B] text-[#FFFFFF] p-3 rounded-md hover:bg-[#00689B]/80">
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={next}
            className="bg-[#00689B] text-[#FFFFFF] p-3 rounded-md hover:bg-[#00689B]/80">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
