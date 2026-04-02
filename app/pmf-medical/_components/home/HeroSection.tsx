"use client";
import React, { useState } from 'react';
import { Container } from '../ui/Container';

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/pfm_medical/landingpage/clip_01.webm",
  "https://cdn.clinicalvisuals.com/medical/pfm_medical/landingpage/clip_02.webm",
  // "https://cdn.clinicalvisuals.com/medical/pfm_medical/landingpage/clip_04.webm",
];

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pb-24 lg:pb-25 overflow-hidden bg-black">
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
        />
        {/* Overlay for text readability */}
        {/* <div className="absolute inset-0 bg-black/40 z-10" /> */}
      </div>

      <Container className="relative z-20">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1
            data-aos="fade-up"
            data-aos-delay="3000"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-[35px] font-bold mb-4 md:mb-6 leading-tight [text-shadow:2px_2px_10px_rgba(0,0,0,0.5)]"
          >
            Precision Medical Technology You Can Trust
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="3000"
            className="text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed max-w-5xl mx-auto [text-shadow:1px_1px_5px_rgba(0,0,0,0.5)] opacity-90"
          >
            We deliver high-quality medical devices engineered with precision and reliability. Our solutions are designed to support healthcare professionals with safety, efficiency, and uncompromising performance across every application.
          </p>
        </div>
      </Container>
    </section>
  );
}
