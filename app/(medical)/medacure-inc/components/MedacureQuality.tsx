"use client";

import "aos/dist/aos.css";

export default function MedacureQuality() {

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-380 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div data-aos="fade-right" className="max-w-lg">
          
          {/* Label */}
          <p className="text-[#2E2662] font-medium mb-3">
            About MedaCure Inc.
          </p>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Quality Control & Warranty
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-7.5 mb-6">
            We deeply value the level of care you extend to your residents,
            which is why we prioritize quality assurance and quality control
            in every stage of our product development. While we sincerely hope
            you never need to utilize our warranty service, rest assured that
            if you do, we are committed to handling your request promptly and
            professionally...
          </p>

          {/* CTA */}
          <button
            data-aos="zoom-in"
            className="cursor-pointer border-2 font-semibold border-[#2E2662] text-[#2E2662] px-6 py-3 rounded-full hover:bg-[#2E2662] hover:text-white transition"
          >
            Read More
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div data-aos="fade-left" className="w-full">
          <div className="w-full h-[320px] md:h-[360px] bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center text-gray-500">
            {/* Replace with actual image */}
            <img
                src="/medacure/assets/medacure-quality.png"
                alt="medacure-quality"
                className="w-full h-full object-cover"
            />
          </div>

          
        </div>
      </div>
    </section>
  );
}