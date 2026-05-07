import React from "react";
import { ArrowRight, ArrowUpRight, CornerUpRight } from "lucide-react";

const Prevention = () => {
  const cards = [
    {
      title: "Validated Protection",
      description:
        "Our respiratory solutions are continuously revalidated to ensure high levels of security.",
    },
    {
      title: "Maximum Safety with Disposable Kits",
      description:
        "Our single-use MicroGard® II filters minimize cross-contamination risks and improves patient safety.",
    },
    {
      title: "German Engineering Excellence",
      description:
        "Manufactured in Germany, our products adhere to strict quality controls and process validation.",
    },
  ];

  return (
    <section
      style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
      className="py-16 px-4 md:px-8 lg:px-16 font-sans">
      <div className="container mx-auto">
        {/* Top Section: Testimonial and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-10">
          <div data-aos="fade-up" className="space-y-6">
            <span className="inline-block bg-[#FFFFFF26] text-[#FFFFFF] text-[14px] px-4 py-2 rounded-md">
              Infection Prevention
            </span>
            <h2 className="text-3xl md:text-[32px] font-bold text-[#FFFFFF] leading-tight">
              Highest Infection Prevention Standards – Past, Present, and Future
            </h2>
            <p className="text-base text-[#FFFFFF] text-justify">
              Infection prevention is an integral part of our innovation and
              product development. From our earliest designs to our latest
              advancements, we ensure that infection prevention remains a
              priority at every stage.
            </p>
            <p className="text-[#FFFFFF] leading-relaxed text-base text-justify">
              We work closely with infection prevention specialists to create
              industry-leading standards and detailed reprocessing instructions.
              Extensive filter efficiency and biocompatibility testing
              demonstrate, that our MicroGard® II filters and hardware meet
              rigorous standards. 1, 2, 3, 4,5
            </p>
            <button
              className="bg-[#fff] group flex items-center text-[#38679A] text-base px-5 py-2 rounded-md transition shadow-md cursor-pointer"
            >
              Explore More <ArrowRight size={16} className="ml-4 transition-transform duration-300 group-hover:translate-x-2" />
            </button>
          </div>

          <div className="lg:ml-10 relative h-85 md:h-100 rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/jaeger/prevention.png"
              alt="Service Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Section: Service Cards */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-[#5888B5] p-8 rounded-2xl text-[#FFFFFF] hover:bg-[#FFFFFF36] transition-colors cursor-pointer group">
              <h3 className="text-[24px] font-semibold mb-2">{card.title}</h3>
              <p className="text-[#FFFFFF]/90 text-base mb-2 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prevention;
