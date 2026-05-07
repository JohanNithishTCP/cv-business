import React from 'react';
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function Hero() {
  return (
    <section className="bg-black w-full min-h-screen flex flex-col items-start justify-end pb-16 md:pb-24 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </div>

      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-[1] pointer-events-none"></div> */}

      <div className="container relative z-10 w-full">
        <div className="max-w-4xl">
          <h1
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-white text-[25px] md:text-[32px] font-medium leading-[1.1] tracking-tight"
          >
            Respiratory Care Solutions for <br className="hidden md:block" />
            Homecare and Hospital Supply Distribution
          </h1>
        </div>
      </div>
    </section>
  );
}




