"use client";

import { ArrowRight } from "lucide-react";

export default function MedasServices() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="max-w-380 mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div data-aos="fade-right" className="max-w-xl">
            
            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Our Core Services
            </h2>

            {/* Paragraphs */}
            <div className="mt-4 space-y-4 text-gray-600 text-base leading-[1.9]">
              <p>
                High skill engineers team design templates of our products that
                become into industrial modern facilities in our MEDADV Medical
                and health care supplies and devices.
              </p>
              <p>
                Arrive as shortly time possible, the inventory storage conditions
                must be perform in adequate and properly facilities allow
                excellent organization inventory and ready when commercial allied
                request to be dispatch.
              </p>
              <p>
                LOGISTIC: accurate and promptly local or international internal
                and external logistic grant our quality products must always be
                on time, otherwise the last AIDC (automatic identification and
                data capture technology) concede exceptional traceability only
                whit scanner each product from factory to costumer and easy way
                to search and find MEDADV products wherever is it.
              </p>
            </div>

            {/* CTA */}
            <button className="mt-6 cursor-pointer bg-[#0287C3] hover:bg-[#026ca8] text-white px-6 py-3 rounded-md flex items-center gap-2 transition">
              Explore Products <span><ArrowRight/></span>
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div data-aos="fade-left">
            <div className="w-full h-[260px] md:h-[340px] lg:h-[400px] rounded-xl overflow-hidden">
              <img
                src="/medas-innovation/assets/medas-services.png"
                alt="services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}