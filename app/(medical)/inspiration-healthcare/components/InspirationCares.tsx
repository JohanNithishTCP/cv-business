"use client";


import { CornerUpRight } from "lucide-react";
import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/inspiration-healthcare/360/360.webm",
  "https://cdn.clinicalvisuals.com/medical/inspiration-healthcare/360/360.webm",
];


export default function InspirationCares() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };


  return (
    <section className="bg-[#7B868C] py-24 px-6 lg:px-20">
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="text-white">
          <p className="text-base opacity-80 mb-4 font-medium">Inosys</p>

          <h1 className="text-2xl lg:text-3xl font-semibold leading-snug mb-3">
            Precision Nitric Oxide Delivery for
            <br />
            Neonatal Respiratory Care
          </h1>

          <p className="text-base opacity-80 leading-relaxed mb-3 max-w-3xl">
            The Inosys Nitric Oxide (NO) delivery and monitoring system is
            specifically designed for use with constant flow type (infant)
            ventilators.
          </p>

          <p className="text-base opacity-80 leading-relaxed mb-3 max-w-3xl">
            Used in conjunction with ventilation to treat infant respiratory
            diseases such as Persistent Pulmonary Hypertension (PPHN), The
            Inosys maintains a set constant flow into the patient ventilator
            circuit, to ensure a constant therapeutic dose of Nitric Oxide.
          </p>

          <p className="text-base opacity-80 leading-relaxed mb-3 max-w-3xl">
            Built in safety monitoring systems ensure the prescribed dose is
            constantly monitored and maintained.
          </p>

          <div className="border-t border-white/30 my-3 w-full"></div>

          <p className="text-base opacity-70 mb-3 max-w-3xl">
            Please note the SLE Inosys is not available in all countries. Please
            check with your local SLE Distributor to find out if this product is
            available for purchase in your country.
          </p>

          <button className="bg-white cursor-pointer text-gray-700 text-base px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
            Learn More Inosys
            <CornerUpRight size={16}/>
          </button>
        </div>

        {/* RIGHT VIDEO CONTAINER */}
        <div data-aos="fade-left" className="relative">
          <div className="rounded-2xl overflow-hidden bg-gray-300 h-[420px] lg:h-[460px]">
            {/* Replace with video */}
            <video 
              key={currentVideoIndex}
              src={bannerVideos[currentVideoIndex]} 
              className="w-full h-full object-cover" 
              autoPlay 
              muted 
              playsInline
              onEnded={handleVideoEnd}/>
          </div>
        </div>
      </div>
    </section>
  );
}
