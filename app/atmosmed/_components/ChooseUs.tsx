"use client";

import { useState } from "react";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/Utah_360.webm",
];

export default function WhyChooseUs() {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const features = [
    {
      title: "Innovative Medical Technology",
      desc: "Advanced medical devices designed to improve clinical precision and patient care.",
      icon: "/atmosmed/assets/brain.png"
    },
    {
      title: "Complete Medical Solutions",
      desc: "End-to-end services from procurement and installation to modernization and maintenance.",
      icon: "/atmosmed//assets/think.png"
    },
    {
      title: "Complete Medical Supply",
      desc: "Lorem ipsum or lipsum as it is sometimes known",
      icon: "/atmosmed/assets/care.png"
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            
            {/* Label */}
            <p
              data-aos="fade-up"
              className="text-lg text-black mb-2 font-medium"
            >
              Why choose us
            </p>

            {/* Title */}
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl md:text-3xl font-semibold text-[#16679b] mb-4"
            >
              We Think We Can Preserve More Lives
            </h2>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-600 text-base leading-relaxed mb-8"
            >
              We as ATMOS are always on the move and have been since our start in a pharmacy in Berlin. As a major manufacturer of medical solutions from the Black Forest in Germany, we value our roots.
            </p>

            {/* FEATURES */}
            <div className="space-y-6">
              {features.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                  className="flex items-start gap-3"
                >
                  
                  {/* Circle Icon */}
                  <div className="flex justify-center items-center w-12 h-12 rounded-full  shrink-0 shadow-gray-300 shadow-2xl border-b-2 border-gray-300">
                    <img src={item.icon} alt="icon" className="w-8 h-8 object-cover" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-[#16679b] font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MEDIA BOX */}
          <div
            data-aos="fade-left"
            className="w-full h-75 md:h-full bg-gray-200 rounded-xl overflow-hidden"
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

        </div>
      </div>
    </section>
  );
}
