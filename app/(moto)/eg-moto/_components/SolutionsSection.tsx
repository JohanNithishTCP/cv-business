"use client";

import React, { useRef } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const solutionSlides = [
  {
    title: "Across The Continium Of Care",
    description: "Early detection and timely intervention are crucial in critical care. Nihon Kohden utilizes advanced technology to transform invisible patient data into visible insights on monitors, facilitating comprehensive assessment of patient conditions. Integrated with their ventilators and defibrillators, this technology enables efficient monitoring and treatment in critical settings..."
  },
  {
    title: "Prehospital",
    description: "Comprehensive patient care to encompass pre-hospital interventions. Nihon Kohden ensures treatment during this acute phase by equipping healthcare providers with high quality devices that support start of the care cycle, from continuous monitoring to intubation, defibrillation, and resuscitation..."
  },
  {
    title: "Neuromonitoring (ICU)",
    description: "Cardiac and respiratory monitoring are standard practices in the intensive care unit (ICU) environment today, however, electroencephalography (EEG) which plays a crucial role in determining the current status of the patient is not Despite challenges associated with monitoring EEG in ICU, during this crucial phase of..."
  },
  {
    title: "Laboratory (IVD)",
    description: "Nihon Kohden is a pioneering force in the realm of In-Vitro Diagnostics (IVD), offering cutting-edge solutions tailored for laboratory settings. Renowned for their precision and reliability, Nihon Kohden's IVD solutions empower healthcare professionals with advanced technologies that enhance diagnostic accuracy and efficiency..."
  },
  {
    title: "Public Access AED",
    description: "Sudden cardiac arrest occurring outside the hospital continues to be a significant public health concern. Currently, the primary method to restore normal heart rhythm during cardiac arrest is through the use of automated external defibrillators (AEDs). Nihon Kohden plays a vital role by supplying AEDs to public access defibrillation (PAD) facilities worldwide..."
  },
  {
    title: "Diagnostics",
    description: "The quality of Nihon Kohden amplifiers ensure high quality electroencephalography (EEG) and electromyography (EMG) signals, providing clinicians with accurate clinically relevant data through our reliable detection technology. Nihon Kohden technology has its roots in EEG, with over 70 years of experience, we have developed trusted technologies in medical technology field..."
  },
  {
    title: "Ward",
    description: "To ensure efficient patient care management, the transition from the critical care unit to the general ward is crucial. In the ward, patients engage in mobility and walk as part of their recovery process. Nihon Kohden offers an optimal monitoring solution that promotes an eustressful environment while maintaining secure monitoring through..."
  }
];

const SolutionsSection = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Top Part: Text + Human Torso */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:col-span-7" data-aos="fade-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 bg-[#0068B3]"></div>
                <h2 className="text-[#0068B3] font-semibold text-[16px]">
                  Discover our Solutions
                </h2>
              </div>
              <div className="w-full h-[1px] bg-[#000000]/10 mb-6"></div>
              <h3 className="text-[24px] md:text-[28px] font-bold text-[#353A3D] leading-tight">
                Across The Continium Of Care
              </h3>
            </div>


            <div className="space-y-6 leading-relaxed  text-[17px] text-justify">
              <p>
                Welcome to Nihon Kohden's innovative solution portfolio, where cutting-edge technology meets healthcare excellence. Discover our advanced medical devices and systems designed to enhance patient care, streamline workflows, and empower clinical outcomes across the continuum of care.
              </p>
              <p>
                Driven by decades of innovation and a commitment to life-saving technology, Nihon Kohden combines precision engineering with medical expertise to support healthcare professionals in critical moments. From patient monitoring and neurology to cardiology, emergency care, and hospital IT solutions, our technologies are built to deliver reliability, accuracy, and confidence in every environment.
              </p>
            </div>

            <div className="pt-4">
              <Button href="#" variant="primary" size="md">
                Get to Know Us
              </Button>
            </div>
          </div>

          {/* Right Image Placeholder (Human Torso) */}
          <div className="relative lg:col-span-5 lg:-ml-20 z-0" data-aos="fade-up">
            <div className="relative w-full max-w-[550px] aspect-square flex justify-center lg:justify-start">
              {/* Blue Torso Illustration Placeholder */}
              <div className="w-full h-full bg-gradient-to-t from-[#0068B3]/20 to-transparent rounded-full absolute bottom-0 blur-3xl"></div>

              {/* Base Image */}
              <img
                src="/nihon/images/blue-man.png"
                alt="Human Torso Solution Illustration"
                className="absolute inset-0 z-10 w-full h-full object-contain scale-110"
              />

              {/* Pulsing Overlay Image */}
              <motion.img
                src="/nihon/images/blue-man-2.png"
                alt="Human Torso Alternative Illustration"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 z-20 w-full h-full object-contain scale-110"
              />
            </div>
          </div>
        </div>

        {/* Bottom Part: Slider/Feature Pill */}
        <div className="relative mt-4 mb-8" data-aos="fade-up">
          <div className="bg-[#2B78B1] lg:rounded-full py-10 px-12 md:px-24 text-white relative overflow-hidden">
            {/* Arrows */}
            <div className="absolute inset-y-0 left-6 md:left-12 flex items-center z-30">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2B78B1] shadow-xl hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronLeft size={24} strokeWidth={3} />
              </button>
            </div>

            <div className="absolute inset-y-0 right-6 md:right-12 flex items-center z-30">
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2B78B1] shadow-xl hover:scale-110 transition-transform cursor-pointer"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </div>

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={1}
              spaceBetween={50}
              loop={true}
              className="w-full"
            >
              {solutionSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4">
                    <h4 className="text-[16px] md:text-[20px] font-bold tracking-normal mb-3">
                      {slide.title}
                    </h4>
                    <p className="text-sm md:text-[16px] text-white leading-relaxed font-light">
                      {slide.description} <span className="font-bold border-b border-white/50 cursor-pointer hover:border-white transition-colors uppercase text-[12px] ml-1">READ MORE</span>
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
