import React from "react";
import { CheckCircle2 } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

const Health = () => {
  return (
    <div className="bg-white">
      {/* --- Top Header Section --- */}
      <section className="container mx-auto px-6 pt-16 lg:pt-20 text-center">
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-[32px] font-medium text-[#009B43] mb-4">
          Advanced Devices for Modern Healthcare
        </h1>
        <p
          data-aos="fade-up"
          className="max-w-7xl mx-auto text-[#333333] leading-relaxed text-base">
          We offer a comprehensive range of advanced medical devices designed to
          support healthcare professionals across multiple specialties. From
          diabetes care and infusion solutions to vascular access and
          interventional technologies, our products are developed with
          precision, safety, and reliability in mind.
        </p>

        {/* Tab Selection Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button
            data-aos="fade-up"
            className="w-80 px-8 py-2 rounded-full bg-linear-to-r from-[#009B43] to-[#2353A3] text-[#FFFFFF]  font-semibold uppercase text-[18px] shadow-lg hover:opacity-90 transition-all cursor-pointer">
            Endoscopic Accessories
          </button>
          <div
            data-aos="fade-up"
            className="w-full sm:w-fit p-0.5 rounded-full bg-linear-to-r from-[#009B43] to-[#2353A3]">
            <button className="w-full sm:w-auto px-6 py-2 rounded-full bg-white text-[#333333] text-[16px] sm:text-[18px] font-semibold hover:bg-[#2353A3] hover:text-white transition text-center cursor-pointer">
              Single-Use Endoscopes
            </button>
          </div>
        </div>
      </section>

      {/* --- Feature Section --- */}
      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col xl:flex-row items-center gap-10">
          {/* Left: Placeholder for the Image */}
          <div
            data-aos="fade-up"
            className="w-full xl:w-1/2 aspect-video bg-slate-100 rounded-2xl border-2 border-dashed border-slate-200 relative overflow-hidden">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Right: Content Block */}
          <div className="w-full xl:w-1/2 space-y-6">
            <div data-aos="fade-up">
              <h2 className="text-[32px] font-medium text-[#009B43] mb-2 leading-tight ">
                Enhancing Endoscopy with Innovation and Reliability
              </h2>
              <p className="text-[#333333] text-base leading-relaxed text-justify">
                Single-use endoscopes and endoscopic accessories are designed to
                support safe, efficient, and high-precision procedures. Our
                disposable endoscopes ensure optimal hygiene and convenience,
                while our range of accessories—including snares, clips, needles,
                and forceps—enhance control and reliability, helping healthcare
                professionals achieve better clinical outcomes.
              </p>
            </div>

            {/* List Items */}
            <div className="space-y-4">
              <div data-aos="fade-up" className="flex items-start gap-4">
                <img
                  src="/promisemed/check.png" // place inside public/icons/
                  alt="check"
                  className="w-6 h-6 shrink-0 mt-1 object-contain"
                />
                <div>
                  <h3 className="font-medium text-[#333333] text-xl mb-1">
                    Experience Single-Use Safety & Expertise
                  </h3>
                  <p className="text-[#333333] text-base">
                    Ensures maximum hygiene and eliminates cross-contamination
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="flex items-start gap-4">
                <img
                  src="/promisemed/check.png" // place inside public/icons/
                  alt="check"
                  className="w-6 h-6 shrink-0 mt-1 object-contain"
                />
                <div>
                  <h3 className="font-medium text-[#333333] text-xl mb-1">
                    Comprehensive Product Range
                  </h3>
                  <p className="text-[#333333] text-base">
                    Includes cystoscope, ureteroscope, choledochoscope,
                    bronchoscope, and accessories
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="flex items-start gap-4">
                <img
                  src="/promisemed/check.png" // place inside public/icons/
                  alt="check"
                  className="w-6 h-6 shrink-0 mt-1 object-contain"
                />
                <div>
                  <h3 className="font-medium text-[#333333] text-xl mb-1">
                    Precision & Performance
                  </h3>
                  <p className="text-[#333333] text-base">
                    Engineered for accurate, reliable, and efficient clinical
                    outcomes
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              data-aos="fade-up"
              className="px-10 py-3 rounded-full bg-linear-to-r from-[#009B43] to-[#2353A3] text-[#FFFFFF] font-semibold text-[18px] shadow-md hover:shadow-xl transition-all cursor-pointer">
              Learn More &gt;&gt;&gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Health;
