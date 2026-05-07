import { ArrowRight } from "lucide-react";

// components/About.tsx
export default function About() {
  return (
    <section className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6">

        {/* LEFT CONTENT */}
        <div data-aos="fade-right">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 text-red-500 px-4 py-1 rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-medium mb-4 md:mb-6">
            <span className="w-2 h-2 bg-[#25477F] rounded-full"></span>
            About Us
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl max-w-2xl font-semibold leading-tight text-gray-900">
            Advanced Technology for Faster 
            Diagnosis
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            VectraCor’s mission is to develop and commercialize a portfolio of
            products that utilize its patented intellectual property, simplifying
            and providing a faster method for diagnosis, prevention, and treatment
            of cardiac, pulmonary, and neurological diseases.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-6">

            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center">
                <img src="/vectracor/ecg-machine.png" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Real-Time Cardiac Insights
                </h4>
                <p className="text-base text-gray-500">
                  Accurate ECG data for faster clinical decisions.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 rounded-lg flex items-center justify-center">
                <img src="/vectracor/ct-scan.png" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">
                  Advanced Diagnostic Technology
                </h4>
                <p className="text-base text-gray-500">
                  Powered by patented cardiac biomarker innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Paragraph */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            VectraCor has developed and patented a technology that will differentiate
            the current mature monitoring market by enhancing the cardiac monitor to
            incorporate more technology into one device from only 3 leads (5 electrodes).
          </p>

          {/* CTA */}
          {/* <button className="mt-8 bg-blue-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-blue-800 transition">
            Explore Solutions →
          </button> */}

          <button
            // style={{ background: "linear-gradient(180deg, #1E5286 0%, #4A76A8 100%)" }}
            className="mt-8 group font-bold flex items-center justify-center sm:justify-start min-h-[44px] bg-[#25477F] text-[#FFFFFF] px-6 py-2 rounded-full text-base transition shadow-md cursor-pointer border-2 border-[#B5D2FF] hover:border-[#102b57] w-full sm:w-auto"
          >
            Learn More <ArrowRight size={16} className="ml-2 mt-0.5 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative order-first lg:order-last" data-aos="fade-left">

          {/* Floating Card */}
          {/* <div className="absolute top-6 left-6 bg-blue-800 text-white p-6 rounded-xl shadow-lg z-20 max-w-[220px]">
            <h3 className="text-lg font-semibold leading-snug">
              18 Years of Trusted Medical Solutions
            </h3>
          </div> */}

          {/* Image */}
          <img
            src="/vectracor/about.png"
            alt="About VectraCor"
            className="w-full h-56 sm:h-72 md:h-96 lg:h-full"
          />
        </div>

      </div>
    </section>
  );
}