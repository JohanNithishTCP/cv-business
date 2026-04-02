import React from 'react';
import { Container } from '../ui/Container';
import { ArrowUpRight } from 'lucide-react';

export function NewsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
            News & Updates
          </span>
          <h2 className="text-3xl md:text-[36px] font-bold text-[#000] mb-6 leading-tight">
            Stay Updated with pfm medical
          </h2>
          <p className="text-text-muted text-base md:text-[16px] leading-relaxed max-w-3xl mx-auto">
            Stay updated with the latest developments at pfm medical, including new innovations, leadership updates, research collaborations, and advancements in medical technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {/* Card 1 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="w-full aspect-square md:aspect-4/3 bg-gray-100 rounded-4xl overflow-hidden relative flex items-center justify-center">
              <img src={`/pmf-medical/home/news-1.jpg`} alt="News 1" className="w-full h-full object-cover" />
            </div>
            <div className="pt-6 px-2 flex justify-between items-start">
              <p className="text-text-dark font-medium text-[16px] leading-relaxed pr-6 line-clamp-3">
                Another site for the Magnetic Resonance Outcome (MRO) study in Europe
              </p>
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="w-full aspect-square md:aspect-4/3 bg-gray-100 rounded-4xl overflow-hidden relative flex items-center justify-center">
              <img src={`/pmf-medical/home/news-2.jpg`} alt="News 1" className="w-full h-full object-cover" />
            </div>
            <div className="pt-6 px-2 flex justify-between items-start">
              <p className="text-text-dark font-medium text-[16px] leading-relaxed pr-6 line-clamp-3">
                pfm Forceps EWF 600 - The first wireless electronic forceps for the histologic lab is now available
              </p>
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform"
          >
            <div className="w-full aspect-square md:aspect-4/3 bg-gray-100 rounded-4xl overflow-hidden relative flex items-center justify-center">
              <img src={`/pmf-medical/home/news-3.png`} alt="News 1" className="w-full h-full object-cover" />
            </div>
            <div className="pt-6 px-2 flex justify-between items-start">
              <p className="text-text-dark font-medium text-[16px] leading-relaxed pr-6 line-clamp-3">
                University Hospital of North Tees buys PathLite Compact systems
              </p>
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-110">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
