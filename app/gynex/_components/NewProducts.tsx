"use client";

import React from "react";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Bozeman Uterine Forceps",
        price: "$87.95",
        image: "/gynex/images/product-1.png"
    },
    {
        id: 2,
        name: "4-Way Expander Vaginal Speculum",
        price: "$89.95",
        image: "/gynex/images/product-2.png"
    },
    {
        id: 3,
        name: "Metzenbaum TC Scissors",
        price: "$89.95",
        image: "/gynex/images/product-3.png"
    },
    {
        id: 4,
        name: "Needle Extender, Single-Use",
        price: "$59.95",
        image: "/gynex/images/product-4.png"
    },
    {
        id: 5,
        name: "Ring Biopsy Punch, Titanium",
        price: "$444.95",
        image: "/gynex/images/product-5.png"
    }
];

export default function NewProducts() {
    return (
        <section className="py-24 bg-[#F7F7F7]">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left side content */}
                    <div className="lg:col-span-3">
                        <h2 className="text-[32px] font-bold text-[#1a1a1a] mb-5">New Products</h2>
                        <p className=" leading-[1.6] mb-10">
                            Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both.
                        </p>
                        <Button>
                            Shop Now
                        </Button>
                    </div>

                    {/* Right side carousel */}
                    <div className="lg:col-span-9 relative">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            navigation={{
                                prevEl: ".prev-product",
                                nextEl: ".next-product",
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="product-swiper !static"
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="group cursor-pointer">
                                        <div className="relative aspect-square bg-[#F1F1F1] rounded-[4px] overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="absolute inset-0 w-full h-full object-contain p-10 transition-transform duration-500 group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="mt-5 flex justify-between items-start gap-4">
                                            <h3 className="font-semibold text-[#1a1a1a] text-[16px] leading-[1.4] max-w-[220px]">
                                                {product.name}
                                            </h3>
                                            <span className="text-[#7C2B83] font-bold text-[16px] shrink-0">
                                                {product.price}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Navigation Arrows - Circular overlay style */}
                            <button className="prev-product absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-[#333] hover:text-[#7C2B83] transition-all border border-gray-100 cursor-pointer">
                                <ChevronLeft size={18} strokeWidth={2.5} />
                            </button>
                            <button className="next-product absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-[#333] hover:text-[#7C2B83] transition-all border border-gray-100 cursor-pointer">
                                <ChevronRight size={18} strokeWidth={2.5} />
                            </button>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
