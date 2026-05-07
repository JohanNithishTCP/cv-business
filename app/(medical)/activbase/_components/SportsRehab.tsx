import Link from "next/link";
import React from "react";

export default function SportsRehab() {
  return (
    <section className="w-full py-20 bg-primary text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 lg:gap-16 items-center">
        {/* Left Content - Large Image Placeholder */}
        <div data-aos="fade-right" className="w-full relative aspect-video rounded-xl overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.clinicalvisuals.com/medical/activbase/short_clips/activebase_03.webm" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col pr-0">
          <span data-aos="fade-up" className="text-white font-medium text-[14px] mb-4 block">
            Complete Rehabilitation
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold mb-6 leading-tight max-w-[450px]">
            Sports Rehabilitation Treatment for Injuries & Recovery
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[16px] text-white/90 mb-10 leading-relaxed max-w-[450px]">
            From acute injuries to chronic conditions, our specialized treatment approaches are designed to address your unique symptoms and restore your quality of life.
          </p>

          <h3 data-aos="fade-up" data-aos-delay="300" className="text-[36px] font-bold mb-4 leading-tight">
            Common Conditions We Treat
          </h3>
          <p data-aos="fade-up" data-aos-delay="400" className="text-[16px] text-white/90 mb-8 leading-relaxed max-w-[450px]">
            Our experienced team successfully treats a wide range of musculoskeletal conditions using evidence-based physiotherapy techniques.
          </p>

          <div data-aos="fade-up" data-aos-delay="500">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-[16px]"
            >
              Discover Our Facilities
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
