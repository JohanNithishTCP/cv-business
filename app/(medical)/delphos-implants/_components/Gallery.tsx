import React from "react";


export default function Gallery() {
  // Array of image paths - ensure these are in your /public folder
  const images = [
    { src: "/delphos-implants/images/event-1.png", alt: "Nantes Event" },
    { src: "/delphos-implants/images/event-2.png", alt: "Hospitalar Event" },
    { src: "/delphos-implants/images/event-3.png", alt: "Basel Event" },
    { src: "/delphos-implants/images/event-4.png", alt: "Miami Event" },
  ];

  return (
    <section className="w-full container mx-auto px-4 lg:px-0 py-16 ">
      {/* Centered Heading */}
      <div className="w-full text-center mb-10">
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-[28px] font-medium text-[#000000] tracking-tight">
          Advancing Health Through Purposeful Innovation
        </h2>
      </div>

      {/* 4-Column Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-gray-50">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
