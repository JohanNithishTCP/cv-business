"use client";

import { useState } from "react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Innovation() {

  return (
    <section className="w-full flex justify-center py-16 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div data-aos="fade-left">
          <h2 className="text-[24px] font-semibold text-[#000000] mb-4">
            Advancing Health Through Purposeful Innovation
          </h2>

          <p className="text-[#666666] text-[17px] leading-relaxed mb-4 text-justify">
            At Delphos, every step is taken with the certainty that we are
            contributing to the improvement of people's health and well-being.
            Our history is marked by determination, collaboration, and the
            relentless pursuit of quality. We are committed to making a
            difference and will continue to move forward with passion and
            responsibility, always focused on offering the best to our
            customers.
          </p>

          <p className="text-[#666666] text-[17px] leading-relaxed mb-4 text-justify">
            We provide top-quality products that meet the expectations of the
            market and distributors. For us, excellence is not just a goal, but
            a daily practice. We believe in the importance of continuous
            improvement, which drives us to innovate and ensure that our
            solutions are always aligned with industry demands.
          </p>

          <p className="text-[#059347] text-[17px] font-bold  mb-6 italic">
            “We will work collaboratively with healthcare professionals, always
            seeking feedback and inspiration to drive continuous innovation.”
          </p>

          <Button href="#" variant="primary" size="lg">
            View All Products
          </Button>
        </div>

        {/* RIGHT VIDEO CARD */}
        <div
          data-aos="fade-right"
          className="rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center aspect-video">
          {/* Replace this with actual video */}
          <DynamicVideoPlayer
            type="short-1"
            className="w-full h-full object-cover" />

          {/* Placeholder text (remove when video used) */}
          {/* <span className="absolute text-gray-600 text-lg font-medium">
            Video 01
          </span> */}
        </div>
      </div>
    </section>
  );
}
