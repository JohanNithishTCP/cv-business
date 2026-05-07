"use client";

import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {

  return (
    <section className="w-full flex justify-center">
      {/* OUTER */}
      <div className="w-[95%] rounded-3xl overflow-hidden relative h-screen">
        {/* 🎥 Background Video */}
        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* INNER CONTENT (constrained) */}
        <div className="relative z-10 container mx-auto h-full hidden sm:flex items-end pb-35 px-6 ">
          <div className="max-w-3xl text-white">
            <h1
              data-aos="fade-up"
              className="text-[32px] font-semibold! leading-snug mb-6 font-sora">
              To restore people's quality of life
              <br />
              through cutting-edge technologies.
            </h1>

            <Button
              href="#"
              variant="white"
              size="md"
              rounded="lg"
              className="mt-4"
            >
              Who We Are
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
