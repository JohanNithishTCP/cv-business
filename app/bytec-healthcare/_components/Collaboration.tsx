'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Collaboration() {
    return (
        <section className="py-10 border-b border-gray-50 bg-gray-100 ">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl" data-aos="fade-up">
                        <h2 className="mb-6 leading-tight" style={{ fontSize: 'var(--fs-h2)' }}>
                            Collaboration that makes adoption, <br />
                            <span className="text-gradient-blue">Smoother, faster, safer!</span>
                        </h2>
                        <p className="text-light text-lg leading-relaxed">
                            Whether you're looking for specialized solutions for point of care and frontline clinician workflows, we provide an essential foundation for digital healthcare and integrated patient management.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="200">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="logo-swiper"
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num, idx) => (
                                <SwiperSlide key={idx} className="flex items-center justify-center">
                                    <img src={`/bytec-healthcare/home/collaboration-${num}.png`} className="w-[150px] h-auto object-contain transition-all duration-500" alt="Partner Logo" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
