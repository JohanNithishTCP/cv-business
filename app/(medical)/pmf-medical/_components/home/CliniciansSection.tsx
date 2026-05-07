import React from 'react';
import { Container } from '../ui/Container';
import { Check, ArrowUpRight } from 'lucide-react';

const CustomCheckSquareWhite = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center rounded bg-white text-primary ${className}`}>
    <Check size={16} strokeWidth={3} />
  </div>
);

export function CliniciansSection() {
  return (
    <section className="bg-primary py-20 md:py-28 relative">
      <Container>
        <div className="text-center max-w-5xl mx-auto mb-12">
          <span className="text-white font-bold text-sm tracking-widest uppercase mb-4 block">
            Clinicians
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[36px] font-bold text-white mb-6 leading-tight">
            Innovative Solutions for Improved Surgical Outcomes
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center">

          {/* Left Column - Image Placeholder */}
          <div
            data-aos="fade-right"
            className="relative w-full aspect-video bg-primary/10 rounded-xl overflow-hidden flex items-center justify-center"
          >
            <video
              src="https://cdn.clinicalvisuals.com/medical/pfm_medical/short_clips/clip_01.webm"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* The gradient fade overlay shown in the mock */}
            {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/60 to-transparent"></div> */}
          </div>

          {/* Right Column - Content */}
          <div
            data-aos="fade-left"
            className="flex flex-col text-white"
          >
            
            <p className="text-white/90 text-sm sm:text-base md:text-[16px] mb-8 leading-relaxed">
              The ClearCoast™ MRI System enables precise intraoperative margin assessment,
              helping reduce repeat surgeries and preserve healthy tissue during
              breast-conserving procedures.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {/* Feature 1 */}
              <div data-aos="fade-up" data-aos-delay="100" className="flex gap-4 items-start">
                <div className="shrink-0 mt-1">
                  <CustomCheckSquareWhite className="w-5 h-5 md:w-[18px] md:h-[18px]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-[16px] mb-1">Easy operation and simple interpretation</h3>
                  <p className="text-white/80 text-[16px] leading-relaxed">
                    Easy-to-use system with clear, color-coded results that can be operated by trained staff without specialized expertise.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div data-aos="fade-up" data-aos-delay="200" className="flex gap-4 items-start">
                <div className="shrink-0 mt-1">
                  <CustomCheckSquareWhite className="w-5 h-5 md:w-[18px] md:h-[18px]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-[16px] mb-1">Fewer follow-up operations</h3>
                  <p className="text-white/80 text-[16px] leading-relaxed">
                    Enhances detection of positive margins during surgery, reducing repeat procedures by up to 80%.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button className="group inline-flex items-center gap-3 bg-white text-primary font-semibold py-2.5 pl-6 pr-2.5 rounded-full hover:bg-gray-50 transition-colors">
                More About
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-110">
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
