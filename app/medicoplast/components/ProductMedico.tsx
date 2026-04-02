"use client";

const products = [
  {
    title: "Urology",
    desc: "All functions including supply chain, value chain, project scheduling, manufacturing, services and spares, technology, R&D, etc. are integrated to give a complete solutions package.",
    image: "/medicoplast/assets/medico-urology.png",
  },
  {
    title: "Care & More",
    desc: "Artificial feeding techniques, their applications in pediatrics, and the use of rectal tubes are essential components in managing various medical conditions.",
    image: "/medicoplast/assets/medico-care.png",
  },
  {
    title: "Airway",
    desc: "Airway management includes techniques and tools to keep a patient's airway open. This involves artificial respiration methods and accessories to aid breathing.",
    image: "/medicoplast/assets/medico-lungs.png",
  },
];

export default function ProductMedico() {


  return (
    <section className="w-full bg-[#faf8f5] py-20 bg-[url('/medicoplast/assets/medico-bg.png')] bg-cover bg-center">
      <div className="max-w-380 mx-auto px-4 sm:px-6 text-center">
        
        {/* Header */}
        <h2
          data-aos="fade-up"
          className="text-2xl md:text-3xl font-semibold text-gray-800"
        >
          Our Latest Products
        </h2>

        {/* Underline */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-28 h-1 bg-[#F29100] mx-auto mt-3"
        ></div>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 text-base mt-4 max-w-xl mx-auto"
        >
          High-quality medical products designed for safe, reliable, and efficient
          patient care across multiple clinical needs.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 lg:gap-10 mt-16">

          {products.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative flex flex-col"
            >

              {/* Floating Orange Box (Replace with image later) */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#F29100] rounded-md flex items-center justify-center p-2.5">
                {/* Replace with image */}
                <img src={item.image} />
              </div>

              {/* Card */}
              <div className="bg-white rounded-xl pt-16 pb-8 px-6 flex flex-col flex-1 items-center">

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>

                <p className="text-base text-gray-600 mt-3 leading-relaxed flex-1">
                  {item.desc}
                </p>

                <button className="mt-6 cursor-pointer bg-[#F29100] hover:bg-[#f29100c6] text-white text-base font-medium px-5 py-2 rounded-md w-44">
                  View Products
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}