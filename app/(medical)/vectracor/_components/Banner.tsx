import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight, Link } from "lucide-react";

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <DynamicVideoPlayer
        type="banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />


      {/* Overlay Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" /> */}

      {/* Content */}
      {/* <div className="relative z-10 h-full flex items-center pt-40 md:pt-60 lg:pt-80">
        <div
          className="container mx-auto px-6"
          data-aos="fade-up"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide">
            THE V300 HOLTER
          </h1>
          <p className="text-white mt-4 text-base md:text-lg max-w-lg leading-relaxed">
            Our new Holter hardware and software is the perfect addition to your practice. The easy-to-use software will help make your workflow more efficient!
          </p>
          <button className="mt-8 inline-flex items-center gap-3 px-7 py-3 bg-[#25477F] text-white rounded-full hover:bg-[#102b57] transition font-medium">
            Learn More <span className="text-lg">→</span>
          </button>
        </div>
      </div> */}
      {/* 📝 Content */}
      <div className="relative z-10 flex  h-full">
        <div data-aos="fade-up" className="container mx-auto px-6">
          <h1 className="text-[#FFFFFF] text-2xl md:text-[36px] font-semibold max-w-3xl leading-relaxed mt-120 md:mt-155 lg:mt-150">
            THE V300 HOLTER
          </h1>
          <p className="text-white mt-4 text-base md:text-lg max-w-lg leading-relaxed">
            Our new Holter hardware and software is the perfect addition to your practice. The easy-to-use software will help make your workflow more efficient!
          </p>
          <button className="mt-8 cursor-pointer inline-flex items-center gap-2 px-7 py-2 bg-[#25477F] text-white rounded-full hover:bg-[#102b57] transition font-bold border-2 border-[#B5D2FF] hover:border-[#102b57]">
            Learn More<span className="text-lg "><ArrowRight /></span>
          </button>
        </div>
      </div>
    </section>
  );
}