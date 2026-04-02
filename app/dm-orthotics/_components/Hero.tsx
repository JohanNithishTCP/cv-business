"use client";
import React, { useState } from 'react';

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/DM-Orthotics/landing_page/orthotics_01.webm",
  "https://cdn.clinicalvisuals.com/medical/DM-Orthotics/landing_page/orthotics_02.webm",
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-black w-full min-h-screen flex flex-col items-center justify-end pb-16 md:pb-24 relative overflow-hidden">
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
        {/* Overlay for text readability */}
        {/* <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10"></div> */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="lg:text-[35px] text-[25px] font-medium text-white mb-4 drop-shadow-md" data-aos="fade-up">
          Enhancing Mobility with Smart Orthotic Design
        </h1>
        {/* <p className="para text-white drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
          We specialise in next generation medical equipment for<br className="hidden md:block" /> hospitals and treatment facilities.
        </p> */}
      </div>
    </section>
  );
}