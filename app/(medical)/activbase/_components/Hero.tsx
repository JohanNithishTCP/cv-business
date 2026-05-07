"use client";
import Link from "next/link";
import React, { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/activbase/landing_page/activebase_01.webm",
  "https://cdn.clinicalvisuals.com/medical/activbase/landing_page/activebase_02.webm",
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };

  return (
    <section className="w-full bg-black h-screen flex items-center relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          key={currentVideoIndex}
          src={bannerVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover z-0"
        ></video>
        {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-20 relative z-10 w-full h-full">
        {/* Left Content */}
        <div className="flex flex-col justify-end h-full pt-20 pb-10 text-white">
          <p data-aos="fade-up" className="text-[16px] font-medium mb-4 text-white">Trusted by 5,000+ patients</p>
          <h1 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold uppercase tracking-tight mb-6 leading-tight">
            Rise Above Pain
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[16px] text-white mb-8 max-w-lg leading-relaxed">
            Expert and personalised physiotherapy care in Kochi focused on pain management, complete rehabilitation, safe return to daily living activities, and confident return to sports.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="bg-primary text-white font-semibold flex items-center justify-center px-8 py-3.5 rounded-full hover:bg-secondary transition-colors"
            >
              Book Appointment
            </Link>
            <Link
              href="#"
              className="bg-transparent text-white border border-white font-semibold flex items-center justify-center px-8 py-3.5 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
