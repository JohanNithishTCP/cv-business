"use client";

import { ArrowRight } from "lucide-react";

export default function MedasNews() {
  return (
    <section className="w-full">
      
      <div className="grid md:grid-cols-2 md:min-h-[480px]">

        {/* LEFT IMAGE */}
        <div
          data-aos="fade-right"
          className="relative w-full h-[260px] md:h-auto overflow-hidden"
        >
          {/* IMAGE */}
          <img
            src="/medas-innovation/assets/medas-news.png"
            alt="news"
            className="w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 text-white">
            
  
            <div className="text-3xl font-light tracking-wide opacity-90">
              medadv.
            </div>


            <div className="text-xl md:text-2xl font-medium">
              What is a Stent?
            </div>

          </div> */}
        </div>

        {/* RIGHT CONTENT */}
        <div
          data-aos="fade-left"
          className="relative  text-white flex items-center bg-[#3f5f9a]"
        >
          {/* PATTERN OVERLAY */}
          <div className="absolute inset-0 opacity-10 bg-[url('/medas-innovation/assets/medas-pattern.png')] bg-repeat"></div>

          <div className="relative p-6 md:p-10 max-w-2xl space-y-4">
            
            {/* LABEL */}
            <p className="text-white/70 text-base">
              Our News
            </p>

            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-semibold">
              What is a Stent?
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-base text-white/80 leading-[1.9]">
                A stent is a tiny wire mesh tube that treat narrowed arteries in the human body. Stents are usually made from metal mesh such as Stainless Steel and CoCr based alloy. Physicians place it in a coronary artery (an artery feeding the heart muscle) to re-establish and improve blood flow in the human body through a procedure called angioplasty. Abnormal, narrow arteries are cause by a build up of fatty deposits called plaque. It can reduce blood flow through arteries to the heart and cause chest pain, shortness of breath and other coronary artery disease.Nowadays stents are coated with medicine that eluting drugs (DES) slowing and continuously to block cell proliferation in the artery. One of this drugs is Sirulimus.
            </p>

            {/* CTA */}
            <button className="mt-4 cursor-pointer bg-white text-[#0287C3] px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition font-semibold">
              Learn More <span><ArrowRight/></span>
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}