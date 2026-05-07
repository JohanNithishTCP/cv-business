"use client";
import React, { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/medStorm/short_clips/medstrom-aria_flex_mattress_1.webm",
  "https://cdn.clinicalvisuals.com/medical/medStorm/short_clips/medstrom-aria_flex_mattress_2.webm",
  "https://cdn.clinicalvisuals.com/medical/medStorm/short_clips/medstrom-aria_flex_mattress_3.webm",
];

export default function History() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % bannerVideos.length);
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="history">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="flex flex-col" data-aos="fade-right">
            <h4 className="text-[#2A317A] font-bold text-md mb-3">Our History</h4>
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#484848] leading-[1.15] mb-6">
              Delivering Smarter Patient Care Through{" "}
              <span className="bg-gradient-to-r from-[#47C1EF] to-[#2A317A] bg-clip-text text-transparent">Clinical Expertise</span>
            </h2>
            <div className="space-y-4 text-justify text-[#484848] leading-relaxed">
              <p>
                The Medstrom ethos is simple: right patient, right product, right time. This ethos drives our product offering, but also enables us to educate and lead the way with clinical solutions that are pertinent in todays healthcare arena. Led by clinicians, for clinicians, we continuously update our knowledge to help you utilise our products effectively.
              </p>
              <p>
                By assuming complete control over the bed and mattress managed service, Medstrom assists in reducing the challenges facing healthcare professionals, allowing for improved patient and customer outcomes.
              </p>
              <p>
                Working alongside multiple manufacturers, Medstrom is uniquely able to provide clinical choice from a range of high-quality beds, mattresses and specialist products, accompanied by a dedicated technical support team, ensuring customer confidence and satisfaction.
              </p>
            </div>
          </div>

          {/* Video Block Placeholder */}
          <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#F2F4F7] relative shadow-lg" data-aos="fade-left" data-aos-delay="200">
            {/* Note: Video pulled directly from Hero banner WebM list */}
            {/* <video
              src="https://cdn.clinicalvisuals.com/medical/medStorm/short_clips/medstrom-aria_flex_mattress_1.webm"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            /> */}
            <video
              key={currentVideoIndex}
              src={bannerVideos[currentVideoIndex]}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </div>

        </div>
      </div>
    </section>
  );
}
