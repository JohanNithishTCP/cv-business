"use client";

import "aos/dist/aos.css";
import { CornerUpRight } from "lucide-react";
import { useState } from "react";

const bannerVideos = [
  "https://cdn.clinicalvisuals.com/medical/inspiration-healthcare/short_clips/video2.webm",
  "https://cdn.clinicalvisuals.com/medical/inspiration-healthcare/short_clips/video3.webm",
];


export default function InspirationValues() {

      const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % bannerVideos.length);
  };


  return (
    <section className="relative bg-[#7f8b91] py-24 px-6 lg:px-20">

      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
        {/* LEFT VIDEO */}
        <div className="h-full" data-aos="fade-right">
          <div className="rounded-2xl overflow-hidden bg-gray-300 h-full min-h-[300px] lg:min-h-[520px]">
            {/* Replace with video */}
            <video
                key={currentVideoIndex}
                onEnded={handleVideoEnd}
              src={bannerVideos[currentVideoIndex]} 
              className="w-full h-full object-cover" 
              autoPlay muted playsInline />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white" data-aos="fade-left">
          <p className="text-base opacity-80 mb-3 font-medium">Our Values</p>

          <h2 className="text-2xl lg:text-3xl font-semibold leading-snug mb-4">
            Guided by Values That Drive Impact
          </h2>

          <p className="text-base opacity-80 leading-relaxed mb-6">
            Our core values shape everything we do—driving innovation, advancing
            research, and keeping patients at the heart of every solution. We
            are committed to delivering outcome-focused, pioneering healthcare
            that makes a meaningful difference.
          </p>

          {/* VALUE LIST */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            {values.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/10 rounded-xl p-4">
                <div className="w-10 h-10 rounded-full bg-white flex-shrink-0 flex items-center justify-center text-sm">
                  <img src={item.icon} alt={item.title} className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-semibold text-base">{item.title}</p>
                  <p className="text-sm opacity-80 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="cursor-pointer bg-white text-gray-700 text-base px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
            Discover Our Values
            <CornerUpRight size={14}/>
          </button>
        </div>
      </div>

      {/* RIGHT FLOATING IMAGE */}
      <div
        className="hidden absolute bottom-35 right-50 xl:w-[200px] xl:h-[200px] 2xl:w-[260px] 2xl:h-[260px] rounded-2xl overflow-hidden bg-gray-300 shadow-lg"
        data-aos="zoom-in"
      >
        <img
          src="/inspiration-healthcare/assets/inspiration-value.jpg"
          alt="Floating Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

const values = [
  {
    icon: "/inspiration-healthcare/assets/inspiration-value1.png",
    title: "Outcome Changing",
    desc: "Focused on delivering measurable impact in patient care",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value2.png",
    title: "Research Driven",
    desc: "Built on continuous learning and scientific advancement",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value3.png",
    title: "Patient Focused",
    desc: "Centered on improving patient experience and outcomes",
  },
  {
    icon: "/inspiration-healthcare/assets/inspiration-value4.png",
    title: "Pioneering",
    desc: "Committed to innovation and forward-thinking solutions",
  },
];
