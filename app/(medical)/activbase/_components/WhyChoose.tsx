import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Personalised Protocol",
    description: "ActivBase follows personalised physiotherapy protocols designed for each individual, even for similar conditions, ensuring accurate diagnosis and better recovery outcomes.",
    icon: "/activbase/home/icon-1.png",
  },
  {
    title: "Expert Team",
    description: "A multidisciplinary team of physiotherapists, doctors, surgeons, psychologists, fitness experts, and scientists working together for comprehensive rehabilitation care",
    icon: "/activbase/home/icon-2.png",
  },
  {
    title: "Complete and Accelerated Rehabilitation",
    description: "Structured rehabilitation programs that support faster recovery, safe return to daily activities, and confident return to sports without fear of re-injury.",
    icon: "/activbase/home/icon-3.png",
  },
  {
    title: "Advanced and Modern approach",
    description: "Technology, facility and system will always be adaptive to scientific breakthroughs in the industry.",
    icon: "/activbase/home/icon-4.png",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full py-20 bg-primary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <span data-aos="fade-up" className="text-sm font-semibold tracking-wider mb-2 block">
              Why Choose ActivBase
            </span>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold mb-4">
              Expert Physiotherapy Care in Kochi
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-white/80 text-[16px] max-w-2xl">
              Expert physiotherapy care in Kochi, delivered through advanced technology, modern facilities, and proven treatment methods ensuring effective recovery and long-lasting results.
            </p>
          </div>
          <Link
            href="#"
            data-aos="fade-up" data-aos-delay="300"
            className="flex-shrink-0 inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white hover:text-primary transition-colors text-sm font-semibold px-6 py-3 rounded-md"
          >
            Learn More Active Base
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="19" x2="19" y2="5"></line>
              <polyline points="9 5 19 5 19 15"></polyline>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 100} className="border border-white/20 pt-8 px-8 pb-30 flex flex-col h-full bg-transparent hover:bg-white/5 transition-colors relative overflow-hidden">
              <h3 className="font-bold text-[20px] mb-4 min-h-[56px] leading-snug pr-4">{feature.title}</h3>
              <div className="w-[85%] h-px bg-white/30 mb-8"></div>
              <p className="text-[16px] text-white/90 leading-relaxed">
                {feature.description}
              </p>

              {/* Icon pinned to bottom right per request */}
              <div className="absolute bottom-0 left-0 w-[80px] h-[80px] bg-white flex items-center justify-center">
                <div className="[&>svg]:w-8 [&>svg]:h-8">
                  <img src={`${feature.icon}`} alt="Personalised Protocol" className="w-12 h-12" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
