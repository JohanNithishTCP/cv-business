import { ArrowRight, User } from "lucide-react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Banner() {
  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/arcomed/video.mp4" type="video/mp4" />
      </video> */}
      <DynamicVideoPlayer
        type="banner"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Optional Dark Overlay (improves text readability) */}
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 container mx-auto px-6 pb-20">
        <h1 className="text-[#FFFFFF] text-3xl lg:text-4xl font-semibold leading-tight">
          Welcome to the World’s Leading Manufacturer of
          <br /> Powered Orthopaedic Instruments
        </h1>
        <div className="relative inline-flex items-center mt-8">
          <button className="mt-4 bg-[#FFFFFF] text-[#5A6FB0] px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
            Explore Our Products
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
