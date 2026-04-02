import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Check, ArrowUpRight, CheckSquareIcon } from 'lucide-react';

const CustomCheckSquare = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center rounded bg-primary text-white ${className}`}>
    <Check size={16} strokeWidth={3} />
  </div>
);

export function AboutUsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Placeholder */}
          <div
            data-aos="fade-right"
            className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[750px] bg-gray-100 rounded-md overflow-hidden flex items-center justify-center border border-gray-200"
          >
            <img src={`/pmf-medical/home/about.jpg`} alt="About Us" className="w-full h-full object-cover" />
          </div>

          {/* Right Column - Content */}
          <div
            data-aos="fade-left"
            className="flex flex-col"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-text-dark mb-4 md:mb-6 leading-tight">
              Advanced Healthcare Solutions Across Specialties
            </h2>
            <p className="text-text-muted text-sm sm:text-base md:text-[16px] mb-8 text-justify leading-relaxed">
              pfm medical UK Limited is the UK subsidiary of pfm medical gmbh. Located in the
              Cheshire countryside, we are committed to supplying high quality products to the NHS,
              Private Hospitals, Research and Development Centre's, Laboratories and all other care
              services. We have been established since 2007 and have a strong team of clinical sales
              consultants and expert support staff.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Feature 1 */}
              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-3">
                <div className="shrink-0 mt-1.5">
                  <CustomCheckSquare className="text-primary w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-text-dark text-base md:text-[17px] mb-1">Vascular Access</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    Complete solutions including ports, PICCs, and needles, supported by expert training and education.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div data-aos="fade-up" data-aos-delay="200" className="flex gap-3">
                <div className="shrink-0 mt-1.5">
                  <CustomCheckSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-text-dark text-base md:text-[17px] mb-1">Histotechnology</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    Advanced laboratory products and equipment designed for accurate tissue processing, from specimen preparation to microtomy and analysis.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div data-aos="fade-up" data-aos-delay="300" className="flex gap-3">
                <div className="shrink-0 mt-1.5">
                  <CustomCheckSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-text-dark text-base md:text-[17px] mb-1">Cardio-Vascular Technologies</h3>
                  <p className="text-text-muted text-sm md:text-base leading-relaxed">
                    Innovative cardiovascular devices including occluders, catheters, and stents for precise and effective interventional procedures.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button className="group inline-flex items-center gap-3 bg-primary text-white font-semibold py-2.5 pl-6 pr-2.5 rounded-full hover:opacity-90 transition-opacity">
                More About
                <span className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
