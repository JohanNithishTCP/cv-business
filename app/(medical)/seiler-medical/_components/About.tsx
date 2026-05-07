import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const About = () => {
  const features = [
    "Solutions designed for medical and dental professionals",
    "Wide range of diagnostic and surgical equipment",
    "Strong commitment to quality and customer satisfaction",
  ];

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Side: Image Container */}
        <div className="">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/seiler/about.png" // Replace with your actual image path
              alt="Seiler Medical Equipment Display"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[#0475BC] font-medium text-[18px] underline underline-offset-4 mt-2">
              About Us
            </span>
            <h2 className="text-3xl md:text-[38px] font-semibold text-[#050B20] leading-tight">
              Delivering Precision Optics & Trusted Medical Solutions for Over
              80 Years
            </h2>
          </div>

          <div className="space-y-4 text-[#555555] leading-[1.9] text-[16px] text-justify">
            <p>
              Seiler Medical has been providing high-quality optics and service
              to the medical and dental industry for over 80 years. Seiler
              offers a full line of Medical Microscope Products, including:
              Colposcopes, Ear Nose and Throat, Audiology, Compound and
              Laboratory Microscopes, and Surgical Loupes.
            </p>
            <p>
              For over 80 years, Seiler Medical has delivered high-quality
              optical solutions and trusted service to the medical and dental
              industries. Known for precision, innovation, and reliability,
              Seiler offers a comprehensive range of advanced microscopy and
              visualization products designed to support healthcare
              professionals across multiple specialties.
            </p>
          </div>

          {/* Feature List */}
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-[#555555]">
                <div className="w-5 h-5 bg-[#0475BC] rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                  <Image
                    src="/seiler/check.png"
                    alt="check"
                    width={12}
                    height={12}
                    className="object-contain invert"
                  />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="group flex cursor-pointer items-center gap-3 bg-[#0077b6] hover:bg-[#005f92] text-[#FFFFFF] px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg">
            <span className="font-semibold">Learn More About Us</span>
            <div className="bg-[#FFFFFF]  rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="text-[#0077b6] w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
