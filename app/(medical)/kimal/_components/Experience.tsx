import { ArrowUpRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Experience() {
  return (
    <section className="py-20 lg:py-28 bg-[#4782d3] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col text-justify" data-aos="fade-right">
            <h2 className="text-xl lg:text-3xl leading-[1.2] font-bold mb-6 text-white!">Our Knowledge & Experience</h2>
            <p className="text-base lg:text-lg leading-relaxed mb-4 text-blue-50">
              In the early 90s we launched the first cardiology procedure pack in the UK leading to the opening of our manufacturing facility in Bromsgrove.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-4 text-blue-50">
              Since our early days as distributors for well-known companies such as Arrow and Cordis, we have truly become an innovative manufacturer and supplier of medical devices, using this experience gained in our early days.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-4 text-blue-50">
              As a Company we are committed to the development of our team and we offer extensive training to our staff and international partners. We also possess a team of Clinical Specialists who are on hand to offer training and support to our customers at any time.
            </p>
            {/* <p className="text-base lg:text-lg leading-relaxed mb-10 text-blue-50 font-medium">
              We also possess a team of Clinical Specialists who are on hand to offer training and support to our customers at any time.
            </p> */}

            <div className="flex items-center">
              <Button text="Discover Our Experience" variant="white" />
            </div>
          </div>
          <div className="w-full aspect-[video] bg-[#ffffff15] rounded-3xl overflow-hidden relative border border-white/10 shadow-xl" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern Simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
}
