"use client";

import { ArrowRight } from "lucide-react";

export default function BeyondWhoWe() {

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-12">
      <div className="max-w-380 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <p className="text-green-600 font-medium text-lg mb-2">
            Who We Are
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-snug">
            Built on a Legacy of Innovation
          </h2>

          <div className="mt-4 space-y-4 text-gray-500 text-base leading-relaxed">
            <p>
              Beyond Air is spearheaded by a dedicated team focused on transforming nitric oxide therapy through the innovative LungFit product family. This groundbreaking technology comes from the same brilliant minds that created the first nitric oxide delivery system, along with other systems currently utilized around the globe.
            </p>

            <p>
              The Beyond Air team is setting new benchmarks in the industry by drawing on their extensive clinical expertise, innovative spirit, and unwavering passion. With a firm commitment to unlocking the potential of nitric oxide, they are not just changing the landscape of care; they are actively working to enhance and transform the lives of countless individuals.
            </p>
          </div>

          {/* BUTTON */}
          <button className="mt-6 flex items-center gap-3 bg-[#00A4E4] text-white px-5 py-3 rounded-full text-base font-medium hover:bg-[#00a3e4cc] transition cursor-pointer">
            Learn More About Us
            <span className="bg-white text-blue-600 rounded-full p-1">
              <ArrowRight size={16} />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div
          data-aos="fade-left"
          className="w-full h-full flex justify-center"
        >
          <div className="bg-[#E6E6E6] rounded-2xl p-6 w-full max-w-full shadow-sm">
            
            {/* Replace this with your image */}
            <div className="w-full h-100 rounded-xl flex items-center justify-center">
             <img src="/beyond-air/assets/beyond-lungfit.png" alt="Beyond Who We" className="w-full h-full object-contain" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}