import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import { ArrowRight } from "lucide-react";

export default function SternHero() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* VIDEO (Future Ready) */}
        <div className="absolute inset-0 w-full h-full">
          {/* Replace with <video> later */}
          <DynamicVideoPlayer type="banner" className="absolute top-0 left-0 w-full h-full object-cover" />

        </div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-380 mx-auto w-full px-6 pb-24">
            <div
              data-aos="fade-up"
              className="max-w-xl text-white"
            >
              <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                Reliable Healthcare, Made Accessible
              </h1>

              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Reliable, affordable medical devices designed to meet global
                standards—helping healthcare systems deliver safe, efficient,
                and future-ready patient care.
              </p>

              <button className="inline-flex items-center gap-2 bg-[#1E6FB6] hover:bg-[#1E6FB6]/90 cursor-pointer transition font-bold text-white text-base px-5 py-3 rounded-md">
                View Products
                <span><ArrowRight /></span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
