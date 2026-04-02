"use client";

import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const ProductCatalog = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const products = [
        {
            title: "Operating Tables and Accessories",
            icon: "/images/home/pc-1.png",
            description: "High-performance operating tables and accessories built with advanced technology for efficient and safe surgical procedures.",
            link: "#"
        },
        {
            title: "Medical Lights",
            icon: "/images/home/pc-2.png",
            description: "Advanced medical lighting solutions providing bright, shadow-free illumination for improved surgical precision.",
            link: "#"
        },
        {
            title: "Suction Units",
            icon: "/images/home/pc-3.png",
            description: "Advanced suction units providing powerful vacuum performance for precise and reliable fluid removal during surgery.",
            link: "#"
        },
        {
            title: "Stainless Steel Hospital Equipment",
            icon: "/images/home/pc-4.png",
            description: "Reliable stainless steel hospital solutions designed to support efficiency, hygiene, and durability in healthcare settings.",
            link: "#"
        },
        {
            title: "Electrosurgical Units",
            icon: "/images/home/pc-5.png",
            description: "Advanced electrosurgical units designed for precise cutting and coagulation, ensuring safe and efficient surgical performance.",
            link: "#"
        },
        {
            title: "Medical Gas Systems",
            icon: "/images/home/pc-6.png",
            description: "Reliable medical gas systems designed for safe distribution and efficient use in healthcare environments.",
            link: "#"
        }
    ];

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6" data-aos="fade-up">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="text-[#3183C0]">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                                </svg>
                            </div>
                            <span className="text-base font-bold text-gray-700">Product Catalog</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                            Innovative Medical Equipment for Modern Healthcare
                        </h2>
                    </div>
                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="w-12 h-12 rounded-full bg-[#1374b5] text-white flex items-center justify-center hover:bg-[#0f6096] transition-colors shadow-md group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="w-12 h-12 rounded-full bg-[#1374b5] text-white flex items-center justify-center hover:bg-[#0f6096] transition-colors shadow-md group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Cards Section Carousel */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            900: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        className="pb-6"
                    >
                        {products.map((product, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <div
                                    className="h-full p-6 md:p-8 rounded-xl border border-gray-100 transition-all duration-300 flex flex-col items-start text-left relative overflow-hidden group bg-[#f9f9f9]"
                                >
                                    <div className="w-16 h-16 rounded-full bg-[#3183C0] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm shrink-0">
                                        <img src={`/uzumcu/${product.icon}`} alt="" className='w-10 h-10 object-contain' />
                                    </div>

                                    <h3 className="text-[17px] font-bold text-gray-900 mb-3 leading-tight min-h-[44px]">
                                        {product.title}
                                    </h3>

                                    <p className="text-[#333333] leading-relaxed mb-6 flex-grow">
                                        {product.description}
                                    </p>

                                    <a
                                        href={product.link}
                                        className="text-[#31BACF] font-semibold text-[15px] tracking-wide flex items-center gap-1 group/btn transition-colors duration-300 mt-auto"
                                    >
                                        View More <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProductCatalog;
