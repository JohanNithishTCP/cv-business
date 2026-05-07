"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';

const departments = [
    { img: "/images/home/dept-1.png", title: 'Hospitals & Clinics', desc: 'Automated patient logistics and self-Services to ease staff-workload' },
    { img: "/images/home/dept-2.png", title: 'Rehab', desc: 'Effortless navigation, real-time therapy plans, and up-to-date information.' },
    { img: "/images/home/dept-3.png", title: 'Affiliated Clinics', desc: 'Seamless access, timely notification, and optimal support.' },
    { img: "/images/home/dept-4.png", title: 'Psychiatry', desc: 'Intuitive interaction, navigation, always up-to-date schedules, information, day plans and more' },
    { img: "/images/home/dept-5.png", title: 'Practices', desc: 'Digital entry and online-booking, automated interaction, and ready-made documents.' }
];

export const Departments = () => {
    return (
        <section className="py-4">
            <div className="site-container">
                <div className="bg-[#08949E] rounded-[2rem] text-white py-12 relative overflow-hidden">
                    {/* Background Image and Overlay */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={`/hey-patient/images/home/dept-bg.png`}
                            alt="Background"
                            className="w-full h-full object-cover "
                        />

                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 relative z-10" data-aos="fade-up">
                            <h2 className="text-white! text-[22px]! font-medium mb-2">Discover Our Specialized Departments</h2>
                            <h3 className="text-2xl md:text-[28px] lg:text-[30px] font-semibold max-w-2xl mx-auto leading-tight text-white!">
                                A Comprehensive Digital Patient Portal for Seamless Access to Your Care
                            </h3>
                        </div>

                        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10" data-aos="fade-up" data-aos-delay="200">
                            {departments.map((dept, idx) => (
                                <div key={idx} className="bg-white text-[#1E293B] p-8 rounded-xl shadow-lg hover:-translate-y-1 transition-transform duration-300 text-center flex flex-col items-center justify-start h-[16rem]">
                                    <div className="flex justify-center mb-4 h-20">
                                        <img src={`/hey-patient/${dept.img}`} alt={dept.title} className="object-contain" />
                                    </div>
                                    <h4 className="lg:text-[24px] text-[18px] font-bold mb-3">{dept.title}</h4>
                                    <p className="lg:text-[13px] text-[11px] text-[#64748B] leading-relaxed">{dept.desc}</p>
                                </div>
                            ))}

                            {/* 6th Card: Explore Medical Department */}
                            <div className="bg-[#036870] text-white p-8 rounded-xl shadow-lg transition-transform duration-300 relative overflow-hidden h-[16rem] group">
                                <div className="relative z-10 h-full flex flex-col justify-start">
                                    <h4 className="text-2xl! text-white! font-bold mb-6 mt-2 max-w-[80%] leading-tight">Explore Medical<br />Department</h4>
                                    <button className="bg-white text-[#08949E] text-sm font-semibold py-3 px-6 rounded-full flex items-center gap-2 w-max hover:bg-gray-100 transition-colors">
                                        Visit our Portal <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <img src={`/hey-patient/images/home/medical-dr.png`} alt="Doctor" className="absolute bottom-0 right-0 w-100 h-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>

                        {/* Mobile Carousel */}
                        <div className="block lg:hidden relative z-10" data-aos="fade-up" data-aos-delay="200">
                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                }}
                                pagination={{
                                    clickable: true,
                                    el: '.dept-swiper-pagination'
                                }}
                                autoplay={{ delay: 5000 }}
                                className="pb-12 cursor-pointer testimonial-swiper"
                            >
                                {departments.map((dept, idx) => (
                                    <SwiperSlide key={idx}>
                                        <div className="bg-white text-[#1E293B] p-6 rounded-xl shadow-lg text-center h-[200px] flex flex-col items-center justify-center">
                                            <div className="flex justify-center mb-4 h-12">
                                                <img src={`/hey-patient/${dept.img}`} alt={dept.title} className="object-contain h-full" />
                                            </div>
                                            <h4 className="text-[16px] font-bold mb-2">{dept.title}</h4>
                                            <p className="text-[#64748B] text-[13px]">{dept.desc}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <SwiperSlide>
                                    <div className="bg-[#08949E] text-white p-6 rounded-xl shadow-lg text-left h-[200px] flex flex-col justify-between relative overflow-hidden">
                                        <h4 className="text-lg font-bold mb-4 relative z-10">Explore Medical<br />Department</h4>
                                        <button className="bg-white text-[#08949E] text-xs font-semibold py-2 px-4 rounded-full flex items-center gap-2 w-max relative z-10">
                                            Visit our Portal <ArrowUpRight className="w-4 h-4" />
                                        </button>
                                        <img src={`/hey-patient/images/home/medical-dr.png`} alt="Doctor" className="absolute -bottom-4 -right-4 w-32 object-contain opacity-50" />
                                    </div>
                                </SwiperSlide>

                                {/* Custom Pagination Container */}
                                <div className="dept-swiper-pagination flex justify-center gap-2.5 absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .dept-swiper-pagination .swiper-pagination-bullet {
                    background: white !important;
                    opacity: 0.35 !important;
                    width: 7px !important;
                    height: 7px !important;
                    margin: 0 !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    border-radius: 50% !important;
                    cursor: pointer !important;
                    display: inline-block !important;
                }
                .dept-swiper-pagination .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 24px !important;
                    border-radius: 6px !important;
                }
            `}</style>
        </section>
    );
};
