
import Link from "next/link";
import React from "react";

const partners = [
  {
    logo: "/activbase/home/partners-1.png", // Will need image placeholder
    name: "Kerala Blasters FC",
    role: "OFFICIAL REHAB PARTNER"
  },
  {
    logo: "/activbase/home/partners-2.png", // Will need image placeholder
    name: "Kerala Strikers Official",
    role: "OFFICIAL PHYSIO PARTNER"
  }
];

export default function Partners() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col pr-0 lg:pr-12">
          <span data-aos="fade-up" className="text-gray-500 font-bold text-xs tracking-wider uppercase mb-3 block">
            OFFICIAL PARTNERS
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold mb-4 text-gray-900 leading-snug">
            TRUSTED PARTNERSHIPS
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-gray-500 text-[16px] leading-relaxed">
            Providing elite physiotherapy services to leading sports organizations, we work closely with teams and athletes to support peak performance, injury prevention, and faster recovery. Our collaborative approach ensures tailored care, combining clinical expertise with sports-specific insights to deliver consistent, high-quality results.
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              Learn More Active Base
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Content - Partner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} data-aos="fade-left" data-aos-delay={idx * 150} className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-6 flex flex-col items-center text-center">
              {/* Partner Logo Box */}
              <div className="w-full aspect-square bg-gray-50 rounded-xl mb-6 flex items-center justify-center p-4">
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-cover" />
              </div>
              <h4 className="font-bold text-gray-900 text-[16px] mb-1">{partner.name}</h4>
              <p className="text-gray-500 text-[12px] font-semibold tracking-wide uppercase">{partner.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
