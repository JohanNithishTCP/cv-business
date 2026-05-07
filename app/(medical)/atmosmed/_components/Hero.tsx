"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const swiperNavStyles = `
  @media (max-width: 1023px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none !important;
    }
  }
  .swiper-button-next {
    color: white;
    background: rgba(100, 100, 100, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    padding: 14px;
    width: 46px;
    height: 46px;
    margin-right: 100px;
  }
  .swiper-button-prev {
    color: white;
    background: rgba(100, 100, 100, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    padding: 14px;
    width: 46px;
    height: 46px;
    margin-left: 100px !important;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 14px;
    font-weight: bold;
  }
`;

export default function Hero() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      video: "https://cdn.clinicalvisuals.com/medical/atmos/landind_page/atmos_fiber_endoscope_01.webm",
      title: "",
    },
    {
      video: "https://cdn.clinicalvisuals.com/medical/atmos/landind_page/atmos_fiber_endoscope_02.webm",
      title: "",
    },
    {
      video: "https://cdn.clinicalvisuals.com/medical/atmos/landind_page/atmos_fiber_endoscope_03.webm",
      title: "",
    },
    {
      video: "https://cdn.clinicalvisuals.com/medical/atmos/landind_page/atmos_fiber_endoscope_04.webm",
      title: "",
    },
  ];

  return (
    <section className="relative w-full h-screen">
      <style>{swiperNavStyles}</style>
      
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        loop
        navigation
        className="h-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            {/* Video */}
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-screen object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center text-white bottom-36">
              <h1
                data-aos="fade-up"
                className="text-3xl md:text-[42px] font-bold leading-snug"
              >
                {slide.title.split("\n").map((line, i) => (
                  <span key={i}>{line}{i === 0 && <br />}</span>
                ))}
              </h1>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slider Indicators — outside Swiper so ref is always accessible */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            className={`w-8 h-1.25 cursor-pointer transition-colors duration-300 ${
              activeIndex === i ? "bg-blue-400" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
