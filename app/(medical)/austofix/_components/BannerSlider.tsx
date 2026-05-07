"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    title: "WELCOME TO AUSTOFIX",
    desc: "A leading manufacturer and designer of orthopaedic trauma medical devices with 25 years experience.",
    image: "/banner1.jpg",
  },
  {
    title: "ADVANCED MEDICAL SOLUTIONS",
    desc: "Delivering innovation and precision in every product.",
    image: "/banner2.jpg",
  },
  {
    title: "QUALITY YOU CAN TRUST",
    desc: "Engineered with care for better patient outcomes.",
    image: "/banner3.jpg",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] mt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white pb-20 px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          {slides[current].title}
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-gray-300">
          {slides[current].desc}
        </p>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === index ? "bg-white" : "bg-gray-500"
              }`}></span>
          ))}
        </div>
      </div>
    </section>
  );
}
