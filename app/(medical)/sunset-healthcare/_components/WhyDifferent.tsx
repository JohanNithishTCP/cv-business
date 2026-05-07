import React from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import DynamicVideoPlayer from "../../../_components/DynamicVideoPlayer";

export default function WhyDifferent({ video }: { video?: string | string[] }) {
  const points = [
    { title: "Here for you more than ever", desc: "Count on Sunset for tailored service and the creative solutions you need." },
    { title: "Consistent great value", desc: "Choose from the highest quality products available at a low price point." },
    { title: "Live support", desc: "Speak directly to a member of our growing and connected sales team." },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div data-aos="fade-right" data-aos-delay="200" className="w-full lg:h-[500px] relative rounded-2xl overflow-hidden border border-gray-200 aspect-video">
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h3 data-aos="fade-up" className="text-primary font-bold mb-3 text-[14px] uppercase tracking-wider">Why We're Different</h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium text-foreground mb-6 leading-[1.2]">
              Delivering value, support, and flexibility you can trust
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-muted text-[17px] leading-[1.7] text-justify mb-8">
              We are committed to providing exceptional service, high-quality products, and reliable support tailored to your needs. With a strong focus on value, accessibility, and innovation, we ensure that every solution we offer enhances your experience and meets the highest standards of care.
            </p>

            <div className="space-y-4 mb-8">
              {points.map((point, idx) => (
                <div key={idx} data-aos="fade-up" data-aos-delay={300 + (idx * 100)} className="flex gap-4">
                  <CheckCircle2 className="w-5 h-5 text-gray-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground text-[17px] mb-1">{point.title}</h4>
                    <p className="text-muted text-[16px] leading-[1.7]">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div data-aos="fade-up" data-aos-delay="800">
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                See What Sets Us Apart <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
