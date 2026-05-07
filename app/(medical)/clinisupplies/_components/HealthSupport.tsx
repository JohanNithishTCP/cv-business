"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import React from "react";

const HealthSupport = () => {
  const cards = [
    {
      title: "Bowel Incontinence",
      desc: "Bowel incontinence, also known as faecal incontinence, is when you accidentally leak solid or liquid stool (poo)...",
    },
    {
      title: "Spinal injury",
      desc: "What is a Spinal Injury? A spinal cord injury can be divided into two types. An incomplete injury means the spinal cord …",
    },
    {
      title: "Prostate Conditions",
      desc: "What is the Prostate? The prostate is a small gland found only in men or people assigned male at birth (and some interse…",
    },
    {
      title: "Parkinson's Disease",
      desc: "What is Parkinson’s Disease? Parkinson’s Disease is a progressive neurological condition affecting 153,000 people in the…",
    },
    {
      title: "Urinary incontinence",
      desc: "What is Urinary Incontinence? Urinary incontinence is the term given to a condition whereby someone has difficulty contr…",
    },
    {
      title: "Multiple Sclerosis (MS)",
      desc: "Multiple Sclerosis (MS) is a long-term condition affecting the brain and spinal cord (the central nervous system)...",
    },
  ];

  return (
    <section className="bg-[#F26828] px-6 py-16 lg:py-24">
      <div className="container mx-auto space-y-12">
        {/* 🔹 TOP SECTION */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
          {/* LEFT → TEXT + 2 CARDS */}
          <div className="space-y-8 text-[#FFFFFF]">
            {/* Content */}
            <div data-aos="fade-up" className="space-y-4">
              <p className="text-base font-medium opacity-90">
                Explore Your Health Support Options
              </p>

              <h2 className="text-3xl md:text-4xl font-medium leading-tight">
                Support for your health needs
              </h2>

              <p className="opacity-90 text-base">
                Many health conditions can lead to continence challenges,
                affecting comfort, confidence, and daily life. Understanding
                your condition is the first step toward managing it effectively.
              </p>

              <p className="opacity-90 text-base">
                We provide clear guidance, trusted information, and supportive
                solutions to help you navigate your healthcare journey with
                confidence.
              </p>
            </div>

            {/* 2 Cards */}
            <div
              data-aos="fade-up"
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
              {cards.slice(0, 2).map((card, i) => (
                <div
                  key={i}
                  className="bg-[#FFFFFF] p-6 rounded-2xl shadow-lg text-center">
                  <h3 className="text-[#F26828] font-medium text-xl mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[#666666] text-base leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT → VIDEO */}
          <div
            data-aos="fade-up"
            className="relative w-full aspect-video bg-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 🔹 BOTTOM SECTION → 4 CARDS */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cards.slice(2).map((card, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-[#F26828] font-medium text-xl mb-2">
                {card.title}
              </h3>
              <p className="text-[#666666] text-base leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthSupport;
