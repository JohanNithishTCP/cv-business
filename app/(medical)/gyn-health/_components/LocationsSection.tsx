"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function LocationsSection() {
    const locations = [
        {
            name: "Gynhealth Seefeld",
            img: "location-1.png",
            address1: "Höschgasse 50 | Seefeldstrasse",
            address2: "152 8008 Zürich",
            phone: "043 818 37 87",
            email: "zurich@gyn-health.ch"
        },
        {
            name: "Gynhealth Enge",
            img: "location-2.png",
            address1: "Tessinerplatz 12 | Seestrasse 37",
            address2: "8002 Zürich",
            phone: "043 818 37 87",
            email: "zurich@gyn-health.ch"
        },
        {
            name: "Gynhealth Dietikon",
            img: "location-3.png",
            address1: "Poststrasse 1 8953 Dietikon",
            address2: "",
            phone: "044 744 40 60",
            email: "dietikon@gyn-health.ch"
        },
        {
            name: "Gynhealth Winterthur",
            img: "location-4.png",
            address1: "Merkurstrasse 25",
            address2: "8400 Winterthur",
            phone: "052 202 65 11",
            email: "winterthur@gyn-health.ch"
        },
        {
            name: "Gynhealth Olten",
            img: "location-5.png",
            address1: "Frohburgstrasse 20 4600 Olten",
            address2: "",
            phone: "062 212 39 09",
            email: "olten@gyn-health.ch"
        }
    ];

    return (
        <section
            className="relative overflow-hidden py-24 pb-32 bg-cover bg-center"
            style={{ backgroundImage: "url('/gyn-health/home/bg.jpg')" }}
        >
            <div className="absolute inset-0 bg-[#C0E0CD]/70 pointer-events-none"></div>
            {/* Hexagon Pattern */}
            {/* <div className="absolute top-0 left-0 w-full h-full opacity-[0.06] pointer-events-none mix-blend-multiply">
                <svg width="100%" height="100%">
                    <pattern id="hex-locs" width="60" height="103.92" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                        <path d="M30 0 L60 17.32 L60 51.96 L30 69.28 L0 51.96 L0 17.32 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hex-locs)" />
                </svg>
            </div> */}

            <div className="site-container relative z-10 px-4 md:px-8">
                <div
                    className="text-center max-w-2xl mx-auto mb-16"
                    data-aos="fade-up"
                >
                    <h2 className="text-[24px] md:text-[26px] font-bold text-gray-900 mb-4 tracking-tight">Our Locations</h2>
                    <p className="text-gray-600 text-[16px] leading-[1.8] font-medium px-4 max-w-[700px] mx-auto">
                        Gynhealth is always close to you. All locations are easily accessible by public transport.
                        When you receive your appointment confirmation by text message, make sure you know
                        where your appointment will take place.
                    </p>
                </div>

                <div
                    className="w-full  mx-auto px-2 relative mb-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            el: '.loc-pagination',
                            clickable: true,
                            bulletClass: 'swiper-custom-bullet',
                            bulletActiveClass: 'swiper-custom-bullet-active'
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3, spaceBetween: 32 }
                        }}
                        className="w-full pb-8"
                    >
                        {locations.map((loc, idx) => (
                            <SwiperSlide key={idx} className="h-full flex pb-4">
                                <div className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-white/60 p-2 transform transition-transform hover:-translate-y-1 w-full flex flex-col">
                                    <div className="aspect-3/2 bg-gray-200 rounded-t-[20px] rounded-b-md flex flex-col items-center justify-center w-full mb-6 shadow-sm overflow-hidden relative shrink-0">
                                        <img src={`/gyn-health/home/${loc.img}`} alt={loc.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="px-5 pb-5 flex-1 flex flex-col">
                                        <h3 className="font-bold text-[20px] text-primary mb-3">{loc.name}</h3>

                                        <div className="text-[16px] text-gray-500 leading-relaxed mb-2 flex-1 min-h-[50px]">
                                            <p>{loc.address1}</p>
                                            {loc.address2 && <p>{loc.address2}</p>}
                                        </div>

                                        <div className="flex flex-col xl:flex-row gap-3 xl:gap-5 mb-7 pt-5 border-t border-gray-300 shrink-0">
                                            <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-[16px] font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                {loc.phone}
                                            </a>
                                            <a href={`mailto:${loc.email}`} className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-[10px] font-medium truncate">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                <span className="truncate text-[16px]">{loc.email}</span>
                                            </a>
                                        </div>

                                        <div className="shrink-0 mt-auto">
                                            <button className="bg-[#a292b9] text-white px-6 py-2 rounded-[4px] hover:bg-primary-dark transition-colors text-[15px] font-bold border-none shadow-sm">
                                                Book Appointment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    .swiper-custom-bullet {
                        width: 8px;
                        height: 8px;
                        display: inline-block;
                        border-radius: 50%;
                        background: rgba(100, 100, 100, 0.4);
                        margin: 0 4px;
                        cursor: pointer;
                        transition: all 0.3s;
                    }
                    .swiper-custom-bullet-active {
                        background: white;
                        transform: scale(1.2);
                        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    }
                `}} />

                <div className="loc-pagination flex justify-center flex-row items-center h-6 mt-4 z-10 relative"></div>

            </div>
        </section>
    );
}
