import Link from "next/link";
import React from "react";

const coreValues = [
  {
    title: "Right and Accurate Diagnosis",
    desc: "Clinical Assessment, Functional Assessment and Sports Specific Functional Assessment - Expert and detailed diagnosis for optimal and complete solution.",
  },
  {
    title: "Treatment Excellence",
    desc: "Our focus is not just about treating pain - but also the cause for pain. Complete rehabilitation involves getting back your agility, mobility, strength and reflexes.",
  },
  {
    title: "Personalised Protocol",
    desc: "Everybody is different, their biomechanics, their nature of injury and pain, their daily living activities, their sports and even position of play.",
  },
];

export default function About() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content - Image Placeholder */}
        <div data-aos="fade-right" className="w-full relative lg:h-[600px] aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center border border-gray-200">
          <img src="/activbase/home/about.png" alt="Personalised Protocol" className="w-full h-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">
          <span data-aos="fade-up" className="text-gray-500 font-bold text-[14px] tracking-wider mb-2 uppercase">
            ABOUT <span className="font-medium normal-case">Activbase</span>
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-[36px] font-bold mb-3 text-gray-900 leading-snug">
            Everyone Deserves To Rise Above Pain
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-[16px] text-gray-600 mb-5 leading-relaxed">
            At Activbase, we recognize the transformative power of movement and its pivotal role in promoting holistic wellness. We specialize in areas of sports injury rehabilitation, orthopedic rehabilitation, athletic conditioning, transformative sports and fitness different disciplines both healthcare and fitness lifestyle under one umbrella.
          </p>

          <h3 data-aos="fade-up" data-aos-delay="300" className="text-[20px] font-bold mb-2 text-gray-900">
            Our Core Values
          </h3>
          <p data-aos="fade-up" data-aos-delay="400" className="text-[16px] text-gray-600 mb-4">
            The principles that guide every treatment, every interaction, and every outcome.
          </p>

          <div className="space-y-3 mb-2">
            {coreValues.map((value, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={500 + idx * 100} className="flex gap-3 mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-[15px] mb-1">{value.title}</h4>
                  <p className="text-gray-600 text-[16px]">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="700" className="mt-2">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-secondary transition-colors"
            >
              Know More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <polyline points="9 5 19 5 19 15"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
