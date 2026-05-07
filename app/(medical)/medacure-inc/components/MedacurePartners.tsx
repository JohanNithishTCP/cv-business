"use client";


import "aos/dist/aos.css";
import LogoCard from "./MedacureLogoCard";

const logos = [
  "/medacure/assets/freespirit.png",
  "/medacure/assets/hamilton.png",
  "/medacure/assets/america-spirit.png",
  "/medacure/assets/proex.png",
  "/medacure/assets/airstream.png",
  "/medacure/assets/alter-light.png",
  "/medacure/assets/prime-ex.png",
  "/medacure/assets/oasis.png",
];

export default function MedacurePartners() {

  return (
    <section className="bg-white py-20">
      <div className="max-w-380 mx-auto px-6 text-center">
        
        {/* Heading */}
        <p
          data-aos="fade-up"
          className="text-[#2E2662] text-base font-medium mb-2"
        >
          Our Partners
        </p>

        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-gray-900 mb-12"
        >
          MedaCure Brands
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {logos.map((logo, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <LogoCard src={logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}