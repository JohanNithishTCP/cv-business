"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/orl-vision/landing_page/orlvision_1.webm",
  "https://cdn.clinicalvisuals.com/medical/orl-vision/landing_page/orlvision_2.webm",
       
];


export default function Banner() {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };
  return (
    <section className="relative h-screen flex items-end justify-center text-white px-6 overflow-hidden">
      {/* BACKGROUND VIDEO */}
      <video
        key={currentVideoIndex}
        src={bannerVideos[currentVideoIndex]}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* OPTIONAL DARK OVERLAY (for readability) */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}

      {/* CONTENT */}
      <div
        className="relative z-10 max-w-4xl text-center mb-16"
        data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 tracking-wide">
          Precision Visualization for Confident Diagnosis
        </h2>

        <p className="text-sm md:text-xl text-gray-300 leading-relaxed">
          ORLVISION GMBH delivers advanced video endoscopy solutions that
          enhance diagnostic accuracy, improve doctor–patient communication
          through shared viewing, and support efficient, cost-effective clinical
          workflows, proudly made in Germany.
        </p>
      </div>
    </section>
  );
}
