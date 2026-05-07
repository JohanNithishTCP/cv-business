"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { useState } from "react";

import "aos/dist/aos.css";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/beyond-air/short_clips/beyond_air_1.webm",
  ];

export default function BeyondInnovation() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section
      className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 text-white relative overflow-hidden"
    >
      {/* BACKGROUND IMAGE (you will replace) */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] aspect-video" />
        {/* Add your bg image here */}
        <img src="/beyond-air/assets/beyond-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      </div>

      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* LEFT MEDIA */}
        <div data-aos="fade-right">
          <div className="relative w-full h-56 sm:h-80 lg:h-130 rounded-2xl overflow-hidden">
            <video
              key={currentVideoIndex}
              src={videos[currentVideoIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              onEnded={handleVideoEnd}
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className="max-w-FULL">
          
          {/* LABEL */}
          <p className="text-lg text-white/80 mb-2">
            Innovation, Technology & Insights
          </p>

          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
            Innovating Endoscopy Solutions For ENT, Hearing Care, And Diagnostics.
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-4 text-white/80 text-base leading-relaxed">
            Discover our advanced technology, explore our active development pipeline, and stay updated with the latest news all in one place. Designed to give you quick access to what matters most.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-5">
            
            {/* ITEM */}
            <div className="flex items-start gap-3">
                <CircleCheck className="text-[#00A4E4] mt-1 fill-white shrink-0" size={25} />
              {/* <CheckCircle className="text-white mt-1" size={20} /> */}
              <div>
                <p className="font-medium text-lg">LungFit® Technology</p>
                <p className="text-base text-white/80">
                  LungFit products use patented Ionizer™ technology that generates unlimited, on-demand nitric oxide using room air. No cylinders and no hassle.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
             <CircleCheck className="text-[#00A4E4] mt-1 fill-white shrink-0" size={25} />

              <div>
                <p className="font-medium text-lg">Revolutionizing Nitric Oxide Therapy</p>
                <p className="text-base text-white/80">
                  Unlocking access to more treatment options from hospital to home.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
                              <CircleCheck className="text-[#00A4E4] mt-1 fill-white shrink-0" size={25} />

              <div>
                <p className="font-medium text-lg">Latest News</p>
                <p className="text-base text-white/80">
                  Beyond Air, Inc. Announces Resignation of Steve Lisi, CEO, and Appointment of Robert Goodman, Chief Commercial Officer, as CEO
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <button className="mt-6 cursor-pointer flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto bg-white text-[#333333] px-5 py-3 rounded-full text-base font-medium hover:bg-gray-100 transition">
            Learn More Innovations
            <span className="bg-[#00A4E4] text-white rounded-full p-1">
              <ArrowRight size={16} />
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}