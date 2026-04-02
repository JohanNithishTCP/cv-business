// components/Sustainability.tsx

"use client";

import { CheckCircle } from "lucide-react";
import { useState } from "react";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/Utah_360.webm",
];

export default function BeyondSustain() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };


  return (
    <section className="w-full py-20 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]" />
        {/* Add your bg image here */}
        <img src="/beyond-air/assets/beyond-bg.png" className="absolute inset-0 w-full h-full object-cover opacity-30" />
      </div>
      <div className="max-w-380 mx-auto">
        
        {/* TOP HEADER */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2
            className="text-2xl md:text-3xl font-semibold text-white mb-4"
            data-aos="fade-up"
          >
            Sustainability at Beyond Air
          </h2>

          <p
            className="text-white text-base leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At Beyond Air™, sustainability isn't an add-on—it's engineered into
            the LungFit® PH platform. Using patented Plasma Pulse Technology™,
            LungFit PH generates inhaled nitric oxide (iNO) directly from ambient
            air, eliminating reliance on traditional, environmentally unfriendly
            cylinder-based delivery.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div data-aos="fade-left">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-6">
              Sustainability in Action: Introducing Clean iNO Generation
            </h3>

            {/* Feature 1 */}
            <div className="flex items-start gap-3 mb-6">
              <CheckCircle className="mt-1 shrink-0" size={20} />
              <div>
                <p className="text-white font-medium text-base">
                  No Cylinders, No Chemicals
                </p>
                <p className="text-white text-base">
                  Eliminates heavy, high-pressure gas cylinders and chemical
                  cartridges; removing complex storage, handling, and transport
                  requirements.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 mb-8">
              <CheckCircle className="text-white mt-1 shrink-0" size={20} />
              <div>
                <p className="text-white font-medium text-base">
                  Minimal Energy Demand
                </p>
                <p className="text-white text-base">
                  Operates on minimal power from a standard electrical outlet,
                  supporting low-energy footprint across care settings.
                </p>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-white font-semibold text-[#00A4E4] text-base px-5 py-3 cursor-pointer hover:bg-[#f0f0f0] transition">
              Learn More About Us
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="relative w-full h-96 md:h-120 rounded-xl overflow-hidden"
            data-aos="fade-right"
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
              ></video>
          </div>

        </div>
      </div>
    </section>
  );
}