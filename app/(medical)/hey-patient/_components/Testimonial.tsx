"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export const Testimonial = () => {
    const testimonials = [
        {
            name: "Dr. Daniel Heller",
            role: "President of the Board",
            hospital: "Kantonsspital Baden AG",
            image: "/images/home/testimonials-1.png",
            content: "As a leading tertiary care hospital in Switzerland, we use the patient portal from heyPatient. In our new building, Agnes, we rely on their smart patient call system, which is redefining efficiency and the patient experience. This sets new standards in patient guidance and support.\n\nThe experts at heyPatient excel in high-level process automation and develop practical solutions in co-creation with hospital professionals. They are visionary, always open to feedback, and willing to go the extra mile. heyPatient is a reliable partner, and we look forward to continued collaboration and future innovations."
        },
        {
            name: "Adriano Mari",
            role: "CEO",
            hospital: "Swiss Medical Care Compass",
            image: "/images/home/testimonials-2.png",
            content: "The start of our collaboration with heyPatient was shaped through joint design workshops.\nFrom our digitalization initiative, a holistic target vision emerged for a modern digital patient experience, including a refreshed appearance, structured digital onboarding and seamless end to end processes.Today, we use a fully branded heyPatient app with dedicated functionalities as well as an integrated web registration, both enhanced with a Patient Concierge bot and tailored to our international patients.\n\nThe expertise of heyPatient in integrating third party systems is particularly valuable, supporting both internal automation and patient facing features. The collaboration is based on partnership, solution oriented thinking and continuously delivers new impulses for innovative offerings in the market."
        },
        {
            name: "René Künzli",
            role: "Head of Services",
            hospital: "Swiss Paraplegic Center",
            image: "/images/home/testimonials-3.png",
            content: "Enabling our patients to plan their stay online is a logical step in our digitalization strategy.\n\nheyPatient offers a convincing solution for this."
        },
        {
            name: "Dr. Justus von Grone",
            role: "Managing Director",
            hospital: "CSI-HSG, Universität St. Gallen",
            image: "/images/home/testimonials-4.png",
            content: "As part of the Partnership Catalyst Program, which we had the opportunity to implement together with the Swiss Agency for Development and Cooperation (SCD), we worked closely with heyPatient. The collaboration was enriching in every respect and marked by a high level of professionalism.\n\nWe were impressed by the precision and reliability with which the heyPatient team operated.\n\nCombined with their strong technical expertise and a clear understanding of economic feasibility, heyPatient made a significant contribution to the success of the program."
        }
    ];

    return (
        <section className="py-12">
            <div className="site-container">
                <div className="bg-[#08949E] text-white rounded-[2rem] relative overflow-hidden min-h-[550px] flex items-center py-16">

                    {/* Background Motifs (Hexagons and Plus signs) */}
                    <div className="absolute inset-0 z-0">
                        {/* Hexagon Pattern Placeholder / Overlay */}
                        <div className="absolute inset-0 bg-[url('/hey-patient/images/home/testimonials-bg.png')] bg-cover"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-10 lg:px-20 relative z-10 w-full">
                        <Swiper
                            modules={[Pagination, Autoplay, EffectFade]}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true,
                                el: '.custom-swiper-pagination'
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            className="w-full cursor-pointer testimonial-swiper pb-20"
                        >
                            {testimonials.map((item, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                                        {/* Left Side: Text Area */}
                                        <div className="lg:col-span-7" data-aos="fade-right">
                                            <div className="mb-8">
                                                <h4 className="text-white! text-[18px] md:text-[22px] font-medium mb-3 text-center lg:text-left">Testimonials</h4>
                                                <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-bold text-white! leading-tight text-center lg:text-left">
                                                    Why Our Clients Continue to<br className="hidden md:block" /> Love Working With Us
                                                </h2>
                                            </div>

                                            <div className="bg-white text-[#334155] p-5 lg:p-12 rounded-r-[1.5rem] lg:rounded-r-none rounded-l-[1.5rem] shadow-none relative lg:-mr-12 z-20">
                                                <div className="whitespace-pre-line text-[16px] md:text-[16px] leading-[1.7] mb-10 text-gray-600 font-medium text-justify lg:text-left">
                                                    {item.content}
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="font-bold text-[#08949E]!">
                                                        {item.name}, {item.role}
                                                    </p>
                                                    <p className="text-[#08949E]! font-bold">
                                                        {item.hospital}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side: Portrait Image Area */}
                                        <div className="hidden lg:block lg:col-span-5 flex" data-aos="fade-left">
                                            <div className="relative w-full max-w-[450px] h-[650px] rounded-[1.5rem] overflow-hidden">
                                                <img
                                                    src={`/hey-patient/${item.image}`}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                            {/* Pagination dots directly inside the swiper */}
                            <div className="custom-swiper-pagination flex justify-center gap-2.5 absolute bottom-0 left-0 right-0 z-30 pointer-events-auto"></div>
                        </Swiper>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .custom-swiper-pagination .swiper-pagination-bullet {
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
                .custom-swiper-pagination .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    width: 24px !important;
                    border-radius: 6px !important;
                }
            `}</style>
        </section>
    );
};
