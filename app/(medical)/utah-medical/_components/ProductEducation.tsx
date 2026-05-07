"use client";

import { useState } from "react";

const videos = [
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_2.webm",
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_3.webm",
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_4.webm",
  "https://cdn.clinicalvisuals.com/medical/noxbox/landingpage/Noxboxi_5.webm",
];

const items = [
  { id: 1, text: "Blood Pressure monitoring and blood management" },
  { id: 2, text: "Electrosurgery" },
  { id: 3, text: "Labor and Delivery" },
  { id: 4, text: "Neonatal Intensive Care" },
  { id: 5, text: "Urological Care" },
  { id: 6, text: "Neonatal Intensive Care" },
];

export default function ProductEducation() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="bg-white py-10 md:py-20 px-4 md:px-10 lg:px-4">
      <div className="max-w-400 mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">

        {/* LEFT IMAGE */}
        <div
          className="w-full h-56 sm:h-72 md:h-full md:min-h-100 rounded-md bg-gray-200 overflow-hidden"
          data-aos="fade-right"
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://cdn.clinicalvisuals.com/medical/utah/short_clips/UTAH-1.webm" />
          </video>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <h2 className="text-[20px] md:text-[30px] font-semibold text-gray-800 mb-4">
            Product Education
          </h2>

          <p className="text-base text-gray-600 leading-relaxed mb-6">
            These Product Education Materials are provided to enhance your knowledge base and help to optimize the care you provide to your patients. Please contact us by <span className="text-gray-600 underline">EMAIL</span> or call <span className="underline">1-800-533-4984</span> | <span className="underline">1-801-566-1200</span> to register as a Utah Medical Products Clinician User and gain access to product education materials, including those requiring login credentials.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {items.map((item, index) => {
              const isRight = index % 2 === 1;

              return (
                <div
                  key={item.id}
                  className={`flex items-center justify-between bg-[#F1F1F1] ${isRight ? "rounded-r-full" : "rounded-l-full"} px-2 py-1.5`}
                >
                  {/* LEFT SIDE (normal) */}
                  {!isRight && (
                    <>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-b from-[#336699] from-0% via-[#336699] via-[24.52%] to-[#007FFF] to-100% text-white font-semibold">
                        {item.id}
                      </div>
                      <p className="text-base text-gray-700 ml-3 flex-1">
                        {item.text}
                      </p>
                    </>
                  )}

                  {/* RIGHT SIDE (reverse) */}
                  {isRight && (
                    <>
                      <p className="text-sm text-gray-700 mr-3 flex-1 text-right">
                        {item.text}
                      </p>
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-b from-[#336699] from-0% via-[#336699] via-[24.52%] to-[#007FFF] to-100% text-white font-semibold">
                        {item.id}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}