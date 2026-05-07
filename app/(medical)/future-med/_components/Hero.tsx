"use client";

import React, { useState } from 'react';

export default function Hero() {
  const bannerVideos = [
    "https://cdn.clinicalvisuals.com/medical/futuremeds/landingpage/eco_stand_1.webm",
    "https://cdn.clinicalvisuals.com/medical/futuremeds/landingpage/eco_stand_2.webm",
    "https://cdn.clinicalvisuals.com/medical/futuremeds/landingpage/eco_stand_3.webm",
    "https://cdn.clinicalvisuals.com/medical/futuremeds/landingpage/eco_stand_4.webm",
    "https://cdn.clinicalvisuals.com/medical/futuremeds/landingpage/eco_stand_5.webm",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [fade, setFade] = useState(false);

  const handleVideoEnd = () => {
    setFade(true); // Trigger fade out of top video
    setTimeout(() => {
      // Move to next indices after fade
      const newActive = nextVideoIndex;
      const newNext = (nextVideoIndex + 1) % bannerVideos.length;
      setCurrentVideoIndex(newActive);
      setNextVideoIndex(newNext);
      setFade(false); // Reset fade for next cycle
    }, 500); // Match transition duration
  };

  return (
    <section className="relative w-full h-screen bg-slate-800 flex items-end justify-center overflow-hidden pb-16">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        {/* Underlay Video (the next one) */}
        <video
          src={bannerVideos[nextVideoIndex]}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        {/* Overlay Video (the current one) */}
        <video
          key={currentVideoIndex}
          src={bannerVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
        ></video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="heading text-white mb-4 drop-shadow-md" data-aos="fade-up">
          Welcome to <span className="text-primary">FutureMed </span>Global
        </h1>
        <p className="para text-white drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
          We specialise in next generation medical equipment for<br className="hidden md:block" /> hospitals and treatment facilities.
        </p>
      </div>
    </section>
  );
}
