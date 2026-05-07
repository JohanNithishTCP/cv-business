"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import homeData from "../_data/homeData.json";

export default function MedicalDevices() {
    const [swiperRef, setSwiperRef] = useState<any>(null);

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12" data-aos="fade-down">
                <h2 className="text-2xl md:text-[27px] font-bold text-[#0073CF] mb-6">
                    Our Medical Devices
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Innovative solutions designed to enhance patient care and clinical outcomes in Womens Health.
                </p>
            </div>

            <div className="w-full relative group" data-aos="fade-up">
                <style>{`
                    .medical-devices-swiper .swiper-slide > div {
                        opacity: 0.4;
                        transform: scale(0.95);
                        transition: all 0.5s ease;
                        background-color: #9A9A9A !important;
                    }
                    .medical-devices-swiper .swiper-slide-active > div {
                        opacity: 1;
                        transform: scale(1);
                        background-color: #A43B7F !important;
                    }
                `}</style>
                <Swiper
                    onSwiper={setSwiperRef}
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides={true}
                    initialSlide={1}
                    loop={true}
                    slideToClickedSlide={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="medical-devices-swiper"
                >
                    {[...homeData.medicalDevices, ...homeData.medicalDevices, ...homeData.medicalDevices].map((device, index) => {
                        const originalIndex = index % 3;
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className="flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 h-[350px] md:h-[400px] text-center cursor-pointer text-white"
                                >
                                    <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 md:mb-8 transform -rotate-[30deg]">
                                        <img
                                            src={`/histologics/${device.image}`}
                                            alt={device.title}
                                            className="object-contain drop-shadow-lg"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">{device.title}</h3>
                                    <p className="px-6 leading-relaxed opacity-90 max-w-xs">
                                        {device.subtitle}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    <button onClick={() => swiperRef?.slidePrev()} className="custom-prev absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#A43B7F] text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-105 shadow-lg">
                        <svg width="76" height="71" viewBox="0 0 76 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="75.7132" height="70.0117" rx="5" fill="#A43B7F" />
                            <path d="M41.3566 42.0673L34.3566 35.0059L41.3566 27.9446" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </button>
                    <button onClick={() => swiperRef?.slideNext()} className="custom-next absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#A43B7F] text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-105 shadow-lg">
                        <svg width="76" height="70" viewBox="0 0 76 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="75.7132" height="69.4036" rx="5" transform="matrix(-1 0 0 1 75.7132 0)" fill="#A43B7F" />
                            <path d="M34.3566 41.7019L41.3566 34.7019L34.3566 27.7019" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </Swiper>
            </div>
        </section>
    );
}
