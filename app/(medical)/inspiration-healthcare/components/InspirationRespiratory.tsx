"use client"

import { useState } from "react"

import { ArrowRight } from "lucide-react"

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/inspiration-healthcare/short_clips/video1.webm",
  "https://cdn.clinicalvisuals.com/medical/inspiration-healthcare/short_clips/video2.webm",
  "https://cdn.clinicalvisuals.com/medical/inspiration-healthcare/short_clips/video3.webm",
];




export default function InspirationRespiratory() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };

  return (
    <section className="bg-[#7B868C] py-16 md:py-20 px-6 md:px-16">
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-stretch">

        {/* LEFT VIDEO */}
        <div data-aos="fade-right" className="w-full h-full min-w-0">
          <div className="rounded-xl overflow-hidden shadow-lg bg-gray-300 h-56 sm:h-72 lg:h-full">
            
            {/* VIDEO (Replace later) */}
            
            <video
              key={currentVideoIndex}
                src={bannerVideos[currentVideoIndex]}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnd}
              autoPlay
              muted
              playsInline
            />
 

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className="text-white min-w-0">

          {/* LABEL */}
          <p className="text-base text-gray-200 mb-3 tracking-wide">
            Our Expertise in Respiratory Care
          </p>

          {/* BLOCK 1 */}
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
            Respiratory care, starting from the first breaths of life
          </h2>

          <p className="text-base text-gray-200 leading-relaxed mb-6 ">
            We have developed and manufactured respiratory equipment since 1977.
            Nurturing close relationships with leading universities, hospitals and
            industry specialists to understand the challenges facing clinicians when
            caring for the most critical babies.
          </p>

          <p className="text-base text-gray-200 leading-relaxed mb-6">
            Our solutions are designed for flexibility and seamless integration into clinical environments. Our air/oxygen blenders can be configured for mounting on either poles or rails and are compatible with a variety of flow meters, ensuring adaptability across different care settings.
          </p>

          <p className="text-base text-gray-200 leading-relaxed mb-6">
            This versatility allows our systems to work effortlessly alongside complementary solutions such as LifeStart™, which features an accessory pole and standard medirails for easy attachment—supporting efficient and effective patient care.
          </p>

          {/* CTA */}
          <button className="flex cursor-pointer items-center gap-2 bg-white text-gray-800 px-5 py-3 rounded-full text-sm hover:scale-105 transition min-h-[44px]">
            Explore Our Expertise
            <ArrowRight size={16} />
          </button>

        </div>
      </div>
    </section>
  )
}