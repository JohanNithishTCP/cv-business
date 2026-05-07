"use client";

import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/vapotherm/short_clips/Vapotherm_1.webm",
  "https://cdn.clinicalvisuals.com/medical/vapotherm/short_clips/Vapotherm_2.webm",
];


export default function VapoTheraphy() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-[#0C66AF] text-white py-12 md:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-380 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        
        {/* LEFT COLUMN */}
        <div className="space-y-8 min-w-0">

          {/* IMAGE CARD */}
          <div data-aos="fade-right" className="relative">
            <img
              src="/vapotherm/assets/vapotherm-theraphy.png"
              alt="therapy"
              className="w-full h-auto shadow-lg"
            />
          </div>

          {/* TEXT BLOCK */}
          <div data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Un-Mask Respiratory Support
            </h3>

            <p className="text-base opacity-90 mb-4 leading-relaxed">
              About a third of patients needing traditional mask-based respiratory
              support are mask-intolerant, risking failed treatment, cost of care,
              and care escalation.
            </p>

            <p className="text-base opacity-90 mb-4 leading-relaxed">
              Vapotherm high velocity therapy helps you rethink the traditional
              approach to respiratory support with patient comfort in mind.
            </p>

            <p className="text-base opacity-90 leading-relaxed">
              Patients can eat, drink, talk, and take oral medications while
              receiving respiratory and oxygenation support.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8 min-w-0">

          {/* HEADING + TEXT */}
          <div data-aos="fade-left">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              Traditional NiPPV vs. High Velocity Therapy... <br />
              Feel the Difference.
            </h2>

            <p className="text-base opacity-90 leading-relaxed">
              The rapid flushing out of the upper airway dead space is how
              Vapotherm high velocity therapy facilitates alveolar ventilation.
              In order to achieve ventilation, NiPPV most greatly affects the
              tidal volume aspect of the above equation. The machine ensures
              ventilation by using positive pressure to deliver target tidal
              volume. Because there is a risk of over-pressurization, clinicians
              generally start low and adjust up for effect to stabilize a patient.
              <br /><br />
              However, it is also possible to achieve alveolar ventilation by
              affecting the other parameter in the equation: dead space.
              <br /><br />
              Unlike NiPPV, high velocity therapy is an open system de-escalation
              therapy – it is safe to turn on high and stabilize the patient fast.
              The clinician can then titrate down upon patient response.
            </p>
          </div>

          {/* MEDIA BOX */}
          <div
            data-aos="zoom-in"
            className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 rounded-xl overflow-hidden"
          >
            {/* Future Video */}

            <video
              key={currentVideoIndex}
              src={bannerVideos[currentVideoIndex]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
          />
    
          </div>

        </div>
      </div>
    </section>
  );
}