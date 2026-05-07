import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Placeholder */}
          <div data-aos="fade-right" className="w-full h-[350px] md:h-[450px] bg-gray-100 rounded-2xl overflow-hidden relative shadow-sm flex items-center justify-center">
            <img src="/sunset-healthcare/home/about.jpg" alt="About" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h3 data-aos="fade-up" className="text-primary font-bold mb-3 flex items-center gap-2 text-[14px] uppercase">
              About Us
            </h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium text-foreground mb-6 leading-[1.2]">
              A Trusted Leader in HME Solutions Since 2004
            </h2>

            <div data-aos="fade-up" data-aos-delay="200" className="space-y-4 text-muted text-justify text-[17px] leading-[1.7] mb-8">
              <p>
                Since 2004, Sunset Healthcare Solutions has provided highly tailored customer service and consistent great value within the HME space. The Chicago-based manufacturer and distributor of HME supplies partners with over 1600 healthcare businesses to offer specialized support, innovative solutions, and a full range of quality HME products.
              </p>
              <p data-aos-fade-up data-aos-delay="300">
                In 2020, Sunset introduced its Acute Care division, dedicated to exciting and innovative technologies. The company has ranked on the Inc. 5000's Fastest Growing Companies in America nine times and ranked among the top 20 fastest growing companies in Chicago.
              </p>
              <p data-aos-fade-up data-aos-delay="400">
                In addition to its line of HME products, Sunset offers services such as private labeling, quality testing, custom packaging, third party lab management testing (shelf life, biocompatibility, packaging, exhilarated aging) and OEM manufacturing. Sunset is ISO 13485 compliant.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                Know More About Us
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
