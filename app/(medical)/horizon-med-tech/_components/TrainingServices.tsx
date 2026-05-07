import React from "react";
import Button from "./Button";

const services = [
  {
    title: "Product Training",
    description: "Quick setup guides, Instructions for Use, Troubleshooting and Frequently Asked Questions",
    href: "#",
    image: "/horizon/images/presentation.png",
  },
  {
    title: "Clinic Training",
    description: "Quick setup guides, Instructions for Use, Troubleshooting and Frequently Asked Questions",
    href: "#",
    image: "/horizon/images/graduation.png",
  },
  {
    title: "Service Training",
    description: "Quick setup guides, Instructions for Use, Troubleshooting and Frequently Asked Questions",
    href: "#",
    image: "/horizon/images/practice.png",
  },
];

export default function TrainingServices() {
  return (
    <section className="w-full py-24 bg-white relative overflow-hidden">
      {/* Background Topographic lines (Simulated with SVG pattern) */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('/horizon/images/about-bg.png')] bg-cover bg-center"
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] rounded-2xl p-10 flex flex-col items-center text-center transition-transform duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl bg-[#84CFFA] flex items-center justify-center mb-6 text-[#064163] p-5">
                <img src={service.image} alt={service.title} className="w-full h-full object-contain" />
              </div>

              <h3 className="text-[22px] font-semibold text-[#1a1a1a] mb-4">
                {service.title}
              </h3>

              <p className="text-[17px] mb-8">
                {service.description}
              </p>

              <div className="pt-4">
                <Button href={service.href}>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
