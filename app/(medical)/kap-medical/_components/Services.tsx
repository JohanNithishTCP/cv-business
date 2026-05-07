'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Services() {
    const services = [
        {
            title: "Research & Development",
            description: "Cutting-edge innovation to transform ideas into reality.",
            image: "images/home/service-1.png",
        },
        {
            title: "Therapeutic Support Surface",
            description: "Custom solutions for patient comfort and care.",
            image: "images/home/service-2.png",
        },
        {
            title: "Custom Engineering Solutions",
            description: "Tailored engineering for unique medical challenges.",
            image: "images/home/service-3.png",
        },
        {
            title: "Regulatory & Quality Assurance",
            description: "Full regulatory support and quality management systems that ensure compliance with U.S. standards and industry regulations while maintaining product excellence.",
            image: "images/home/service-4.jpg",
        },
        {
            title: "U.S.-Based Manufacturing",
            description: "State-of-the-art manufacturing operations in California, delivering consistent quality, faster turnaround times, and strict production control.",
            image: "images/home/service-5.jpg",
        },
        {
            title: "Medical Electronics Integration",
            description: "Design and integration of advanced electronic systems that enhance therapeutic performance, reliability, and safety across medical environments.",
            image: "images/home/service-6.jpg",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#002B49] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl! font-bold mb-4 text-white!">Services we Provided</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-white!">
                        We offer a range of medical services to support patients as well as families in Corona, including general and chronic
                        disease care, diagnostic testing, immunizations, and more. We treat both young and elderly patients with acute or
                        chronic medical conditions. Walk-in or make an appointment today.
                    </p>
                </div>

                <div className="services-swiper-container pb-12">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1100: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="rounded-xl overflow-hidden"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative overflow-hidden rounded-xl h-[450px] md:h-[550px] border border-white/10 hover:border-white/30 transition-all ">
                                    <img
                                        src={`/kap-medical/${service.image}`}
                                        alt={service.title}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-10">
                                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white!">{service.title}</h3>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 text-white!">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination Container */}
                    <div className="custom-pagination flex justify-center gap-3 mt-12"></div>
                </div>
            </div>

            <style jsx global>{`
                                            .custom - pagination.swiper - pagination - bullet {
                    width: 10px;
                                    height: 10px;
                                    background: rgba(255, 255, 255, 0.3);
                                    opacity: 1;
                                    margin: 0 !important;
                                    transition: all 0.3s ease;
                }
                                    .custom-pagination .swiper-pagination-bullet-active {
                                        background: #D32F2F !important;
                                    width: 12px;
                                    height: 12px;
                }
            `}</style>
        </section>
    );
}
