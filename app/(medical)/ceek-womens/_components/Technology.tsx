"use client";

import { useState } from "react";

const bannerVideos = [
"https://cdn.clinicalvisuals.com/medical/ceekwomen/360/360.webm",
// "https://cdn.clinicalvisuals.com/medical/beyond-air/landing_page/beyond_air_2.webm"
];




export default function Technology() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };
  return (
    <section className="bg-[#FFFFFF] py-20 px-6 md:px-10 text-center">
      {/* Subtitle */}
      <p
        data-aos="fade-up"
        className="text-base font-medium text-[#26505E] mb-3">
        Technology & Features
      </p>

      {/* Title */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-semibold text-[#26505E] mb-4">
        Engineered for Better Clinical Outcomes
      </h2>

      {/* Description */}
      <p
        data-aos="fade-up"
        className="max-w-7xl mx-auto text-[#484848] text-sm md:text-base leading-relaxed mb-10">
        Our products integrate advanced materials, ergonomic design, and
        built-in features like improved illumination and enhanced visibility.
        These innovations ensure accurate procedures while reducing discomfort
        and procedural time. By combining innovation with user-focused design,
        our solutions not only improve procedural accuracy but also enhance
        patient comfort and reduce overall treatment time, creating a better
        experience for both patients and clinicians.
      </p>

      <div
        data-aos="fade-up"
        className="max-w-7xl mx-auto rounded-xl overflow-hidden">
        <div className="aspect-video">
          <video
            key={currentVideoIndex}
            src={bannerVideos[currentVideoIndex]}
            autoPlay
            muted
            loop
            onEnded={handleVideoEnd}
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
