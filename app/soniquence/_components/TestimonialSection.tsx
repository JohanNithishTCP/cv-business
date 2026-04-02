"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";
import { useRef } from 'react';

const testimonials = [
    {
        quote: "The Soniquence system has been a welcome addition to our surgical armamentarium. The efficiency and ease of use make it a great system for my cosmetic facial surgery. The novel electrode quick attach system and increased power with the bipolar turbo function are much appreciated. We use this system daily for surgical incisions, coagulation, lesion removal, and more.",
        author: "Dr. Joseph Niamtu III, DMD",
        image: "/home/testi-1.png"
    },
    {
        quote: "Soniquence is all about high-quality surgical RF- I get to perform every common surgical procedure I want, in my office, with minimal tissue damage and bleeding. Soniquence works like an artist's brush in the hands of a surgeon. I get to thin and feather my flaps easily, to the exact dimensions I wish.",
        author: "James Chelnis, MD",
        image: "/home/testi-2.png"
    },
    {
        quote: "The Soniquence Radiofrequency unit represents the best available technology in a surgical cutting device. I've used many different radiofrequency devices, but the Soniquence unit delivers consistent functionality, clean cutting, and excellent hemostasis of surgical incisions, particularly with the TURBO mode. I highly recommend the Soniquence device for any veterinarian that is considering purchasing a well-designed unit capable of powering a host of different attachments that assist the surgeon in providing excellent outcomes in any surgical procedure.",
        author: "Jeff Mayo, DVM, DABVP",
        image: "/home/testi-3.png"
    },
    {
        quote: "The Soniquence SmoothWave i200 has been an invaluable addition to my cosmetic surgery practice. I have been using radiofrequency devices for facial cosmetic surgery for over 10 years, and I am ecstatic with the precision and control provided by the i200. It is an all-in-one device that provides the capability for precise and clean incisions with the power of a traditional bipolar cautery.",
        author: "Ryan M. Diepenbrock, DDS, FAACS",
        image: "/home/testi-4.png"
    }
];

export default function TestimonialSection() {
    const swiperRef = useRef<any>(null);

    return (
        <section className="w-full py-16 md:py-24 bg-[#FAFAFA]">
            <div
                data-aos="fade-up"
                className="site-container"
            >
                <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    className="w-full"
                >
                    {testimonials.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">
                                {/* Left Text */}
                                <div className="space-y-6 md:space-y-8 lg:pr-1">
                                    <h2 className="text-[1.8rem] md:text-[1.7rem] font-bold text-[#202020] leading-[1.3] tracking-tight">
                                        What Our Customer Says about<br className="hidden sm:block" />Soniquence
                                    </h2>
                                    <div className="text-[#555555] leading-relaxed text-[15px] md:text-[18px] max-w-full md:max-w-[90%] min-h-auto md:min-h-[160px]">
                                        <p>"{t.quote}"</p>
                                    </div>
                                    <div className="font-bold text-[#202020] text-lg">
                                        - {t.author}
                                    </div>

                                    {/* Navigation Arrows */}
                                    <div className="flex space-x-4 pt-2 md:pt-4">
                                        <button
                                            onClick={() => swiperRef.current?.slidePrev()}
                                            className="w-12 h-12 rounded-full brand-gradient hover:bg-[#7D00E6] flex items-center justify-center text-white transition-colors shadow-md active:scale-95"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                        <button
                                            onClick={() => swiperRef.current?.slideNext()}
                                            className="w-12 h-12 rounded-full brand-gradient hover:bg-[#7D00E6] flex items-center justify-center text-white transition-colors shadow-md active:scale-95"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image Container */}
                                <div className="relative w-full h-[350px] md:w-auto md:h-[500px] mt-6 lg:mt-0 flex justify-center lg:justify-end">
                                    {/* Main Image */}
                                    <div className="absolute rounded-xl overflow-hidden flex flex-col justify-center items-center">
                                        <img
                                            src={`/soniquence/${t.image}`}
                                            alt={t.author}
                                            className="w-auto h-[350px] md:h-[500px] object-cover"
                                        />
                                    </div>


                                    {/* Review Overlay Card */}
                                    <div className="absolute -bottom-6 left-4 md:bottom-10 md:left-[-40px] bg-white rounded-2xl p-4 shadow-xl z-20 flex flex-col gap-2 scale-90 sm:scale-100 origin-bottom-left">
                                        <div className="flex items-center gap-4">
                                            <div className="flex -space-x-2">
                                                <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-200 border-2 border-white"><img src={`/soniquence/home/ts-1.png`} alt="" /> </div>
                                                <div className="w-8 h-8 rounded-full overflow-hidden bg-purple-200 border-2 border-white"><img src={`/soniquence/home/ts-2.png`} alt="" /> </div>
                                                <div className="w-8 h-8 rounded-full overflow-hidden bg-pink-200 border-2 border-white"><img src={`/soniquence/home/ts-3.png`} alt="" /> </div>
                                            </div>
                                            <div className="flex text-yellow-500">
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 font-medium">Trusted reviews all over world</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

