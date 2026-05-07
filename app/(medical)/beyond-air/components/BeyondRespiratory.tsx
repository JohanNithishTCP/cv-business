"use client";

import { useState } from "react";
import "aos/dist/aos.css";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/beyond-air/360/beyond_air_360.webm",
];

export default function BeyondRespiratory() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-380 mx-auto text-center">

        {/* LABEL */}
        <p
          data-aos="fade-up"
          className="text-green-600 text-lg font-medium"
        >
          Respiratory Solutions
        </p>

        {/* HEADING */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-2xl lg:text-3xl font-semibold text-gray-900"
        >
          Revolutionizing Lung Treatment with Nitric Oxide
        </h2>

        {/* DESCRIPTION */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-gray-500 text-base max-w-5xl mx-auto leading-relaxed"
        >
          Our LungFit platform delivers precise nitric oxide therapy for pulmonary conditions such as neonatal respiratory failure, pneumonia, and lung infections. These solutions are designed for hospital and at-home care, improving treatment flexibility and effectiveness.
        </p>

        {/* VIDEO SECTION */}
        <div className="mt-10 lg:my-18 relative flex justify-center overflow-hidden sm:overflow-visible pb-10 md:pb-0">
          {/* BLUE BACKGROUND BLOCK — hidden on mobile to avoid overflow */}
          <div className="hidden lg:block absolute w-[85%] h-[80%] bg-[#00A4E4] right-10 -bottom-10 rounded-lg translate-x-6 translate-y-6"></div>

          {/* VIDEO CARD */}
          <div
            data-aos="zoom-in"
            className="relative z-10 w-full max-w-340 rounded-xl overflow-hidden shadow-md bg-white"
          >
            <video
              key={currentVideoIndex}
              src={videos[currentVideoIndex]}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              onEnded={handleVideoEnd}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
