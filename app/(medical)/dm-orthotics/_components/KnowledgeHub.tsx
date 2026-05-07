"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const hubItems = [
  {
    title: "Our Time In Hobart, Australia",
    image: "/dm-orthotics/home/hub-1.png",
  },
  {
    title: "Our Time At WHX Dubai 2026",
    image: "/dm-orthotics/home/hub-2.png",
  },
  {
    title: "APCP Annual Conference 2026",
    image: "/dm-orthotics/home/hub-3.png",
  }
];

export default function KnowledgeHub() {
  return (
    <section className="py-24 bg-white overflow-hidden knowledge-hub-swiper">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12" data-aos="fade-up">
          <div className="max-w-2xl space-y-4">
            <span className="text-primary text-[13px] uppercase font-black tracking-[0.4em] block">Resources</span>
            <h2 className="text-dark">
              Knowledge Hub
            </h2>
            <p className="text-muted/80">
              Expert advice, patient guides, and the latest research in dynamic movement orthoses.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="swiper-prev w-12 h-12 rounded-full border border-border flex items-center justify-center text-dark hover:bg-primary hover:border-primary hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-next w-12 h-12 rounded-full border border-border flex items-center justify-center text-dark hover:bg-primary hover:border-primary hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-prev',
              nextEl: '.swiper-next',
            }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12!"
          >
            {hubItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group h-full flex flex-col overflow-hidden rounded-2xl border border-border transition-all duration-500 hover:shadow-2xl hover:shadow-black/5" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="aspect-4/3 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 md:p-8 pb-10 flex-1 flex flex-col items-center justify-center text-center bg-gray-100">
                    <h3 className="text-[18px]! font-medium text-dark group-hover:text-primary transition-colors leading-relaxed">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .knowledge-hub-swiper .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }
        .knowledge-hub-swiper .swiper-pagination-bullet {
          width: 48px !important;
          height: 6px !important;
          border-radius: 2px !important;
          background: #E5E7EB !important;
          opacity: 1 !important;
          margin: 0 !important;
          transition: all 0.3s ease;
        }
        .knowledge-hub-swiper .swiper-pagination-bullet-active {
          background: #E11D1D !important;
        }
      `}</style>
    </section>
  );
}
