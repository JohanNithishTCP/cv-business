"use client";

import Image from "next/image";

export default function Partners() {
  const partners = [
    "/austofix/partner1.png",
    "/austofix/partner2.png",
    "/austofix/partner3.png",
    "/austofix/partner4.png",
    "/austofix/partner5.png",
    "/austofix/partner6.png",
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
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
              className="w-full h-full  object-contain p-px"
            />
          </span>
          Our Partners
        </p>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12">
          Become another one of our successful collaborative partners
        </h2>

        {/* Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl h-32 flex items-center justify-center shadow-sm hover:shadow-md transition">
              <Image
                src={logo}
                alt={`partner-${index}`}
                width={120}
                height={48}
                className="object-contain h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
