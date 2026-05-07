import React from "react";

const approaches = [
  {
    title: "Evidence-Based Methods",
    description: "All treatments backed by the latest clinical research and proven techniques.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    ),
  },
  {
    title: "Personalized Plans",
    description: "Every treatment plan is uniquely designed for your specific condition and goals.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Continuous Support",
    description: "Ongoing guidance and adjustments throughout your entire recovery journey.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
      </svg>
    ),
  },
];

export default function Approach() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col">
          <span data-aos="fade-up" className="text-gray-800 font-bold text-[14px] tracking-wider mb-3">
            Why Our Approach Works
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold mb-6 leading-snug text-gray-900">
            Evidence-based treatment combined with personalized care for optimal outcomes.
          </h2>
          <p className="text-[16px] text-gray-600 mb-3 leading-relaxed">
            Our approach is built on a strong foundation of evidence-based treatments combined with personalized care to achieve optimal outcomes. Every treatment plan is carefully designed to suit your specific condition, goals, and recovery pace, ensuring targeted and effective results.
          </p>
          <p className="text-[16px] text-gray-600 mb-5 leading-relaxed">
            With continuous support and expert guidance throughout your journey, we monitor progress and make necessary adjustments to maximize recovery.
          </p>

          <div className="space-y-4">
            {approaches.map((item, idx) => (
              <div data-aos="fade-up" data-aos-delay={200 + idx * 100} key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-[16px] text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="w-full relative sm:min-h-[500px] rounded-2xl overflow-hidden border border-gray-200 aspect-video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.clinicalvisuals.com/medical/activbase/short_clips/activebase_01.webm" />
        </div>
      </div>
    </section>
  );
}
