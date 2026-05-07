import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

// components/VectraSection.tsx
export default function VectraSection() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-[url('/vectracor/background_pattern.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden flex items-center justify-center">

      {/* Pattern Layer */}
      <div className="absolute inset-0 bg-[#26487E]/90"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-6 gap-8 md:gap-12">

        {/* LEFT */}
        <div data-aos="fade-right" className="lg:col-span-4">
          <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
            VectraplexECG
          </h2>

          <p className="text-white/80 text-sm md:text-base">
            VectraplexECG (VECG) provides the Cardiac Electrical Biomarker, CEB&reg;,
            a technology to detect ECG changes suggestive of acute ischemic injury, including AMI. Providing a powerful diagnostic test right in your ECG machine. VectraplexECG can derive a 12 to 15-lead ECG report with just 5 electrodes.
          </p>

          {/* Media Box */}
          <div className="mt-8 bg-gray-900 rounded-xl shadow-md h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] relative overflow-hidden">
            <DynamicVideoPlayer
              type="360"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div data-aos="fade-left" className="lg:col-span-2 flex flex-col justify-between gap-8 md:gap-0">

          {/* Feature Card */}
          <div className="bg-[#285092]/80 rounded-xl p-6 md:p-10 shadow-lg space-y-6 md:space-y-8 border border-white/30">

            {[
              {
                title: "Smart",
                desc: "Comes with our innovative CEB® technology",
                icon: "/vectracor/idea.png"
              },
              {
                title: "Efficient",
                desc: "Use just 5-electrodes to derive a 12 to 22-lead ECG",
                icon: "/vectracor/efficiency.png"
              },
              {
                title: "Accurate",
                desc: "Review our clinical validation",
                icon: "/vectracor/accuracy.png"
              },
              {
                title: "Reliable",
                desc: "3-year warranty included",
                icon: "/vectracor/dependable.png"
              },
              {
                title: "Regulatory Approval",
                desc: "FDA Cleared and CE Marked",
                icon: "/vectracor/quality.png"
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-5 items-center">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shrink-0">
                  {item.icon && <img src={item.icon} alt={item.title} className="w-7 h-7 md:w-8 md:h-8 object-contain" />}
                </div>
                <div>
                  <h4 className="text-white text-base md:text-lg font-bold">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-xs md:text-base mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="md:mt-5 lg:mt-0">
            <p className="text-white mb-4 text-sm md:text-base font-semibold">
              Meet the VectraplexECG, Our Smartest ECG Ever.
            </p>

            <button className="bg-white font-bold cursor-pointer text-[#333333] px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-gray-100 transition border-2 border-[#B5D2FF] text-sm md:text-base">
              View Specifications <span><ArrowRight className="mt-0.3" /></span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
