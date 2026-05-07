"use client";


export default function ProductCategories() {
  const cards = [
    {
      title: "Medical Suction Systems",
      desc: "Together with our customers in hospitals and the homecare sector, we have been developing medical suction systems for daily use on patients for over 130 years.",
      img: "/atmosmed/assets/medical_atmos.png",
    },
    {
      title: "ENT",
      desc: "We develop our solutions based on the application and together with medical professionals. Intuitive operation, safety, infection control, and efficiency are top priorities.",
      img: "/atmosmed/assets/ent_atmos.jpg",
    },
    {
      title: "Gynecology",
      desc: "More than 130 years of expertise in the development of medical technology devices, products, and solutions along with the worldwide service.",
      img: "/atmosmed/assets/gynec_atmos.png",
    },
  ];

  return (
    <section className="bg-[#f5f7fa] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Top Label */}
        <p
          data-aos="fade-up"
          className="text-lg text-black font-medium"
        >
          Medical Technology from the Black Forest
        </p>

        {/* Title */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-2xl md:text-3xl font-semibold text-[#16679b] leading-snug"
        >
          Medical suction systems and products <br />
          for ENT & GYN – Safe and Reliable
        </h2>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
              className="bg-[#16679b] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
            >
              
              {/* Image */}
              <div className="h-48 lg:h-80 w-full p-3">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              {/* Divider */}
              {/* <div className="border-t border-dashed border-white/40"></div> */}

              {/* Content */}
              <div className="p-5 text-white flex flex-col justify-between flex-1">
                
                <h3 className="font-semibold text-xl mb-3">
                  {card.title}
                </h3>

                <p className="text-base font-medium text-gray-200 leading-relaxed mb-4">
                  {card.desc}
                </p>

                <button className="text-base text-left font-semibold underline underline-offset-2 cursor-pointer">
                  View All Product Category
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Indicator */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="xs:hidden lg:flex flex justify-center items-center gap-2 mt-10"
        >
          <div className="w-10 h-1.5 bg-[#16679b] rounded-tl-md rounded-br-md cursor-pointer"></div>
          <div className="w-6 h-1.5 bg-gray-300 rounded-tl-md rounded-br-md cursor-pointer"></div>
        </div>

      </div>
    </section>
  );
}