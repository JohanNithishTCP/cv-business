import { ArrowRight } from "lucide-react";

// components/WhatWeDo.tsx
export default function WhatWeDo() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-6  gap-2 items-center">

        {/* LEFT */}
        <div data-aos="fade-right" className="col-span-4 ">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 text-red-500 px-4 py-1 rounded-full text-[18px] font-medium mb-6">
            <span className="w-2 h-2 bg-[#25477F] rounded-full"></span>
            What we do?
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-semibold leading-tight text-gray-900 max-w-[950px]">
            Advanced Diagnostic Technology for Smarter, Faster & Portable Patient Care
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mt-4 leading-relaxed max-w-[950px]">
          VectraCor uses its patented technology to design and develop medical devices to simplify and reduce costs of diagnostic testing as well as improve patient care. Our latest technology, VectraplexECG can detect ECG changes suggestive of a heart attack and derive a 15-22 lead ECG utilizing only 5-electrodes. We have a entire suite of products that are durable, mobile, and ready to turn an off-the-shelf tablet or laptop into a medical device. Our products are FDA cleared, CE marked, and VectraCor is ISO-13485 certified.

          </p>

          {/* Bullet Points */}
          <div className="mt-6 space-y-4">

            {[
              "High speed 85000 Patented technology designed to simplify diagnostic testing and reduce healthcare costs.",
              "Advanced VectraplexECG detects heart attack-related ECG changes using only 5 electrodes.",
              "Portable and durable solutions that convert tablets and laptops into medical devices.",
              "FDA cleared, CE marked products with ISO 13485 certified quality standards.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#25477F] text-white flex items-center justify-center text-md mt-1">
                  ✓
                </div>
                <p className="text-gray-600 text-md leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
             <button className="mt-8 font-bold  cursor-pointer inline-flex items-center gap-3 px-7 py-3 bg-[#25477F] text-white rounded-full hover:bg-[#102b57] transition  border-2 border-[#B5D2FF] hover:border-[#102b57]">
            Explore Our Solutions <span className="text-lg "><ArrowRight /></span>
          </button>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" className="col-span-2 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <img
              src="/vectracor/Orbit-Spirometer-ECG-ComboQRS.png"
              alt="ECG poster"
              className="rounded-lg w-100 h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}