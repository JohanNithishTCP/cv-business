"use client";

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const services = [
    {
        title: "Gynecology",
        video: "https://cdn.clinicalvisuals.com/medical/gynhealth/gynecology.webm", // Placeholder video
        description: "Holistic care for your reproductive health, featuring check-ups, screenings, and gynecological treatments."
    },
    {
        title: "Obstetrics",
        video: "https://cdn.clinicalvisuals.com/medical/gynhealth/obstetrics.webm", // Placeholder video
        description: "Personalized support throughout your pregnancy journey, from early care to delivery, ensuring the health and well-being of both mother and baby."
    },
    {
        title: "Infertility",
        video: "https://cdn.clinicalvisuals.com/medical/gynhealth/infertility.webm", // Placeholder video
        description: "Expert guidance and tailored treatment options to support your fertility journey and help you make informed decisions about family planning."
    },
    {
        title: "Breast Symptoms",
        video: "https://cdn.clinicalvisuals.com/medical/gynhealth/breast_symptoms.webm", // Placeholder video
        description: "Breast symptoms can differ, including size changes, lumps, or unusual discharge. Look out for swelling or discomfort. If changes persist, consult a healthcare professional."
    }
];

function ServiceCard({ service }: { service: typeof services[0] }) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, []);

    return (
        <div
            className="bg-white rounded-[20px] overflow-hidden aspect-4/5 relative group shadow-sm transition-transform hover:-translate-y-1 h-full cursor-pointer"
            onMouseEnter={() => videoRef.current?.play().catch(() => { })}
            onMouseLeave={() => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0.1;
                }
            }}
        >
            <video
                ref={videoRef}
                src={`${service.video}#t=0.1`}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            />
            {/* Fallback/Initial Overlay */}
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/70 backdrop-blur-md rounded-[20px] p-6 shadow-xl transform transition-transform duration-500">
                <h3 className="font-bold text-gray-900 mb-3 text-[18px]">{service.title}</h3>
                <p className="text-gray-600 text-[16px] font-medium leading-[1.6]">
                    {service.description}
                </p>
            </div>
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section
            className="relative overflow-hidden py-24 bg-cover bg-center"
            style={{ backgroundImage: "url('/gyn-health/home/bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-[#C0E0CD]/70 pointer-events-none"></div>

            <div className="site-container relative z-10">
                <div
                    className="flex justify-between items-end px-4 md:px-0 mb-16"
                    data-aos="fade-up"
                >
                    <div>
                        <h2 className="text-2xl md:text-[32px] font-bold text-gray-900 leading-tight">
                            Comprehensive Women's Health <br />
                            Services for Every Stage of Life
                        </h2>
                    </div>
                    <div className="flex gap-3">
                        <button className="serv-prev w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all text-gray-400 hover:text-primary z-10 relative disabled:opacity-30">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button className="serv-next w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all text-gray-400 hover:text-primary z-10 relative disabled:opacity-30">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                </div>

                <div
                    className="pb-10"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl: '.serv-prev', nextEl: '.serv-next' }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3, spaceBetween: 32 },
                            1400: { slidesPerView: 3, spaceBetween: 32 }
                        }}
                        className="w-full pb-8"
                    >
                        {services.map((service, idx) => (
                            <SwiperSlide key={idx} className="h-auto">
                                <ServiceCard service={service} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
