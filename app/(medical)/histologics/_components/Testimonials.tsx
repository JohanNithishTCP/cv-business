"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import homeData from "../_data/homeData.json";

export default function Testimonials() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-down">
                    <h2 className="text-[27px] font-bold text-[#0073CF] mb-6">
                        Trusted by Healthcare Professionals
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear from the medical experts who rely on our devices every day.
                    </p>
                </div>

                <div className="w-full relative" data-aos="fade-up">
                    <style>{`
                        .testimonials-swiper {
                            padding-bottom: 4rem !important;
                        }
                        .testimonials-swiper .swiper-wrapper {
                            align-items: stretch;
                        }
                        .testimonials-swiper .swiper-slide {
                            height: auto;
                        }
                        .testimonials-swiper .swiper-pagination {
                            bottom: 0px !important;
                            display: flex !important;
                            justify-content: center !important;
                            align-items: center !important;
                            width: 100% !important;
                        }
                        .testimonials-swiper .swiper-pagination-bullet {
                            width: 8px !important;
                            height: 8px !important;
                            border-radius: 50% !important;
                            background: #D1D5DB !important;
                            opacity: 1 !important;
                            margin: 0 5px !important;
                        }
                        .testimonials-swiper .swiper-pagination-bullet-active {
                            background: #A43B7F !important;
                        }
                    `}</style>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonials-swiper"
                    >
                        {homeData.testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                                    <div className="flex items-center mb-6">
                                        <div className="w-12 h-12 text-black border border-[#b6aab2] rounded-full flex-shrink-0">
                                            {testimonial.avatar && (
                                                <img src={`/histologics/${testimonial.avatar}`} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                                            {/* <p className="text-xs text-gray-500 mt-1">{testimonial.role}</p> */}
                                        </div>
                                    </div>
                                    <p className="text-sm! text-gray-600 leading-relaxed flex-grow">
                                        {testimonial.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
