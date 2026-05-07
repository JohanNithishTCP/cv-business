"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const products = [
  { id: 1, image: "/nihon/images/health-1.png", alt: "Patient Monitoring" },
  { id: 2, image: "/nihon/images/health-2.png", alt: "Resuscitation" },
  { id: 3, image: "/nihon/images/health-3.png", alt: "Neurology" },
  { id: 4, image: "/nihon/images/health-4.png", alt: "Ventilation" },
  { id: 5, image: "/nihon/images/health-5.png", alt: "Medical IT" },
  { id: 6, image: "/nihon/images/health-6.png", alt: "Cardiology" },
  { id: 7, image: "/nihon/images/health-7.png", alt: "In-vitro Diagnostics" },
  { id: 8, image: "/nihon/images/health-8.png", alt: "Accessories & Consumables" },
];

const ProductsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#0068B3] to-[#004d85] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Header Part */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16" data-aos="fade-up">
          <div className="lg:max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-white"></div>
              <h2 className="text-white font-semibold text-[16px]">
                Discover our Products
              </h2>
            </div>

            <div className="w-full h-[1px] bg-white/20 mb-6"></div>

            <h3 className="text-[28px] md:text-[32px] font-bold text-white leading-tight">
              Innovating Healthcare Excellence
            </h3>
          </div>

          <div className="lg:max-w-3xl">
            <p className="text-gray-100 font-light text-sm md:text-base leading-relaxed">
              Discover Nihon Kohden's advanced healthcare solutions designed to support every stage of patient care.
              From patient monitoring and ventilation to cardiology, neurology, medical IT, and diagnostics,
              our innovative technologies empower clinicians with reliable, efficient, and life-saving medical solutions.
            </p>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="relative" data-aos="fade-up">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop={true}
            className="pb-4"
          >
            {products.map((prod) => (
              <SwiperSlide key={prod.id}>
                <div className="group relative rounded-3xl overflow-hidden aspect-square shadow-2xl cursor-pointer">
                  <img
                    src={prod.image}
                    alt={prod.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Bottom Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0068B3]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-white font-bold text-[18px] leading-tight">
                        {prod.alt}
                      </h4>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#0068B3"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider Indicator */}
        <div className="flex justify-center mt-12 gap-3">
          {products.slice(0, Math.ceil(products.length / 2)).map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideToLoop(idx * 2)}
              className={`h-1.5 rounded-full transition-all duration-300 ${Math.floor(activeIndex / 2) === idx ? "w-12 bg-[#D8EFFF]" : "w-6 bg-white/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
