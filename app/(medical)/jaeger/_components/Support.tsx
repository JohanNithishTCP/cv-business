import React from "react";
import { ArrowUpRight, CornerUpRight } from "lucide-react";

const Support = () => {
  const cards = [
    {
      title: "Vyntus™ Protect",
      description:
        "Keep your devices running baseoothly and securely with expert field service support.",
    },
    {
      title: "Professional Service",
      description:
        "Seamlessly connect and maintain your Jaeger Medical devices for improved efficiency and security.",
    },
    {
      title: "Training",
      description:
        "Enhance your team's expertise with comprehensive training and ongoing education.",
    },
  ];

  return (
    <section className="bg-[#5888B5]/10 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Top Section: Testimonial and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-6">
          <div data-aos="fade-up" className="space-y-6">
            <span className="inline-block bg-[#00689B]/12 text-[#00689B] text-[14px] px-4 py-2 rounded-md">
              Comprehensive Service & Support
            </span>
            <h2 className="text-3xl md:text-[32px] font-bold text-[#1F242E] leading-tight">
              This is my third PFT interface install, and it's been my smoothest go-live yet.
            </h2>
            <p className="text-base text-[#333333]">
              — RCP Therapist, Pulmonary Function Lab
            </p>
            <p className="text-[#333333] leading-relaxed text-base text-justify">
              Our service offerings are designed to support every stage of your
              Jaeger Medical device lifecycle—from initial setup to long-term
              maintenance and user education. Our Field Service team, through
              the Vyntus™ Protect Program, ensures optimal device performance
              with proactive maintenance and expert troubleshooting. Integration
              Services provide seamless connectivity by integrating your devices
              with network databases or EMR systems, improving cybersecurity and
              efficiency. To maximize user expertise, our Training Services
              deliver hands-on instruction, advanced technical courses and free
              value-added webinars, empowering your team with the knowledge they
              need to succeed.
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="lg:ml-10 relative h-85 md:h-110 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/jaeger/support.png"
              alt="Service Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              data-aos="fade-up"
              key={index}
              style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
              className="p-8 rounded-2xl text-[#FFFFFF] hover:opacity-90 transition-all cursor-pointer group shadow-lg">
              <h3 className="text-[24px] font-semibold mb-4">{card.title}</h3>
              <p className="text-[#FFFFFF]/90 text-base mb-8 leading-relaxed">
                {card.description}
              </p>
              <button className="flex items-center gap-1 text-base font-medium">
                Start Here <CornerUpRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Support;
