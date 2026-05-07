import React from "react";
import { ArrowUpRight, CornerUpRight } from "lucide-react"; // Optional: for the "Read More" icon

export default function ServicesSection() {
  const services = [
    {
      title: "Vyntus™ Protect - Service Programs",
      description:
        "Breathe easy knowing your Jaeger products are cared for by our expert team of service professionals.",
      image: "/jaeger/service-1.png", // Replace with your actual path
    },
    {
      title: "Effortless Efficiency: Vyntus™ Protect Service...",
      description:
        "With the rise in cardiopulmonary diseases, PFT and CPET labs are facing higher patient volumes...",
      image: "/jaeger/service-2.png", // Replace with your actual path
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] pb-20">
      {/* Green Header Background */}
      <div
        data-aos="fade-up"
        style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
        className="pt-12 pb-32 text-center text-[#FFFFFF] px-4">
        <span className="inline-block bg-[#FFFFFF26] text-[#FFFFFF] text-[14px] px-4 py-2 rounded-md mb-6">
          Our Services
        </span>
        <h2 className="text-3xl md:text-[32px] font-bold max-w-6xl mx-auto mb-4">
          Reliable Service Solutions for Seamless Performance and Care
        </h2>
      </div>

      {/* Cards Container */}
      <div className="container mx-auto px-4 -mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          {services.map((service, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-[#FFFFFF] rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 p-4">
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-2xl"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-[24px] font-semibold text-[#1F242E] mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#333333] text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="flex items-center text-[#00689B] font-medium hover:underline gap-1 text-base">
                  Read More
                  <CornerUpRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
