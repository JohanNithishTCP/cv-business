import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-right">
            {/* Styled Image Container with source-inspired overlay/frame */}
            <div className="relative z-10 rounded-2xl overflow-hidden aspect-4/3 shadow-2xl shadow-black/5 group">
              <img
                src="/dm-orthotics/home/about.png"
                alt="Children in DMO Suits"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700 w-full h-full"
              />


            </div>


          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8" data-aos="fade-left">
            <h2 className="text-dark leading-[1.2] lg:leading-[1.15] text-3xl md:text-4xl lg:text-[28px]">
              Designing Innovative Orthotic Solutions for Children and Adults Across the Globe
            </h2>

            <div className="space-y-6 leading-relaxed">
              <div className="space-y-4 text-left md:text-justify text-muted/90">
                <p>
                  We are a world leading designer and manufacturer of dynamic movement orthoses which help both children and adults manage the physical effects of a wide range of neuromuscular conditions.
                </p>
                <p>
                  Manufactured in Cornwall but distributed to over 25 countries worldwide we strive to encourage independence for the user as well as an innovative approach to this part of the healthcare industry. This is heavily supported by our research and development team who work both clinically and with universities to ensure that our products are the best they can be.
                </p>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group transition-all">
              Know About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
