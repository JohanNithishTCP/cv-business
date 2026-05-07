import React from 'react';
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function VesperMask() {
  const points = [
    "Soft and skin-friendly headgear fabric helps patients comfortably adapt to treatment",
    "Quiet honeycomb vent reduces airflow erosion intensity for peaceful sleep",
    "Quick release connector rapidly and easily separates or connects mask and the tube",
  ];

  return (
    <section
      className="w-full py-16 md:py-24 text-white relative bg-cover bg-bottom"
      style={{ backgroundImage: "url('/sunset-healthcare/home/bg.jpg')" }}
    >
      {/* Color overlay over the background image */}
      <div className="absolute inset-0 bg-[#54626d] opacity-97 z-0"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <h2 data-aos="fade-up" className="text-[25px] md:text-[30px] font-medium mb-6 leading-[1.2]">CM207 Vesper Nasal CPAP Mask</h2>
            <div data-aos="fade-up" data-aos-delay="100" className="space-y-4 text-[17px] text-justify leading-[1.7] text-white/90 mb-8">
              <p>
                Sunset's Vesper Nasal Mask presents the latest in CPAP mask design to provide patients with fresh options for maximum comfort. Vesper masks introduce a pared back fit, with up-to-date design details like the ergonomic stabilizing arms that curve up to the temples for patients who prefer to forgo a forehead piece. Vesper masks provide more visibility, a feeling of openness and a lighter fit.
              </p>
              <p data-aos="fade-up" data-aos-delay="200">
                The flexible interface moves with side or stomach sleepers. The open structure eliminates forehead marks. Vesper masks also feature a 360-degree swivel elbow to prevent awkward tube tangles. Vesper masks bring balance and calm to the nighttime, softening the edges of sleep.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {points.map((point, idx) => (
                <li key={idx} data-aos="fade-up" data-aos-delay={300 + (idx * 100)} className="flex gap-3 text-[17px] text-white">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-aos="fade-left" data-aos-delay="200" className="w-full lg:h-[500px] relative rounded-2xl overflow-hidden border border-gray-200 aspect-video">
            <DynamicVideoPlayer
              type="short-1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
