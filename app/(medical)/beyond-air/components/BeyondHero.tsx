"use client";

import { useState } from "react";

const bannerVideos = [
"https://cdn.clinicalvisuals.com/medical/beyond-air/landing_page/beyond_air_1.webm",
"https://cdn.clinicalvisuals.com/medical/beyond-air/landing_page/beyond_air_2.webm"
];

export default function BeyondHero() {
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
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-20 max-w-380 mx-auto">
        <div className="">
        <h1
          className="text-white text-[28px] md:text-[35px] font-semibold mb-3"
          data-aos="fade-up"
        >
          Transforming Healthcare with Nitric Oxide Innovation
        </h1>
        <p
          className="text-gray-300 text-sm md:text-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Harnessing advanced nitric oxide technology, we deliver safe, efficient, and on-demand solutions that redefine respiratory care. From hospital to home, our innovations improve patient outcomes while setting new standards in sustainability and medical excellence.
        </p>
        </div>
      </div>
    </section>
  );
}