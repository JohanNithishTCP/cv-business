"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Feature {
    title: string;
    description: string;
    image: string;
}

interface CategoryFeaturesProps {
    carousel1Title: string;
    carousel1Features: Feature[];
    carousel2Title: string;
    carousel2Features: Feature[];
}

export default function CategoryFeatures({
    carousel1Title,
    carousel1Features,
    carousel2Title,
    carousel2Features,
}: CategoryFeaturesProps) {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Carousel 1 */}
                <div className="mb-20">
                    <div className="text-center mb-12" data-aos="fade-down">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {carousel1Title}
                        </h3>
                    </div>
                    <div className="w-full" data-aos="fade-up">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                reverseDirection: true, /* Left to Right */
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                            modules={[Autoplay]}
                            className="features-swiper-1 !pb-4"
                        >
                            {carousel1Features.map((feature, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center text-center group cursor-grab active:cursor-grabbing p-4">
                                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-[3px] border-primary/20 group-hover:border-primary transition-colors duration-500 shadow-md">
                                            <img
                                                src={`/emos-technology/${feature.image}`}
                                                alt={feature.title}
                                                className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                                            />
                                        </div>
                                        <h4 className="text-primary font-bold text-sm mb-2 h-10 flex items-center justify-center">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Carousel 2 */}
                <div>
                    <div className="text-center mb-12" data-aos="fade-down">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                            {carousel2Title}
                        </h3>
                    </div>
                    <div className="w-full" data-aos="fade-up" data-aos-delay="200">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            speed={5000}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true, /* Right to Left */
                            }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                1024: { slidesPerView: 5 },
                            }}
                            modules={[Autoplay]}
                            className="features-swiper-2 !pb-4"
                        >
                            {carousel2Features.map((feature, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex flex-col items-center text-center group cursor-grab active:cursor-grabbing p-4">
                                        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-[3px] border-primary/20 group-hover:border-primary transition-colors duration-500 shadow-md">
                                            <img
                                                src={`/emos-technology${feature.image}`}
                                                alt={feature.title}
                                                className="object-cover group-hover:scale-110 transition-transform duration-500 w-full h-full"
                                            />
                                        </div>
                                        <h4 className="text-primary font-bold text-sm mb-2 h-10 flex items-center justify-center">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <style jsx global>{`
                    .swiper-wrapper {
                        transition-timing-function: linear !important;
                    }
                `}</style>
            </div>
        </section>
    );
}
