"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/dimeda/landing_page/dimeda_1.webm",
  "https://cdn.clinicalvisuals.com/medical/dimeda/landing_page/dimeda_2.webm",
];



export default function BannerSlider() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end justify-center text-white">
      {/* 🎥 Background Video */}
      <video
        key={currentVideoIndex}
        src={bannerVideos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* 🔲 Dark Overlay (important for readability) */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* 📝 Content */}
      <div className="relative max-w-4xl text-center mb-16 px-6">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-4 tracking-wide">
          MEDICAL TECHNOLOGY AT THE HIGHEST LEVEL
        </h1>

        <p className="text-sm md:text-xl lg:text-xl text-gray-300 leading-relaxed">
          With over 23,000 high-quality instruments, we offer a comprehensive
          portfolio for modern human, dental and veterinary medicine. Developed
          to the highest quality standards – for precision, safety and
          confidence in the OR.
        </p>
      </div>
    </section>
  );
}
