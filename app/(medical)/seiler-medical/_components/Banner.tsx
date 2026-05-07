import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full h-screen items-end flex  overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <DynamicVideoPlayer type="banner" className="absolute inset-0 w-full h-full object-cover z-0 " />
      </div>


      {/* Optional Dark Overlay (improves text readability) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 container mx-auto px-6 pb-14">
        <h1 className="text-[#FFFFFF] text-3xl lg:text-4xl font-semibold leading-tight">
          Precision Optics Trusted for Over 80 Years
        </h1>
        <h3 className="text-[#FFFFFF] text-3xl lg:text-[24px] font-semibold leading-tight mt-4">
          Advanced microscope solutions designed for medical and dental
          excellence.
        </h3>

        <button
          className="group mt-4 inline-flex items-center gap-3 cursor-pointer bg-[#0475BC] hover:bg-[#035f98] text-white px-6 py-2.5 
        rounded-full text-base font-semibold transition-all duration-300">
          <span>Learn More</span>

          <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center transform transition duration-300 group-hover:scale-110">
            <ArrowRight className="text-[#0475BC]" size={14} />
          </span>
        </button>
      </div>
    </section>
  );
}
