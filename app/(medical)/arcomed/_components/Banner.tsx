import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { User } from "lucide-react";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">
      {/* Background Video */}
      <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 container mx-auto px-6 pb-20">
        <h1 className="text-[#FFFFFF] text-3xl lg:text-4xl font-semibold leading-tight">
          Developed and manufactured in Zurich.
          <br /> Swiss Made.
        </h1>
        <div className="relative inline-flex items-center mt-8">
          <button className="bg-transparent border border-[#FFFFFF] text-[#FFFFFF] text-[18px] font-semibold px-8 h-12 rounded-full flex items-center pr-14">
            Explore Products
          </button>

          {/* Circle aligned with edge */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#FFFFFF] rounded-full bg-[#C10E1A] shadow-lg flex items-center justify-center">
            <User size={20} className="text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
