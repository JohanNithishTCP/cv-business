"use client";

import { useState } from "react";

const bannerVideos = [
"https://cdn.clinicalvisuals.com/medical/ceekwomen/landing_page/video1.webm",
"https://cdn.clinicalvisuals.com/medical/ceekwomen/landing_page/video2.webm",
"https://cdn.clinicalvisuals.com/medical/ceekwomen/landing_page/video3.webm",
];


export default function Banner() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        key={currentVideoIndex}
        src={bannerVideos[currentVideoIndex]}
        autoPlay
        muted
        onEnded={handleVideoEnd}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        {/* <source src="/ceek/video1.mp4" type="video/mp4" /> */}
      </video>

      {/* 🖤 Dark Overlay (important for text visibility) */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50" /> */}

      {/* 📄 Content */}
      <div className="relative z-10 flex items-end justify-center text-center h-full px-6 pb-16">
        <div data-aos="fade-up" className="max-w-7xl">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 leading-snug">
            Innovative Medical Solutions Designed for Comfort and Care
          </h1>

          <p className="text-white text-base md:text-xl leading-relaxed">
            We are transforming gynecological care with modern, patient-centered
            medical devices that prioritize comfort, efficiency, and clinical
            precision. Our solutions empower healthcare providers while
            enhancing every patient’s experience.
          </p>
        </div>
      </div>
    </section>
  );
}
