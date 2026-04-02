"use client";

import { useState } from "react";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/Utah_360.webm",
];


export default function TeamSection() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };



  return (
    <section className="bg-white pb-20">
      
      {/* TOP IMAGE */}
      <div
        data-aos="fade-in"
        className="w-full h-65 md:h-80 xl:h-96 bg-gray-300"
      >
        {/* Background image will be added here */}
        <img src={"/atmosmed/assets/teams_atmos.png"} alt="teams" className="w-full h-full object-cover" />
      </div>

      {/* OVERLAP CONTENT */}
      <div className="max-w-7xl mx-auto px-6 mt-8 xl:-mt-20 relative z-10">

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-center">

          {/* FLOATING CARD */}
          <div
            data-aos="zoom-in"
            className="w-full h-56 sm:h-72 xl:h-96 bg-gray-200 rounded-2xl shadow-lg overflow-hidden"
          >
                <video
                key={currentVideoIndex}
                src={videos[currentVideoIndex]}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                // loop
                playsInline
                onEnded={handleVideoEnd}
              >
                {/* <source src="https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm" type="video/webm" /> */}
              </video>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            <h2 className="text-xl sm:text-2xl xl:text-3xl font-semibold text-[#16679b] mb-4 xl:mt-14">
              Skilled professionals and managers
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              The ATMOS Group employs over 300 people worldwide.
              Internationally positioned, it has 15 subsidiaries and
              representative offices in India and Colombia as well as
              approximately 70 national agencies. Always keeping the demands
              and needs of users in mind, we develop application-oriented
              solutions that are safe and reliable. We supply manufacturers,
              distributors, hospitals, and doctors worldwide with medical
              suction systems as well as complete solutions for ENT,
              gynecology, and swallowing diagnostics.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
