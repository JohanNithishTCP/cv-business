"use client";

import { useState, useRef } from "react";

const products = [
  {
    img : "/utah-medical/assets/utah-finess-plus.jpg",
    title: "Finesse®+ Electrosurgical Generators",
    desc: "Finesse®+ Electrosurgical Generators are the only systems with integrated smoke evacuation. Their unique electronic design improves results for office-based procedures of gynecologists and other medical specialties.",
  },
  {
    img : "/utah-medical/assets/utah-supra.jpg", 
    title: "Suprapubic Catheterization",
    desc: "The Supra-Foley® is now available direct from Utah Medical Products. Achieve suprapubic bladder catheterization in a single step, with confidence provided by confirmation of bladder access...",
  },
  {
    img : "/utah-medical/assets/utah-finess.png",
    title: "Cervical Balloon Ripening",
    desc: "The new CVX-Ripe® cervical ripening catheter provides simultaneous gentle pressure at the internal and external os, and within the cervical canal to improve the favorability of the cervix during induction of labor."  }, 
  {
    img: "/utah-medical/assets/utah-nutri.png",
    title: "Nutri-Cath® with ENFitTM",
    desc: "An ENFitTM Family of Enteral Only feeding catheters, extension sets, and syringes. The trusted safety and reliability of Nutri-Cath® catheters with new ENFitTM enteral only connections.",                         
  },
    {
    img: "/utah-medical/assets/utah-uterine.png",
    title: "Uterine Balloon Tamponade",
    desc : "A systematic, stepwise approach to managing postpartum hemorrhage (PPH) includes use of the BT-Cath® balloon tamponade catheter."
  },
  {
    img: "/utah-medical/assets/utah-illumination.png",
    title : "Illumination of the Cervix",
    desc : "The OptiSpec® ultra-bright LED light provides a pure white light spectrum in a small, clip-on disposable package for excellent non-colposcopic illumination of the cervix. "
  }
];

const ITEMS_PER_PAGE = 3;
const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

export default function Products() {
  const [page, setPage] = useState(0);
  const [fading, setFading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const goToPage = (i: number) => {
    if (i === page) return;
    setFading(true);
    setTimeout(() => {
      setPage(i);
      setFading(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const visibleProducts = products.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section ref={sectionRef} className="py-10 md:py-16 px-4 md:px-10 lg:px-4 bg-linear-to-b from-[#336699] from-0% via-[#336699] via-[24.52%] to-[#007FFF] to-100% text-white">
      <div className="max-w-400 mx-auto">

        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2
            className="text-2xl md:text-3xl lg:text-[30px] font-semibold"
            data-aos="fade-up"
          > 
            Our Products 
          </h2>
          <p
            className="text-base md:text-lg lg:text-xl text-white/80 mt-2"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Comprehensive medical solutions across multiple specialties
          </p>
        </div>

        {/* Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
          {visibleProducts.map((item, i) => (
            <div
              key={page * ITEMS_PER_PAGE + i}
              className="bg-[#f3f4f6] text-gray-800 rounded-2xl p-4 md:p-5"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Image Box */}
              <div className="bg-gray-200 rounded-xl h-52 md:h-64 lg:h-80 flex items-center justify-center mb-4 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-xl" />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg lg:text-xl font-medium text-[#336699] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
                {item.desc}
              </p>

              {/* CTA */}
              <span className="text-[#336699] text-sm md:text-base hover:underline cursor-pointer">
                View More
              </span>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 md:mt-10 gap-2">

                    <svg onClick={() => setPage(0)} className="cursor-pointer transition-opacity hover:opacity-80" width="65" height="10" viewBox="0 0 65 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H64.562L58.7884 9.88989H0V0Z" fill={page === 0 ? "white" : "#C2C2C2"} />
          </svg>
          <svg onClick={() => setPage(1)} className="cursor-pointer transition-opacity hover:opacity-80" width="69" height="10" viewBox="0 0 69 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.80488 0H68.3668L61.8144 9.88989H-2.89592e-05L3.80488 0Z" fill={page === 1 ? "white" : "#C2C2C2"} />
          </svg>
          {/* {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${i === page ? "w-8 bg-white" : "w-8 bg-white/40"}`}
            />
          ))} */}
        </div>

      </div>
    </section>
  );
}