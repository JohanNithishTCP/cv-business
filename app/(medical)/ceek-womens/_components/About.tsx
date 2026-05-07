"use client";

import Image from "next/image";
import { Check, CornerUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#F5F5F7] py-20 px-6">
      <div className="container mx-auto grid xl:grid-cols-2 items-stretch">
        {/* LEFT IMAGE */}
        <div data-aos="fade-up">
          {/* <div className="relative w-full overflow-hidden  ">
            <div
              className="absolute -bottom-5 -left-10 -right-20 md:-right-20 lg:-right-10  h-[60%] bg-[#6F6589] z-0"
              style={{
                clipPath: "polygon(0 40%, 82% 0%, 82% 100%, 0% 100%)",
              }}></div>

            <div className="relative z-10 rounded-xl overflow-hidden p-8">
              <Image
                src="/ceek/about.png"
                alt="about"
                width={581}
                height={560}
                className="object-cover rounded-lg"
              />
            </div>
          </div> */}
          <div className="w-full flex p-8">
            <div className="max-w-145.25 w-full">
              <Image
                src="/ceek/about-2.png"
                alt="about"
                width={581}
                height={560}
                className="block w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-up">
          <p className="text-base tracking-widest font-semibold text-[#26505E] md:mt-10 mb-3 ">
            About Us
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-[#26505E] mb-4 leading-snug">
            Transforming Gynecological Care Through Innovation
          </h2>

          <p className="text-[#484848] text-base leading-relaxed mb-6">
            Our women-led team develops patient-centered solutions to improve
            comfort and clinical efficiency in women’s healthcare worldwide,
            addressing long-standing gaps in care and enhancing experiences for
            both patients and providers. Through human-centered design, our
            Nella® product line delivers modern, innovative tools that enhance
            the gynecological exam experience with safety, ease, and
            reliability.
          </p>

          {/* POINTS */}
          <div className="space-y-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-[#6F6589] p-1 rounded-full text-white mt-1">
                <Check size={16} />
              </div>
              <div>
                <h4 className="font-medium text-xl text-[#26505E]">
                  Patient-First Innovation
                </h4>
                <p className="text-base text-[#484848]">
                  Our women-led team creates solutions designed with the patient
                  at the center, focusing on comfort, ease, and a better overall
                  exam experience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#6F6589] p-1 rounded-full text-white justify-center align-center mt-1">
                <Check size={16} />
              </div>
              <div>
                <h4 className="font-medium text-xl text-[#26505E]">
                  Closing the Gap in Women’s Healthcare
                </h4>
                <p className="text-base text-[#484848]">
                  We address long-standing challenges in gynecological care by
                  developing modern solutions that improve both patient
                  experience and clinical efficiency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-[#6F6589] p-1 rounded-full text-white align-center mt-1">
                <Check size={16} />
              </div>
              <div>
                <h4 className="font-medium text-xl text-[#26505E]">
                  Advanced Product Ecosystem
                </h4>
                <p className="text-base text-[#484848]">
                  Our Nella® product line includes a redesigned speculum,
                  single-use sheath, and LED illumination system—offering
                  innovative, effective tools for today’s healthcare needs.
                </p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <button className="flex cursor-pointer items-center gap-2 bg-[#6F6685] text-white px-6 py-2 rounded-full text-base font-semibold hover:opacity-90 hover:scale-105 transition">
            Know More About Us
            <CornerUpRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
