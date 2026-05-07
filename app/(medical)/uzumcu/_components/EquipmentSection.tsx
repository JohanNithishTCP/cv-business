"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const EquipmentSection = () => {
    const equipmentList = [
        {
            title: "Operating Tables And Accessories",
            description: "Operating table accessories designed for flexibility, precision, and enhanced patient safety.",
            image: "/uzumcu/images/home/product-1.jpg",
        },
        {
            title: "Medical Lights",
            description: "Our medical lights provide sharp, shadow-free illumination for precise and efficient surgical performance.",
            image: "/uzumcu/images/home/product-2.jpg",
        },
        {
            title: "Suction Units",
            description: "Our surgical suction units provide powerful, reliable vacuum performance for safe and efficient fluid removal in surgical settings.",
            image: "/uzumcu/images/home/product-3.jpg",
        },
        {
            title: "Electrosurgical Units",
            description: "Our electrosurgical units provide precise cutting and coagulation for safe, efficient surgical performance.",
            image: "/uzumcu/images/home/product-4.jpg",
        },
        {
            title: "Stainless Steel Hospital Equipment",
            description: "Durable and hygienic stainless steel equipment designed for reliable performance in healthcare environments.",
            image: "/uzumcu/images/home/product-5.jpg",
        },
        {
            title: "Medical Gas Systems",
            description: "Safe and reliable medical gas systems designed for precise distribution and uninterrupted patient care.",
            image: "/uzumcu/images/home/product-6.jpg",
        },
    ];

    return (
        <section className="py-12 relative overflow-hidden bg-[url('/uzumcu/images/home/product-bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="text-center mb-16 text-white" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="text-white">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                                <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
                            </svg>
                        </div>
                        <span className="text-2xl md:text-3xl font-bold text-white leading-tight">Advanced Medical Technologies</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The Largest Portfolio in Operating Room Equipment
                    </h2>
                    <p className="max-w-7xl mx-auto text-white/90 leading-relaxed">
                        Our extensive product portfolio includes a wide range of high-quality operating room equipment designed to meet the diverse needs of modern healthcare facilities. With advanced technology, reliable performance, and user-focused design, our solutions support efficient surgical environments and improved patient care worldwide.
                    </p>
                </div>

                {/* Carousel Section */}
                <div data-aos="fade-up" data-aos-delay="100" className="relative">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        className="equipment-swiper"
                    >
                        {equipmentList.map((item, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <div className="bg-white rounded-[20px] overflow-hidden h-full flex flex-col shadow-lg transition-transform hover:-translate-y-1 duration-300">
                                    {/* Image Container */}
                                    <div className="relative h-[280px] bg-white p-6 flex items-center justify-center rounded-br-2xl shadow-md">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
                                        </div>

                                        {/* Show More Label */}
                                        <div className="absolute bottom-0 left-0 bg-[#8397cc] text-white px-5 py-2 text-[12px] font-semibold rounded-tr-xl">
                                            Show More
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-8 flex-1 flex flex-col bg-white">
                                        <h3 className="text-[17px] font-bold text-gray-900 mb-3 leading-snug">
                                            {item.title}
                                        </h3>
                                        <p className="text-[14px]! leading-relaxed mb-4">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Global styles for Swiper pagination specific to this component */}
            <style jsx global>{`
                .equipment-swiper {
                    padding-bottom: 70px !important;
                }
                .equipment-swiper .swiper-wrapper {
                    padding-bottom: 20px; /* Space for card shadows if any */
                }
                .equipment-swiper .swiper-pagination {
                    bottom: 10px !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    width: 100% !important;
                    z-index: 100 !important;
                }
                .equipment-swiper .swiper-pagination-bullet {
                    width: 10px !important;
                    height: 10px !important;
                    background: white !important;
                    opacity: 0.5 !important;
                    margin: 0 6px !important;
                    transition: all 0.3s ease !important;
                    cursor: pointer !important;
                }
                .equipment-swiper .swiper-pagination-bullet-active {
                    background: white !important;
                    opacity: 1 !important;
                    transform: scale(1.3) !important;
                }
            `}</style>
        </section>
    );
};

export default EquipmentSection;
