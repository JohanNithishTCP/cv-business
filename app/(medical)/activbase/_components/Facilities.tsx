"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const facilities = [
  { title: "Pain Lab Treatment Clinic", img: "/activbase/home/services-1.png" },
  { title: "High performance Lab Gym, Ground and Track", img: "/activbase/home/services-2.png" },
  { title: "Hydrotherapy pool with underwater exercise equipment", img: "/activbase/home/services-3.png" },
  // { title: "Advanced Rehabilitation Center" },
  // { title: "Sports Biomechanics Lab" }
];

export default function Facilities() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full bg-primary overflow-hidden">
      <div className="container mx-auto py-10" data-aos="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-4">

          <div className="col-span-1 lg:col-span-3 relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={0}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              className="h-full"
            >
              {facilities.map((fac, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex flex-col h-full pb-10 px-6 pt-12">
                    <div className="w-full aspect-[4/5] bg-gray-200 mb-6 flex items-center justify-center relative overflow-hidden">
                      <img src={fac.img} alt={fac.title} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-white font-semibold text-[16px] leading-snug">{fac.title}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows overlaying the swiper */}
            <button ref={prevRef} className="absolute left-0 top-[40%] -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg z-10 hover:bg-gray-100 transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button ref={nextRef} className="absolute right-0 top-[40%] translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-lg z-10 hover:bg-gray-100 transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="col-span-1 flex flex-col justify-center px-8 lg:px-12 py-12 lg:py-0  lg:border-l-0 border-l border-white/10 lg:mt-0 mt-8" data-aos="fade-left" data-aos-delay="200">
            <span className="text-white/80 font-bold text-[14px] tracking-wider mb-3 block">
              How We Treat You
            </span>
            <h2 className="text-[30px] font-bold mb-4 text-white leading-snug">
              Our Treatments & Advanced Facilities
            </h2>
            <p className="text-[16px] text-white/80 mb-8 leading-relaxed">
              State-of-the-art equipment and specialized treatment spaces designed for optimal recovery and results
            </p>
            <div>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-[16px]"
              >
                Discover Our Facilities
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="9 5 19 5 19 15"></polyline>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
