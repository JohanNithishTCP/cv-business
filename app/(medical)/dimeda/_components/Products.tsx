"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Products() {

  const [mounted, setMounted] = useState(false)
if (!mounted) return null
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSlide = (index: number) => {
    if (index === startIndex) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setStartIndex(index);
      setIsTransitioning(false);
    }, 200);
  };
  const products = [
    {
      img: "/dimeda/dental.png",
      title: "Dental instruments",
      desc: "Broad range for almost all surgical disciplines – reliable, durable and proven in the OR.",
    },
    {
      img: "/dimeda/endoscopy.png",
      title: "Endoscopy",
      desc: "Modern endoscopy systems for precise diagnostics and interventional procedures – reliable in daily use.",
    },
    {
      img: "/dimeda/cmf.png",
      title: "CMF Systems",
      desc: "Reliable solutions for oral and maxillofacial surgery.",
    },
    {
      img: "/dimeda/sterilization.png",
      title: "Sterilization container",
      desc: "Safe and efficient solutions for instrument reprocessing – optimal protection, validated processes and long-lasting quality.",
    },
    {
      img: "/dimeda/microsurgery.png",
      title: "Microsurgery",
      desc: "High-precision instruments for the finest structures – when every detail matters.",
    },
    {
      img: "/dimeda/vascular.png",
      title: "Vascular and thoracic surgery",
      desc: "From supercut scissors to rib spreaders – a portfolio that combines performance and precision.",
    },
  ];

  return (
    <section className="bg-[#EB8A20] py-16 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-[#FFFFFF] font-semibold">
              Solutions for every surgical discipline
            </h2>
            <p className="text-base mt-2 text-[#FFFFFF] max-w-2xl">
              Our product portfolio comprises more than 23,000 different
              standard instruments covering the entire field of human, dental
              and veterinary medicine.
            </p>
          </div>

          <button className="cursor-pointer mt-4 lg:mt-0 bg-white font-semibold text-[#EB8A20] px-5 py-3 lg:px-10 lg:py-6 rounded shadow">
            View All Products
          </button>
        </div>

        {/* Cards */}
        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
          {products.slice(startIndex, startIndex + 3).map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden text-gray-800">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-85 object-cover object-top"
              />

              <div className="p-4">
                <h3 className="font-semibold text-xl lg:text-2xl text-[#000000 ] mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-[#666666] mb-3">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider dots (optional UI) */}

        <div className="flex justify-center mt-10 gap-2">
          <button
            type="button"
            onClick={() => handleSlide(0)}
            className={`w-15 h-1.5 rounded cursor-pointer ${
              startIndex === 0 ? "bg-gray-200" : "bg-white/50"
            }`}
          ></button>

          <button
            type="button"
            onClick={() => handleSlide(3)}
            className={`w-15 h-1.5 rounded cursor-pointer ${
              startIndex === 3 ? "bg-gray-200" : "bg-white/50"
            }`}
          ></button>
        </div>
      </div>
    </section>
  );
}
