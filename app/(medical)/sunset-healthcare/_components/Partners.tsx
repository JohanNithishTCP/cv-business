import { ArrowUpRight } from "lucide-react";

export default function Partners() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-8">
          <div className="flex-1 lg:max-w-[70%] flex flex-col">
            <h3 data-aos="fade-up" className="text-primary font-bold mb-3 text-[14px] uppercase tracking-wider">We proudly partner with</h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium text-foreground mb-6 leading-[1.2] pr-4">
              Collaborating with trusted organizations to deliver better healthcare solutions
            </h2>
            <div data-aos="fade-up" data-aos-delay="200" className="text-muted text-[17px] leading-[1.7] text-justify space-y-4 mb-8">
              <p>
                We proudly partner with leading organizations across the healthcare industry to enhance the quality, reach, and reliability of our solutions. These strategic collaborations allow us to combine expertise, innovation, and resources—ensuring we deliver greater value to our customers.
              </p>
              {/* <p data-aos="fade-up" data-aos-delay="300">
                Together with our partners, we continue to strengthen our capabilities, expand our network, and drive better outcomes for healthcare providers and patients alike.
              </p> */}
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                See Our Network <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="300" className="w-full lg:w-[320px] shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center min-h-[220px] w-full shadow-lg">
              <img src="/sunset-healthcare/home/partner-1.png" alt="Partner 1" className="w-full h-full object-contain max-h-[160px]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div data-aos="fade-up" data-aos-delay="400" className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center h-[160px] shadow-lg">
            <img src="/sunset-healthcare/home/partner-2.png" alt="Partner 2" className="w-full h-full object-contain" />
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center h-[160px] shadow-lg">
            <img src="/sunset-healthcare/home/partner-3.png" alt="Partner 3" className="w-full h-full object-contain" />
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center h-[160px] shadow-lg">
            <img src="/sunset-healthcare/home/partner-4.png" alt="Partner 4" className="w-full h-full object-contain" />
          </div>
          <div data-aos="fade-up" data-aos-delay="700" className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center h-[160px] shadow-lg">
            <img src="/sunset-healthcare/home/partner-5.png" alt="Partner 5" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
