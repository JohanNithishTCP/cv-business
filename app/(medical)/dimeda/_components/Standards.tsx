"use client";

import Image from "next/image";
import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/dimeda/shortclips/dimeda_3.webm"
];



export default function Standards() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };
  const items = [
    {
      img: "/dimeda/star.png",
      title: "Quality that builds trust",
      desc: "All DIMEDA products meet the basic requirements of EC Directive 93/42/EEC and are therefore marked with the CE mark.",
    },
    {
      img: "/dimeda/manufacturing.png",
      title: "Manufacturing with experience",
      desc: "All instruments and devices in our range are manufactured by trained and experienced specialists with skilled craftsmanship using state-of-the-art machines and equipment.",
    },
    {
      img: "/dimeda/globe.png",
      title: "Reliable worldwide",
      desc: "Doctors around the world have been using our surgical instruments for decades. There is hardly a country where we are not represented.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div data-aos="fade-up" className="mb-1">
        <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold text-[#0D0D0D] mb-8 text-center">
          What Dimeda stands for
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Left - Video Placeholder */}
        <div
          data-aos="fade-up"
          className="md:w-full h-full rounded-xl overflow-hidden">
          <video
            key={currentVideoIndex}
            src={bannerVideos[currentVideoIndex]}
            autoPlay
            loop
            muted
            playsInline
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div data-aos="fade-up">
          <p className="text-base text-[#484848] mb-6">
            We provide cutting-edge medical technology that sets the standard
            for excellence in healthcare.
          </p>

          {/* Points */}
          <div className="space-y-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 border border-[#DDDDDD]  p-4 rounded-lg shadow-sm items-center">
                {/* Image Icon */}
                <div className="w-13 h-13 flex items-center justify-center ">
                  {/* Rotated background */}
                  <div className="w-13 h-13 bg-[#EB8A20] rounded-sm rotate-45 flex items-center justify-center">
                    {/* Rotate image back */}
                    <div className="-rotate-45  text-white">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={18}
                        height={18}
                        className="object-contain brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div>
                  <h3 className="font-semibold text-[#212121] text-base lg:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#212121] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
