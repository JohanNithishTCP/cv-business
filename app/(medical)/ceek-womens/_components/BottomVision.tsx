"use client";

import Image from "next/image";
import { CornerUpRight, Sparkles } from "lucide-react";
import { useState } from "react";


const bannerVideos = [
"https://cdn.clinicalvisuals.com/medical/ceekwomen/short_clips/video2.webm",
"https://cdn.clinicalvisuals.com/medical/ceekwomen/short_clips/video3.webm"
];

export default function BottomVision() {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
    const handleVideoEnd = () => {
      setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
    };
  return (
    <section className="bg-[#6F6589] text-[#FFFFFF] py-20 px-6">
      <div className="container mx-auto grid xl:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative max-w-5xl mx-auto">
          <div
            data-aos="fade-up"
            className="absolute inset-0 -bottom-6 -left-6 w-[75%]"
            style={{
              clipPath: "polygon(100% 64%, 0% 25%, 0% 100%, 100% 100%)",
              background: "linear-gradient(to bottom, #948DA7, #ABA0C5)",
            }}
          />

          {/* VIDEO */}
          <div
            data-aos="fade-up"
            className="relative z-10 rounded-xl overflow-hidden">
            <video
              key={currentVideoIndex}
              src={bannerVideos[currentVideoIndex]}
              autoPlay
              muted
              onEnded={handleVideoEnd}
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* subtle background block */}
          <div className="absolute -bottom-5 left-5 w-full h-full bg-white/20 -z-10 rounded-xl"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-base text-[#FFFFFF] ">
            Meet Nella
          </p>

          <h2 className="text-2xl md:text-3xl  text-[#FFFFFF] font-semibold my-2">
            A Game-Changing Speculum
          </h2>

          <p className="text-[#FFFFFF] text-base leading-relaxed mb-4">
    Meet Nella, an innovative speculum that revolutionizes the way clinicians work while prioritizing patient comfort. Unlike traditional speculums, Nella stands out for its efficiency and thoughtful design. In fact, an impressive 99% of women prefer Nella, praising its quiet insertion, ultra-slim profile, and temperature-neutral, medical-grade materials that ensure a gentle experience. With Nella, both clinicians and patients can enjoy a more effective and resourceful approach to care.
          </p>

          {/* Points */}
          <div className="space-y-3 mb-3">
            {[
              "Designed to support smoother procedures, allowing clinicians to work with better control, visibility, and ease.",
              "Engineered to significantly reduce discomfort, making examinations less stressful and more tolerable.",
              "Clinically appreciated and widely favored due to its comfort-first design and improved experience.",
              // "Better overall exam experience",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className=" p-2 rounded-full flex items-center justify-center">
                  <Image
                    src="/ceek/flower.png" // your image path
                    alt="flower"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="flex cursor-pointer items-center gap-2 bg-[#FFFFFF] text-[#6F6685] px-6 py-2 rounded-full text-base font-bold  hover:scale-105 hover:opacity-90 transition">
            Know More About Us
            <CornerUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
