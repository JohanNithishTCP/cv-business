"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/dimeda/360/dimeda_360.webm"
];


export default function FeatureOne() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-[#F9F9F9] py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-stretch gap-10">
        {/* Left Content */}
        <div data-aos="fade-up" className="flex flex-col justify-center h-full">
          <h2 className="text-xl md:text-2xl lg:text-2xl text-[#000000] font-semibold mb-2">
            Naso-pharyngo-laryngoscope
          </h2>

          <p
            data-aos="fade-up"
            className="text-base text-[#484848] mb-2 leading-relaxed text-justify">
            Bring your diagnostic skills to perfection!
            The Naso-Pharyngo-Laryngoscopes from DIMEDA impress with their
            brilliant resolution and compact, lightweight design. High-quality
            material properties, precise workmanship and advanced lighting
            technologies promise maximum reliability of the instruments. The
            endoscopes are supplied in a practical transport box to guarantee
            optimum protection of the devices, even during mobile use.
          </p>

          <p
            data-aos="fade-up"
            className="text-base text-[#484848] mb-4 leading-relaxed  text-justify">
            Take your work to the next level with
            the naso-pharyngo-laryngoscopes from DIMEDA. The easy handling and
            smooth design ensure controlled and patient-friendly access to the
            body region to be examined.
          </p>

          <button
            data-aos="fade-up"
            className="bg-[#EB8A20] cursor-pointer font-semibold text-white px-5 py-2  md:px-10 md:py-4 lg:px-10 lg:py-4 rounded w-fit hover:bg-[#F49D00] transition-colors duration-300 ">
            View product details
          </button>
        </div>

        {/* Right Image */}
        <div data-aos="fade-up" className="h-full">
          <video
            key={currentVideoIndex}
            src={bannerVideos[currentVideoIndex]}
            autoPlay
            muted
            loop
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
}
