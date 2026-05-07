"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/vapotherm/landing_page/Vapotherm_1.webm",
  "https://cdn.clinicalvisuals.com/medical/vapotherm/landing_page/Vapotherm_2.webm",
  "https://cdn.clinicalvisuals.com/medical/vapotherm/landing_page/Vapotherm_3.webm",

];


export default function VapoHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image (replace with video later) */}

      {/* Future Video Support */}

      <video
        key={currentVideoIndex}
        src={bannerVideos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
      />


      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <div className="relative z-10 flex max-w-5xl  mx-auto flex-col items-center justify-end h-full text-center px-4 pb-24 md:pb-20">
        <h1
          className="text-white text-[28px] md:text-[35px] font-semibold mb-3"
          data-aos="fade-up"
        >
          Innovating the non-invasive respiratory support category for more than 20 years.
        </h1>

        <p
          className="text-gray-300 text-sm md:text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Vapotherm high velocity therapy is more than oxygen therapy.  It is a fast and safe way to provide treatment for undifferentiated respiratory distress with one single tool.
        </p>
      </div>
    </section>
  );
}