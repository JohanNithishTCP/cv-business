"use client";

import { useState } from "react";


const PAGE_SIZE = 3;

export default function EmployerSection() {
  const [page, setPage] = useState(0);

  const people = [
    {
      name: "Evgeny Shabash, Area Sales Manager",
      desc: "I like what I do, because ultimately the world is getting better thanks to the distribution of our products and our innovations.",
      img: "/atmosmed/assets/emp_1_atmos.jpg",
    },
    {
      name: "Britta-Andrea Jurecka, Director HR & Legal",
      desc: "At ATMOS, I can reach my full potential personally and professionally as part of a great, global team and make my concepts of good HR work and corporate culture come true.",
      img: "/atmosmed/assets/emp_2_atmos.jpg",
    },
    {
      name: "Sabrina Hogg, Director Marketing & Communications",
      desc: "Right from my first day at ATMOS, I had the freedom and trust to transform what had been a purely operational advertising department into strategic marketing.",
      img: "/atmosmed/assets/emp_3_atmos.jpg",
    },
    {
      name: "Ohannes Jaschke, Industrial Mechanic and Trainer in the Metal Center Division",
      desc: "When I do the programming for turned and milled parts, I contribute to the development of new products and thus to the best solution of the highest quality for doctors and medical professionals.",
      img: "/atmosmed/assets/emp_4_atmos.jpg",
    },
  ];

  return (
  <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Label */}
        <p
          data-aos="fade-up"
          className="text-lg text-black font-semibold"
        >
          Experienced professionals
        </p>

        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-2xl md:text-3xl font-semibold text-[#16679b]"
        >
          ATMOS as an employer for <br />
          experienced professionals
        </h2>

        {/* Cards */}
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(people.length / PAGE_SIZE) }).map((_, pageIndex) => (
              <div key={pageIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {people.slice(pageIndex * PAGE_SIZE, pageIndex * PAGE_SIZE + PAGE_SIZE).map((person, index) => (
                  <div
                    key={index}
                    className="bg-[#F9F9F9] border border-[#16679b]/40 rounded-xl p-6 shadow-sm hover:shadow-md transition"
                  >
                    {/* Image */}
                    <div className="flex justify-start mb-4">
                      <div className="w-40 h-40 rounded-lg overflow-hidden shadow">
                        <img
                          src={person.img}
                          alt={person.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-[#16679b] text-lg font-semibold mb-3">
                      {person.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-base leading-relaxed">
                      {person.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Indicator */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex justify-center items-center gap-2 mt-10"
        >
          {Array.from({ length: Math.ceil(people.length / PAGE_SIZE) }).map((_, i) => (
            <div
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded cursor-pointer transition-all duration-300 ${
                page === i ? "w-10 bg-[#16679b]" : "w-6 bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}