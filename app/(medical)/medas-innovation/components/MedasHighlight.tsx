"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function MedasHighlight() {
  return (
    <section className="w-full bg-gray-100 py-10 md:py-14 lg:py-20">
      <div className="max-w-380 mx-auto px-4 md:px-6 lg:px-10">

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="max-w-full lg:max-w-xl">

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
              Two Way Silicone Coated Latex Foley Catheter
            </h2>

            {/* Description */}
            <p className="mt-4 text-gray-600 text-base leading-[1.9]">
              The Two Way Silicone Coated Latex Foley Catheter ensures safe and
              comfortable urinary drainage. Made from quality latex with a smooth
              silicone coating, it facilitates easy insertion and reduces friction,
              improving patient comfort.
            </p>

            {/* Features */}
            <div className="mt-6 space-y-6">

              {/* Item 1 */}
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
                <div className="w-10 h-10 bg-[#0287C3] rounded-full shrink-0"></div>
                <div>
                  <h4 className="text-[#385393] font-semibold text-base">
                    Premium Latex Material
                  </h4>
                  <p className="text-gray-600 text-base mt-1 leading-[1.9]">
                    Manufactured from medical-grade latex for flexibility and reliability
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                <div className="w-10 h-10 bg-[#0287C3] rounded-full shrink-0"></div>
                <div>
                  <h4 className="text-[#385393] font-semibold text-base">
                    Silicone Coating
                  </h4>
                  <p className="text-gray-600 text-base mt-1 leading-[1.9]">
                    Smooth surface enables easy insertion and minimizes irritation
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT MEDIA */}
          <div data-aos="fade-left" className="w-full">

            <div className="relative w-full h-[260px] md:h-[320px] lg:h-[360px] rounded-xl overflow-hidden">
              <div className="absolute inset-0">

                <DynamicVideoPlayer
                  type="360"
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}