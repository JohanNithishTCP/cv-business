
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function MedasHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* VIDEO BACKGROUND (replace src later) */}
      <div className="absolute inset-0">

        <DynamicVideoPlayer
          type="banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/40"></div> */}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center lg:justify-start px-6 sm:px-10 mt-16 sm:mt-20 lg:mt-30 lg:ml-40">
        <div data-aos="fade-up" className="max-w-2xl text-center lg:text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            People Thinking Quality
          </h1>

          <button className="bg-[#0287C3] cursor-pointer hover:bg-[#006AB1] text-white px-6 py-3 rounded-md flex items-center gap-2 transition mx-auto lg:mx-0">
            Explore Products <span><ArrowRight /></span>
          </button>
        </div>
      </div>

      {/* Slider Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <button className="cursor-pointer bg-white/20 hover:bg-white/40 text-white w-11 h-11 lg:w-10 lg:h-10 rounded-md flex items-center justify-center">
          <ArrowLeft size={15} />
        </button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center">
        <button className="cursor-pointer bg-white/20 hover:bg-white/40 text-white w-11 h-11 lg:w-10 lg:h-10 rounded-md flex items-center justify-center">
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-10 sm:w-16 md:w-24 h-1.5 bg-white rounded-full cursor-pointer"></div>
        <div className="w-10 sm:w-16 md:w-24 h-1.5 bg-white/50 rounded-full cursor-pointer"></div>
        <div className="w-10 sm:w-16 md:w-24 h-1.5 bg-white/50 rounded-full cursor-pointer"></div>

      </div>
    </section>
  );
}