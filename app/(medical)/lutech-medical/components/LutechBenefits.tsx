"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowUpRight, CircleCheckBig } from "lucide-react";

const benefits = [
  {
    title: "Ergonomic Design",
    desc: "Eliminates discomfort related to binocular use.",
  },
  {
    title: "Less Invasive",
    desc: "For both the examiner and the patient.",
  },
  {
    title: "True HD Images",
    desc: "Provides increased clarity for better precision.",
  },
  {
    title: "Easy-to-Use",
    desc: "Cutting down exam time by up to 50%.",
  },

];

export default function LutechBenefits() {
  return (
    <section className="bg-[#f5f7f9] py-20">
      <div className="max-w-380 mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* TITLE */}
          <h2
            data-aos="fade-up"
            className="text-2xl lg:text-3xl font-semibold text-[#0f6c86] mb-4"
          >
            LT-300HD Colposcope Benefits
          </h2>

          {/* DESCRIPTION */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-gray-600 text-base max-w-lg mb-8 font-rubik"
          >
            Delivers clear imaging, faster procedures, and a more comfortable,
            user-friendly experience for both clinicians and patients.
          </p>

          {/* FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
            {benefits.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="flex items-start gap-4 font-rubik"
              >
                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0f6c86] text-white text-lg shadow-sm shrink-0">
                  <CircleCheckBig />
                </div>

                {/* TEXT */}
                <div>
                  <h4 className="text-base font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="font-rubik text-base text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center group ">
            <button className="cursor-pointer bg-[#00769E] text-white px-6 py-3 rounded-full text-base font-medium hover:opacity-90 transition">
              Explore Product
            </button>

            <button className="cursor-pointer w-11 h-11 flex items-center justify-center rounded-full bg-[#00769E] text-white hover:opacity-90 transition">
              <ArrowUpRight
                size={20} className="group-hover:rotate-45 transition" />
            </button>
          </div>
        </div>

        {/* RIGHT MEDIA */}
        <div
          data-aos="fade-left"
          className="w-full h-[420px] rounded-2xl"
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
                    type="short-2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}