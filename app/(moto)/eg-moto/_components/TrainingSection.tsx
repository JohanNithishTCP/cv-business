"use client";

import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const trainingEvents = [
  {
    title: "Basic Service Medical IT Training",
    date: "04.05.2026",
    image: "/nihon/images/innovative-1.png",
    description: "This foundational course is designed to equip service personnel with the ess...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "IVD Service Practical Training: MEK-6550K Series",
    date: "15.06.2026",
    image: "/nihon/images/innovative-2.png",
    description: "This practical training is designed for service professionals supporting the...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "Service Practical Training: NKV-330, NKV-440 and NKV-550",
    date: "15.06.2026",
    image: "/nihon/images/innovative-3.png",
    description: "This intensive, hands-on course is specifically designed for service tec...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "Advanced Service Medical IT Training",
    date: "05.10.2026",
    image: "/nihon/images/innovative-4.png",
    description: "The Advanced Service Medical IT Training is designed to equip service engine...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "Service Practical Training: PMS, ECG and Defibrillator",
    date: "12.10.2026",
    image: "/nihon/images/innovative-5.png",
    description: "This intensive course provides participants with essential service knowledge...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "Praktisches Service-Training: PMS, EKG & Defibrillator",
    date: "27.10.2026",
    image: "/nihon/images/innovative-6.png",
    description: "Dieser Intensivkurs vermittelt den Teilnehmenden grundlegendes Service...",
    location: "Rosbach vor der Höhe, Germany"
  },
  {
    title: "Service Practice Training: Neurofax EEG-1200 & polaris.ONE",
    date: "02.11.2026",
    image: "/nihon/images/innovative-7.jpg",
    description: "This practical training program is designed for technical service profes...",
    location: "Rosbach vor der Höhe, Germany"
  }
];

const TrainingSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#D8EFFF]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-6xl mx-auto mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
            <h2 className="text-[#0068B3] font-semibold text-[16px]">
              Latest Blog
            </h2>
          </div>

          <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>
          <p className="text-[#333333] text-sm md:text-[17px] leading-relaxed">
            Nihon Kohden has developed innovative and unique technologies that contribute to progress in medical care.  We boldly take on new challenges, maintaining a keen eye for detail as we keep in mind the spirit of the founder.
          </p>
        </div>

        {/* Training Carousel */}
        <div data-aos="fade-up">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {trainingEvents.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="group bg-white rounded-2xl overflow-hidden transition-all duration-500 h-full flex flex-col cursor-pointer">
                  <div className="aspect-[4/2.5] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-[20px] md:text-[20px] font-bold text-[#2B2F31] mb-3 group-hover:text-[#0068B3] transition-colors leading-tight min-h-[50px]">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs md:text-[16px] font-medium text-[#333333] mb-4">
                      <Calendar size={16} className="text-[#333333]" />
                      {event.date}
                    </div>

                    <p className="text-[#333333]/80 text-[15px] leading-relaxed mb-6 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs md:text-[16px] font-medium text-[#333333] mt-auto">
                      <MapPin size={16} className="text-[#333333]" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Slider Indicator */}
        <div className="flex justify-center mt-4 gap-3">
          <div className="w-12 h-1.5 rounded-full bg-[#0068B3]"></div>
          <div className="w-12 h-1.5 rounded-full bg-black/10"></div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
