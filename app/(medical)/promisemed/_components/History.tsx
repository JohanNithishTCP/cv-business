"use client";


const timeline = [
  {
    year: "2013",
    title: "Entered Diabetes Care Market",
    desc: [
      "2013.01 Promisemed was founded.",
      "2013.07 Obtained CE certificate and ISO 13485",
      "2013.07 Launched pen needles and entered diabetes care field",
    ],
    img: "/promisemed/h1.png",
  },
  {
    year: "2014",
    title: "Expansion & Approvals",
    desc: [
      "2014.03 Launched safety lancets",
      "2014.08 Obtained China manufacturing license",
    ],
    img: "/promisemed/h2.png",
  },
  {
    year: "2015",
    title: "Launched Safety Pen Needles",
    desc: [
      "2015.09 Recognized as a national high-tech enterprise",
      "2015.11 Launched safety pen needles",
    ],
    img: "/promisemed/h3.png",
  },
  {
    year: "2018",
    title: "Innovation & R&D Growth",
    desc: [
      "2018.09 Launched heel blood lancets",
      "2018.10 Recognized as a state enterprise research institute",
      "2018.12 Launched the 2nd generation safety",
    ],
    img: "/promisemed/h4.png",
  },
];

export default function History() {
  return (
    <section className="w-full bg-linear-to-t from-[#009B43] to-[#2353A3] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-cover bg-[url('/promisemed/grid.jpg')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-10 items-start">
          {/* LEFT CONTENT */}
          <div data-aos="fade-up" className="space-y-6 py-20">

            <h2 className="text-2xl md:text-[32px] font-medium leading-snug">
              Our Journey of Innovation
            </h2>

            <p className="text-base opacity-80 leading-relaxed">
              Founded in 2013, Promisemed has steadily evolved into a global
              medical device company through continuous innovation, key
              certifications, and strategic expansion. From launching diabetes
              care products to entering infusion, oncology, and interventional
              fields, we have consistently advanced our capabilities. With
              internationally recognized standards and ongoing R&D investment,
              we continue to grow and deliver impactful healthcare solutions
              worldwide.
            </p>
            <div className="w-60 flex-1 sm:flex-none p-0.5 rounded-full bg-linear-to-r from-[#009B43] to-[#2353A3]">
              <button className="w-full px-6 py-3 rounded-full bg-white text-[#333333] text-[18px] font-semibold hover:bg-[#2353A3] hover:text-white transition text-center cursor-pointer">
                Specification
              </button>
            </div>
          </div>

          {/* TIMELINE */}
          {timeline.map((item, i) => (
            <div
              data-aos="fade-up"
              key={i}
              className="flex flex-col h-full border-l border-white/30 pl-6 lg:py-20 ">
              {/* TOP CONTENT */}
              <div>
                <h3 className="text-[32px] font-medium">{item.year}</h3>
                <h4 className="text-[22px] font-semibold mt-2">{item.title}</h4>

                <div className="text-base opacity-80 leading-relaxed mt-2">
                  {item.desc.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              </div>

              {/* IMAGE (pushed to same level) */}
              <div className="mt-auto pt-6">
                <div className="bg-white rounded-xl p-4 w-full h-50 relative mb-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
