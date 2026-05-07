import React from 'react';
import { Container } from '../ui/Container';
import { ArrowUpRight } from 'lucide-react';

export function ProductsSection() {
  return (
    <section className="bg-primary py-20 md:py-28 relative">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span
            data-aos="fade-up"
            className="text-white font-bold text-sm tracking-widest uppercase mb-4 block"
          >
            Products
          </span>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-2xl sm:text-3xl md:text-[36px] font-bold text-white mb-6 leading-tight"
          >
            Comprehensive Medical Solutions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-white/90 text-base md:text-[16px] leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Explore a comprehensive range of high-quality medical devices designed to support diverse clinical needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[23px] font-semibold text-text-dark pr-4">TiLOOP® Bra</h3>
              <button className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-all">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-text-muted text-[16px] leading-relaxed mb-8 grow">
              TiLOOP® Bra supports sub-pectoral breast reconstruction by extending the pectoral muscle after mastectomy.
            </p>
            <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden relative mt-auto flex items-center justify-center">
              {/* Placeholder for the image */}
              <img src={`/pmf-medical/home/product-1.png`} alt="TiLENE® Blue Mesh" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[23px] font-semibold text-text-dark pr-4">TiLENE® Blue Mesh</h3>
              <button className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-all">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-text-muted text-[16px] leading-relaxed mb-8 grow">
              TiLENE® Blue mesh offers hydrophilic, biocompatible support for all types of hernia repair procedures, ensuring improved patient outcomes.
            </p>
            <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden relative mt-auto flex items-center justify-center">
              <img src={`/pmf-medical/home/product-2.jpg`} alt="TiLENE® Blue Mesh" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="bg-white rounded-3xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-[23px] font-semibold text-text-dark pr-4">Biopsy Punch</h3>
              <button className="shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-opacity-90 transition-all">
                <ArrowUpRight size={18} strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-text-muted text-[16px] leading-relaxed mb-8 grow">
              The Kai biopsy punch enables precise skin biopsies across various areas while minimizing tissue trauma and ensuring accurate sampling.
            </p>
            <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden relative mt-auto flex items-center justify-center">
              <img src={`/pmf-medical/home/product-3.jpg`} alt="TiLENE® Blue Mesh" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
