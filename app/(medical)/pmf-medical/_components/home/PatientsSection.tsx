import React from 'react';
import { Container } from '../ui/Container';
import { CheckCircle2 } from 'lucide-react';

export function PatientsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div
            data-aos="fade-right"
            className="flex flex-col"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4">
              Patients
            </span>
            {/* The title has a distinctly warm/brown hue based on the image */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-bold text-[#000] mb-4 md:mb-6 leading-tight">
              Innovative and Reliable Medical Solutions
            </h2>
            <p className="text-text-muted text-sm sm:text-base md:text-[16px] mb-8 leading-relaxed">
              Implantable port systems are used for long-term delivery of medicines and fluids, reducing the need for repeated needle punctures. They enhance patient comfort, support safer and more efficient treatment, and allow patients to maintain a more normal and independent lifestyle with fewer limitations.
            </p>

            <h3 className="font-bold text-text-dark text-[16px] mb-5">
              Implanting the Port
            </h3>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" data-aos-delay="100" className="flex items-start gap-2">
                <CheckCircle2 color="white" fill="currentColor" strokeWidth={2.5} className="text-primary mt-0.5 shrink-0 w-[25px] h-[25px]" />
                <p className="text-text-muted text-[16px] leading-relaxed">
                  Performed as a short and minimally invasive outpatient procedure
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-2">
                <CheckCircle2 color="white" fill="currentColor" strokeWidth={2.5} className="text-primary mt-0.5 shrink-0 w-[25px] h-[25px]" />
                <p className="text-text-muted text-[16px] leading-relaxed">
                  A catheter is inserted into a selected blood vessel and guided to the heart
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-2">
                <CheckCircle2 color="white" fill="currentColor" strokeWidth={2.5} className="text-primary mt-0.5 shrink-0 w-[25px] h-[25px]" />
                <p className="text-text-muted text-[16px] leading-relaxed">
                  Once healed, patients can resume normal daily activities without limitations
                </p>
              </div>
              <div data-aos="fade-up" data-aos-delay="400" className="flex items-start gap-2">
                <CheckCircle2 color="white" fill="currentColor" strokeWidth={2.5} className="text-primary mt-0.5 shrink-0 w-[25px] h-[25px]" />
                <p className="text-text-muted text-[16px] leading-relaxed">
                  Patients can usually return home on the same day
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div
            data-aos="fade-left"
            className="relative w-full aspect-video bg-primary/10 rounded-xl overflow-hidden flex items-center justify-center"
          >
            <video
              src="https://cdn.clinicalvisuals.com/medical/pfm_medical/short_clips/clip_02.webm"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* The gradient fade overlay shown in the mock */}
            {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/60 to-transparent"></div> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
