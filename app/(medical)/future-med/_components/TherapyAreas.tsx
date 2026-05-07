"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function TherapyAreas() {
  const cards = [
    { title: "Single-Use Scopes", img: "/future-med/home/therapy-1.png" },
    { title: "Urology Solutions", img: "/future-med/home/therapy-2.png" },
    { title: "Gynecology Solutions", img: "/future-med/home/therapy-3.png" },
    { title: "Disinfection & Cleaning", img: "/future-med/home/therapy-4.png" },
    { title: "Theatre Solutions", img: "/future-med/home/therapy-5.png" },
  ];

  return (
    <section className="w-full py-20 bg-primary relative overflow-hidden ">
      {/* Decorative background pattern (Optional placeholder) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[url('/future-med/home/bg.png')] bg-no-repeat bg-cover opacity-30 pointer-events-none z-0"></div>

      <div className="container relative z-10">
        <h2 className="heading text-white text-center mb-12" data-aos="fade-up">
          Futuremed Solution Therapy Areas
        </h2>

        <div className="relative z-20">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              dynamicBullets: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full !pb-7"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full mx-2 border border-gray-100">
                  {/* Image Placeholder */}
                  <div className="w-full aspect-4/3 bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img src={`${card.img}`} alt={card.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                  </div>

                  <div className="p-6 flex flex-col items-center justify-between grow">
                    <h3 className="text-lg font-bold text-black mb-4 text-center">
                      {card.title}
                    </h3>
                    <button className="bg-primary hover:bg-primary-dark text-white font-medium px-8 py-2 rounded transition-colors text-[17px] w-full max-w-[140px]">
                      View All
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx global>{`
          .swiper-pagination-bullets.swiper-pagination-horizontal {
             bottom: 0px !important;
             position: relative !important;
             margin-top: 2rem !important;
             z-index: 50 !important;
             pointer-events: auto !important;
          }
          .swiper-pagination-bullet {
            background: white !important;
            opacity: 0.5 !important;
            width: 10px !important;
            height: 10px !important;
            margin: 0 6px !important;
            border-radius: 50% !important;
            transition: all 0.3s ease !important;
            cursor: pointer !important;
            pointer-events: auto !important;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
            background: white !important;
            transform: scale(1.2) !important;
          }
        `}</style>
      </div>
    </section>
  );
}
