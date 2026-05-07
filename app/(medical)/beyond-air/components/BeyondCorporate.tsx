"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

const videos = [
"https://cdn.clinicalvisuals.com/medical/beyond-air/short_clips/beyond_air_3.webm"
];

export default function BeyondCorporate() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="max-w-380 mx-auto px-6 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div data-aos="fade-up" className="max-w-xl">

          {/* SMALL LABEL */}
          <p className="text-green-600 text-lg font-medium">
            Corporate Overview
          </p>

          {/* TITLE */}
          <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-gray-900">
            Explore Our Corporate Presentation
          </h2>

          {/* DIVIDER */}
          <div className="mt-4 h-px w-20 bg-gray-300" />

          {/* DESCRIPTION */}
          <p className="mt-5 text-gray-500 text-base leading-relaxed">
            A paradigm shift for nitric oxide therapy that's revolutionizing the industry.
          </p>

          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            *The inventors of the LungFit Systems are also listed as inventors on the patents for the following nitric oxide delivery systems: INOvent, INOmax DSIR, INOmax DSIR Plus, INOmax DSIR Plus MRI.
          </p>

          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            Caution: LungFit® PRO and LungFit® GO are investigational devices, limited by federal (or United States) law to investigational use.
          </p>

          {/* LINK */}
          <p className="mt-5 text-gray-900 text-base font-medium cursor-pointer">
            View Our Corporate Presentation
          </p>

          {/* BUTTON */}
          <button className="mt-6 flex items-center gap-4 bg-[#00A4E4] text-white px-6 py-3 rounded-full shadow-sm hover:bg-[#0093cc] transition">

            <span className="text-base font-medium">Download</span>

            <span className=" cursor-pointer flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#00A4E4]">
              <ArrowRight size={16} />
            </span>

          </button>
        </div>

        {/* RIGHT VIDEO */}
        <div
          data-aos="zoom-in"
          className="relative w-full h-80 md:h-95 rounded-xl overflow-hidden"
        >
          <video
            key={currentVideoIndex}
            src={videos[currentVideoIndex]}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onEnded={handleVideoEnd}
          />
        </div>

      </div>
    </section>
  );
}
