import { ArrowRight, Check } from "lucide-react";

export default function ProductShowcase() {
  const benefits = [
    "Pelvic stability",
    "Improved posture",
    "Increased sensory awareness",
    "Improved muscle function",
    "Improvement in hip and knee alignment",
    "Pain relief"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Video Placeholder Area */}
          <div className="w-full lg:w-1/2 order-1 lg:order-1" data-aos="fade-right">
            <div className="w-full relative mx-auto shadow-2xl rounded-2xl md:rounded-[32px] overflow-hidden bg-[#F0F0F0]">
              <div className="aspect-[16/11]">
                <video src="https://cdn.clinicalvisuals.com/medical/DM-Orthotics/360/360_product.webm" autoPlay loop muted className="w-full h-full object-cover"></video>
              </div>
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-2 text-left" data-aos="fade-left">
            <h2 className="text-dark leading-[1.2] text-3xl md:text-4xl lg:text-[28px] mb-4!">
              DMO® Custom Leggings
            </h2>

            <div className="space-y-6 leading-relaxed text-left md:text-justify text-muted/80">
              <p className="mb-4!">
                Dynamic Movement Orthoses® use a specially designed compression fabric which is soft, flexible and strong. The design helps realign the body and influence both muscle tone and the proprioceptive system.
              </p>
              <p className="mb-4!">
                Our custom dynamic movement orthoses® are fully made-to-measure and are bespoke to you. It is a patient specific prescription provided by a prescribing clinician.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-[55%_45%] gap-y-3 gap-x-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3" data-aos="fade-up" data-aos-delay={index * 50}>
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Check size={12} className="text-white" strokeWidth={4} />
                  </div>
                  <span className="text-[14px] md:text-[16px] text-dark/80 tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-4 text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/20 group transition-all" data-aos="fade-up" data-aos-delay="300">
              View Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
