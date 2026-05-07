import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Innovation() {
  return (
    <section className="py-20 lg:py-28 bg-[#4782d3] text-white relative overflow-hidden border-t border-white/40">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="w-full aspect-[4/3] bg-[#ffffff15] border border-white/10 rounded-3xl overflow-hidden relative backdrop-blur-sm order-2 lg:order-1 shadow-xl" data-aos="fade-right">
            <img src="/kimal/images/innovative.jpg" alt="innovative" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col order-1 lg:order-2 text-justify" data-aos="fade-left">
            <h2 className="text-xl lg:text-3xl leading-[1.2] font-bold mb-6 text-white! tracking-tight">Innovative, High Quality Products</h2>
            <p className="text-base lg:text-lg leading-relaxed mb-4">
              We manufacture over 1 million procedure packs every year in our four 'Class 8' clean rooms using our extensive range of qualified medical grade components and considerable experience with assembly processes and test equipment.
            </p>
            <p className="text-base lg:text-lg leading-relaxed mb-8">
              Vastec, our dedicated research and development team, are based at our Bromsgrove facility where we have invested in a state of the art innovation centre. Opened in 2015, this facility allows us to develop our future products and continue to improve patient outcomes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              <div className="bg-white rounded-[20px] p-6 text-center text-slate-800 shadow-xl">
                <h4 className="text-base md:text-xl font-bold mb-2 tracking-wide">High-Volume Manufacturing</h4>
                <p className="text-sm lg:text-base leading-relaxed">We produce over 1 million procedure packs annually, ensuring consistent quality and reliable supply.</p>
              </div>
              <div className="bg-white rounded-[20px] p-6 text-center text-slate-800 shadow-xl">
                <h4 className="text-base md:text-xl font-bold mb-2 tracking-wide">Advanced Cleanroom Facilities</h4>
                <p className="text-sm lg:text-base leading-relaxed">Manufactured in Class 8 clean rooms using certified medical-grade components and strict standards.</p>
              </div>
            </div>

            <div className="flex items-center">
              <Button text="Explore Our Innovation" variant="outline-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Pattern Simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
    </section>
  );
}
