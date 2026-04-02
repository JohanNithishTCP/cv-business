"use client";

import Image from "next/image";

export default function OrthoSolutions() {
  const products = [
    { name: "Nails", img: "/austofix/img.png" },
    { name: "Plates", img: "/austofix/img (1).png" },
    { name: "Screws", img: "/austofix/img (2).png" },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small Label */}
        <p
          data-aos="fade-up"
          className="flex justify-center items-center gap-2 text-[#6CA033] text-sm mb-3">
          <span className="w-3 h-3  rounded-full">
            <Image
              src="/austofix/screw-1.png"
              alt="idea"
              width={12}
              height={12}
              className="w-full h-full object-cover"
            />
          </span>
          About Our Orthopaedic Products
        </p>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Orthopaedic Solutions for Strength and Precision
        </h2>

        {/* Description */}
        <p
          data-aos="fade-up"
          className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed mb-12">
          Austofix develops innovative orthopaedic devices designed for
          simplicity, stability, and strength. Backed by advanced research,
          precision manufacturing, and strict quality standards, our products
          deliver reliable performance and improved clinical outcomes for
          surgeons and patients worldwide.
        </p>

        {/* Cards */}
        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={500}
                  height={224}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="py-4">
                <p className="text-gray-800 font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
