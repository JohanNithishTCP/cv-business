"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function SternDecision() {
  
  return (
    <section className="bg-[#f5f6f7] py-20 overflow-x-hidden">
      <div className="max-w-380 mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center">
          
          {/* LEFT TEXT */}
          <div data-aos="fade-right">
            <p className="text-gray-700 text-lg font-medium mb-2">
              A crucial decision:
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-4">
              Buying a medical device
            </h2>

            <p className="text-base text-gray-500 leading-[1.9] mb-6">
              When buying a medical device, several important considerations are
              crucial to ensuring the right purchase and optimal utilization.
              Knowing what you need and proposing the most suitable solution is
              the commitment of SternMed to your project. Our focus lies on
              meeting your project requirements by following the SternMed “3A’s”:
              Appropriate, Accessible, and Affordable solutions for you.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#1E6FB6] text-white text-base px-5 py-3 rounded-md hover:bg-[#1E6FB6CF] cursor-pointer transition">
              Discover More
              <span><ArrowRight/></span>
            </button>
          </div>

          {/* CENTER IMAGE */}
          <div data-aos="zoom-in">
            <div className="rounded-xl overflow-hidden">
              {/* Placeholder */}
              <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] bg-gray-300">
                <Image src="/stern-med/stern-buy.jpg"   alt="Buying medical device" width={400} height={300} className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            
            {/* CARD 1 */}
            <div
              data-aos="fade-left"
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Appropriate
              </h3>
              <p className="text-base text-gray-500">
                Ensuring that our medical device meets the specific needs...{" "}
                <span className="text-[#1E6FB6] underline font-medium cursor-pointer">
                  READ MORE
                </span>
              </p>
            </div>

            {/* CARD 2 */}
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Accessible
              </h3>
              <p className="text-base text-gray-500">
                Verifying that the device is compatible with current healthcare...{" "}
                <span className="text-[#1E6FB6] underline  font-medium cursor-pointer">
                  READ MORE
                </span>
              </p>
            </div>

            {/* CARD 3 */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="bg-white rounded-xl shadow-sm p-5"
            >
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                Affordable
              </h3>
              <p className="text-base text-gray-500">
                We balance the initial cost of our device with its long-term...{" "}
                <span className="text-[#1E6FB6] underline  font-medium cursor-pointer">
                  READ MORE
                </span>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}