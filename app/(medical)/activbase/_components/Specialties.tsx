import Link from "next/link";
import React from "react";

interface SpecialtyCardProps {
  image: string;
  title: string;
  description: string;
}

const SpecialtyCard = ({ image, title, description }: SpecialtyCardProps) => (
  <div className="bg-white rounded-xl shadow-lg flex flex-col h-full w-full">
    <div className="p-4 pb-0 w-full h-[300px] shrink-0">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-xl" />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h4 className="text-primary font-semibold text-[18px] mb-3">{title}</h4>
      <p className="text-gray-600 text-[16px] leading-relaxed flex-1">
        {description}
      </p>
    </div>
  </div>
);

export default function Specialties() {
  return (
    <section className="w-full py-24 bg-primary text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col pr-8" data-aos="fade-up">
          <span className="text-white font-medium text-[14px] tracking-wider mb-3">
            Our Specialties
          </span>
          <h2 className="text-[36px] font-bold mb-6 leading-snug">
            Comprehensive treatment programs for every stage of your recovery journey.
          </h2>
          <p className="text-[16px] text-white/90 leading-relaxed mb-8">
            Our specialties cover a wide range of rehabilitation and physiotherapy services designed to support every stage of recovery. From sports injury rehabilitation and orthopedic care to effective pain management and hydrotherapy, our programs are tailored to restore mobility, enhance performance, and improve overall quality of life.
          </p>

          <div data-aos="fade-up" data-aos-delay="100">
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

        {/* Right Content - Cards Grid */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <SpecialtyCard
                image="/activbase/home/spec-1.png"
                title="Sports Injury Rehabilitation"
                description="We are experts in Rehabilitation as well as sports. Our personalized and systematic protocol based on various sports..."
              />
            </div>
            <div className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <SpecialtyCard
                image="/activbase/home/spec-2.png"
                title="Orthopedic Physiotherapy"
                description="Complete rehabilitation from various Musculoskeletal injuries enabling return to activity without any difficulty."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
