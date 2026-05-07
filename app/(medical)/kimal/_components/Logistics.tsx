"use client";

import { ArrowUpRight, Check, ChevronRight, ChevronsRight } from "lucide-react";
import Button from "./Button";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";


export default function Logistics() {

  return (
    <section className="py-20 lg:py-28 bg-[#4782d3] text-white relative overflow-hidden border-t-2 border-white/10">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col" data-aos="fade-right">
            <h2 className="text-xl lg:text-3xl leading-[1.2] font-bold mb-6 text-white! tracking-tight">Delivery On Time, Every Time</h2>
            <p className="text-base lg:text-lg leading-relaxed mb-4 text-justify">
              We are committed to ensuring that your orders are delivered on time, every time, and we have a dedicated support team who strive to achieve this. Our customised logistic solutions also allow us to meet our customers' individual requirements.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-6 text-justify">
              With our customised logistics solutions, we are able to adapt to your specific requirements, offering flexible and efficient delivery options tailored to your needs.
            </p>
            <ul className="space-y-3 mb-10 text-base lg:text-lg">
              <li className="flex gap-3 items-center"><span className="text-white"><ChevronsRight className="w-4 h-4" /></span> Strong commitment to on-time delivery, every time</li>
              <li className="flex gap-3 items-center"><span className="text-white"><ChevronsRight className="w-4 h-4" /></span> Well-structured processes to ensure consistent performance</li>
              <li className="flex gap-3 items-center"><span className="text-white"><ChevronsRight className="w-4 h-4" /></span> Efficient order management from processing to dispatch</li>
              <li className="flex gap-3 items-center"><span className="text-white"><ChevronsRight className="w-4 h-4" /></span> Continuous monitoring to avoid delays and disruptions</li>
            </ul>
            <div className="flex items-center">
              <Button text="Request Logistics Support" variant="outline-white" />
            </div>
          </div>
          <div className="w-full aspect-[video] rounded-3xl overflow-hidden relative border border-white/10 shadow-xl" data-aos="fade-left">
            <DynamicVideoPlayer
              type="short-1"
              className="w-full h-full object-cover z-0"
            />
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern Simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
}
