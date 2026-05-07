"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Medical Supplies",
    subtitle: "Medical Supplies",
    gradient: "from-blue-900/80 to-blue-500/60",
    img: "/medas-innovation/assets/medas-project1.png",
  },
  {
    title: "Medical Gloves",
    subtitle: "Medical Gloves",
    gradient: "from-purple-900/80 to-pink-500/60",
    img: "/medas-innovation/assets/medas-project2.jpg",
  },
  {
    title: "Urology",
    subtitle: "Urology",
    gradient: "from-yellow-700/80 to-yellow-400/60",
    img: "/medas-innovation/assets/medas-project3.png",
  },
];

export default function MedasProject() {
  return (
    <section className="relative w-full py-20 bg-[#3f5f9a] overflow-hidden">
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.svg')] bg-repeat"></div>

      <div className="relative max-w-380 mx-auto px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-10">
          
          {/* LEFT TEXT */}
          <div data-aos="fade-up">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Our Latest Projects
            </h2>
            <p className="text-white/70 mt-3 max-w-md text-base leading-[1.9]">
              Our expertise spans multiple industries, delivering high quality
              fabrics crafted for durability, functionality, & consistent performance.
            </p>
          </div>

          {/* NAV BUTTONS */}
          <div className="flex gap-3" data-aos="fade-left">
            <button className="w-12 h-12 cursor-pointer bg-white/90 hover:bg-white rounded-md flex items-center justify-center transition">
              <ArrowLeft color="black"   size={20}/>
            </button>
            <button className="w-12 h-12 cursor-pointer bg-white/90 hover:bg-white rounded-md flex items-center justify-center transition">
              <ArrowRight  color="black"  size={20}/>
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="relative rounded-xl overflow-hidden h-[480px] group"
            >
              
              {/* IMAGE */}
              <img
                src={card.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* GRADIENT OVERLAY */}
              <div
                className={`absolute inset-0 bg-[#000]/25  group-hover:from-opacity-90 group-hover:to-opacity-80 transition-opacity`}
              ></div>

              {/* CONTENT */}
              <div className="absolute bottom-6 left-6 text-white">
                {/* <p className="text-sm opacity-80">{card.subtitle}</p> */}
                <h3 className="text-lg font-semibold">{card.title}</h3>
              </div>

            </div>
          ))}
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center gap-2 mt-10">
          <div className="w-12 h-2 bg-white rounded-full"></div>
          <div className="w-12 h-2 bg-white/50 rounded-full"></div>
          <div className="w-12 h-2 bg-white/50 rounded-full"></div>
        </div>

      </div>
    </section>
  );
}