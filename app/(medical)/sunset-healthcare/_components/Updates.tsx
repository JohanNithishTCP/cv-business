import { ArrowUpRight } from "lucide-react";

export default function Updates() {
  const updates = [
    { date: "March 2026", title: "Sunset Healthcare Solutions, Inc. addresses critical market gap with launch of pediatric Ray Full Face Non-Vented Mask" },
    { date: "October 2024", title: "Sunset Healthcare Solutions launches Brighter Pediatrics: innovative products for healthier kids" },
    { date: "November 2023", title: "Sunset Healthcare Solutions awarded five Enhanced Premier contracts by Capstone Health Alliance" },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#fafafa]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">

          <div data-aos="fade-right" className=" bg-white p-8 rounded-2xl border border-gray-100 shadow-sm top-24 flex flex-col">
            <h3 data-aos="fade-up" className="text-primary font-bold mb-3 text-[14px] uppercase tracking-wider">Latest Updates & Innovations</h3>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-[25px] md:text-[30px] font-medium text-foreground mb-6 leading-[1.2]">
              Stay updated with our latest innovations, partnerships, and milestones
            </h2>
            <div data-aos="fade-up" data-aos-delay="200" className="text-muted text-[17px] leading-[1.7] text-justify space-y-4 mb-8">
              <p>
                Explore our latest news and announcements, highlighting new product launches, strategic partnerships, industry recognitions, and company growth. From innovative healthcare solutions and pediatric advancements to national contracts and global collaborations, our updates reflect our ongoing commitment to improving patient care and delivering value to healthcare providers.
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Stay informed about how we continue to expand our capabilities, introduce cutting-edge technologies, and strengthen our presence across the healthcare industry.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                View All Updates <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className=" flex flex-col gap-4">
            {updates.map((update, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={100 + (idx * 100)} className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-primary font-semibold text-[11px] uppercase tracking-wider">Category</span>
                  <span className="text-gray-300">-</span>
                  <span className="text-gray-400 text-[11px] uppercase">{update.date}</span>
                </div>
                <h4 className="font-medium text-foreground text-[18px] leading-snug mb-4 max-w-2xl">
                  {update.title}
                </h4>
                <button className="text-primary font-bold text-[14px] hover:underline transition-all">
                  Read More...
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
