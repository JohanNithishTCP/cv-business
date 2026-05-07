"use client";

import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="w-full flex justify-center py-4">
      {/* OUTER CONTAINER - 95% width and almost full height */}
      <div className="w-[95%] rounded-[2rem] overflow-hidden relative h-[85vh] lg:h-[94vh]">
        {/* 🎥 Background Video - Reusing the DynamicVideoPlayer logic from Delphos */}
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover z-0 aspect-video"
        />

        {/* INNER CONTENT (constrained to container) */}
        <div className="relative z-20 container mx-auto h-full flex items-end pb-20 px-8 lg:px-12">
          <div className="max-w-3xl text-white">
            <h1
              data-aos="fade-up"
              className="text-[32px] lg:text-[42px] font-bold leading-[1.1] mb-6 text-white text-shadow-xl"
            >
              Complete DME Solutions Designed <br className="hidden lg:block" />
              for Comfort and Reliability
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="lg:text-[17px] text-[16px] text-white mb-4 max-w-2xl leading-relaxed text-shadow-md"
            >
              Emerald Supply offers a comprehensive inventory of durable medical equipment (DME) including beds, wheelchairs, support surfaces, and respiratory products, designed with the end user in mind.
            </p>

            <Button
              href="#about"
              variant="ghost"
              size="md"
              rounded="full"
              className="mt-4 !text-white !bg-transparent border-2 border-white font-bold px-10 shadow-lg group transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
              hasArrow={true}
            >
              Who We Are
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-shadow-xl {
          text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.6);
        }
        .text-shadow-md {
          text-shadow: 1px 2px 8px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
