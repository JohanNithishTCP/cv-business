"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SternAbout() {

  return (
    <section className="bg-[#f5f6f7] py-20 overflow-hidden">
      <div className="max-w-380 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-6">
              Together, we make reliable healthcare accessible in your community
            </h2>

            <p className="text-base text-gray-500 leading-[1.9] mb-4">
              SternMed GmbH is a medical device manufacturer and solution provider
              for healthcare projects, with head office in Baden-Württemberg. The
              company was established in 2011, with the idea of manufacturing
              affordable and durable medical devices with German quality standards
              to enhance healthcare globally.
            </p>

            <p className="text-base text-gray-500 leading-[1.9] mb-8">
              We understand that executing a healthcare project and selecting
              appropriate medical devices is a complicated procedure; it requires
              a transparent process based on available resources and recognition
              of your infrastructure to accommodate current projects and future
              developments without compromising patient care.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-[#1E6FB6] text-white text-sm px-5 py-3 rounded-md hover:bg-[#1E6FB6]/90 cursor-pointer transition font-bold">
                Learn More
                <span>
                    <ArrowRight/>
                </span>
              </button>

              <button className="inline-flex font-bold items-center justify-center gap-2 border border-gray-300 text-gray-700 text-base px-5 cursor-pointer py-3 rounded-md hover:bg-gray-100 transition">
                Get in contact with us
                <span>
                    <ArrowRight/>
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div data-aos="fade-left" className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder (replace with actual image later) */}
              <div className="w-full h-[240px] sm:h-[300px] md:h-[380px] bg-gray-300">
                <Image src="/stern-med/stern-about.png" alt="About SternMed" width={500} height={400} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}