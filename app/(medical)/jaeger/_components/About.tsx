"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

type TabType = "philosophy" | "values";

type ContentType = {
  desc: React.ReactNode;
  image: string;
  points: string[];
};
export default function About() {
  const [activeTab, setActiveTab] = useState<"philosophy" | "values">(
    "philosophy",
  );

  const content: Record<TabType, ContentType> = {
    philosophy: {
      desc: (
        <>
          Jaeger Medical, a{" "}
          <span className="font-semibold text-[#000000]">
            Trudell Medical Group{" "}
          </span>
          company, is a global leader in{" "}
          <span className="font-semibold text-[#000000]">
            respiratory diagnostics,
          </span>
          {" "}delivering innovative technology to healthcare professionals
          worldwide. With a legacy spanning{" "}
          <span className="font-semibold text-[#000000]">over 70 years,</span>{" "}
          Jaeger Medical has been at the forefront of{" "}
          <span className="font-semibold text-[#000000]">
            pulmonary function testing,
          </span>{" "}
          shaping the future of respiratory health through innovation and
          precision.
        </>
      ),
      image: "/jaeger/about3.png",
      points: [
        "Global leader in respiratory diagnostic technology",
        "Backed by a globally established healthcare group",
        "Decades of expertise in the medical field",
        "Known for accurate and reliable testing systems",
        "Focused on improving respiratory care outcomes",
      ],
    },

    values: {
      desc: (
        <>
          We live our Core Values in our work every day to bring patient-focused
          respiratory diagnostic products that help enable and enhance care for
          people who live with respiratory disease.
        </>
      ),
      image: "/jaeger/about4.png",
      points: [
        "Patients and caregivers are at the heart of everything we do.",
        "We support accurate diagnosis and treatment.",
        "We earn customer trust through reliable, high-quality solutions.",
        // "We create value through innovation and global collaboration.",
        "We deliver solutions grounded in ethics and science.",
      ],
    },
  };
  const current = content[activeTab];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* LEFT SIDE - IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big Image */}
          <div data-aos="fade-up" className="col-span-2">
            <img
              src="/jaeger/building.png"
              alt="Building"
              width={600}
              height={350}
              className="rounded-xl object-cover w-full h-90"
            />
          </div>

          {/* baseall Image 1 */}
          <img
            src="/jaeger/about1.png"
            alt="Office"
            width={300}
            height={200}
            className="rounded-xl object-cover w-full h-75"
          />

          {/* baseall Image 2 */}
          <img
            src="/jaeger/about2.png"
            alt="Lab"
            width={300}
            height={200}
            className="rounded-xl object-cover w-full h-75"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div data-aos="fade-up" className="space-y-6">
          {/* Tag */}
          <span className="inline-block bg-[#00689B]/12 text-[#00689B] text-[14px] px-4 py-2 rounded-md mb-0">
            About Our Company
          </span>

          {/* Title */}
          <h2 className="text-2xl md:text-[32px] font-bold text-[#1F242E] leading-snug mt-6">
            Advancing Global Respiratory Care Through Innovation and Expertise
          </h2>

          {/* Tabs */}
          <div className="flex gap-6">
            {/* OUR PHILOSOPHY */}
            <div
              onClick={() => setActiveTab("philosophy")}
              className="relative cursor-pointer">
              <div
                className={`px-6 py-3 rounded-xl text-base font-bold text-center border ${activeTab === "philosophy"
                  ? "bg-[#00689B] text-[#FFFFFF] border-[#00689B]"
                  : "border-[#D1D5DB] text-[#1F242E]"
                  }`}>
                Our Philosophy
              </div>

              {/* Triangle */}
              {activeTab === "philosophy" && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-1px)] w-0 h-0
        border-l-[15px] border-l-transparent
        border-r-[15px] border-r-transparent
        border-t-[15px] border-t-[#00689B]"
                />
              )}
            </div>

            {/* CORE VALUES */}
            <div
              onClick={() => setActiveTab("values")}
              className="relative cursor-pointer">
              <div
                className={`px-6 py-3 rounded-xl text-base font-bold text-center border ${activeTab === "values"
                  ? "bg-[#00689B] text-[#FFFFFF] border-[#00689B]"
                  : "border-[#D1D5DB] text-[#1F242E]"
                  }`}>
                Core Values
              </div>

              {/* Triangle */}
              {activeTab === "values" && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-1px)] w-0 h-0
        border-l-[15px] border-l-transparent
        border-r-[15px] border-r-transparent
        border-t-[15px] border-t-[#00689B]"
                />
              )}
            </div>
          </div>

          {/* Card */}
          <div className="bg-[#FFFFFF] shadow-md rounded-xl p-5 space-y-4 h-auto md:h-90 overflow-hidden">
            {/* Description */}
            <p className="text-[#333333] text-base leading-relaxed text-justify">
              {current.desc}
            </p>

            {/* Image + List */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-50 h-45 relative shrink-0">
                <img
                  src={current.image}
                  alt="about"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <ul className="space-y-3 text-base text-[#333333]">
                {current.points.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg
                      className="w-6 h-6 text-[#4CAF50] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
            className="group flex items-center text-[#FFFFFF] px-6 py-2 rounded-md text-base transition shadow-md cursor-pointer"
          >
            Learn More <ArrowRight size={16} className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
