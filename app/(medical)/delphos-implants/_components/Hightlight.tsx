"use client";

import { Check, SendHorizontal } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";


export default function Highlight() {



  return (
    <section className="w-full flex justify-center py-6 bg-[#FFFFFF]">
      <div className="w-[95%] container mx-auto space-y-10">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT VIDEO */}
          <div
            data-aos="fade-left"
            className="rounded-2xl overflow-hidden bg-[#FFFFFF] min-h-70 flex items-center justify-center">
            {/* Replace with actual video */}
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full object-cover z-0"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div data-aos="fade-right">
            <h3 className="text-[24px] font-semibold text-[#000000] mb-4">
              D2 Face
            </h3>

            <p className="text-[#666666] text-[17px] leading-relaxed mb-4">
              Delphos plates and screws are manufactured in titanium. All plates
              come with engraved DELPHOS logo, thus preventing possible
              forgeries. All of our plates also have their Lot Number and
              Reference engraved, providing traceability as required. We are
              able to meet all customer requirements because all of our
              manufacturing process and controls are performed in-house.
            </p>

            {/* BULLETS */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-[17px] text-[#666666]">
                <img
                  src="/delphos-implants/images/send.png"
                  alt="send"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                ES plates are designed for precision and stability in surgical
                applications.
              </li>

              <li className="flex items-start gap-2 text-[17px] text-[#666666]">
                <img
                  src="/delphos-implants/images/send.png"
                  alt="send"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                L plates provide reliable support for angular fixation needs.
              </li>

              <li className="flex items-start gap-2 text-[17px] text-[#666666]">
                <img
                  src="/delphos-implants/images/send.png"
                  alt="send"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                Z plates offer versatile positioning for complex bone
                structures.
              </li>

              <li className="flex items-start gap-2 text-[17px] text-[#666666]">
                <img
                  src="/delphos-implants/images/send.png"
                  alt="send"
                  width={16}
                  height={16}
                  className="mt-1"
                />
                1.2 mm screws ensure secure fixation in delicate areas.
              </li>
            </ul>

            <Button href="#" variant="primary" size="md">
              View Products
            </Button>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div
          data-aos="fade-up"
          className="rounded-3xl bg-linear-to-r from-[#0F8F43] to-[#7CC242] text-[#FFFFFF] text-center py-10 px-6">
          <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-medium mb-6 max-w-5xl mx-auto">
            Our focus is to be recognized as a partner company for our
            distributors and customers, building solid and lasting partnerships.
          </h3>

          <Button href="#" variant="white" size="md" rounded="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
