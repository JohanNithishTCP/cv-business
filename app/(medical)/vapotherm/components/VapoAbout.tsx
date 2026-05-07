"use client";

import { useEffect } from "react";
import AOS from "aos";
import { Check } from "lucide-react";

export default function VapoAbout() {

  return (
    <section className="bg-gray-100 py-12 md:py-20 px-4 md:px-6 lg:px-16 overflow-hidden">
      <div className="max-w-380 mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <div
            data-aos="fade-right"
            className=" relative w-full h-full md:h-[450px] rounded-2xl max-w-full min-h-full md:min-h-full"
          >

            {/* Image */}
            <img
              src="/vapotherm/assets/vapotherm-about2.jpg"
              alt="about"
              className="rounded-2xl w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-left" className="max-w-2xl">


            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              We Do Work That Matters
            </h1>

            <p className="text-gray-600 mb-4 text-base leading-relaxed ">
              Vapotherm high velocity therapy is more than oxygen therapy.
              It is a fast and safe way to provide treatment for undifferentiated
              respiratory distress with one single tool.
            </p>

            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Together, we still have a lot of work to do. We see patients every
              day who would benefit from our life-changing technology and strive
              to make it available to everyone.
            </p>

            {/* Checklist */}
            <div className="space-y-5">
              
              <div className="flex gap-3 ">
                <div className="bg-[#0C66AF] text-white p-2 rounded-full h-fit">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-base">
                    We Have Clear, Direct, and Respectful Communication With Everyone
                  </p>
                  <p className="text-gray-600 text-base">
                    With over 100 people on our field team, and 24/7 tech support – Vapotherm is always available to help.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 ">
                <div className="bg-[#0C66AF] text-white p-2 rounded-full h-fit">
                  <Check size={14} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-base">
                    We Make and Keep Commitments
                  </p>
                  <p className="text-gray-600 text-base">
                    With the best people in the medical device industry employed by us, we are the fastest growing medical device company in the world.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-16" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          {/* LEFT TEXT */}
          <div data-aos="fade-up" className="max-w-xl">
            <h3 className="text-3xl font-semibold text-gray-800 mb-3">
              Trusted Around the World
            </h3>
            <p className="text-gray-600 text-base">
              Vapotherm high velocity therapy is a fast and safe approach
              for patient populations from premature neonates to hypercapnic
              COPD patients.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div
            data-aos="fade-up"
            className="flex gap-4 md:gap-6 w-full md:w-auto"
          >
            <div className="bg-[#0C66AF] text-white px-4 md:px-8 py-6 rounded-md text-center flex-col justify-center items-center flex-1 md:w-40 md:flex-none">
              <p className="text-2xl font-bold">2400+</p>
              <p className="text-sm mt-1">Trusted By Hospitals</p>
            </div>

            <div className="bg-[#0C66AF] text-white px-4 md:px-8 py-8 rounded-md text-center flex-col justify-center items-center flex-1 md:flex-none">
              <p className="text-2xl font-bold">4.1 million</p>
              <p className="text-sm mt-1">Treated Patients</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}