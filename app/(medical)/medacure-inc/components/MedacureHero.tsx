"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import "aos/dist/aos.css";


export default function MedacureHero() {

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* VIDEO (future ready) */}
      {/* Replace this with <video /> later */}
      <div className="absolute inset-0">

        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3f]/90 to-[#0f1c3f]/40" /> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full w-full">
        <div className="max-w-380 mx-auto px-6 w-full">
          <div
            data-aos="fade-up"
            className=" text-white mb-30"
          >
            <h1 className="text-3xl md:text-4xl leading-tight mb-6 font-semibold">
              Manufacturer of Durable
              <br />
              Medical Equipment & Supplies
            </h1>

            <button
              data-aos="zoom-in"
              className="border cursor-pointer border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}