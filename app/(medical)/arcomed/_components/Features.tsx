import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRightIcon } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-gray-100 py-16 lg:py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN */}
        <div data-aos="fade-left" className="flex flex-col justify-between">
          {/* Text */}
          <div className="space-y-4  mb-4">
            <h2 className="text-[#C10E1A] font-semibold text-[22px]">
              All-in-One concept
            </h2>
            <p className="text-[#333333] text-base leading-relaxed">
              Chroma Series pumps are designed to be used within the UniQueDOC™
              docking station. Chroma Series pumps are compatible with the
              UniQue CONCEPT™ infusion data management system. Thanks to the
              innovative technology of the Chroma Series infusion pumps, no
              stand-alone pump is easier to use.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-full">
            <img
              src="/arcomed/feature.jpg"
              alt="Medical Pump Stack"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-between space-y-12">
          {/* Video */}
          <div className="relative h-full bg-[#FFFFFF] rounded-2xl  shadow-sm overflow-hidden">
            <DynamicVideoPlayer type="360" className="w-full h-full object-cover" />
          </div>

          {/* Button */}
          <div>
            <h3 className="text-[#353A3D] font-Semibold text-[22px] mb-8">
              One pump. All therapies.
            </h3>

            <div className="relative inline-flex items-center cursor-pointer">
              <button className="bg-[#C10E1A]  text-[#FFFFFF] text-base font-semibold px-8 h-12 rounded-full flex items-center pr-14 cursor-pointer">
                Explore Product
              </button>

              {/* Circle aligned with edge */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 border-2 border-[#FFFFFF] bg-[#353A3D] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
                <ArrowRightIcon size={20} className="text-[#FFFFFF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
