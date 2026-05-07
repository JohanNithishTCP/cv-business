"use client";

import { ArrowLeft, ArrowRight, Star, User } from "lucide-react";
import Image from "next/image";

export default function SternTestimonial() {

  return (
    <section className="relative bg-[#f5f6f7] py-24 overflow-hidden">



      {/* BACKGROUND PATTERN */}
      <div
        className="absolute inset-0 bg-cover bg-bottom-right bg-no-repeat"
        style={{ backgroundImage: "url('/stern-med/stern-testimonial-bg.png')" }}
      />
      {/* OVERLAY */}
      {/* <div className="absolute inset-0 bg-[rgba(30,111,182,0.75)]" /> */}

      <div className="relative max-w-380 mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT IMAGE */}
          <div data-aos="fade-right">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              {/* Placeholder image */}
              <div className="w-full h-[260px] sm:h-[340px] md:h-[420px] bg-gray-300">
                <Image src="/stern-med/stern-testimonial.png" alt="Testimonial" width={400} height={420} className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left">

            {/* LABEL */}
            <p className="text-[#1E6FB6] font-semibold text-base mb-4">
              Testimonials
            </p>

            {/* TITLE */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 leading-tight mb-5">
              Trusted by medical professionals worldwide for reliable performance
            </h2>

            {/* STARS */}
            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className=" text-lg"
                >
                  <Star size={20} className="fill-[#1E6FB6]"/>
                </span>
              ))}
            </div>

            {/* TESTIMONIAL */}
            <div className="space-y-5 text-gray-500 leading-relaxed text-sm md:text-base mb-8">
              <p>
                “We have purchased the SONOS 12 Ultrasound scanner from SternMed
                in September 2021 and have used it since then to our fullest
                satisfaction.”
              </p>

              <p>
                We are happy to recommend the product and the services.”
              </p>
            </div>

            {/* FOOTER */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-6">

              {/* AUTHOR */}
              <div
                data-aos="fade-up"
                className="flex items-center gap-4 min-w-0"
              >
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#1E6FB6] flex items-center justify-center text-white text-xl">
                  <User size={20}/>
                </div>

                {/* Info */}
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Dr. med. M. Hartmann,
                  </h4>

                  <p className="text-sm text-gray-500">
                    Specialist in General Medicine, Mannheim
                  </p>
                </div>
              </div>

              {/* NAVIGATION */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex items-center gap-3"
              >
                <button className=" cursor-pointer w-12 h-12 bg-[#1E6FB6] hover:bg-[#1E6FB6]/80 transition rounded-md flex items-center justify-center text-white text-xl">
                  <ArrowLeft/>
                </button>

                <button className="cursor-pointer w-12 h-12 bg-[#1E6FB6] hover:bg-[#1E6FB6]/80 transition rounded-md flex items-center justify-center text-white text-xl">
                  <ArrowRight/>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}