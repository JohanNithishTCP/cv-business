import { ArrowRight } from "lucide-react";

export default function ProductRange() {
  const products = [
    { name: "Pack+ Surgical", active: true, image: "/kimal/images/pack-1.jpg" },
    { name: "Pack+ Laparoscopic", active: false, image: "/kimal/images/pack-2.jpg" },
    { name: "Pack+ Cardiac", active: false, image: "/kimal/images/pack-3.jpg" },
    { name: "Pack+ Pacing", active: false, image: "/kimal/images/pack-4.jpg" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl" data-aos="fade-right">
            <h2 className="text-xl lg:text-3xl leading-[1.2] font-bold text-slate-800 mb-4 tracking-tight">Comprehensive Product Range for Every Clinical Need</h2>
            {/* <p className="text-base lg:text-lg font-medium leading-relaxed">
              Our portfolio includes a wide range of specialised procedure packs across multiple clinical applications, along with advanced vascular access solutions. Designed for precision, efficiency, and reliability, these solutions support healthcare professionals in delivering safe and effective patient care.
            </p> */}
          </div>
          <div className="flex flex-wrap gap-3 shrink-0" data-aos="fade-left">
            <button className="bg-[#4782d3] text-white px-5 py-2 rounded-full text-sm lg:text-base font-semibold border border-[#4782d3] cursor-pointer">Pack+ Surgical</button>
            <button className="border border-blue-200 text-[#4782d3] px-5 py-2 rounded-full text-sm lg:text-base font-semibold hover:bg-blue-50 transition-colors cursor-pointer">Pack+ Laparoscopic</button>
            <button className="border border-blue-200 text-[#4782d3] px-5 py-2 rounded-full text-sm lg:text-base font-semibold hover:bg-blue-50 transition-colors cursor-pointer">Pack+ Cardiac</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((p, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-white rounded-[1.5rem] p-4 lg:p-5 shadow-[0_4px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col group cursor-pointer hover:shadow-[0_8px_40px_rgb(0,0,0,0.09)] transition-all"
            >
              <div className="w-full aspect-square bg-[#f4f5f7] rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex items-center justify-between px-1 pb-1">
                <h4 className="font-bold text-slate-800 text-base lg:text-lg tracking-tight">{p.name}</h4>
                <div className="w-9 h-9 rounded-full bg-[#4782d3] text-white flex items-center justify-center transition-transform group-hover:scale-[1.05] shadow-md group-hover:bg-[#356ab0]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
