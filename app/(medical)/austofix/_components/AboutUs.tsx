"use client";

import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      img: "/austofix/machine1.png",
      text: "Rapid turn-around by in-house 3D printing and biomechanical testing.",
    },
    {
      img: "/austofix/machine2.png",
      text: "Equipped with in-house CMM, vision system, cleanroom, and sterilization.",
    },
    {
      img: "/austofix/machine3.png",
      text: "Single-column force testing.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div data-aos="fade-up">
            <div className="text-[#6CA033] ">
              {/* Small Title */}
              <p className="flex items-center gap-2 text-sm mb-2">
                <span className="relative w-3 h-3 rounded-full">
                  <Image
                    src="/austofix/screw-1.png"
                    alt="idea"
                    fill
                    className="object-cover"
                  />
                </span>
                About Us
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-4">
              A leading manufacturer and designer of orthopaedic trauma medical
              devices with 30 years experience.
            </h2>

            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
              Austofix is a proudly South Australian medical device company
              leading in the areas of research, design, manufacturing and
              distribution of world-class orthopaedic devices.
            </p>

            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              The Austofix team is dedicated, diverse and professional with
              extensive experience in developing new devices, from concept to a
              fully commercialised product with regulatory approval ready for
              worldwide distribution.
            </p>

            <div data-aos="fade-up" className="md:col-span-2 flex ">
              <div className="relative inline-block group">
                <button className="bg-[#5D9732] text-white px-6 py-3 pr-14 rounded-full font-medium hover:bg-[#5a8c2a] transition">
                  Find Out More
                </button>

                <span className="absolute top-1/2 -translate-y-1/2 -right-3 w-10 h-10 bg-[#BDD630] rounded-full flex items-center justify-center shadow-md group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={18} className="text-white" />
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-100" data-aos="fade-up">
            <Image
              src="/austofix/building.png"
              alt="building"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-6 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#3C7324] text-white p-5 rounded-lg flex items-center gap-4 shadow-md">
              {/* Fixed Image Box */}
              <div className="bg-white w-20 h-20 flex items-center justify-center rounded shrink-0">
                <Image
                  src={item.img}
                  alt="feature"
                  width={60}
                  height={0}
                  className="object-contain"
                />
              </div>

              <p className="text-sm leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
