import React from "react";
import { Download } from "lucide-react";

const Regulatory = () => {
  return (
    <section className="relative w-full bg-[#0475BC] py-16 px-6 overflow-hidden">
      {/* Background Decorative Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, [#FFFFFF] 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Wave/DNA graphic simulation */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/seiler/bg-2.jpg')" }} // replace with your image
      />

      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 text-[#FFFFFF] space-y-6">
          <div>
            <span className="text-[18px] font-medium border-b border-[#FFFFFF]/60 pb-1 inline-block mb-4">
              Regulatory Details
            </span>
            <h2 className="text-3xl md:text-[38px] font-semibold">
              Regulatory Information
            </h2>
          </div>

          <div className="space-y-4 text-[#FFFFFF] text-sm md:text-base leading-[1.9] text-justify">
            <p>
              At Seiler Medical, quality, safety, and regulatory compliance are
              foundational to everything we do. Our medical devices are
              manufactured in accordance with U.S.
            </p>
            <p>
              Food and Drug Administration (FDA) regulations and we maintain ISO
              certification, demonstrating our commitment to internationally
              recognized quality management standards.
            </p>
            <p>
              These certifications reflect our ongoing dedication to delivering
              reliable, compliant, and high-performance medical optical
              solutions. The documents below provide transparency into our
              regulatory status and quality system for our customers, partners,
              and regulatory bodies.
            </p>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="cursor-pointer flex items-center justify-between bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#333333F0] px-6 py-4 rounded-xl w-full sm:w-64 transition-colors shadow-lg group">
              <span className="font-semibold">FDA Certificate</span>
              <div className="bg-[#0077b6] p-1.5 rounded-full">
                <Download className="text-[#FFFFFF] w-6 h-6" />
              </div>
            </button>

            <button className="cursor-pointer flex items-center justify-between bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#333333F0] px-6 py-4 rounded-xl w-full sm:w-64 transition-colors shadow-lg group">
              <span className="font-semibold">ISO Certificate</span>
              <div className="bg-[#0077b6] p-1.5 rounded-full">
                <Download className="text-[#FFFFFF] w-6 h-6" />
              </div>
            </button>
          </div>
        </div>

        {/* Right Side: Image Card */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFFFF]/10">
            <img
              src="/seiler/regulatory.png" // Replace with your image
              alt="Medical professionals using Seiler equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regulatory;
