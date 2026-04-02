'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
    {
        category: "2026 COLLECTION",
        title: { main: "Essential", sub: "mobility.<br/>Exceptional value." },
        description: "Whether you're looking for specialized solutions for point of care and frontline clinician workflows, we provide an essential foundation for digital healthcare and integrated patient management.",
        buttonText: "EXPLORE LITELINE",
        image: "/home/slider-1.webp",
        themeColor: "accent", // Green
        gradient: "from-accent via-[#45a840] to-[#2d7a29]",
        platformLabel: "LITELINE PORTFOLIO"
    },
    {
        category: "CLINICAL PERFORMANCE",
        title: { main: "Built for", sub: "Workflows,<br/>Not Workarounds." },
        description: "MedLine goes beyond basic carts, delivering adaptable, non-powered workstations engineered for demanding clinical environments. With modular flexibility and ergonomic design, MedLine empowers clinicians.",
        buttonText: "EXPLORE MEDLINE",
        image: "/home/slider-2.webp",
        themeColor: "[#00aeef]", // Secondary Blue/Cyan
        gradient: "from-secondary via-[#0096ce] to-[#007ba8]",
        platformLabel: "MEDLINE PORTFOLIO"
    },
    {
        category: "AWARDED SOLUTIONS",
        title: { main: "Uninterrupted", sub: "workflow,<br/>Awarded performance." },
        description: "Bytec's award-winning GeniTec™ power platform gives clinicians safe, swappable, and smart power for an uninterrupted workflow. With extended uptime and advanced compliance features.",
        buttonText: "EXPLORE GENITEC",
        image: "/home/slider-3.webp",
        themeColor: "fuchsia-600",
        buttonClass: "bg-fuchsia-600 hover:bg-fuchsia-700 shadow-fuchsia-600/20",
        textClass: "text-fuchsia-600",
        bgClass: "bg-fuchsia-50",
        gradient: "from-fuchsia-600 via-purple-700 to-indigo-800",
        platformLabel: "GENITEC PORTFOLIO"
    }
];

export default function SolutionsSlider() {
    return (
        <section className="section bg-white overflow-hidden">
            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                className="solutions-swiper"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="container py-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                <div className="order-2 lg:order-1" data-aos="fade-right">
                                    <div className={`inline-block px-5 py-1.5 rounded-full text-xs font-black tracking-[0.2em] mb-8 uppercase ${slide.bgClass || (slide.themeColor === 'accent' ? 'bg-accent/10' : 'bg-secondary/10')} ${slide.textClass || (slide.themeColor === 'accent' ? 'text-accent' : 'text-secondary')}`}>
                                        {slide.category}
                                    </div>
                                    <h2 className="mb-8 leading-tight" style={{ fontSize: 'var(--fs-h2)' }}>
                                        <span className={` decoration-8 ${slide.textClass || (slide.themeColor === 'accent' ? 'text-accent' : 'text-secondary')}`}>
                                            {slide.title.main}
                                        </span>{' '}
                                        <span dangerouslySetInnerHTML={{ __html: slide.title.sub }} />
                                    </h2>
                                    <p className="text-light text-xl mb-12 max-w-lg leading-relaxed font-sans">
                                        {slide.description}
                                    </p>
                                    <button className={`text-white px-12 py-5 rounded-2xl font-black text-sm tracking-widest flex items-center gap-4 hover:translate-y-[-8px] transition-all duration-500 active:scale-95 group shadow-xl ${slide.buttonClass || (slide.themeColor === 'accent' ? 'bg-accent hover:bg-accent/90 shadow-accent/20' : 'bg-secondary hover:bg-primary shadow-secondary/20')}`}>
                                        {slide.buttonText}
                                        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="order-1 lg:order-2 relative h-[550px] group" data-aos="fade-left">
                                    {/* Decorative Platform Design extending to the right edge */}
                                    <div className={`h-[310px] absolute left-0 md:-left-20 right-[-100vw] bottom-0 bg-gradient-to-br ${slide.gradient} rounded-l-[50px] border-8 border-white shadow-2xl transition-all duration-700`}></div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {slide.image ? (
                                            <div className="relative w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                                                <img
                                                    src={`/bytec-healthcare${slide.image}`}
                                                    alt={slide.platformLabel}
                                                    className="max-w-full w-[720px]! max-h-[90%] object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-full h-[85%] flex items-center justify-center border-4 border-dashed border-gray-200/20 rounded-[40px] bg-white/5 backdrop-blur-[2px] shadow-inner overflow-hidden">
                                                <div className="flex flex-col items-center">
                                                    <div className="relative mb-6">
                                                        <div className={`absolute inset-0 bg-white/20 blur-2xl rounded-full`}></div>
                                                        <svg className="w-24 h-24 text-white relative opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <span className="font-heading font-black text-4xl text-white/10 tracking-widest uppercase mb-2">Portfolio</span>
                                                    <p className="text-white/40 font-bold text-xs tracking-[0.3em] uppercase">{slide.platformLabel}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <style jsx global>{`
        .solutions-swiper {
          padding-bottom: 60px !important;
        }
        .solutions-swiper .swiper-pagination {
          bottom: 10px !important;
        }
        .solutions-swiper .swiper-pagination-bullet {
          width: 40px;
          height: 4px;
          border-radius: 2px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .solutions-swiper .swiper-pagination-bullet-active {
          background: var(--secondary-cyan);
          width: 60px;
        }
      `}</style>
        </section>
    );
}
