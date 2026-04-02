"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-1.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-3.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-4.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/landing_page/UTAH-5.webm",
];

export default function Hero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="relative w-full h-screen bg-black">

      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          key={currentVideoIndex}
          src={bannerVideos[currentVideoIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-40">
        <h1
          className="text-white text-[28px] md:text-[35px] font-semibold mb-3"
          data-aos="fade-up"
        >
          Advancing Healthcare Through Innovation
        </h1>

        <p
          className="text-gray-300 text-sm md:text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Patented and intuitive closed arterial microsampling for the tiniest patients
        </p>
      </div>
    </section>
  );
}