"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

import { ArrowUpRight } from "lucide-react";

export default function LutechChoose() {
  return (
    <section className="bg-[#f5f7f9] py-20">
      <div className="max-w-380 mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

        {/* LEFT MEDIA */}
        <div
          data-aos="fade-right"
          className="w-full h-[220px] sm:h-[300px] lg:h-[420px] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-gray-200"
        >
          {/* VIDEO READY */}
          <div
            data-aos="fade-right"
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg -mt-5">

              {/* VIDEO (future ready) */}
              <div data-aos="fade-right">
                <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden">
                  <DynamicVideoPlayer
                    type="360"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left" className="max-w-xl">

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0f6c86] leading-snug mb-5">
            Why Choose the LT-300HD <br />
            Vertical Stand?
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-base leading-relaxed mb-4 font-rubik">
            The LT-300HD Vertical Stand is the gold standard in digital colposcopy
            combining the cutting-edge technology and convenience of the vertical
            stand. Whether you're in a busy clinic or a private practice, it offers
            a cost-effective solution without compromising on quality.
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-4 font-rubik">
            <span className="font-semibold text-gray-800">
              Portable & Flexible:
            </span>{" "}
            Ideal for a variety of clinical settings, the vertical stand’s
            adjustable height and mobility options make it easy to adapt to
            different room configurations and exam scenarios.
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-8 font-rubik">
            <span className="font-semibold text-gray-800">
              Reliability & Durability:
            </span>{" "}
            Built with the highest standards in mind, the vertical stand is
            engineered to withstand the demands of daily use, offering long-lasting
            performance and minimal maintenance.
          </p>

          {/* CTA */}
          <div className="flex items-center group ">
            <button className="cursor-pointer bg-[#00769E] text-white px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
              View Details
            </button>

            <button className="cursor-pointer w-11 h-11 flex items-center justify-center rounded-full bg-[#00769E] text-white hover:opacity-90 transition">
              <ArrowUpRight
                size={20} className="group-hover:rotate-45 transition" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}