"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductsSection() {
    const products = [
        {
            title: "Operating Tables And Accessories",
            image: "/uzumcu/images/home/product-1.jpg",
            description: "Operating table accessories designed for flexibility, precision, and enhanced patient safety.",
            tag: "Show More",
        },
        {
            title: "Medical Lights",
            image: "/uzumcu/images/home/product-2.jpg",
            description: "Our medical lights provide sharp, shadow-free illumination for precise and efficient surgical performance.",
            tag: "Show More",
        },
        {
            title: "Suction Units",
            image: "/uzumcu/images/home/product-3.jpg",
            description: "Our surgical suction units provide powerful, reliable vacuum performance for safe and efficient fluid removal in surgical settings.",
            tag: "Show More",
        },
        {
            title: "Operating Tables And Accessories",
            image: "/uzumcu/images/home/product-4.jpg",
            description: "Operating table accessories designed for flexibility, precision, and enhanced patient safety.",
            tag: "Show More",
        },
    ];

    return (
        <section className="py-10 bg-[url('/uzumcu/images/home/product-bg.png')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
            {/* Background Pattern Mask */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
                            <circle cx="15" cy="15" r="1.5" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white mb-10" data-aos="fade-up">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="text-[#a466c1]">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                            <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                        </svg>
                    </div>
                    <span className="text-sm! font-bold uppercase tracking-[0.2em] text-white/90">Advanced Operating Room Technologies</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
                    The Largest Portfolio in Operating Room Equipment
                </h2>
                <p className="text-white/90 max-w-5xl mx-auto text-[15px] md:text-base leading-relaxed font-medium">
                    You can find most of the products you need in operating room equipment under the ÜZÜMCÜ brand.
                    Our company, which exports to more than 100 countries at home and abroad, has all the certificates
                    and certificates needed by the healthcare industry, produces with qualifications. If you would like to
                    meet our world-class production and constantly developed technology, let's create a solution
                    for your hospital or clinic together.
                </p>
            </div>

            <div className="container mx-auto px-4 relative z-10" data-aos="fade-up" data-aos-delay="200">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: '.products-pagination' }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    }}
                    className="pb-16 px-4 products-swiper"
                >
                    {products.map((product, idx) => (
                        <SwiperSlide key={idx} className="h-full">
                            <div className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 transition-all duration-300 h-full flex flex-col group cursor-pointer">
                                {/* Image Space */}
                                <div className="h-72 bg-white flex items-center justify-center relative p-12 overflow-hidden">
                                    <img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110" />

                                    {/* Label Overlay */}
                                    <div className="absolute bottom-0 left-0 w-full px-0">
                                        <div className="bg-[#7d8cc4] text-white text-[11px] font-bold px-4 py-2 uppercase tracking-wide inline-block">
                                            {product.tag}
                                        </div>
                                    </div>

                                    {/* Bottom Border for Image Section */}
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-gray-100" />
                                </div>

                                {/* Content */}
                                <div className="p-10 text-left flex-grow flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[22px] font-bold text-gray-900  leading-tight min-h-[60px]">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-600 text-[15px] leading-relaxed font-medium line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Pagination */}
                <div className="products-pagination flex justify-center gap-2 mt-8 mb-4"></div>
            </div>

            <style jsx global>{`
                .products-swiper .swiper-wrapper {
                    display: flex !important;
                    align-items: stretch !important;
                }
                .products-swiper .swiper-slide {
                    height: auto !important;
                    display: flex !important;
                    flex-direction: column;
                }
                .products-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.5);
                    opacity: 1;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    margin: 0 6px !important;
                    cursor: pointer;
                }
                .products-pagination .swiper-pagination-bullet-active {
                    background: #ffffff;
                    transform: scale(1.2);
                }
            `}</style>
        </section>
    );
}

