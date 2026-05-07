// components/InnovationSection.js
import { ArrowRightIcon } from "lucide-react";

const features = [
  {
    title: "Touch to act Future-proof",
    description:
      "Arcomed allows you to benefit today from the future of MRI imaging technology. We were the first pump manufacturer to include advanced systems...",
    link: "#",
  },
  {
    title: "Drug Color Coding",
    description:
      "Because colour matters. Drug Colour Coding brings the infusion process to a higher level of safety, combining the name of the drug with colour coding...",
    link: "#",
  },
  {
    title: "Standardisation as a Key Success Factor",
    description:
      "Arcomed conceived the All-in-OneCONCEPT™ as a viable solution for employing the same device within all hospital environments...",
    link: "#",
  },
];

export default function InnovationSection() {
  return (
    <section className="bg-[#565A5C] py-20 lg:py-20 text-[#FFFFFF]">
      <div className="container mx-auto px-6 space-y-16">
        {/* Header Text */}
        <div className="text-center space-y-4 max-w-6xl mx-auto">
          <h2 className="text-2xl font-medium">The core of our success</h2>
          <p className="text-[#FFFFFF] text-base leading-relaxed px-4">
            Innovation is our passion. Innovation is our driver. Our innovation
            works to your benefit! As a global technology leader in infusion, we
            are constantly working to improve infusion within the daily clinical
            routine. Patient safety is our priority! Arcomed is known around the
            globe for its innovative solutions.
          </p>
        </div>

        {/* Content Grid */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column: Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] px-8 py-4 rounded-2xl shadow-lg transition-transform hover:scale-[1.01]">
                <h3 className="font-semibold text-xl text-[#353A3D] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#333333] text-base leading-relaxed mb-2">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="text-[#C10E1A] font-medium text-[18px] underline hover:text-red-800">
                  Learn More...
                </a>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Image */}
          <div data-aos="fade-up" className="relative h-full">
            <img
              src="/arcomed/innovation.png" // Replace with your image
              alt="Innovation in action"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Global CTA Button */}
        <div className="flex justify-center ">
          <div className="relative inline-flex items-center cursor-pointer">
            <button className="bg-[#C10E1A]  text-[#FFFFFF] text-base font-semibold px-8 h-12 rounded-full flex items-center pr-14 cursor-pointer">
              Explore Our Innovation
            </button>

            {/* Circle aligned with edge */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#565A5C] bg-[#353A3D] cursor-pointer rounded-full shadow-lg flex items-center justify-center">
              <ArrowRightIcon size={20} className="text-[#FFFFFF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
