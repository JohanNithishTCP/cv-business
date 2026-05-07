import { ArrowRight } from "lucide-react";

// components/ClinicalResearch.tsx
export default function ClinicalResearch() {
  const logos = [
    "/vectracor/John-Hopkins.png",
    "/vectracor/University-of-basal.png",
    "/vectracor/Henery-Ford.png",
    "/vectracor/Milton-Keynes.png",
    "/vectracor/ESC.png",
    "/vectracor/SMG.png",
  ];

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#3f5f8f] overflow-hidden">

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/hex-pattern.png')] bg-repeat"></div>

      <div className="container relative mx-auto px-4 sm:px-6">

        {/* Top */}
        <div className="flex flex-col justify-center items-center gap-4 md:gap-6">

          {/* Left */}
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center">
              Clinical Research
             </h2>

            <p className="text-white/80 mt-4 max-w-full md:max-w-[1000px] leading-relaxed">
              VectraCor has received the support of Key Opinion Leaders (KOL) in the cardiology and acute care fields, and more specifically of the CEB® and derived ECG technology. The Company sought out physicians and researchers to conduct clinical studies and use the VectraplexECG System in their facilities. Some of the participating institutions and the studies that were conducted are outlined below.
            </p>
          </div>

          {/* Right CTA */}
          {/* <div data-aos="fade-left" className="w-full md:w-auto shrink-0">
            <button className="w-full cursor-pointer sm:w-auto bg-white text-[#333333]]-700 px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-md hover:bg-gray-100 transition border-2 border-[#B5D2FF]">
              Learn More <span className="text-lg"><ArrowRight /></span>
            </button>
          </div> */}
        </div>

        {/* Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12">

          {logos.map((logo, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={logo}
                alt="logo"
                className={`object-contain max-w -full ${i === 3 || i === 4 ? "h-auto max-h-[90px] lg:max-h-[110px]" : "h-[80px] lg:h-[160px]"}`}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}