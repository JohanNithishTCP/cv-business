import React from "react";
import { ArrowRight, CornerRightUp, CornerUpRight } from "lucide-react"; // Optional: using lucide-react for the button icon
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Services = () => {
  const serviceCards = [
    {
      title: "Home Delivery",
      image: "/clinisupplies/delivery.png", // Replace with your image paths
    },
    {
      title: "Specialist Nursing Team",
      image: "/clinisupplies/team.png",
    },
    {
      title: "Education Hub",
      image: "/clinisupplies/hub.png",
    },
    {
      title: "Aquaflush Virtual Nursing Service",
      image: "/clinisupplies/nurse.png",
    },
  ];

  return (
    <section className="relative bg-[#F26828] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: "url('/clinisupplies/bg.png')" }}
      />

      <div className="relative z-10 container mx-auto py-16 lg:py-24 px-6 lg:px-0 items-stretch">
        {/* TOP SECTION: Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-6">
          {/* Left: Placeholder / Video Box */}
          <div
            data-aos="fade-left"
            className="bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30 aspect-video overflow-hidden shadow-2xl">
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div data-aos="fade-right" className="text-[#FFFFFF] space-y-4">
            <span className="text-base font-medium  opacity-90">
              Our Services
            </span>
            <h2 className="text-2xl lg:text-4xl font-medium leading-tight">
              Comprehensive care and support designed around your needs
            </h2>
            <div className="space-y-4 text-base opacity-90 leading-relaxed">
              <p>
                We offer a range of dedicated services to support your
                healthcare journey with convenience, expertise, and confidence.
                From reliable home delivery of essential products to access to
                specialist nursing support, our services are built to make
                everyday care simple and stress-free.
              </p>
              <p>
                Our education hub offers resources to help you understand your
                condition, while virtual nursing provides expert support from
                home together delivering personalised care and better outcomes.
              </p>
            </div>

            <button className="inline-flex items-center gap-2 border-2 border-[#FFFFFF] rounded-full px-5 py-2 text-base font-semibold hover:bg-white hover:text-[#F26828] transition-all duration-300 group">
              Explore Our Services
              <CornerUpRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION: 4-Column Image Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-50 w-90 rounded-2xl overflow-hidden shadow-lg mb-4">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gray-300 group-hover:scale-105 transition-transform duration-500">
                  {/* Replace with Next.js <Image /> component */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-white text-center font-medium text-xl leading-snug">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
