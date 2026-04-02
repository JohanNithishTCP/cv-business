"use client";

import { useState } from "react";

import { CircleCheck } from "lucide-react";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
  "https://cdn.clinicalvisuals.com/medical/utah/Utah_360.webm",
];

const videos2 = [
  "https://cdn.clinicalvisuals.com/medical/invotec/landingvideos/invotec_02.webm",
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
]


export default function ChooseMedico() {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentVideoIndex2, setCurrentVideoIndex2] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handleVideoEnd2 = () => {
    setCurrentVideoIndex2((prev) => (prev + 1) % videos2.length);
  }


  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-380 mx-auto px-4 sm:px-6 space-y-12 md:space-y-20 lg:space-y-28">

        {/* ROW 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* VIDEO LEFT */}
          <div
            data-aos="fade-right"
            className="w-full h-48 md:h-full md:min-h-96 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            {/* Replace with video */}
            {/* <span className="text-gray-600 font-medium">
              Video Clip 01
            </span> */}

            {/* Future: */}
            <video
              key={currentVideoIndex}
              src={videos[currentVideoIndex]}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              // loop
              playsInline
              onEnded={handleVideoEnd}
            >
              {/* <source src="https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm"/> */}
            </video>
           
          </div>

          {/* CONTENT RIGHT */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-gray-900">
              Why Choose Us
            </h2>

            <p className="text-base text-gray-600 mt-4 leading-relaxed ">
              In development of medical products we work hand in hand with our customers and skilled medical professionals. Medicoplast relies on over 45 years of experience in development and processing of plastic materials in medical technology.
            </p>

            {
            [
                "With our in-house injection molding machines and extruders Medicoplast complies with all aspects of production of medical technology.",
                "The Medicoplast sterilization plant sterilizes our products by means of material-friendly Ethylenoxide method.",
                "Our staff members in quality and product management look back on long-term experience and are educated constantly."

            ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mt-3 text-[#666666] text-base" >
                <CircleCheck className="shrink-0 fill-[#F29100] text-white"/>       
                <span>
                {item}
                </span>
                </div>
            ))
            }
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* CONTENT LEFT */}
          <div data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Products
            </h2>

            <p className="text-base text-gray-600 mt-4 leading-relaxed ">
              A high-quality silicone Foley catheter designed for reliable urinary drainage with enhanced patient comfort and flexibility.
            </p>

            {
            [
                "2-way balloon catheter with integrated balloon for secure positioning.",
                "Closed tip with dual drainage eyes for efficient urine flow.",
                "Transparent, X-ray visible design for easy monitoring and placement."

            ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mt-3 text-[#666666] text-base" >
                <CircleCheck className="shrink-0 fill-[#F29100] text-white"/>       
                <span>
                {item}
                </span>
                </div>
            ))
            }
            <button className="mt-6 cursor-pointer bg-[#F29100] hover:bg-[#F18A00] text-white text-base font-semibold px-6 py-3">
              VIEW PRODUCTS
            </button>
          </div>

          {/* VIDEO RIGHT */}
          <div
            data-aos="fade-left"
            className="w-full h-48 md:h-full md:min-h-96 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <video
              key={currentVideoIndex}
              src={videos2[currentVideoIndex2]}
              className="w-full h-full object-cover rounded-lg"
              autoPlay
              muted
              // loop
              playsInline
              onEnded={handleVideoEnd2}
            >
              {/* <source src="https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm"/> */}
            </video>
            {/* Future video */}
          </div>

        </div>
      </div>
    </section>
  );
}