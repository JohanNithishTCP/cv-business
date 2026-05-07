import Link from "next/link";
import React from "react";

export default function Services1() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content - Image Placeholder */}
        <div className="w-full relative h-full rounded-2xl overflow-hidden border border-gray-200 aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.clinicalvisuals.com/medical/activbase/short_clips/activebase_02.webm" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span data-aos="fade-up" className="text-gray-800 font-bold text-[14px] tracking-wider mb-3">
            Our Physiotherapy Services
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold mb-6 text-gray-900 leading-snug">
            Comprehensive Orthopedic And Sports Physiotherapy
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[16px] text-gray-600 mb-5 leading-relaxed">
            Achieve complete rehabilitation and confidently return to your daily activities or sports after injuries, surgeries, or chronic pain. Our approach focuses on personalized care, with tailored protocols designed specifically for your condition, goals, and recovery pace.
          </p>
          <p data-aos="fade-up" data-aos-delay="300" className="text-[16px] text-gray-600 mb-8 leading-relaxed">
            From initial assessment to full recovery, every step of your journey is carefully planned and executed by experts to restore strength, mobility, and function. We aim not just to treat symptoms, but to help you regain independence, prevent future injuries, and perform at your best.
          </p>

          <div data-aos="fade-up" data-aos-delay="400">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-secondary transition-colors text-[14px]"
            >
              Explore Our Services
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
