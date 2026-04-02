"use client";

import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';

const testimonials = [
    {
        name: "John S.",
        role: "CPAP User",
        content: "The iQ2 changed my perception of my Sleep Apnea. Previously, I used a full face CPAP mask that was cumbersome, intrusive, noisy, and made me feel as though I had a severe medical condition. My mouth was covered and my ability to move comfortably was restricted. The iQ2 provides an entirely different experience. It fits comfortably and minimally over the nose for easy breathing while allowing for a quiet and restful night of sleep. Both my wife and I are happier with me sleeping with the iQ2."
    },
    {
        name: "Kristen B.",
        role: "Registered Respiratory Therapist",
        content: "In my experience as a respiratory therapist, the Sleepnet Ascend mask stands out for its comfort and customizable fit, greatly aiding patient compliance. Its straightforward design is particularly beneficial for those new to CPAP therapy. Durable and easy to use, the Ascend mask consistently excels in quality and effectiveness, making it a preferred choice for CPAP users."
    },
    {
        name: "Dr. Viral K. MD",
        role: "Medical Director",
        content: "Our collaboration with Sleepnet has been incredibly beneficial for our young patients and their families. The quality of Sleepnet’s masks, especially in the pediatric range, is outstanding. Their masks are not only effective but also designed with the comfort and needs of children in mind. We’re particularly grateful for their prioritization of pediatric orders, ensuring that our most vulnerable patients receive the care they need promptly. The level of service from Sleepnet is exceptional. They are responsive, understanding, and always willing to go the extra mile to assist us. Working with Sleepnet, it’s clear that they genuinely care about making a positive impact on children’s health."
    },
    {
        name: "Claudia M., RRT, RST, RPSGT, CCSH",
        role: "Sleep Technologist",
        content: "In my experience as a sleep technologist, the Sleepnet MiniMe2 mask stands out for its comfort and customizable fit, greatly aiding patient compliance. Its straightforward design is particularly beneficial for those new to CPAP therapy. Durable and easy to use, the MiniMe2 mask consistently excels in quality and effectiveness, making it a preferred choice for CPAP users."
    }
];

export default function TestimonialSection() {
    const swiperRef = useRef<SwiperType>(null);

    return (
        <section className="relative w-full py-32 lg:py-28 flex items-center">
            {/* Background Blue Bar - Perfectly centered, image pops out of it */}
            <div className="absolute  left-0 w-full h-[450px] lg:h-[650px] bg-primary z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-16">

                    {/* Left Image - Portrait aspect ratio popping out top & bottom */}
                    <div className="w-full lg:w-[50%] relative z-10 flex justify-start" data-aos="fade-right">
                        <div className="w-full aspect-9/10 shadow-2xl overflow-hidden rounded-sm transform -translate-y-[100px]">
                            <img
                                src={`/sleepnet/home/testi-img.png`}
                                alt="Doctor and patient"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-[50%] flex flex-col pt-16 lg:pt-0" data-aos="fade-left">

                        {/* Header & Controls */}
                        <div className="flex flex-row items-start justify-between gap-6 mb-10">
                            <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight max-w-[340px]">
                                What Our Customers say about Sleepnet
                            </h2>
                            <div className="flex gap-3 pt-2">
                                <button
                                    className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary-hover text-white flex items-center justify-center transition-all shadow-md active:scale-90"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <ArrowLeft size={18} strokeWidth={3} />
                                </button>
                                <button
                                    className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary-hover text-white flex items-center justify-center transition-all shadow-md active:scale-90"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <ArrowRight size={18} strokeWidth={3} />
                                </button>
                            </div>
                        </div>

                        {/* Testimonial Swiper */}
                        <div className="w-full" data-aos="zoom-in" data-aos-delay="200">
                            <Swiper
                                modules={[Navigation]}
                                onSwiper={(swiper) => {
                                    // @ts-ignore
                                    swiperRef.current = swiper;
                                }}
                                spaceBetween={30}
                                slidesPerView={1}
                                loop={true}
                                className="testimonial-swiper"
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="bg-[#203152]/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl border border-white/5 min-h-[320px] lg:min-h-[380px] flex flex-col">
                                            <h3 className="text-white text-lg font-bold mb-0.5">{testimonial.name}</h3>
                                            <p className="text-white/60 text-xs mb-6 font-semibold tracking-wider uppercase">{testimonial.role}</p>
                                            <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed font-light italic">
                                                "{testimonial.content}"
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
