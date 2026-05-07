"use client";

import React from "react";

const experts = [
  {
    name: "Toby Foster",
    title: "Chief Executive Officer",
    image: "/horizon/images/team-1.png",
  },
  {
    name: "Dr. Peter Reynolds",
    title: "Chief Medical Officer",
    image: "/horizon/images/team-2.png",
  },
  {
    name: "Siddarth Sashikumar",
    title: "Head Of Business Development",
    image: "/horizon/images/team-3.png",
  }
];

export default function ExpertsTeam() {
  return (
    <section className="w-full py-15 bg-[#F9F9F9] relative overflow-hidden ">
      <div
        className="absolute inset-0 opacity-[0.58] pointer-events-none bg-[url('/horizon/images/about-bg.png')] bg-cover bg-center"
      />
      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
        <h2 className="text-[30px] md:text-[32px] font-semibold text-[#1A1A1A] mb-16" data-aos="fade-up">
          Meet Our Experts Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {experts.map((expert, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {/* Header Info Part */}
              <div className="w-full bg-[#84CFFA] rounded-t-3xl pt-10 pb-16 px-6 text-center transform transition-transform group-hover:-translate-y-1">
                <h3 className="text-xl font-bold text-[#064163] mb-1">{expert.name}</h3>
                <p className="text-[11px] font-bold text-[#064163]/70 uppercase tracking-widest">{expert.title}</p>
              </div>

              {/* Photo Part */}
              <div className="w-full -mt-10 px-0 transform transition-transform group-hover:-translate-y-2">
                <div className="bg-[#064163] rounded-3xl overflow-hidden aspect-square relative shadow-2xl">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="absolute inset-0 w-full h-full object-cover object-top filter grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0"
                    onError={(e) => { e.currentTarget.src = "https://cdn.clinicalvisuals.com/medical/advanced_instrumentations/about/expert_placeholder.jpg"; }}
                  />
                  {/* Logo overlay on image like in design */}
                  <div className="absolute top-4 right-4 opacity-40">
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black text-white leading-none">HORIZON</span>
                      <span className="text-[4px] font-bold text-[#84CFFA] tracking-widest">MED TECH</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
