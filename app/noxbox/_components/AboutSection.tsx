import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronRight, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F5F6F7] py-20 px-6 lg:px-16">
      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* LEFT IMAGE GRID */}
        <div className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-6">

            <div
              data-aos="fade-up"
              className="relative h-45 md:h-55 rounded-2xl overflow-hidden"
            >
              <img
                src={`/noxbox/assets/noxbox_product.jpg`}
                alt="product"
                className="object-cover w-full h-full"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="relative h-45 md:h-55 rounded-2xl overflow-hidden"
            >
              <img
                src={`/noxbox/assets/noxbox_care.png`}
                alt="baby"
                className="object-cover w-full h-full"
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative col-span-2 h-70 md:h-85 rounded-2xl overflow-hidden"
            >
              <img
                src={`/noxbox/assets/noxbox_office.png`}
                alt="building"
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-6">

          {/* Title */}
          <div className="flex items-center gap-3 mb-4" data-aos="fade-up">
            <img
              src={`/noxbox/assets/gemini_logo.png`}
              alt="gemini logo"
              width={34}
              height={34}
            />
            <h2 className="text-3xl font-semibold text-[#0E4B7F]">
              About Us
            </h2>
          </div>

          <h3
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg font-semibold text-gray-800"
          >
            Advancing Respiratory Care Through Innovation
          </h3>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-gray-600 leading-relaxed"
          >
            Established in December 2015, NOxBOX Ltd, a subsidiary of Linde
            Gas & Equipment Inc., specializes in the development and
            manufacture of inhaled nitric oxide delivery and monitoring
            systems for healthcare.
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8" />

          {/* Two Column Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Quality System */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h4 className="font-semibold text-gray-800 mb-3">
                Quality System
              </h4>

              <p className="text-gray-600 text-base leading-relaxed" >
                NOxBOX Ltd maintains a quality system for the design and
                development, manufacture, distribution, and service of gas
                delivery, monitoring, and detection equipment for medical
                applications.
              </p>
            </div>

            {/* Sustainability */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h4 className="font-semibold text-gray-800 mb-3">
                Sustainability in Focus
              </h4>

              <ul className="space-y-3 text-base text-gray-700">

                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#0E4B7F]" size={18} />
                  Climate Change
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#0E4B7F]" size={18} />
                  Safety, Health and Environment
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#0E4B7F]" size={18} />
                  People and Community
                </li>

                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#0E4B7F]" size={18} />
                  Integrity and Compliance
                </li>

              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8" />

          {/* CTA Button */}
          <div data-aos="fade-up" data-aos-delay="500">
            <button className="relative bg-[#1C8DBF] text-white px-8 py-4.5 font-medium flex items-center cursor-pointer">
              About NOxBOX Ltd

              <span className="absolute -right-6 w-12 h-12 bg-[#1C8DBF] rounded-full flex items-center justify-center shadow-lg border">
                {/* <ArrowRight size={18} /> */}
                <ChevronRight className="" size={22} />
              </span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}